import React from 'react'
import "./css/productPage.css";


function ProductDetails() {
  return (
    <div>
        <div class="card prodCardSize"><br/>
        <div>&nbsp;product Title</div><br/>
        <div>&nbsp;product code</div><br/>
                <div>&nbsp;Product description</div><br/>
                <div>&nbsp;Color</div><br/>
                <div>&nbsp;Product Prize</div><br/>
                <div>&nbsp;&nbsp;
                <button class="btn-primary">count</button>&nbsp;&nbsp;&nbsp;
                <button class="btn-primary">Add to Cart</button>
                </div>
        </div>
    </div>
  )
}

export default ProductDetails;