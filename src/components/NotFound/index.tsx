// React + Web3 Essentials
import React from "react";
import { useNavigate } from "react-router-dom";

// External Packages
import styled from "styled-components";

// Internal Configs
import GLOBALS from "../../config/globals";
import { Button, ErrorGraphic, Text } from "../../blocks";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <PageNotFoundWrapper>
        <ErrorGraphic alt="Page not found" />
        <PageNotFoundSubContainer>
          <Text variant="h1-bold" color="text-primary" textAlign="center">
            Oops...
          </Text>
          <Text variant="h3-semibold" color="text-primary" textAlign="center">
            The page you're trying to reach doesn't exist.
          </Text>
        </PageNotFoundSubContainer>
        <Button
          variant="primary"
          size="large"
          onClick={() => navigate("/rewards")}
        >
          Go to Home
        </Button>
      </PageNotFoundWrapper>
    </NotFoundContainer>
  );
};

export default NotFound;

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px);
  width: 80%;
  border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  padding: 20px;
  box-sizing: border-box;
  margin: auto;
`;

const OopsTitle = styled.p`
  font-size: 48px;
  font-weight: 500;
  margin: 0;
  text-align: center;
`;

const PageNotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

const PageNotFoundImg = styled.img`
  width: 355.7px;
  height: 205.79px;
  border-radius: 16px;
  margin: 0 auto;
`;

const PageNotFoundText = styled.p`
  font-size: 24px;
  font-weight: 400;
  width: 100%;
  text-align: center;
`;

const PageNotFoundSubContainer = styled.div`
  gap: 16px;
`;
