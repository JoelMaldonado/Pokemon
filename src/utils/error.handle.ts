import { Response } from "express";
import { Wrapper } from "../interfaces/wrapper";

const handleHttp = (res: Response, mensaje: string, errorRaw?: any) => {
    console.log(errorRaw);
    const wrapper: Wrapper = {
        isSuccess: false,
        mensaje: mensaje,
        data: []
    }
    res.status(500)
    res.send(wrapper);
}

export { handleHttp };