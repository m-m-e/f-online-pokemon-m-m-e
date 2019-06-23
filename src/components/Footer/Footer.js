import React from 'react';
import './footer.scss';

class Footer extends React.Component{
  render(){
    return(
      <footer className="footer"> 
      <p className="footer__copy">{'\u00A9'} 2019</p>
      <a href="https://www.linkedin.com/in/meganmyfanwyedwards/" className="footer__link">Megan Myfanwy Edwards</a>
      <a href="topOfPage">Go back to top</a>
      </footer>
    );
  }
}

export default Footer;