import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { deletePokemon, getListPokemon, insertPokemon } from "../services/pokemon-service";
import { Wrapper } from "../interfaces/wrapper";


const getListPokemonController = async (req: Request, res: Response) => {
    try {
        const response = await getListPokemon();
        const wraper: Wrapper = {
            isSuccess: true,
            mensaje: "",
            data: response
        }
        res.send(wraper);
    } catch (e) {
        handleHttp(res, "Error al obtener pokemones" + e)
    }
};

const insertPokemonController = async ({ body }: Request, res: Response) => {
    try {
        const response = await insertPokemon(body);
        const wraper: Wrapper = {
            isSuccess: true,
            mensaje: "",
            data: response
        }
        res.send(wraper);
    } catch (e) {
        handleHttp(res, "No se pudo insertar el pokemon")
    }
};

const deletePokemonController = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deletePokemon(id);
        const wraper: Wrapper = {
            isSuccess: true,
            mensaje: "",
            data: response
        }
        res.send(wraper);
    } catch (e) {
        handleHttp(res, "No se pudo eliminar")
    }
}

export { getListPokemonController, insertPokemonController, deletePokemonController };

