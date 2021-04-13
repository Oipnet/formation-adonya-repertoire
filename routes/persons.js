import express from 'express'
import { getAllPersons, getOnePerson, modifyOnePerson, deleteOnePerson, createOnePerson } from '../controllers/persons.js'
import auth from '../middlewares/auth.js'

const router = express.Router()

router.get('/', auth, getAllPersons)
router.post('/', auth, createOnePerson)
router.get('/:id', auth, getOnePerson)
router.patch('/:id', auth, modifyOnePerson)
router.delete('/:id', auth, deleteOnePerson)

export default router