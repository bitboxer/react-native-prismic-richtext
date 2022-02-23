import React from 'react';
import { Image, StyleSheet, View, } from 'react-native';
export const ImageView = (props) => {
    const { element, wrapperStyle, style } = props;
    const flattenedStyle = StyleSheet.flatten(style);
    const width = typeof flattenedStyle?.width === 'number' ? flattenedStyle.width : 300;
    const aspectRatio = element.dimensions.width / element.dimensions.height;
    const height = width / aspectRatio;
    return (<View style={wrapperStyle}>
      <Image style={[style, { width: width, height: height }]} source={{ uri: element.url }} accessibilityLabel={element.alt}/>
    </View>);
};
//# sourceMappingURL=ImageView.js.map