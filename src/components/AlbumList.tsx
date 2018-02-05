import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail, { AlbumData } from './AlbumDetail';

interface AlbumListState {
  albums: AlbumData[];
}

export default class AlbumList extends Component<{}, AlbumListState> {
  constructor(props: any) {
    super(props);
    this.state = { albums: [] };
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  public renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.name} album={album} />
    );
  }

  public render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}