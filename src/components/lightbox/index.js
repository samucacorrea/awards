
import React from "react";
import { connect } from "react-redux";
import './lighbox-style.css'
import { cadastroServices } from "../../services/api/cadastroServices";

const Lightbox = function ({ votos, current_video, current_video_name }) {
    const subimit = async (event) => {
        
        event.preventDefault();
        let a = document.getElementById('form');
        let b = document.getElementById('mail');
        //console.log(a);
        //console.log(a);
        var data = new FormData(a);
        data.append('service', 3);
        //for(var pair of data.entries()){
        //    console.log(pair[0]+ ', ' + pair[1]);
        //}
        var resposta = await cadastroServices.cadastrar(data);
        //console.log(resposta);
        if (resposta.server_status === 200) {
            document.getElementById('pre').style = 'display:none';
            document.getElementById('pos').style = 'display:grid';
        }
        //window.location="/";

    }
    const closeLB = function () {
        document.getElementById('lb').style = 'display:none';
        document.getElementById('pre').style = 'display:none';
        document.getElementById('pos').style = 'display:none';
        document.getElementById('video').style = 'display:none';
    }


    return (<div className="lighbox-bg" id='lb'>
            <div className='btn-fechar' onClick={() => closeLB()}> [ FECHAR ]</div>
        <section className="lighbox-container" id='pre'>
            <form name="form" id="form">
                <label>
                    <h2> Estamos quase lá, coloque seu nome e um email válido</h2>

                </label>
                <label>
                    <input type="text" name="nome" placeholder="insira seu nome completo" required />
                </label>
                <label>
                    <input type="email" name="email" placeholder="Insira um email válido" required  id='mail'/>
                </label>
                <label>
                    {votos.map((votos, index) => (
                        <input type="hidden" name={votos.categoria} value={votos.voto} key={index} />
                    ))}

                </label>
                <label>
                    <input type="submit" name="enviar" value="Votar" onClick={(event) => subimit(event)} />
                </label>
                <label>
                    <p><span>ATENÇÃO</span></p>
                    <p>voce precisará confirmar o email para que seu voto seja contabilizado, <strong>ATENÇÃO</strong> o email pode cair no seu <strong>SPAM ou LIXO Eletronico</strong>, certifique-se disso.
                        Após colocar em "votar", você receberá um email de (service@smz.dev.br) com um link para validação do seu voto.</p>
                </label>
            </form>
        </section>
        <section className='lighbox-container-check' id='pos'>
            <h3>Muito Obrigado</h3>
            <p>O seu voto conta muito, para finalizar e validar seu voto, vá até seu email e procure por BJJSTARS AWARDS, você irá encontrar um email com o link de confirmação, <strong>ARENÇÃO</strong>, O e-mail pode ter ido para sua caixa de "SPAM" ou "LIXO ETRONICO", quando localizar basta copiar o link e esperar a página carregar, assim que confirmado, seu voto será computado com sucesso OSS</p>
            <a href="/awards"> Clique aqui para votar novamente</a>
        </section>
        <section className='lighbox-container-video' id='video'>
            <h3> {current_video_name} </h3>
            <iframe src={"https://www.youtube.com/embed/"+current_video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
    </div>
    )
}

export default connect(state => ({ votos: state.votos, current_video: state.current_video, current_video_name: state.current_video_name }))(Lightbox)