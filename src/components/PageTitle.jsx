import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles = {
  "/": "Início | Orc'estra",
  "/portfolio": "Portfólio | Orc'estra",
  "/contato": "Contato | Orc'estra",
  "/quem-somos": "Quem Somos | Orc'estra",
  "/blog": "Blog | Orc'estra",
  "/hakuna": "Hakuna | Orc'estra",
  "/fitflow": "FitFlow | Orc'estra",
  "/allegro": "Allegro | Orc'estra",
  "/edwiges": "Edwiges | Orc'estra",
  "/nutrir": "Nutrir | Orc'estra",
  "/four-seasons": "Four Seasons | Orc'estra",
  "/adote-post": "Adote Post | Orc'estra",
  "/camaro-amarelo": "Camaro Amarelo | Orc'estra",
  "/meninos-porteira": "Meninos Porteira | Orc'estra",
  "/ect2016": "ECT 2016 | Orc'estra",
  "/elas-projetam": "Elas Projetam | Orc'estra",
  "/meteoro-pegasus": "Meteoro Pegasus | Orc'estra",
  "/moonlight": "Moonlight | Orc'estra",
  "/gloria": "Gloria | Orc'estra",
  "/servicos/concepção-de-software" : "Concepção de software | Orc'estra",
  "/servicos/design-de-gamificacao" : "Design Gamificado | Orc'estra",
  "/servicos/desenvolvimento-gamificado" : "Desenvolvimento Gamificado | Orc'estra",
  "/servicos/consultoria-gamificada" : "Consultoria Gamificada | Orc'estra",
  "/servicos/treinamento-gamificado" : "Treinamento Gamificado | Orc'estra"
};

export default function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = titles[pathname] || "Orc'estra";
  }, [pathname]);

  return null;
}
