import React from 'react'

function Footer() {

  const footerYear = new Date().getFullYear()
  return (
    <div className="container">
      <footer className="footer">
        <h4>copyright &copy {footerYear} All rights reserved</h4>
      </footer>
    </div>
  )
}

export default Footer