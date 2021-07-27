import { faCalendarCheck, faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { faCloudUploadAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"

const Dashboard = () => {
    return (
        <div>
            <div className=" px-6  rounded-lg grid">
                
                <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                    <div className="flex items-center px-2 py-0  bg-white rounded-lg shadow-xs shadow-md">

                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-600">
                                Total Users
                            </p>
                            <p className="text-lg font-semibold text-gray-700">
                                19238
                            </p>
                        </div>
                        <div className=" ml-auto m-4 p-4 item-center text-purple-500 bg-purple-100 w-16 h-16 text-center  rounded-full">
                            <FontAwesomeIcon className="text-3xl" icon={faUsers}  />
                        </div>
                    </div>
                    <div className="flex items-center px-2 py-0  bg-white rounded-lg shadow-xs shadow-md">

                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-600">
                                Total Users
                            </p>
                            <p className="text-lg font-semibold text-gray-700">
                                19238
                            </p>
                        </div>
                        <div className=" ml-auto m-4 p-4  text-cyan-500 bg-cyan-100 w-16 h-16 text-center  rounded-full">
                            <FontAwesomeIcon className="text-3xl"icon={faFileAlt}  />
                        </div>
                    </div>
                    <div className="flex items-center px-2 py-0  bg-white rounded-lg shadow-xs shadow-md">

                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-600">
                                Total Users
                            </p>
                            <p className="text-lg font-semibold text-gray-700">
                                19238
                            </p>
                        </div>
                        <div className=" ml-auto m-4 p-4 item-center text-red-500 bg-red-100 w-16 h-16 text-center  rounded-full">
                            <FontAwesomeIcon className="text-3xl" icon={faCalendarCheck}  />
                        </div>
                    </div>
                    <div className="flex items-center px-2 py-0  bg-white rounded-lg shadow-xs shadow-md">

                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-600">
                                Total Users
                            </p>
                            <p className="text-lg font-semibold text-gray-700">
                                19238
                            </p>
                        </div>
                        <div className=" ml-auto m-4 p-4 item-center text-green-500 bg-green-100 w-16 h-16 text-center  rounded-full">
                            <FontAwesomeIcon className="text-3xl" icon={faCloudUploadAlt}  />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Dashboard;