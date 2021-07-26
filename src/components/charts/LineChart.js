import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart() {

    const data ={
        labels :['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets : [
            {
                label: 'Sales for 2020 (M)',
                data : [5, 10, 4, 6, 3]
            },
            {
                label: 'Sales for 2019 (M)',
                data : [1, 2, 7, 5, 3]
            }
        ]
    };


    return (
         <Line data={data} options={{ title : { display : true, text : 'Line Chart'} }} />
    )
}

export default LineChart
