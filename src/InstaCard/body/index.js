import React, { Component } from 'react'
import Header from '../Header'
import CardImage from './card-image'
import MainIcons from './main-icons'
import Comments from './comments'
import LikeCounts from './like-counts'
import PostDate from './post-date'
import CommentBox from './comment-box'


export default class extends Component {
  render() {
    return (
      <body>
        <article class="insta-card">
          <Header />
          <section class="card-body">
            <CardImage />
            <section class="card-main">
              <MainIcons />
              <LikeCounts />
              <Comments />
              <PostDate />
              <CommentBox />
            </section>
          </section>
        </article>
      </body>
  )}
}
