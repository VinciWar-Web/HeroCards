import {
    BrowserRouter, 
    Route,
    Routes, 
} from "react-router-dom";
import { Nabvar } from "../Components/Nabvar";
  
import { HeroList } from "../View/HeroList";
import { Search } from "../View/Search";
  
export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Nabvar />
                <Routes>
                    <Route exact path="/" element={ <HeroList />} />
                    <Route exact path="/search" element={ <Search /> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
  