import text from './footer.text';
import link from './footer.link';
import Link from "next/link";
import Form from './Form';
import { RiFacebookCircleFill, RiInstagramFill, RiMailLine, RiMapPinLine, RiWhatsappLine } from '@remixicon/react';


export default function Footer() {

  console.log('component FOOTER rendered')

  return (
    <footer className="footer py-8 overflow-hidden lg:pb-12">
      <div className="footer-container section-container px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-16 md:justify-between">
        
        <div className="footer-logo inline-flex text-xl col-span-1 lg:text-2xl font-semibold text-main">
          <a href="#">{text.sectionTitle}</a>
        </div>

        <div className="footer-data grid grid-cols-2 md:grid-cols-3 col-span-1 md:col-span-2 gap-6 gap-y-16 sm:gap-x-12 md:gap-x-16 xl:gap-x-24">

          {/* PRODUCTOS */}
          <div className='col-span-1'>
            <h3 className="footer-title text-base lg:text-xl mb-4">{text.columnTitle1}</h3>
            <ul className="footer-links grid gap-y-3">
              <li className='footer-link flex items-center justify-start transition-colors duration-300 hover:text-main'><Link href={'/celulares'} aria-label="Ir a la página de Celulares">{text.columnText1}</Link></li>
              <li className="footer-link flex items-center justify-start transition-colors duration-300 hover:text-main"><Link href={'/informatica'} aria-label="Ir a la página de Informática">{text.columnText2}</Link></li>
              <li className="footer-link flex items-center justify-start transition-colors duration-300 hover:text-main"><Link href={'/accesorios'} aria-label="Ir a la página de Accesorios">{text.columnText3}</Link></li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div className='col-span-1'>
            <h3 className="footer-title text-base lg:text-xl mb-4">{text.columnTitle2}</h3>
            <ul className="footer-links grid gap-y-3">
              <li className="footer-link inline-flex items-center justify-start transition-colors duration-300 hover:text-main space-x-1"><RiWhatsappLine /><a href={link.whatsapp} aria-label="Enviar mensaje por WhatsApp">{text.columnText4}</a></li>
              <li className="footer-link flex items-center justify-start transition-colors duration-300 hover:text-main space-x-1"><RiMailLine /><a href={link.email} aria-label="Enviar correo electrónico">{text.columnText5}</a></li>
              <li className="footer-link flex items-center justify-start transition-colors duration-300 hover:text-main space-x-1"><RiMapPinLine /><a href={link.maps} aria-label="Ver ubicación en mapa">{text.columnText6}</a></li>
            </ul>
          </div>

          {/* FROM/INPUT */}
          <div className="footer-group col-span-2 md:col-span-1 grid">

            {/* FORM */}
            <Form />

            {/* SOCIAL */}
            <div className="footer-social flex justify-center gap-x-4 sm:justify-start lg:gap-x-6">
              <a className="footer-social-link text-primary text-xl xl:text-2xl transition-colors duration-300 hover:text-main" aria-label="Perfil de Instagram" href={link.instagram}><RiInstagramFill /></a>
              <a className="footer-social-link text-primary text-xl xl:text-2xl transition-colors duration-300 hover:text-main" aria-label="Perfil de Facebook" href={link.facebook}><RiFacebookCircleFill /></a>
            </div>
          </div>

        </div>
      </div>
      
      <a href={link.developer} className="footer-copyright text-xs xl:text-sm block mt-20 text-center lg:mt-28">© All Rights Reserved By Jhony Souza 2024.</a>

    </footer>
  );

}
