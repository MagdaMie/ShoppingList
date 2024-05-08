

const Input = (props) => {
    return (
        <form action="" className="m-6" onSubmit={props.onSubmit}>
            <p>Enter your grocery item</p>
            <input type="text"  placeholder="item" className="center" onChange={props.onChange} value={props.value}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default Input