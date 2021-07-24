import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="section-footer border-top bg-dark">
    <div className="container">
      <section className="footer-top padding-y py-5">
        <div className="row">
          <aside className="col-md-4 footer-about">
            <article className="d-flex pb-3">
              <div><img alt="#" src="assets/img/logo_web.png" className="logo-footer mr-3" /></div>
              <div>
                <h6 className="title text-white">Tokytoky</h6>
                <p className="text-muted">Some short text about company like You might remember the Dell computer commercials in which a youth reports.</p>
                <div className="d-flex align-items-center">
                  <a className="btn btn-icon btn-outline-light mr-1 btn-sm" title="Facebook" target="_blank" href="/#"><i className="feather-facebook" /></a>
                  <a className="btn btn-icon btn-outline-light mr-1 btn-sm" title="Instagram" target="_blank" href="/#"><i className="feather-instagram" /></a>
                  <a className="btn btn-icon btn-outline-light mr-1 btn-sm" title="Youtube" target="_blank" href="/#"><i className="feather-youtube" /></a>
                  <a className="btn btn-icon btn-outline-light mr-1 btn-sm" title="Twitter" target="_blank" href="/#"><i className="feather-twitter" /></a>
                </div>
              </div>
            </article>
          </aside>
         <aside className="col-sm-2 col-md-2 text-white">
           
          </aside>
         <aside className="col-sm-4 col-md-2 text-white">
            <h6 className="title">Tantang kami</h6>
            <ul className="list-unstyled hov_footer">
              <li> <a href="/#" className="text-muted">Profile</a></li>
              <li> <a href="https://kulineran.co/channel/blog/" className="text-muted">Blogs </a></li>
              <li> <a href="https://kulineran.co/project/" className="text-muted">Event </a></li>
            </ul>
          </aside>
           
          <aside className="col-sm-4 col-md-2 text-white">
            <h6 className="title">Layanan</h6>
            <ul className="list-unstyled hov_footer">
              <li> <a href="/#" className="text-muted">Delivery Support</a></li>
              <li> <a href="/filter" className="text-muted">Menu Terbaik </a></li>
              <li> <a href="https://kulineran.co/channel/" className="text-muted">Review Makanan </a></li>
            </ul>
          </aside>
           
          <aside className="col-sm-4  col-md-2 text-white">
            <h6 className="title">Bantuan</h6>
            <ul className="list-unstyled hov_footer">
              <li> <a href="/#" className="text-muted">Contact Us</a></li>
              <li> <a href="/#" className="text-muted">Terms of use</a></li>
              <li> <NavLink to="/privacy-policy" className="text-muted">Privacy policy</NavLink></li>
            </ul>
          </aside>
        </div>
      </section>
    </div>
    <section className="footer-copyright border-top py-3 bg-light">
      <div className="container d-flex align-items-center">
        <p className="mb-0"> © 2020 Company All rights reserved </p>
        <p className="text-muted mb-0 ml-auto d-flex align-items-center">
          <a href="/#" className="d-block"><img alt="#" src="assets/img/appstore.png" height={40} /></a>
          <a href="/#" className="d-block ml-3"><img alt="#" src="assets/img/playmarket.png" height={40} /></a>
        </p>
      </div>
    </section>
  </footer>
 
  );
}

export default Footer
