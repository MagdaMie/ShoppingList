

const ListElement = (props) => {

    return(
        <div>
            <p>{props.content}</p>
            <button onClick={props.onClick}>x</button>
        </div>
    )
}

export default ListElement