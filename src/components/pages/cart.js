import React from 'react';
import Header from '../part/header';
import Footer from '../part/footer';
import Menu from '../part/sidebar';
import Mobile from '../part/mobile';
import users from '../pages/fake-users.json'
import cart from '../part/fake-carts.json'



class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      
      
      address: '',
      kota: '',
      street: '',
      number: '',
      zipcode: '',
      email: '',
      username: '',
      nama: '',
      phone: '',
      searchString: '',
      carts: cart

    };
  

  
  };
 componentDidMount() {
    this.getAllrecent()
   
  }
  getAllrecent = async () => {
    var userid = JSON.parse(localStorage.getItem('userId'));

    for (var x = 0; x < users.length; x++) {
      if (userid === users[x].id) {
        this.setState(
          {
            nama: users[x].name['firstname'],
            phone: users[x].phone,
            kota: users[x].address['city'],
            street: users[x].address['street'],
            number: users[x].address['number'],
            zipcode: users[x].address['zipcode'],
            email: users[x].email,
            searchString: userid,


          }
        )
      }
    }

  };
  render() {
    const items = this.state.carts.filter((data)=>{
      if (data.userId === this.state.searchString)
        {
          return data
        }
    }).map(data=>{
      return(
      <div>
        <div className="row gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                      <div className="media align-items-center col-md-8" style={{ width: "50%" }}>
                        <div className="mr-2 text-danger">·</div>
                        <div className="media-body">
                <p className="m-0">Product ID { data.products[0]['productId']} Stock { data.products[0]['quantity']}</p>
                        </div>
                      </div>
                     
                    </div>
      </div>
      )
    })
    return (
      <div>
        <Header />
        <div className="osahan-checkout">
          <div className="d-none">
            <div className="bg-primary border-bottom p-3 d-flex align-items-center">
              <a className="toggle togglew toggle-2" href="/#"><span /></a>
              <h4 className="font-weight-bold m-0 text-white">Checkout</h4>
            </div>
          </div>
          <div className="container position-relative">
            <div className="py-5 row">
              <div className="col-md-7 mb-3">
                <div>
                  <div className="accordion mb-3 rounded shadow-sm bg-white overflow-hidden" id="accordionExample">
                    <div className="osahan-card bg-white border-bottom overflow-hidden">
                      <div className="osahan-card-header" id="headingOne">
                        <h2 className="mb-0">
                          <button className="d-flex p-3 align-items-center btn btn-link w-100" type="button" data-toggle="collapse" data-target="/#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <i className="feather-user mr-3" /> Informasi Customer
                          </button>
                        </h2>
                      </div>
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="/#accordionExample">
                        <div className="osahan-card-body border-top p-3">
                          <form>
                            <div className="form-row">
                      
                              <div className="col-md-6 form-group">
                                <label className="form-label font-weight-bold small">Nama</label>
                                <input placeholder="Enter Valid through(Nama Lengkap)" name="nama" value={this.state.nama} onChange={this.onChange} type="text" className="form-control" />
                              </div>
                              <div className="col-md-6 form-group">
                                <label className="form-label font-weight-bold small">No Telepon / Whatsapp</label>
                                <input placeholder="08322xxx" name="phone" value={this.state.phone} onChange={this.onChange} type="text" className="form-control" />
                              </div>
                      
                              <div className="col-md-6 form-group">
                                <label className="form-label font-weight-bold small">kota</label>
                                <input placeholder="Enter Valid through(Nama Lengkap)" name="kota" value={this.state.kota} onChange={this.onChange} type="text" className="form-control" />
                              </div>
                              <div className="col-md-6 form-group">
                                <label className="form-label font-weight-bold small">street</label>
                                <input placeholder="08322xxx" name="street" value={this.state.street} onChange={this.onChange} type="text" className="form-control" />
                              </div>
                      
                              <div className="col-md-6 form-group">
                                <label className="form-label font-weight-bold small">number</label>
                                <input placeholder="Enter Valid through(Nama Lengkap)" name="nama_customer" value={this.state.number} onChange={this.onChange} type="text" className="form-control" />
                              </div>
                              <div className="col-md-6 form-group">
                                <label className="form-label font-weight-bold small">zipcode</label>
                                <input placeholder="08322xxx" name="no_tlp" value={this.state.zipcode} onChange={this.onChange} type="text" className="form-control" />
                              </div>
                      
                              <div className="col-md-12 form-group">
                                <label className="form-label font-weight-bold small">Email</label>
                                <input placeholder="budi@toky.com" type="text" name="email" value={this.state.email} onChange={this.onChange} className="form-control" />
                              </div>
                      
                    
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="osahan-cart-item rounded rounded shadow-sm overflow-hidden bg-white sticky_sidebar">
                  <div className="d-flex border-bottom osahan-cart-item-profile bg-white ">
                    <button className="d-flex p-3 align-items-center btn btn-link w-100" type="button" data-toggle="collapse" data-target="/#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <i className="feather-shopping-cart h6 mr-2 mb-0" /> Informasi Pesanan
                    </button>
                  </div>
                  <div className="bg-white border-bottom">
                    
         {items}
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <Mobile />
        <Footer />
        <Menu />


      </div>
    );
  }
}
export default Cart;