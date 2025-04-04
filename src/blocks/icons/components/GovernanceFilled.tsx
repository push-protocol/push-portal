import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const GovernanceFilled: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName='GovernanceFilled'
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
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M14.13 3.8577C15.2999 3.239 16.7001 3.239 17.87 3.8577L28.935 9.70938C29.5902 10.0559 30 10.7362 30 11.4774V14C30 15.1046 29.1046 16 28 16H27V27H29C29.5523 27 30 27.4477 30 28C30 28.5523 29.5523 29 29 29H3C2.44772 29 2 28.5523 2 28C2 27.4477 2.44772 27 3 27H5V16H4C2.89543 16 2 15.1046 2 14V11.4774C2 10.7362 2.40985 10.0559 3.06501 9.70938L14.13 3.8577ZM22 16H25V27H22V16ZM20 27V16H17V27H20ZM12 16H15V27H12V16ZM7 27H10V16H7V27ZM17 9C17 8.44772 16.5523 8 16 8C15.4477 8 15 8.44772 15 9V11C15 11.5523 15.4477 12 16 12C16.5523 12 17 11.5523 17 11V9Z'
            fill='currentColor'
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default GovernanceFilled;
