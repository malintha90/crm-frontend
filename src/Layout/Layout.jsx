import React from 'react'
import Header from './Partials/Header'
import Footer from './Partials/Footer'

const Layout = (props) => {
    const {children} = props;
  return (
    <div className="layout">
      <header className='header'>
       <Header/>
      </header>
      <main className='main-content'>
        {children}
      </main>
      <footer className='footer'>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout