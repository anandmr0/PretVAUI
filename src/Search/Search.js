
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Search.css'
import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BiUser,BiShareAlt,BiBookmark,BiChat,BiSearch } from "react-icons/bi";

import {faBars,faSearch,faUser,} from '@fortawesome/free-solid-svg-icons'
import {useAxiosGet} from '../Hooks/HttpRequest'
import axios from 'axios'
import Select from 'react-select';
const product = [
    { value: 'Jacket', label: 'Jacket' },
    { value: 'Sweater', label: 'Sweater' },
    { value: 'Blazer', label: 'Blazer' },
    { value: 'Trousers', label: 'Trousers' },
    { value: 'Skirt', label: 'Skirt' },
    { value: 'Raincoat', label: 'Raincoat' },
    { value: 'Short', label: 'Short' },
    { value: 'Dress', label: 'Dress' },
    { value: 'Jeans', label: 'Jeans' },
    
  ];
  const Quantity = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    
  ];
  const Cost = [
    { value: '500', label: '500' },
    { value: '1000', label: '1000' },
    { value: '5500', label: '5500' },
    { value: '2500', label: '2500' },
    { value: '7000', label: '7000' },
    { value: '1500', label: '1500' },
    { value: '2000', label: '2000' },
   
    
  ];
  const Lead = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    
  ];

  const Rating = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
   
    
  ];
  const location=[
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Dehli', label: 'Dehli' },
   
    
  ];
 
 

