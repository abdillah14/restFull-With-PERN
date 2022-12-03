const { Router } = require('express');
const controler = require('./Controller')

const router = Router();

router.get('/', controler.getStudents)
router.get('/:id', controler.getStudentById)
router.post('/', controler.addStudent)
router.delete('/:id', controler.deleteStudent)
router.put('/:id', controler.updateStudent)







module.exports = router;