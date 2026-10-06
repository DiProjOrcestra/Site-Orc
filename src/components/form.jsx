import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import '../css/form.css';
import logoOrc from '../assets/Group-27.svg';


const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: "onSubmit",
  });


  const sendEmail = (pessoa) => {
    const templateParams = {
      nome: pessoa.nome,
      email: pessoa.email,
      cargo: pessoa.cargo,
      origem: pessoa.origem,
      telefone: pessoa.telefone,
      mensagem: pessoa.mensagem,
    };

    emailjs.send("service_zlb3che", "template_dxdnhd1", templateParams, "8jSEifL5olFHjXCeJ")
      .then((response) => {
        console.log("E-mail enviado com sucesso!", response.status, response.text);
        /* mandar para a página de agradecimento que ainda não foi feita */
        alert("Obrigado! Agradecemos o interesse e não se preocupe que em breve entraremos em contato!");
        reset();
      },(error) => {
        console.error("Erro ao enviar o e-mail:", error);
        alert("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.");
      });
  };


  

  return (
    <footer className="form-container-main" id="forms">
      <div className="form-header">
        <div className="img-div">
          <img src={logoOrc} alt="Logo" className="form-logo" />
        </div>
        <div>
          <h2 className="h2">Tem um desafio que pode virar um produto digital?</h2>
          <p className="p">Conte para a gente o que você precisa. Nosso primeiro passo é compreender o problema, o contexto e os objetivos antes de pensar na tecnologia.</p>
        </div>
      </div>


      <form onSubmit={handleSubmit(sendEmail)} className="react-form-styled">

        {Object.keys(errors).length > 0 && (
          <div className="form-error-style">
            Ocorreu um problema com o seu formulário. Erros marcados abaixo.
          </div>
        )}

        <div className="fields-grid">
          <div className="field-group width-50">
            <label>Nome <span>*</span></label>
            <input
              {...register("nome", { required: "Esse campo é obrigatório.", validate: (value) => value.trim().split(" ").length >= 2 || "Preencha nome e sobrenome", maxLength: {value: 100, message: "O nome deve conter no máximo 100 caracteres."} })}
              placeholder="Nome"
              className={errors.nome ? "field-error" : ""}
            />
            {errors.nome && <span className="error-msg">{errors.nome.message}</span>}
          </div>


          <div className="field-group width-50">
            <label>E-mail <span>*</span></label>
            <input
              type="email"
              {...register("email", { required: "Esse campo é obrigatório.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Por favor, insira um e-mail válido."
                }, maxLength: {value: 250, message: "O e-mail deve conter no máximo 250 caracteres."} 
              })}
              placeholder="E-mail"
              className={errors.email ? "field-error" : ""}
            />
            {errors.email && <span className="error-msg">{errors.email.message}</span>}
          </div>


          <div className="field-group width-33">
            <label>Cargo <span>*</span></label>
            <select 
              {...register("cargo", { required: "Esse campo não pode estar em branco." })}
              className={errors.cargo ? "field-error" : "select-styled"}
            >
              <option value="">Seu cargo</option>
              <option value="CEO/Sócio/Diretor">CEO/Sócio/Diretor</option>
              <option value="Gerente/Coordenador">Gerente/Coordenador</option>
              <option value="Analista">Analista</option>
              <option value="Professor/Área da educação">Professor/Área da educação</option>
              <option value="Estudante/Estagiário">Estudante/Estagiário</option>
              <option value="Outro cargo">Outro cargo</option>
            </select>
            {errors.cargo && <span className="error-msg">{errors.cargo.message}</span>}
          </div>


          <div className="field-group width-33">
            <label>Como você conheceu a Orc’estra?</label>
            <select {...register("origem")} className={errors.origem ? "field-error" : "select-styled"}>
              <option value="">...</option>
              <option value="Anúncios do Google">Anúncios do Google</option>
              <option value="Mídias Sociais">Mídias Sociais (Instagram, Facebook, Linkedin)</option>
              <option value="Indicação">Indicação</option>
              <option value="Eventos">Eventos</option>
              <option value="Outros">Outros</option>
            </select>
            {errors.origem && <span className="error-msg">{errors.origem.message}</span>}
          </div>


          <div className="field-group width-33">
            <label>Telefone <span>*</span></label>
            <input
              type="tel"
              {...register("telefone", { required: "Esse campo é obrigatório.", onChange: (e) => {
                const value = e.target.value.replace(/\D/g, "");
                e.target.value = value;
              },
                  pattern: {
                    value: /^\d{10,11}$/,
                    message: "Insira o DDD seguido do número, sem espaços ou caracteres especiais. Ex: 11987654321"
                  }, maxLength: {value: 11, message: "O telefone deve conter no máximo 11 dígitos."}
              })}
              placeholder="Telefone"
              className={errors.telefone ? "field-error" : ""}
            />
            {errors.telefone && <span className="error-msg">{errors.telefone.message}</span>}
          </div>


          <div className="field-group width-100">
            <label>Conte um pouco sobre o seu desafio <span>*</span></label>
            <textarea
              {...register("mensagem", { required: "Esse campo não pode estar em branco.", maxLength: {value: 1000 , message: "A mensagem não pode exceder 1000 caracteres."} })}
              placeholder="Mensagem"
              className={errors.mensagem ? "field-error" : ""}
            />
            {errors.mensagem && <span className="error-msg">{errors.mensagem.message}</span>}
          </div>

        </div>
        <div className="submit-container">
          <button type="submit" className="btn-submit">Enviar mensagem</button>
        </div>
      </form>
    </footer>
  );
};

export default ContactForm;