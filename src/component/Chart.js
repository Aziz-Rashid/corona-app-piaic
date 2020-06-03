import React, { useState, useEffect } from 'react'
import { dailydata } from './Api'

import { Line} from 'react-chartjs-2'
export const Chart = ({data:{confirmed,recovered,deaths},data,country}) => {
    
    
    const [datas, setdatas] = useState([])
    useEffect(() => {
        const fetch = async () => {
            setdatas(await dailydata())

        }
        fetch()
    },[])
    
    const lineChart = (
        setdatas.length ? (
            <Line data={{
                labels: datas.map(({ date }) => date),
                datasets: [{
                    data: datas.map(({ confirmed }) => confirmed),
                    label: 'infected ',
                    borderColor: 'blue',
                    fill: true
                }, {
                    data: datas.map(({ deaths }) => deaths),
                    label: 'deaths ',
                    borderColor: 'red',
                    fill: true
                }]
            }} />) : null
    )
   
    return (
        <div>
            {lineChart}
        </div>
    )
}
