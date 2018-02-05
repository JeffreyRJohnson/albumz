import React from 'react';
import { Text, View, Image, Linking, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

interface AlbumDetailProps {
  album: {
    thumbnail_image: string,
    title: string,
    artist: string,
    image: string,
    url: string,
    name: string;
  };
}

export default class AlbumDetail extends React.Component<AlbumDetailProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { title, artist, thumbnail_image, image, url } = this.props.album;
    const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;
    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{ uri: thumbnail_image }}
            />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image
            style={imageStyle}
            source={{ uri: image }}
          />
        </CardSection>

        <CardSection>
          <Button onPress={() => Linking.openURL(url)}>
            Buy Now
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1
  }
});