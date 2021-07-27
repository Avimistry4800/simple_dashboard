import React from 'react';
import Policy from '../Policy/Policy';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    return (
        <main className="flex">
            <div className="w-1/12">
                <Sidebar />
            </div>
            <div className="w-11/12">
                <Policy />
            </div>
        </main>
    );
};

export default Home;