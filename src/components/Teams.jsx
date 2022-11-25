import React from "react";

const Teams = ()=> {
    return(
        <div className="flex flex-col mx-12">
            <div  className="flex items-center text-2xl my-5 mx-14">
                <img src="https://scontent.fsdu23-1.fna.fbcdn.net/v/t39.30808-1/301887287_576673934157145_2182026314465729222_n.png?stp=dst-png_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=c6021c&_nc_ohc=cUOhf04DZ9oAX9dxzNX&_nc_ht=scontent.fsdu23-1.fna&oh=00_AfAbp4NaM7dIxoVGEJh0FzgiIkX639dIZOAdu6eQfSRsLA&oe=63822ADF" alt="img" width={125}className="rounded-full  bg-auto bg-no-repeat bg-center"/>
                <div className="px-12">
                    Sinistros
                </div>
            </div>
            <div className="flex items-center text-2xl my-3 mx-14">
                <img src="https://scontent.fsdu23-1.fna.fbcdn.net/v/t39.30808-1/291508441_449412737187732_556694437568227737_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=c6021c&_nc_ohc=pd1c6VXBFDQAX_QqXO7&_nc_ht=scontent.fsdu23-1.fna&oh=00_AfBJo4m48TjbBDyqgH3ypDjaNlAMWVn9Ty76WJMvC0xbLQ&oe=63821B8F" alt="img" width={125} className="rounded-full"/>
                <div className="px-12">
                    Piratas
                </div>
            </div>
        </div>
    )
}

export default Teams