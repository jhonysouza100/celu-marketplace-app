import text from './footer.text';
import link from './footer.link';
import Link from "next/link";
import Form from './Form';
import { RiFacebookCircleFill, RiInstagramFill, RiMailLine, RiMapPinLine, RiSendPlaneLine, RiWhatsappLine } from '@remixicon/react';

export default function Footer() {
  return (
    <footer className="footer overflow-hidden py-8">
        <div className="footer-container section-container grid gap-y-16">
           <div>
              <a href="#" className="footer-logo text-xl lg:text-2xl font-semibold text-main">{text.sectionTitle}</a>
           </div>
           <div className="footer-data grid grid-cols-2 gap-y-16">
              <div>
                <h3 className="footer-title text-base lg:text-xl mb-4">{text.columnTitle1}</h3>
                <ul className="footer-links grid gap-y-3">
                  <li className='footer-link flex items-center justify-start gap-1 transition-colors duration-300 hover:text-main'><Link href={'/celulares'} aria-label="Ir a la página de Celulares">{text.columnText1}</Link></li>
                  <li className="footer-link flex items-center justify-start gap-1 transition-colors duration-300 hover:text-main"><Link href={'/informatica'} aria-label="Ir a la página de Informática">{text.columnText2}</Link></li>
                  <li className="footer-link flex items-center justify-start gap-1 transition-colors duration-300 hover:text-main"><Link href={'/accesorios'} aria-label="Ir a la página de Accesorios">{text.columnText3}</Link></li>
                </ul>
              </div>
              <div>
                 <h3 className="footer-title text-base lg:text-xl mb-4">{text.columnTitle2}</h3>
                 <ul className="footer-links grid gap-y-3">
                  <li className="footer-link flex items-center justify-start gap-1 transition-colors duration-300 hover:text-main"><RiWhatsappLine /><a href={link.whatsapp} aria-label="Enviar mensaje por WhatsApp">{text.columnText4}</a></li>
                  <li className="footer-link flex items-center justify-start gap-1 transition-colors duration-300 hover:text-main"><RiMailLine /><a href={link.email} aria-label="Enviar correo electrónico">{text.columnText5}</a></li>
                  <li className="footer-link flex items-center justify-start gap-1 transition-colors duration-300 hover:text-main"><RiMapPinLine /><a href={link.maps} aria-label="Ver ubicación en mapa">{text.columnText6}</a></li>
                 </ul>
              </div>
              <div className="footer-group col-start-1 col-end-3">
               {/* FORM ↓↓↓ */}
               <form action="" className="footer-form">
                  <input type="email" className="footer-input" placeholder="Email" />
                  <button className="footer-button button">Subscribe <RiSendPlaneLine className="ri-send-plane-line" /></button>
               </form>
               {/* ↑↑↑ FORM */}
           
               <div className="footer-social">
                <a className="footer-social-link" aria-label="Perfil de Instagram" href={link.instagram}><RiInstagramFill /></a>
                <a className="footer-social-link" aria-label="Perfil de Facebook" href={link.facebook}><RiFacebookCircleFill /></a>
               </div>
              </div>
           </div>
        </div>

        <a className="footer-copyright" href={link.developer}>&#169; All Rights Reserved By Jhony Souza.</a>

      </footer>
  );
}