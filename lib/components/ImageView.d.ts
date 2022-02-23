/// <reference types="react" />
import { ImageStyle, StyleProp, ViewProps, ViewStyle } from 'react-native';
import { ImageType, LinkFunction } from '../../typings';
declare type ImageProps = ViewProps & {
    element: ImageType;
    wrapperStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ImageStyle>;
    onLinkPress?: LinkFunction;
};
export declare const ImageView: (props: ImageProps) => JSX.Element;
export {};
