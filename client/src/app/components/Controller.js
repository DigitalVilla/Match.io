import React, { Component } from 'react'

class Controller extends Component {
  render() {
    const btns = [
      { value: "Lobby", icon: "camera" },
      { value: "Chat", icon: "user" },
      { value: "Leaderboards", icon: "search" },
      { value: "settings", icon: "settings" },
      { value: "logout", icon: "exit" }];
    return (
      <div className='controller'>
        <ul>
          <li>Lobby</li>
          <li>Lobby</li>
          <li>Lobby</li>
          <li>Chat</li>
          <li>Logout</li>
        </ul>
    </div>
    )
  }
}

export default Controller