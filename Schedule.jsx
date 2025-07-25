import React from 'react'
import './Schedule.css'

function Schedule() {
    return (
        <div>
            <section id="schedule" className="schedule">
          <h2>Our Fun Learning Schedule</h2>
          <p>Here is the schedule of classes we offer to make learning fun and exciting!</p>
  
          <div className="schedule-grid">
            {/* Monday */}
            <div className="schedule-card">
              <h3>Monday</h3>
              <ul>
                <li><strong>Toddlers:</strong> Story Time - Ms. Emily Johnson</li>
                <li><strong>Preschoolers:</strong> Story Time - Mr. Daniel Smith</li>
                <li><strong>Prekindergartners:</strong> Story Time - Ms. Sarah Lee</li>
              </ul>
            </div>
  
            {/* Tuesday */}
            <div className="schedule-card">
              <h3>Tuesday</h3>
              <ul>
                <li><strong>Toddlers:</strong> Music & Dance - Ms. Emily Johnson</li>
                <li><strong>Preschoolers:</strong> Music & Dance - Mr. Daniel Smith</li>
                <li><strong>Prekindergartners:</strong> Music & Dance - Ms. Sarah Lee</li>
              </ul>
            </div>
  
            {/* Wednesday */}
            <div className="schedule-card">
              <h3>Wednesday</h3>
              <ul>
                <li><strong>Toddlers:</strong> Drawing & Painting - Ms. Emily Johnson</li>
                <li><strong>Preschoolers:</strong> Drawing & Painting - Mr. Daniel Smith</li>
                <li><strong>Prekindergartners:</strong> Drawing & Painting - Ms. Sarah Lee</li>
              </ul>
            </div>
  
            {/* Thursday */}
            <div className="schedule-card">
              <h3>Thursday</h3>
              <ul>
                <li><strong>Toddlers:</strong> Puzzle Play - Ms. Emily Johnson</li>
                <li><strong>Preschoolers:</strong> Puzzle Play - Mr. Daniel Smith</li>
                <li><strong>Prekindergartners:</strong> Puzzle Play - Ms. Sarah Lee</li>
              </ul>
            </div>
  
            {/* Friday */}
            <div className="schedule-card">
              <h3>Friday</h3>
              <ul>
                <li><strong>Toddlers:</strong> Storytelling - Ms. Emily Johnson</li>
                <li><strong>Preschoolers:</strong> Storytelling - Mr. Daniel Smith</li>
                <li><strong>Prekindergartners:</strong> Storytelling - Ms. Sarah Lee</li>
              </ul>
            </div>
          </div>
        </section>
            
        </div>
    )
}

export default Schedule


  
  