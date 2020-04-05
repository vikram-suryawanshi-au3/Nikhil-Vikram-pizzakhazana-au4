import React from 'react'
import { Link,BrowserRouter } from 'react-router-dom'
import "../../App.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const FooterComponent = () => (
  <div>
    <footer id='footer' color='orange lighten-3' className='footer-copyright text-center py-3'>
      <span>FOLLOW US <FacebookIcon style = {{color : indigo[500]}} fontSize="large" />
      <InstagramIcon style = {{color : pink['A400']}} fontSize="large" onClick={()=>{alert("instagram")}}/>
      <TwitterIcon style = {{color : blue[500]}} fontSize="large" />
      <LinkedInIcon style = {{color : blue[700]}} fontSize="large" />
      
      </span>
      <br />
        &copy; <BrowserRouter><Link to='/'> pizzaKhazana </Link></BrowserRouter> {(new Date().getFullYear())}
        
    </footer>
  </div>
)

export default FooterComponent