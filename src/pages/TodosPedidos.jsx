import Sidebar from "../components/Sidebar"
import HeaderLogged from "../components/HeaderLogged"
import Comanda from '../components/Comanda'
const TodosPedidos = () => {
    return (
        <div className="text-slate-600 flex h-screen">
            <div>
                <Sidebar />
            </div>
            <div className="flex flex-col w-full pl-20 py-4 pr-4 md:pl-25 md:pr-9">
                <HeaderLogged hasUndo link={'/pedidos'}/>
            
            <main className="flex h-full flex-col gap-5">
             <div>
                 <h1 className="text-2xl md:text-3xl font-bold">Pedidos em Andamento</h1>
             </div>

             {/* fazer conteudo pós h2 retratil*/}
             <h2 className="text-xl md:text-2xl font-bold">Aguardando Atendimento</h2>
             <div className="w-full flex gap-8 flex-wrap">
                <Comanda/>
                <Comanda/>
                <Comanda/>
                <Comanda/>
                <Comanda/>
             </div>
             
              {/* fazer conteudo pós h2 retratil*/}
             <h2 className="text-xl md:text-2xl font-bold">Atendidos</h2>
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