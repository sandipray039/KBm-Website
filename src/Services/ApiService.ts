import axios from 'axios';


const baseUrl="https://localhost:7298/api";

const getCountryList=async()=>{

    try{
        const response=await axios.get(`${baseUrl}/master/GetCountryList`);
        return response.data;
    }
    catch(error){
        console.error("error in fetching the countries list...",error);
        throw error;
    }


};

export {getCountryList};