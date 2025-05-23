// External Packages
import styled from 'styled-components';

// Internal Configs
import { themeLight } from '../../config/Themization';

// Section covers the entire width and height
export const SectionV2 = styled.section`
  align-items: ${(props) => props.alignItems || 'center'};
  align-self: ${(props) => props.alignSelf || 'stretch'};
  background: ${(props) =>
    props.gradient
      ? props.gradient
      : props.background
        ? props.background
        : 'transparent' || 'transparent'};
  display: ${(props) => props.display || 'flex'};
  flex: ${(props) => props.flex || '1'};
  flex-direction: ${(props) => props.flexDirection || 'column'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  margin: ${(props) => props.margin || '0px'};
  min-height: ${(props) => props.minHeight || 'auto'};
  overflow: ${(props) => props.overflow || 'initial'};
  padding: ${(props) => props.padding || '0px'};
  position: ${(props) => props.position || 'relative'};
`;

export const ItemBreakV2 = styled.div`
  flex-basis: 100%;
`;

// Item comes inside section or components
// ItemH is horizontal
// ItemV is vertical
export const ItemHV2 = styled.div`
  align-items: ${(props) => props.alignItems || 'center'};
  align-self: ${(props) => props.alignSelf || 'stretch'};
  background: ${(props) =>
    props.gradient
      ? props.gradient
      : props.background
        ? props.background
        : 'transparent' || 'transparent'};
  border: ${(props) => props.border || 'initial'};
  border-radius: ${(props) => props.borderRadius || 'initial'};
  bottom: ${(props) => props.bottom || 'auto'};
  box-shadow: ${(props) => props.boxShadow || 'initial'};
  display: ${(props) => props.display || 'flex'};
  filter: ${(props) => props.filter || 'initial'};
  flex: ${(props) => props.flex || '1'};
  flex-basis: ${(props) => props.flexBasis || 'auto'};
  flex-flow: ${(props) => props.flexFlow || 'initial'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  flex-wrap: ${(props) => props.flexWrap || 'wrap'};
  font-size: ${(props) => props.fontSize || 'initial'};
  height: ${(props) => props.height || 'auto'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  left: ${(props) => props.left || 'auto'};
  margin: ${(props) => props.margin || '0px'};
  max-width: ${(props) => props.maxWidth || 'initial'};
  min-width: ${(props) => props.minWidth || 'auto'};
  overflow: ${(props) => props.overflow || 'initial'};
  overflow-wrap: ${(props) => props.overflowWrap || 'anywhere'};
  box-sizing: ${(props) => props.boxSizing || 'border-box'};
  padding: ${(props) => props.padding || '0px'};
  position: ${(props) => props.position || 'relative'};
  right: ${(props) => props.right || 'auto'};
  text-align: ${(props) => props.textAlign || 'initial'};
  top: ${(props) => props.top || 'auto'};
  width: ${(props) => props.width || 'auto'};
  z-index: ${(props) => props.zIndex || 'auto'};
  gap: ${(props) => props.gap || '0px'};

  &:hover & {
    filter: ${(props) =>
      (props.filterHover
        ? props.filterHover
        : props.hover
          ? props.hover
          : 'none') || 'none'};
  }

  ${ItemBreakV2} {
    width: 0;
  }
`;

export const ItemVV2 = styled(ItemHV2)`
  flex: ${(props) => props.flex || '1'};
  flex-direction: ${(props) => props.flexDirection || 'column'};

  ${ItemBreakV2} {
    height: 0;
    width: auto;
  }
`;

export const H2V2 = styled.h2`
  color: ${(props) => props.color || themeLight.default.color};
  font-family: ${(props) =>
    props.family || "'FK Grotesk Neu', Helvetica, sans-serif"};
  font-size: ${(props) => props.fontSize || 'initial'};
  font-weight: ${(props) => props.fontWeight || 'initial'};
  letter-spacing: ${(props) => props.letterSpacing || 'normal'};
  margin: ${(props) => props.margin || '0px'};
  padding: ${(props) => props.padding || '0px'};
  text-align: ${(props) => props.textAlign || 'center'};
  text-transform: ${(props) => props.textTransform || 'inherit'};
`;

