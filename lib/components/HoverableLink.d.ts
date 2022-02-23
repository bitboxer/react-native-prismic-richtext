import React from 'react';
import { StyleProp, TextProps, TextStyle, ViewProps } from 'react-native';
declare type HoverableViewProps = ViewProps & {
    outerStyle?: StyleProp<TextStyle>;
    hoverStyle?: StyleProp<TextStyle>;
    linkProps: TextProps & {
        href: string;
        target?: string;
        rel?: string;
    };
    children: React.ReactNode;
};
export declare const HoverableLink: (props: HoverableViewProps) => JSX.Element;
export {};
