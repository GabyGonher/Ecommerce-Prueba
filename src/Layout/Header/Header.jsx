import './stylesHeader.css';
import { BarraNavbar } from "../../Components/Navbar/Navbar";
// import NavMenu from '../../Components/NavbarSecundary/Navbar2';
import { NavMenu } from "../../Components/NavbarSecundary/Navbar2";





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

