import axios from 'axios'
const url = "https://covid19.mathdro.id/api"

export const fetchdata = async () =>{
    const {data:{confirmed,recovered,deaths}} = await axios.get(url)
    const modifyngdata = {
        confirmed,
        recovered,deaths
    }
    return modifyngdata
}