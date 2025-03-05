import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const NotificationMobile: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName='NotificationMobile'
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
            d='M13.0551 8.7841L13.3261 9.48341L13.6492 9.35821L13.7632 9.03109L13.0551 8.7841ZM18.949 8.79549L18.2397 9.03943L18.352 9.36576L18.6728 9.49281L18.949 8.79549ZM25.0106 22.1589L24.3706 22.5503L24.3774 22.5609L25.0106 22.1589ZM25.229 22.8955L24.479 22.9004V22.9004L25.229 22.8955ZM25.0203 23.6345L24.382 23.2406L24.3786 23.2462L25.0203 23.6345ZM24.4518 24.1735L24.0932 23.5148H24.0932L24.4518 24.1735ZM23.6735 24.3677L23.678 23.6177H23.6735V24.3677ZM8.3264 24.3677V23.6177L8.32189 23.6177L8.3264 24.3677ZM7.54814 24.1735L7.90676 23.5148H7.90676L7.54814 24.1735ZM6.97966 23.6345L7.62132 23.2462L7.6179 23.2406L6.97966 23.6345ZM6.7709 22.8955L7.52089 22.9004L6.7709 22.8955ZM6.98934 22.1589L7.62261 22.561L7.6292 22.5502L6.98934 22.1589ZM8.24889 15.5693H8.99889L8.99889 15.5683L8.24889 15.5693ZM8.83631 12.7621L8.1491 12.4617L8.1491 12.4617L8.83631 12.7621ZM10.5163 10.3821L11.0317 10.927L10.5163 10.3821ZM13.0323 8.79298L13.3054 9.49146L13.3055 9.49145L13.0323 8.79298ZM13.7632 9.03109C14.062 8.17457 14.9339 7.52087 16 7.52087V6.02087C14.3207 6.02087 12.8638 7.05503 12.3469 8.53711L13.7632 9.03109ZM16 7.52087C17.0697 7.52087 17.9437 8.17883 18.2397 9.03943L19.6582 8.55155C19.1458 7.06174 17.6848 6.02087 16 6.02087V7.52087ZM24.501 15.6518C24.501 12.2347 22.2992 9.31545 19.2251 8.09817L18.6728 9.49281C21.2272 10.5043 23.001 12.9044 23.001 15.6518H24.501ZM24.501 16.3025V15.6518H23.001V16.3025H24.501ZM25.6504 21.7677C25.1636 20.9715 24.501 19.3348 24.501 16.3025H23.001C23.001 19.5574 23.7143 21.4767 24.3707 22.5502L25.6504 21.7677ZM25.979 22.8905C25.9764 22.488 25.8592 22.0963 25.6438 21.757L24.3774 22.5609C24.4445 22.6666 24.4783 22.7838 24.479 22.9004L25.979 22.8905ZM25.6585 24.0284C25.8697 23.6863 25.9817 23.2931 25.979 22.8905L24.479 22.9004C24.4798 23.017 24.4476 23.1344 24.382 23.2406L25.6585 24.0284ZM24.8104 24.8322C25.1602 24.6418 25.4555 24.3639 25.6619 24.0228L24.3786 23.2462C24.3137 23.3534 24.2167 23.4475 24.0932 23.5148L24.8104 24.8322ZM23.669 25.1177C24.0671 25.1201 24.4608 25.0225 24.8104 24.8322L24.0932 23.5148C23.9695 23.5821 23.826 23.6186 23.678 23.6177L23.669 25.1177ZM8.3264 25.1177H23.6735V23.6177H8.3264V25.1177ZM7.18953 24.8322C7.5391 25.0225 7.93285 25.1201 8.33092 25.1177L8.32189 23.6177C8.1739 23.6186 8.03047 23.5821 7.90676 23.5148L7.18953 24.8322ZM6.33802 24.0228C6.54443 24.3639 6.83974 24.6418 7.18953 24.8322L7.90676 23.5148C7.78326 23.4475 7.68619 23.3534 7.62129 23.2462L6.33802 24.0228ZM6.02092 22.8905C6.01828 23.2931 6.13027 23.6863 6.34141 24.0284L7.6179 23.2406C7.55232 23.1344 7.52012 23.017 7.52089 22.9004L6.02092 22.8905ZM6.35617 21.757C6.1407 22.0963 6.02356 22.488 6.02092 22.8905L7.52089 22.9004C7.52165 22.7838 7.5554 22.6666 7.62252 22.5609L6.35617 21.757ZM7.49889 16.3025C7.49889 19.3348 6.83633 20.9715 6.34949 21.7677L7.6292 22.5502C8.28564 21.4767 8.99889 19.5574 8.99889 16.3025H7.49889ZM7.49889 15.5693V16.3025H8.99889V15.5693H7.49889ZM8.1491 12.4617C7.71884 13.446 7.49748 14.5025 7.49889 15.5703L8.99889 15.5683C8.99776 14.7098 9.17563 13.8583 9.52353 13.0624L8.1491 12.4617ZM10.0009 9.83727C9.20931 10.5861 8.5793 11.4775 8.1491 12.4617L9.52353 13.0624C9.87148 12.2664 10.3832 11.5404 11.0317 10.927L10.0009 9.83727ZM12.7591 8.09451C11.73 8.497 10.7924 9.08857 10.0009 9.83727L11.0317 10.927C11.6802 10.3135 12.4525 9.82505 13.3054 9.49146L12.7591 8.09451ZM12.784 8.08478C12.7757 8.08802 12.7674 8.09126 12.759 8.09451L13.3055 9.49145C13.3123 9.48876 13.3192 9.48608 13.3261 9.48341L12.784 8.08478Z'
            fill='currentColor'
          />
          <path
            d='M19.356 24.3901C19.356 26.2436 17.8535 27.7462 16 27.7462C14.1465 27.7462 12.644 26.2436 12.644 24.3901'
            stroke='currentColor'
            stroke-width='1.5'
            stroke-linecap='round'
          />
          <path
            d='M21.873 4.25385C23.4932 5.28763 24.8073 6.73605 25.679 8.44889'
            stroke='currentColor'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M6.32111 8.44889C7.1928 6.73605 8.50689 5.28763 10.1271 4.25385'
            stroke='currentColor'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default NotificationMobile;
