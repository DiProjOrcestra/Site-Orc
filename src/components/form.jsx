import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import '../css/form.css';

// Forma mais confiável para importar assets no Vite
const logoImg = new URL('../assets/Group-27.svg', import.meta.url).href;

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
        alert("Obrigado! Agradecemos o interesse e não se preocupe que em breve entraremos em contato!");
        reset();
      }, (error) => {
        console.error("Erro ao enviar o e-mail:", error);
        alert("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.");
      });
  };

  return (
    <footer className="form-container-main" id="forms">
      <div className="form-header">
        <div className="img-div">
          <img 
            src={logoImg} 
            alt="Logo Orc'estra" 
            className="form-logo" 
          />
        </div>
        <div>
          <h2 className="h2">Vamos conversar?</h2>
          <p className="p">Entre em contato com o nosso time para que juntos possamos encontrar a solução mais adequada para você!</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(sendEmail)} className="react-form-styled">

        {Object.keys(errors).length > 0 && (
          <div className="form-error-style">
            Ocorreu um problema com o seu formulário. Erros marcados abaixo.
          </div>
        )}

        <div className="fields-grid">
          {/* ... todo o resto do formulário permanece igual ... */}
          <div className="field-group width-50">
            <label>Qual o seu nome? <span>*</span></label>
            <input
              {...register("nome", { 
                required: "Esse campo é obrigatório.", 
                validate: (value) => value.trim().split(" ").length >= 2 || "Preencha nome e sobrenome", 
                maxLength: { value: 100, message: "O nome deve conter no máximo 100 caracteres." }
              })}
              placeholder="Nome"
              className={errors.nome ? "field-error" : ""}
            />
            {errors.nome && <span className="error-msg">{errors.nome.message}</span>}
          </div>

          {/* Copie o resto dos campos exatamente como estava antes */}
          {/* ... (email, cargo, origem, telefone, mensagem) ... */}

          <div className="field-group width-100">
            <label>Nos conte um pouco sobre sua necessidade <span>*</span></label>
            <textarea
              {...register("mensagem", { 
                required: "Esse campo não pode estar em branco.", 
                maxLength: { value: 1000, message: "A mensagem não pode exceder 1000 caracteres." }
              })}
              placeholder="Mensagem"
              className={errors.mensagem ? "field-error" : ""}
            />
            {errors.mensagem && <span className="error-msg">{errors.mensagem.message}</span>}
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