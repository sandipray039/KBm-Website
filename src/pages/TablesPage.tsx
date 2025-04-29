import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { getContactDetails, GetDonationDetails, GetMemberDetails } from "../Services/ApiService";
import { Link } from "react-router-dom";
import Footer from "../Layouts/Footer";
import EventForm from "./EventForm";
import * as XLSX from 'xlsx';
import {saveAs} from "file-saver"


// ---------- Interfaces ----------
interface PaymentData {
  id: number;
  amount: number;
  countryName: string;
  name: string;
  mobileNo: string;
  email?: string;
  address?: string;
  panNo?: string;
  paymentStatus: string;
  createdDate: string;
  createdBy: string;
  modifiedBy: string;
  modifiedDate?: string;
}

interface PersonalData {
  name: string;
  age: number;
  address: string;
  district: string;
  block: string;
  assembly: string;
  jobLocation: string;
  phone: string;
  qualification: string;
}
interface ContactData{
  name: string;
  email: string;
  subject: string;
  phoneNo: string;
  message: string;
}


const TablesPage: React.FC = () => {
  const [activeTable, setActiveTable] = useState<"payment" | "personal"|"contact" | null>(null);
  const [activeComponent, setActiveComponent] = useState<"table" | "form" | null>(null); 
  const [paymentData, setPaymentData] = useState<PaymentData[]>([]);
  const [personalData, setPersonalData] = useState<PersonalData[]>([]);
  const [contactData, setcontactData] = useState<ContactData[]>([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState<string>('Member Details');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (activeTable === "payment") {
          const res = await GetDonationDetails();
          setPaymentData(res.data);
        } else if (activeTable === "personal") {
          const res = await GetMemberDetails();
          setPersonalData(res.data);
        }
        else if(activeTable==="contact"){
          const res=await getContactDetails();
          setcontactData(res.data);
          console.log("api response....",contactData,activeTable);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
        setCurrentPage(1); 
      }
    };

    if (activeTable) {
      fetchData();
    }
  }, [activeTable]);

  const matchesSearch = (obj: any) =>
    Object.values(obj).some((val) =>
      String(val).toLowerCase().includes(searchText.toLowerCase())
    );

  const filteredPayment = paymentData.filter(matchesSearch);
  const filteredPersonal = personalData.filter(matchesSearch);
  const filteredContacts = contactData.filter(matchesSearch);

  const paginatedPaymentData = filteredPayment.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const paginatedPersonalData = filteredPersonal.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );
  const paginatedContactData = filteredContacts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const handleRowsPerPageChange = (newPerPage: number) => {
    setPerPage(newPerPage);
    setCurrentPage(1);
  };

  const paymentColumns = [
    {
      name: "Sl. No.",
      cell: (_: PaymentData, index: number) =>
        (currentPage - 1) * perPage + index + 1,
      width: "80px",
      sortable: false,
    },
    { name: "Name", selector: (row: PaymentData) => row.name, sortable: true },
    { name: "Amount", selector: (row: PaymentData) => row.amount, sortable: true },
    { name: "Mobile", selector: (row: PaymentData) => row.mobileNo, sortable: true },
    { name: "Country", selector: (row: PaymentData) => row.countryName, sortable: true },
    { name: "Email", selector: (row: PaymentData) => row.email || "-", sortable: true },
    { name: "Address", selector: (row: PaymentData) => row.address || "-", sortable: true },
    { name: "PAN No", selector: (row: PaymentData) => row.panNo || "-", sortable: true },
    { name: "Status", selector: (row: PaymentData) => row.paymentStatus, sortable: true },
    { name: "Created By", selector: (row: PaymentData) => row.createdBy, sortable: true },
    {
      name: "Created Date",
      selector: (row: PaymentData) => new Date(row.createdDate).toLocaleString(),
      sortable: true,
    },
  ];

  const ContactColumns=[
{
  name:"Sl no.",
  cell:(_:ContactData,index:number)=>
  (currentPage-1)*perPage+index+1,
  width:"80px",
  sortable:false,
},
{
  name:"Name",selector:(row:ContactData)=>row.name,sortable:true},
{
  name:"Email",selector:(row:ContactData)=>row.email,sortable:true
},
{
name:"Subject",selector:(row:ContactData)=>row.subject,sortable:true
},
{
name:"PhoneNo",selector:(row:ContactData)=>row.phoneNo,sortable:true
},{
  name:"Message",selector:(row:ContactData)=>row.message,sortable:true
}

  ]

  const personalColumns = [
    {
      name: "Sl. No.",
      cell: (_: PersonalData, index: number) =>
        (currentPage - 1) * perPage + index + 1,
      width: "80px",
      sortable: false,
    },
    { name: "Name", selector: (row: PersonalData) => row.name, sortable: true },
    { name: "Age", selector: (row: PersonalData) => row.age, sortable: true },
    { name: "Address", selector: (row: PersonalData) => row.address, sortable: true },
    { name: "District", selector: (row: PersonalData) => row.district, sortable: true },
    { name: "Block", selector: (row: PersonalData) => row.block, sortable: true },
    { name: "Assembly", selector: (row: PersonalData) => row.assembly, sortable: true },
    { name: "Job Location", selector: (row: PersonalData) => row.jobLocation, sortable: true },
    { name: "Highest Qualification", selector: (row: PersonalData) => row.qualification, sortable: true },
    { name: "Phone", selector: (row: PersonalData) => row.phone, sortable: true },
  ];

  const handleDownloadExcel = () => {
    let exportData: any[] = [];
  
    if (activeTable === "payment") {
      exportData = paymentData.map((item, index) => ({
        "Sl. No.": index + 1,
        Name: item.name,
        Amount: item.amount,
        Mobile: item.mobileNo,
        Country: item.countryName,
        Email: item.email || "-",
        Address: item.address || "-",
        "PAN No": item.panNo || "-",
        Status: item.paymentStatus,
        "Created By": item.createdBy,
        "Created Date": new Date(item.createdDate).toLocaleString(),
      }));
    } else if (activeTable === "personal") {
      exportData = personalData.map((item, index) => ({
        "Sl. No.": index + 1,
        Name: item.name,
        Age: item.age,
        Address: item.address,
        District: item.district,
        Block: item.block,
        Assembly: item.assembly,
        "Job Location": item.jobLocation,
        "Highest Qualification": item.qualification,
        Phone: item.phone,
      }));
    }
    else if(activeTable==="contact"){
      exportData=contactData.map((item,index)=>({
        "Sl No":index+1,
        Name:item.name,
        Email:item.email,
        PhoneNo:item.phoneNo,
        Subject:item.subject,
        Message:item.message
      }

      ));
    }
  
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, `${name.replace(/\s+/g, "_")}.xlsx`);
  };
  

  return (
    <div>
      <div className="header-nav">
        <div className="header-nav-wrapper" style={{ backgroundColor: "#00A4EF" }}>
          <div className="container d-flex justify-content-between">
            <nav id="menuzord-right" className="menuzord default no-bg" style={{ backgroundColor: "#14468C", display: 'flex', justifyContent: 'space-between' }}>
          <div>
          <Link to="/home">
                <div className=" pull-left flip">
                  <div style={{ display: "flex", gap: "10px" }}>
                  <img
                      src="/images/kbm-slider/logo.png.png"
                      alt=""
                      style={{
                        height: "85px",
                        padding: "5px 0px",
                        marginTop: "5px",
                      }}
                    />
                    <p style={{ color: 'white',marginTop:'25px',fontSize:'30px',fontWeight:'600' }}>खतियानी बुद्धिजीवी मंच</p>
                  </div>
                </div>
              </Link>
          </div>

            <div>
            <div style={{  display: "flex", alignItems: 'center',justifyContent:'space-around',marginTop:'25px', gap: '1vw' }}>
                <button className={`btn ${activeTable === "payment" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => { setActiveTable("payment"); setSearchText(""); setActiveComponent("table"); setName("Donation Details") }}>
                  Donation Details
                </button>
                <button className={`btn ${activeTable === "contact" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => { setActiveTable("contact"); setSearchText(""); setActiveComponent("table"); setName("Contact Details") }}>
                  Contact Details
                </button>
                <button className={`btn ${activeTable === "personal" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => { setActiveTable("personal"); setSearchText(""); setActiveComponent("table"); setName("Member Details") }}>
                  Member Details
                </button>
                {/* <button className="btn btn-success" style={{backgroundColor:'forestgreen'}} onClick={() => { setActiveComponent("form") }}>
                  Add an Event
                </button> */}
              </div>
            </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="container-fluid px-4 py-4" style={{ minHeight: '30vh' }}>
        <div>
          {name === 'Donation Details' && activeComponent!=='form' && <h3 className=" text-center" style={{ fontSize: '2.5vw' }}>Donation Details</h3>}
          {name === 'Member Details' && activeComponent!=='form' && <h3 className=" text-center" style={{ fontSize: '2.5vw' }}>Member Details</h3>}
          {name === 'Contact Details' && activeComponent!=='form' && <h3 className=" text-center" style={{ fontSize: '2.5vw' }}>Contact Details</h3>}
        </div>

        {activeComponent === "table" && (activeTable==="contact" || activeTable==="personal" || activeTable==="payment" ) &&(paymentData.length>0 || personalData.length>0 ||contactData.length>0) && (
  <div style={{ display: "flex", justifyContent: "flex-end",alignItems:'flex-end', gap: "1vw", marginBottom: "1vw" }}>
    <div className="d-flex align-items-center" style={{ gap: "0.5vw" }}>
      <label className="me-2 col-form-label">Search:</label>
      <input
        type="text"
        className="form-control"
        placeholder="Search across all fields..."
        style={{ width: "250px" }}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
    <button style={{marginRight:'60px',width:'165px',backgroundColor:'forestgreen',padding:'8px 12px',borderRadius:'5px',color:'white'}} onClick={handleDownloadExcel}>
      Export Details
    </button>
  </div>
)}



        <div className="table-responsive">
          {activeComponent === "table" && activeTable === "payment" && (
            <DataTable
            // title={<h3 style={{ textAlign: 'center', backgroundColor: 'forestgreen', width: 'fit-content', color: 'white', padding: '10px 20px', borderRadius: '10px' }}>Donation History</h3>}
             columns={paymentColumns}
             data={paginatedPaymentData}
             progressPending={loading}
             pagination
             paginationServer
             paginationTotalRows={filteredPayment.length}
             paginationPerPage={perPage}
             onChangePage={(page) => setCurrentPage(page)}
             onChangeRowsPerPage={handleRowsPerPageChange}
             striped
             highlightOnHover
             customStyles={{
               headCells: {
                 style: {
                   backgroundColor: "#007bff",
                   color: "#fff",
                   fontWeight: "bold",
                   fontSize: "14px",
                   borderRight: "1px solid #ccc",
                 },
               },
               cells: {
                 style: {
                   borderRight: "1px solid #ccc",
                 },
               },
               rows: {
                 style: {
                   borderBottom: "1px solid #ccc",
                 },
               },
             }}
           />
          )}
           {activeComponent === "table" && activeTable === "contact" && (
            <DataTable
            // title={<h3 style={{ textAlign: 'center', backgroundColor: 'forestgreen', width: 'fit-content', color: 'white', padding: '10px 20px', borderRadius: '10px' }}>Donation History</h3>}
             columns={ContactColumns}
             data={paginatedContactData}
             progressPending={loading}
             pagination
             paginationServer
             paginationTotalRows={filteredContacts.length}
             paginationPerPage={perPage}
             onChangePage={(page) => setCurrentPage(page)}
             onChangeRowsPerPage={handleRowsPerPageChange}
             striped
             highlightOnHover
             customStyles={{
               headCells: {
                 style: {
                   backgroundColor: "#007bff",
                   color: "#fff",
                   fontWeight: "bold",
                   fontSize: "14px",
                   borderRight: "1px solid #ccc",
                 },
               },
               cells: {
                 style: {
                   borderRight: "1px solid #ccc",
                 },
               },
               rows: {
                 style: {
                   borderBottom: "1px solid #ccc",
                 },
               },
             }}
           />
          )}

          {activeComponent === "table" && activeTable === "personal" && (
            <DataTable

            columns={personalColumns}
            data={paginatedPersonalData}
            progressPending={loading}
            pagination
            paginationServer
            paginationTotalRows={filteredPersonal.length}
            paginationPerPage={perPage}
            onChangePage={(page) => setCurrentPage(page)}
            onChangeRowsPerPage={handleRowsPerPageChange}
            striped
            highlightOnHover
            customStyles={{
              headCells: {
                style: {
                  backgroundColor: "#007bff",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "14px",
                  borderRight: "1px solid #ccc",
                },
              },
              cells: {
                style: {
                  borderRight: "1px solid #ccc",
                },
              },
              rows: {
                style: {
                  borderBottom: "1px solid #ccc",
                },
              },
            }}
          />
          )}
        </div>

        {/* {activeComponent === "form" && <EventForm />}  */}

        {!activeTable && activeComponent===null && (
          <div className="text-muted mt-4 text-center">
            <h3 style={{ marginTop: '10vw', color: 'red' }}>Please select anything from navbar to show contents.</h3>
          </div>

          
        )}
      </div>

      <Footer />
    </div>
  );
};

export default TablesPage;
