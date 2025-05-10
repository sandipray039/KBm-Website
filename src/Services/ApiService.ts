import axios from "axios";

const baseUrl = "https://localhost:7212/api";

const getCountryList = async () => {
  try {
    const response = await axios.get(`${baseUrl}/Payment/GetCountryList`);
    return response.data;
  } catch (error) {
    console.error("error in fetching the countries list...", error);
    throw error;
  }
};

const getHistory = async () => {
  try {
    const response = await axios.get(`${baseUrl}/Member/get-history`);
    console.log("response from apisevuce",response.data);
    return response.data;
  } catch (error) {
    console.error("error in fetching the countries list...", error);
    throw error;
  }
};

const submitDonationForm = async (formData: any) => {
  try {
    const response = await axios.post(`${baseUrl}/Payment/donate`, formData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("error in submitting form..", error);
    throw error;
  }
};

const getDistrict = async () => {
  try {
    const response = await axios.get(`${baseUrl}/Location/get-districts`);
    return response.data;
  } catch (error) {
    console.error("error in fetching districts..", error);
  }
};
const getBlocks = async (districtId: number) => {
  try {
    const response = await axios.get(`${baseUrl}/Location/blocks`, {
      params: { districtId },
    });
    return response.data;
  } catch (error) {
    console.error("error in fetching blocks..", error);
  }
};

const getAssemblies = async (districtId: Number) => {
  try {
    const response = await axios.get(`${baseUrl}/Location/assemblies`, {
      params: { districtId },
    });
    return response.data;
  } catch (err) {
    console.error("error in fetching assemblies..", err);
  }
};

const submitJoinMemberForm = async (payload: FormData) => {
  try {
    const response = await axios.post(
      `${baseUrl}/Member/JoinMember`,
      payload
    );
    return response.data;
  } catch (error) {
    console.error("error in submitting form..", error);
    throw error;
  }
};

const ContactFormData = async (formdata: any) => {
  try {
    const response = await axios.post(`${baseUrl}/Member/Contact-us`, formdata);
    console.log(response);
    return response.data;
  } catch (e) {
    console.error("error ocuured ", e);
    throw e;
  }
};

const GetDonationDetails = async () => {
  try {
    const response = await axios.get(`${baseUrl}/Payment/Get-donation-details`);
    console.log(response);
    return response.data;
  } catch (e) {
    console.error("error ocuured ", e);
    throw e;
  }
};

const GetMemberDetails = async () => {
  try {
    const response = await axios.get(`${baseUrl}/Member/get-member-details`);
    console.log(response);
    return response.data;
  } catch (e) {
    console.error("error ocuured ", e);
    throw e;
  }
};

const login = async (data: any) => {
  try {
    const response = await axios.post(`${baseUrl}/Auth/login`, data);
    console.log(response);
    return response.data;
  } catch (e) {
    console.error("error ocuured ", e);
    throw e;
  }
};

const createEvent = async (eventData:any) => {
  try {
    const response = await axios.post(`${baseUrl}/Member/create-event`, eventData);
    console.log("Event created:", response);
    return response.data;
  } catch (error) {
    console.error("error in creating event..", error);
    throw error;
  }
};

const getAllEvents = async () => {
  try {
    const response = await axios.get(`${baseUrl}/Member/get-all-events`);
    console.log("All events:", response.data);
    return response.data;
  } catch (error) {
    console.error("error in fetching all events..", error);
    throw error;
  }
};

const getPastEvents = async () => {
  try {
    const response = await axios.get(`${baseUrl}/Member/get-past-events`);
    console.log("Past events:", response.data);
    return response.data;
  } catch (error) {
    console.error("error in fetching past events..", error);
    throw error;
  }
};

const getUpcomingEvents = async () => {
  try {
    const response = await axios.get(`${baseUrl}/Member/get-upcoming-events`);
    console.log("Upcoming events:", response.data);
    return response.data;
  } catch (error) {
    console.error("error in fetching upcoming events..", error);
    throw error;
  }
};

const getContactDetails=async ()=>{
  try{
    const response=await axios.get(`${baseUrl}/Member/Get-contact-Details`);
    console.log("contact details-->",response.data);
    return response.data;

  }
  catch(error){
    console.error("error in fetching upcoming events..", error);
    throw error;
  }
}

export {
  getCountryList,
  submitDonationForm,
  getBlocks,
  getDistrict,
  getAssemblies,
  submitJoinMemberForm,
  ContactFormData,
  GetDonationDetails,
  GetMemberDetails,
  login,
  getHistory,
  createEvent,
  getAllEvents,
  getPastEvents,
  getUpcomingEvents,
  getContactDetails
};
