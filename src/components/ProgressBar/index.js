import React from "react";
import { connect, useDispatch } from 'react-redux';
import './progress-style.css';

const ProgressBar = function ({ progress, votos, classCarrossel }) {
    //console.log(votos);
    //{const progress = progress / 12 *100;}
    const dispatch = useDispatch();
    const voltar =() =>{
        const lastProgress = progress - 1;
        //console.log(classCarrossel);
        //console.log(progress);
        var marginClass = "margin_left_" + lastProgress;
        return {
            type: 'VOTE-LESS',
            classCarrossel: marginClass,
            progress: lastProgress
        }
    }
    return (<>
        <section className="container-progress-bar" id='container-progress-bar'>
            
            <div id="progress-bar">
                <div id="bar" Style={'width:' + progress / 12 * 100 + '%'}>
                    {parseInt(progress / 12 * 100)}%
                </div>
            </div>
            <div className='voltar'>
                <div className='voltar_btn' onClick={()=> dispatch(voltar())}> VOLTAR </div>
            </div>
        </section>
    </>)

}

export default connect(state => ({
    progress: state.progress,
    votos: state.votos,
    classCarrossel: state.classCarrossel,
}))(ProgressBar);