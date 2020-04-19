import React, { Component } from 'react'
import PizzaCardList from '../common/Pizza/PizzaCardList'
import Auth from '../../utils/auth'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import CircularCards from "../circularCards/CircularCards"

class HomePage extends Component {
  render () {
    const isAdmin = Auth.isUserAdmin()
    const isAuthenticated = Auth.isUserAuthenticated()

    let headingText, secondLinkName, secondLinkPath
    if (isAdmin) {
      headingText = ', ' + Auth.getUsername()
      secondLinkName = 'View pending orders'
      secondLinkPath = '/admin/orders'
    } else if (isAuthenticated) {
      headingText = ', ' + Auth.getUsername()
      secondLinkName = 'View your orders'
      secondLinkPath = '/orders'
    } else {
      headingText = ''
      secondLinkName = 'Register'
      secondLinkPath = '/register'
    }

    const startIndex = 0
    const pageSize = 6
    const pizzaCards = this.props.products
      .sort((a, b) => b.likes.length - a.likes.length)
      .slice(startIndex, pageSize)

    return (
      // <div className='container'>
      //   <section className='jumbotron text-center'>
      //     <div className='container'>
      //       <img src="https://image.shutterstock.com/image-photo/delicious-pizza-olives-sausages-on-260nw-1100491781.jpg"></img>
      //       <h1 className='jumbotron-heading'>Welcome to Pizza Lab{headingText} !</h1>
      //       {!isAuthenticated && <p className='lead text-muted'>Your favourite pizza is now just a few clicks away. Register now and choose from our decent menu.</p>}
      //       <p>
      //         <Link to='/menu' className='btn btn-primary'>Go To Menu</Link>
      //         <Link to={secondLinkPath} className='btn btn-secondary'>{secondLinkName}</Link>
      //       </p>
      //     </div>
      //   </section>
      //   <h2 className='font-italic text-muted text-center'>Top Rated</h2>
      //   <PizzaCardList products={pizzaCards} />
      // </div>

<div class="container-fluid">
        <div className="row">
        <div>
        <div class="jumbotron bg-cover text-white" style={{backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(https://cdn.pixabay.com/photo/2015/04/28/21/20/pizza-744405_960_720.jpg)"}}>
          
          <div class="container-fluid">
          <h1 class="display-4">Welcome to pizzaKhazana...!</h1>
          <hr class="my-4"/>
          <div style={{marginTop:"200px"}}>
          <p>Best Offers and Deals on Your Favorite Pizzas are Just a Few Clicks Away...!</p>
          <a class="btn btn-primary btn-lg" href="/menu" role="button">Menu</a>
          <a class="btn btn-primary btn-lg" href="/register" role="button">Register</a>
          </div>
            </div>
        </div>
        <div style={{marginTop:"100px"}}>
            {!isAdmin && <CircularCards className="mt-5"/>}
        </div>
        <div style={{marginTop:"100px"}}>
            {!isAdmin && <h1 className='font-italic text-center white-text mt-5'>Some of our top rated pizzas...</h1>}
            {isAdmin && <h1 className='font-italic text-center white-text mt-5'>Modify top rated pizzas...</h1>}
            <PizzaCardList products={pizzaCards} />
        </div>
        </div>
      
      </div>
  </div>
  
                        
     
    )
  }
}

function mapStateToProps (state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(HomePage)
