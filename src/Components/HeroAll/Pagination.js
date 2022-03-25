import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllHero, NumberPage } from '../../Redux/Actions/heroActios';
import ReactPaginate from 'react-paginate';

import { GridCells } from './GridCells';
import { Footer } from './Footer';

export const Pagination = () => {
  // Helpers
  const dispatch = useDispatch();

  // Registro
  const { HeroAll } = useSelector((state) => state.heroAll);

  const [users, setUsers] = useState([]); // Cantidad de archivos para traer a todoas las paginaciones
  const [pageNumber, setPageNumber] = useState(0); // Numero de la pagina donde iniciara

  const [pageSize, setageSize] = useState(6) // Cantidad de Item en cada pagina

  const usersPerPage = pageSize; // cantidad de archivos para mostrar por paginas
  const pagesVisited = pageNumber * usersPerPage; // cantidad de archivos visitados

  const displayHero = users.slice(pagesVisited, pagesVisited + usersPerPage) // controla los archivos a mostrar
  .map((hero, index) => {
    return <GridCells key={index} {...hero} />
  });

  /*controla la cantidad de paginadores a mostrar ya que hay 10 archivos en pantalla
    dividiaria todos los usuarios entre la cantidad de archivo mostrados en pantalla y lo redondeamos con Map.ceil*/
  const pageCount = Math.ceil(users.length / usersPerPage); 
  
  // Actualiza el hooks pageNumber con la propiedad selected que nos regresa el numero de paginador
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  
  // dispara la carga inicial
  useEffect(() => {
    dispatch(getAllHero());
  }, [dispatch]);

  // dispara el numero de paginas
  useEffect(() => {
    dispatch(NumberPage(pagesVisited));
  }, [dispatch, pagesVisited]);

  // dispara la carga de los Heroes
  useEffect(() => {
    setUsers(HeroAll.slice(0, 96))
  }, [dispatch, HeroAll]);
    
  return (
    <div>

      <div className='grid gap-1 grid-cols-1 grid-rows-1 mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-6'>
        {displayHero}
      </div>

      <div>
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          marginPagesDisplayed={0}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>

      <div>
       < Footer setageSize={ setageSize }/>
      </div>

    </div>
  );
}

