
import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import {FaRegHeart}from 'react-icons/fa';



function Navbar() {
    
    const {user,logOut}=UserAuth()
    const navigate=useNavigate();

    //console.log(user?.email);

    async function userlogout(){
        try {
            await logOut()
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <>
            <header className="h-[72px] shadow-lg  fixed top-0 left-0 right-0 bg-white">
                <div className="h-[68px] bg-slate-100  flex items-center ">
                    <div className="ml-[20px] w-[48px] h-[48px]"><a rel="" data-aut-id="btnOlxLogo" aria-current="page"  href="/"><svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon"  fillRule="evenodd"><path className="rui-w4DG7" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg></a></div>

                    <div className="bg-white flex items-center w-[272px] border-2 border-black h-[48px] rounded-[5px] ml-5">
                        <svg className="w-[20px] m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search"><g><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"></path></g></svg>
                        <input type="text" className="m-2 flex border-none outline-none bg-transparent" placeholder="India" />
                        <img className="text-black" src="https://img.icons8.com/?size=25&id=2760&format=png" alt="" />
                    </div>
                    <div className=" bg-white flex items-center w-[769px] border-2 border-black h-[48px] rounded-[5px] ml-5">
                        <input className=" border-none outline-none bg-transparent ml-2 w-full" type="text" placeholder="Find Cars, Mobile Phones and more..." />

                    </div>
                    <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[5px] ml-[-5px]" style={{ backgroundColor: '#002f34' }}>
                        <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" fill="currentColor" className="text-white" fillRule="evenodd">
                            <path className="rui-o3KKi" fill="#ffffff" d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path>
                        </svg>
                    </div>
                    <div className="dropdown">
                        <button  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="border-none outline-none ml-6 font-bold flex items-center" >
                            ENGLISH <img className="text-black ml-3" src="https://img.icons8.com/?size=25&id=2760&format=png" alt="" />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">English</a></li>
                            <li><a className="dropdown-item" href="#">हिंदी</a></li>
                        </ul>
                    </div>
                    {user?.email?
                    <div className="dropdown mr-3">
                    <button  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="border-none outline-none ml-6 font-bold flex items-center" >
                    <img className="w-[40px]" src="/user-icon.png" alt="" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {/* <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><a className="dropdown-item" href="#"><FaRegHeart className="inline-block"/> My ADS</a></li> */}
                        <li onClick={userlogout}><a className="dropdown-item" href="#">Log Out</a></li>
                    </ul>
                  </div>
                    :
                    <div>
                      <Link to='/login'> <button className="ml-6 font-bold underline hover:no-underline">Login</button></Link> 
                       
                    </div>}
                    
                    <div className="flex items-center ml-3">
                        {user?.email?
                       <Link to='/sellProduct'> <button>
                        <img className="w-[104px]" src="/logoimg.png" alt="" />
                        </button></Link>:
                        <Link to='/login'> <button>
                        <img className="w-[104px]" src="/logoimg.png" alt="" />
                        </button></Link>

                        } 
                    </div>
                </div>

            </header>
        </>
    )
}

export default Navbar;