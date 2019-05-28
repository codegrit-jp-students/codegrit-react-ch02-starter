import React, { Component } from 'react'
import avatar from '../images/avatar.png'
import instacard_main from '../images/instacard-main-image.jpg'
import heart from '../images/heart.png'
import bubble from '../images/bubble.png'
import bookmark from '../images/bookmark.png'

export default class extends Component {
  render() {
    return (
      <body>
        <article class="insta-card">
          <section class="card-header">
            <div class="poster-avatar">
              <img src={avatar} />
            </div>
            <div class="poster-name">
              testuser
            </div>
          </section>
          <section class="card-body">
            <div class="card-image">
              <img src={instacard_main} />
            </div>
            <section class="card-main">
              <div class="card-main-icons">
                <ul class="flex-container card-main-icons-left">
                  <li class="icon-heart">
                    <img src={heart} width="30px" height="30px" />
                  </li>
                  <li class="icon-comment">
                    <img src={bubble} width="30px" height="30px" />
                  </li>
                </ul>
                <ul class="flex-container card-main-icons-right">
                  <li class="icon-bookmark icons-right">
                    <img src={bookmark} width="30px" height="30px" />
                  </li>
                </ul>
              </div>
              <div class="like-counts">100 likes</div>
              <ul class="comments">
                <li class="poster-comment">
                  <a class="commenter-name">
                    testuser
                  </a>
                  <span class="commenter-comment">
                    This is the insta-card!
                  </span>
                </li>
                <li>
                  <a class="commenter-name">
                    testuser2
                  </a>
                  <span class="commenter-comment">
                    So cool!
                  </span>
                </li>
                </ul>
                <div class="post-date">1日前</div>
                <section class="comment-box">
                  <div class="comment-area">コメントする</div>
                </section>
            </section>
          </section>
        </article>
      </body>
  )}
}
