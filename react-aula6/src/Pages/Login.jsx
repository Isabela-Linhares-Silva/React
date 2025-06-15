import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
const Login = () => {
    const [mostrarSenha,setMostrarSenha]= useState (false);
    const {register,handleSubmit}= useForm();
    function logar(dados){
        console.log(dados)
    }
    return (
        <>
            <div className=' h-screen flex align-items-center justify-content-center px-3' style={{backgroundColor: 'var(--indigo-800)',}}>
                <form onSubmit={handleSubmit(logar)} style={{backgroundColor: 'var(--gray-900)'}} className='col-12 md:col-3 p-3 border-round-md' >

                    <h2 style={{color: 'var(--indigo-100)'}} className='text-center '>Seja Bem-Vind@</h2>
                    <label htmlFor="email" className='block uppercase font-bold text sm' style={{color: 'var(--indigo-50)'}}>Email</label>
                    <InputText 
                        id='email' 
                        type='email' 
                        placeholder='email@email.com' 
                        className=' mb-3 w-full'
                        {...register('email',{required:true})}
                    />
                    <label htmlFor="senha" className='block uppercase font-bold text sm' style={{color: 'var(--indigo-50)'}}>Senha</label>
                    <div className='mb-3'>
                        <IconField>
                            <InputIcon 
                            className={`pi ${mostrarSenha ? 'pi-eye' : 'pi-eye-slash'}`}
                            onClick={() => setMostrarSenha(!mostrarSenha)}
                            style={{ cursor: 'pointer' }}
                            />
                            <InputText 
                            id='senha'
                            type={mostrarSenha? 'text' : 'password'} 
                            placeholder='*********'
                            className='w-full'
                            {...register('senha',{required:true})}
                            />
                        </IconField>
                    </div>
                    <Button label="Entrar" 
                    type='submit' 
                    className='w-full'/>

                </form>
            </div>
        </>
    );
}
 
export default Login;