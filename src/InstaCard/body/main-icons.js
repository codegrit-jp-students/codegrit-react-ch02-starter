import React, { Component } from 'react'
import heart from '../../images/heart.png'
import bubble from '../../images/bubble.png'
import bookmark from '../../images/bookmark.png'

export default class extends Component {
  render() {
    return (
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
    )}
}