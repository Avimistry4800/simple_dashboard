import React from 'react';
import Navigation from '../Navigation/Navigation';
import Policy from '../Policy/Policy';
import Sidebar from '../Sidebar/Sidebar';
import Table from '../Table/Table';
import CommonDiseases from '../CommonDiseases/CommonDiseases';
import HealthChallenges from '../HealthChallenges/HealthChallenges';
import Dashboard from '../Dashboard/Dashboard';

const Home = () => {
    return (
        <div className="min-h-screen items-center  "> 
            <div className=" bg-gray-500 grid grid-cols-12  " >
            <div className="col-span-2 ">
                <Sidebar />
            </div>
            <div className="col-span-10">
                
                <Navigation className="" />
                <Dashboard />
                <Policy className=""/>
                <Table /> 
                <CommonDiseases />
                  
            
            </div>
            
        </div>
        </div>
    );
};

export default Home;