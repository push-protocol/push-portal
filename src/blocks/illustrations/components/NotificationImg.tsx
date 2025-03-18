import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const NotificationImg: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName='NotificationImg'
      illustration={
        <svg
          width={restProps.width ?? '56'}
          height={restProps.height ?? '52'}
          viewBox='0 0 58 52'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          {...props}
        >
          <path
            d='M33.8301 11.2389L33.2232 11.4242L33.3076 11.7007L33.5716 11.8185L33.8301 11.2389ZM43.7593 35.9012L43.2014 36.2039L43.2064 36.2127L43.7593 35.9012ZM44.1171 37.2604L43.4825 37.2641V37.2641L44.1171 37.2604ZM43.7752 38.6243L43.2185 38.3194L43.2161 38.324L43.7752 38.6243ZM42.844 39.619L42.5121 39.078H42.5121L42.844 39.619ZM41.5692 39.9774L41.5735 39.3428H41.5692V39.9774ZM16.4305 39.9774V39.3428L16.4261 39.3428L16.4305 39.9774ZM15.1557 39.619L15.4875 39.078H15.4875L15.1557 39.619ZM14.2245 38.6243L14.7836 38.324L14.7811 38.3194L14.2245 38.6243ZM13.8825 37.2604L14.5171 37.2641L13.8825 37.2604ZM14.2403 35.9012L14.7933 36.2128L14.7981 36.2039L14.2403 35.9012ZM16.3035 23.7401H16.9381L16.9381 23.7393L16.3035 23.7401ZM17.2657 18.5593L16.674 18.3297V18.3297L17.2657 18.5593ZM20.0175 14.1671L20.4803 14.6014L20.0175 14.1671ZM24.1387 11.2344L23.8828 10.6536L23.8828 10.6536L24.1387 11.2344ZM24.176 11.218L24.43 11.7996L24.6963 11.6833L24.7822 11.4057L24.176 11.218ZM42.3308 23.8923C42.3308 17.9647 38.9373 12.8224 34.0887 10.6594L33.5716 11.8185C37.9426 13.7685 41.0615 18.4432 41.0615 23.8923H42.3308ZM42.3308 25.0932V23.8923H41.0615V25.0932H42.3308ZM44.3171 35.5984C43.4414 33.9851 42.3308 30.8127 42.3308 25.0932H41.0615C41.0615 30.9766 42.2045 34.3668 43.2015 36.2039L44.3171 35.5984ZM44.7517 37.2567C44.7483 36.6716 44.5975 36.0959 44.3122 35.5896L43.2064 36.2127C43.384 36.5279 43.4803 36.8911 43.4825 37.2641L44.7517 37.2567ZM44.3318 38.9292C44.611 38.4194 44.7551 37.8419 44.7517 37.2567L43.4825 37.2641C43.4846 37.6371 43.3926 38.0018 43.2186 38.3194L44.3318 38.9292ZM43.1758 40.16C43.6623 39.8615 44.0607 39.4338 44.3342 38.9246L43.2161 38.324C43.0452 38.6421 42.8009 38.901 42.5121 39.078L43.1758 40.16ZM41.5649 40.612C42.1328 40.6159 42.6889 40.4587 43.1758 40.16L42.5121 39.078C42.2238 39.2549 41.9 39.345 41.5735 39.3428L41.5649 40.612ZM16.4305 40.6121H41.5692V39.3428H16.4305V40.6121ZM14.8238 40.16C15.3108 40.4587 15.8669 40.6159 16.4348 40.612L16.4261 39.3428C16.0996 39.345 15.7758 39.2549 15.4875 39.078L14.8238 40.16ZM13.6654 38.9246C13.9389 39.4338 14.3373 39.8615 14.8238 40.16L15.4875 39.078C15.1988 38.901 14.9544 38.6421 14.7835 38.324L13.6654 38.9246ZM13.2479 37.2567C13.2445 37.8419 13.3886 38.4194 13.6679 38.9292L14.7811 38.3194C14.6071 38.0018 14.515 37.6371 14.5171 37.2641L13.2479 37.2567ZM13.6875 35.5896C13.4022 36.0959 13.2513 36.6716 13.2479 37.2567L14.5171 37.2641C14.5193 36.8911 14.6157 36.5279 14.7932 36.2127L13.6875 35.5896ZM15.6689 25.0932C15.6689 30.8127 14.5582 33.9851 13.6826 35.5985L14.7981 36.2039C15.7952 34.3668 16.9381 30.9766 16.9381 25.0932H15.6689ZM15.6689 23.7401V25.0932H16.9381V23.7401H15.6689ZM16.674 18.3297C16.008 20.0465 15.6667 21.8852 15.6689 23.7408L16.9381 23.7393C16.9361 22.0398 17.2488 20.3574 17.8573 18.7888L16.674 18.3297ZM19.5547 13.7329C18.3184 15.0505 17.3401 16.6129 16.674 18.3297L17.8573 18.7888C18.4659 17.2203 19.3579 15.7976 20.4803 14.6014L19.5547 13.7329ZM23.8828 10.6536C22.2615 11.3681 20.7911 12.4152 19.5547 13.7329L20.4803 14.6014C21.6027 13.4052 22.9332 12.4591 24.3946 11.8151L23.8828 10.6536ZM23.922 10.6364C23.9089 10.6421 23.8958 10.6479 23.8828 10.6536L24.3946 11.8151C24.4064 11.8099 24.4182 11.8047 24.43 11.7996L23.922 10.6364ZM24.7822 11.4057C25.3772 9.48363 27.0596 8.13731 28.9998 8.13731V6.86806C26.443 6.86806 24.3108 8.63659 23.5697 11.0303L24.7822 11.4057ZM28.9998 8.13731C30.9463 8.13731 32.6333 9.49238 33.2232 11.4242L34.4371 11.0536C33.7026 8.64798 31.565 6.86806 28.9998 6.86806V8.13731Z'
            fill='#17181B'
          />
          <path
            d='M28.9999 45.7931C32.0359 45.7931 34.4971 43.1894 34.4971 39.9775H23.5027C23.5027 43.1894 25.9639 45.7931 28.9999 45.7931Z'
            fill='#F3AEFF'
            stroke='#17181B'
            stroke-width='1.26925'
            stroke-linecap='round'
          />
          <path
            d='M53.5416 32.286C55.6002 33.5742 56.7032 34.7555 56.5486 35.6487C56.0685 38.4666 42.9438 38.2086 27.864 35.233C12.7842 32.2573 0.968528 26.7321 1.44867 23.9142C1.75918 22.0909 7.30061 21.5019 15.2603 22.1189'
            stroke='#17181B'
            stroke-width='1.26925'
            stroke-miterlimit='10'
            stroke-linecap='round'
          />
          <path
            d='M11.9496 10.9518C11.9496 8.04052 9.60058 5.67509 6.70947 5.67509C9.60058 5.67509 11.9496 3.30967 11.9496 0.398376C11.9496 3.30967 14.2986 5.67509 17.1897 5.67509C14.2986 5.67509 11.9496 8.04052 11.9496 10.9518Z'
            stroke='#17181B'
            stroke-width='1.26925'
            stroke-miterlimit='10'
          />
          <path
            d='M49.4206 31.3339C49.4206 29.0179 47.5519 27.1361 45.252 27.1361C47.5519 27.1361 49.4206 25.2544 49.4206 22.9384C49.4206 25.2544 51.2893 27.1361 53.5892 27.1361C51.2893 27.1361 49.4206 29.0179 49.4206 31.3339Z'
            stroke='#17181B'
            stroke-width='1.26925'
            stroke-miterlimit='10'
          />
          <ellipse
            cx='8.60313'
            cy='29.2792'
            rx='3.3463'
            ry='3.38024'
            fill='#F3AEFF'
            stroke='#17181B'
            stroke-width='1.26925'
            stroke-linecap='round'
          />
          <ellipse
            cx='44.5889'
            cy='47.9229'
            rx='2.10846'
            ry='2.12985'
            fill='#F3AEFF'
            stroke='#17181B'
            stroke-width='1.26925'
            stroke-linecap='round'
          />
          <ellipse
            cx='38.2101'
            cy='16.4186'
            rx='5.06511'
            ry='5.11649'
            fill='#F3AEFF'
            stroke='#17181B'
            stroke-width='1.26925'
            stroke-linecap='round'
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default NotificationImg;
