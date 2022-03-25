import { useDispatch } from 'react-redux';
import { heroInfo, ModalViewHero, spinnerLoading } from '../../Redux/Actions/heroActios';
import { useTranslation } from 'react-i18next'

export const GridCells = ({
  id,
  biography,
  appearance,
  images,
  name: Hero
}) => {

  //Estado para traducir
  const [t] = useTranslation("global");

  //Validamos si los valores existen
  let HeroName
  let FullName
  let Biography

  if(Hero === "" || Hero === null || Hero === undefined){
    HeroName = "Sin Información"
  }else{
    HeroName = Hero
  }  

  if(biography.fullName === "" || biography.fullName === null || biography.fullName === undefined){
    FullName = "Sin Información"
  }else{
    FullName = biography.fullName
  }  

  if(biography.publisher === "" || biography.publisher === null || biography.publisher === undefined){
    Biography = "Sin Información"
  }else{
    Biography = biography.publisher
  }  

  //Helpers
  const dispatch = useDispatch();

  // Controlamos los datos de los Heroes detallados y direccionamos la vista al modal
  const handleClic = () => {
    dispatch(heroInfo(id,{
      biography,
      appearance,
      images,
      name: Hero
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
            <img className='w-full rounded-t-xl' src={images.lg} alt='Logo'/>
          </div>

          <div className='flex justify-center items-center mb-2 bg-officialColorBtn border-t-2 border-officialColor h-10 pl-3 font-nun font-extrabold text-white'>
            <p>{ HeroName }</p>
          </div>

          <div className='ml-3 text-sm'>
            <p><b>{t("name")}</b> { FullName }</p>
          </div>

          <div className='ml-3 text-sm mb-2'>
            <p><b>{t("publisher")}</b> { Biography }</p>
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


