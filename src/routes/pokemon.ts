import { Router, Request, Response } from "express";
import { deletePokemonController, getListPokemonController, insertPokemonController } from "../controllers/pokemon-controller";


const router = Router();

router.get('/listado', getListPokemonController);
router.post('/insertar', insertPokemonController);
router.delete('/:id', deletePokemonController);

export { router };