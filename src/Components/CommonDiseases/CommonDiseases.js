import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const CommonDiseases = () => {
    const [options, setOptions] = useState({
        chart: {
            height: 350,
            type: "radialBar",
        },
        plotOptions: {
            stroke: {
                lineCap: "round",
            },
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: "22px",
                    },
                    value: {
                        fontSize: "16px",
                    },

                    total: {
                        show: true,
                        label: "Total",
                        formatter: function (w) {
                            console.log(w);
                            return 3;
                        },
                    },
                },
            },
        },
    });

    const [series, setSeries] = useState([71, 45, 32]);

    const [labels, setLabels] = useState(["Heart Attacks", "Covid", "Typhoid"]);
    return (
        <div className="rounded bg-white">
            <div className=''>
                <div id="chart" >
                    <ReactApexChart
                        options={options}
                        series={series}
                        type="radialBar"
                        height={350}
                    />
                </div>
            </div>
            <div>
                <p>
                    <span>
                        {" "}
                        <FontAwesomeIcon
                            className="text-blue-400 mx-2"
                            icon={faCircle}
                        />
                    </span>{" "}
                    Heart Attacks
                </p>
                <p>
                    <span>
                        <FontAwesomeIcon
                            
                            className="text-green-400 mx-2"
                            icon={faCircle}
                        />
                    </span>{" "}
                    Covid
                </p>
                <p>
                    <span>
                        <FontAwesomeIcon
                            className="text-yellow-400 mx-2"
                            icon={faCircle}
                        />
                    </span>{" "}
                    Typhoid{" "}
                </p>
            </div>
        </div>
    );
};

export default CommonDiseases;
