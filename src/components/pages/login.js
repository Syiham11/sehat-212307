import React, { Component } from 'react'
import users from '../pages/fake-users.json'

class Login extends Component {
    constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      errors: {},
    }

    this.onChange = this.onChange.bind(this)
    this.submitted = false;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    
      
      localStorage.removeItem('userId')
      for (var x = 0; x < users.length; x++)
      {
          if (this.state.email === users[x].email && this.state.password === users[x].password)
          {
              var add = users[x].id
              localStorage.setItem('userId', add);
              window.location.href = '/';
          }    
      }
      // handle actual form submission here
       

      
   
  }
  render() {
    return (
<div>
  <div className="login-page vh-100">
     
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="px-5 col-md-12 ml-auto">
        <div className="px-5 col-10 mx-auto">
          <h2 className="text-dark my-0">Welcome Back</h2>
          <p className="text-50">Sign in to continue</p>
          <form className="mt-5 mb-4" action="https://askbootstrap.com/preview/swiggiweb/verification.html">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="text-dark">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1" aria-describedby="emailHelp"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="text-dark">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
            </div>
             <button
                type="submit"
                onClick={this.handleFormSubmit}
                className="btn btn-primary btn-lg btn-block"
              >SIGN IN</button>                        
           
          </form>
          
        </div>
      </div>
    </div>
  </div>
 
</div>

        );
    }
}
export default Login;