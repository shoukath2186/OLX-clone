import React from "react";
import Card from "../elements/Card";

function Home() {

    return (
        <>
            <div className="w-full flex flex-col items-center mt-[72px]">
                <div className="w-full flex">
                <p className="w-full mt-3 ml-[130px] "><b>Popular Searches:</b> bike-cars-laptop-cycle-mobile-iphone-tractor-scooty-swift-activa</p>
                </div>
                <div className="bg-gray-100 w-[90%] max-w-[1264px] h-[280px] mt-7 flex justify-center">
                    <p>Advertisement</p>
                </div>
                <div className="w-full flex">
                <p className="w-full mt-1 ml-[130px]  ">Home</p>
                </div>
                
                    <Card/>
                
            </div>

        </>
    )

}

export default Home