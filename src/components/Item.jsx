export default function Item() {
    function handleClick() {
        console.log("added")
    }
    return (
        <div>
            <h1>This is the spinner name</h1>
            <h2>This is the price</h2>
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    )
}