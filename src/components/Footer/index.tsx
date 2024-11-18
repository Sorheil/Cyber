import { Link } from "react-router-dom"
// images
import logo from "./../../assets/Logo.png"
export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center gap-6 bg-black text-white font-light p-5 md:flex-row md:flex-wrap md:justify-between md:px-32 py-28">
            <div className="flex flex-col justify-center items-center gap-6">
                <Link to="/">
                    <img src={logo} alt="cyber" />
                </Link>
                <p className="text-center text-lg md:max-w-80">
                    We are a residential interior design firm located in Portland. Our boutique-studio offers more than
                </p>
            </div>
            <ul className="text-center flex flex-col gap-2 text-lg md:text-left">
                <li>
                    <h3 className="text-2xl font-bold">Services</h3>
                </li>
                <li><a href="/bonus-program">Bonus Program</a></li>
                <li><a href="/gift-cards">Gift cards</a></li>
                <li><a href="/credit-payment">Credit and payment</a></li>
                <li><a href="/service-contracts">Service contracts</a></li>
                <li><a href="/non-cash-account">Non-cash account</a></li>
                <li><a href="/payment">Payment</a></li>
            </ul>
            <ul className="text-center flex flex-col gap-2 text-lg md:text-left">
                <li>
                    <h3 className="text-2xl font-bold">Assistance to the buyer</h3>
                </li>
                <li><a href="/find-order">Find and Order</a></li>
                <li><a href="/delivery-terms">Terms of delivery</a></li>
                <li><a href="/exchange-return">Exchange and return of good</a></li>
                <li><a href="/guarantee">Guarantee</a></li>
                <li><a href="/faq">Frequently asked questions</a></li>
                <li><a href="/site-terms">Terms of use of the site</a></li>
            </ul>
        </footer>

    )
}