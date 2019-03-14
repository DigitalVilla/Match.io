import React from 'react'
import classnames from 'classnames'

const Nav = (props) => {
  return (
    <div className='nav'>
      <span onClick={props.onClick} className={classnames("nav__btn nav-abs ", {
        "nav__btn--open": props.open
      })}></span>
      <span className={classnames("nav__bg nav-abs ", {
        "nav__bg--open": props.open
      })}> &nbsp;</span>

      <nav className={classnames("nav__nav", {
        "nav__nav--open": props.open
      })}>
        <ul className="nav__list">
          {/* <li className="nav__item">Chat Room</li>
          <li className="nav__item">Multiplayer</li> */}
          <li onClick={reload} className="nav__item">New Game</li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav


const reload = () => window.location.reload();