import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import NovoPedido from './pages/NovoPedido';
import Cardapio from './pages/Cardapio';
import Comandas from './pages/Comandas';
import ComandasMore from './pages/ComandasMore';
import CriarComanda from './pages/CriarComanda';
import Estoque from './pages/Estoque'
import Producao from './pages/Producao'
import Inicio from './pages/Inicio'
import Relatorios from './pages/Relatorios'
import Ajuda from './pages/Ajuda'
import Funcionarios from './pages/Config'
import ContaConfig from './pages/ContaConfig'
import GerenciarGuardaSois from './pages/GerenciarGuardaSois';
import AlterarSenha from './pages/AlterarSenha'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
const App = () => {
  return (
    
     
      <Routes>
        {/* Rotas Públicas */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/contato' element={<Contato />} />



        {/* Rotas Protegidas */}
        <Route path='/novo-pedido' element={  <NovoPedido />  } />
        <Route path='/cardapio' element={ <Cardapio /> } />
        <Route path='/comandas' element={<Comandas />} />
        <Route path='/estoque' element={ <Estoque /> } />
        <Route path='/modo-producao' element={<Producao />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/relatorios' element={<Relatorios />} />
        <Route path='/ajuda' element={<Ajuda />} />
        <Route path='/funcionarios' element={<Funcionarios />} />
        <Route path='/conta' element={<ContaConfig />} />
        <Route path='/conta/mudar-senha' element={<AlterarSenha />} />
        <Route path='/config/guardasois' element={<GerenciarGuardaSois />} />

        {/* essa rota existe apenas para teste */}
        <Route path='/comandas/more' element={<ComandasMore />}/>
        {/* essa rota existe apenas para teste */}
        <Route path='/comanda1' element={<CriarComanda />}/>

      </Routes>
    
    
  )
}

export default App

