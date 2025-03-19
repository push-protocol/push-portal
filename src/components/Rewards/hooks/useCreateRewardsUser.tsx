import { useState, useRef, useCallback, useEffect } from "react";
import {
  useCreateRewardsUser as useCreateRewardsUserQuery,
  useGetUserRewardsDetails,
} from "../../../queries/hooks";
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";
import { walletToFullCAIP10 } from "../../../helpers/web3helper";
import { UserRewardsDetailResponse } from "../../../queries";
import { useRewardsContext } from "../../../context/rewardsContext";
import { useSignMessageWithEthereum } from "./useSignMessage";
import { WalletChainType } from "../utils/wallet";

const useCreateRewardsUser = () => {
  const hasRun = useRef(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { universalAddress } = usePushWalletContext();
  const { setIsVerifyClicked } = useRewardsContext();

  const { signMessage } = useSignMessageWithEthereum();

  const account = universalAddress?.address as string;
  const isWalletConnected = Boolean(universalAddress?.address);
  const fullCaip10WalletAddress = walletToFullCAIP10(
    account,
    universalAddress?.chainId,
  );

  const {
    data: userDetails,
    status,
    refetch,
  } = useGetUserRewardsDetails({
    caip10WalletAddress: fullCaip10WalletAddress,
  });

  const { mutate: createUser } = useCreateRewardsUserQuery();

  const handleCreateUser = async ({
    onSuccessCallback,
  }: {
    onSuccessCallback?: (user: UserRewardsDetailResponse) => void;
  }) => {
    if (hasRun.current || userDetails) return;
    hasRun.current = true;

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
        return;
      }

      verificationProof = signature;
      messageToSend = signedMessage;
    }

    createUser(
      {
        userWallet: fullCaip10WalletAddress,
        verificationProof,
        refPrimary: sessionStorage.getItem("ref"),
        data: messageToSend,
      },
      {
        onSuccess: (data) => {
          setErrorMessage(null);
          refetch();
          onSuccessCallback?.(data);
        },
        onError: (err) => {
          console.error("Error", err);
          setErrorMessage("Failed to create user");
        },
      },
    );
  };

  const autoCreateUser = () => {
    if (userDetails) return;
    if (!isWalletConnected || status !== "error") return;

    handleCreateUser({});
  };

  /** Reset function when user logs out or switches accounts */
  const resetState = useCallback(() => {
    hasRun.current = false;
    setErrorMessage(null);
    setIsVerifyClicked(false);
  }, []);

  useEffect(() => {
    if (!isWalletConnected) resetState();
  }, [isWalletConnected]);

  return {
    handleCreateUser,
    errorMessage,
    shouldRun: !hasRun.current && isWalletConnected && status === "error",
    autoCreateUser,
    userDetails,
  };
};

export { useCreateRewardsUser };
