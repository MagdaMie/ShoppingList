

const ListElement = (props) => {

    return(
        <div className="flex justify-center items-center">
            <p className="m-2">{props.content}</p>
            <button onClick={props.onClick}>x</button>
        </div>
    )
}

export default ListElement