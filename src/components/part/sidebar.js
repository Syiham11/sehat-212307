import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Menu extends Component {
   logOut(e) {
    e.preventDefault()
   localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }
  render() {
    let data = JSON.parse(localStorage.getItem('tipe'));
    var userLink
    if (data === 1) {
       userLink = (

        <ul className="second-nav">
          <li><a href="/#"><i className="feather-home mr-2" /> Dashboard</a></li>
          <li><NavLink to="/order" ><i className="feather-shopping-cart mr-2" />Orders</NavLink></li>
        </ul>
      
      )
    } else {
       userLink = (

        <ul className="second-nav">
          <li><a href="/#"><i className="feather-home mr-2" /> Dashboard</a></li>
          <li><NavLink to="/product" ><i className="feather-box mr-2" />Product</NavLink></li>
          <li><NavLink to="/paket" ><i className="feather-package mr-2" />Paket Produk</NavLink></li>
          <li><NavLink to="/banner" ><i className="feather-image mr-2" />Banner</NavLink></li>
          <li><NavLink to="/laporan" ><i className="feather-file-text mr-2" />Laporan Penjualan</NavLink></li>
          <li><NavLink to="/customer" ><i className="feather-file-text mr-2" />Laporan Customer</NavLink></li>
          <li><NavLink to="/user" ><i className="feather-users mr-2" />Pengaturan Akun</NavLink></li>
          <li><NavLink to="/outlet" ><i className="feather-settings mr-2" />Pengaturan Outlet</NavLink></li>
        </ul>
      
      )
    }
    const loginRegLink = (
      <div></div>
    );
    return (
     <nav id="main-nav">

        
       {localStorage.usertoken ? userLink : loginRegLink}
     </nav>

 
    );
  }
}

  export default Menu;
