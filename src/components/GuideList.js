import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import GuideDetail from './GuideDetail';

class GuideList extends Component {
  state = { guides: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ guides: response.data }));
  }

  renderAlbums() {
    return this.state.guides.map(guide =>
      <GuideDetail key={guide.title} guide={guide} />
    );
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default GuideList;
