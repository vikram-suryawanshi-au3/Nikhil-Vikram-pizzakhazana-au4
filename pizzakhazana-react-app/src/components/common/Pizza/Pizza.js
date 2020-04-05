import React from "react"

import AOS from 'aos';
import "../../../App.css"
import 'aos/dist/aos.css'

AOS.init();


AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out-back', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-centre', // defines which position of the element regarding to window should trigger the animation

})

// data-aos="zoom-out"

const Pizzacard = () => {
  return (
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
            <div className="cardparent">

            <div class="card mt-3 shadow p-3 mb-5 bg-white rounded"  style={{width: "17rem", height: "20rem"}} data-aos="zoom-in" data-aos-duration="1200">
                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbNR6TjvAdZWcUIVQSTCLYQQGMHGW58N7gr8QfrBOnBFAVXi4M&usqp=CAU" alt="Card image cap"/>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <br></br>
                <div className="buttons">
                    <div>
                    <button className="btn btn-info btn-sm">details</button>
                    </div>
                    <div>
                    <button className="btn btn-success btn-sm">order</button>
                    </div>
                </div>
            </div>
            <div class="card mt-3 shadow p-3 mb-5 bg-white rounded"  style={{width: "17rem", height: "20rem"}} data-aos="zoom-in" data-aos-duration="1200">
                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbNR6TjvAdZWcUIVQSTCLYQQGMHGW58N7gr8QfrBOnBFAVXi4M&usqp=CAU" alt="Card image cap"/>
                <div class="card-body"> 
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="buttons">
                    <div>
                    <button className="btn btn-info btn-sm">details</button>
                    </div>
                    <div>
                    <button className="btn btn-success btn-sm">order</button>
                    </div>
                </div>
            </div>
            <div class="card mt-3 shadow p-3 mb-5 bg-white rounded"  style={{width: "17rem", height: "20rem"}} data-aos="zoom-in" data-aos-duration="1200">
                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbNR6TjvAdZWcUIVQSTCLYQQGMHGW58N7gr8QfrBOnBFAVXi4M&usqp=CAU" alt="Card image cap"/>
                <div class="card-body"> 
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="buttons">
                    <div>
                    <button className="btn btn-info btn-sm">details</button>
                    </div>
                    <div>
                    <button className="btn btn-success btn-sm">order</button>
                    </div>
                </div>
                
            </div>
            <div class="card mt-3 shadow p-3 mb-5 bg-white rounded"  style={{width: "17rem", height: "20rem"}} data-aos="zoom-in" data-aos-duration="1200">
                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbNR6TjvAdZWcUIVQSTCLYQQGMHGW58N7gr8QfrBOnBFAVXi4M&usqp=CAU" alt="Card image cap"/>
                <div class="card-body"> 
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="buttons">
                    <div>
                    <button className="btn btn-info btn-sm">details</button>
                    </div>
                    <div>
                    <button className="btn btn-success btn-sm">order</button>
                    </div>
                </div>
                
            </div>
            <div class="card mt-3 shadow p-3 mb-5 bg-white rounded"  style={{width: "17rem", height: "20rem"}} data-aos="zoom-in" data-aos-duration="1200">
                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbNR6TjvAdZWcUIVQSTCLYQQGMHGW58N7gr8QfrBOnBFAVXi4M&usqp=CAU" alt="Card image cap"/>
                <div class="card-body"> 
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="buttons">
                    <div>
                    <button className="btn btn-info btn-sm">details</button>
                    </div>
                    <div>
                    <button className="btn btn-success btn-sm">order</button>
                    </div>
                </div>
                
            </div>
            <div class="card mt-3 shadow p-3 mb-5 bg-white rounded"  style={{width: "17rem", height: "20rem"}} data-aos="zoom-in" data-aos-duration="1200">
                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbNR6TjvAdZWcUIVQSTCLYQQGMHGW58N7gr8QfrBOnBFAVXi4M&usqp=CAU" alt="Card image cap"/>
                <div class="card-body"> 
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="buttons">
                    <div>
                    <button className="btn btn-info btn-sm">details</button>
                    </div>
                    <div>
                    <button className="btn btn-success btn-sm">order</button>
                    </div>
                </div>
                
            </div>
            <div class="card mt-3 shadow p-3 mb-5 bg-white rounded"  style={{width: "17rem", height: "20rem"}} data-aos="zoom-in" data-aos-duration="1200">
                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbNR6TjvAdZWcUIVQSTCLYQQGMHGW58N7gr8QfrBOnBFAVXi4M&usqp=CAU" alt="Card image cap"/>
                <div class="card-body"> 
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="buttons">
                    <div>
                    <button className="btn btn-info btn-sm">details</button>
                    </div>
                    <div>
                    <button className="btn btn-success btn-sm">order</button>
                    </div>
                </div>
                
            </div>
            <div class="card mt-3 shadow p-3 mb-5 bg-white rounded"  style={{width: "17rem", height: "20rem"}} data-aos="zoom-in" data-aos-duration="1200">
                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbNR6TjvAdZWcUIVQSTCLYQQGMHGW58N7gr8QfrBOnBFAVXi4M&usqp=CAU" alt="Card image cap"/>
                <div class="card-body"> 
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="buttons">
                    <div>
                    <button className="btn btn-info btn-sm">details</button>
                    </div>
                    <div>
                    <button className="btn btn-success btn-sm">order</button>
                    </div>
                </div>
                
            </div>
            <div class="card mt-3 shadow p-3 mb-5 bg-white rounded"  style={{width: "17rem", height: "20rem"}} data-aos="zoom-in" data-aos-duration="1200">
                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbNR6TjvAdZWcUIVQSTCLYQQGMHGW58N7gr8QfrBOnBFAVXi4M&usqp=CAU" alt="Card image cap"/>
                <div class="card-body"> 
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="buttons">
                    <div>
                    <button className="btn btn-info btn-sm">details</button>
                    </div>
                    <div>
                    <button className="btn btn-success btn-sm">order</button>
                    </div>
                </div>
                
            </div>
            <div class="card mt-3 shadow p-3 mb-5 bg-white rounded"  style={{width: "17rem", height: "20rem"}} data-aos="zoom-in" data-aos-duration="1200">
                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbNR6TjvAdZWcUIVQSTCLYQQGMHGW58N7gr8QfrBOnBFAVXi4M&usqp=CAU" alt="Card image cap"/>
                <div class="card-body"> 
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="buttons">
                    <div>
                    <button className="btn btn-info btn-sm">details</button>
                    </div>
                    <div>
                    <button className="btn btn-success btn-sm">order</button>
                    </div>
                </div>
                
            </div>
            <div class="card mt-3 shadow p-3 mb-5 bg-white rounded"  style={{width: "17rem", height: "20rem"}} data-aos="zoom-in" data-aos-duration="1200">
                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbNR6TjvAdZWcUIVQSTCLYQQGMHGW58N7gr8QfrBOnBFAVXi4M&usqp=CAU" alt="Card image cap"/>
                <div class="card-body"> 
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="buttons">
                    <div>
                    <button className="btn btn-info btn-sm">details</button>
                    </div>
                    <div>
                    <button className="btn btn-success btn-sm">order</button>
                    </div>
                </div>
                
            </div>
            <div class="card mt-3 shadow p-3 mb-5 bg-white rounded"  style={{width: "17rem", height: "20rem"}} data-aos="zoom-in" data-aos-duration="1200">
                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbNR6TjvAdZWcUIVQSTCLYQQGMHGW58N7gr8QfrBOnBFAVXi4M&usqp=CAU" alt="Card image cap"/>
                <div class="card-body"> 
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="buttons">
                    <div>
                    <button className="btn btn-info btn-sm">details</button>
                    </div>
                    <div>
                    <button className="btn btn-success btn-sm">order</button>
                    </div>
                </div>
                
            </div>

            </div>
            </div>
            <div className="col-2"></div>
            
        </div>
  )
}

export default Pizzacard;