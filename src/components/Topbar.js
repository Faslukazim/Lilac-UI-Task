import React from 'react'

function Topbar() {
  return (
    <div className="top-bar">
            <div className="topleft">
              <div className="contact-info">
                <span className="phone"><img src="./images/phone.svg" alt="icon" /> +1-555-123-4567</span>
                <span className="email"><img src="./images/envelope.svg" alt="icon" /> info@example.com</span>
              </div>
            </div>
            <div className="dropdowns">
              <span className="location"><img src="./images/location.svg" alt="icon" /> 123 Main St, Anytown USA</span>
              <div className="money-dropdown">
                <select>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
              <div className="language-dropdown">
                <select>
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="es">Español</option>
                </select>
              </div>
            </div>
          </div>
  )
}

export default Topbar