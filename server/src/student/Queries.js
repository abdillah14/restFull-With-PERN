const getStudents = 'SELECT * FROM students';
const getStudentById = 'SELECT * FROM students WHERE id = $1'
const CheckEmailExists = 'SELECT s FROM students s WhERE s.email = $1'
const addStudent = 'INSERT INTO students (name, email, gender, birth) VALUES ($1, $2, $3, $4);'
const updateStudent = 'UPDATE students SET name = $1, email = $2 WHERE id = $3'
const deleteStudent = 'DELETE FROM students WHERE id = $1'
module.exports = {
    getStudents,
    getStudentById,
    CheckEmailExists,
    addStudent,
    updateStudent,
    deleteStudent
}