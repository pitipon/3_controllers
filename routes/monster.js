import express from "express";

const router = express.Router();

// controllers
import {  getAll, getById, create, update, deleteById } from "../controllers/monster";


// localhost:8000/api/monsters
router.get('/monsters', getAll)

// localhost:8000/api/monsters/:id
router.get('/monsters/:id', getById)

// localhost:8000/api/monsters
router.post('/monsters', create)

// localhost:8000/api/monsters/:id
router.put('/monsters/:id', update)

// localhost:8000/api/monsters/:id
router.delete('/monsters/:id', deleteById)


module.exports = router;
