import { webAPI } from "./webAPI";

export const cadastroServices = {
    async cadastrar(dados) {
        return await webAPI.get(dados);
    }
}