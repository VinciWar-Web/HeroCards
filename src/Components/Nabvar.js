import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Lang } from '../translations/component/Lang'
import logo from '../Img/logo.png'

export const Nabvar = () => {

    const [t] = useTranslation("global");

  return (
    <>
        <nav className="flex items-center justify-between flex-wrap bg-white shadow-md px-4 p-6 fixed w-screen z-40">
            
            <div className="flex items-center text-white mr-6 ml-3">
                <img className='w-10 mr-2' src={logo} alt={logo} />
                <span className="font-nun font-extrabold text-xl text-officialColorText">Hero Cards</span>
            </div>

            <div className="flex items-center mr-20 ml-4 mt-4 mobile:mt-0 tablet:ml-0">

                <div className='fixed top-6 right-4'>
                    <Lang />
                </div>
                
                <div>
                    <Link 
                        to="/" 
                        className="mt-4text-officialColorText hover:text-officialColor mr-4">
                            {t("home")}
                    </Link>
                </div>

                <div>
                    <Link 
                        to="/search" 
                        className="mt-4text-officialColorText hover:text-officialColor mr-4">
                            {t("search")}
                    </Link>
                </div>
            </div>
        </nav>
    </>
  )
}
