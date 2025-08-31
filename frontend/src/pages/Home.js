// src/pages/Home.js
import React from "react";
import { MessageCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col">

      {/* Hero Section */}
      <header className="text-center py-12">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">
          Welcome to QuickFix
        </h2>
        <p className="text-lg text-blue-600">
          Your one-stop solution for easy complaint management
        </p>
      </header>

      {/* Feature Boxes */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-6 px-6 mb-12">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full md:w-1/3 h-64 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Easy Submission
          </h3>
          <p className="text-blue-600">
            Submit complaints quickly and efficiently with our user-friendly
            interface.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 w-full md:w-1/3 h-64 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Real-time Tracking
          </h3>
          <p className="text-blue-600">
            Track the status of your complaints in real-time and get updates.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 w-full md:w-1/3 h-64 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            AI-Powered Support
          </h3>
          <p className="text-blue-600">
            Get instant help with our intelligent chatbot support systems.
          </p>
        </div>
      </section>

      {/* Floating Chatbot Icon */}
      <button className="fixed bottom-6 right-6 bg-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-700 transition">
        <MessageCircle className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default Home;
