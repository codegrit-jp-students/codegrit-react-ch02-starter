import React, { Component } from 'react'
import instacard_main from '../../images/instacard-main-image.jpg'

export default class extends Component {
  render() {
    return (
      <div class="card-image">
        <img src={instacard_main} />
      </div>
    )}
}