// External Packages
import React from "react";
import { useTheme } from "styled-components";

// Internal Components
import BlurBG from "../../reusables/blurs/BlurBG";
import ProgressBar, {
  NOTICE_POSITIONING,
} from "../../reusables/progress/ProgressBarUnit";
import { ItemHV2, ItemVV2, SpanV2 } from "../../reusables/SharedStylingV2";
import Spinner, { SPINNER_TYPE } from "../../reusables/spinners/SpinnerUnit";

// Internal Configs
import GLOBALS from "../../../config/globals";

// Interfaces
interface LoaderSpinnerPropsI {
  type?: number;
  overlay?: number;
  blur?: number;
  title?: string;
  width?: string;
  titleColor?: string;
  spinnerEnabled?: boolean;
  spinnerSize?: number;
  spinnerColor?: string;
  spinnerType?: number;
  progressEnabled?: boolean;
  progressPositioning?: number;
  progressColor?: string;
  progressVerticalGap?: string;
  progress?: number;
  progressNotice?: string;
}

// Constants
export const LOADER_TYPE = {
  STANDALONE: 1,
  STANDALONE_MINIMAL: 2,
  SEAMLESS: 3,
};

export const LOADER_OVERLAY = {
  NORMAL: 1,
  ONTOP: 2,
};

export const PROGRESS_POSITIONING = {
  TOP: 1,
  BOTTOM: 2,
};

export const LOADER_SPINNER_TYPE = SPINNER_TYPE;

// Create Progress Bar
const LoaderSpinner = ({
  type = LOADER_TYPE.STANDALONE,
  overlay = LOADER_OVERLAY.NORMAL,
  blur = 0,
  title = null,
  titleColor = null,
  width = "auto",
  spinnerEnabled = true,
  spinnerSize = 42,
  spinnerColor = GLOBALS.COLORS.PRIMARY_PINK,
  spinnerType = LOADER_SPINNER_TYPE.PROCESSING,
  progressEnabled = false,
  progressPositioning = PROGRESS_POSITIONING.TOP,
  progressColor = GLOBALS.COLORS.PRIMARY_PINK,
  progressVerticalGap = "40px",
  progress = 0,
  progressNotice = null,
}: LoaderSpinnerPropsI) => {
  const theme = useTheme();

  return (
    <ItemVV2
      position={overlay == LOADER_OVERLAY.ONTOP ? "absolute" : "relative"}
      alignSelf={overlay == LOADER_OVERLAY.ONTOP ? "stretch" : "center"}
      flex="initial"
      top="0"
      right="0"
      bottom="0"
      left="0"
      zIndex="99999999"
    >
      {overlay === LOADER_OVERLAY.ONTOP && <BlurBG blur={blur} />}

      <ItemVV2
        flex="initial"
        flexDirection={
          progressPositioning == PROGRESS_POSITIONING.TOP
            ? "column"
            : "column-reverse"
        }
        alignSelf={type == LOADER_TYPE.SEAMLESS ? "auto" : "center"}
        width={type == LOADER_TYPE.STANDALONE_MINIMAL ? "auto" : width}
        padding={
          type == LOADER_TYPE.SEAMLESS
            ? "0px"
            : GLOBALS.ADJUSTMENTS.PADDING.DEFAULT
        }
        borderRadius={
          type == LOADER_TYPE.SEAMLESS
            ? "0px"
            : GLOBALS.ADJUSTMENTS.RADIUS.SMALL
        }
        border={
          type == LOADER_TYPE.SEAMLESS
            ? "transparent"
            : `1px solid ${theme.default.border}`
        }
        background={type == LOADER_TYPE.SEAMLESS ? "initial" : theme.default.bg}
      >
        {progressEnabled && (
          <ItemVV2
            flexDirection={
              progressPositioning == PROGRESS_POSITIONING.TOP
                ? "column"
                : "column-reverse"
            }
          >
            <ProgressBar
              percent={progress}
              color={progressColor}
              notice={progressNotice}
              noticePositioning={
                progressPositioning == PROGRESS_POSITIONING.TOP
                  ? NOTICE_POSITIONING.BOTTOM
                  : NOTICE_POSITIONING.TOP
              }
            />
            {(title || spinnerEnabled) && (
              <ItemVV2 margin={`0 0 ${progressVerticalGap} 0`}></ItemVV2>
            )}
          </ItemVV2>
        )}

        <ItemHV2>
          {spinnerEnabled && (
            <Spinner
              size={spinnerSize}
              color={`${spinnerColor}`}
              type={spinnerType}
            />
          )}

          {title && (
            <SpanV2
              padding={titleColor ? "0 0 0 10px" : "10px"}
              fontWeight="500"
              color={titleColor ?? theme.default.color}
            >
              {title}
            </SpanV2>
          )}
        </ItemHV2>
      </ItemVV2>
    </ItemVV2>
  );
};
export default LoaderSpinner;
