import React from 'react';
import { Area,AreaChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import "./NewCustomersChart.scss"
const data = [
  {
    name: '1',
    uv: 400,
  },
  {
    name: '1',
    uv: 300,
  },
  {
    name: '3',
    uv: 400,
  },
  {
    name: '4',
    uv: 570,
  },
  {
    name: '5',
    uv: 480,
  },
  {
    name: '6',
    uv: 330,
  },
  {
    name: '7',
    uv: 590,
  },
  {
    name: '8',
    uv: 570,
  },
  {
    name: '9',
    uv: 490,
  },
  {
    name: '10',
    uv: 580,
  },  
];
const NewCustomersChart = () => {
    return (
        <div className="new_customer_chart_container">
            <div className="info_container">
                <div>
                    <h3>yangi xaridorlar</h3>
                    <span>1 oylik</span>
                </div>
                <div>
                        <span className="count">+95</span>
                </div>
            </div>
            <div className="new_customer_chart_diagram">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        }}
                    >
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#82ca9d" fill="5ab59b" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
      );
};

export default NewCustomersChart;