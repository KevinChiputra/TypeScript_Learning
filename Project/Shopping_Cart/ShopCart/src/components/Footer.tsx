import useCart from "../hooks/useCart"

type PropsType = {
    viewCart: boolean
}

const Footer = ({viewCart}: PropsType) => {

    const {totalItems, totalPrice} = useCart()

    const year: number = new Date().getFullYear()

    const pageCount = viewCart ? <p>Shopping Cart &copy; {year}</p> 
    : <>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        <p>Shoping Cart &copy; {year}</p>
    </>

    const content = (
        <footer className="footer">
            {pageCount}
        </footer>
    )
  return content
}

export default Footer