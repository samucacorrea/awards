import React from "react"; 
import Card from '../card/Card';
import { connect } from 'react-redux';

const Carrossel = ({ categoria, classCarrossel, votos }) => (

    <section>
        <div className={classCarrossel + " main-container-card "} id="carrossel" data-scroll="-16">
            {categoria.map(categoria => (<>

                <div key={categoria.id} className='container-card-carrossel'>
                    <h2 className='container-card-carrossel-h2'>{categoria.title}</h2>
                    <article className='desktop-cards'>
                        {categoria.atletas.map((atleta, index) => (
                            <Card nome={atleta.nome} key={atleta.id} data={index} title_category={categoria.title} id_atleta={atleta.id} dataVotos={votos} slug={categoria.slug} idEdicao={categoria.id} edicao={atleta.edicao} foto_1={atleta.imagem_1} foto_2={atleta.imagem_2} video={atleta.video} />
                        ))}
                    </article>
                </div>


            </>))}

        </div>

    </section>
);

export default connect(state => ({
    categoria: state.categorias,
    classCarrossel: state.classCarrossel,
    votos: state.votos,
}))(Carrossel);