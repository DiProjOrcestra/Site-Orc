import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SERVICOS } from '../data/services';
import Hero from '../components/PageServicos/Hero';
import ComoFunciona from '../components/PageServicos/ComoFunciona';
import SecaoExtra from '../components/SecaoExtra'; 
import Beneficios from '../components/PageServicos/Beneficios';
import SobreInstitucional from '../components/SobreInstitucional';
import Projetos from '../components/Projetos';
import Contato from '../components/Contato';

const ServicePage = () => {
  
  const { id } = useParams();
  const dados = SERVICOS[id];

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  
  if (!dados) {
    return (
      <div style={{ padding: '100px', textAlign: 'center' }}>
        <h1>Serviço não encontrado!</h1>
        <p>Verifique a URL ou retorne à página inicial.</p>
      </div>
    );
  }

  return (
    <main className="service-page-wrapper">
    
      <Hero 
        name={dados.name}
        texto1={dados.texto1}
        texto2={dados.texto2}
        image={dados.image}
      />

      <ComoFunciona 
        titulo={dados.titulo}
        funcionamento={dados.funcionamento}
        passos={dados.passos}
      />

      {dados.secaoExtra && (
        <SecaoExtra 
          titulo={dados.secaoExtra.titulo}
          texto={dados.secaoExtra.texto}
          botao={dados.secaoExtra.botao}
        />
      )}

      <Beneficios 
        titulo={dados.tituloBeneficios}
        intro={dados.ajudaIntro}
        lista={dados.beneficios}
      />

      <SobreInstitucional />

      <Projetos 
        titulo={dados.tituloProjetos}
        lista={dados.projetos}
      />

      <Contato />
    </main>
  );
};

export default ServicePage;