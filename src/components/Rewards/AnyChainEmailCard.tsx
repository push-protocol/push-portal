import React, { FC, useEffect, useMemo, useState } from "react";

import {
  Box,
  Button,
  Link,
  Multiplier,
  ProgressBar,
  RewardsBell,
  RewardsStar,
  RewardsStarGradient,
  Skeleton,
  Text,
} from "../../../src/blocks";
import { css } from "styled-components";

import { RewardsActivityTitle } from "./RewardsActivityTitle";
import EmailImg from "../../../static/assets/website/rewards/email-app.webp";
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";
import { useRewardsContext } from "../../context/rewardsContext";
import { useFilteredActivities } from "./hooks/useFilteredActivities";
import { useGetUserXP, UsersActivity } from "../../queries";
import { ActivityButton } from "./ActivityButton";
import { useRefreshUserXP } from "./hooks/useRefreshUserXP";
import { device } from "../../config/globals";

const numberOfLevels = 50;

export type AnyChainEmailCardProps = {
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
};

const AnyChainEmailCard: FC<AnyChainEmailCardProps> = ({ setErrorMessage }) => {
  const { universalAddress } = usePushWalletContext();
  const account = universalAddress?.address as string;
  const { isLocked } = useRewardsContext();
  const [currentLevel, setCurrentLevel] = useState(null);
  const [processingClaim, setProcessingClaim] = useState(false);
  const [claimedLevelInfo, setClaimedLevelInfo] = useState({
    level: null,
    activityType: null,
    isProcessing: false,
  });

  // Get user activities and XP data
  const {
    filteredActivities: emailActivities,
    refetchFilteredActivities,
    userDetails,
    isLoadingActivities,
    isUserActivityLoading,
    hasUserActivityLoading,
    userActivity,
    refetch,
  } = useFilteredActivities(account, ["email:xp"], "startsWith");

  const { data: allXPData, refetch: refetchXPData } = useGetUserXP({
    userId: userDetails?.userId as string,
  });

  // Get XP details
  const emailXP = allXPData?.xpData.email ?? 0;
  const xpLevels = allXPData?.xpForNextLevelMap || {};

  const nextUnclaimedLevel = useMemo(() => {
    if (!userActivity || hasUserActivityLoading !== "success") {
      return null;
    }

    // If we're processing a claim, return the level we're currently claiming
    if (processingClaim && claimedLevelInfo) {
      return claimedLevelInfo.level;
    }

    for (let i = 1; i <= 50; i++) {
      const key = `email:xp_level_${i}`;
      if (!userActivity[key] || userActivity[key].error === "Not Found") {
        return i;
      }
    }
    return 51; //if all 1 - 50 is claimed
  }, [userActivity, processingClaim, claimedLevelInfo, currentLevel]);

  const xpNeededForCurrentLevel = nextUnclaimedLevel
    ? xpLevels[nextUnclaimedLevel]
    : null;

  const levelToPick = emailActivities?.find(
    (item) => item?.index === `email:xp-level-${nextUnclaimedLevel}`,
  );

  const usersSingleActivity =
    (userActivity?.[levelToPick?.activityType] as UsersActivity) ?? null;

  const { isPending } = useRefreshUserXP();

  const isReadyToClaim = emailXP >= xpNeededForCurrentLevel;
  const isEnded = nextUnclaimedLevel > numberOfLevels;
  const isLoading =
    isLoadingActivities || (isPending && Boolean(universalAddress));

  const startClaimProcess = (level, activityType) => {
    setClaimedLevelInfo((prevInfo) => ({
      ...prevInfo,
      level,
      activityType,
      isProcessing: true,
    }));
    setProcessingClaim(true);
  };

  useEffect(() => {
    if (processingClaim && claimedLevelInfo && currentLevel) {
      handleVerification();
    }
  }, [claimedLevelInfo, currentLevel]);

  const resetAndRefetch = async () => {
    // Reset all state
    setProcessingClaim(false);
    setCurrentLevel(null);
    setClaimedLevelInfo({
      level: null,
      activityType: null,
      isProcessing: false,
    });

    // Trigger all refetches in parallel
    await Promise.all([
      refetch(),
      refetchXPData(),
      refetchFilteredActivities(),
    ]);

    console.log("Reset and refresh completed");
  };

  const handleVerification = async () => {
    if (!claimedLevelInfo || !claimedLevelInfo.activityType) {
      setProcessingClaim(false);
      return;
    }

    try {
      const activityKey = claimedLevelInfo.activityType;

      console.log("Verification status:", {
        activityKey,
        claimedInfo: claimedLevelInfo,
      });

      setTimeout(async () => {
        await resetAndRefetch();
      }, 2000);
    } catch (error) {
      console.error("Verification error:", error);
      setProcessingClaim(false);
      setClaimedLevelInfo({
        level: null,
        activityType: null,
        isProcessing: false,
      });
    }
  };

  return (
    <Skeleton
      isLoading={isLoadingActivities}
      borderRadius="radius-md"
      width="100%"
      css={css`
        display: flex;
        flex: 1;
      `}
    >
      <Box
        backgroundColor="surface-primary"
        padding="spacing-sm spacing-md"
        borderRadius="radius-md"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        css={css`
          flex: 1;
        `}
      >
        <Box>
          <Box
            display="flex"
            flexDirection={{ initial: "row", ml: "column-reverse" }}
            alignItems={{ initial: "center", ml: "flex-start" }}
            gap="spacing-md"
            justifyContent="space-between"
            width="100%"
          >
            <Box>
              <Link to="https://email.push.org" target="_blank">
                <Text
                  variant="h4-semibold"
                  color="text-primary"
                  css={css`
                    &:hover {
                      color: var(--text-brand-medium) !important;
                    }
                  `}
                >
                  Any Chain Email
                </Text>
              </Link>
              <RewardsActivityTitle
                activityTitle="Visit [email.push.org](https://email.push.org) and send or receive emails to level up."
                isLoading={false}
                variant="bm-regular"
                color="text-tertiary"
              />

              <Skeleton isLoading={isLoading} width="fit-content">
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  margin="spacing-md spacing-none spacing-none spacing-none"
                >
                  {isLocked && (
                    <Button size="small" variant="tertiary" disabled>
                      Locked
                    </Button>
                  )}

                  {!isLocked && isEnded && (
                    <Button variant="tertiary" size="small" disabled>
                      Ended
                    </Button>
                  )}

                  {!isLocked && !isReadyToClaim && !isEnded && (
                    <Button variant="tertiary" size="small" disabled>
                      Level Up to Claim
                    </Button>
                  )}

                  {!isLocked && isReadyToClaim && !isEnded && (
                    <ActivityButton
                      userId={userDetails?.userId}
                      activityTypeId={levelToPick?.id}
                      activityType={levelToPick?.activityType}
                      refetchActivity={refetch}
                      setErrorMessage={setErrorMessage}
                      usersSingleActivity={usersSingleActivity}
                      isLoadingActivity={isUserActivityLoading}
                      currentLevel={currentLevel}
                      setCurrentLevel={setCurrentLevel}
                      label={"Claim"}
                      onStartClaim={() => {
                        const level = nextUnclaimedLevel;
                        const activityType = levelToPick?.activityType;
                        if (level && activityType) {
                          startClaimProcess(level, activityType);
                        }
                      }}
                    />
                  )}
                </Box>
              </Skeleton>
            </Box>

            <Box
              width={{ initial: "fit-content", ml: "200px" }}
              display="flex"
              css={css`
                margin: var(--spacing-sm) var(--spacing-none)
                  var(--spacing-none) var(--spacing-none);
                @media ${device.mobileL} {
                  margin: var(--spacing-sm) auto;
                }
              `}
            >
              <img
                src={EmailImg}
                style={{ width: "auto", height: "188px", objectFit: "contain" }}
              />
            </Box>
          </Box>

          <Box display="flex" flexDirection="column" gap="spacing-xs">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              margin="spacing-md spacing-none spacing-none spacing-none"
            >
              <Box
                display="flex"
                flexDirection="row"
                gap="spacing-xxs"
                backgroundColor="surface-secondary"
                alignItems="center"
                borderRadius="radius-xxs"
                padding="spacing-xxxs"
              >
                <Text>
                  {isEnded
                    ? "Max Level Reached"
                    : (levelToPick?.activityTitle ?? "No activity available")}
                </Text>
                <RewardsStar color="icon-brand-medium" />
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                gap="spacing-xxs"
                alignItems="center"
              >
                {levelToPick?.multiplier > 1 && (
                  <>
                    <Multiplier width={23} height={25} />
                    <Text variant="bm-semibold" color="text-state-success-bold">
                      {levelToPick?.multiplier}x
                    </Text>
                  </>
                )}

                <br />

                <RewardsBell width={23} height={25} />
                <Text variant="bm-semibold">{levelToPick?.points ?? "0"}</Text>
              </Box>
            </Box>

            <ProgressBar
              progress={(emailXP as number) || null}
              max={xpNeededForCurrentLevel}
              size="large"
              progressIcon={<RewardsStarGradient size={35} />}
              progressIconText={`${emailXP}XP`}
            />
          </Box>
        </Box>
      </Box>
    </Skeleton>
  );
};

export default AnyChainEmailCard;
