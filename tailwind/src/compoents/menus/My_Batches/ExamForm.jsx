import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import { Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';

const ExamForm = () => {
  const [formData, setFormData] = useState({
    examName: "", // Define these variables
    examId: "",
    examDuration: "",
    examDate: "",
    examType: "",
    totalMark: "",
    passMark: "",
    examLink: "",
    fileUpload:"",
  });

  const handleSubmit = (e) => {
    // Define your submit logic here
  };

  const handleReset = (e) => {
    setFormData({
      examName: "", // Define these variables
      examId: "",
      examDuration: "",
      examDate: "",
      examType: "",
      totalMark: "",
      passMark: "",
      examLink: "",
      fileUpload:"",
    });
  };
  const handleImageUpload = (e) => {
    // Define your image upload logic here
  };

  return (
    <div className="mb-4 flex justify-between items-center top-0 rounded-xl">
      <div className="w-full bg-white px-16 rounded-md border drop-shadow py-3">
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
                  label="Exam Id"
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
                  }}
                  label="Exam Name"
                  variant="outlined"
                  fullWidth
                  //value={formData.facultyId}
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
                  label="Exam Duration"
                  variant="outlined"
                  fullWidth
                  //value={formData.employeecode}
                  required
                />


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
                        width:400
                      },
                      "&:hover": {
                        // Apply styles when hovering over the TextField
                        backgroundColor: "#EEEDED", // Change background color on hover
                      },
                    }}
                    label="Exam Date"
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
                  label="Exam Type"
                  variant="outlined"
                  fullWidth
                  select
                  //value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, examType: e.target.value })
                  }
                  required
                >
                  <MenuItem value="male">MCQ</MenuItem>
                  <MenuItem value="female">Descriptive</MenuItem>
                  <MenuItem value="other">MCQ & Descriptive </MenuItem>
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
                  }}
                  label="Total Mark"
                  variant="outlined"
                  fullWidth
                  //value={formData.facultyId}
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
                  label="Pass Mark"
                  variant="outlined"
                  fullWidth
                  //value={formData.employeecode}
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
                  label="Exam Link"
                  variant="outlined"
                  fullWidth
                  //value={formData.employeecode}
                  required
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
  <input type="file" style={{ display: 'none' }} required />
</Button>
                
              </Stack>
    
            </Stack>
            <Grid item xs={10}>
              <div className="flex  justify-center space-x-9">
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

export default ExamForm;