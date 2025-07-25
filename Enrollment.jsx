import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import './Enrollment.css';

const Enrollment = () => {
    const [formData, setFormData] = useState({
        childName: '',
        childDOB: '', // New field for DOB
        parentName: '',
        email: '',
        phone: '',
        program: 'toddler',
        startDate: '', // Preschool's start date
        additionalInfo: '',
        childAge: '' // Age will be calculated here
    });

    const [message, setMessage] = useState('');
    const [programStartDates, setProgramStartDates] = useState({
        toddler: '2025-02-20',  // Example start date for the toddler program
        preschool: '2025-04-01',  // Example start date for the preschool program
        prekinder: '2025-05-13'  // Example start date for the pre-kindergarten program
    });

    // Calculate the child's age based on the DOB
    const calculateChildAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth();
        if (month < birthDate.getMonth() || (month === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    // Recalculate child's age when DOB changes
    useEffect(() => {
        if (formData.childDOB) {
            const age = calculateChildAge(formData.childDOB);
            setFormData((prevData) => ({
                ...prevData,
                childAge: age // Update the age in formData
            }));
        }
    }, [formData.childDOB]); // Watch for changes in childDOB

    useEffect(() => {
        // Update the start date when the program is changed
        setFormData((prevData) => ({
            ...prevData,
            startDate: programStartDates[prevData.program]
        }));
    }, [formData.program]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:9000/rrce/enroll', formData);
            alert('Enrollment submitted successfully!');
            setFormData({
                childName: '',
                childDOB: '',
                parentName: '',
                email: '',
                phone: '',
                program: 'toddler',
                startDate: programStartDates.toddler,
                additionalInfo: '',
                childAge: '' // Reset age after submission
            });

            // Show an alert after successful submission
            
        } catch (error) {
        
        alert('Error submitting enrollment. Please try again.');
    }
    };

    return (
        <div className="enrollment-container">
            <h2>Enrollment Form</h2>
            {message && <div className="message">{message}</div>}
            <form onSubmit={handleSubmit} className="enrollment-form">
                <div className="form-group">
                    <label htmlFor="childName">Child's Name</label>
                    <input
                        type="text"
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="childDOB">Child's Date of Birth</label>
                    <input
                        type="date"
                        id="childDOB"
                        name="childDOB"
                        value={formData.childDOB}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="childAge">Child's Age</label>
                    <input
                        type="number"
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        readOnly
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="parentName">Parent's Name</label>
                    <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="program">Program</label>
                    <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                    >
                        <option value="toddler">Toddler Program (1-2 years)</option>
                        <option value="preschool">Preschool (3-4 years)</option>
                        <option value="prekinder">Pre-Kindergarten (5-6 years)</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="startDate">Desired Start Date</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="additionalInfo">Additional Information</label>
                    <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows="4"
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn">Submit Enrollment</button>
            </form>
        </div>
    );
};

export default Enrollment;
