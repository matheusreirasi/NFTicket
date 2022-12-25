import React from "react";
import { Link } from "react-router-dom";
import sinistros from "../images/sinistros.png"
import piratas from "../images/piratas.jpg"

const Teams = ()=> {
    return(
        <div className="flex flex-col mx-12 max-h-fit">
            <Link to="/tickets">
                <div className="flex items-center text-3xl my-5 mx-14 cursor-pointer">
                    <img src={sinistros} alt="img" width={125}className="rounded-full  bg-auto bg-no-repeat bg-center"/>
                    <div className="px-12 text-white">
                        Sinistros
                    </div>
                </div>
            </Link>
            <Link to="/tickets">
                <div className="flex items-center text-3xl my-5 mx-14 cursor-pointer">
                    <img src={piratas} alt="img" width={125} className="rounded-full"/>
                    <div className="px-12 text-white">
                        Piratas
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Teams