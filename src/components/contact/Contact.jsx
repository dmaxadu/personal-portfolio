import React from 'react';
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RiWhatsappFill} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c7bxwx4', 'template_h8njiat', form.current, 'hQwLF99E-XpLy9idU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Entre em</h5>
      <h2>Contato</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <a href="mailto:danielmc@dcc.ufrj.br"><article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>danielmc@dcc.ufrj.br</h5>
          </article></a>
          <a href="https://wa.me/5521980261134" target="_blank" rel='noreferrer'><article className="contact__option">
            <RiWhatsappFill className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Mandar Mensagem</h5>
          </article></a>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nome Completo' required/>
          <input type="email" name='email' placeholder='Seu e-mail' required/>
          <textarea name="message" rows="7"  placeholder='Digita aqui a sua mensagem' required></textarea>
          <div className="align__devices"><button type='submit' className='btn btn-primary' id='submit'>Enviar</button></div>
        </form>
      </div>
    </section>
  )
}

export default Contact