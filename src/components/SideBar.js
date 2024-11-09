import React from "react";
import { FaBook, FaPlayCircle, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; 

const SideBar = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-[#1e2a47] to-[#405c99] text-gray-100">
      {/* Sidebar */}
      <aside className="w-60 h-full  bg-gradient-to-b from-[#0F67B1] to-[#3FA2F6] p-6 space-y-8 sticky top-0  rounded-r-3xl shadow-xl">
        <h1 className="text-4xl font-extrabold text-white tracking-widest">Student</h1>
        <nav className="space-y-4">
          <Link to="/WeeklySchedule" className="flex items-center text-lg text-gray-200 hover:text-white transition-colors duration-300">
            <FaBook className="mr-3 text-lg" /> WeeklySchedule
          </Link>
          <Link to="/quizzes" className="flex items-center text-lg text-gray-200 hover:text-white transition-colors duration-300">
            <FaBook className="mr-3 text-lg" /> Quizzes
          </Link>
          <Link to="/courses" className="flex items-center text-lg text-gray-200 hover:text-white transition-colors duration-300">
            <FaPlayCircle className="mr-3 text-lg" /> Courses
          </Link>
          <Link to="/documents" className="flex items-center text-lg text-gray-200 hover:text-white transition-colors duration-300">
            <FaFileAlt className="mr-3 text-lg" /> Documents
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
