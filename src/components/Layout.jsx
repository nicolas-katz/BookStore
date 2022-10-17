import React from 'react'
import NavBar from './NavBar'

function Layout({children}) {
  return (
    <div>
        <NavBar />
        <div className='LayoutContainer'>
            {children}
        </div>
    </div>
  )
}

export default Layout