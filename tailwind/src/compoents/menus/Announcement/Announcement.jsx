import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { FaPlus } from "react-icons/fa";
import { IconButton, Menu, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { AiOutlineSearch } from "react-icons/ai";

function Announcement({ students }) {
  const [branches, setBranches] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null); // Define anchorEl state
  const [openMenu, setOpenMenu] = useState(null); // Define openMenu state
  const history = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const columns = [
    {
      name: "S.No",
      selector: (row, index) => index + 1,
      sortable: true,
      width:'70px'

    },
    {
      name: "Announcement Date",
      selector: "date",
      sortable: true,
     
    },
    {
      name: "Subjects",
      selector: "subjects",
      sortable: true,
    
    },

    {
      name: "Action",
      cell: (row) => (
        <div>
          <IconButton
            size="small"
            aria-label="actions"
            onClick={(event) => handleMenuOpen(event, branches)} // Pass the event and branch
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
            <MenuItem onClick={() => handleDeleteClick(row.id)}>
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
      id: 1,
      date: "02.09.2023",
      subjects: "FSD",
    },
    {
      id: 1,
      date: "02.09.2023",
      subjects: "FSD",
    },
    {
      id: 1,
      date: "02.09.2023",
      subjects: "FSD",
    },
    {
      id: 1,
      date: "02.09.2023",
      subjects: "FSD",
    },
  ];

  // Define your custom date format function here
  const formatDate = (date) => {
    const currentDate = new Date(date);
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear();
    return `${day}-${month}-${year}`;
  };

  //   const handleToggleVR = (branchId) => {
  //     // Implement your toggle logic here
  //   };

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

  const toggleFormView = () => {
    history("/homepage/Announcement/Announcement Form");
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

  return (
    <div className="W-full h-auto flex flex-col items-center gap-3 pt-5  px-1 drop-shadow bg-white border">
    <div className="w-full flex flex-row justify-end items-center gap-10 px-4">
        <div className="relative">
          <input
            placeholder="Search"
            type="text"
            required
            className="p-3 w-[250px] text-[14px] bg-gray-100 text-gray-700
          focus:border-primary focus:bg-white focus:text-gray-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none 
        rounded-md "
            onChange={(event) => setSearchTerm(event.target.value)}
            value={searchTerm}
          />
          <AiOutlineSearch className="absolute top-3 right-3 text-xl text-gray-400 focus:text-secondary" />
                    
        </div>
        <button
          className="flex flex-row py-3 px-4 text-[14px] bg-primary text-white rounded-lg hover:bg-secondary  hover:text-green items-center gap-1 "
          onClick={toggleFormView}
        >
          <FaPlus />
          Add Announcement
        </button>
      </div>
      {/* Use the DataTable component */}
      <DataTable
        fixedHeader
        fixedHeaderScrollHeight="250px"
        columns={columns}
        data={data}
        selectableRows
        pagination
        customStyles={customStyles}
        highlightOnHover
        pointerOnHover
        // Apply custom styles here
      />
    </div>
  );
}

export default Announcement;
