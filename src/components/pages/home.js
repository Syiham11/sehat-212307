import React from 'react';
import Header from '../part/header';
import Footer from '../part/footer';
import Menu from '../part/sidebar';
import Mobile from '../part/mobile';
import Slider from "react-slick";
import kategori from '../pages/fake-categories.json'
import product from '../pages/fake-products.json'

class Home extends React.Component
{
  
  constructor() {
    super()



    this.state = {
      nm_produk: '',
      desc: '',
      id: '',
      harga: '',
      searchString: '',
      items: [],
      banners: [],
      products: product
    }
  
  }
  updateSearch(id, e) {
    this.setState({searchString: id});
}
   


    render()
    {
       const settings = {
       centerMode: false,
        centerPadding: 'none',
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        arrows: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '5px',
                    slidesToShow: 3
                }
            }
        ]
      };

         const filterData =    this.state.searchString ? this.state.products.filter(row => row.category.indexOf(this.state.searchString) > -1) : this.state.products;
    
      return (
          
            <div>
             <Header />      
<div>
  <div className="osahan-home-page">
   <div className="d-none">
    <div className="bg-primary border-bottom p-3 d-flex align-items-center">
      <a className="toggle togglew toggle-2" href="/#"><span /></a>
      {/* <h4 className="font-weight-bold m-0 text-white">TokyToky</h4> */}
      <img alt="#" className="img-fluid" src="assets/img/appstore.png" style={{width:"150px"}} />
    </div>
  </div>
    <div className="container">
    <div className="cat-slider">
  <Slider {...settings}>
          {kategori.map((item, index) => (
            <div className="cat-item py-1">
              <a href="/#" className="bg-white rounded d-block p-2 text-center shadow-sm" onClick={this.updateSearch.bind(this, item)}>
                 
                  <p className="m-0 small">{item}</p>
              </a>
            </div>
          ))}
                
      </Slider>
    </div>
     </div>
                {/* <div className="bg-white"> */}
     
    <div className="container">
     
      
     
      
      <div className="most_sale">
        <div className="row mb-3">
         {filterData.map((item, index) => (
          <div className="col-md-4 mb-3">
            <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
              <div className="list-card-image">
                <a href="/#" >
                  <img alt="/#" src={item.image} className="img-fluid item-img w-100" />
                </a>
              </div>
              <div className="p-3 position-relative">
                <div className="list-card-body">
                  <h6 className="mb-1"><a href="/#" className="text-black">{item.title}
                    </a>
                  </h6>
                   <p className="text-gray mb-2">{item.description}</p>
                </div>
                <div className="list-card-badge mb-2">
                    <h6>Rp. {item.price}</h6>
                </div>
                
               
              </div>
            </div>
          </div>
                  ))}
        </div>

      </div>
    </div>
  </div>
   <Mobile />
   <Footer />     
  <Menu /> 
 
</div>

                


            </div>
        );
    }
}
export default Home;