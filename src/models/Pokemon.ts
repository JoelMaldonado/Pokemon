import { Schema, model } from "mongoose";
import { Pokemon } from "../interfaces/pokemon.interface";

const PokemonSchema = new Schema<Pokemon>(
    {
        nombre: {
            type: String,
            required: true
        },
        elemento: {
            type: String,
            required: true
        },
        imagen: {
            type: String
        },
        genero: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const PokemonModel = model('Pokemon', PokemonSchema);

export default PokemonModel;