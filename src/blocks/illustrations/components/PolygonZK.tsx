import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const PolygonZK: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName='PolygonZK'
      illustration={
        <svg
          width={restProps?.width ?? '24'}
          height={restProps?.height ?? '24'}
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          {...props}
        >
          <g clip-path='url(#clip0_248_8442)'>
            <path
              d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z'
              fill='#7B3FE4'
            />
            <path
              d='M24.6542 9.13066L17.6569 5.08444C17.152 4.8 16.5902 4.64355 16.0071 4.64355C15.424 4.64355 14.8622 4.8 14.3644 5.08444L7.36709 9.13066C6.86932 9.42222 6.44976 9.83466 6.15821 10.3396C5.86665 10.8373 5.71732 11.4062 5.71732 11.9893V20.096C5.72443 20.672 5.87376 21.2338 6.16532 21.7316C6.45687 22.2293 6.86932 22.6418 7.36709 22.9262L14.3644 26.9724C14.8622 27.264 15.4311 27.4133 16.0142 27.4133C16.5973 27.4133 17.1591 27.264 17.664 26.9724L24.6613 22.9262C25.1591 22.6347 25.5786 22.2222 25.8702 21.7173C26.1618 21.2196 26.3111 20.6507 26.3111 20.0676V11.9609C26.304 11.3849 26.1546 10.8231 25.8631 10.3253C25.5644 9.82755 25.152 9.41511 24.6542 9.13066ZM7.35998 11.9822C7.35998 11.6907 7.43821 11.4062 7.58043 11.1573C7.72265 10.9084 7.93598 10.6951 8.18487 10.5529L15.1822 6.51378C15.4311 6.37155 15.7155 6.29333 16.0071 6.29333C16.2986 6.29333 16.5831 6.37155 16.832 6.51378L23.8364 10.5529C24.0853 10.6951 24.2915 10.9013 24.4338 11.1431C24.576 11.392 24.6542 11.6693 24.6613 11.9538V12.7787C24.6613 13.4187 24.4053 14.0373 23.9502 14.4853C23.4951 14.9404 22.8835 15.1964 22.2435 15.1964H9.78487C8.91021 15.1964 8.06398 15.4738 7.35998 16V11.9822ZM24.6542 20.0676C24.6542 20.3591 24.576 20.6436 24.4338 20.8924C24.2915 21.1413 24.0782 21.3547 23.8293 21.4969L16.8249 25.536C16.576 25.6782 16.2915 25.7564 16 25.7564C15.7084 25.7564 15.424 25.6782 15.1751 25.536L8.17776 21.4969C7.92887 21.3547 7.72265 21.1484 7.58043 20.9067C7.43821 20.6578 7.35998 20.3804 7.35287 20.096V19.2711C7.35287 18.6311 7.60887 18.0124 8.06398 17.5644C8.51909 17.1093 9.13065 16.8533 9.77065 16.8533H22.2222C23.0969 16.8533 23.9431 16.576 24.6471 16.0498V20.0676H24.6542Z'
              fill='white'
            />
            <path
              d='M12.1813 11.5698H13.7813V13.9591H15.4311V11.5698C15.4311 11.136 15.2604 10.7165 14.9476 10.4036C14.6418 10.0978 14.2222 9.92001 13.7813 9.92001H12.1813C11.7476 9.92001 11.328 10.0907 11.0151 10.4036C10.7093 10.7093 10.5316 11.1289 10.5316 11.5698V13.9591H12.1813V11.5698Z'
              fill='white'
            />
            <path
              d='M13.7742 20.48H12.1742V18.0907H10.5244V20.48C10.5244 20.9138 10.6951 21.3333 11.008 21.6462C11.3138 21.952 11.7333 22.1298 12.1742 22.1298H13.7742C14.208 22.1298 14.6276 21.9591 14.9404 21.6462C15.2462 21.3404 15.424 20.9209 15.424 20.48V18.0907H13.7742V20.48Z'
              fill='white'
            />
            <path
              d='M18.6667 11.5698H20.2667V13.9591H21.9164V11.5698C21.9164 11.136 21.7458 10.7165 21.4329 10.4036C21.1271 10.0978 20.7075 9.92001 20.2667 9.92001H18.6667C18.2329 9.92001 17.8133 10.0907 17.5004 10.4036C17.1947 10.7093 17.0169 11.1289 17.0169 11.5698V13.9591H18.6667V11.5698Z'
              fill='white'
            />
            <path
              d='M20.2738 20.48H18.6738V18.0907H17.024V20.48C17.024 20.9138 17.1947 21.3333 17.5075 21.6462C17.8133 21.952 18.2329 22.1298 18.6738 22.1298H20.2738C20.7075 22.1298 21.1271 21.9591 21.44 21.6462C21.7458 21.3404 21.9235 20.9209 21.9235 20.48V18.0907H20.2738V20.48Z'
              fill='white'
            />
          </g>
          <defs>
            <clipPath id='clip0_248_8442'>
              <rect width='32' height='32' fill='white' />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default PolygonZK;
