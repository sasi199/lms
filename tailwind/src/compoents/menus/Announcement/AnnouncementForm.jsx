import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import { Box, Button, IconButton, Input, InputAdornment, Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const AnnouncementForm = () => {
  const [formData, setFormData] = useState({
    examName: "", // Define these variables
    examId: "",
    courseName: "",
    courseId: "",
    batchName: "",
    batchId: "",
    uploadResults: "",
  });

  const handleSubmit = (e) => {
    // Define your submit logic here
  };

  const handleReset = (e) => {
    // Define your reset logic here
  };

  const handleImageUpload = (e) => {
    // Define your image upload logic here
  };

  return (
    <div className="mb-4 flex justify-between items-center top-0">
      <div className="w-full bg-white px-16 py-6 rounded-lg border drop-shadow">
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
              direction="row"
              justifyContent="center"
              // alignItems="center"
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
                 <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{
                      backgroundColor: "#F5F5F5",
                      color: "#105D50",
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "#105D50",
                      },

                      "& .MuiInputBase-root": {
                        height: 45,
                        width: 400,
                      },
                      "&:hover": {
                        // Apply styles when hovering over the TextField
                        backgroundColor: "#EEEDED", // Change background color on hover
                      },
                    }}
                    label="Announcement Date"
                    format="MM/DD/YYYY"
                    variant="outlined"
                    fullWidth
                    //value={formData.dob}
                    required
                    //defaultValue={dayjs('')}
                  />
                </LocalizationProvider>
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
                  label="Subject Name"
                  variant="outlined"
                  fullWidth
                  select
                  //value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, subjectName: e.target.value })
                  }
                  required
                >
                  <MenuItem value="male" style={{ fontSize: "12px" }}>FSD</MenuItem>
                  <MenuItem value="female" style={{ fontSize: "12px" }}>DM</MenuItem>
                  <MenuItem value="other"style={{ fontSize: "12px" }}>ST</MenuItem>
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
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  required
                >
                  <MenuItem value="low"style={{ fontSize: "12px" }}>Low</MenuItem>
                  <MenuItem value="medium"style={{ fontSize: "12px" }}>Medium</MenuItem>
                  <MenuItem value="high"style={{ fontSize: "12px" }}>High</MenuItem>
                </TextField>
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
          label="Description"
          multiline
          rows={4}
          //defaultValue="Default Value"
        />
              </Stack>
            </Stack>

            <Grid item xs={10}>
              <div className="flex  justify-center space-x-9 pt-4 pb-4">

                <button
                  type="submit"
                  className="w-28 text-[12px] font-normal h-10 px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary hover:text-green"
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

export default AnnouncementForm;