import React from 'react'
import Countup from 'react-countup'
import './head.css'
import Image from './a.png'

export const Head = ({ data: { confirmed, recovered, deaths, lastUpdate}, country }) => {
    if (!confirmed) {
        return "Loading..."
    }
    return (
        <div className="header">
            <div className="dis">
                <h1 className="h1">Covid-19 tracker App!</h1>
                <img className="j" src={Image} alt="pics" />
               
            </div>
           
            <div className="body">
            
                <h1 className="q">Infected People</h1>
                <h4>Confirmed people who infected from covid-19 in {country} <br /><Countup className="a" start={0} end={confirmed.value} duration={3.5} separator=',' /> </h4><hr /><br />
                <h4>last update of active cases
             <br /> <span className="a">{new Date(lastUpdate).toDateString()}</span></h4><hr />
            </div>
            <div>
            <div className="body">
                <h1 className="q">recovered People</h1>
                <h4>recovered people who infected from covid-19 in {country} <br /><Countup className="a" start={0} end={recovered.value} duration={3.5} separator=',' /></h4><hr /><br />
                <h4>last update of recovered cases
             <br /> <span className="a">{new Date(lastUpdate).toDateString()}</span></h4><hr />
            </div>
            <div>
            <div className="body">
                <h1 className="q">Deaths Peoples</h1>
                <h4>Deaths peoples who had infected from covid-19 in {country} <br /><Countup className="a" start={0} end={deaths.value} duration={3.5} separator=',' /></h4><hr /><br />
                <h4>last update of Deaths cases
             <br /> <span className="a">{new Date(lastUpdate).toDateString()}</span></h4><hr />
             
            </div>
            </div>
            </div>

        </div>
    )
}