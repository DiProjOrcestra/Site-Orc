import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { SERVICOS } from '../data/services';
import Hero from '../pages/PageServicos/Hero';
import ComoFunciona from '../pages/PageServicos/ComoFunciona';
import Beneficios from '../pages/PageServicos/Beneficios';
import SobreInstitucional from '../pages/PageServicos/QuemSomos';
import Projetos from '../pages/PageServicos/Projetos';



const ServicePage = ({ DadosManuais }) => {
  const { id } = useParams();
  
  const dados = DadosManuais || SERVICOS[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!dados) {
    return (
      <div style={{ padding: '100px', textAlign: 'center', color: '#032100' }}>
        <h1>Serviço não encontrado!</h1>
      </div>
    );
  }

  return (
    <main className="service-page-wrapper">

      <Hero 
        name={dados.name}
        texto1={dados.texto1}
        texto2={dados.texto2}
        image={dados.imageHero}
        textButao={dados.textButao}
      />

      <ComoFunciona 
        titulo={dados.titulo}
        funcionamento={dados.funcionamento}
        passos={dados.passos}
      />

      <Beneficios 
        titulo={dados.tituloBeneficios}
        intro={dados.ajudaIntro}
        lista={dados.beneficios}
        textButao={dados.textButao}
      />

      <SobreInstitucional textButao={dados.textButao} />

      <Projetos 
        titulo={dados.tituloProjetos}
        lista={dados.projetos}
      />
    </main>
  );
};

export default ServicePage;