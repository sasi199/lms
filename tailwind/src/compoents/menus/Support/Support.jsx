import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import {  Stack } from "@mui/material";

import Button from '@mui/material/Button';


const Support = () => {
    const [formData, setFormData] = useState({
      emailId: "",
      contactName: "",
      mobileNumber: "",
      supportType: "",
      priority: "",
      subject: "",
      message: "",
      fileUpload: "",
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Define your submit logic here
    };
  
    const handleReset = () => {
      setFormData({
        emailId: "",
        contactName: "",
        mobileNumber: "",
        supportType: "",
        priority: "",
        subject: "",
        message: "",
        fileUpload: "",
      });
    };
  
    const handleFileUpload = (e) => {
      setFormData({ ...formData, fileUpload: e.target.files[0] });
    };
  


  return (
    <div className="mb-4 flex justify-between items-center top-0 rounded-xl">
      <div className="w-full bg-white px-16 rounded-md border drop-shadow py-6">
        {/* Add Branch Form */}
        <form onSubmit={handleSubmit}>
        

          <Stack
            sx={{
              margin: "auto",
              width: "100%",
              display: "flex",
              alignItems: "center",
              "& > :not(style)": {},
              "& .MuiInputLabel-root": {
                // Reduce label font size
                fontSize: "13px",
                color: "#105D50",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "1.3px solid #105D50", // Set the default outline color to black
                },
                "&:hover fieldset": {
                  border: "1.3px solid #105D50",
                  // Change the border color on hover
                },

                "&.Mui-focused fieldset": {
                  border: "1.34px solid #105D50",
                  fontSize: "13px", // Set the outline color to yellow on focus
                },
              },
            }}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ marginBottom: "20px", width: "100%" }}
              
              spacing={2}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                width={"400px"}
                spacing={2}
              >


                
<TextField
                  sx={{
                    backgroundColor: "#F5F5F5",
                    color: "#105D50",
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#105D50",
                    },

                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                    "&:hover": {
                      // Apply styles when hovering over the TextField
                      backgroundColor: "#EEEDED", // Change background color on hover
                    },
                  }}
                  label="Email ID"
                  variant="outlined"
                  fullWidth
                  //value={formData.emailId}
                  required
                />


<TextField
                  sx={{
                    backgroundColor: "#F5F5F5",
                    color: "#105D50",
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#105D50",
                    },

                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                    "&:hover": {
                      // Apply styles when hovering over the TextField
                      backgroundColor: "#EEEDED", // Change background color on hover
                    },
                  }}
                  label="Point of contact"
                  variant="outlined"
                  fullWidth
                  //value={formData.facultyName}
                  required
                />

<TextField
                  sx={{
                    backgroundColor: "#F5F5F5",
                    color: "#105D50",
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#105D50",
                    },

                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                    "&:hover": {
                      // Apply styles when hovering over the TextField
                      backgroundColor: "#EEEDED", // Change background color on hover
                    },
                  }}
                  label="Mobile number"
                  variant="outlined"
                  fullWidth
                  //value={formData.mobileNumber}
                  required
                />



<TextField
                  sx={{
                    backgroundColor: "#F5F5F5",
                    color: "#105D50",
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#105D50",
              
                    },
                  

                    "& .MuiInputBase-root": {
                      height: 45,
                   
                    },
                    "&:hover": {
                      // Apply styles when hovering over the TextField
                      backgroundColor: "#EEEDED", // Change background color on hover
                    },
                  }}
                  label="Support Type"
                  variant="outlined"
                  fullWidth
                  select
                  //value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, supportType: e.target.value })
                  }
                  required
                >
                  <MenuItem value="general" style={{ fontSize: "12px" }} >General</MenuItem>
                  <MenuItem value="technical" style={{ fontSize: "12px" }}>Technical</MenuItem>
                
                </TextField>
            

                <TextField
                  sx={{
                    backgroundColor: "#F5F5F5",
                    color: "#105D50",
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#105D50",
                    },

                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                    "&:hover": {
                      // Apply styles when hovering over the TextField
                      backgroundColor: "#EEEDED", // Change background color on hover
                    },
                  }}
                  label="Priority"
                  variant="outlined"
                  fullWidth
                  select
                  //value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, supportType: e.target.value })
                  }
                  required
                >
                  <MenuItem value="low" style={{ fontSize: "12px" }}>Low</MenuItem>
                  <MenuItem value="medium" style={{ fontSize: "12px" }}>Medium</MenuItem>
                  <MenuItem value="high" style={{ fontSize: "12px" }}>High</MenuItem>
                
                </TextField>

                <TextField
                  sx={{
                    backgroundColor: "#F5F5F5",
                    color: "#105D50",
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#105D50",
                    },

                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                    "&:hover": {
                      // Apply styles when hovering over the TextField
                      backgroundColor: "#EEEDED", // Change background color on hover
                    },
                  }}
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  //value={formData.bloodGroup}
                  required
                />

<TextField
                  sx={{
                    backgroundColor: "#F5F5F5",
                    color: "#105D50",
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#105D50",
                    },

                    "& .MuiInputBase-root": {
                      height:120,
                     width:400,
                    },
                    "&:hover": {
                      // Apply styles when hovering over the TextField
                      backgroundColor: "#EEEDED", // Change background color on hover
                    },
                  }}
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          //defaultValue="Default Value"
        />

<Button
  sx={{
    height:45,
    backgroundColor: "#F5F5F5",
    color: "#105D50",
    borderColor: '#105D50',
    "&:hover": {
      backgroundColor: "#EEEDED",
      borderColor:"#105D50"
    },
   
  }}
  variant="outlined"
  fullWidth
  startIcon={<CloudUploadIcon />}
  component="label"
>
  Upload File
  <input type="file" 
  style={{ display: 'none' }}
   required
   />
</Button>

              </Stack>
            </Stack>

           
            {/* //Button  */}
            <Grid item xs={10}>
              <div className="flex  justify-center space-x-9">
                <button
                  type="submit"
                  className="w-28 text-[12px] font-normal h-10 px-3 py-2 bg-primary text-white rounded-lg hover:bg-secondary hover:text-green"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-28 text-[12px] font-normal h-10 px-4 py-2  bg-primary text-white rounded-lg hover:bg-secondary hover:text-green"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleSubmit();
                  }}
                  className="w-34 text-[12px] font-normal h-10 px-4 py-2  bg-primary text-white rounded-lg hover:bg-secondary hover:text-green"
                >
                  Submit & Add
                </button>
              </div>
            </Grid>
            </Stack>
        
        </form>
      </div>
    </div>
  );
};

export default Support;