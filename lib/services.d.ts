import React from 'react';
import { Text, TextProps } from 'react-native';
import { LinkFunction, LinkType, RichTextContent, RichTextDefaultStyles, RichTextElementType, RichTextSerializer, RichTextStyles, SpanType } from '../typings';
export declare const linkResolver: (link: LinkType) => string;
export declare const serializerWithStyle: (styles: RichTextStyles, onLinkPress?: LinkFunction | undefined, serializers?: RichTextSerializer | undefined) => (type: RichTextElementType, element: SpanType, text: string, children: React.ComponentElement<TextProps, Text>, index: string) => React.ComponentElement<TextProps, Text> | null;
export declare const asText: (structuredText: RichTextContent[]) => any;
export declare function computeStyles(defaultStyle?: RichTextDefaultStyles, styles?: RichTextStyles): RichTextStyles;
