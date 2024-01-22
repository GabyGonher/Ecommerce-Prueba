import BanerPrincipal from "../../Components/Baner/BanerPrincipal"
import { Carrusel } from "../../Components/Card/Seccion/Carrusel"
import Contacto from "../../Components/Contacto/Contacto"
import MejoresOfertas from "../../Components/MejoresOfertas/MejoresOfertas"
import SeccionOferta from "../../Components/Ofertas/SeccionOferta"
import Promociones from "../../Components/Promociones/Promociones"
import SeccionOfertaExclusiva from "../../Components/ofertasExclusivas/Seccion"



export default function Body() {


  return (
    <>
      <BanerPrincipal />
      <SeccionOferta />
      <SeccionOfertaExclusiva />
      <Carrusel />
      <Promociones />
      <MejoresOfertas />
      <Contacto />
    </>
  )
}