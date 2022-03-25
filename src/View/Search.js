import { useEffect } from 'react'
import { useFormReact } from '../hooks/useFormReact'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

import { HeroView } from './HeroView'
import { searchHero, spinnerLoading } from '../Redux/Actions/heroActios'
import { Heros } from '../Components/Search/Heros'
import { SpinnerLoading } from '../Components/SpinnerLoading'

import lupa from '../Img/lupa.png'

export const Search = () => {

    //Hooks
    const [t] = useTranslation("global");

    //Helpers
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const location = useLocation()

    // Registro
    const { ModalViewHero, SpinnerActive } = useSelector((state) => state.heroAll)

    //Transforma la data que viene del location y con la libreria convertimos la data query en strint
    const { q = '' } = queryString.parse( location.search ) 

    //Hooks Datos del formulario
    const [ formValues, handleInputChange ] = useFormReact({
        search: q
    })
    const { search } = formValues

    //Manejador del Buscador
    const handleSubmit = (e) => {
        e.preventDefault()

        navigate(`?q=${ search }`)
        dispatch(searchHero(search))
        dispatch(spinnerLoading(true));
        
        setTimeout(() => {
            dispatch(spinnerLoading(false));
        }, 1000)
    }

    //Cierra el modal
    useEffect(() => {
        setTimeout(() => {
          dispatch(spinnerLoading(false));
        }, 1000)
    }, [dispatch]);


  return (
      <>
        { SpinnerActive === true && <SpinnerLoading /> }

        { ModalViewHero && <HeroView /> }

        <div className='pt-28 mobile:pt-24'>
            
            <div className='flex justify-center'>

                <div className='flex justify-around bg-gray-100 rounded-lg py-4 mt-6 w-11/12'>
                    <form
                        className="w-11/12 bg-transparent flex justify-between"
                        onSubmit={handleSubmit}
                    >

                        <input
                            type="text"
                            autoComplete='off'
                            className="appearance-none texto w-11/12  bg-transparent focus:outline-none"
                            name="search"
                            placeholder={t("look-for-a-hero")}
                            onChange={ handleInputChange }
                            value={ search }
                        />

                        <button>
                            <img
                                className="mx-5 cursor-pointer"
                                src={lupa}
                                alt="search icon"
                            />
                        </button>
                    </form>
                </div>


            </div>
            
            <div>
                <Heros />
            </div>

        </div>
    </>
  )
}
