import { BrowserRouter,Routes,Route } from "react-router-dom";
import BuyerHome from "../Components/BuyerHome";
import ProductPage from "../Components/ProductPage";
import SellerHome from "../Components/SellerHome";


const AppRoutes = () =>{
    return(
        <BrowserRouter>
        <Routes>
        <Route>
            <Route path="/" element={<BuyerHome/>}></Route>
            <Route path="sellerHome" element={<SellerHome/>}>
                
            </Route>
            <Route path="productDetails" element={<ProductPage/>}></Route>

        </Route>
        </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;