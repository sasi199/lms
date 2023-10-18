import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import DataTable from "react-data-table-component";
import { IconButton, Menu, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { AiOutlineSearch } from 'react-icons/ai';
import download from "../../../asset/download.png"
import upload from "../../../asset/upload.png"

function Students({ students }) {
  const [anchorEl, setAnchorEl] = useState(null); // Define anchorEl state
  const [openMenu, setOpenMenu] = useState(null); // Define openMenu state
  const [searchText, setSearchText] = useState(""); // State to store the search text

  const columns = [
    {
      name: "S.No",
      selector: (row, index) => index + 1,
      sortable: false,
      width:'70px'
    },
    {
      name: "Student ID",
      selector: "studentId",
      sortable: true,
    },
    {
      name: "Student Name",
      selector: "studentName",
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <Switch
          checked={row.status}
          onChange={() => handleToggleStatus(row.id)}
          color="primary"
        />
      ),
      sortable: false,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <IconButton
            size="small"
            aria-label="actions"
            onClick={(event) => handleMenuOpen(event, row.id)} // Pass the event and branch
          >
            <EditIcon />
          </IconButton>
          <Menu
            id={`actions-menu-${row.id}`}
            anchorEl={anchorEl}
            open={openMenu === row.id}
            onClose={() => handleMenuClose(row.id)}
          >
            <MenuItem onClick={() => handleViewClick(row.id)}>View</MenuItem>
            <MenuItem onClick={() => handleEditClick(row.id)}>Edit</MenuItem>
            <MenuItem onClick={() => handleDeleteClick(row.id)}>Delete</MenuItem>
          </Menu>
        </div>
      ),
      sortable: false,
    },
  ];

  const data = [
    {
      id: 1,
      studentId:"stud1",
      studentName: "suganya",
      admissionNo: "01",
      courseName: "PG FSD",
      courseId: "WhyTap001",
      batchNumber: "1234567890",
      emailid: "abc@gmail.com",
      mobileNumber: "123456678",
      Status: "Active",
    },
    {
        id: 1,
        studentId:"stud2",
        studentName: "Krishna",
        admissionNo: "02",
        courseName: "PG FSD",
        courseId: "WhyTap001",
        batchNumber: "1234567890",
        emailid: "abc@gmail.com",
        mobileNumber: "123456678",
        Status: "Active",
      },
      {
        id: 1,
        studentId:"stud3",
        studentName: "Akash",
        admissionNo: "03",
        courseName: "PG FSD",
        courseId: "WhyTap001",
        batchNumber: "1234567890",
        emailid: "abc@gmail.com",
        mobileNumber: "123456678",
        Status: "Active",
      },
      {
        id: 1,
        studentId:"stud4",
        studentName: "Vignesh",
        admissionNo: "05",
        courseName: "PG FSD",
        courseId: "WhyTap001",
        batchNumber: "1234567890",
        emailid: "abc@gmail.com",
        mobileNumber: "123456678",
        Status: "Active",
      },
      {
        id: 1,
        studentId:"stud4",
        studentName: "Sasi",
        admissionNo: "06",
        courseName: "PG FSD",
        courseId: "WhyTap001",
        batchNumber: "1234567890",
        emailid: "abc@gmail.com",
        mobileNumber: "123456678",
        Status: "Active",
      },
      {
        id: 1,
        studentId:"stud5",
        studentName: "Ramya",
        admissionNo: "07",
        courseName: "PG FSD",
        courseId: "WhyTap001",
        batchNumber: "1234567890",
        emailid: "abc@gmail.com",
        mobileNumber: "123456678",
        Status: "Active",
      },
      {
        id: 1,
        studentId:"stud5",
        studentName: "Ramya",
        admissionNo: "07",
        courseName: "PG FSD",
        courseId: "WhyTap001",
        batchNumber: "1234567890",
        emailid: "abc@gmail.com",
        mobileNumber: "123456678",
        Status: "Active",
      },
      {
        id: 1,
        studentId:"stud5",
        studentName: "Ramya",
        admissionNo: "07",
        courseName: "PG FSD",
        courseId: "WhyTap001",
        batchNumber: "1234567890",
        emailid: "abc@gmail.com",
        mobileNumber: "123456678",
        Status: "Active",
      },
      {
        id: 1,
        studentId:"stud5",
        studentName: "Ramya",
        admissionNo: "07",
        courseName: "PG FSD",
        courseId: "WhyTap001",
        batchNumber: "1234567890",
        emailid: "abc@gmail.com",
        mobileNumber: "123456678",
        Status: "Active",
      },
      {
        id: 1,
        studentId:"stud5",
        studentName: "Ramya",
        admissionNo: "07",
        courseName: "PG FSD",
        courseId: "WhyTap001",
        batchNumber: "1234567890",
        emailid: "abc@gmail.com",
        mobileNumber: "123456678",
        Status: "Active",
      },
      {
        id: 1,
        studentId:"stud5",
        studentName: "Ramya",
        admissionNo: "07",
        courseName: "PG FSD",
        courseId: "WhyTap001",
        batchNumber: "1234567890",
        emailid: "abc@gmail.com",
        mobileNumber: "123456678",
        Status: "Active",
      },
  ];

  const handleToggleStatus = (branchId) => {
    // Implement your toggle logic here
  };

  const handleMenuOpen = (event, branchId) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(branchId);
  };

  const handleMenuClose = (branchId) => {
    // Implement your menu close logic here
  };

  const handleViewClick = (branchId) => {
    // Implement your view action here
  };

  const handleEditClick = (branchId) => {
    // Implement your edit action here
  };

  const handleDeleteClick = (branchId) => {
    // Implement your delete action here
  };

  const customStyles = {
    headRow: {
      style: {
        border: "none",
        outerWidth:"600px"
      },
    },
    headCells: {
      style: {
        fontSize: "14px",
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        backgroundColor: "#105D50",
        color: "#F9FAFB",
      
      },
    },
    rows: {
      highlightOnHoverStyle: {
        backgroundColor: "rgb(230, 244, 244)",
        borderBottomColor: "#FFFFFF",
        outline: "1px solid #FFFFFF",
      },
    },
    pagination: {
      style: {
        border: "none",
      },
    },
    cells: {
      style: {
        // width:"150px",
        fontWeight: "400",
        fontSize: "14px",
        color: "#364353",
        borderRight: '1px solid #ddd',
      },
    }
  };

  // Function to filter data based on search text
  const filteredData = data.filter((item) => {
    return (
      item.studentName.toLowerCase().includes(searchText.toLowerCase()) ||
      item.studentId.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div className="W-full h-auto flex flex-col items-center gap-3 pt-5  px-1 drop-shadow bg-white  border shadow-md">
      <div className="w-full flex flex-row justify-end items-center gap-10 px-4">
       <div className="relative">
                <input
                  placeholder="Search"
                  type="text"
                  required
                  className="p-3 w-[250px] text-[14px] bg-gray-100 text-gray-700
          focus:border-primary focus:bg-white focus:text-gray-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none 
        rounded-md "
                  onChange={(event) => setSearchText(event.target.value)}
                  value={searchText}
                />
                <AiOutlineSearch className="absolute top-3 right-3 text-xl text-gray-400 focus:text-secondary" />
              </div>

              <div className="flex flex-row items-center gap-6">
              <div class="relative group flex items-center">
                <span class="w-10 h-10 group-hover:bg-gray-200 rounded-full duration-500 cursor-pointer">
                  {" "}
                  <img alt="upload" src={upload} className="w-5 h-5 mx-auto mt-2" />
                </span>
                <div class="tooltip text-[11.5px] hidden group-hover:block bg-gray-600 text-white text-sm px-3 py-0.5 rounded shadow-lg absolute top-[42px] left-4 z-10 transform -translate-x-1/2">
                  Upload
                </div>
              </div>
              <div class="relative group flex items-center">
                <span class="w-10 h-10 group-hover:bg-gray-200 rounded-full duration-500 cursor-pointer">
                  {" "}
                  <img alt="download" src={download} className="w-5 h-5 mx-auto mt-2" />
                </span>
                <div class="tooltip text-[11.5px] hidden group-hover:block bg-gray-600 text-white text-sm px-3 py-0.5 rounded shadow-lg absolute top-[42px] left-4 z-10 transform -translate-x-1/2">
                  Download
                </div>
              </div>
            </div>
      </div>


      
             

      {/* Use the DataTable component with filteredData */}
      <DataTable
        fixedHeader
        fixedHeaderScrollHeight="400px"
        columns={columns}
        data={filteredData} // Use filteredData instead of data
        selectableRows
        pagination
        customStyles={customStyles}
        highlightOnHover
        pointerOnHover
      />
    </div>
  );
}

export default Students;
