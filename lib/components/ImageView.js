import React from 'react';
import { Image, Linking, Pressable, StyleSheet, View, } from 'react-native';
import { linkResolver } from '../services';
export const ImageView = (props) => {
    const { element, wrapperStyle, style, onLinkPress } = props;
    const flattenedStyle = StyleSheet.flatten(style);
    const width = typeof flattenedStyle?.width === 'number' ? flattenedStyle.width : 300;
    const aspectRatio = element.dimensions.width / element.dimensions.height;
    const height = width / aspectRatio;
    console.log(element);
    return (<View style={wrapperStyle}>
      <Pressable onPress={() => {
        console.log('press');
        console.log(element);
        if (element.linkTo) {
            onLinkPress
                ? onLinkPress(element.linkTo)
                : Linking.openURL(linkResolver(element.linkTo)).catch(console.warn);
        }
    }}>
        <Image style={[style, { width: width, height: height }]} source={{ uri: element.url }} accessibilityLabel={element.alt}/>
      </Pressable>
    </View>);
};
//# sourceMappingURL=ImageView.js.map