import React from "react";
import './css/footer.css'

function Footer(){
    return(
       <footer >
        <section class="jumbotron bg-dark" id="mainBanner">
        <div class="container-fluid">
        <div class="row">
        <div class="col-3">
        <a class="navbar-brand">&nbsp;<img src="img/logo.png"/></a>
            </div>
            <div class="col-3 text-color">
            <b>THE COMPANY </b><br/> <br/>          
                <div class="text-size">Our Story</div>
                <div class="text-size">Terms of Use</div>
                <div class="text-size">Site Map</div>
            </div>
            <div class="col-3 text-color">
            <b>ORDER AND SUPPORT</b> <br/> <br/>
            <div class="text-size">Contact Us</div>
                <div class="text-size">Bulk Orders</div>
                <div class="text-size">Rewards</div>
                <div class="text-size">FAQ's</div>
            </div>
            <div class="col-3 text-color">
            <b>SOCIAL MEDIA</b> <br/> <br/>
            <div class="text-size">Facebook<img src="img/facebook.png"/></div>
                <div class="text-size">Instagram<img src="img/instagram.png"/></div>
                <div class="text-size">Pinterest<img src="img/pinterest.png"/></div>
                <div class="text-size">Linkedin<img src="img/linkedin.png"/></div>
            </div>

            </div>
            
        </div>
      </section>
       </footer>
    )
}

export default Footer;