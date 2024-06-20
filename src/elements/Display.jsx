import React,{useContext} from 'react';

import { ProductCom } from '../Context/productContext';
import { Link } from 'react-router-dom';
function display(){
     
    const data=useContext(ProductCom)
     
    const product=data.userData?.user;
    const user=data.userData?.data;

    console.log(product);
    return(
        <div className="w-full mt-[72px]">
        
<div className="viewParentDiv">

      <div className="imageShowDiv">
        <img
          src={product.image}
          alt=""
        />
      </div>
      <div className="rightSection">
      
        <div className="productDetails">
          <p>&#x20B9; {product.price} </p>
          <span>{product.title}</span>
          <p>{product.categ}</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="contactDetails">
          <p><b>Email:</b> {user.id}</p>
          <p>No name</p>
          <p>{product.conectNo}</p>
        </div>
      <Link to='/'>  <p className='mt-6'>HOME</p></Link>
      </div>
    </div>
       
        </div>
    )
}

export default display;