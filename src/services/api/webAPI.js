const API_PATH = "https://smz.dev.br/";

export const webAPI ={
    get (dados, requisicao) {
        return fetch(`${API_PATH}`, {
            method: 'POST',
            body: dados
        })
        .then(response => response.json());
    }
}