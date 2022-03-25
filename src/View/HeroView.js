import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next'

import { ModalViewHero } from "../Redux/Actions/heroActios";

export const HeroView = () => {

  //Estado para traducir
  const [t] = useTranslation("global");

  //Helpers
  const dispatch = useDispatch();

  //Registro
  const { HeroDetailed } = useSelector((state) => state.heroAll)

  //Desestructuramos
  const { appearance, biography, name } = HeroDetailed
  
  const { gender, height, weight } = appearance
  const { fullName, placeOfBirth, publisher } = biography

  //Validamos si el nombre existe
  let NameHero

  if( fullName === "" || fullName === null || fullName === undefined ){
    NameHero = name
  }else{
    NameHero = fullName
  }
  
  //Controlador Cierre de Modal
  const handleCloseModal = () => {
    dispatch(ModalViewHero(false))
  }

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen fixed z-40 bg-officialColorBtn/70">
        <div className=" w-full h-screen bg-white opacity-100 shadow-md rounded-xl miniLaptop:w-70/0 miniLaptop:h-auto">

          <div className="flex justify-between">
            <div className='mt-3 ml-6'>
              <p className="text-1xl text-officialColorText font-nun font-extrabold tablet:text-2xl">{ name }</p>
            </div>
            <div
                onClick={handleCloseModal}
                className=" hover:bg-gray-200 text-gray-300 hover:text-gray-600 rounded-full w-8 h-8 mt-3 mr-3 flex justify-center items-center cursor-pointer font-bold"
              >
                x
            </div>
          </div>

          <div className="flex flex-col mt-4 mb-9 miniLaptop:flex-row miniLaptop:justify-between">

            <div className='w-full'>
              <div className="pb-2 flex flex-col items-center w-full">
                <div className="w-93/0 flex flex-col">
                  <label className="text-gray-500 mb-2">{t("name")}</label>
                  <div className="appearance-none bg-gray-200 text-gray-700 rounded w-full h-12 py-3 px-3 focus:outline-none">
                    <p>{ NameHero }</p>
                  </div>
                </div>
              </div>

              <div className="pb-2 flex flex-col items-center w-full">
                <div className="w-93/0 flex flex-col">
                  <label className="text-gray-500 mb-2">{t("place-of-birth")}</label>
                  <div className="appearance-none bg-gray-200 text-gray-700 rounded w-full h-12 py-3 px-3 focus:outline-none">
                    <p>{ placeOfBirth }</p>
                  </div>
                </div>
              </div>

              <div className="pb-2 flex flex-col items-center w-full">
                <div className="w-93/0 flex flex-col">
                  <label className="text-gray-500 mb-2">{t("publisher")}</label>
                  <div className="appearance-none bg-gray-200 text-gray-700 rounded w-full h-12 py-3 px-3 focus:outline-none">
                    <p>{ publisher }</p>
                  </div>
                </div>
              </div>

              <div className="pb-2 flex flex-col items-center w-full">
                <div className="w-93/0 flex flex-col">
                  <label className="text-gray-500 mb-2">{t("sex")}</label>
                  <div className="appearance-none bg-gray-200 text-gray-700 rounded w-full h-12 py-3 px-3 focus:outline-none">
                    <p>{ gender }</p>
                  </div>
                </div>
              </div>

              <div className="pb-2 flex flex-col items-center w-full">
                <div className="w-93/0 flex flex-col">
                  <label className="text-gray-500 mb-2">{t("height")}</label>
                  <div className="appearance-none bg-gray-200 text-gray-700 rounded w-full h-12 py-3 px-3 focus:outline-none">
                    <p>{ height[1] }</p>
                  </div>
                </div>
              </div>

              <div className="pb-2 flex flex-col items-center w-full">
                <div className="w-93/0 flex flex-col">
                  <label className="text-gray-500 mb-2">{t("weight")}</label>
                  <div className="appearance-none bg-gray-200 text-gray-700 rounded w-full h-12 py-3 px-3 focus:outline-none">
                    <p>{ weight[1] }</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex justify-center mr-0 mt-6 miniLaptop:justify-end miniLaptop:mr-8'>
              <img className='rounded-xl mr-3 shadow-md w-40 miniLaptop:w-auto' src={HeroDetailed.images.lg} alt="Hero" />
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
