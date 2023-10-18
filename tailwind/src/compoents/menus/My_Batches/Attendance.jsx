import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import DataTable from "react-data-table-component";
import { IconButton, Menu, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom/dist";
import { FaPlus } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import download from "../../../asset/download.png"
import upload from "../../../asset/upload.png"

function Attendance({ exams }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [searchText, setSearchText] = useState(""); // State to store the search text
  const history = useNavigate();

  const handleAddExam = () => {
    history("/homepage/My Batches/Attendance/today attendance");
  };

  const columns = [
   
    {
      name: "S.No",
      selector: (row, index) => index + 1,
      sortable: true,
      width:'70px'
    },
    {
      name: "Student Name",
      selector: "studentName",
      sortable: true,
    },
    {
      name: "Student ID",
      selector: "studentId",
      sortable: true,
    },
    {
      name: "Percentage",
      selector: "percentage",
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <IconButton
            size="small"
            aria-label="actions"
            onClick={(event) => handleMenuOpen(event, row.examId)}
          >
            <EditIcon />
          </IconButton>
          <Menu
            id={`actions-menu-${row.examId}`}
            anchorEl={anchorEl}
            open={openMenu === row.examId}
            onClose={() => handleMenuClose(row.examId)}
          >
            <MenuItem onClick={() => handleViewClick(row.examId)}>View</MenuItem>
            <MenuItem onClick={() => handleEditClick(row.examId)}>Edit</MenuItem>
            <MenuItem onClick={() => handleDeleteClick(row.examId)}>
              Delete
            </MenuItem>
          </Menu>
        </div>
      ),
      sortable: false,
    },
  ];

  const data = [
    {
      month: "January",
      checkbox: "",
      studentName: "John Doe",
      studentId: "12345",
      percentage: "95%",
    },
    {
      month: "January",
      checkbox: "",
      studentName: "John Doe",
      studentId: "12345",
      percentage: "95%",
    },
    {
      month: "January",
      checkbox: "",
      studentName: "John Doe",
      studentId: "12345",
      percentage: "95%",
    },
    {
      month: "January",
      checkbox: "",
      studentName: "John Doe",
      studentId: "12345",
      percentage: "95%",
    },
    {
      month: "January",
      checkbox: "",
      studentName: "John Doe",
      studentId: "12345",
      percentage: "95%",
    },
    {
      month: "January",
      checkbox: "",
      studentName: "John Doe",
      studentId: "12345",
      percentage: "95%",
    },
    // Add more data rows here
  ];

  const handleMenuOpen = (event, examId) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(examId);
  };

  const handleMenuClose = (examId) => {
    // Implement your menu close logic here
  };

  const handleViewClick = (examId) => {
    // Implement your view action here
  };

  const handleEditClick = (examId) => {
    // Implement your edit action here
  };

  const handleDeleteClick = (examId) => {
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
    <div className="W-full h-auto flex flex-col items-center gap-3 pt-5  px-1 drop-shadow bg-white  border drob-shadow">
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
        <button
          className="flex flex-row py-3 px-4 text-[14px] bg-primary text-white rounded-lg hover:bg-secondary  hover:text-green items-center gap-1 "
          onClick={handleAddExam}
        >
          
          Today's Attendance
        </button>


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

export default Attendance;