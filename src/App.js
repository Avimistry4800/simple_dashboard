import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Pagination from './Components/Table/Pagination';
import ActiveAdmission from './Components/ActiveAdmission/ActiveAdmission';
import Dashboard from './Components/Dashboard/Dashboard';
import Table from './Components/Table/Table';


function App() {
  return (
    <div className="">
      <Sidebar></Sidebar>
      <Dashboard />
      <ActiveAdmission />
      <Pagination />
      <Table />
      
    </div>
  );
}

export default App;