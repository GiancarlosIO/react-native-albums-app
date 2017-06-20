import React, { Component } from 'react';
import axios from 'axios';
import {
  View,
  ScrollView,
  Text
} from 'react-native';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  }

  componentDidMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => {
        console.log('album data', response);
        this.setState({ albums: response.data });
      }).catch((error) => {
        console.log('error to get albums', error);
      })
  }

  renderAlbums = () => {
    return this.state.albums.map(
      album => <AlbumDetail key={album.title} {...album} />
    );
  }

  render() {
    const { albums } = this.state;
    return (
      <ScrollView>
        {
          albums.length > 0 ?
          this.renderAlbums() :
          <Text> Loading... </Text>
        }
      </ScrollView>
    )
  }
};

export default AlbumList;