// react and other libraries
import { useEffect, useState } from "react";

// third party libraries
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";

// helpers
import {
  useClaimRewardsActivity,
  useGetUserRewardsDetails,
} from "../../../queries";
import { walletToFullCAIP10 } from "../../../helpers/web3helper";
import { useSignMessageWithEthereum } from "./useSignMessage";
import { WalletChainType } from "../utils/wallet";

export type UseVerifyRewardsParams = {
  activityTypeId: string;
  setErrorMessage: (errorMessage: string) => void;
  refetchActivity: () => void;
  activityTypeIndex?: string;
  setCurrentLevel?: (currentLevel) => void;
  onStartClaim?: () => void;
};

const useVerifyRewards = ({
  activityTypeId,
  setErrorMessage,
  refetchActivity,
  activityTypeIndex,
  setCurrentLevel,
  onStartClaim,
}: UseVerifyRewardsParams) => {
  const [verifyingRewards, setVerifyingRewards] = useState(false);
  const [rewardsActivityStatus, setRewardsActivityStatus] = useState<
    "Claimed" | "Pending" | null
  >(null);

  const [updatedId, setUpdatedId] = useState<string | null>(null);

  const { universalAddress } = usePushWalletContext();
  const { signMessage } = useSignMessageWithEthereum();

  const caip10WalletAddress = walletToFullCAIP10(
    universalAddress?.address as string,
    universalAddress?.chainId,
    universalAddress?.chain,
  );

  useEffect(() => {
    setErrorMessage("");
  }, [setErrorMessage]);

  const handleRewardsVerification = (userId: string) => {
    setUpdatedId(userId);
    setVerifyingRewards(true);

    // Signal that we're starting the claim process
    if (onStartClaim) {
      onStartClaim();
    }

    handleVerify(userId);
  };

  const { refetch: refetchUserDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const { mutate: claimRewardsActivity } = useClaimRewardsActivity();

  const handleVerify = async (userId: string | null) => {
    setErrorMessage("");

    // Check if the chain is Sepolia or Ethereum
    const isSupportedChain =
      universalAddress?.chainId == WalletChainType.SEPOLIA ||
      universalAddress?.chainId == WalletChainType.ETH;

    let verificationProof = "abcd";
    let messageToSend = "";

    if (isSupportedChain) {
      const {
        signature,
        messageToSend: signedMessage,
        error,
      } = await signMessage();
      if (error || !signature) {
        console.log(error);
        setErrorMessage(error);
        setVerifyingRewards(false);
        return;
      }

      verificationProof = signature;
      messageToSend = signedMessage;
    }

    claimRewardsActivity(
      {
        userId: updatedId || (userId as string),
        activityTypeId,
        data: messageToSend,
        verificationProof,
      },
      {
        onSuccess: (response) => {
          if (response.status === "COMPLETED") {
            setRewardsActivityStatus("Claimed");
            if (setCurrentLevel) {
              setCurrentLevel(activityTypeId);
            }
            refetchActivity();
            refetchUserDetails();
            setVerifyingRewards(false);
          }
          if (response.status === "PENDING") {
            setRewardsActivityStatus("Pending");
            refetchActivity();
            setVerifyingRewards(false);
          }
        },
        onError: (error: any) => {
          console.log("Error in creating activity", error);
          setVerifyingRewards(false);
          if (error.name) {
            setErrorMessage(error.response.data.error);
          }
        },
      },
    );
  };

  return {
    verifyingRewards,
    rewardsActivityStatus,
    handleRewardsVerification,
  };
};

export { useVerifyRewards };
