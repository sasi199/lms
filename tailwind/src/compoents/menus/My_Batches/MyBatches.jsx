import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 
import "react-calendar/dist/Calendar.css";
import Attendance from "../../../asset/checking-attendance.png";
import Students from "../../../asset/education.png";
import Exam from "../../../asset/exam.png";
import Result from "../../../asset/checklist.png";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Draggable from "react-draggable";

const MyBatches = ({ handleToggle }) => {
  const cardData = [
    { title: "Students", icon: Students, path: "/homepage/My Batches/Students" },
    { title: "Attendance", icon: Attendance, path: "/homepage/My Batches/Attendance" },
    { title: "Exam", icon: Exam, path: "/homepage/My Batches/Exam" },
    { title: "Result", icon: Result, path: "/homepage/My Batches/Result" },
  ];

  const [searchText, setSearchText] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [formData, setFormData] = useState({
    subjectName: "",
    subjectCode: "",
    facultyName: "",
  });

  const [selectedSubject, setSelectedSubject] = useState(null);


  const generateThumbnail = (subjectName) => {
    // Generate a placeholder thumbnail image based on subject name
    const thumbnailText = subjectName.substring(0, 1).toUpperCase();
    return `https://via.placeholder.com/100x100.png?text=${thumbnailText}`;
  };
  

 
  const fetchSubjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/subjects'); // Use the correct backend URL
      const subjects = response.data;
      setSubjects(subjects);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSubjects(); // Load subjects when the component mounts
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.subjectName && formData.subjectCode && formData.facultyName) {
      try {
        if (selectedSubject === null) {
          // Adding a new subject
          await axios.post('http://localhost:5000/api/subjects', formData); // Make a POST request to create a new subject
        } else {
          // Editing an existing subject
          await axios.patch(`http://localhost:5000/api/subjects/${subjects[selectedSubject]._id}`, formData); // Make a PATCH request to update the subject
          setSelectedSubject(null); // Reset selected subject after editing
        }

        setFormData({ subjectName: "", subjectCode: "", facultyName: "" });
        setShowAddForm(false);
        fetchSubjects(); // Fetch updated subjects after adding/editing
      } catch (error) {
        console.error(error);
      }
    }
  };


  

  const handleEditSubject = (index) => {
    setSelectedSubject(index);
    setShowAddForm(true);
    setFormData(subjects[index]);
  };

  const handleDeleteSubject = async (index) => {
    try {
      // Delete the subject by its ID
      await axios.delete(`http://localhost:5000/api/subjects/${subjects[index]._id}`);
      fetchSubjects(); // Fetch updated subjects after deleting
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white h-auto rounded-md border drop-shadow">
      <div className="flex flex-col justify-between mx-auto max-w-screen-xl">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {cardData.map((card, index) => (
              <Link
                key={index}
                to={card.path}
                onClick={handleToggle}
                className="hover:bg-slate-200 bg-white border rounded-2xl h-[60px] w-[200px] mt-8 transition-colors duration-300 flex items-center justify-center shadow-md"
              >
                <img src={card.icon} alt={card.title} className="w-5 h-5 mr-2" />
                <p className="font-semibold text-center text-md">{card.title}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-2 rounded-lg mt-10">
          <h2 className="text-xl font-semibold mt-6">Subjects</h2>
          <div className="relative ml-[450px]">
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
            onClick={() => {
              setSelectedSubject(null);
              setShowAddForm(true);
            }}
          >
            <FaPlus />
            Add Subjects
          </button>
        </div>
        {showAddForm && (
          <Draggable handle=".draggable-handle">
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4 text-center draggable-handle">
                  Add Subject
                </h2>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <TextField
                      label="Subject Name"
                      variant="outlined"
                      fullWidth
                      name="subjectName"
                      value={formData.subjectName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <TextField
                      label="Subject Code"
                      variant="outlined"
                      fullWidth
                      name="subjectCode"
                      value={formData.subjectCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <TextField
                      label="Faculty Name"
                      variant="outlined"
                      fullWidth
                      name="facultyName"
                      value={formData.facultyName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button
                      variant="outlined"
                      color="secondary"
                      className="mr-4"
                      onClick={() => setShowAddForm(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className="hover:shadow-lg transition-all duration-300 ease-in-out"
                    >
                      Add
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Draggable>
        )}
        <hr className="border-t bg-gray-800 h-0.5 mx-4 shadow-md" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-4 transition-transform transform hover:scale-105"
            >
              {/* Add a link to the SubjectDetails component */}
              <Link to={`/homepage/My Batches/${encodeURIComponent(subject.subjectName)}`}>
                <img
                  src={generateThumbnail(subject.subjectName)}
                  alt={subject.subjectName}
                  className="w-16 h-16 mb-2 rounded-full mx-auto"
                />
                <h2 className="text-xl font-semibold mb-2">{subject.subjectName}</h2>
              </Link>
              <p className="text-gray-600 mb-2">Subject Code: {subject.subjectCode}</p>
              <p className="text-gray-600">Faculty Name: {subject.facultyName}</p>
              <div className="flex justify-end mt-4">
                <button
                  className="text-blue-500 hover:text-blue-700 mr-4"
                  onClick={() => handleEditSubject(index)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDeleteSubject(index)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default MyBatches;
