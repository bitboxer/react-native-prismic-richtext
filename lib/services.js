import { asText as asPrismicText, Element } from '@prismicio/richtext';
import React, { createElement, Fragment } from 'react';
import { Linking, Text, TouchableOpacity, View, } from 'react-native';
import { HoverableLink } from './components/HoverableLink';
import { ImageView } from './components/ImageView';
function propsWithUniqueKey(props = {}, key) {
    return Object.assign(props, { key });
}
function getRNPropsFromHTMLTag(type) {
    switch (type) {
        case 'h1':
            return { accessibilityLabel: 'header' };
        default:
            return {};
    }
}
function serializeStandardTag(tag, children, key, style) {
    const props = getRNPropsFromHTMLTag(tag);
    if (tag === 'li') {
        return createElement(Fragment, propsWithUniqueKey(props, key), children);
    }
    return createElement(Text, propsWithUniqueKey({ ...props, style }, key), children);
}
function serializeUl(children, key, style) {
    return createElement(View, propsWithUniqueKey({ style: style.list }, key), children.map((text, index) => (<Text key={`${key}_${text.key}_${index}`} style={style['list-item']}>
        <Text>• </Text>
        <Text>{text}</Text>
      </Text>)));
}
function serializeOl(children, key, style) {
    return createElement(View, propsWithUniqueKey({ style: style['o-list'] }, key), children.map((text, index) => (<Text key={`${key}_${text.key}_${index}`} style={style['o-list-item']}>
        <Text>{`${index + 1}. `}</Text>
        <Text>{text}</Text>
      </Text>)));
}
export const linkResolver = (link) => {
    return link.url || '';
};
function serializeHyperlink(element, children, key, style, hoverStyle, onLinkPress) {
    if (element.data) {
        const targetAttr = element.data.link_type === 'Web' && element.data.target
            ? { target: element.data.target }
            : {};
        const relAttr = element.data.link_type === 'Web' && element.data.target
            ? { rel: 'noopener' }
            : {};
        const href = linkResolver(element.data);
        const props = {
            accessibilityLabel: 'link',
            onPress: () => {
                onLinkPress
                    ? onLinkPress(element.data)
                    : Linking.openURL(href).catch(console.warn);
            },
            href,
            ...targetAttr,
            ...relAttr,
        };
        return (<HoverableLink key={key} linkProps={props} outerStyle={style} hoverStyle={hoverStyle}>
        {children}
      </HoverableLink>);
    }
    return createElement(TouchableOpacity, propsWithUniqueKey({}, key), children);
}
function serializeSpan(content, key) {
    if (content) {
        return createElement(Text, propsWithUniqueKey({}, key), content);
    }
    return null;
}
function serializeImage(element, key, wrapperStyle, style, onLinkPress) {
    return createElement(Text, propsWithUniqueKey({}, key), <ImageView element={element} wrapperStyle={wrapperStyle} style={style} accessibilityLabel={element.alt || undefined} onLinkPress={onLinkPress}/>);
}
export const serializerWithStyle = (styles, onLinkPress, serializers) => (type, element, text, children, index) => {
    console.log('serailizing', type);
    const serializeTag = serializers && serializers[type];
    if (serializeTag !== undefined) {
        console.log('serializing tag with serializeTag', serializeTag);
        return serializeTag(type, element, text, children, index);
    }
    switch (type) {
        case Element.heading1:
            return serializeStandardTag('h1', children, index, styles.heading1);
        case Element.heading2:
            return serializeStandardTag('h2', children, index, styles.heading2);
        case Element.heading3:
            return serializeStandardTag('h3', children, index, styles.heading3);
        case Element.heading4:
            return serializeStandardTag('h4', children, index, styles.heading4);
        case Element.heading5:
            return serializeStandardTag('h5', children, index, styles.heading5);
        case Element.heading6:
            return serializeStandardTag('h6', children, index, styles.heading6);
        case Element.paragraph:
            return serializeStandardTag('p', children, index, styles.paragraph);
        case Element.preformatted:
            return serializeStandardTag('pre', children, index, styles.preformatted);
        case Element.strong:
            return serializeStandardTag('strong', children, index, styles.strong);
        case Element.em:
            return serializeStandardTag('em', children, index, styles.em);
        case Element.listItem:
            return serializeStandardTag('li', children, index, styles['list-item']);
        case Element.oListItem:
            return serializeStandardTag('li', children, index, styles['o-list-item']);
        case Element.list:
            return serializeUl(children, index, styles);
        case Element.oList:
            return serializeOl(children, index, styles);
        case Element.image:
            return serializeImage(element, index, styles.imageWrapper, styles.image, onLinkPress);
        case Element.hyperlink:
            return serializeHyperlink(element, children, index, styles.hyperlink, styles.hyperlinkHover, onLinkPress);
        case Element.label:
            return serializeStandardTag('label', children, index, styles.label);
        case Element.span:
            return serializeSpan(text || '', index);
        default:
            return null;
    }
};
export const asText = (structuredText) => {
    if (Object.prototype.toString.call(structuredText) !== '[object Array]') {
        console.warn(`Rich text argument should be an Array. Received ${typeof structuredText}`);
        return null;
    }
    return asPrismicText(structuredText);
};
export function computeStyles(defaultStyle = {}, styles = {}) {
    const computedStyles = {
        heading1: [defaultStyle, styles.heading1],
        heading2: [defaultStyle, styles.heading2],
        heading3: [defaultStyle, styles.heading3],
        heading4: [defaultStyle, styles.heading4],
        heading5: [defaultStyle, styles.heading5],
        heading6: [defaultStyle, styles.heading6],
        paragraph: [defaultStyle, styles.paragraph],
        preformatted: [defaultStyle, styles.preformatted],
        strong: [defaultStyle, styles.strong],
        em: [defaultStyle, styles.em],
        'list-item': [defaultStyle, styles['list-item']],
        list: [defaultStyle, styles.list],
        'o-list': [defaultStyle, styles['o-list']],
        'o-list-item': [defaultStyle, styles['o-list-item']],
        label: [defaultStyle, styles.label],
        hyperlink: [defaultStyle, styles.hyperlink],
        hyperlinkHover: [defaultStyle, styles.hyperlinkHover],
        image: [defaultStyle, styles.image],
        imageWrapper: [defaultStyle, styles.imageWrapper],
        embed: [defaultStyle, styles.embed],
        span: [defaultStyle, styles.span],
    };
    return computedStyles;
}
//# sourceMappingURL=services.js.map