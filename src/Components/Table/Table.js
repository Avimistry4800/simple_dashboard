import React, { useState } from 'react';
import Pagination from './Pagination'

const Table = () => {
    const [show, setShow] = useState(null)

    return (
        <>
            <div className="w-full m-0">
                <Pagination />
                <div className="bg-white shadow px-4 md:px-10 pt-4 mx-0 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-sm leading-none text-gray-800">
                                <th className="relative font-normal text-left pl-">EMPLOYE NAME
                                </th>
                                <th className="font-normal text-left pl-12">HOSPITAL NAME
                                </th>
                                <th className="font-normal text-left pl-12">DESIGNATION
                                </th>
                                <th className="font-normal text-left pl-20">ADMISSION DATE</th>
                                <th className="font-normal text-left pl-20">ESTIMATED DISCHARGE DATE</th>
                                <th className="font-normal text-left pl-16">REASON OF ADMISSION</th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-800 bg-white text-left hover:bg-gray-100 border-b border-t border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects.png" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium underline">Rahul Saxena</p>
                                        </div>
                                    </div>
                                </td>

                                <td className="pl-12">
                                    <p className="font-medium underline">All India Institute of Medical Science</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        Grant Road, Mumbai 400000
                                    </p>
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium">Manager</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">20 Jan 2021</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">24 Jan 2021</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">Malaria</p>
                                </td>

                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-800 bg-white text-left hover:bg-gray-100 border-b border-t border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects.png" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium underline">Rahul Saxena</p>
                                        </div>
                                    </div>
                                </td>

                                <td className="pl-12">
                                    <p className="font-medium underline">All India Institute of Medical Science</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        Grant Road, Mumbai 400000
                                    </p>
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium">Manager</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">20 Jan 2021</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">24 Jan 2021</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">Malaria</p>
                                </td>

                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-800 bg-white text-left hover:bg-gray-100 border-b border-t border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects.png" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium underline">Rahul Saxena</p>
                                        </div>
                                    </div>
                                </td>

                                <td className="pl-12">
                                    <p className="font-medium underline">All India Institute of Medical Science</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        Grant Road, Mumbai 400000
                                    </p>
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium">Manager</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">20 Jan 2021</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">24 Jan 2021</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">Malaria</p>
                                </td>

                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-800 bg-white text-left hover:bg-gray-100 border-b border-t border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects.png" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium underline">Rahul Saxena</p>
                                        </div>
                                    </div>
                                </td>

                                <td className="pl-12">
                                    <p className="font-medium underline">All India Institute of Medical Science</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        Grant Road, Mumbai 400000
                                    </p>
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium">Manager</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">20 Jan 2021</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">24 Jan 2021</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">Malaria</p>
                                </td>

                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-800 bg-white text-left hover:bg-gray-100 border-b border-t border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects.png" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium underline">Rahul Saxena</p>
                                        </div>
                                    </div>
                                </td>

                                <td className="pl-12">
                                    <p className="font-medium underline">All India Institute of Medical Science</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        Grant Road, Mumbai 400000
                                    </p>
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium">Manager</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">20 Jan 2021</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">24 Jan 2021</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">Malaria</p>
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Table;