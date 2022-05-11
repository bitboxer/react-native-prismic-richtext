# This is a fork

I forked this from [here](https://github.com/Spoutnik97/react-native-prismic-richtext). This fork will be
deleted in the future as soon as my branch is merged into the main repository.

The reason to fork was to update the prismic richtext library to the latest version. This also now uses
the types defined by prismic for as much as possible.

# Installation

- Run `yarn add react-native-prismic-richtext-reloaded`

# Usage

```jsx
  <RichText
      richText={prismicRichTextResponse}

      // default style for texts
      defaultStyle={{
        color: '#000',
        fontSize: 17,
      }}

      // specific style for each tag
      styles={{
        hyperlink: { textDecorationLine: 'underline' },
        hyperlinkHover: {
          textDecorationLine: undefined,
        },
        list: {
          marginLeft: 8,
          marginVertical: 8,
        },
        'o-list': {
          marginLeft: 8,
          marginVertical: 8,
        },
        strong: {
          fontWeight: 'bold',
        },
        em: {
          fontStyle: 'italic',
        },
      }}

      // Optionally handle links within your app
      onLinkPress={(data: LinkType | undefined) => {
        if (data?.link_type === 'Web') {
          // This is a bug in prismic, it currently does not allow other link types
          const url = data.url.replace('https://makerist-ar://', 'makerist-ar://')
          return Linking.openURL(url)
        }
      }

      // Optionally overwrite rendering with custom component
      serializers={{
        embed: (_type, element, _text, _children, _key) => {
          const embed = element as RTEmbedNode
          return <Text key={key}>{embed.oembed.title}</Text>
        },
      }}
    />
```
