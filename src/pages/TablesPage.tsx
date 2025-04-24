import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { GetDonationDetails, GetMemberDetails } from "../Services/ApiService";
import { Link } from "react-router-dom";
import Footer from "../Layouts/Footer";

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

const TablesPage: React.FC = () => {
  const [activeTable, setActiveTable] = useState<"payment" | "personal" | null>(null);
  const [paymentData, setPaymentData] = useState<PaymentData[]>([]);
  const [personalData, setPersonalData] = useState<PersonalData[]>([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [name,setName]=useState<string>('Member Details');

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
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
        setCurrentPage(1); // Reset to page 1 when table changes
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

  const paginatedPaymentData = filteredPayment.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const paginatedPersonalData = filteredPersonal.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const handleRowsPerPageChange = (newPerPage: number, ) => {
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

  return (
    <div>
      <div className="header-nav">
        <div className="header-nav-wrapper" style={{ backgroundColor: "#00A4EF" }}>
          <div className="container d-flex">
            <nav id="menuzord-right" className="menuzord default no-bg" style={{ backgroundColor: "#14468C", display: 'flex', justifyContent: 'space-between' }}>
              <Link to="/home">
                <div className="menuzord-brand pull-left flip">
                  <div style={{ display: "flex", gap: "10px" }}>
                    <img src="/images/kbm-slider/logo.png.png" alt="" style={{ height: "60px", width: '60px' }} />
                    <p style={{ color: 'white' }}>खतियानी बुद्धिजीवी मंच</p>
                  </div>
                </div>
              </Link>

              <div style={{ width: "35%", display: "flex", alignItems: 'center', gap: '2vw' }}>
                <button className={`btn ${activeTable === "payment" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => { setActiveTable("payment"); setSearchText(""); setName("Donation Details") }}>
                  Donation Details
                </button>
                <button className={`btn ${activeTable === "personal" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => { setActiveTable("personal"); setSearchText("");setName("Member Details") }}>
                 Member Details
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="container-fluid px-4 py-4" style={{ minHeight: '30vh' }}>
   <div>
   {name==='Donation Details' &&
        <h3 className=" text-center" style={{fontSize:'2.5vw'}}>Donation Details</h3>
       }
         {name==='Member Details' &&
        <h3 className=" text-center" style={{fontSize:'2.5vw'}}>Member Details</h3>
       }
   </div>

        {activeTable && (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div className="d-flex align-items-center">
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
          </div>
        )}

        <div className="table-responsive">
          {activeTable === "payment" && (
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

          {activeTable === "personal" && (
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

        {!activeTable && (
          <div className="text-muted mt-4 text-center">
            <h3 style={{ marginTop: '10vw', color: 'red' }}>Please select a table to view its contents.</h3>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TablesPage;
