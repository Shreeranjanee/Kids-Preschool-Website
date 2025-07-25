import React from "react";
import "./Parentdashboard.css";

const ParentDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Parent Dashboard</h1>

      {/* Welcome Section */}
      <div className="welcome-section">
        <h2>Welcome, RAMA!</h2>
        <p>Stay updated with your child's learning journey.</p>
      </div>

      {/* Child's Schedule */}
      <div className="child-schedule">
        <h2>Today's Schedule</h2>
        <ul>
          <li>9:00 AM - 10:00 AM: Story Time</li>
          <li>10:30 AM - 11:30 AM: Creative Arts</li>
          <li>12:00 PM - 1:00 PM: Outdoor Play</li>
        </ul>
      </div>

      {/* Announcements */}
      <div className="announcements-section">
        <h2>Announcements</h2>
        <ul>
          <li>Parent-Teacher meeting on Friday at 3:00 PM.</li>
          <li>Field trip scheduled for next Wednesday. Permission slips required.</li>
        </ul>
      </div>

      {/* Child's Progress */}
      <div className="child-progress">
        <h2>Your Child's Progress</h2>
        <p>Activities Completed: 85%</p>
        <p>Behavior: Excellent</p>
      </div>

      {/* Quick Links */}
      <div className="quick-links">
        <h2>Quick Links</h2>
        <button className="quick-link-btn">View Homework</button>
        <button className="quick-link-btn">Contact Teacher</button>
        <button className="quick-link-btn">Update Profile</button>
      </div>
    </div>
  );
};

export default ParentDashboard;
