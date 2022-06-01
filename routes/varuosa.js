import express, { Router } from "express";
import { getVaruosad, createVaruosad, deleteVaruosa, getOneVaruosa, updateVaruosad } from "../controllers/varuosa.js";
const router = express.Router()


router.get('/varuosad', getVaruosad)

router.post('/varuosad', createVaruosad)
    

router.get('/varuosad/:Model', getOneVaruosa)

router.delete('/varuosad/:Model', deleteVaruosa)

router.put('/varuosad/:Model', updateVaruosad )
export default router