export const ButtonV2 = styled.button`
  align-items: ${(props) => props.alignItems || 'center'};
  align-self: ${(props) => props.alignSelf || 'auto'};
  background: ${(props) => props.background || 'tranparent'};
  border: ${(props) => props.border || 'initial'};
  border-radius: ${(props) => props.borderRadius || '0px'};
  color: ${(props) => props.color || themeLight.default.color};
  cursor: ${(props) => props.cursor || 'pointer'};
  display: ${(props) => props.display || 'flex'};
  flex: ${(props) => props.flex || '1'};
  flex-direction: ${(props) => props.flexDirection || 'column'};
  font-size: ${(props) => props.fontSize || 'inherit'};
  font-weight: ${(props) => props.fontWeight || 'initial'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  letter-spacing: ${(props) => props.letterSpacing || 'normal'};
  margin: ${(props) => props.margin || '0px'};
  max-width: ${(props) => props.maxWidth || 'initial'};
  min-width: ${(props) => props.minWidth || 'auto'};
  width: ${(props) => props.width || 'auto'};
  overflow: ${(props) => props.overflow || 'hidden'};
  padding: ${(props) => props.padding || '0px'};
  pointer: ${(props) => props.pointer || 'hand'};
  position: ${(props) => props.position || 'relative'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'initial'};
  z-index: ${(props) => props.zIndex || '3'};

  &:before {
    background: ${(props) =>
      props.hover || (props.background ? props.background : 'transparent')};
    bottom: 0;
    content: '';
    display: none;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:after {
    background: ${(props) => props.hoverBackground || '#000'};
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:hover:before {
    display: block;
  }

  &:hover:after {
    opacity: 0.08;
  }
  &:active:after {
    opacity: 0.15;
  }

  & > div {
    display: flex;
  }
`;

export const SpanV2 = styled.span`
  align-self: ${(props) => props.alignSelf || 'auto'};
  background: ${(props) => props.background || 'transparent'};
  cursor: ${(props) => props.cursor || 'default'};
  border-radius: ${(props) => props.borderRadius || 'initial'};
  bottom: ${(props) => props.bottom || 'auto'};
  color: ${(props) => props.color || 'inherit'};
  flex: ${(props) => props.flex || 'initial'};
  font-size: ${(props) => props.fontSize || 'inherit'};
  font-weight: ${(props) => props.fontWeight || '300'};
  left: ${(props) => props.left || 'auto'};
  letter-spacing: ${(props) => props.letterSpacing || 'normal'};
  line-height: ${(props) => props.lineHeight || 'initial'};
  margin: ${(props) => props.margin || '0px'};
  padding: ${(props) => props.padding || '0px'};
  position: ${(props) => props.position || 'initial'};
  right: ${(props) => props.right || 'auto'};
  text-align: ${(props) => props.textAlign || 'center'};
  text-transform: ${(props) => props.textTransform || 'inherit'};
  top: ${(props) => props.top || 'auto'};
  z-index: ${(props) => props.zIndex || 'auto'};
  max-width: ${(props) => props.maxWidth || 'initial'};
`;

export const ImageV2 = styled.img`
  display: ${(props) => props.display || 'flex'};
  height: ${(props) => props.height || 'auto'};
  max-height: ${(props) => props.maxHeight || 'initial'};
  padding: ${(props) => props.padding || '0px'};
  width: ${(props) => props.width || '100%'};
  margin: ${(props) => props.margin || '0px'};
  vertical-align: ${(props) => props.verticalAlign || 'auto'};
  border-radius: ${(props) => props.borderRadius || 'initial'};
  overflow: ${(props) => props.overflow || 'initial'};
  cursor: ${(props) => props.cursor || 'default'};
  filter: ${(props) => props.filter || 'none'};
  alt: ${(props) => props.alt || 'Image'};
  object-fit: ${(props) => props.objectFit || 'fill'};
  z-index: ${(props) => props.zIndex || 'auto'};
`;

export const AInlineV2 = styled.a`
  background: transparent;
  font-size: ${(props) => props.fontSize || 'inherit'};
  font-weight: ${(props) => props.fontWeight || '300'};
  color: ${(props) => props.color || '#e1087f'};
  display: inline;
  letter-spacing: normal;
  padding: 0px;
  text-transform: initial;
  cursor: ${(props) => props.cursor || 'default'};
`;

export const Skeleton = styled.div`
  padding: ${(props) => props.padding || '0px'};
  max-width: ${(props) => props.maxWidth || 'initial'};
  width: ${(props) => props.width || 'initial'};
  background: ${(props) =>
    props.gradient
      ? props.gradient
      : props.background
        ? props.background
        : 'transparent' || 'transparent'};
  border-radius: ${(props) => props.borderRadius || 'initial'};
  display: ${(props) => props.display || 'flex'};
  flex-direction: ${(props) => props.flexDirection || 'column'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  margin: ${(props) => props.margin || '0px'};
  gap: ${(props) => props.gap || '0px'};
`;

export const SkeletonLine = styled.div`
height: ${(props) => props.height || 'auto'};
width: ${(props) => props.width || 'initial'};
margin: ${(props) => props.margin || '0px'};
padding:${(props) => props.padding || '0px'};
border-radius: ${(props) => props.borderRadius || '16px'};
background: ${(props) =>
  props.gradient
    ? props.gradient
    : props.background
      ? props.background
      : 'linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%)' ||
        'linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%)'};
background-size: ${(props) => props.backgroundSize || '800px 100px'};
animation: wave-lines 2s infinite ease-out;

@keyframes wave-lines {
    0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`;
