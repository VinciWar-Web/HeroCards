import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next'
import { useEffect, useMemo, useState } from 'react';

import { CardHero } from '../CardHero';

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
                    < CardHero
                        key={index}
                        id={ hero.id }
                        biography={ hero.biography }
                        appearance={ hero.appearance }
                        images={ hero.images }
                        name={ hero.name }
                    />
                ))
            }
        </div>
    }
    </>
  )
}
