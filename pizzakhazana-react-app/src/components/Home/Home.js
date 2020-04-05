import React,{ Component } from 'react'
import Pizzacard from "../common/Pizza/Pizza"

class Home extends Component{

    render () {
        return (
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10 mt-5">
                <div>
                    <div class="jumbotron card card-image" style={{backgroundImage: "url(https://img.freepik.com/free-photo/view-frame-with-pizza-black-background_23-2148308883.jpg?size=626&ext=jpg)",backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover"}}>
                    <div class="text-white text-center py-5 px-4">
                        <div>
                        <h2 class="card-title h1-responsive mb-5 font-bold" ><strong>Welcome to pizzaKhazana</strong></h2>
                            <p class="mx-5 mb-5">Now food it just few clicks away Order your favorite food online and get it served hot.</p>
                            <a class="btn btn-outline-info" href="/menu"> Menu</a>
                            <a class="btn btn-outline-info" href="/register"> Register</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-1"></div>
                
                <div>
                <Pizzacard></Pizzacard>
                </div>
            </div>
        )
    }
}

export default Home