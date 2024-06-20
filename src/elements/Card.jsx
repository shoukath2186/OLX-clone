
import React, { useState, useEffect,useContext } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from "react-router-dom";
import { ProductCom } from "../Context/productContext";


function Cards(){

    const [allproduct, setAllproduct] = useState([]);
    const navigate=useNavigate()
    const { userData, setUserAndData } = useContext(ProductCom);
    

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const usersRef = collection(db, 'users');
                const querySnapshot = await getDocs(usersRef);
                const productData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setAllproduct(productData);
                
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [allproduct]);

    
    function newPage(user,data){

        setUserAndData(user,data)
        //console.log(user,data);
        navigate('/product')

    }
        
    return (
        <>
        <div className="w-[1364px]   mt-4">
            
        {allproduct.map(detail => detail.saveProduct.map((item, index) => (
    
        <div   key={index}  onClick={()=>newPage(item,detail)}
        className="w-[323px] m-2 bg-white inline-block shadow rounded-[5px]">
            <div className="w-full h-[194px]">
                <img src={item.image} alt="" className="w-full h-full object-cover rounded" />
            </div>

            <div className="w-full p-3">
                <p className="font-bold">₹ {item.price}</p>
                <p className="mt-2">{item.title}</p>
                <p className="mt-1">Contact: {item.conectNo}</p>
                <p className="mt-3">Category: {item.categ}</p>
            </div>
        </div>
    
)))}

            
        </div>
        </>
    )
}

export default Cards