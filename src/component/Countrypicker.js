import React,{useState,useEffect} from 'react'
import {country} from './Api'
import './countrypicker.css'
export const Countrypicker = ({change}) =>{
    const [countryname,setcountryname] = useState([])
    useEffect(() => {
        const countries = async () =>{
            setcountryname(await country())
        }
        countries()
    },[setcountryname]);
   return (
       <select className="e" onChange={(e) => change(e.target.value)}>
           <option className="pick">country picker</option>
           {countryname.map((name,i) =>(
               <option value={name} key={i}>{name}</option>
           ))}
       </select>
   )
}