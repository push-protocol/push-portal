import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const UserFilled: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName='UserFilled'
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
            d='M27.8769 27.0791C27.7959 27.2195 27.6793 27.336 27.5389 27.4171C27.3986 27.4981 27.2393 27.5407 27.0772 27.5407H4.92218C4.76022 27.5405 4.60115 27.4977 4.46095 27.4166C4.32075 27.3356 4.20435 27.219 4.12344 27.0787C4.04253 26.9384 3.99996 26.7793 4 26.6173C4.00004 26.4554 4.04269 26.2963 4.12368 26.156C5.88108 23.1177 8.5893 20.9392 11.7499 19.9064C10.1865 18.9757 8.97188 17.5576 8.2925 15.8698C7.61313 14.182 7.50658 12.3178 7.9892 10.5636C8.47183 8.8094 9.51696 7.2621 10.9641 6.15934C12.4112 5.05659 14.1803 4.45935 15.9997 4.45935C17.8191 4.45935 19.5882 5.05659 21.0353 6.15934C22.4825 7.2621 23.5276 8.8094 24.0102 10.5636C24.4928 12.3178 24.3863 14.182 23.7069 15.8698C23.0275 17.5576 21.8129 18.9757 20.2496 19.9064C23.4101 20.9392 26.1183 23.1177 27.8757 26.156C27.9569 26.2962 27.9998 26.4554 28 26.6174C28.0002 26.7794 27.9577 26.9387 27.8769 27.0791Z'
            fill='currentColor'
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default UserFilled;
