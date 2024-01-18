import './stylesHeader.css';
import { BarraNavbar } from "../../Components/Navbar/Navbar";
// import NavMenu from '../../Components/NavbarSecundary/Navbar2';
import { NavMenu } from "../../Components/NavbarSecundary/Navbar2";
// import { BanerPrincipal } from '../../Components/Baner/BanerPrincipal';
// import { BanerPrincipal } from "../../Components/Baner/BanerPrincipal";
// import BanerPrincipal from '/src/Components/Baner/BanerPrincipal.jsx';






function Header() {


  return (
    <>
    {/* <p className='title'>Este es el Header</p> */}
    <BarraNavbar />
    <NavMenu />
    </>
  )
}

export default Header

