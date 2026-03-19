import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { SERVICOS } from '../data/services';
import Hero from '../components/PageServicos/Hero';
import ComoFunciona from '../components/PageServicos/ComoFunciona';
import Beneficios from '../components/PageServicos/Beneficios';
import SobreInstitucional from '../components/PageServicos/QuemSomos';
import Projetos from '../components/PageServicos/Projetos';
import ContactForm from '../form';


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
      <ContactForm/>
    </main>
  );
};

export default ServicePage;