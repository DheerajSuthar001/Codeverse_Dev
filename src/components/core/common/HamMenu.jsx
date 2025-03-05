import React from 'react'
import { IconName, VscClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo/LogoMainDark.png';
import { NavbarLinks } from '../../../data/navbar-links';
import { matchPath } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import { useState } from 'react';
import { apiConnector } from '../../../services/apiConnector';
import { useEffect } from 'react';
import { categories } from '../../../services/apis';
import { useSelector } from 'react-redux';
import ProfileDropdown from '../auth/ProfileDropDown';
import { ACCOUNT_TYPE } from '../../../utils/constants';
import { AiOutlineShoppingCart } from 'react-icons/ai';
function HamMenu({ setHamMenu }) {
    const { token } = useSelector((state) => state.auth);
  // console.log('token is',token);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
    const [loading, setLoading] = useState(false);
    const [subLinks, setSubLinks] = useState([]);
    const fetchSubLinks = async () => {
        try {
            setLoading(true);
            let response = await apiConnector('GET', categories.CATEGORIES_API);
            // console.log(response.data.data);
            setSubLinks(response.data.data);
            setLoading(false);
        } catch (error) {
            console.log('Cannot fetch categories list', error)
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchSubLinks();
    }, [])
    const location = useLocation();
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
    }
    return (
        <div className="fixed !mt-14 inset-0  z-[1000]  grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
            <div className=" w-full h-full rounded-lg border bg-richblack-800 p-6 bg-opacity-10 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-4 ">
                          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
                            <Link to="/dashboard/cart" className="relative" onClick={()=>setHamMenu(false)}>
                              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
                              {totalItems > 0 && (
                                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                                  {totalItems}
                                </span>
                              )}
                              
                            </Link>
                          )}
                          {token === null && (
                            <Link to="/login" onClick={()=>setHamMenu(false)}>
                              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                                Log in
                              </button>
                            </Link>
                          )}
                          {token === null && (
                            <Link to="/signup" onClick={()=>setHamMenu(false)}>
                              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                                Sign up
                              </button>
                            </Link>
                          )}
                          {token !== null && <ProfileDropdown />}
                        </div>
                <div className='flex justify-between text-white font-bold p-1 '>
                    <ul className="flex w-full flex-col items-center gap-4  text-richblack-25 text-2xl">
                        {NavbarLinks.map((link, index) => (
                            <li key={index}>
                                {link.title === "Catalog" ? (
                                    <div>

                                        <div
                                            className={` ${matchRoute("/catalog/:catalogName")
                                                ? "text-yellow-25"
                                                : "text-richblack-25"
                                                }`}
                                        >
                                            <p>{link.title}</p>
                                        </div>
                                        <div>
                                            {loading ? (
                                                <p className="text-center">Loading...</p>
                                            ) : subLinks.length ? (
                                                <div className=' py-2 px-4 text-sm'>
                                                    {subLinks
                                                        ?.filter(
                                                            (subLink) => subLink?.courses?.length > 0
                                                        )
                                                        ?.map((subLink, i) => (
                                                            <Link
                                                                to={`/catalog/${subLink.name
                                                                    .split(" ")
                                                                    .join("-")
                                                                    .toLowerCase()}`}
                                                                className="rounded-lg bg-transparent  hover:bg-richblack-50"
                                                                key={i}
                                                                onClick={()=>setHamMenu(false)}
                                                            >
                                                                <p>{subLink.name}</p>
                                                            </Link>
                                                        ))}
                                                </div>
                                            ) : (
                                                <p className="text-center">No Courses Found</p>
                                            )}
                                        </div>


                                    </div>
                                ) : (
                                    <Link to={link?.path}>
                                        <p
                                            className={`${matchRoute(link?.path)
                                                ? "text-yellow-25"
                                                : "text-richblack-25"
                                                }`}
                                            onClick={() => setHamMenu(false)}
                                        >
                                            {link.title}
                                        </p>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default HamMenu