import Header from '../components/Header';
import axios from 'axios';
import { useState } from 'react';
import { PiUserCirclePlus } from "react-icons/pi";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
const Cadastro = () => {
 const navigate = useNavigate();
 const[email, setEmail] = useState('');
 const[pass, setPass] = useState('');
 const[name, setName] = useState('');
 const[barraca,setBarraca] = useState('');
 const [error, setError] = useState('');

const handleCadastro = async (e) => {
    e.preventDefault();
    setError('');
    if (!name || !email || !pass || !barraca) {
      setError('Todos os campos são obrigatórios');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('E-mail inválido');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/auth/register', {
        nome: name,
        email,
        senha: pass,
        barraca,
      });
      alert('Cadastro realizado com sucesso!');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Erro no cadastro. Tente novamente.');
    }
  };

  return (
    <div className=" bg-slate-50 h-screen flex flex-col gap-1 md:gap-6">
      <Header />
        <main className="m-3 flex-1 flex flex-col items-center gap-5">
          <div className="flex flex-col items-center">
        <h1 className="  flex-wrap flex items-center text-4xl font-medium px-4 py-4 text-blue-950 gap-3"><PiUserCirclePlus size="35" strokeWidth={4}/>Faça seu cadastro</h1>
        <h2 className="text-blue-800 text-center flex-wrap text-lg">Já tem uma conta? <Link to="/login"><span className="border-b hover:text-blue-600">Entrar</span></Link></h2>
        </div>
        <form className="w-full md: md:max-w-md max-w-sm mx-auto" onSubmit={handleCadastro}>
          <fieldset className="w-full flex flex-col gap-3">
             <label className="text-xl flex flex-col gap-2">
               Nome <br/>
              <input 
              className="inset-shadow-xs hover:border-slate-200 focus:ring focus:outline-none focus:border-blue-600 bg-white py-4 lg:py-3 px-5 rounded border border-slate-300 text-slate-900 w-full"
              value = {name}
              type='text'
              placeholder='Seu nome completo'
              onChange={e=> setName(e.target.value)}
              />
            </label>

            <label className="text-xl flex flex-col gap-2">
               Barraca <br/>
              <input 
              className="inset-shadow-xs hover:border-slate-200 focus:ring focus:outline-none focus:border-blue-600 bg-white py-4 lg:py-3 px-5 rounded border border-slate-300 text-slate-900 w-full"
              value = {barraca}
              type='text'
              placeholder='Nome da sua barraca/quiosque'
              onChange={e=> setBarraca(e.target.value)}
              />
              
              
            </label>
            
            <label className="text-xl flex flex-col gap-2">
               E-mail: <br/>
              <input 
              className="inset-shadow-xs focus:ring focus:outline-none focus:border-blue-600 bg-white py-4 lg:py-3 px-5 rounded border border-slate-300 text-slate-900 w-full"
              value = {email}
              type='email'
              placeholder='Ex: email@hotmail.com'
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
            <div className="text-xl flex flex-col">
          <button className=" flex flex-col bg-orange-500 text-white py-4 lg:py-3 font-medium transition-color duration-300 hover:bg-orange-400 cursor-pointer w-full" type="submit">Cadastrar</button>
          </div>
          </fieldset>
        </form>
        </main>
    </div>
  );
};

export default Cadastro;