import logo from '../images/logo.png'

function Footer () {
    return (
      <footer className="footer">
        <div className='footer__wrapper'>
          <img className='footer__img' src={logo}></img>
          <div>
            <p className='footer__contact'>Contact</p>
            <p>+7 (000) 000 00 00</p>
          </div>
          <div>
          <p className='footer__site' >Site</p>
            <p>magnum.design</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;