import { useState } from "react"


const ListElement = (props) => {
    const [isHovered, setIsHovered] = useState(false)
    return(
        <div className="flex justify-center items-center border border-white border-1 w-400" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <p className="m-2">{props.content}</p>
            <button onClick={props.onClick}>x</button>
            { isHovered && <button onClick={props.edit}>edit</button> }
        </div>
    )
}

export default ListElement