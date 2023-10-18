import React from "react";
import Login from "./compoents/Login/Login";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./compoents/menus/Home/Home";
import Homepage from "./compoents/Homepage";
import MyBatches from "./compoents/menus/My_Batches/MyBatches";
import Announcement from "./compoents/menus/Announcement/Announcement";
import E_Library from "./compoents/menus/E_Library/E_Library";
import Support from "./compoents/menus/Support/Support";
import FileManagement from "./compoents/menus/File_Management/FileManagement";
import BookList from "./compoents/menus/E_Library/BookList";
import Students from "./compoents/menus/My_Batches/Students";
import Attendance from "./compoents/menus/My_Batches/Attendance";
import Exam from "./compoents/menus/My_Batches/Exam";
import Result from "./compoents/menus/My_Batches/Result";
import ResultForm from "./compoents/menus/My_Batches/ResultForm";
import ExamForm from "./compoents/menus/My_Batches/ExamForm";
import AnnouncementForm from "./compoents/menus/Announcement/AnnouncementForm";
import AddSubject from "./compoents/menus/My_Batches/AddSubject";
import TodayAttendance from "./compoents/menus/My_Batches/TodayAttendance";
import Content from "./compoents/menus/My_Batches/Content";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="homepage" element={<Homepage />}>
          <Route path="/homepage/home" element={<Home />} />

          <Route path="/homepage/My Batches" element={<MyBatches />} />

          <Route
            path="/homepage/My Batches/:subjectName"
            element={<AddSubject />}
          />

          <Route
            path="/homepage/My Batches/:subjectName/:sectionId/:topicId/content"
            element={<Content />}
          />

          <Route path="/homepage/My Batches/Students" element={<Students />} />

          <Route
            path="/homepage/My Batches/Attendance"
            element={<Attendance />}
          />
          <Route
            path="/homepage/My Batches/attendance/today attendance"
            element={<TodayAttendance />}
          />
          <Route path="/homepage/My Batches/Exam" element={<Exam />} />
          <Route
            path="/homepage/My Batches/Exam/Exam Form"
            element={<ExamForm />}
          />
          <Route path="/homepage/My Batches/Result" element={<Result />} />
          <Route
            path="/homepage/My Batches/Result/Result Form"
            element={<ResultForm />}
          />

          <Route path="/homepage/Announcement" element={<Announcement />} />
          <Route
            path="/homepage/Announcement/Announcement Form"
            element={<AnnouncementForm />}
          />
          <Route path="/homepage/E-library" element={<E_Library />} />
            <Route path="/homepage/E-library/booklist" element={<BookList />} />
        
          <Route
            path="/homepage/File Management"
            element={<FileManagement />}
          />
          <Route path="/homepage/Support" element={<Support />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
