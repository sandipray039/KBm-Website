import axios from 'axios';


const baseUrl="https://localhost:7212/api";

const getCountryList=async()=>{

    try{
        const response=await axios.get(`${baseUrl}/Payment/GetCountryList`);
        return response.data;
    }
    catch(error){
        console.error("error in fetching the countries list...",error);
        throw error;
    }
};

const submitDonationForm=async(formData:any)=>{

    try{
        const response=await axios.post(`${baseUrl}/Payment/donate`,formData);
        console.log(response);
        return response.data;

    }
    catch(error){
        console.error("error in submitting form..",error);
        throw error;
    }
};

const getDistrict=async()=>{

    try{
        const response=await axios.get(`${baseUrl}/Location/get-districts`);
        return response.data;
    }
    catch(error){
        console.error("error in fetching districts..",error);
    }

};
const getBlocks=async(districtId:number)=>{
try{
    const response=await axios.get(`${baseUrl}/Location/blocks`,{
        params:{districtId},
    });
    return response.data;
}
catch(error){
    console.error("error in fetching blocks..",error);
}

};

const getAssemblies=async(districtId:Number)=>{
    try{

        const response=await axios.get(`${baseUrl}/Location/assemblies`,{
            params:{districtId},
        })
        return response.data;
    }
    catch(err){
        console.error("error in fetching assemblies..",err);
    }
};

const submitJoinMemberForm=async(formData:any)=>{
    try{
        const response=await axios.post(`${baseUrl}/Member/JoinMember`,formData);
        console.log(response);
        return response.data;

    }
    catch(error){
        console.error("error in submitting form..",error);
        throw error;
    }


};

const ContactFormData=async(formdata:any)=>{
try{
    const response=await axios.post(`${baseUrl}/Member/Contact-us`,formdata);
    console.log(response);
    return response.data;

}
catch(e){
    console.error("error ocuured ",e);
    throw e;

}
}

const GetDonationDetails=async()=>{
    try{
        const response=await axios.get(`${baseUrl}/Payment/Get-donation-details`);
        console.log(response);
        return response.data;
    }
    catch(e){
        console.error("error ocuured ",e);
        throw e;
    }
}


const GetMemberDetails=async()=>{
    try{
        const response=await axios.get(`${baseUrl}/Member/get-member-details`);
        console.log(response);
        return response.data;
    }
    catch(e){
        console.error("error ocuured ",e);
        throw e;
    }
}

const login=async(data:any)=>{
    try{
        const response=await axios.post(`${baseUrl}/Auth/login`,data);
        console.log(response);
        return response.data;
    }
    catch(e){
        console.error("error ocuured ",e);
        throw e;
    }
}




export {getCountryList,submitDonationForm,getBlocks,getDistrict,getAssemblies,submitJoinMemberForm,ContactFormData,GetDonationDetails,GetMemberDetails,login};
