import React from 'react'

function Icon({icon,title}) {
  return (
    <div className="icon__container">
        <div className="icon shadow-xl">
            <img src={icon} alt="" srcset="" width={35} height={35} />
        </div>
        {title && <span className="icon__title">{title}</span>}
    </div>
  )
}

export default Icon