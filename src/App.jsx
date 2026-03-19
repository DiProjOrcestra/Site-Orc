import ImpactIndicators from "./ImpactIndicators"
import Parceiros from "./Parceiros"
import Popup from "./Popup"
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