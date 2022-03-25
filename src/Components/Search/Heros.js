import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next'
import { heroInfo, ModalViewHero, spinnerLoading } from '../../Redux/Actions/heroActios';
import { useEffect, useMemo, useState } from 'react';

export const Heros = () => {

    //Estado para traducir
    const [t] = useTranslation("global");

    //Helpers
    const dispatch = useDispatch();

    // Registro
    const { HeroAll, SearchHero } = useSelector((state) => state.heroAll);
    const [users, setUsers] = useState([]); // Cantidad de archivos para traer a todoas las paginaciones

    //Filtramos
    const heroFilter = useMemo(() => users.filter( hero => hero.name.toLocaleLowerCase().includes( SearchHero.toLocaleLowerCase() ) ), [ SearchHero ])

    // Controlamos los datos de los Heroes detallados y direccionamos la vista al modal
    const handleClic = (id, biography, appearance, images) => {
        dispatch(heroInfo(id,{
          biography,
          appearance,
          images,
        }))

        dispatch(spinnerLoading(true)); //Activa el Spinner

        setTimeout(() => {
          dispatch(spinnerLoading(false)); //Activa el Spinner
          dispatch(ModalViewHero(true))
        }, 1000)
    
    }

    // dispara la carga de los Heroes
    useEffect(() => {
        setUsers( HeroAll )
    }, [dispatch, HeroAll, SearchHero ]);

  return (
    <>
    {
        heroFilter.length === 0 
        ?
        <div className='flex justify-center items-center mt-28'>
            <p className=' text-xl text-officialColorText font-nun font-extrabold'>{t("without-results")}</p> 
        </div>
        :

        <div  className='grid gap-1 grid-cols-1 grid-rows-1 mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-6'>
            {
                heroFilter.map( (hero, index) => (
                        <div key={index} className='flex flex-col justify-between bg-white mt-10 m-4 rounded-xl hover:transform hover:scale-110 hover:transition hover:duration-150 shadow-md'>
                            <div>
                                <div>
                                    <img className='w-full rounded-t-xl' src={hero.images.lg} alt='Logo'/>
                                </div>

                                <div className='flex justify-center items-center mb-2 bg-officialColorBtn border-t-2 border-officialColor h-10 pl-3 font-nun font-extrabold text-white'>
                                    <p>{ hero.name }</p>
                                </div>

                                <div className='ml-3 text-sm'>
                                    <p><b>{t("name")}</b> { hero.biography.fullName }</p>
                                </div>

                                <div className='ml-3 text-sm mb-2'>
                                    <p><b>{t("publisher")}</b> { hero.biography.publisher }</p>
                                </div>
                                </div>

                                <div>
                                <div 
                                    className='flex justify-center items-center h-8 m-4 bg-officialColor rounded-xl text-white font-nun font-semibold cursor-pointer hover:text-officialColorBtn hover:duration-200'
                                    onClick={ () => handleClic (  hero.id, hero.biography, hero.appearance, hero.images ) }
                                >
                                    <p>{t("see-hero")}</p>
                                </div>
                            </div>
                        </div>

            ))
            }
        </div>
    }
    </>
  )
}
