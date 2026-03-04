import {useForm} from "react-hook-form";
import './form.css';


const ContactForm = () => {
  const { register, handleSubmit, reset} = useForm();

  const onSubmit = (pessoa) => {
    console.log(pessoa);
    reset();
  };

  return (
    <footer className="form-container-main" id="forms">
      <div className="form-header">
        <div className="img-div">
            <img src="https://orcestra.com.br/wp-content/uploads/2023/05/Group-27.svg" alt="Logo" className="form-logo"/>
        </div>
        <div>
          <h2 className="h2">Vamos conversar?</h2>
          <p className="p">Entre em contato com o nosso time para que juntos possamos encontrar a solução mais adequada para você!</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="react-form-styled">
        <div className="fields-grid">
          <div className="field-group width-50">
            <label>Qual o seu nome? <span>*</span></label>
            <input 
              {...register("nome", { required: "Esse campo é obrigatório." })} 
              placeholder="Nome"
            />
          </div>

          
          <div className="field-group width-50">
            <label>Qual seu melhor e-mail? <span>*</span></label>
            <input 
              type="email"
              {...register("email", { required: "Esse campo é obrigatório."})} 
              placeholder="E-mail"
            />
          </div>

        
          <div className="field-group width-33">
            <label>Qual o seu cargo? <span>*</span></label>
            <select 
              {...register("cargo", { required: "Esse campo não pode estar em branco." })}
            >
              <option value="">Seu cargo</option>
              <option value="CEO/Sócio/Diretor">CEO/Sócio/Diretor</option>
              <option value="Gerente/Coordenador">Gerente/Coordenador</option>
              <option value="Analista">Analista</option>
              <option value="Professor/Área da educação">Professor/Área da educação</option>
              <option value="Estudante/Estagiário">Estudante/Estagiário</option>
              <option value="Outro cargo">Outro cargo</option>
            </select>
          </div>

         
          <div className="field-group width-33">
            <label>Por onde nos conheceu?</label>
            <select {...register("origem")}>
              <option value="">...</option>
              <option value="Anúncios do Google">Anúncios do Google</option>
              <option value="Mídias Sociais">Mídias Sociais (Instagram, Facebook, Linkedin)</option>
              <option value="Indicação">Indicação</option>
              <option value="Eventos">Eventos</option>
              <option value="Outros">Outros</option>
            </select>
          </div>

          
          <div className="field-group width-33">
            <label>Qual seu telefone? <span>*</span></label>
            <input 
              type="tel"
              {...register("telefone", { required: "Esse campo é obrigatório."})} 
              placeholder="Telefone"
            />
          </div>

         
          <div className="field-group width-100">
              <label>Nos conte um pouco sobre sua necessidade <span>*</span></label>
                <textarea 
                  {...register("mensagem", { required: "Esse campo não pode estar em branco." })} 
                  placeholder="Mensagem"/>
          </div>

        </div>
          <div className="submit-container">
              <button type="submit" className="btn-submit">Enviar</button>
          </div>
      </form>
    </footer>
  );
};

export default ContactForm;