import Sidebar from "../components/Sidebar"
import HeaderLogged from "../components/HeaderLogged"
import Comanda from '../components/Comanda'
import {Clock,  ClipboardPenLine} from 'lucide-react'
const TodosPedidos = () => {
    return (
        <div className="text-slate-600 flex h-screen">
            <div>
                <Sidebar />
            </div>
            <div className="flex flex-col w-full pl-20 py-4 pr-4 md:pl-25 md:pr-9">
                <HeaderLogged hasUndo link={'/comandas'}/>
            
            <main className="flex h-full flex-col gap-5">

             {/* fazer conteudo pós h2 retratil*/}
             <h2 className="text-xl md:text-2xl font-bold flex gap-2 text-orange-600 items-center"><Clock size="20" strokeWidth={3}/> Aguardando pedido</h2>
             <div className="w-full flex gap-8 flex-wrap">
                <Comanda/>
                <Comanda/>
                <Comanda/>
                <Comanda/>
                <Comanda/>
             </div>
             
              {/* fazer conteudo pós h2 retratil*/}
             <h2 className="text-xl md:text-2xl font-bold flex gap-2 text-blue-600 items-center mt-10">< ClipboardPenLine size="20" strokeWidth={3}/>Atendimento em aberto</h2>
             <div className="w-full flex gap-8 flex-wrap">
             <Comanda/>
                <Comanda/>
                <Comanda/>
                <Comanda/>
                <Comanda/>
                <Comanda/>
                <Comanda/>
                <Comanda/>
                </div>
            </main>
            </div>
        </div>
    )
}

export default TodosPedidos;