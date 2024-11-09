import React from "react";
import { FaBook, FaClock, FaPlayCircle, FaFileAlt, FaCheckCircle, FaSearch } from "react-icons/fa";

// Dummy Data for Testing
const quizzes = [
  { id: 1, title: "Math Midterm Exam", dueDate: "2024-11-15", status: "upcoming", score: null },
  { id: 2, title: "History Quiz - WWII", dueDate: "2024-11-10", status: "completed", score: 88 },
];

const courses = [
  { id: 101, name: "Math 101", instructor: "Dr. Smith", progress: 75, status: "active" },
  { id: 102, name: "History 202", instructor: "Prof. Lee", progress: 90, status: "active" },
];

const documents = [
  { id: 1, name: "Official Transcript", status: "available" },
  { id: 2, name: "Letter of Recommendation", status: "available" },
];

const App = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-[#1e2a47] to-[#405c99] text-gray-100">
      {/* Sidebar */}
      <aside className="w-80 bg-gradient-to-b from-[#0F67B1] to-[#3FA2F6] p-6 space-y-8 sticky top-0 h-full rounded-r-3xl shadow-xl">
        <h1 className="text-4xl font-extrabold text-white tracking-widest">Student Dashboard</h1>
        <nav className="space-y-4">
          <a href="#" className="flex items-center text-lg text-gray-200 hover:text-white transition-colors duration-300">
            <FaBook className="mr-3 text-lg" /> Quizzes
          </a>
          <a href="#" className="flex items-center text-lg text-gray-200 hover:text-white transition-colors duration-300">
            <FaPlayCircle className="mr-3 text-lg" /> Courses
          </a>
          <a href="#" className="flex items-center text-lg text-gray-200 hover:text-white transition-colors duration-300">
            <FaFileAlt className="mr-3 text-lg" /> Documents
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto bg-[#2C3E50] rounded-l-3xl">
        {/* Quizzes Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#96C9F4] mb-6">Upcoming Quizzes</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {quizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="bg-[#34495E] hover:bg-[#3FA2F6] rounded-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">{quiz.title}</h3>
                  {quiz.status === "completed" ? (
                    <span className="text-green-500 text-sm">Score: {quiz.score}</span>
                  ) : (
                    <span className="text-yellow-500 text-sm">Upcoming</span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mt-2">Due: {quiz.dueDate}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Courses Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#96C9F4] mb-6">Your Courses</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-[#34495E] hover:bg-[#3FA2F6] rounded-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">{course.name}</h3>
                  <span className="text-gray-400 text-sm">{course.progress}%</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Instructor: {course.instructor}</p>
                <div className="mt-4">
                  <span
                    className={`${
                      course.status === "active" ? "text-green-500" : "text-gray-500"
                    } text-sm font-medium`}
                  >
                    {course.status === "active" ? (
                      <FaCheckCircle className="inline-block mr-1" />
                    ) : (
                      <FaClock className="inline-block mr-1" />
                    )}
                    {course.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documents Section */}
        <section>
          <h2 className="text-3xl font-semibold text-[#96C9F4] mb-6">Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="bg-[#34495E] hover:bg-[#3FA2F6] rounded-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">{doc.name}</h3>
                  <span className="text-gray-400 text-sm">Available</span>
                </div>
                <button className="w-full mt-4 py-2 text-white bg-[#3FA2F6] hover:bg-[#0F67B1] rounded-lg focus:outline-none transition duration-200 ease-in-out">
                  Request
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
