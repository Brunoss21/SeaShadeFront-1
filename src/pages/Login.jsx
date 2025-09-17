import Header from '../components/Header';
import axios from "axios";
import { useState } from 'react';
import { PiUserCircle } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Login = () => {
  //const navigate = useNavigate();
 const[email, setEmail] = useState('');
 const[pass, setPass] = useState('')
 const [error, setError] = useState('');

const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !pass) {
      setError('Preencha todos os campos');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('E-mail inválido');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        email,
        password: pass,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate('/novo-pedido');
    } catch (err) {
      setError(err.response?.data?.message || 'Email ou senha inválidos');
    }
  };
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col gap-1 md:gap-6">
      <Header />
        <main className="m-3 flex-1 flex flex-col items-center gap-5">
          <div className="flex flex-col items-center">
        <h1 className="  flex-wrap flex items-center text-4xl font-medium px-4 py-4 text-blue-950 gap-3"><PiUserCircle size="35" strokeWidth={4}/>Entre na sua conta</h1>
       <h2 className="text-blue-800 text-center flex-wrap text-lg">Novo por aqui? <Link to="/cadastro"><span className="border-b hover:text-blue-600">Cadastre-se</span></Link></h2>
        </div>
        <form className="w-full md: md:max-w-md max-w-sm mx-auto" onSubmit={handleLogin}>
          <fieldset className="w-full flex flex-col gap-3">
            <label className="text-xl flex flex-col gap-2">
               E-mail: <br/>
              <input 
              className="inset-shadow-xs focus:ring focus:outline-none focus:border-blue-600 bg-white py-4 lg:py-3 px-5 rounded border border-slate-300 text-slate-900 w-full"
              value = {email}
              type='email'
              placeholder='ex: email@hotmail.com'
              onChange={e=> setEmail(e.target.value)}
              />
            </label>

            <label className="text-xl flex flex-col gap-2">
              Senha:
              <input 
              className="inset-shadow-xs focus:ring focus:outline-none focus:border-blue-600 bg-white py-4 lg:py-3 px-5 rounded border border-slate-300 text-slate-900 w-full"
              value={pass}
              type='password'
              placeholder='••••••••••••'
              onChange={e=> setPass(e.target.value)}
              />
            </label>
            <div className="text-xl flex flex-col gap-1">
          <button className="flex flex-col bg-orange-500 text-white py-4 lg:py-3 font-medium transition-color duration-300 hover:bg-orange-400 cursor-pointer w-full" type="submit">Entrar</button>
          <button className=" text-orange-500 py-3 cursor-pointer w-full hover:text-orange-400" type="submit">Esqueci minha senha</button>
          </div>
          </fieldset>
        </form>
        </main>
    </div>
  );
};

export default Login;