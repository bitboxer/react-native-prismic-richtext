import { FilledLinkToDocumentField, FilledLinkToMediaField, FilledLinkToWebField, RichTextField } from '@prismicio/types';
import { LinkFunction, RichTextDefaultStyles, RichTextSerializer, RichTextStyles, SerializerFunction } from '../typings';
export declare const linkResolver: (link: FilledLinkToDocumentField | FilledLinkToWebField | FilledLinkToMediaField) => string;
export declare const serializerWithStyle: (styles: RichTextStyles, onLinkPress?: LinkFunction | undefined, serializers?: RichTextSerializer | undefined) => SerializerFunction;
export declare const asText: (structuredText: RichTextField) => string | null;
export declare function computeStyles(defaultStyle?: RichTextDefaultStyles, styles?: RichTextStyles): RichTextStyles;
