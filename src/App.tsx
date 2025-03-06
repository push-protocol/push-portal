import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { PushWalletProvider, CONSTANTS } from "@pushprotocol/pushchain-ui-kit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ThemeProviderWrapper } from "./context/themeContext";
import { AccountProvider } from "./context/accountContext";
import { RewardsContextProvider } from "./context/rewardsContext";

import RewardsPage from "./pages/RewardsPage";
import { blocksColors, getBlocksCSSVariables } from "../src/blocks";
import LeaderBoardPage from "./pages/LeaderBoardPage";

const Home = () => <h1 style={{ color: "black" }}>Home Page</h1>;

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.header.bg} !important;
    padding-right: 0 !important;
  }
  :root{

    /* deprecated */
    /* Spaces */
    --s0: 0px;
    --s1: 4px;
    --s2: 8px;
    --s3: 12px;
    --s4: 16px;
    --s5: 20px;
    --s6: 24px;
    --s7: 28px;
    --s8: 32px;
    --s9: 36px;
    --s10: 40px;
    --s11: 44px;
    --s12: 48px;
    --s13: 52px;
    --s14: 56px;
    --s15: 60px;
    --s16: 64px;
    --s17: 68px;
    --s18: 72px;
    --s19: 76px;
    --s20: 80px;
    --s21: 84px;
    --s22: 88px;
    --s23: 92px;
    --s24: 96px;
    --s25: 100px;
    // TODO: Add more as needed

    /* deprecated */
    /* Border Radius */
    --r0: 0px;
    --r1: 4px;
    --r2: 8px;
    --r3: 12px;
    --r4: 16px;
    --r5: 20px;
    --r6: 24px;
    --r7: 28px;
    --r8: 32px;
    --r9: 36px;
    --r10: 40px;
    // TODO: Add more as needed

    /* deprecated */
    /* Colors */
    ${Object.entries(blocksColors)
      .map(([colorName, code]) => `--${colorName}: ${code};`)
      .join("")}

    /* Font Family */
      --font-family: 'FK Grotesk Neue';

    /* New blocks theme css variables*/
    ${(props) => getBlocksCSSVariables(props.theme.blocksTheme)}
  }

`;

const queryClient = new QueryClient({});

function App() {
  return (
    <ThemeProviderWrapper>
      <PushWalletProvider env={CONSTANTS.ENV.DEV}>
        <AccountProvider>
          <RewardsContextProvider>
            <QueryClientProvider client={queryClient}>
              {/* Global style */}
              <GlobalStyle />

              <Router>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/rewards" element={<RewardsPage />} />
                  <Route
                    path="/rewards/leaderboard"
                    element={<LeaderBoardPage />}
                  />
                  <Route
                    path="/rewards/leaderboard-s1"
                    element={<LeaderBoardPage />}
                  />
                </Routes>
              </Router>
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </RewardsContextProvider>
        </AccountProvider>
      </PushWalletProvider>
    </ThemeProviderWrapper>
  );
}

export default App;
