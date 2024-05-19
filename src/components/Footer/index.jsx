import text from './footer.text';
import link from './footer.link';
import Link from "next/link";
import Form from './Form';
import { RiFacebookCircleFill, RiInstagramFill, RiMailLine, RiMapPinLine, RiWhatsappLine } from '@remixicon/react';


export default function Footer() {

  console.log('component FOOTER rendered')

  return (
    <footer className="footer">
      <div className="footer-container container grid gap-6 gap-y-16">
        
        <Link href={'/'} className="footer-logo text-xl font-semibold main-color">{text.sectionTitle}</Link>

        <div className="footer-data grid gap-6 gap-y-16 grid-cols-2">

          {/* PRODUCTOS */}
          <div>
            <h3 className="footer-title text-lg mb-4">{text.columnTitle1}</h3>
            <ul className="footer-links grid gap-y-3">
              <li className='footer-link flex items-center justify-start transition-colors duration-300 hover:main-color'><Link href={'/celulares'} aria-label="Ir a la página de Celulares">{text.columnText1}</Link></li>
              <li className="footer-link flex items-center justify-start transition-colors duration-300 hover:main-color"><Link href={'/informatica'} aria-label="Ir a la página de Informática">{text.columnText2}</Link></li>
              <li className="footer-link flex items-center justify-start transition-colors duration-300 hover:main-color"><Link href={'/accesorios'} aria-label="Ir a la página de Accesorios">{text.columnText3}</Link></li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="footer-title text-lg mb-4">{text.columnTitle2}</h3>
            <ul className="footer-links grid gap-y-3">
              <li className="footer-link inline-flex items-center justify-start transition-colors duration-300 hover:main-color space-x-1"><RiWhatsappLine /><a href={link.whatsapp} aria-label="Enviar mensaje por WhatsApp">{text.columnText4}</a></li>
              <li className="footer-link flex items-center justify-start transition-colors duration-300 hover:main-color space-x-1"><RiMailLine /><a href={link.email} aria-label="Enviar correo electrónico">{text.columnText5}</a></li>
              <li className="footer-link flex items-center justify-start transition-colors duration-300 hover:main-color space-x-1"><RiMapPinLine /><a href={link.maps} aria-label="Ver ubicación en mapa">{text.columnText6}</a></li>
            </ul>
          </div>

          {/* FROM/INPUT */}
          <div className="footer-group col-span-2">

            {/* FORM */}
            <Form />

            {/* SOCIAL */}
            <div className="footer-social flex justify-center gap-x-4">
              <a className="footer-social-link text-white text-xl transition-colors duration-300 hover:main-color" aria-label="Perfil de Instagram" href={link.instagram}><RiInstagramFill /></a>
              <a className="footer-social-link text-white text-xl transition-colors duration-300 hover:main-color" aria-label="Perfil de Facebook" href={link.facebook}><RiFacebookCircleFill /></a>
            </div>
          </div>
        </div>
      </div>
      
      <a href={link.developer} className="footer-copyright block mt-20 text-sm text-center text-zinc-400">© All Rights Reserved By Jhony Souza 2024.</a>

    </footer>
  );

}
