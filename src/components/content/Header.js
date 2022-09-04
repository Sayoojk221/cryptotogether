import React from 'react'

function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <span className="welcome__text text-md md:text-lg">Hi Sayooj Keloth,</span>
        <span className="page__name text-2xl md:text-3xl">Dashboard</span>
      </div>
      <div className="user__account">
        <div className="search__icon">
          <i class="uil uil-search text-xl md:text-2xl" />
        </div>
        <div className="avatar">
          <img src="user.jpg" width='50' height='50' alt="" srcset="" />
        </div>
      </div>
    </div>
  )
}

export default Header