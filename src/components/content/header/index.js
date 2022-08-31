import React from 'react'

function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <span className="welcome__text">Hi Sayooj Keloth,</span>
        <span className="page__name">Dashboard</span>
      </div>
      <div className="user__account">
        <div className="search__icon">
          <i class="uil uil-search" />
        </div>
        <div className="avatar">
          <img src="user.jpg" width='50' height='50' alt="" srcset="" />
        </div>
      </div>
    </div>
  )
}

export default Header