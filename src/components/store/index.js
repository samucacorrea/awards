import { createStore } from "redux";

const INITIAL_STATE = {
    classCarrossel: '',
    classHeader: '',
    progress: 0,
    current_video: '',
    current_video_name: '',
    votos: [],
    categorias: [
        {
            id: 1,
            slug: 'fm',
            title: 'Melhor Finalização Masculina (3 indicados)',
            atletas: [
                { id: 1, nome: 'Dimitrius Souza', edicao: 'BJJSTARS IV', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/dimitrius.png', imagem_2: '', video: 'Xhap0kgprFs' },
                { id: 2, nome: 'Felipe Preguica', edicao: 'BJJSTARS VI', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/preguica.png', imagem_2: '', video: 'ccosa5JHs6c' },
                { id: 3, nome: 'Meyram Maquine', edicao: 'BJJSTARS VII', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/meyram.png', imagem_2: '', video: 'Vs9G4xgwokg' },
            ],
        },
        {
            id: 2,
            slug: 'ff',
            title: 'Melhor Finalização Feminina (3 indicadas)',
            atletas: [
                { id: 4, nome: 'Bia Basilio', edicao: 'BJJSTARS II', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/bia-basilio.png', imagem_2: '', video: 'YkC3GQyrlMc' },
                { id: 5, nome: 'Dyna Sena', edicao: 'BJJSTARS VI', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/dyna-sena.png', imagem_2: '', video: '04wsqU59oaQ' },
                { id: 6, nome: 'Thamara Ferreira', edicao: 'The New Star', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/thamara-ferreira.png', imagem_2: '', video: 'xdB-05SWaxI' },
            ],
        },
        {
            id: 3,
            slug: 'lm',
            title: 'Melhor Luta Masculina (3 indicados)',
            atletas: [

                { id: 7, nome: 'Lucas Gualberto x Leo Lara', edicao: 'The New Star', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/lucas-gualberto.png', imagem_2: 'https://smz.dev.br/awards/src/atletas/round/leo-lara.png', video: 'E-CbgQ2LT-o' },
                { id: 8, nome: 'Spirandelli x Henrique Ceconni', edicao: 'BJJSTARS VI', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/matheus-spirandelli.png', imagem_2: 'https://smz.dev.br/awards/src/atletas/round/henrique-ceconi.png', video: 'z9lrclSF_04' },
                { id: 9, nome: 'Gutemberg Pereira x Marcus Scooby', edicao: 'BJJSTARS VII', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/gutemberg-pereira.png', imagem_2: 'https://smz.dev.br/awards/src/atletas/round/marcus-scooby.png', video: 'jcKfynEpxp4' },
            ]
        },
        {
            id: 4,
            slug: 'lf',
            title: 'Melhor Luta Feminina (3 indicadas)',
            atletas: [
                { id: 10, nome: 'Ana Rodrigues x Bia Basilio', edicao: 'BJJSTARS III', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/ana-rodrigues.png', imagem_2: 'https://smz.dev.br/awards/src/atletas/round/bia-basilio.png', video: 'PaOVWJgbF9w' },
                { id: 11, nome: 'Bia Mesquita x Thamara Ferreira', edicao: 'BJJSTARS IV', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/bia-mesquita.png', imagem_2: 'https://smz.dev.br/awards/src/atletas/round/thamara-ferreira.png', video: 'QNeyZ_lEfcw' },
                { id: 12, nome: 'Izadora Cristina x Thamara Ferreira', edicao: 'The New Star', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/izadora-cristina.png', imagem_2: 'https://smz.dev.br/awards/src/atletas/round/thamara-ferreira.png', video: 'b2YryA3cico' },
            ]
        },
        {
            id: 5,
            slug: 'am',
            title: 'Melhor Atleta Masculino (3 indicados)',
            atletas: [
                { id: 13, nome: 'Felipe Preguiça', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/preguica.png', imagem_2: '', video: '' },
                { id: 14, nome: 'Leandro Lo', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/leandro-lo.png', imagem_2: '', video: '' },
                { id: 15, nome: 'Tainan Dalpra', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/tainan-dalpra.png', imagem_2: '', video: '' },
            ]
        },
        {
            id: 6,
            slug: 'af',
            title: 'Melhor Atleta Feminino (3 indicadas)',
            atletas: [
                { id: 16, nome: 'Anna Rodrigues', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/ana-rodrigues.png', imagem_2: '', video: '' },
                { id: 17, nome: 'Bia Mesquita', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/bia-mesquita.png', imagem_2: '', video: '' },
                { id: 18, nome: 'Izadora Cristina', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/izadora-cristina.png', imagem_2: '', video: '' },
            ]
        },
        {
            id: 7,
            slug: 'amm',
            title: 'Melhor Atleta Master (3 indicados)',
            atletas: [
                { id: 19, nome: 'Luis Marques', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/luis-marques.png', imagem_2: '', video: '' },
                { id: 20, nome: 'Gabriel Napão', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/gabriel-napao.png', imagem_2: '', video: '' },
                { id: 21, nome: 'Sérginho Moraes', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/serginho-moraes.png', imagem_2: '', video: '' },
            ]
        },
        {
            id: 8,
            slug: 'ma',
            title: 'Melhor Arbitro (5 indicados)',
            atletas: [
                { id: 22, nome: 'Alan Moraes', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/alan-moraes.png', imagem_2: '', video: '' },
                { id: 23, nome: 'Andre Bastos', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/andre-bastos.png', imagem_2: '', video: '' },
                { id: 24, nome: 'Gabriel Baby', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/gabriel-baby.png', imagem_2: '', video: '' },
                { id: 25, nome: 'Phelipe Spakauskas', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/pheliphe-spakauskas.png', imagem_2: '', video: '' },
                { id: 26, nome: 'Renato Panda', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/renato-panda.png', imagem_2: '', video: '' },
            ]
        },
        {
            id: 9,
            slug: 'cm',
            title: 'Melhor Comentarísta (3 indicados)',
            atletas: [
                { id: 27, nome: 'Carlão Barreto', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/carlao-barreto.png', imagem_2: '', video: '' },
                { id: 28, nome: 'Jaime da Luz', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/jaime-da-luz.png', imagem_2: '', video: '' },
                { id: 29, nome: 'Roman Laurito', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/roman-laurito.png', imagem_2: '', video: '' },
            ]
        },
        {
            id: 10,
            slug: 'cj',
            title: 'Melhor Coach (Jiu-Jitsu) (4 indicados)',
            atletas: [
                { id: 30, nome: 'Caio Almeida', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/caio-almeida.png', imagem_2: '', video: '' },
                { id: 31, nome: 'Fabio Gurgel', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/fabio-gurgel.png', imagem_2: '', video: '' },
                { id: 32, nome: 'Gabriel Figueiró', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/gabriel-figueiro.png', imagem_2: '', video: '' },
                { id: 33, nome: 'Julio César', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/julio-cesar.png', imagem_2: '', video: '' },
            ]
        },
        {
            id: 11,
            slug: 'cp',
            title: 'Melhor Coach (Preparação) (5 indicados)',
            atletas: [
                { id: 34, nome: 'Andre Macedo', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/adre-macedo.png', imagem_2: '', video: '' },
                { id: 35, nome: 'Bruno Sabirila', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/bruno-sabirila.png', imagem_2: '', video: '' },
                { id: 36, nome: 'Júlio Mariano', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/julio-mariano.png', imagem_2: '', video: '' },
                { id: 37, nome: 'Luis Bonini', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/luis-bonini.png', imagem_2: '', video: '' },
                { id: 38, nome: 'Rafael Ribeiro', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/rafael-ribeiro.png', imagem_2: '', video: '' },
            ]
        },
        {
            id: 12,
            slug: 've',
            title: 'Melhor Veiculo de Mídia (5 indicados)',
            atletas: [
                { id: 39, nome: 'BJJ Cria', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/bjj-cria.png', imagem_2: '', video: '' },
                { id: 43, nome: 'Canal Do Marinho', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/canal-do-marinho.png', imagem_2: '', video: '' },
                { id: 41, nome: 'Muito Mais Ação', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/muito-mais-acao.png', imagem_2: '', video: '' },
                { id: 42, nome: 'TATAME', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/tatame.png', imagem_2: '', video: '' },
                { id: 40, nome: 'VF Comunica', edicao: '2021', imagem_1: 'https://smz.dev.br/awards/src/atletas/round/vf-comunica.png', imagem_2: '', video: '' },
                
            ]
        },

    ]
};

function reducer(state = INITIAL_STATE, action) {

    //console.log(state);

    if (action.type === 'VOTE') {
        return {
            ...state,
            classCarrossel: action.classCarrossel,
            progress: action.progress,
            votos: [...state.votos, action.votos]
        }
    }
    if (action.type === 'SET_VIDEO') {
        return {
            ...state,
            current_video: action.current_video,
            current_video_name: action.current_video_name
        }
    }
    if (action.type === 'VOTE-LESS') {
        //console.log(action)
        return {
            ...state,
            classCarrossel: action.classCarrossel,
            progress: action.progress
        }
    }
    //console.log(state);
    return state;
}

const store = createStore(reducer);

export default store;
