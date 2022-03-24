import PrismicRichText from '@prismicio/richtext';
import { createElement, Fragment } from 'react';
import { computeStyles, serializerWithStyle } from './services';
export const RichText = ({ richText, defaultStyle, styles, ContainerComponent, onLinkPress, serializers, }) => {
    if (!richText) {
        console.warn(`Prop 'render' was not specified in 'RichTextComponent'.`);
        return null;
    }
    if (Object.prototype.toString.call(richText) !== '[object Array]') {
        console.warn(`Rich text argument should be an Array. Received ${typeof richText}`);
        return null;
    }
    const computedStyles = computeStyles(defaultStyle, styles);
    const serializedChildren = PrismicRichText.serialize(richText, serializerWithStyle(computedStyles, onLinkPress, serializers));
    return createElement(ContainerComponent || Fragment, {}, serializedChildren);
};
//# sourceMappingURL=index.js.map