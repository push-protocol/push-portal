import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

import { device } from "../../config/globals";

import RewardsDashboard from "./RewardsDashboard";
import RewardsContent from "./RewardsContent";
import ReferralSection from "./ReferralSection";
import RewardsActivities from "./RewardsActivities";
import RewardsFooter from "./RewardsFooter";
import { useCreateRewardsUser } from "./hooks/useCreateRewardsUser";
import { Alert } from "../../blocks";
import { useRewardsContext } from "../../context/rewardsContext";

const Rewards: FC = () => {
  // //fetch ref from url
  const [searchParams] = useSearchParams();

  const ref = searchParams.get("ref");
  if (ref) sessionStorage.setItem("ref", ref);

  const {
    errorMessage,
    autoCreateUser,
    shouldRun,
    handleCreateUser,
    resetState,
  } = useCreateRewardsUser();
  const { isVerifyClicked } = useRewardsContext();

  useEffect(() => {
    if (isVerifyClicked) return;
    autoCreateUser();
  }, [shouldRun]);

  return (
    <RewardsWrapper>
      {errorMessage && (
        <Alert
          heading={errorMessage}
          variant="error"
          actionText="Please Try Again"
          onAction={() => {
            resetState();
            handleCreateUser({});
          }}
        />
      )}
      <RewardsDashboard />

      <RewardsActivities />

      <RewardsContent />

      <ReferralSection />

      <RewardsFooter />
    </RewardsWrapper>
  );
};

export default Rewards;

const RewardsWrapper = styled.div`
  width: 1200px;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;

  @media ${device.laptopM} {
    width: calc(100% - 32px);
  }

  @media ${device.mobileL} {
    width: calc(100% - 32px);
    overflow-x: hidden;
  }
`;
