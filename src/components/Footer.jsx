import React from "react";
import {BsShieldFillCheck} from "react-icons/bs"
import {AiFillThunderbolt} from "react-icons/ai"

const ServiceCard = ({color, title, icon}) => {
    <div className="flex items-center text-xl px-12 hover:shadow-xl">
        <div className="p-5 rounded-md">
            {icon}
        </div>
    </div>
}

const Footer = () => {
    return (
        <div className="flex justify-start">
            <div className="flex items-center text-xl ml-12 pr-12 rounded-xl hover:shadow-2xl hover:bg-fuchsia-200 hover:bg-opacity-20 hover:shadow-purple-600">
                <div className="white-glassmorphism p-3">
                    <div className="bg-[#9B19B8] p-2 rounded-full">
                        {<BsShieldFillCheck fontSize={29} className="text-white"/>}
                    </div>
                </div>
                <h1 className="px-6 text-white">
                    Rápido
                </h1>
            </div>
            <div className="flex items-center text-xl ml-12 pr-12 rounded-xl hover:shadow-2xl hover:bg-orange-200 hover:bg-opacity-20 hover:shadow-orange-300">
                <div className="white-glassmorphism p-3">
                    <div className="bg-[#F34213] p-2 rounded-full">
                        {<AiFillThunderbolt fontSize={29} className="text-white"/>}
                    </div>
                </div>
                <h1 className="px-6 text-white">
                    Seguro
                </h1>
            </div>
        </div>
    )
}

export default Footer