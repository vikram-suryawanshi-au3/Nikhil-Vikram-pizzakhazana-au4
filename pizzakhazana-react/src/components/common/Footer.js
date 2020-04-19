import React from 'react'
import { Footer } from 'mdbreact'
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';

const FooterComponent = () => (
  <div >
    <br />
    <br />
    <br />
    <br />
    <Footer   >

      <footer class="page-footer deep-purple center-on-small-only pt-0">

          <div class="container">

                <div class="row pt-5 mb-3 text-center d-flex justify-content-center">

                    <div class="col-md-2 mb-3">
                        <h6 class="title font-bold"><a href="#!">About us</a></h6>
                    </div>
                  
                    <div class="col-md-2 mb-3">
                        <h6 class="title font-bold"><a href="/menu">Products</a></h6>
                    </div>
                
                    <div class="col-md-2 mb-3">
                        <h6 class="title font-bold"><a href="#!">Gift card</a></h6>
                    </div>
                
                    <div class="col-md-2 mb-3">
                        <h6 class="title font-bold"><a href="/help">Help</a></h6>
                    </div>
                  
                    <div class="col-md-2 mb-3">
                        <h6 class="title font-bold"><a href="#!">Contact</a></h6>
                    </div>

                </div>

                <hr class="rgba-white-light" style={{margin: "0 15%;"}}/>


                <hr class="clearfix d-md-none rgba-white-light" style={{margin: "10% 15% 5%;"}}/>

                <div class="row pb-3">

                    <div class="col-md-12">

                        <div class="footer-socials mb-5 flex-center">
                            <FacebookIcon  fontSize="large" />
                            <TwitterIcon  fontSize="large" />
                            <LinkedInIcon  fontSize="large" />
                            <InstagramIcon  fontSize="large" onClick={()=>{alert("instagram")}}/>
                            <PinterestIcon  fontSize="large" onClick={()=>{alert("instagram")}}/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-copyright">
                <div class="container-fluid">
                    © 2016 Copyright: <a href="/"> pizzaKhazana </a>
                </div>
            </div>

        </footer>

    </Footer>
  </div>
  
)

export default FooterComponent
