import React, { useState } from 'react';
import { Platform, Text, } from 'react-native';
export const HoverableLink = (props) => {
    const [hover, setHover] = useState(false);
    const { outerStyle, hoverStyle, children, linkProps } = props;
    return (<Text style={hover ? hoverStyle : outerStyle} {...linkProps} {...Platform.select({
        web: {
            accessibilityRole: 'link',
            onMouseEnter: () => setHover(true),
            onMouseLeave: () => setHover(false),
        },
    })}>
      {children}
    </Text>);
};
//# sourceMappingURL=HoverableLink.js.map