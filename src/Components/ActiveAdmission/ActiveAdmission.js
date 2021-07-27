import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";


const ActiveAdmission = () => {
    const [options, setOptions] = useState(
        {
            chart: {
              type: 'donut',
              height: '100%',
              width: '100%',
            },
            plotOptions: {
                pie: {
                  donut: {
                    labels: {
                      show: true,
                      name: ['Employees', 'Spouse', 'Childrens', 'Parents'],
                      value: 
                        [10,7, 5,13]
                      ,
                    }
                  }
                }
              },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 480
                },
                legend: {
                  position: 'bottom'
                },
                series:{
                    display: 'false'
                }
              }
            }]
          },
    );
    
    const [series, setSeries] = useState(
        [10, 7, 5, 3],
        

    );

    
    
    const [labels, setLabels] = useState(
        ['Employees', 'Spouse', 'Childrens', 'Parents']
    );
     return (
     <div id="chart w-full">
    <ReactApexChart options={options} className="flex " series={series} type="donut" labels={labels}  height={350} />
    <div> 
      <div className="flex justify-between">
<div>
  <p> <span className="mx-2 text-blue-500"><FontAwesomeIcon icon={faSquare}/> </span> Employees</p>
</div>
<div>
  5 lakh
</div>
      </div>
      <div className="flex justify-between">
<div>
  <p> <span className="mx-2 text-green-400"><FontAwesomeIcon icon={faSquare}/> </span> Spouse</p>
</div>
<div>
  3 Lakh
</div>
      </div>
      <div className="flex justify-between">
<div>
  <p> <span className="mx-2 text-yellow-500"><FontAwesomeIcon icon={faSquare}/> </span> Childrens</p>
</div>
<div>
  2 Lakh
</div>
      </div>
      <div className="flex justify-between">
<div>
  <p> <span className="mx-2 text-red-500"><FontAwesomeIcon icon={faSquare}/> </span> Parents</p>
</div>
<div>
  1 Lakh
</div>
      </div>
    </div>
    </div>
    
    );
    }
export default ActiveAdmission;