import { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import { IconProps } from "../Icons.types";

const Leaderboard: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="KebabMenuVertical"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#clip0_17536_25205)">
            <path
              d="M5.12915 18.75H18.871C19.0474 18.75 19.2181 18.6879 19.3532 18.5746C19.4883 18.4613 19.5791 18.304 19.6098 18.1303L21.7379 8.38031C21.7646 8.21987 21.7385 8.05508 21.6634 7.9108C21.5883 7.76652 21.4683 7.65056 21.3215 7.58041C21.1748 7.51026 21.0092 7.48973 20.8498 7.52189C20.6903 7.55406 20.5457 7.63719 20.4376 7.75875L16.5001 12L12.6807 3.43594C12.6206 3.30605 12.5246 3.19608 12.404 3.119C12.2834 3.04193 12.1432 3.00098 12.0001 3.00098C11.857 3.00098 11.7168 3.04193 11.5962 3.119C11.4756 3.19608 11.3796 3.30605 11.3195 3.43594L7.50009 12L3.56259 7.75875C3.45474 7.63542 3.30948 7.55079 3.149 7.5178C2.98853 7.48481 2.82166 7.50528 2.67391 7.57607C2.52616 7.64686 2.40566 7.76408 2.33082 7.90982C2.25598 8.05556 2.23091 8.2218 2.25946 8.38312L4.38759 18.1331C4.4189 18.3067 4.51041 18.4638 4.64604 18.5766C4.78167 18.6894 4.95273 18.7508 5.12915 18.75Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeMiterlimit="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_17536_25205">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Leaderboard;
