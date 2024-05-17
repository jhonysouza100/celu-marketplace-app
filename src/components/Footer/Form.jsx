import { useForm } from 'react-hook-form';
import { useMemo } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { RiSendPlaneLine } from '@remixicon/react';
import text from './footer.text';

export default function Form() {

  // ZOD
  const validations = z.object({
    email: z.string().email({message: `${text.emailErrorMessage}`})
  })

  // REACT_HOOK_FORM
  const {register, handleSubmit, watch, formState: { errors }, reset } = useForm({
    resolver: zodResolver(validations),
    mode: 'onBlur'
  })

  console.log('form state:', JSON.stringify(watch(), null, 2)) // { "email": "123" }
  
  console.log('email: ', watch('email')) // 123, una abreviacion de (e.target.value)

  // "errors" Se dispara con el evento "submit", e impide que este continue.
  console.log('errors: ', errors) // {email: { message: 'INVALID_EMAIL' } }

  const sendEmail = async (data) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_EMAIL_BACKEND_URL}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
      });

      if (!res.ok) {
        const errorData = await res.json(); // Leer el cuerpo de la respuesta en formato JSON
        throw new Error(errorData.message); // Lanzar un error con el mensaje recibido del servidor
      }
  
    } catch (error) {
      console.error(error.message);
    } finally {
      reset(); // Resetear el formulario después de enviar el formulario
    }
  }

  return (
    <form
    onSubmit={handleSubmit( (data) => sendEmail(data))}
      className="footer-form"
      aria-label="Formulario de suscripción"
    >
      <input
        {...register("email")}
        type="text"
        className="footer-input"
        placeholder={text.emailText1}
        aria-label="Introduce tu dirección de correo electrónico"
      />

      {errors.email && <span>{errors.email.message}</span>}

      <button type="submit" className="footer-button button" aria-label="Enviar">
        <span>{text.buttonText1}</span>
        <RiSendPlaneLine className="button-icon" />
      </button>
    </form>
  )
}
