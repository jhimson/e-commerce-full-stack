/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { GrCart } from 'react-icons/gr';

const Navbar = () => {
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);
  return (
    <div>
      {/*  navbar goes here */}
      <nav className="font-bold bg-gray-700">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <a
                  href="#"
                  className="flex items-center px-2 py-5 hover:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-1 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <span className="font-bold text-white">JhimShop</span>
                </a>
              </div>

              {/* primary nav */}
              <div className="items-center hidden space-x-1 md:flex">
                <a
                  href="#"
                  className="px-3 py-5 text-white hover:text-gray-900"
                >
                  Search
                </a>
              </div>
            </div>
            {/* secondary nav */}
            <div className="items-center hidden space-x-1 md:flex">
              <a
                href="#"
                className="flex items-center px-3 py-5 space-x-2 text-white"
              >
                <GrCart size="1.5em" />
                <span>Cart</span>
              </a>
              <a
                href="#"
                className="px-3 py-2 text-yellow-900 transition duration-300 bg-yellow-400 rounded hover:bg-yellow-300 hover:text-yellow-800"
              >
                Sign In
              </a>
            </div>
            {/* mobile button goes here */}
            <div className="flex items-center text-white md:hidden">
              <button
                onClick={() => setMobileMenuIsVisible(!mobileMenuIsVisible)}
              >
                <svg
                  className="w-6 h-6 focus:outline-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`md:hidden ${
            mobileMenuIsVisible ? null : 'hidden'
          } px-2 pb-3`}
        >
          <a
            href="#"
            className="block px-4 py-2 mb-2 text-sm text-white hover:bg-gray-200"
          >
            Search
          </a>
          <a
            href="#"
            className="flex px-4 py-2 mb-2 space-x-1 text-sm text-white hover:bg-gray-200"
          >
            <GrCart size="1.5em" />
            <span>Cart</span>
          </a>
          <a
            href="#"
            className="inline-block px-3 py-2 mb-2 ml-4 text-sm text-yellow-900 transition duration-300 bg-yellow-400 rounded hover:bg-yellow-300 hover:text-yellow-800"
          >
            Sign up
          </a>
        </div>
      </nav>

      {/* content goes here */}

      {/* <div className="py-32 text-center">
        <h2 className="text-4xl font-extrabold">Navbar in Tailwind!</h2>
      </div> */}
    </div>
  );
};

export default Navbar;

// /* eslint-disable react/button-has-type */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState, useEffect } from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { AiOutlineClose } from 'react-icons/ai';
// import { useHistory, useLocation, Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { FaRegUserCircle } from 'react-icons/fa';
// import LOGO from '../assets/images/j•p.svg';
// // import {Link as ScrollLink} from 'react-scroll'

// //! ACTIONS
// import { userLogout } from '../redux/actions/userActions';
// // !------------------------------------------------------------------------>

// const Navbar = () => {
//   const history = useHistory();
//   const location = useLocation();
//   const { pathname } = location;
//   const dispatch = useDispatch();

//   //! COMPONENT STATE
//   const [toggle, setToggle] = useState(false);
//   const [userEmail, setUserEmail] = useState(null);
//   // !---------------------------------------------------------------------->

//   // ! GLOBAL STATE VARIABLES
//   const email = useSelector((state) => state.userLogin.userLoginInfo.email);
//   // !---------------------------------------------------------------------->

//   useEffect(() => {
//     if (email !== null) setUserEmail(email);
//   }, [email]);
//   return (
//     //! Main navbar wrapper ~~~START
//     <div className="flex flex-col justify-between py-3 mx-auto bg-black lg:flex-row lg:p-0 navbar-container">
//       <div className="flex items-center justify-between lg:mx-21">
//         <div className="flex cursor-pointer lg:animate-float">
//           <Link to="/">
//             <img src={LOGO} alt="" className="w-24 h-24 lg:h-32 lg:w-32" />
//           </Link>
//         </div>
//         {location.pathname !== '/' ? (
//           <div
//             className={`${
//               toggle ? 'flex' : 'hidden'
//             } flex-col justify-center lg:items-center pb-4 lg:pb-0 lg:flex`}
//           >
//             <nav>
//               <ul className="flex flex-col gap-5 px-8 text-white lg:flex-row">
//                 {/* <li><ScrollLink to='projects' smooth={true}><a href="" className='nav-item'>Projects</a></ScrollLink></li> */}
//                 {location.pathname !== '/dashboard' ? (
//                   <li>
//                     <a href="" className="text-2xl nav-item">
//                       Dashboard
//                     </a>
//                   </li>
//                 ) : null}
//               </ul>
//             </nav>
//           </div>
//         ) : null}
//         <div className="flex mr-4 lg:hidden">
//           {toggle ? (
//             <AiOutlineClose
//               size="3em"
//               className="font-bold text-red-600 cursor-pointer"
//               onClick={() => setToggle(!toggle)}
//             />
//           ) : (
//             <GiHamburgerMenu
//               size="3em"
//               className="font-extrabold text-white cursor-pointer"
//               onClick={() => setToggle(!toggle)}
//             />
//           )}
//         </div>
//       </div>

//       {location.pathname !== '/' ? (
//         <div
//           className={`${
//             toggle ? 'flex' : 'hidden'
//           } flex-col justify-center lg:items-center pb-4 lg:pb-0 lg:flex`}
//         >
//           <nav>
//             <ul className="flex flex-col items-center px-8 space-x-5 text-white lg:flex-row">
//               {/* <li><ScrollLink to='projects' smooth={true}><a href="" className='nav-item'>Projects</a></ScrollLink></li> */}
//               <li>
//                 <span className="flex space-x-2">
//                   <FaRegUserCircle size="3em" />
//                   {userEmail !== null ? (
//                     <p className="self-center">{userEmail}</p>
//                   ) : null}
//                 </span>
//               </li>
//               <li>
//                 <button
//                   className="text-2xl text-red-500 nav-item"
//                   onClick={() => dispatch(userLogout())}
//                 >
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       ) : null}
//     </div> //! Main navbar wrapper ~~~END
//   );
// };

// export default Navbar;
