import { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import { IconProps } from "../Icons.types";

const Envelope: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Envelope"
      icon={
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M4 7L16 17L28 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="round"
          />
          <rect
            x="4"
            y="7"
            width="24"
            height="18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="round"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Envelope;
