import React, { Component } from 'react';
import { Banner } from '../../styledComponents/bannerHomeStyled';
export class BannerHome extends Component {
  render() {
    return (
      <Banner.section>
        <Banner.container>
          <Banner.item>{this.getBannerPost().text}</Banner.item>
          <Banner.item>{this.getBannerPost().embed}</Banner.item>
        </Banner.container>
      </Banner.section>
    );
  }
  getBannerPost() {
    let bannerContent = {
      text: (
        <Banner.textContent>
          <Banner.h1>Marvel’s Avengers é revelado com trailer empolgante</Banner.h1>
          <Banner.p>
            O primeiro trailer de Marvel’s Avengers finalmente foi revelado durante a conferência da Square Enix na E3 2019! Confira acima dublado ou
            abaixo no áudio original.
          </Banner.p>
        </Banner.textContent>
      ),
      embed: (
        <Banner.embed aspect="4by3">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/LDBojdBAjXU" allowFullScreen title="banner-home" />
        </Banner.embed>
      )
    };
    return bannerContent;
  }
}
