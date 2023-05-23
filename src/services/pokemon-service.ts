import { Pokemon } from "../interfaces/pokemon.interface";
import PokemonModel from "../models/Pokemon";

const getListPokemon = async () => {
    const response = await PokemonModel.find({});
    return response;
}

const insertPokemon = async (pokemon:Pokemon)=>{
    const response = await PokemonModel.create(pokemon);
    return response;
}

const deletePokemon = async(id:string)=>{
    const response = await PokemonModel.deleteOne({_id: id});
    return response;
};

export { getListPokemon, insertPokemon, deletePokemon };