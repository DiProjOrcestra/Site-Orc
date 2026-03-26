import ImpactIndicators from "../src/components/ImpactIndicators"
import Parceiros from "../src/components/Parceiros"
import Popup from "../src/components/Popup"
import SecaoTelaInicial from "../src/components/SecaoTelaInicial"
import ContactForm from "./components/form"
import ProjectsGrid from "../src/components/ProjectsGrid"
import BlogList from "../src/pages/BlogList"
import Servicos from "../src/components/services"

function App() {
  return (
    <>
    <SecaoTelaInicial/>
    <ImpactIndicators/>
    <Servicos/>
    <ProjectsGrid/>
    <Parceiros/>
    <BlogList/>
    <Popup/>
    </>
  )
}

export default App;