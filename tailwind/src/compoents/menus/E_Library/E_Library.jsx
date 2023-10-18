import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, Box, IconButton } from "@mui/material";
import { FaCamera } from "react-icons/fa";
import camera from "../../../asset/camera.png";
import Stack from "@mui/material/Stack";
import axios from "axios"; // Import Axios for making API requests
import { useNavigate } from "react-router-dom";

const E_Library = () => {
  const initialFormData = {
    uploadThumbnail: null,
    LibraryCategory: "",
    CourseName: "",
    title: "",
    authorName: "",
    description: "",
    keywords: "",
    externalLinks: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);
  const history = useNavigate();

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setError(null); // Reset any previous errors
  };

  const handleThumbnailUpload = (e) => {
    setFormData((prev) => ({
      ...prev,
      uploadThumbnail: e.target.files[0],
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous errors

    try {
      // Create a FormData object to send the file and other data
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      

      // Make an API POST request to your backend
      const response = await axios.post("http://localhost:5000/api/library-items", formDataToSend, config);

      // Handle a successful response here (e.g., show a success message)
      console.log("Data saved successfully:", response.data);

      history("/homepage/E-library/booklist");
      handleReset();

    } catch (err) {
      // Handle errors (e.g., show an error message)
      console.error("Error saving data:", err.response?.data || err.message);
      setError("An error occurred while saving the data.");
    }
  };

  return (
    <div className="mb-4 flex justify-between items-center">
      <div className="w-full bg-white px-16 pb-6  rounded-lg  drop-shadow border">
        {/* Add Branch Form */}
        <form onSubmit={handleSubmit}>
          <div className="text-center py-6">
            <input
              accept="image/*"
              id="image-upload"
              type="file"
              name="uploadThumbnail" // Make sure this name matches the field name expected by Multer
              style={{ display: "none", backgroundColor: "white" }}
              onChange={handleThumbnailUpload}
              required
            />


            <label htmlFor="image-upload">
              <IconButton
                color="#f5f5f5"
                aria-label="upload picture"
                component="span"
              >
                {/* <Avatar sx={{ width: 150, height: 150 }}> */}

                <div className="w-[140px] h-[140px] flex flex-col justify-center items-center border-2 border-primary rounded-full bg-white text-primary">
                  <img
                    alt="uploadcamera"
                    src={camera}
                    className="w-7 h-7 text-primary"
                  />
                  <span className="text-[15px] font-normal">
                    Resource Thumbnail
                  </span>
                </div>

                {/* </Avatar> */}
              </IconButton>
            </label>
          </div>

          <Stack
            sx={{
              margin: "auto",
              width: "100%",
              display: "flex",
              alignItems: "center",

              "& > :not(style)": {},
              "& .MuiInputLabel-root": {
                // Reduce label font size
                fontSize: "12px",
                color: "#105D50",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "1.3px solid #105D50",
                },
                "&:hover fieldset": {
                  border: "1.3px solid #105D50",
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
              sx={{ margin: "auto", width: "100%" }}
              spacing={2}
            >
              <Stack
                direction="column"
                justifyContent="center"
                // alignItems="center"
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
                      backgroundColor: "#EEEDED",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "1.3px solid #105D50",
                      },
                      "&:hover fieldset": {
                        border: "1.3px solid #105D50",
                      },
                      "&.Mui-focused fieldset": {
                        border: "1.34px solid #105D50",
                      },
                    },
                  }}
                  label="Library Category"
                  variant="outlined"
                  fullWidth
                  name="LibraryCategory"
                  value={formData.LibraryCategory}
                  onChange={handleOnChange}
                  select
                  required
                >
                  <MenuItem value="Books">Books</MenuItem>
                  <MenuItem value="Journal Articles">Journal Articles</MenuItem>
                  <MenuItem value="Documents">Documents</MenuItem>
                  <MenuItem value="Videos">Videos</MenuItem>
                  <MenuItem value="AR Videos">AR Videos</MenuItem>
                  <MenuItem value="VR Videos">VR Videos</MenuItem>
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
                      backgroundColor: "#EEEDED",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "1.3px solid #105D50",
                      },
                      "&:hover fieldset": {
                        border: "1.3px solid #105D50",
                      },
                      "&.Mui-focused fieldset": {
                        border: "1.34px solid #105D50",
                      },
                    },
                  }}
                  label="Course Name"
                  variant="outlined"
                  fullWidth
                  name="CourseName"
                  value={formData.CourseName}
                  onChange={handleOnChange}
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
                      backgroundColor: "#EEEDED",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "1.3px solid #105D50",
                      },
                      "&:hover fieldset": {
                        border: "1.3px solid #105D50",
                      },
                      "&.Mui-focused fieldset": {
                        border: "1.34px solid #105D50",
                      },
                    },
                  }}
                  label="Title"
                  variant="outlined"
                  fullWidth
                  name="title"
                  value={formData.title}
                  onChange={handleOnChange}
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
                      backgroundColor: "#EEEDED",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "1.3px solid #105D50",
                      },
                      "&:hover fieldset": {
                        border: "1.3px solid #105D50",
                      },
                      "&.Mui-focused fieldset": {
                        border: "1.34px solid #105D50",
                      },
                    },
                  }}
                  label="Author Name"
                  variant="outlined"
                  fullWidth
                  name="authorName"
                  value={formData.authorName}
                  onChange={handleOnChange}
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
                      height: 120,
                      width: "100%",
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
                  name="description"
                  value={formData.description}
                  onChange={handleOnChange}
                  required
                //defaultValue="Default Value"
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
                      backgroundColor: "#EEEDED",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "1.3px solid #105D50",
                      },
                      "&:hover fieldset": {
                        border: "1.3px solid #105D50",
                      },
                      "&.Mui-focused fieldset": {
                        border: "1.34px solid #105D50",
                      },
                    },
                  }}
                  label="Keywords"
                  variant="outlined"
                  fullWidth
                  name="keywords"
                  select
                  value={formData.keywords}
                  onChange={handleOnChange}
                  required
                >
                  <MenuItem value="example 1">example 1</MenuItem>
                  <MenuItem value="example 2">example 2</MenuItem>
                  <MenuItem value="example 3">exapmle 3</MenuItem>
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
                      backgroundColor: "#EEEDED",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "1.3px solid #105D50",
                      },
                      "&:hover fieldset": {
                        border: "1.3px solid #105D50",
                      },
                      "&.Mui-focused fieldset": {
                        border: "1.34px solid #105D50",
                      },
                    },
                  }}
                  label="External Links"
                  variant="outlined"
                  fullWidth
                  name="externalLinks"
                  value={formData.externalLinks}
                  onChange={handleOnChange}
                  required
                />
              </Stack>
            </Stack>

            <div className="flex justify-center items-center space-x-8 pt-10 pb-2">
              <button
                type="button"
                onClick={handleReset}
                className=" text-[12px] font-normal  px-10 py-[10px] bg-primary text-white rounded-md hover:bg-secondary duration-300"
              >
                Reset
              </button>
              <button
                type="submit"
                className="text-[12px] font-normal   px-10 py-[10px] bg-primary text-white rounded-md hover:bg-secondary duration-300"
              >
                Submit
              </button>

              <button
                type="button"
                onClick={() => {
                  handleSubmit();
                }}
                className=" text-[12px] font-normal px-[20px] py-[10px]  bg-primary text-white rounded-md hover:bg-secondary duration-300"
              >
                Submit & Add
              </button>
            </div>
          </Stack>
        </form>
      </div>
    </div>
  );
};

export default E_Library;