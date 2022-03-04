import React from 'react';
import { LinkFunction, RichTextContent, RichTextDefaultStyles, RichTextSerializer, RichTextStyles } from '../typings';
declare type RichTextProps = {
    richText: RichTextContent[];
    defaultStyle?: RichTextDefaultStyles;
    styles?: RichTextStyles;
    ContainerComponent?: React.ComponentClass | React.ExoticComponent;
    onLinkPress?: LinkFunction;
    serializers?: RichTextSerializer;
};
export declare const RichText: ({ richText, defaultStyle, styles, ContainerComponent, onLinkPress, serializers, }: RichTextProps) => React.ReactElement<{}, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
export {};
