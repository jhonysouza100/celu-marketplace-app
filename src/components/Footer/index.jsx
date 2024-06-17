import text from './footer.text';
import link from './footer.link';
import Link from "next/link";
import Form from './Form';
import { RiFacebookCircleFill, RiInstagramFill, RiMailLine, RiMapPinLine, RiSendPlaneLine, RiWhatsappLine } from '@remixicon/react';

export default function Footer() {
  return (
    <footer className="footer overflow-hidden py-8 lg:pb-12">
      {/* foter-container md:justify-between md:grid-template-columns- (2, max-content) */}
        <div className="footer-container section-container grid md:flex md:justify-between gap-y-16 md:gap-16">

           <div className="footer-logo text-xl lg:text-2xl font-semibold text-main">
              <a href="#">{text.sectionTitle}</a>
           </div>

           <div className="footer-data grid grid-cols-2 md:flex gap-y-16 md:gap-16 xl:gap-24">
              <div className=''>
                <h3 className="footer-title text-base lg:text-xl mb-4">{text.columnTitle1}</h3>
                <ul className="footer-links grid gap-y-3">
                  <li className='footer-link flex items-center justify-start gap-1 transition-colors duration-300 hover:text-main'><Link href={'/celulares'} aria-label="Ir a la página de Celulares">{text.columnText1}</Link></li>
                  <li className="footer-link flex items-center justify-start gap-1 transition-colors duration-300 hover:text-main"><Link href={'/informatica'} aria-label="Ir a la página de Informática">{text.columnText2}</Link></li>
                  <li className="footer-link flex items-center justify-start gap-1 transition-colors duration-300 hover:text-main"><Link href={'/accesorios'} aria-label="Ir a la página de Accesorios">{text.columnText3}</Link></li>
                </ul>
              </div>
              <div className=''>
                 <h3 className="footer-title text-base lg:text-xl mb-4">{text.columnTitle2}</h3>
                 <ul className="footer-links grid gap-y-3">
                  <li className="footer-link flex items-center justify-start gap-1 transition-colors duration-300 hover:text-main"><RiWhatsappLine /><a href={link.whatsapp} aria-label="Enviar mensaje por WhatsApp">{text.columnText4}</a></li>
                  <li className="footer-link flex items-center justify-start gap-1 transition-colors duration-300 hover:text-main"><RiMailLine /><a href={link.email} aria-label="Enviar correo electrónico">{text.columnText5}</a></li>
                  <li className="footer-link flex items-center justify-start gap-1 transition-colors duration-300 hover:text-main"><RiMapPinLine /><a href={link.maps} aria-label="Ver ubicación en mapa">{text.columnText6}</a></li>
                 </ul>
              </div>
              <div className="footer-group col-start-1 col-end-3 md:grid md:col-span-1">
               
               {/* FORM ↓↓↓ */}
               <Form />
               {/* ↑↑↑ FORM */}
           
               <div className="footer-social flex justify-center md:justify-start gap-x-4 lg:gap-x-6">
                <a className="footer-social-link text-primary text-sm lg:text-2xl transition-colors duration-300 hover:text-main" aria-label="Perfil de Instagram" href={link.instagram}><RiInstagramFill /></a>
                <a className="footer-social-link text-primary text-sm lg:text-2xl transition-colors duration-300 hover:text-main" aria-label="Perfil de Facebook" href={link.facebook}><RiFacebookCircleFill /></a>
               </div>
              </div>
           </div>

        </div>

        <a className="footer-copyright block mt-20 lg:mt-28 text-xs text-center" href={link.developer}>&#169; All Rights Reserved By Jhony Souza.</a>

      </footer>
  );
}