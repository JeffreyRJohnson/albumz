import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}