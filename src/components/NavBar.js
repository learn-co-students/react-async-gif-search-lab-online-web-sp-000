import React from 'react'
import GifListContainer from '../containers/GifListContainer'


function NavBar(props){
  const colors = {
    black: 'navbar-inverse',
    white: 'navbar-default'
  }
  
  return (
    <nav className={`navbar ${colors[props.color]}`}>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <a className='navbar-brand'>
            { props.title }
          </a>
        </div>
      </div>
      <GifListContainer />
    </nav>
  )
}

export default NavBar
