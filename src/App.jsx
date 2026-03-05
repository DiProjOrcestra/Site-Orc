import React from 'react';
import PageServicos from './pages/PageServicos';
import { SERVICOS } from './data/services'; // Importe seus dados

function App() {
  // Simulamos o que o useParams faria, pegando um serviço direto do objeto
  const servicoParaTeste = SERVICOS["desenvolvimento-gamificado"]; // Substitua pela chave do serviço que deseja testar

  return (
    <div className="App">
      {/* Ajustamos o componente para aceitar os dados diretamente via props 
          em vez de buscar pelo ID da URL
      */}
      <PageServicos DadosManuais={servicoParaTeste} />
    </div>
  );
}

export default App;