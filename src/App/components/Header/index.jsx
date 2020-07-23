import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  
 
  render () {
   return (
    <header className="header">
      

        <Link to="/home">
          <div className="logo">Logo</div>
        </Link>
        <div className="header-content">
          <Link className="link" to="/home">
            Naslovna
          </Link>
          <Link className="link" to="/aktualniProjekti">
            Aktualni projekti
          </Link>
          <Link className="link" to="/tim">
            Tim
          </Link>
          <Link className="link" to="/kontakt">
            Kontakt
          </Link>
          <Link className="link" to="/portal">
            Portal
          </Link>
          <Link className="link" to="/reference">
            Reference
          </Link>
        </div>
      
      
    </header>
  )
  }
}

export default Header;