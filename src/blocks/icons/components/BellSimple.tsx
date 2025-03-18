import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const BellSimple: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName='BellSimple'
      icon={
        <svg
          width='inherit'
          height='inherit'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          {...props}
        >
          <path
            d='M9 20.9999H15'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M14.1313 3.34529L13.142 3.49112C13.197 3.86442 13.4575 4.17496 13.8155 4.29412L14.1313 3.34529ZM16.7729 4.97697L17.48 4.26986V4.26986L16.7729 4.97697ZM20.1468 16.8749L21.0128 16.3749L21.0122 16.3739L20.1468 16.8749ZM20.2472 17.2493L19.2472 17.2502V17.2502L20.2472 17.2493ZM19.874 17.8985L19.3717 17.0338L19.3717 17.0338L19.874 17.8985ZM19.4999 17.9999V18.9999L19.5034 18.9999L19.4999 17.9999ZM4.49988 17.9999L4.49387 18.9999H4.49988V17.9999ZM4.12646 17.8978L4.63038 17.034L4.63037 17.034L4.12646 17.8978ZM3.85375 17.623L2.98622 18.1204H2.98622L3.85375 17.623ZM3.85488 16.8749L2.98913 16.3745L2.98887 16.3749L3.85488 16.8749ZM7.22691 4.97697L6.51981 4.26986L7.22691 4.97697ZM9.86833 3.34533L10.1841 4.29415C10.5422 4.17499 10.8026 3.86444 10.8576 3.49114L9.86833 3.34533ZM13.8155 4.29412C14.6557 4.57375 15.4279 5.04625 16.0657 5.68407L17.48 4.26986C16.6203 3.41016 15.5793 2.77329 14.4471 2.39646L13.8155 4.29412ZM16.0657 5.68407C17.1441 6.76241 17.7499 8.22494 17.7499 9.74994H19.7499C19.7499 7.69451 18.9334 5.72327 17.48 4.26986L16.0657 5.68407ZM17.7499 9.74994C17.7499 13.2175 18.5462 16.1062 19.2813 17.376L21.0122 16.3739C20.5098 15.5062 19.7499 12.9986 19.7499 9.74994H17.7499ZM19.2807 17.3749C19.2588 17.337 19.2473 17.294 19.2472 17.2502L21.2472 17.2484C21.247 16.9417 21.1661 16.6405 21.0128 16.3749L19.2807 17.3749ZM19.2472 17.2502C19.2472 17.2064 19.2587 17.1633 19.2805 17.1253L21.0143 18.1223C21.1672 17.8564 21.2475 17.5551 21.2472 17.2484L19.2472 17.2502ZM19.2805 17.1253C19.3024 17.0874 19.3338 17.0558 19.3717 17.0338L20.3762 18.7632C20.6414 18.6091 20.8615 18.3881 21.0143 18.1223L19.2805 17.1253ZM19.3717 17.0338C19.4096 17.0118 19.4526 17.0001 19.4964 16.9999L19.5034 18.9999C19.8101 18.9989 20.1111 18.9172 20.3762 18.7632L19.3717 17.0338ZM19.4999 16.9999H4.49988V18.9999H19.4999V16.9999ZM4.5059 17C4.54965 17.0002 4.59257 17.012 4.63038 17.034L3.62255 18.7615C3.88713 18.9159 4.18758 18.9981 4.49387 18.9999L4.5059 17ZM4.63037 17.034C4.66817 17.0561 4.69951 17.0876 4.72128 17.1256L2.98622 18.1204C3.13856 18.3861 3.35799 18.6072 3.62256 18.7615L4.63037 17.034ZM4.72128 17.1256C4.74304 17.1636 4.75446 17.2066 4.75439 17.2503L2.7544 17.2473C2.75393 17.5536 2.83387 17.8547 2.98622 18.1204L4.72128 17.1256ZM4.75439 17.2503C4.75433 17.2941 4.74278 17.3371 4.7209 17.375L2.98887 16.3749C2.83571 16.6402 2.75486 16.941 2.7544 17.2473L4.75439 17.2503ZM4.72064 17.3754C5.45456 16.1058 6.24988 13.2164 6.24988 9.74994H4.24988C4.24988 12.9979 3.49084 15.5066 2.98913 16.3745L4.72064 17.3754ZM6.24988 9.74994C6.24988 8.22494 6.85568 6.76241 7.93402 5.68407L6.51981 4.26986C5.0664 5.72327 4.24988 7.69451 4.24988 9.74994H6.24988ZM7.93402 5.68407C8.57182 5.04627 9.344 4.57378 10.1841 4.29415L9.55252 2.3965C8.42035 2.77334 7.37948 3.41019 6.51981 4.26986L7.93402 5.68407ZM10.8576 3.49114C10.9453 2.89646 11.4397 2.47119 11.9998 2.47119V0.471191C10.3991 0.471191 9.10409 1.67243 8.87902 3.19951L10.8576 3.49114ZM11.9998 2.47119C12.5599 2.47119 13.0544 2.89645 13.142 3.49112L15.1206 3.19946C14.8955 1.67241 13.6005 0.471191 11.9998 0.471191V2.47119Z'
            fill='currentColor'
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default BellSimple;
