import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const SendNotificationFilled: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName='SendNotificationFilled'
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
            d='M27.926 6.27831L22.1647 26.7242C22.0686 27.0704 21.8682 27.3786 21.5909 27.6069C21.3135 27.8352 20.9725 27.9724 20.6144 28H20.4605C20.1291 27.9993 19.8047 27.9049 19.5246 27.7279C19.2445 27.5508 19.0201 27.2982 18.8772 26.9992L14.952 18.7064C14.9135 18.6232 14.9013 18.5301 14.917 18.4397C14.9327 18.3493 14.9756 18.2659 15.04 18.2005L20.6804 12.5584C20.7687 12.4783 20.8398 12.3812 20.8894 12.2728C20.9391 12.1645 20.9662 12.0471 20.9691 11.928C20.972 11.8088 20.9507 11.6903 20.9065 11.5797C20.8622 11.469 20.796 11.3685 20.7117 11.2842C20.6275 11.1999 20.527 11.1336 20.4163 11.0894C20.3057 11.0451 20.1872 11.0238 20.0681 11.0267C19.949 11.0297 19.8317 11.0568 19.7234 11.1064C19.6151 11.1561 19.518 11.2272 19.4379 11.3155L13.7976 16.9687C13.7322 17.0331 13.6488 17.076 13.5584 17.0917C13.4681 17.1074 13.3751 17.0952 13.2918 17.0567L5.04567 13.1523C4.72292 12.9998 4.45195 12.756 4.2663 12.451C4.08065 12.1461 3.98847 11.7933 4.00115 11.4365C4.02062 11.0691 4.15542 10.7172 4.38638 10.4309C4.61733 10.1446 4.93268 9.93844 5.28755 9.84177L25.771 4.06765C26.1293 3.9653 26.5108 3.97938 26.8605 4.10786C27.2102 4.23634 27.5102 4.47258 27.7171 4.78254C27.8559 5.0028 27.9463 5.25007 27.9823 5.50795C28.0184 5.76583 27.9991 6.02842 27.926 6.27831Z'
            fill='currentColor'
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default SendNotificationFilled;
