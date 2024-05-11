import './footer.css'
import text from './footer.text'
import link from './footer.link'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container grid">
        
        <Link to={'/'} className="footer-logo">{text.sectionTitle}</Link>

        <div className="footer-data grid">
          <div>
            <h3 className="footer-title">{text.columnTitle1}</h3>
            <ul className="footer-links">
              <li><Link to={'/celulares'} className='footer-link'>{text.columnText1}</Link></li>
              <li><Link to={'/informatica'} className="footer-link">{text.columnText2}</Link></li>
              <li><Link to={'/accesorios'} className="footer-link">{text.columnText3}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">{text.columnTitle2}</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">{text.columnText4}</a></li>
              <li><a href="#" className="footer-link">{text.columnText5}</a></li>
              <li><a href="#" className="footer-link">{text.columnText6}</a></li>
            </ul>
          </div>

          <div className="footer-group">
            <form action="" className="footer-form">
              <input type="email" className="footer-input" placeholder="Email" />
              <a href="" className="footer-button button">{text.buttonText1} <i className="ri-send-plane-line" /></a>
            </form>

            <div className="footer-social">
              <a href="#" target="_blank" className="footer-social-link"><i className="ri-instagram-fill" /></a>
              <a href="#" target="_blank" className="footer-social-link"><i className="ri-facebook-circle-fill" /></a>
              <a href="#" target="_blank" className="footer-social-link"><i className="ri-youtube-fill" /></a>
            </div>
          </div>
        </div>
      </div>
      
      <a href={link.developer} className="footer-copyright">© All Rights Reserved By Jhony Souza 2024.</a>
      
    </footer>
  );
}

export default Footer;
