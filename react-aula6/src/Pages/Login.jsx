import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';

const Login = () => {
    return (
        <>
            <div className=' h-screen flex align-items-center justify-content-center px-3' style={{backgroundColor: 'var(--indigo-800)',}}>
                <form style={{backgroundColor: 'var(--gray-900)'}} className='col-12 md:col-3 p-3 border-round-md' >

                    <h3 style={{color: 'var(--indigo-100)'}}>Seja Bem-Vind@</h3>
                    <label htmlFor="email" className='block uppercase font-bold text sm' style={{color: 'var(--indigo-50)'}}>Email</label>
                    <InputText 
                        id='email' 
                        type='email' 
                        placeholder='email@email.com' 
                        className=' mb-3 w-full'
                    />
                    <label htmlFor="senha" className='block uppercase font-bold text sm' style={{color: 'var(--indigo-50)'}}>Senha</label>
                    <div className='mb-3'>
                        <IconField>
                            <InputIcon className="pi pi-eye"/>
                            <InputText 
                            id='senha'
                            type='senha' 
                            placeholder='*********'
                            className='w-full'/>
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