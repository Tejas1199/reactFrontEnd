import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import BuyerRightSideBar from "./BuyerRightSideBar";
import "./css/productPage.css";
import ProductDetails from "./ProductDetails";
import SimilarProduct from "./SimilarProduct";

function ProductPage() {
  return (
    <div>
      <Header />
      <div class="conatiner-fluid">
        <div class="row">
          <div class="col-9">
            <div class="productInfo">
              <div class="leftDiv">
                <img class="card-size" src="img/product1.png" />
              </div>
              <div class="rightDiv">
                <ProductDetails/>
              </div>
            </div>
          </div>

          <div class="col-3 margin-top">
            <BuyerRightSideBar />
          </div>
          <div>
            <SimilarProduct/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
