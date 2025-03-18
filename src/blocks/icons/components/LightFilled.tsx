import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const LightFilled: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName='LightFilled'
      icon={
        <svg
          width='inherit'
          height='inherit'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          {...props}
        >
          <path
            d='M16 22.8C19.7555 22.8 22.8 19.7555 22.8 16C22.8 12.2445 19.7555 9.20001 16 9.20001C12.2444 9.20001 9.19995 12.2445 9.19995 16C9.19995 19.7555 12.2444 22.8 16 22.8Z'
            fill='currentColor'
          />
          <path
            d='M15.9998 7.59999C16.212 7.59999 16.4155 7.5157 16.5655 7.36567C16.7156 7.21565 16.7998 7.01216 16.7998 6.79999V4.8C16.7998 4.58783 16.7156 4.38434 16.5655 4.23431C16.4155 4.08429 16.212 4 15.9998 4C15.7877 4 15.5842 4.08429 15.4341 4.23431C15.2841 4.38434 15.1998 4.58783 15.1998 4.8V6.79999C15.1998 7.01216 15.2841 7.21565 15.4341 7.36567C15.5842 7.5157 15.7877 7.59999 15.9998 7.59999Z'
            fill='currentColor'
          />
          <path
            d='M8.93 10.06C9.08123 10.2073 9.28395 10.2896 9.495 10.2896C9.70606 10.2896 9.90877 10.2073 10.06 10.06C10.2096 9.91007 10.2936 9.70688 10.2936 9.49505C10.2936 9.28321 10.2096 9.08002 10.06 8.93005L8.65 7.51005C8.57827 7.42265 8.48904 7.35124 8.38804 7.30041C8.28705 7.24958 8.17653 7.22045 8.06361 7.2149C7.95068 7.20936 7.83784 7.22751 7.73235 7.26821C7.62686 7.3089 7.53106 7.37122 7.45111 7.45117C7.37116 7.53112 7.30884 7.62692 7.26815 7.73241C7.22745 7.83789 7.2093 7.95073 7.21484 8.06366C7.22039 8.17659 7.24952 8.2871 7.30035 8.3881C7.35118 8.48909 7.4226 8.57832 7.50999 8.65005L8.93 10.06Z'
            fill='currentColor'
          />
          <path
            d='M7.60002 16C7.60002 15.7878 7.51573 15.5844 7.3657 15.4343C7.21567 15.2843 7.01219 15.2 6.80001 15.2H4.8C4.58783 15.2 4.38435 15.2843 4.23432 15.4343C4.08429 15.5844 4 15.7878 4 16C4 16.2122 4.08429 16.4157 4.23432 16.5657C4.38435 16.7157 4.58783 16.8 4.8 16.8H6.80001C7.01219 16.8 7.21567 16.7157 7.3657 16.5657C7.51573 16.4157 7.60002 16.2122 7.60002 16Z'
            fill='currentColor'
          />
          <path
            d='M8.9299 21.94L7.50989 23.35C7.35967 23.5017 7.27539 23.7065 7.27539 23.92C7.27539 24.1335 7.35967 24.3383 7.50989 24.49C7.66455 24.6351 7.86786 24.7171 8.07989 24.72C8.29233 24.7191 8.49633 24.6368 8.6499 24.49L10.0599 23.07C10.1978 22.9178 10.2719 22.7185 10.2668 22.5132C10.2618 22.3079 10.178 22.1124 10.0327 21.9672C9.88754 21.822 9.69205 21.7381 9.48675 21.7331C9.28146 21.728 9.08208 21.8021 8.9299 21.94Z'
            fill='currentColor'
          />
          <path
            d='M15.9998 24.4C15.7877 24.4 15.5842 24.4843 15.4341 24.6343C15.2841 24.7844 15.1998 24.9878 15.1998 25.2V27.2C15.1998 27.4122 15.2841 27.6157 15.4341 27.7657C15.5842 27.9157 15.7877 28 15.9998 28C16.212 28 16.4155 27.9157 16.5655 27.7657C16.7156 27.6157 16.7998 27.4122 16.7998 27.2V25.2C16.7998 24.9878 16.7156 24.7844 16.5655 24.6343C16.4155 24.4843 16.212 24.4 15.9998 24.4Z'
            fill='currentColor'
          />
          <path
            d='M23.0702 21.94C22.918 21.8021 22.7186 21.728 22.5133 21.7331C22.308 21.7381 22.1126 21.822 21.9673 21.9672C21.8221 22.1124 21.7383 22.3079 21.7333 22.5132C21.7282 22.7185 21.8023 22.9178 21.9402 23.07L23.3502 24.49C23.5038 24.6368 23.7078 24.7191 23.9202 24.72C24.1322 24.7171 24.3355 24.6351 24.4902 24.49C24.6404 24.3383 24.7247 24.1335 24.7247 23.92C24.7247 23.7065 24.6404 23.5017 24.4902 23.35L23.0702 21.94Z'
            fill='currentColor'
          />
          <path
            d='M27.2 15.2H25.2C24.9879 15.2 24.7844 15.2843 24.6343 15.4343C24.4843 15.5844 24.4 15.7878 24.4 16C24.4 16.2122 24.4843 16.4157 24.6343 16.5657C24.7844 16.7157 24.9879 16.8 25.2 16.8H27.2C27.4122 16.8 27.6157 16.7157 27.7657 16.5657C27.9158 16.4157 28 16.2122 28 16C28 15.7878 27.9158 15.5844 27.7657 15.4343C27.6157 15.2843 27.4122 15.2 27.2 15.2Z'
            fill='currentColor'
          />
          <path
            d='M22.5099 10.29C22.6139 10.2909 22.717 10.271 22.8132 10.2315C22.9093 10.192 22.9966 10.1337 23.0699 10.06L24.4899 8.64998C24.6175 8.49455 24.6827 8.29722 24.6728 8.09638C24.663 7.89553 24.5788 7.70554 24.4366 7.56335C24.2944 7.42117 24.1044 7.33695 23.9035 7.32709C23.7027 7.31722 23.5054 7.38242 23.3499 7.50999L21.9399 8.92998C21.7903 9.07995 21.7063 9.28314 21.7063 9.49498C21.7063 9.70682 21.7903 9.91001 21.9399 10.06C22.0144 10.1349 22.1033 10.194 22.2013 10.2335C22.2993 10.273 22.4043 10.2922 22.5099 10.29Z'
            fill='currentColor'
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default LightFilled;
