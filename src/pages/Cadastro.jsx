/*import Header from '../components/Header';
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
        <h1 className="flex-wrap flex items-center text-4xl font-medium px-4 py-4 text-blue-950 gap-3"><PiUserCirclePlus size="35" strokeWidth={4}/>Faça seu cadastro</h1>
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
*/

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PiUserCirclePlus } from "react-icons/pi";

const Cadastro = () => {
  const navigate = useNavigate();
  
  // Estados do formulário
  const [name, setName] = useState('');
  const [quiosque, setQuiosque] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState('');

  // Estados de controle da UI
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCadastro = async (e) => {
    e.preventDefault();
    setError('');

    // Validação de campos vazios
    if (!name || !email || !password || !quiosque || !confirmPassword) {
      setError('Todos os campos são obrigatórios');
      return;
    }
    // Validação de e-mail
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('E-mail inválido');
      return;
    }
    // ADICIONADO: Validação de confirmação de senha
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        name: name,
        email: email,
        password: password,
        quiosque: quiosque, 
      });
      
      console.log("Usuário cadastrado com sucesso:", response.data);

      navigate('/login', { state: { message: "Cadastro realizado com sucesso! Faça o login." } });

    } catch (err) {
      setError(err.response?.data?.message || 'Erro no cadastro. Verifique os dados e tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col gap-1 md:gap-6">
      <Header />
      <main className="m-3 flex-1 flex flex-col items-center gap-5">
        <div className="flex flex-col items-center">
          <h1 className="flex-wrap flex items-center text-4xl font-medium px-4 py-4 text-blue-950 gap-3">
            <PiUserCirclePlus size="35" strokeWidth={4} />Faça seu cadastro
          </h1>
          <h2 className="text-blue-800 text-center flex-wrap text-lg">
            Já tem uma conta? <Link to="/login"><span className="border-b hover:text-blue-600">Entrar</span></Link>
          </h2>
        </div>

        <form className="w-full md:max-w-md max-w-sm mx-auto" onSubmit={handleCadastro}>
          <fieldset className="w-full flex flex-col gap-3">
            {/* Inputs para nome, barraca e e-mail (sem alterações) */}
            <label className="text-xl flex flex-col gap-2">
              Nome
              <input className="..." value={name} onChange={e => setName(e.target.value)} type='text' placeholder='Seu nome completo' />
            </label>
            <label className="text-xl flex flex-col gap-2">
              Nome do estabelecimento
              <input className="..." value={quiosque} onChange={e => setQuiosque(e.target.value)} type='text' placeholder='Nome da sua barraca/quiosque' />
            </label>
            <label className="text-xl flex flex-col gap-2">
              E-mail
              <input className="..." value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='Ex: email@hotmail.com' />
            </label>

            {/* Inputs de Senha e Confirmação de Senha */}
            <label className="text-xl flex flex-col gap-2">
              Senha
              <input className="..." value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='••••••••••••' />
            </label>
            
            {/* ADICIONADO: Campo para confirmar a senha */}
            <label className="text-xl flex flex-col gap-2">
              Confirme sua Senha
              <input className="..." value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type='password' placeholder='••••••••••••' />
            </label>
            
            {error && (
              <p className="text-red-500 text-center bg-red-100 p-2 rounded-md">{error}</p>
            )}

            <div className="text-xl flex flex-col">
              <button 
                className="flex items-center justify-center bg-orange-500 text-white py-4 lg:py-3 font-medium transition-color duration-300 hover:bg-orange-400 cursor-pointer w-full disabled:bg-orange-300" 
                type="submit"
                disabled={loading}
              >
                {loading ? 'Cadastrando...' : 'Cadastrar'}
              </button>
            </div>
          </fieldset>
        </form>
      </main>
      <Footer /> 
    </div>
  );
};

export default Cadastro;