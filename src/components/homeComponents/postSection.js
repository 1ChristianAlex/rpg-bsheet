import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { PostS, ButtonMorePost } from '../../styledComponents/postSectionStyled';
import { Post as PostProvider } from '../../providers/posts';
import { BLink, OnlyText } from '../../styledComponents/default';

export class PostSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loaded: false
    };
  }
  async componentDidMount() {
    await this.getPosts();
  }
  async getPosts() {
    let arrayPost = await new PostProvider().getPosts();
    this.setState({
      items: arrayPost
    });
  }
  PostTemplate(props) {
    return (
      <Col md={4}>
        <PostS.article>
          <PostS.imgContainer>
            <BLink.link to={props.link}>
              <PostS.img src={props.img} />
            </BLink.link>
            <PostS.textTime>
              {props.time} | {props.author}
            </PostS.textTime>
          </PostS.imgContainer>
          <PostS.TextContainer>
            <BLink.link to={props.link}>
              <PostS.textTitle>{props.title}</PostS.textTitle>
            </BLink.link>
            <PostS.textSub>{props.subtitle}</PostS.textSub>
          </PostS.TextContainer>
        </PostS.article>
      </Col>
    );
  }

  render() {
    let stateItem = this.state.items;

    return (
      <PostS.section>
        <PostS.container>
          <Row>
            {stateItem.map((item, i) => {
              console.log(item.img);
              return (
                <this.PostTemplate
                  key={i}
                  img={item.img}
                  link={item.link}
                  author={item.author}
                  time={item.time}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              );
            })}
            <ButtonMorePost.btnContainer>
              <OnlyText to="posts">Mais Posts</OnlyText>
            </ButtonMorePost.btnContainer>
          </Row>
        </PostS.container>
      </PostS.section>
    );
  }
}
