import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import text from './footer.text';
import { RiSendPlaneLine } from '@remixicon/react';

export default function Form() {

  // ZOD
  const validations = z.object({
    email: z.string().email({message: 'Ingresa un email valido'})
  })

  // REACT_HOOK_FORM
  const {register, handleSubmit, watch, formState: { errors }} = useForm({
    resolver: zodResolver(validations)
  })

  console.log(watch('email'))

  console.log(JSON.stringify(watch(), null, 2))

  console.log(errors)

  return (
    <form
      onSubmit={handleSubmit( data => console.log(data))}
      className="footer-form"
      aria-label="Formulario de suscripción"
    >
      <input
        {...register("email", { required: true })}
        type="text"
        className="footer-input"
        placeholder={text.emailText1}
        aria-label="Introduce tu dirección de correo electrónico"
      />

      {/* {errors.email && <span>This field is required</span>} */}

      <button className="footer-button button" aria-label="Enviar">
        <span>{text.buttonText1}</span>
        <RiSendPlaneLine className="button-icon" />
      </button>
    </form>
  );
}
