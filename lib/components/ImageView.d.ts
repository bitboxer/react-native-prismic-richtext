/// <reference types="react" />
import { RTImageNode } from '@prismicio/types';
import { ImageStyle, StyleProp, ViewProps, ViewStyle } from 'react-native';
import { LinkFunction } from '../../typings';
declare type ImageProps = ViewProps & {
    element: RTImageNode;
    wrapperStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ImageStyle>;
    onLinkPress?: LinkFunction;
};
export declare const ImageView: (props: ImageProps) => JSX.Element;
export {};
