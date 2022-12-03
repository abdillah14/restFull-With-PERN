const pool = require('../../db')
const queries = require('./Queries')


const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, result) => {
        if(error) throw error;
        res.status(200).json(result.rows);
    })
}

const getStudentById = (req, res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id] , (error, result) => {
        if(error) throw error;
        res.status(200).json(result.rows);
    })
}

const addStudent = (req, res) => {
    const { name, email, gender, birth} = req.body;
    pool.query(queries.CheckEmailExists, [email], (error, result) => {
        if(result.rows.length) {
            res.send('Email already Exists...')
        }
    })

    pool.query(queries.addStudent, [name, email, gender, birth],(error, result) => {
        if(error) throw error;
        res.status(200).json('Student Created Successfully...');
    })
}

const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id] , (error, result) => {
        const studentNotFound = !result.rows.length;
        if(studentNotFound){
            res.send('Student doesnt exist in the database...')
        }  
    })

    pool.query(queries.deleteStudent, [id] , (error, result) => {
        if(error) throw error;
        res.status(200).json('Student Deleted Successfully...');
    })
}
const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    pool.query(queries.getStudentById, [id] , (error, result) => {
        const studentNotFound = !result.rows.length;
        if(studentNotFound){
            res.send('Student doesnt exist in the database...')
        }  
        pool.query(queries.updateStudent, [name,email, id], (error, result) => {
            if(error) throw error;
            res.status(200).json('Student updated Successfully...');
        })

    })   
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    deleteStudent,
    updateStudent
}