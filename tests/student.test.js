const request = require("supertest");
const app = require("../app");

beforeEach(() => {
    app.resetStudents();
});

describe("Student Management API Tests", () => {
    test("Should add a student", async () => {
        const response = await request(app)
            .post("/students")
            .send({
                name: "Anudeepthi",
                email: "student@gmail.com",
                course: "CSE"
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.name).toBe("Anudeepthi");
    });

    test("Should view all students", async () => {
        await request(app)
            .post("/students")
            .send({
                name: "Anudeepthi",
                email: "student@gmail.com",
                course: "CSE"
            });

        const response = await request(app).get("/students");

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveLength(1);
    });

    test("Should return 404 for missing student", async () => {
        const response = await request(app).get("/students/999");

        expect(response.statusCode).toBe(404);
    });

    test("Should update student details", async () => {
        const created = await request(app)
            .post("/students")
            .send({
                name: "Anudeepthi",
                email: "student@gmail.com",
                course: "CSE"
            });

        const response = await request(app)
            .put(`/students/${created.body.id}`)
            .send({
                name: "Anu",
                email: "anu@gmail.com",
                course: "IT"
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe("Anu");
    });

    test("Should delete a student", async () => {
        const created = await request(app)
            .post("/students")
            .send({
                name: "Anudeepthi",
                email: "student@gmail.com",
                course: "CSE"
            });

        const response = await request(app)
            .delete(`/students/${created.body.id}`);

        expect(response.statusCode).toBe(200);

        const students = await request(app).get("/students");
        expect(students.body).toHaveLength(0);
    });
});