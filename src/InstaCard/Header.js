import React, { Component } from 'react'
import avatar from '../images/avatar.png'

export default class extends Component {
  render() {
    return (
        <section class="card-header">
          <div class="poster-avatar">
            <img src={avatar} />
          </div>
          <div class="poster-name">
            testuser
          </div>
        </section>
    )}
}