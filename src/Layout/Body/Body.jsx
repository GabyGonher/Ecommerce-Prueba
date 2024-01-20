import BanerPrincipal from "../../Components/Baner/BanerPrincipal"
import { CardProduct } from "../../Components/Card/Card"
import SeccionOferta from "../../Components/Ofertas/SeccionOferta"
import SeccionOfertaExclusiva from "../../Components/ofertasExclusivas/Seccion"









export default function Body() {


  return (
    <>
      <BanerPrincipal />
      <SeccionOferta />
      <SeccionOfertaExclusiva />
      <CardProduct />
    </>
  )
}