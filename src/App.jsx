import ImpactIndicators from "./ImpactIndicators"
import Parceiros from "./Parceiros"
import SecaoTelaInicial from "./components/SecaoTelaInicial"
import ContactForm from "./form"
import ProjectsGrid from "./components/ProjectsGrid"
import BlogList from "./BlogList"
import Servicos from "./components/services"

function App() {
  return (
    <>
    <SecaoTelaInicial/>
    <ImpactIndicators/>
    <Servicos/>
    <ProjectsGrid/>
    <Parceiros/>
    <BlogList/>
    <ContactForm/>
    </>
  )
}

export default App;