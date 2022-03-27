import { CardHero } from '../CardHero';

export const GridCells = ({
  id,
  biography,
  appearance,
  images,
  name
}) => {

  return (
    <>
      < CardHero
        id={ id }
        biography={ biography }
        appearance={ appearance }
        images={ images }
        name={ name }
      />
    </>
  )
}


