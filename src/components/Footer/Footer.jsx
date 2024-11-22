import React from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <section className="relative overflow-hidden py-10
        bg-gray-400 border border-t-2 border-t-black rounded-lg font-bold ">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center ">
                                <div className="hover:text-red-600 hover:bg-white px-2 py-1 rounded-full font-bold">
                                    <Logo width="100px" />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2023.
                                    All Rights Reserved By DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 text-xs font-bold
                                uppercase text-gray-500">
                                    Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-purple-800 px-3 py-2 duration-200 hover:bg-blue-100 rounded-full" to="/">
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-purple-800 px-3 py-2 duration-200 hover:bg-blue-100 rounded-full" to="/">
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-purple-800 px-3 py-2 duration-200 hover:bg-blue-100 rounded-full" to="/">
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-purple-800 px-3 py-2 duration-200 hover:bg-blue-100 rounded-full" to="/">
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 text-xs font-bold
                                uppercase text-gray-500">
                                    Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-purple-800 px-3 py-2 duration-200 hover:bg-blue-100 rounded-full" to="/">
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-purple-800 px-3 py-2 duration-200 hover:bg-blue-100 rounded-full" to="/">
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-purple-800 px-3 py-2 duration-200 hover:bg-blue-100 rounded-full" to="/">
                                        Contact Us
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-purple-800 px-2 py-2 duration-200 hover:bg-blue-100 rounded-full" to="/">
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 text-xs font-bold
                                uppercase text-gray-500">
                                    Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-purple-800 px-1 py-2 duration-200 hover:bg-blue-100 rounded-full" to="/">
                                        Terms &amp;
                                        Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-purple-800 px-3 py-2 duration-200 hover:bg-blue-100 rounded-full" to="/">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-purple-800 px-3 py-2 duration-200 hover:bg-blue-100 rounded-full" to="/">
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer
