import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./AdminLineChart.scss"
const data = [
  {
    name: 'Dek',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Yan',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Fev',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Mar',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Apr',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'May',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Iyun',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const AdminLineChart = () => {
    return (
        <div className="admin_line_chart_container">
            <div className="line_chart_info">
                <div>
                    <h3>Xaridorlar statistikasi</h3>
                    <span>Noyabr - Iyul</span>
                </div>
                <div className="line_chart_number_info">
                    <div>
                        <p>oldingi</p>
                        <span>475 273</span>
                    </div>
                    <div>
                        <p>so'ngi 6 oy</p>
                        <span>782 396</span>
                    </div>
                </div>
            </div>
            <div className="admin_line_chart">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
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
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        {/* <Legend /> */}
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
      );
};

export default AdminLineChart;