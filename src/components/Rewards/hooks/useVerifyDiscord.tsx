// React and other libraries
import { useEffect, useState, useCallback } from "react";

// Third-party libraries
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";

// hooks;
import appConfig from "../../../config";
import {
  useClaimRewardsActivity,
  useGetUserRewardsDetails,
} from "../../../queries";

// helpers
import { walletToFullCAIP10 } from "../../../helpers/web3helper";
import { useSignMessageWithEthereum } from "./useSignMessage";

type UseDiscordActivityVerificationProps = {
  activityTypeId: string;
  refetchActivity: () => void;
  setErrorMessage: (errorMessage: string) => void;
};

const useVerifyDiscord = ({
  activityTypeId,
  refetchActivity,
  setErrorMessage,
}: UseDiscordActivityVerificationProps) => {
  const token = localStorage.getItem("access_token");

  const [discordActivityStatus, setDiscordActivityStatus] = useState<
    "Claimed" | null
  >(null);
  const [verifyingDiscord, setVerifyingDiscord] = useState(
    token ? true : false,
  );
  const [updatedId, setUpdatedId] = useState<string | null>(null);

  const { universalAddress } = usePushWalletContext();
  const { signMessage } = useSignMessageWithEthereum();

  const account = universalAddress?.address;
  const caip10WalletAddress = walletToFullCAIP10(
    universalAddress?.address as string,
    universalAddress?.chainId,
  );

  useEffect(() => {
    setErrorMessage("");
  }, [setErrorMessage]);

  const { refetch: refetchUserDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const { mutate: claimRewardsActivity } = useClaimRewardsActivity();

  const handleDiscordVerification = (userId: string) => {
    setUpdatedId(userId);
    setErrorMessage("");
    setVerifyingDiscord(true);

    handleConnect(userId);
  };

  const handleConnect = (userId: string) => {
    const clientID = appConfig.discord_client_id;
    const baseURL = window.location.origin;
    const redirectURI = `${baseURL}/discord/verification`;
    const scope = "identify email guilds.members.read";

    const authURL = `https://discord.com/api/oauth2/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=token&scope=${scope}`;

    const newWindow = window.open(authURL, "_blank");

    const checkAuth = setInterval(() => {
      if (newWindow?.closed) {
        clearInterval(checkAuth);
        handleVerify(userId);
      }
    }, 1000);
  };

  const handleVerify = useCallback(
    async (userId: string) => {
      const token = localStorage.getItem("access_token");
      const username = localStorage.getItem("username");

      if (username && token) {
        const { signature, messageToSend } = await signMessage({
          discord: username,
          discord_token: token,
        });
        if (!signature) {
          setErrorMessage("Failed to sign message");
          setVerifyingDiscord(false);
          throw new Error("Failed to sign message");
        }

        localStorage.removeItem("access_token");
        localStorage.removeItem("username");
        localStorage.removeItem("expires_in");

        claimRewardsActivity(
          {
            userId: updatedId || (userId as string),
            activityTypeId,
            data: messageToSend,
            verificationProof: signature,
          },
          {
            onSuccess: (response) => {
              if (response.status === "COMPLETED") {
                setDiscordActivityStatus("Claimed");
                refetchActivity();
                refetchUserDetails();
                setVerifyingDiscord(false);
                setErrorMessage("");
              }
            },
            onError: (error: any) => {
              console.log("Error in creating activity", error);
              setVerifyingDiscord(false);
              if (error.name) {
                setErrorMessage(error.response.data.error);
              }
            },
          },
        );
      }
    },
    [account],
  );

  return {
    verifyingDiscord,
    discordActivityStatus,
    handleDiscordVerification,
  };
};

export { useVerifyDiscord };
