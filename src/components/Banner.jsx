import { Link } from "react-router-dom"
import React from "react"


const Banner = () => {
    return (
        <div className="w-full h-[30vh] flex justify-between items-center px-14 bg-cover bg-predio bg-center opacity-90">
            <Link to="/">
                <div className="text-5xl font-semibold text-white">
                    NFTicket
                </div>
            </Link>
        </div>
    )
}

export default Banner