const express = require("express");

const app = express();
app.use(express.json());

let students = [];
let nextId = 1;

// Homepage
app.get("/", (req, res) => {
    res.send("Student Management Application Running!");
});

// Add Student
app.post("/students", (req, res) => {
    const { name, email, course } = req.body;

    if (!name || !email || !course) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const student = {
        id: nextId++,
        name,
        email,
        course
    };

    students.push(student);
    res.status(201).json(student);
});

// View All Students
app.get("/students", (req, res) => {
    res.json(students);
});

// Search Student
app.get("/students/:id", (req, res) => {
    const student = students.find(
        s => s.id === Number(req.params.id)
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

// Update Student
app.put("/students/:id", (req, res) => {
    const student = students.find(
        s => s.id === Number(req.params.id)
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const { name, email, course } = req.body;

    if (!name || !email || !course) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    student.name = name;
    student.email = email;
    student.course = course;

    res.json(student);
});

// Delete Student
app.delete("/students/:id", (req, res) => {
    const index = students.findIndex(
        s => s.id === Number(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        message: "Student deleted successfully"
    });
});

// Export Express app
module.exports = app;

// Reset students for automated tests
module.exports.resetStudents = () => {
    students = [];
    nextId = 1;
};