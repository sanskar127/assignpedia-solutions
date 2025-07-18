'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import ThemeToggler from './ThemeToggler';
import menuData from './menuData';
import { usePathname } from 'next/navigation';
import { GoChevronDown } from 'react-icons/go';

// import useSite from 'hooks/use-site';
// import { findMenuByLocation, MENU_LOCATION_NAVIGATION_DEFAULT } from 'lib/menus';

const Header = () => {
  const pathname = usePathname();
  // const { menus } = useSite();
  // const navigationLocation = process.env.WORDPRESS_MENU_LOCATION_NAVIGATION || MENU_LOCATION_NAVIGATION_DEFAULT;
  // const navigationMenu = findMenuByLocation(menus, navigationLocation);

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
    return () => window.removeEventListener('scroll', handleStickyNavbar);
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const isSubmenuActive = (submenu) => {
    return Object.values(submenu).some((group) => group.items.some((item) => pathname.startsWith(item.path)));
  };

  return (
    <>
      {/* <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent transition-all duration-500 ease-in-out ${
          sticky
            ? '!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm dark:!bg-primary dark:!bg-opacity-20'
            : 'relative sm:absolute'
        }`}
      > */}
      <header
        className={`top-0 left-0 z-[9999] w-full bg-white shadow-md backdrop-blur-sm transition-all duration-300  ${
          sticky ? 'sticky bg-white shadow-md' : 'relative'
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link href="/" className={`header-logo block w-full py-2 lg:py-2 `}>
                {/* <Link href="/" className={`header-logo block w-full ${sticky ? 'py-5 lg:py-2' : 'py-8'} `}> */}
                <Image
                  src="/images/logo/ZenithX-light2.png"
                  alt="logo"
                  width={140}
                  height={40}
                  className="h-[50px] w-auto object-contain"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-end px-4 lg:hidden">
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-1 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                    navbarOpen ? ' top-[7px] rotate-45' : ' '
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                    navbarOpen ? 'opacity-0 ' : ' '
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                    navbarOpen ? ' top-[-8px] -rotate-45' : ' '
                  }`}
                />
              </button>
            </div>
            <nav id="navbarDesktop" className="hidden lg:flex items-center space-x-8">
              <ul className="flex items-center space-x-6">
                {menuData.map((menuItem) => (
                  <li key={menuItem.id} className="group relative">
                    {!menuItem.path ? (
                      <>
                        <span className="flex items-center text-base font-medium text-dark cursor-pointer">
                          {menuItem.title}
                          <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                          </svg>
                        </span>

                        {/* Submenu (hover only) */}
                        <div className="invisible absolute left-2/2 top-full mt-6 z-50 w-[900px] -translate-x-1/2 rounded-md bg-white border-gray-800 p-6 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:top-full">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Object.values(menuItem.submenu).map((group, i) => (
                              <div key={i}>
                                <h4 className="!text-xl mb-2 !text-transparent bg-clip-text bg-gradient-to-r from-[#17b3ac] via-blue-500 to-blue-300 mb-2 text-sm font-bold text-gray-700">
                                  {group.title}
                                </h4>
                                {group.items.map((subItem) => (
                                  <Link
                                    key={subItem.id}
                                    href={subItem.path}
                                    className={`block rounded py-1 hover:text-primary ${
                                      isActive(subItem.path)
                                        ? 'text-primary font-semibold bg-gray-700'
                                        : 'text-dark '
                                    }`}
                                  >
                                    {subItem.title}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={menuItem.path}
                        className={`text-base font-medium ${
                          isActive(menuItem.path) ? 'text-primary' : 'text-dark hover:text-primary'
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    )}
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="holographic-button mt-1 ml-2 inline-block whitespace-nowrap rounded-md bg-[linear-gradient(120deg,_#ff8d4d,_#e449ae_49%,_#7746ff)] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:from-[#17b3ac] hover:to-blue-900"
                  >
                    Book an Appointment
                  </Link>
                </li>
              </ul>
            </nav>

            {/* <div className="flex items-center justify-end pr-16 lg:pr-0">
              <Link
                href="/signin"
                className="hidden py-3 px-7 text-base font-bold text-dark hover:opacity-70 dark:text-white md:block"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
              >
                Sign Up
              </Link>
              <div>
                <ThemeToggler />
              </div>
            </div> */}
            {/* </div> */}
          </div>
        </div>
      </header>
      {navbarOpen && (
        <>
          <div onClick={navbarToggleHandler} className="fixed inset-0 z-[9998] bg-black bg-opacity-50 lg:hidden" />
          <nav
            id="mobileDrawer"
            className="fixed top-0 left-0 z-[10000] h-full w-full sm:w-[75%] bg-white dark:bg-black shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col"
          >
            <div className="flex justify-between items-center p-1 border-b border-gray-200 dark:border-primary">
              <div className="w-60 max-w-full">
                <Link href="/" className={`header-logo block w-full py-1`}>
                  {/* <Link href="/" className={`header-logo block w-full ${sticky ? 'py-5 lg:py-2' : 'py-8'} `}> */}
                  <Image
                    src="/images/logo/ZenithX-light2.png"
                    alt="logo"
                    width={140}
                    height={30}
                    className="h-[50px] w-auto dark:hidden object-contain"
                  />
                  <Image
                    src="/images/logo/ZenithX-dark2.png"
                    alt="logo"
                    width={140}
                    height={30}
                    className="h-[50px] w-auto hidden dark:block object-contain"
                  />
                </Link>
              </div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-8  block translate-y-[-50%] rounded-lg px-1 py-[6px] ring-primary focus:ring-2 sm:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? ' top-[7px] rotate-45' : ' '
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? 'opacity-0 ' : ' '
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? ' top-[-8px] -rotate-45' : ' '
                  }`}
                />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto px-4 py-4">
              <ul className="space-y-4">
                {menuData.map((menuItem, index) => (
                  <li key={menuItem.id}>
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        onClick={navbarToggleHandler}
                        className={`flex items-center space-x-2 text-base font-medium rounded p-2 ${
                          isActive(menuItem.path)
                            ? 'text-primary font-medium bg-gray-100 dark:bg-primary/5 border-l-4 border-primary'
                            : 'text-dark dark:text-white hover:opacity-80'
                        }`}
                      >
                        <span className="my-1">{menuItem.title}</span>
                      </Link>
                    ) : (
                      <div>
                        <button
                          onClick={() => handleSubmenu(index)}
                          className={`flex items-center justify-between w-full text-base font-medium rounded p-2 ${
                            isSubmenuActive(menuItem.submenu)
                              ? 'text-primary font-semibold bg-gray-100 dark:bg-primary/5 border-l-4 border-primary'
                              : 'text-dark dark:text-white hover:opacity-80'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <span>{menuItem.title}</span>
                          </div>
                          <span>
                            {openIndex === index ? <GoChevronDown className="rotate-180" /> : <GoChevronDown />}
                          </span>
                        </button>
                        <div className={`${openIndex === index ? 'block' : 'hidden'} ml-0 mt-2 space-y-2`}>
                          {Object.values(menuItem.submenu).map((group, i) => (
                            <div key={i}>
                              <h4 className="!text-transparent bg-clip-text bg-gradient-to-r from-[#17b3ac] via-blue-500 to-blue-300 text-lg p-2">
                                {group.title}
                              </h4>
                              <ul className="pl-2 mt-1">
                                {group.items.map((subItem) => (
                                  <li key={subItem.id}>
                                    <Link
                                      href={subItem.path}
                                      onClick={navbarToggleHandler}
                                      className={`block text-sm ${
                                        isActive(subItem.path)
                                          ? 'text-primary font-semibold bg-gray-100 dark:bg-primary/5 p-2 rounded'
                                          : 'text-gray-700 dark:text-white hover:opacity-80 p-2'
                                      }`}
                                    >
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </>
      )}

      {/* <div className="h-[72px]"></div> */}
      {/* Spacer div to prevent layout jump */}
      {/* <div className={`${sticky ? 'h-[80px]' : 'h-0'} transition-all duration-500`}></div> */}
    </>
  );
};

export default Header;

// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import menuData from './menuData';
// import ThemeToggler from './ThemeToggler';

// const Header = () => {
//   // Navbar toggle
//   const [navbarOpen, setNavbarOpen] = useState(false);
//   const navbarToggleHandler = () => {
//     setNavbarOpen(!navbarOpen);
//   };

//   // Sticky Navbar
//   const [sticky, setSticky] = useState(false);
//   const handleStickyNavbar = () => {
//     if (window.scrollY >= 80) {
//       setSticky(true);
//     } else {
//       setSticky(false);
//     }
//   };
//   useEffect(() => {
//     window.addEventListener('scroll', handleStickyNavbar);
//   });

//   // submenu handler
//   const [openIndex, setOpenIndex] = useState(-1);
//   const handleSubmenu = (index) => {
//     if (openIndex === index) {
//       setOpenIndex(-1);
//     } else {
//       setOpenIndex(index);
//     }
//   };

//   return (
//     <>
//       <header
//         className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
//           sticky
//             ? '!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20'
//             : 'absolute'
//         }`}
//       >
//         <div className="container">
//           <div className="relative -mx-4 flex items-center justify-between">
//             <div className="w-60 max-w-full px-4 xl:mr-12">
//               <Link href="/" className={`header-logo block w-full ${sticky ? 'py-5 lg:py-2' : 'py-8'} `}>
//                 <Image
//                   src="/images/logo/logo-2.svg"
//                   alt="logo"
//                   width={140}
//                   height={30}
//                   className="w-full dark:hidden"
//                 />
//                 <Image
//                   src="/images/logo/logo.svg"
//                   alt="logo"
//                   width={140}
//                   height={30}
//                   className="hidden w-full dark:block"
//                 />
//               </Link>
//             </div>
//             <div className="flex w-full items-center justify-between px-4">
//               <div>
//                 <button
//                   onClick={navbarToggleHandler}
//                   id="navbarToggler"
//                   aria-label="Mobile Menu"
//                   className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
//                 >
//                   <span
//                     className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
//                       navbarOpen ? ' top-[7px] rotate-45' : ' '
//                     }`}
//                   />
//                   <span
//                     className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
//                       navbarOpen ? 'opacity-0 ' : ' '
//                     }`}
//                   />
//                   <span
//                     className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
//                       navbarOpen ? ' top-[-8px] -rotate-45' : ' '
//                     }`}
//                   />
//                 </button>
//                 <nav
//                   id="navbarCollapse"
//                   className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
//                     navbarOpen ? 'visibility top-full opacity-100' : 'invisible top-[120%] opacity-0'
//                   }`}
//                 >
//                   <ul className="block lg:flex lg:space-x-12">
//                     {menuData.map((menuItem, index) => (
//                       <li key={menuItem.id} className="group relative">
//                         {menuItem.path ? (
//                           <Link
//                             href={menuItem.path}
//                             className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
//                           >
//                             {menuItem.title}
//                           </Link>
//                         ) : (
//                           <>
//                             <a
//                               onClick={() => handleSubmenu(index)}
//                               className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
//                             >
//                               {menuItem.title}
//                               <span className="pl-3">
//                                 <svg width="15" height="14" viewBox="0 0 15 14">
//                                   <path
//                                     d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
//                                     fill="currentColor"
//                                   />
//                                 </svg>
//                               </span>
//                             </a>
//                             <div
//                               className={`submenu relative top-full left-0 rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
//                                 openIndex === index ? 'block' : 'hidden'
//                               }`}
//                             >
//                               {menuItem.submenu.map((submenuItem) => (
//                                 <Link
//                                   href={submenuItem.path}
//                                   key={submenuItem.id}
//                                   className="block rounded py-2.5 text-sm text-dark hover:opacity-70 dark:text-white lg:px-3"
//                                 >
//                                   {submenuItem.title}
//                                 </Link>
//                               ))}
//                             </div>
//                           </>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 </nav>
//               </div>
//               <div className="flex items-center justify-end pr-16 lg:pr-0">
//                 <Link
//                   href="/signin"
//                   className="hidden py-3 px-7 text-base font-bold text-dark hover:opacity-70 dark:text-white md:block"
//                 >
//                   Sign In
//                 </Link>
//                 <Link
//                   href="/signup"
//                   className="ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
//                 >
//                   Sign Up
//                 </Link>
//                 <div>
//                   <ThemeToggler />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       <div className="h-[80px] bg-transparent !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"></div>
//     </>
//   );
// };

// export default Header;

// import { useEffect, useRef, useState, useCallback } from 'react';
// import Link from 'next/link';
// import { FaSearch } from 'react-icons/fa';

// import useSite from 'hooks/use-site';
// import useSearch, { SEARCH_STATE_LOADED } from 'hooks/use-search';
// import { postPathBySlug } from 'lib/posts';
// import { findMenuByLocation, MENU_LOCATION_NAVIGATION_DEFAULT } from 'lib/menus';
// import NavListItem from 'components/NavListItem';

// const SEARCH_VISIBLE = 'visible';
// const SEARCH_HIDDEN = 'hidden';

// const Nav = () => {
//   const formRef = useRef();

//   const [searchVisibility, setSearchVisibility] = useState(SEARCH_HIDDEN);

//   const { metadata = {}, menus } = useSite();
//   const { title = 'RS' } = metadata ?? {};

//   const navigationLocation = process.env.WORDPRESS_MENU_LOCATION_NAVIGATION || MENU_LOCATION_NAVIGATION_DEFAULT;
//   const navigation = findMenuByLocation(menus, navigationLocation);

//   const { query, results, search, clearSearch, state } = useSearch({
//     maxResults: 5,
//   });

//   const searchIsLoaded = state === SEARCH_STATE_LOADED;

//   // When the search visibility changes, we want to add an event listener that allows us to
//   // detect when someone clicks outside of the search box, allowing us to close the results
//   // when focus is drawn away from search

//   useEffect(() => {
//     // If we don't have a query, don't need to bother adding an event listener
//     // but run the cleanup in case the previous state instance exists

//     if (searchVisibility === SEARCH_HIDDEN) {
//       removeDocumentOnClick();
//       return;
//     }

//     addDocumentOnClick();
//     addResultsRoving();

//     // When the search box opens up, additionall find the search input and focus
//     // on the element so someone can start typing right away

//     const searchInput = Array.from(formRef.current.elements).find((input) => input.type === 'search');

//     searchInput.focus();

//     return () => {
//       removeResultsRoving();
//       removeDocumentOnClick();
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [searchVisibility]);

//   /**
//    * addDocumentOnClick
//    */

//   function addDocumentOnClick() {
//     document.body.addEventListener('click', handleOnDocumentClick, true);
//   }

//   /**
//    * removeDocumentOnClick
//    */

//   function removeDocumentOnClick() {
//     document.body.removeEventListener('click', handleOnDocumentClick, true);
//   }

//   /**
//    * handleOnDocumentClick
//    */

//   function handleOnDocumentClick(e) {
//     if (!e.composedPath().includes(formRef.current)) {
//       setSearchVisibility(SEARCH_HIDDEN);
//       clearSearch();
//     }
//   }

//   /**
//    * handleOnSearch
//    */

//   function handleOnSearch({ currentTarget }) {
//     search({
//       query: currentTarget.value,
//     });
//   }

//   /**
//    * handleOnToggleSearch
//    */

//   function handleOnToggleSearch() {
//     setSearchVisibility(SEARCH_VISIBLE);
//   }

//   /**
//    * addResultsRoving
//    */

//   function addResultsRoving() {
//     document.body.addEventListener('keydown', handleResultsRoving);
//   }

//   /**
//    * removeResultsRoving
//    */

//   function removeResultsRoving() {
//     document.body.removeEventListener('keydown', handleResultsRoving);
//   }

//   /**
//    * handleResultsRoving
//    */

//   function handleResultsRoving(e) {
//     const focusElement = document.activeElement;

//     if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       if (focusElement.nodeName === 'INPUT' && focusElement.nextSibling.children[0].nodeName !== 'P') {
//         focusElement.nextSibling.children[0].firstChild.firstChild.focus();
//       } else if (focusElement.parentElement.nextSibling) {
//         focusElement.parentElement.nextSibling.firstChild.focus();
//       } else {
//         focusElement.parentElement.parentElement.firstChild.firstChild.focus();
//       }
//     }

//     if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       if (focusElement.nodeName === 'A' && focusElement.parentElement.previousSibling) {
//         focusElement.parentElement.previousSibling.firstChild.focus();
//       } else {
//         focusElement.parentElement.parentElement.lastChild.firstChild.focus();
//       }
//     }
//   }

//   /**
//    * escFunction
//    */

//   // pressing esc while search is focused will close it

//   const escFunction = useCallback((event) => {
//     if (event.keyCode === 27) {
//       clearSearch();
//       setSearchVisibility(SEARCH_HIDDEN);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     document.addEventListener('keydown', escFunction, false);

//     return () => {
//       document.removeEventListener('keydown', escFunction, false);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
//       <div className="mx-auto flex max-w-7xl items-center justify-between gap-y-6  gap-x-6 py-6 px-2 lg:px-4 md:px-0 xl:px-0 lg:py-6">
//         {/* Site Title */}
//         <div className="flex lg:flex-1">
//           <Link href="/" className="-m-1.5 p-1.5 dark:text-gray-200">
//             {title || 'RS'}
//           </Link>
//         </div>

//         {/* Navigation Menu */}
//         <ul className="hidden lg:flex lg:gap-x-12">
//           {navigation?.length ? (
//             navigation.map((listItem) => (
//               <li key={listItem.id}>
//                 <NavListItem
//                   item={listItem}
//                   className="dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
//                 />
//               </li>
//             ))
//           ) : (
//             <li>
//               <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
//                 Home
//               </Link>
//             </li>
//           )}
//         </ul>

//         {/* Search Bar */}
//         <div className="relative flex flex-1 items-center justify-end gap-x-6">
//           {searchVisibility === SEARCH_HIDDEN ? (
//             <button
//               onClick={handleOnToggleSearch}
//               disabled={!searchIsLoaded}
//               className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
//               aria-label="Toggle Search"
//             >
//               <FaSearch />
//             </button>
//           ) : (
//             <form ref={formRef} className="relative" action="/search" data-search-is-active={!!query}>
//               <input
//                 type="search"
//                 name="q"
//                 value={query || ''}
//                 onChange={handleOnSearch}
//                 autoComplete="off"
//                 placeholder="Search..."
//                 required
//                 className="w-48 sm:w-64 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600"
//               />
//               <div className="absolute z-20 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg">
//                 {results.length > 0 ? (
//                   <ul className="divide-y divide-gray-100 dark:divide-gray-700">
//                     {results.map(({ slug, title }, index) => (
//                       <li key={slug}>
//                         <Link
//                           tabIndex={index}
//                           href={postPathBySlug(slug)}
//                           className="block px-4 py-2 text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//                         >
//                           {title || 'RS'}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
//                     Sorry, not finding anything for <strong>{query}</strong>
//                   </p>
//                 )}
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nav;
