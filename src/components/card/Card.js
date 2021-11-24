import React from "react"; 
import ReactGA from 'react-ga';
import './card-style.css';
import { connect, useDispatch } from 'react-redux';

ReactGA.initialize('UA-179078868-1',{debug: false});


const Card = function (props, current_video) {

    const dispatch = useDispatch();
    
    const votar = (edc, event) => {
        if(edc === 7 || edc === 9 ||edc === 10 || edc === 11){
            window.scrollTo({
                top: 590,
                left: 0,
                behavior: 'smooth'});
        }else{
            window.scrollTo({
                top: 400,
                left: 0,
                behavior: 'smooth'});
        }
        
        const marginClass = "margin_left_" + edc;
        if (edc === 12) {
            document.getElementById('lb').style = 'display:grid';
            document.getElementById('pre').style = 'display:grid';
        }
        ReactGA.event({
            category: props.title_category,
            action: event.target.value,
            value: event.target.value
        });
        return {
            type: 'VOTE',
            classCarrossel: marginClass,
            progress: edc,
            votos: { categoria: props.slug, voto: event.target.value }

        };

    }

    const openVideo = function (video, name) {
        document.getElementById('lb').style = 'display:grid';
        document.getElementById('video').style = 'display:grid';
        
        return {
            type: 'SET_VIDEO',
            current_video: video,
            current_video_name: name

        }

    }
    var hasVideo = ((props.video === '') ? 'display:none' : 'display:block');
    var hasVideoimg = ((props.video === '') ? 'top:-83%;' : '');
    var isDoubleImg = ((props.foto_2 == '') ? 'display:none !important' : '');
    var isDoubleImgSize = ((props.foto_2 == '') ? '80%' : '50%');
    

    const idEDC = props.idEdicao;
    return (
        <>
            
            <section className={'id_'+props.id_atleta+' card single'}>
            <section>
                <img src={props.foto_1} width={isDoubleImgSize} alt={props.nome} className="img_atleta" Style={hasVideoimg}/>
                <img src={props.foto_2} width='50%' alt={props.nome} className="img_atleta" Style={hasVideoimg+' '+isDoubleImg }/>
            </section>
                <div className='card-container'>
                    <div className='card-name'>
                        <h2>{props.nome}</h2>
                        <span>{props.edicao}</span>
                    </div>
                    <div className='card-detail'>
                        <div>
                            <button className='btn-assistir' Style={hasVideo} onClick={() => dispatch(openVideo(props.video, props.nome))}>Assistir</button>
                        </div>
                        <div>
                            <button className='btn-votar' value={props.nome} onClick={(event) => dispatch(votar(idEDC, event))}> Votar </button>
                        </div>
                        
                    </div>
                </div>
                
            </section>
        </>
    );
}

export default connect(state => ({ current_video: state.current_video }))(Card)