"use client";

import Head from "next/head";
import styled from "styled-components";

import dynamic from "next/dynamic";

const Rewards = dynamic(() => import("../components/Rewards/Rewards"), {
  ssr: false,
});

const RewardsHeader = dynamic(
  () => import("../components/Rewards/RewardsHeader"),
  {
    ssr: false,
  },
);

const RewardsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Push Chain Rewards S2</title>
        <meta
          name="description"
          content="Explore Push Chain Devnet, complete quests, bang out multipliers, and earn airdrops."
        />

        <meta property="og:url" content="https://portal.push.org/rewards" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Push Chain Rewards S2" />
        <meta
          property="og:description"
          content="Explore Push Chain Devnet, complete quests, bang out multipliers, and earn airdrops."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/1e44c2ab-7347-4dca-836e-2d966e61b2a7.png?token=i5CdVQvFqBvXUEZmwRd4zFVSWAO4TjyuIalB6f0FYdQ&height=630&width=1200&expires=33278338970"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="portal.push.org" />
        <meta
          property="twitter:url"
          content="https://portal.push.org/rewards"
        />
        <meta name="twitter:title" content="Push Chain Rewards S2" />
        <meta
          name="twitter:description"
          content="Explore Push Chain Devnet, complete quests, bang out multipliers, and earn airdrops."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/1e44c2ab-7347-4dca-836e-2d966e61b2a7.png?token=i5CdVQvFqBvXUEZmwRd4zFVSWAO4TjyuIalB6f0FYdQ&height=630&width=1200&expires=33278338970"
        />
      </Head>
      <RewardsWrapper>
        <RewardsHeader />
        <Rewards />
      </RewardsWrapper>
    </>
  );
};

export default RewardsPage;

const RewardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "FK Grotesk Neu", Helvetica, sans-serif;
`;
