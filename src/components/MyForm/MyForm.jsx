import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import './_styles.scss';
import RedButton from '../RedButton/RedButton';
import { getUsers } from '../../services/getUsers';

const MyForm = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [users, setUsers] = useState([]);
    const onSubmit = data => console.log(data);
    // console.log(watch("example")); // watch input value by passing the name of it
    // console.log(watch("exampleRequired"));
    useEffect(() => {
        let mounted = true;
        getUsers()
          .then(items => {
            if (mounted) setUsers(items)
          })
        return () => mounted = false;
      }, [])

    return(
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <ul>
                {users.map(item => <li key={item.name}>{item.name}</li>)}
            </ul>
            <input 
                type="number" 
                placeholder="Celular" 
                maxLength="9"
                {...register("number", { required: true, minLength: 9, maxLength: 9 })} 
            />

            <input 
                type="text" 
                placeholder="Placa" 
                {...register("badge", { required: true, minLength: 6, maxLength: 6 })} 
            />

            <div className="checkbox">
                <input id="acceptTerms" type="checkbox" placeholder="acceptTerms" {...register("acceptTerms", {required: true})} />
                <label htmlFor="acceptTerms">Acepto términos y condiciones</label>
            </div>
            
            {errors.badge && <span className='error-msg'>Ingrese una placa válida</span>}
            {errors.number && <span className='error-msg'>Ingrese un número telefónico válido.</span>}
            {errors.acceptTerms && <span className='error-msg'>Acepte los términos y condiciones</span>}
            

            <RedButton onClick={()=>{console.log('test')}} text="Cotízalo"></RedButton>
        </form>        
    )
}

export default MyForm;
