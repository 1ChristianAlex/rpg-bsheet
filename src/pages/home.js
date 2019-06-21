import React, { Component } from 'react';
import { BannerHome } from '../components/homeComponents/bannerHome';
import { PostSection } from '../components/homeComponents/postSection';
import { Stones } from '../components/homeComponents/shotStones';

export default class Home extends Component {
  render() {
    return (
      <>
        <BannerHome />
        <PostSection />
        <Stones />
      </>
    );
  }
}
