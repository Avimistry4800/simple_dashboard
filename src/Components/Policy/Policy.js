import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale, faFemale, faCup } from '@fortawesome/free-solid-svg-icons'
import {Bar, Doughnut, Line} from 'react-chartjs-2'
 


const Policy = () => {
    return (
        <>
            <div>
                <h3 className="text-bold text-2xl">Policies</h3>
            </div>
            <div className="flex flex-wrap flex-row">
                
                    <div className='flex items-center px-2 mx-2'>
                        <div>
                            <div>
                                <h4 className="text-gray-500">Policy Plan 1</h4>
                            </div>
                            <div>
                            <h3><span className="text-green-400"> <FontAwesomeIcon icon={faMale} />  40  </span> <span className="text-blue-500"><FontAwesomeIcon icon={faFemale}/> 20</span></h3>
                            </div>
                        </div>
                        <div className ="h-16 w-16 ml-6">
                       <Doughnut data={{
                            labels: [
                                
                              ],
                              datasets: [{
                                label: 'Policy 1',
                                data: [20, 40],
                                backgroundColor: [
                                  'rgb(52, 163, 236)',
                                  'rgb(9, 206, 201)',
                                ],
                                hoverOffset: 4
                              }]}}
                           >
                       </Doughnut>
                        </div>
                    </div>
                    <div className='flex items-center px-2 mx-2'>
                        <div>
                            <div>
                                <h4 className="text-gray-500">Policy Plan 2</h4>
                            </div>
                            <div>
                            <h3><span className="text-orange-300"> <FontAwesomeIcon icon={faMale} />  40  </span> <span className="text-orange-500"><FontAwesomeIcon icon={faFemale}/> 20</span></h3>
                            </div>
                        </div>
                        <div className ="h-16 w-16 ml-6">
                       <Doughnut data={{
                            labels: [
                                
                              ],
                              datasets: [{
                                label: 'Policy 1',
                                data: [23, 20],
                                backgroundColor: [
                                    'rgb(255,191,81)',
                                  'rgb(255, 115, 12)',
                                  
                                ],
                                hoverOffset: 4
                              }]}}
                           >
                       </Doughnut>
                        </div>
                    </div>
                    <div className='flex items-center px-2 mx-2'>
                        <div>
                            <div>
                                <h4 className="text-gray-500">Policy Plan 3</h4>
                            </div>
                            <div>
                            <h3><span className="text-green-400"> <FontAwesomeIcon icon={faMale} />  18  </span> <span className="text-blue-500"><FontAwesomeIcon icon={faFemale}/> 10</span></h3>
                            </div>
                        </div>
                        <div className ="h-16 w-16 ml-6">
                       <Doughnut data={{
                            labels: [
                                
                              ],
                              datasets: [{
                                label: 'Policy 3',
                                data: [18, 10],
                                backgroundColor: [
                                  'rgb(9, 206, 201)',
                                  'rgb(52, 163, 236)',
                                  
                                ],
                                hoverOffset: 4
                              }]}}
                           >
                       </Doughnut>
                        </div>
                    </div>
                    <div className='flex items-center px-2 mx-2'>
                        <div>
                            <div>
                                <h4 className="text-gray-500">Policy Plan 4</h4>
                            </div>
                            <div>
                            <h3><span className="text-purple-600"> <FontAwesomeIcon icon={faMale} />  10  </span> <span className="text-purple-300"><FontAwesomeIcon icon={faFemale}/> 5</span></h3>
                            </div>
                        </div>
                        <div className ="h-16 w-16 ml-6">
                       <Doughnut data={{
                            labels: [
                                
                              ],
                              datasets: [{
                                label: 'Policy 4',
                                data: [10, 5],
                                backgroundColor: [
                                  '#8b45ff',
                                  '#e19bff',
                                ],
                                hoverOffset: 4
                              }]}}
                           >
                       </Doughnut>
                        </div>
                    </div>

            </div>
            <div>
                <h4> Graph </h4>
                <Line data={{ 
                labels:["Jan","Feb","Mar","Apr","May","June", "July","Aug","Sep","Oct", "Nov","Dec"],
                datasets: [{
                  label: 'Family floater Plan',
                  data: [.8 ,1.6 ,.9,2,1.1,3.9,.4, 3.1, 2.1, 4.1, 2.9, 4],
                  backgroundColor: [
                    '#ffffff',           
                  ],
                  borderColor: ['#c372f8'],
                  borderWidth: 6,
                  fill: false,
                  pointRadius: 0,
                  lineTension: .6,
                  pointHitRadius: 1,
                  borderCapStyle: 'butt',
                  borderDashOffset: 0.5,
                  borderJoinStyle: 'miter',
                  
                    
                },
                {
                  label: 'Joint Health insurance',
                  data: [3.07,3.7,3.4,5,1.2,4.9,1.3,3,1.2,3.2,1.1,2.7],
                  backgroundColor: [
                    '#ffffff',           
                  ],
                  borderColor: ['#ffab5c'],
                  borderWidth: 6,
                  fill: false,
                  pointRadius: 0,
                  lineTension: .6,

                },
              
              ] ,
              options: {
                responsive: true,
                maintainAspectRatio: true,
                elements: {
                  line: {
                           
                          shadow: {
                            enabled: true,
                            color: '#0d0a0e',
                            blur: 15,
                            x: 1,
                            y: 1,

                          },

                          

                      }
                },
              },
                
              }}/> 
                   

            </div>
            
        </>
    );
};

export default Policy;