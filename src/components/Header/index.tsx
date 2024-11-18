import { Link } from "react-router-dom"
// images
import logo from './../../assets/Logo.svg'
// components
import Nav from "../Nav"
import { useState } from "react"
function Header() {
    const [isHidden, setIsHidden] = useState(true)
    return (
        <header className="flex justify-between items-center p-5 md:px-28 md:py-7">
            <Link to="/"> <img src={logo} alt="cyber" /></Link>

            <form action="" className="hidden lg:block" >
                <label htmlFor="search-product" className="sr-only">Search Product</label>
                <div className="relative h-min">
                    <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M9.539 15.23q-2.398 0-4.065-1.666Q3.808 11.899 3.808 9.5t1.666-4.065T9.539 3.77t4.064 1.666T15.269 9.5q0 1.042-.369 2.017t-.97 1.668l5.909 5.907q.14.14.15.345q.009.203-.15.363q-.16.16-.354.16t-.354-.16l-5.908-5.908q-.75.639-1.725.989t-1.96.35m0-1q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361T12.9 6.14T9.54 4.77q-1.991 0-3.361 1.37T4.808 9.5t1.37 3.36t3.36 1.37"
                        />
                    </svg>
                    <input
                        type="search"
                        name="search-product"
                        id="search-product"
                        className="w-[300px] h-10 bg-gray-200 pl-10 rounded-md"
                    />
                </div>
            </form>

            <Nav isHidden={isHidden} />

            <div className="flex gap-3 md:gap-5">
                <Link to="/wishlist"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11.98 19.094q-.291 0-.577-.106q-.286-.105-.503-.323L9.752 17.63q-2.67-2.425-4.71-4.717Q3 10.622 3 8.15q0-1.908 1.296-3.204T7.5 3.65q1.094 0 2.279.553T12 6.289q1.037-1.533 2.221-2.086T16.5 3.65q1.908 0 3.204 1.296T21 8.15q0 2.529-2.125 4.862t-4.652 4.622l-1.142 1.031q-.218.218-.513.323t-.587.106m-.47-11.767q-.898-1.448-1.867-2.063Q8.675 4.65 7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 1.108.627 2.272q.627 1.165 1.684 2.386q1.056 1.22 2.429 2.498q1.371 1.277 2.856 2.629q.173.154.404.154t.404-.154q1.485-1.352 2.857-2.63q1.372-1.276 2.429-2.497q1.056-1.222 1.683-2.386T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.144.615q-.97.614-1.867 2.062q-.08.135-.214.202T12 7.596t-.275-.067t-.213-.202M12 11.398" /></svg></Link>
                <Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.308 21.116q-.633 0-1.067-.434t-.433-1.066t.433-1.067q.434-.433 1.067-.433t1.066.433t.434 1.067t-.434 1.066t-1.066.434m9.384 0q-.632 0-1.066-.434t-.434-1.066t.434-1.067q.434-.433 1.066-.433t1.067.433q.433.434.433 1.067q0 .632-.433 1.066q-.434.434-1.067.434M5.881 5.5l2.669 5.616h7L18.627 5.5zm-.489-1h14.923l-4.167 7.616H8.1l-1.639 3h11.731v1H4.741l2.744-4.9L3.808 3.5H2v-1h2.442zm3.158 6.616h7z" /></svg></Link>
                <Link to="/user"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.385q-1.237 0-2.119-.882T9 8.385t.881-2.12T12 5.386t2.119.88t.881 2.12t-.881 2.118t-2.119.882m-7 7.23V16.97q0-.619.36-1.158q.361-.54.97-.838q1.416-.679 2.834-1.018q1.417-.34 2.836-.34t2.837.34t2.832 1.018q.61.298.97.838q.361.539.361 1.158v1.646zm1-1h12v-.646q0-.332-.215-.625q-.214-.292-.593-.494q-1.234-.598-2.546-.916T12 14.616t-2.646.318t-2.546.916q-.38.202-.593.494Q6 16.637 6 16.97zm6-7.23q.825 0 1.413-.588T14 8.384t-.587-1.412T12 6.384t-1.412.588T10 8.384t.588 1.413t1.412.587m0 7.232" /></svg></Link>
            </div>

            <div className="z-10 md:hidden" onClick={() => { setIsHidden(!isHidden) }}>
                {
                    isHidden ? (<button className="" > <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M4 17.27v-1h16v1zm0-4.77v-1h16v1zm0-4.77v-1h16v1z" /></svg></button>
                    ) : (<button><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="m12 12.708l-5.246 5.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L11.292 12L6.046 6.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L12 11.292l5.246-5.246q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.354L12.708 12l5.246 5.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16z" /></svg></button>
                    )
                }
            </div>
        </header >
    )
}
export default Header