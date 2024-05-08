

const Input = (props) => {
    return (
        <form action="" className="m-6" onSubmit={props.onSubmit}>
            <p>Enter your grocery item</p>
            <div className="m-4">
            <input type="text"  placeholder="item" onChange={props.onChange} value={props.value} className="mr-4"/>
            <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default Input