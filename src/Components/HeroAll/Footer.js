import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next'

export const Footer = ({setageSize}) => {

  //Estado para traducir
  const [t] = useTranslation("global");

  // Registro
  const { NumberPage } = useSelector((state) => state.heroAll);

  //Controlamos la cantidad de item a listar
  const handleSelect = (e) => {
    setageSize(Number(e.target.value))
  }

  return (
    <>
      <div className="flex justify-center mt-8 h-10">

          <select className="footerSelect" onChange={ handleSelect }>
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="48">48</option>
              <option value="96">96</option>
          </select>
          
          <div className="flex justify-center items-center ml-2 text-lg text-officialColorBtn font-nun font-semibold">
            <p>{t("item-shown")}: <b>{ NumberPage }</b></p>
          </div>

      </div>
    </>
  )
}
