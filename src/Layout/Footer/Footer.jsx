
const Footer = () => {
    
        const currentYear = new Date().getFullYear();
        return (
          <div className="container mt-20 border-t border-gray-500">
            <footer className="bg-white">
              <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  <div>
                    <div className="flex justify-center text-teal-600 sm:justify-start">
                      <a href="#" className="text-green-700 text-2xl font-bold">
                       <p>mindtalk</p>
                      </a>
                    </div>
      
                    <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                      amet sint. Velit officia consequat duis enim velit mollit.
                    </p>
                    <p className="py-5 font-bold">Accepted Payments</p>
                    <ul className=" flex justify-center  gap-6 sm:justify-start md:gap-8">
                      <li>
                        <a
                          href="#"
                          rel="noreferrer"
                          target="_blank"
                          className="text-teal-700 transition hover:text-teal-700/75"
                        >
                          <span className="sr-only">Strip</span>
                          <img
                            src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1ce8816711ebecac46d8_stripe.png"
                            alt=""
                            className="h-10 p-2 w-20 border rounded"
                          />
                        </a>
                      </li>
      
                      <li>
                        <a
                          href="#"
                          rel="noreferrer"
                          target="_blank"
                          className="text-teal-700 transition hover:text-teal-700/75"
                        >
                          <span className="sr-only">visa</span>
                          <img
                            src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1ce82d440b7ab84a993f_visa.png"
                            alt=""
                            className="h-10 p-2 w-20 border rounded"
                          />
                        </a>
                      </li>
      
                      <li>
                        <a
                          href="#"
                          rel="noreferrer"
                          target="_blank"
                          className="text-teal-700 transition hover:text-teal-700/75"
                        >
                          <span className="sr-only">master</span>
                          <img
                            src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1ce8f032504012a5896b_Mastercard.png"
                            alt=""
                            className="h-10 p-2 w-20 border rounded"
                          />
                        </a>
                      </li>
      
                      <li>
                        <a
                          href="#"
                          rel="noreferrer"
                          target="_blank"
                          className="text-teal-700 transition hover:text-teal-700/75"
                        >
                          <span className="sr-only">Gpay</span>
                          <img
                            src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1f55dc68c5ee83d0cbf8_GooglePay.png"
                            alt=""
                            className="h-10 p-2 w-20 border rounded"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
      
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                    <div className="text-center sm:text-left">
                      <p className="text-lg font-medium text-gray-900">Department</p>
      
                      <ul className="mt-8 space-y-4 text-sm">
                        <li>
                          <a
                            className="text-gray-700 transition hover:text-gray-700/75"
                            href="/"
                          >
                            Electronics & Gadget
                          </a>
                        </li>
      
                        <li>
                          <a
                            className="text-gray-700 transition hover:text-gray-700/75"
                            href="/"
                          >
                            Toys
                          </a>
                        </li>
      
                        <li>
                          <a
                            className="text-gray-700 transition hover:text-gray-700/75"
                            href="/"
                          >
                            Sneakers
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-700 transition hover:text-gray-700/75"
                            href="/"
                          >
                            Travel Accessories
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-700 transition hover:text-gray-700/75"
                            href="/"
                          >
                            Organic Grocery
                          </a>
                        </li>
      
                        <li>
                          <a
                            className="text-gray-700 transition hover:text-gray-700/75"
                            href="/"
                          >
                            {" "}
                            Furniture{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
      
                    <div className="text-center sm:text-left">
                      <p className="text-lg font-medium text-gray-900">
                        Our Services
                      </p>
      
                      <ul className="mt-8 space-y-4 text-sm">
                        <li>
                          <a
                            className="text-gray-700 transition hover:text-gray-700/75"
                            href="/"
                          >
                            Gift Card
                          </a>
                        </li>
      
                        <li>
                          <a
                            className="text-gray-700 transition hover:text-gray-700/75"
                            href="/"
                          >
                            {" "}
                            Mobile App{" "}
                          </a>
                        </li>
      
                        <li>
                          <a
                            className="text-gray-700 transition hover:text-gray-700/75"
                            href="/"
                          >
                            {" "}
                            Shipping & Delivery{" "}
                          </a>
                        </li>
      
                        <li>
                          <a
                            className="text-gray-700 transition hover:text-gray-700/75"
                            href="/"
                          >
                            {" "}
                            Order Pickup{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
      
                    <div className="text-center sm:text-left">
                      <p className="text-lg font-medium text-gray-900">Help</p>
      
                      <ul className="mt-8 space-y-4 text-sm">
                        <li>
                          <a
                            className="text-gray-700 transition hover:text-gray-700/75"
                            href="/"
                          >
                            {" "}
                            Shopcart Help{" "}
                          </a>
                        </li>
      
                        <li>
                          <a
                            className="text-gray-700 transition hover:text-gray-700/75"
                            href="/"
                          >
                            {" "}
                            Returns{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-700 transition hover:text-gray-700/75"
                            href="/"
                          >
                            {" "}
                            Track Orders{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-700 transition hover:text-gray-700/75"
                            href="/"
                          >
                            {" "}
                            Feedback{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                            href="/"
                          >
                            <span className="text-gray-700 transition group-hover:text-gray-700/75">
                              Live Chat
                            </span>
      
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
      
                    <div className="text-center sm:text-left">
                      <p className="text-lg font-medium text-gray-900">Contact Us</p>
      
                      <ul className="mt-8 space-y-4 text-sm">
                        <li>
                          <a
                            className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 shrink-0 text-gray-900"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
      
                            <span className="flex-1 text-gray-700">john@doe.com</span>
                          </a>
                        </li>
      
                        <li>
                          <a
                            className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 shrink-0 text-gray-900"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
      
                            <span className="flex-1 text-gray-700">0123456789</span>
                          </a>
                        </li>
      
                        <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 shrink-0 text-gray-900"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
      
                          <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                            213 Lane, London, United Kingdom
                          </address>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
      
                <div className="mt-12  ">
                  <div className="text-center sm:flex sm:justify-between sm:text-left">
                    <p className="text-sm text-gray-500">
                      <span className="block sm:inline">All rights reserved.</span>
      
                      <a
                        className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                        href="/"
                      >
                        Terms & Conditions
                      </a>
      
                      <span>&middot;</span>
      
                      <a
                        className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                        href="/"
                      >
                        Privacy Policy
                      </a>
                    </p>
      
                    <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                      &copy; {currentYear} Shopcart
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        );
      };
      

export default Footer;