import React, { Component } from 'react'


class Mobile extends Component {
   logOut(e) {
    e.preventDefault()
   localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }
  render() {
     const cart = (
      <p className="h4 m-0"><i className="feather-shopping-cart" /></p>
    );
     
    const total = (
      <p className="h4 m-0"><i className="feather-shopping-cart" />
          <span className='badge badge-warning' style={{"font-size":"6px"}} id='lblCartCount'>{localStorage.getItem('count')}</span>
      </p>
    )
  
    return (
    <div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center d-none">
    <div className="row">
      <div className="col">
        <a href="home" className="text-dark small font-weight-bold text-decoration-none">
          <p className="h4 m-0"><i className="feather-home " /></p>
          Home
        </a>
      </div>
      <div className="col">
        <a href="filter"  className="text-dark small font-weight-bold text-decoration-none">
          <p className="h4 m-0"><i className="feather-layers" /></p>
          Kategori
        </a>
      </div>      
      <div className="col">
        <a href="cart" className="text-dark small font-weight-bold text-decoration-none">
          {localStorage.recent ? total : cart}
          Cart
        </a>
      </div>
       <div className="col">
        <a href="info" className="text-dark small font-weight-bold text-decoration-none">
          <p className="h4 m-0"><i className="feather-info" /></p>
          Info
        </a>
      </div>
    </div>
  </div>
    );
  }
}

  export default Mobile;
