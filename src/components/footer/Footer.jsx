import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='line'></div>
        <div className='footer-display'>
            <div>
                <h2>CryptoPlace</h2>
                <p>© 2024 CryptoPlace. All rights reserved.</p>
            </div>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