class Search extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state={
          products:'',
          buyer:' / Search Buyer Requirements',
          buyerName:'',
          productname:'',
          LocationFiltered:'',
          RatingFiltered:'',
          LeadTimeFiltered:'',
          costFiltered:'',
          quantityFiltered:'',
          selectedProduct:null,
          selectedQuantity:null,
          selectedCost:null,
          selectedLeadTime:null,
          selectedRating:null,
          selectedLocation:null,
          clearAll:''

        };  
      
    }
    
  handle(event)
  {
    this.setState({buyerName:event.target.value})
    console.log(event.target.value)
  }
  handleQuantity=selectedQuantity=>{
      this.setState({selectedQuantity});
      this.setState({quantityFiltered:selectedQuantity.value});
      this.setState({clearAll:"ClearAll"});
      
  }
  handleProduct=selectedProduct=>{
    this.setState({selectedProduct});
    this.setState({productname:selectedProduct.value})
    console.log('selected option',selectedProduct);
    this.setState({clearAll:"ClearAll"});
}
handleCost=selectedCost=>{
    this.setState({selectedCost});
    this.setState({costFiltered:selectedCost.value})
    this.setState({clearAll:"ClearAll"});
    
}
handleLead=selectedLeadTime=>{
    this.setState({selectedLeadTime});
    this.setState({LeadTimeFiltered:selectedLeadTime.value})
    this.setState({clearAll:"ClearAll"});
    
}
handleReting=selectedRating=>{
    this.setState({selectedRating});
    this.setState({RatingFiltered:selectedRating.value})
    this.setState({clearAll:"ClearAll"});
    
}
handleLocation=selectedLocation=>{
    this.setState({selectedLocation});
    this.setState({LocationFiltered:selectedLocation.value})
    this.setState({clearAll:"ClearAll"});
    
}
clearProductSelection()
{
  this.setState({LocationFiltered:''})
  this.setState({selectedLocation:null});
  this.setState({selectedRating:null});
  this.setState({RatingFiltered:''})
  this.setState({selectedLeadTime:null});
  this.setState({LeadTimeFiltered:''})
  this.setState({selectedCost:null});
  this.setState({costFiltered:''})
  this.setState({selectedProduct:null});
  this.setState({productname:''})
  this.setState({selectedQuantity:null});
  this.setState({quantityFiltered:''});
  this.setState({clearAll:""});
  const url=`https://limitless-tundra-61350.herokuapp.com/api/v1/product/`;
  console.log(url);
 axios.get(url).then(response=>{
  this.setState({
    products:response.data
  })
  })

}


  fetchProduct()
  {

    
    const url=`https://limitless-tundra-61350.herokuapp.com/api/v1/product/${this.state.buyerName}`;
    console.log(url);
   axios.get(url).then(response=>{
    this.setState({
      products:response.data
    })
    })


  }
  fetchProductByFilter()
  {
      let suburl=`?`;
      let url=`https://limitless-tundra-61350.herokuapp.com/api/v1/product/`;
      if(this.state.selectedProduct!=null)
      {
        suburl=suburl+`product_name=${this.state.selectedProduct.value}`
      }
      if(this.state.selectedCost!=null)
      {
        suburl=suburl+`&price_rs=${this.state.selectedCost.value}`
      }
      if(this.state.selectedQuantity!=null)
      {
        suburl=suburl+`&quantity=${this.state.selectedQuantity.value}`
      }
      if(this.state.selectedLeadTime!=null)
      {
        suburl=suburl+`&lead_time=${this.state.selectedLeadTime.value}`
      }
      // let url="";
      if(suburl)
       {
         url=`https://limitless-tundra-61350.herokuapp.com/api/v1/product/${suburl}`;
      }
      
    
        console.log(url);
        axios.get(url).then(response=>{
        this.setState({
                products:response.data
            })
            console.log(this.state.products);
    })
    console.log(this.state.products);
    
  }
  render()
  {

  
    const { selectedProduct } = this.state;
    const {selectedQuantity} = this.state;
    const {selectedCost} = this.state;
    const {selectedLeadTime}=this.state;
    const {selectedRating}=this.state;
    const {selectedLocation}=this.state;
    
    
    return(

      <section className="search">
        <section className="search-buyer">     
      <div className="container">
       <h1 className="title">Search{this.state.buyer}</h1>
      <div className="row">
       <div className="col-md-6 supplier-buyer">
       <button class="btn btn-primary supplier" onClick={()=>this.setState({buyer:' / Search Supplier Products'})}>Search Supplier Product</button>
       </div>
       <div className="col-md-6 supplier-buyer">
       <button class="btn btn-primary buyer" onClick={()=>this.setState({buyer:' / Search Buyer Requirements '})}>Search Buyer Product</button>
       </div>
       
      </div>
      </div>
      </section>
      <section className="suppFliter-section">
      <div className="container">
      <div className="row">
      <div className="col-md-11 supplier-filter">
          <h2>Search Filters</h2>
          <div className="row">
          <div className="col-md-10 dropdown">
          <Select className="product" value={selectedProduct}   onChange={this.handleProduct} options={product}   placeholder ="product"   />
           <Select className="Quantity" value={selectedQuantity}  onChange={this.handleQuantity} options={Quantity} placeholder="Quantity"  />
          <Select className="Cost" value={selectedCost} onChange={this.handleCost} options={Cost} placeholder="Cost"/>
           <Select className="Lead" value={selectedLeadTime} onChange={this.handleLead} options={Lead} placeholder="Lead" />
           <Select className="Rating" value={selectedRating} onChange={this.handleReting} options={Rating} placeholder="Rating" />
           <Select className="location" value={selectedLocation} onChange={this.handleLocation} options={location} placeholder="Location" />
           
          
           
       </div>
       <div className="col-md-2 ">
           <button class="btn btn-primary aply-filter" onClick={this.fetchProductByFilter.bind(this)} >Apply Filters</button>
           </div> 
          </div>
         </div>
         
      
       
      </div>
      </div>
      </section>
      <section className="search-section">
      <div className="container">
      <div className="row">
           
          <div className="col-md-8 filter-search">
         
          <div className="input-group ">
          
           <input className="form-control py-2 border-right-0 border" type="search" defaultValue=""  id="example-search-input"  onChange={this.handle.bind(this)} placeholder="Search with Keywords" required="true" />
           <span className="input-group-append">
           <div className="btn btn-outline-secondary border-left-0 border " onClick={this.fetchProduct.bind(this)}>
           <BiSearch  onClick={this.fetchProduct.bind(this)}/>
           </div>
           </span>
       </div>
           
          </div>
          <div className="col-md-4 post-req-btn">
           <button class="btn btn-primary aply-filter" >Post Product Requirements</button>
           </div> 
      </div>
      </div>
      </section>
      <section className="items-section">
          <div className="container">
             <div class="row">
             <hr>
           </hr>
          <div className="col-md-2 filters-items">
          
           <h1>Search Filters:</h1>
          
          
          
           </div>
           <div className="col-md-1 selected-filter">
          
          <p >{this.state.productname} </p> 
          </div>
          <div className="col-md-1 selected-filter">
            <p>{this.state.quantityFiltered}</p>
          </div>
          <div className="col-md-1 selected-filter">
            <p>{this.state.costFiltered}</p>
          </div>
          <div className="col-md-1 selected-filter">
          <p>{this.state.LeadTimeFiltered}</p>
          </div>
          <div className="col-md-1 selected-filter">
          <p>{this.state.RatingFiltered}</p>
          </div>
          <div className="col-md-1 selected-filter">
          <p> {this.state.LocationFiltered}</p>
          </div>
          <div className="col-md-1 selected-filter">
          <p>  <a href="#" onClick={this.clearProductSelection.bind(this)}>{this.state.clearAll}</a></p>
          </div>
        
          <hr>
           </hr>
      </div>
      </div>
      </section>
<section className="product-Details">
    <div className="container">
      <div class="row">
          
           
           {
           
         
           this.state.products && this.state.products.data.product.map((product,index)=>{
               return(
                   <div className="col-md-4 product" key={index}>
                       <div className="char-user">
                       <FontAwesomeIcon icon={faUser} size='3x'  className="user"/>
                       </div>
                       <div className="user-title">
                       <h1><strong>{product.buyer_name}</strong></h1>
                       <p>Buyer, {product.buyer_name} Enterprises</p>
                       <h6 >Mumbai, Maharashtra,India</h6>
                       </div>
                       <div className="user-requirement">
                       <h1><strong>Requirements:</strong></h1>
                      
                       </div>
                       <div className="req-details">
                       <h1><strong>Fabric :</strong> {product.product_name}</h1>
                       <h1><strong>Weight :</strong> {product.weight_gsm}</h1>
                       <h1><strong>Quantity :</strong> {product.quantity}</h1>
                       <h1 className="cost"><strong>Cost Bracket :</strong> {product.price_rs}</h1>
                       <h1><strong>Lead Time Provision :</strong> {product.lead_time}</h1>
                       <h1><strong>Delivery Location :</strong>  Mumbai, Maharashtra,India</h1>
                       
                       </div>
                       <div className="product-icon">
                           <BiUser  />
                       {/* <FontAwesomeIcon icon={faUser} size='md'  className="user"/> */}
                       </div>
                       <div className="BiChat">
                       <BiChat  />
                       
                       </div>
                       <div className="BiShareAlt">
                       <BiShareAlt  />
                       
                       </div>
                       <div className="BiBookmark">
                       <BiBookmark  />
                       
                       </div>
                      
                          
                   </div>
               );
           })
       
           }

          
      </div>
      </div>
      </section>
      
     
      
   </section>

    );
  }

}

export default Search