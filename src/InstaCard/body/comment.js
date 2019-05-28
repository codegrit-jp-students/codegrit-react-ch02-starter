import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <li class="poster-comment">
        <a class="commenter-name">
          {this.props.username}
        </a>
        <span class="commenter-comment">
          {this.props.comment}
        </span>
      </li>
    )}
}