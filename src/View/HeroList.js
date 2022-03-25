import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { HeroView } from './HeroView'
import { Pagination } from '../Components/HeroAll/Pagination'
import { SpinnerLoading } from '../Components/SpinnerLoading'

import { getAllHero, spinnerLoading } from '../Redux/Actions/heroActios'
import stars from '../Img/stars.gif'

export const HeroList = () => {

  // Helpers
  const dispatch = useDispatch();

  //Estado del modal
  const { HeroAll, ModalViewHero, SpinnerActive } = useSelector((state) => state.heroAll)

  // dispara la carga inicial y cierra el modal
  useEffect(() => {
    setTimeout(() => {
      dispatch(getAllHero());
      dispatch(spinnerLoading(false));
    }, 1000)
  }, [dispatch]);


  return ( HeroAll.length === 0 ? <SpinnerLoading /> : (
      <>

        { SpinnerActive === true && <SpinnerLoading /> }

        { ModalViewHero && <HeroView /> }
        
        <div className='pt-20'>
            <div className='z-20'>
              < Pagination />
            </div>
        </div>

        <div className='w-40 fixed bottom-0 right-0 hidden tablet:block'>
          <img className='z-10' src={ stars } alt={ stars } />
        </div>
      </>
    )
  )
}
