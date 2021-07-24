import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import carts from '../part/fake-carts.json'


class Header extends Component {
   
   logOut(e) {
    e.preventDefault()
   localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }
   componentDidMount() {
  }
 
  
  render() {
    const loginRegLink = (
      <div></div>
    );
    const userLink = (
      <a className="toggle" href="/#">
                    <span />
                  </a>
    )
    const cart = (
       <NavLink to="/login" className="widget-header mr-4 text-dark">
                    <div className="icon d-flex align-items-center">
                      <i className="feather-shopping-cart h6 mr-2 mb-0" />
                    <span>Cart</span>
                    </div>
                  </NavLink>
    );
     
    let userid = JSON.parse(localStorage.getItem('userId'));
    var tot = 0
    for(var x = 0; x < carts.length; x++)
    {
        if (userid === carts[x].userId)
        {
           tot += 1
        }    
    }

    const total = (
                 <NavLink to="/cart" className="widget-header mr-4 text-dark">
                    <div className="icon d-flex align-items-center">
                      <i className="feather-shopping-cart h6 mr-2 mb-0" />
                    <span className='badge badge-warning' id='lblCartCount'>{tot}</span>
                    </div>
                  </NavLink>
    )

  
    return (
      <header className="section-header">
        <section className="header-main shadow-sm bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-4">
                <a href="/" className="brand-wrap mb-0">
                  <img alt="#" className="img-fluid" src="assets/img/logo_web.png" />
                </a>
              </div>

        
              <div className="col-8">
                <div className="d-flex align-items-center justify-content-end pr-5">
                  
                  
                      {localStorage.userId ? total : cart}
             
                  <div className="col-3 d-flex align-items-center m-none">
                    <div className="dropdown mr-3">
                       
                      <div className="dropdown-menu p-0 drop-loc" aria-labelledby="navbarDropdown">
                        <div className="osahan-country">
                          
                        </div>
                      </div>
                    </div>
                  </div>
             
             
                      {localStorage.usertoken ? userLink : loginRegLink}
            
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
 
    );
  }
}

  export default Header;
