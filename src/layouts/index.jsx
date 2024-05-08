import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { pages } from '../router'

export default function Layout({children}) {

  console.log("component LAYOUT rendered")

  return (
    <div className='bg-zinc-700 h-screen text-white'>
      <Navbar pages={pages}/>
      {children}
      {/* <Footer /> */}
    </div>
  );
}