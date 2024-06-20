
import React,{useState} from "react";
import {AiOutlineClose} from 'react-icons/ai'
import { Link,useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { arrayUnion,doc,updateDoc } from "firebase/firestore";
import { db } from "../firebase";

function SellProduct(){

    const [name,setName]=useState('')
    const [category,setCategory]=useState('')
    const [description,setDescription]=useState('')
    const [phone,setPhone]=useState('')
    const [price,setPrice]=useState('')
    const [imageSrc, setImageSrc] = useState(null);

    const [nameError, setNameError] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [imageSrcError, setImageSrcError] = useState('');

    const [error,setError]=useState('')

    const {user}=UserAuth()
   // console.log(user?.email);
    const navigate=useNavigate()

    const productId=doc(db,'users',`${user?.email}`)

    async function handleSubmit(e){

        e.preventDefault()

        setNameError('');
        setCategoryError('');
        setDescriptionError('');
        setPhoneError('');
        setPriceError('');
        setImageSrcError('');
        setError('')

        if (name.trim() === '') {
            setNameError('Name is required');
            return
        }

        if (category.trim() === '') {
               setCategoryError('Category is required');
               return
         }

        

         if (phone.trim() === '') {
                  setPhoneError('Phone is required');
                  return
         }

         const phoneRegex = /^\d{10}$/;
         if (!phoneRegex.test(phone)) {
             setPhoneError('Please enter a valid phone number');
             return;
         }


         if (price.trim() === '') {
                setPriceError('Price is required');
                return;
             } else if (isNaN(Number(price))) {
              setPriceError('Price must be a number');
              return;
            }

            if (!imageSrc) {
                   setImageSrcError('Image is required');
                   return;
             }

        try {
          
            const datas={
                title:name,
                categ:category,
                descr:description,
                conectNo:phone,
                price:price,
                image:imageSrc
            }

            await updateDoc(productId,{
                saveProduct:arrayUnion(datas)
                
            })
           navigate('/')
            
        } catch (error) {
            console.log(error);
            setError(error.message)
        }
         

    }

    function handleImageChange(event){
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageSrc(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    }

return(
   
   <div className="mt-[72px] w-full flex items-center  justify-center">
    <div className="w-[851px] bg-white mt-[72px]  rounded-[4px] border-black border-solid border-[1px]  ">
    <p className="ml-5 mt-3" ><Link to='/'><AiOutlineClose/></Link></p>

         <div className="w-full flex justify-center">
         
         <h1 className=" text-[40px] mb-4">POST YOUR AD</h1> 
         </div>
         <form  onSubmit={handleSubmit}>
         <p className="text-red-700 text-center">{error}</p>
         <div className="w-full border-black border-t-[1px] p-5">


            <div>
                <h1 className="text-[20px] mb-2">Product Name.</h1>
            <input className="w-[432px] h-[48px] border-solid border-[1px] mb-4   border-black p-2" type="text" placeholder="Enter Product Name."
            onChange={(e)=>{setName(e.target.value)}} />
            <p className="text-red-700">{nameError}</p>
            </div>
         
         
            <div>
                <h1 className="text-[20px] mb-2">Product Category.</h1>
            <input className="w-[432px] h-[48px] border-solid border-[1px] mb-4  border-black p-2" type="text" placeholder="Enter Product Category." 
            onChange={(e)=>{setCategory(e.target.value)}}/>
            <p className="text-red-700">{categoryError}</p>
            </div>

            <div>
                <h1 className="text-[20px] mb-2">Description.</h1>
            <input className="w-[432px] h-[48px] border-solid border-[1px] mb-4  border-black p-2" type="text" placeholder="Enter Product Description." 
            onChange={(e)=>{setDescription(e.target.value)}}/>
            <p className="text-red-700">{descriptionError}</p>
            </div>

            <div>
                <h1 className="text-[20px] mb-2">Phone Number.</h1>
            <input className="w-[432px] h-[48px] border-solid border-[1px] mb-4  border-black p-2" type="text" placeholder="Enter Phone Number." 
            onChange={(e)=>{setPhone(e.target.value)}}/>
            <p className="text-red-700">{phoneError}</p>
            </div>

            <div>
                <h1 className="text-[20px] mb-2">Price.</h1>
            <input className="w-[432px] h-[48px] border-solid border-[1px] mb-4  border-black p-2" type="text" placeholder="Enter Product Price." 
            onChange={(e)=>{setPrice(e.target.value)}}/>
            <p className="text-red-700">{priceError}</p>
            </div>

            <div>
                <h1 className="text-[20px] mb-2">Product Image.</h1>
            <input className="w-[432px] h-[48px] border-solid border-[1px] mb-4  border-black p-2" type="file"
            onChange={handleImageChange} />
            <p className="text-red-700">{imageSrcError}</p>
            </div>


         

            </div>

            <div className="w-full border-black border-t-[1px] p-10 ">

            <h1 className="text-[25px] m-3 items-center text-center">Image.</h1>

            <div className="w-[200px] h-[200px] border-black border-[1px] ">
            {imageSrc && <img src={imageSrc} alt="Product" className="w-full h-full object-cover" />}
            </div>
            <button className="bg-gray-600 mt-8 text-white text-[22px] w-[432px] h-[48px]"> SUBMIT </button>

            </div>
            
         </form>
           
    </div>
     

   </div>
   
)

}

export default SellProduct;