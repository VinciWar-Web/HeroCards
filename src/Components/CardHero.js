import { useDispatch } from 'react-redux';
import { heroInfo, ModalViewHero, spinnerLoading } from '../Redux/Actions/heroActios';
import { useTranslation } from 'react-i18next'

export const CardHero = ({ id, biography, appearance, images, name }) => {

    //Estado para traducir
    const [t] = useTranslation("global");

    //Helpers
    const dispatch = useDispatch();

    // Controlamos los datos de los Heroes detallados y direccionamos la vista al modal
    const handleClic = () => {
        dispatch(heroInfo(id,{
            biography,
            appearance,
            images,
            name
        }))

        dispatch(spinnerLoading(true)); //Activa el Spinner

        setTimeout(() => {
            dispatch(spinnerLoading(false)); //Desactiva el Spinner
            dispatch(ModalViewHero(true))
        }, 1000)

    }



  return (
    <>
        <div className='flex flex-col justify-between bg-white mt-10 m-4 rounded-xl hover:transform hover:scale-110 hover:transition hover:duration-150 shadow-md'>
            <div>
            <div>
                <img className='w-full rounded-t-xl' src={ images.lg } alt='Logo'/>
            </div>

            <div className='flex justify-center items-center mb-2 bg-officialColorBtn border-t-2 border-officialColor h-10 pl-3 font-nun font-extrabold text-white'>
                <p>{ name }</p>
            </div>

            <div className='ml-3 text-sm'>
                <p><b>{t("name")}</b> { biography.fullName }</p>
            </div>

            <div className='ml-3 text-sm mb-2'>
                <p><b>{t("publisher")}</b> { biography.publisher }</p>
            </div>
            </div>

            <div>
            <div 
                className='flex justify-center items-center h-8 m-4 bg-officialColor rounded-xl text-white font-nun font-semibold cursor-pointer hover:text-officialColorBtn hover:duration-200'
                onClick={ handleClic }
            >
                <p>{t("see-hero")}</p>
            </div>
            </div>
        </div>
    </>
  )
}
