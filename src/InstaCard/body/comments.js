import React, { Component } from 'react'
import Comment from './comment'

export default class extends Component {
  render() {
    return (
      <ul class="comments">
        <Comment username='testuser' comment='This is the insta-card!' />
        <Comment username='testuser2' comment='So cool!' />
      </ul>
    )}
}