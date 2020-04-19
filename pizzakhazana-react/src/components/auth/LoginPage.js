import React, {Component} from 'react'
import Input from '../common/Input'
import loginValidator from '../../utils/loginValidator'
import toastr from 'toastr'
import Auth from '../../utils/auth'
import {loginValidationFunc} from '../../utils/formValidator'
import {loginAction, redirectAction} from '../../actions/authActions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';

class LoginPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentWillMount () {
    if (Auth.isUserAuthenticated()) {
      this.props.history.push('/')
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.loginError.hasError) {
      toastr.error(nextProps.loginError.message)
    } else if (nextProps.loginSuccess) {
      this.props.redirect()
      toastr.success('Login successful')
      this.props.history.push('/')
    }
  }

  onChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit (e) {
    e.preventDefault()
    if (!loginValidator(this.state.email, this.state.password)) return
    this.props.login(this.state.email, this.state.password)
  }

  render () {
    let validObj = loginValidationFunc(
      this.state.email,
      this.state.password
    )

    return (
            // <div className="container row mt-5">
            //   <div className="col-5"></div>
            //   <div class="col-md-6 mb-4">
            //     <div class="card near-moon-gradient form-white">
            //         <div class="card-body">
            //             <form>
            //                 <h3 class="text-center indigo-text font-bold py-4"><strong>Subscribe</strong></h3>
            //                 <div class="md-form">
            //                     <PersonIcon></PersonIcon>
            //                     <Input type="text" id="form35" class="form-control"/>
            //                     <label for="form35">Your name</label>
            //                 </div>
            //                 <div class="md-form">
            //                     <i class="fa fa-envelope prefix white-text"></i>
            //                     <Input type="text" id="form25" class="form-control" placeholder="email"/>
            //                     {/* <label for="form25">Your email</label> */}
            //                 </div>
            //                 <div class="text-center py-4">
            //                     <button class="btn btn-indigo">Send <i class="fa fa-paper-plane-o ml-1"></i></button>
            //                 </div>
            //             </form>
            //         </div>
            //     </div>
            // </div>
            // </div>

     
      <div className="container">
         <div className="row">
        
              <div className='container mt-5 col-6'>
          <div className='card near-moon-gradient form-white'>
            <div className='card-body'>
            
          <form onSubmit={this.onSubmit}>
              <h1 className="text-center indigo-text font-bold">Login</h1>
              <div className='md-form'>
                <Input
                  type='text'
                  name='email'
                  // label='E-mail'
                  placeholder='Enter e-mail'
                  value={this.state.email}
                  onChange={this.onChange}
                  valid={validObj.validEmail} />
                  </div>
                  <div className='md-form'>
                <Input
                  type='password'
                  name='password'
                  // label='Password'
                  placeholder='Enter password'
                  value={this.state.password}
                  onChange={this.onChange}
                  valid={validObj.validPassword} />
                  </div>
                  
                  <div className='md-form text-center'>
                <input type='submit' className='btn btn-primary' value='Login' />
                </div>
          </form>
        </div>
        </div>
        </div>
          </div>

      </div>
  
    )
  }
}

function mapStateToProps (state) {
  return {
    loginSuccess: state.login.success,
    loginError: state.loginError
  }
}

function mapDispatchToProps (dispatch) {
  return {
    login: (email, password) => dispatch(loginAction(email, password)),
    redirect: () => dispatch(redirectAction())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage))
