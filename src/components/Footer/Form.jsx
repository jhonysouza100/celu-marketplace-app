"use client"
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { RiSendPlaneLine } from '@remixicon/react';
import text from './footer.text';
import config from '@/config';
import { Toaster, toast } from "sonner";

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

  // console.log('form state:', JSON.stringify(watch(), null, 2)) // { "email": "123" }
  
  // console.log('email: ', watch('email')) // 123, una abreviacion de (e.target.value)

  // "errors" Se dispara con el evento "submit", e impide que este continue.
  // console.log('errors: ', errors) // {email: { message: 'INVALID_EMAIL' } }

  const sendEmail = async (data) => {
    try {
      const res = await fetch(`${config.EMAIL_BACKEND_URL}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
      });

      if (!res.ok) {
        const errorData = await res.json(); // Leer el cuerpo de la respuesta en formato JSON
        throw new Error(errorData.message); // Lanzar un error con el mensaje recibido del servidor
      }

      toast.success(`${text.emailSuccessText1} ${data.email}`);
      
    } catch (error) {
      
      toast.error(`Error: ${error.message}`);

    } finally {
      reset(); // Resetear el formulario después de enviar el formulario
    }
  }

  return (
    <form
    onSubmit={handleSubmit( (data) => sendEmail(data))}
      className="footer-form grid gap-y-4 mb-8 relative md:grid-cols-2 md:container-color md:p-1 md:rounded-full md:w-96"
      aria-label="Formulario de suscripción"
    >
      
      <input
        {...register("email")}
        id='email'
        type="text"
        className="footer-input border-none outline-none w-full py-5 px-5 rounded-full container-color"
        placeholder={text.emailText1}
        aria-label="Introduce tu dirección de correo electrónico"
        />
        
        {errors.email && <label className='footer-input-error text-red-600 text-xs absolute top-[-.75rem] right-6 translate-y-[-.5rem]' htmlFor='email'>{errors.email.message}</label>}

      <button type="submit" className="footer-button button cursor-pointer" aria-label="Enviar">
        <span>{text.buttonText1}</span>
        <RiSendPlaneLine className="main-color" />
      </button>

      <Toaster richColors />

    </form>
  )
}
