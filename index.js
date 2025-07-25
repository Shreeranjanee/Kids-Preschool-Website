
import mongoose from "mongoose";
import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from 'dotenv';  // Use import instead of require


const app = express();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(urlencoded());
app.use(express.json()); // To parse JSON bodies

// Connecting to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/rrce", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => console.log("Error connecting to the database:", err));

// Schema for Enrollment form
const enrollmentSchema = new mongoose.Schema({
  childName: { type: String, required: true },
  childDOB: { type: Date, required: true },  // Date of Birth
  childAge: { type: Number, required: true }, // Age calculated from DOB
  parentName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  program: { type: String, required: true },
  startDate: { type: Date, required: true },
  additionalInfo: { type: String, default: '' }
});

// Model for Enrollment
const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

// Function to calculate child's age based on DOB
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

// Enrollment route (for handling enrollment form submissions)
app.post("/rrce/enroll", async (req, res) => {
  const { childName, childDOB, parentName, email, phone, program, startDate, additionalInfo } = req.body;

  try {
    // Calculate the child's age based on the DOB
    const childAge = calculateChildAge(childDOB);

    // Create a new enrollment document
    const newEnrollment = new Enrollment({
      childName,
      childDOB,
      childAge, // Set the calculated age
      parentName,
      email,
      phone,
      program,
      startDate,
      additionalInfo
    });

    await newEnrollment.save();
    res.status(201).json({ message: "Enrollment submitted successfully!" });
  } catch (error) {
    console.error("Error saving enrollment:", error);
    res.status(500).json({ message: "Error submitting enrollment. Please try again." });
  }
});
// Contact Us Schema and Model
const contactUsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const ContactUs = mongoose.model("ContactUs", contactUsSchema);

// Contact Us route
app.post("/rrce/contact-us", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save the contact form data into the database
    const newContact = new ContactUs({
      name,
      email,
      message,
    });

    await newContact.save();
    res.status(201).json({ message: "Thank you for reaching out! We will get back to you soon." });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ message: "Error submitting your message. Please try again." });
  }
});


// Start the server
app.listen(9000, () => {
  console.log("Server started on port 9000");
});
