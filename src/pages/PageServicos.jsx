import React, { useEffect } from 'react';
import { SERVICOS } from '../data/services';
import Hero from '../components/PageServicos/Hero';
import ComoFunciona from '../components/PageServicos/ComoFunciona';
import Beneficios from '../components/PageServicos/Beneficios';
import SobreInstitucional from '../components/PageServicos/QuemSomos';
import Projetos from '../components/PageServicos/Projetos';


const ServicePage = ({ DadosManuais }) => {
  
  // CORREÇÃO: Remova a referência ao 'id', use apenas o que vem da Prop
  const dados = DadosManuais;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!dados) {
    return (
      <div style={{ padding: '100px', textAlign: 'center' }}>
        <h1>Aguardando dados de teste...</h1>
        <p>Certifique-se de que o App.jsx está passando o serviço corretamente.</p>
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
      />

      <SobreInstitucional />

      <Projetos 
        titulo={dados.tituloProjetos}
        lista={dados.projetos}
      />

      
    </main>
  );
};

export default ServicePage;