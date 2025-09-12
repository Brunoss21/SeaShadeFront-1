import Sidebar from "../components/Sidebar";
import HeaderLogged from "../components/HeaderLogged";
import { Link } from 'react-router-dom';
import Comanda from "../components/Comanda";
import Finalizados from "../components/Finalizados";
import { ChevronsRight, Funnel } from 'lucide-react';

const Pedidos = () => {
const link = "";
const quantidade = 150;    
    return(
        <div className="text-slate-600 flex h-screen">
            <Sidebar/>
            <div className="flex flex-col w-full pl-20 py-4 pr-4 md:pl-25 md:pr-9">
            <HeaderLogged/>
            <main className="flex h-full flex-col lg:flex-row gap-10">
                <div className="flex flex-col gap-5 w-full">
                    <h1 className="text-2xl md:text-3xl font-bold">Comandas em Andamento</h1>
                    <div className="w-full flex gap-5 overflow-x-auto scrollbar-hide">
                        <Comanda />
                        <Comanda />
                        <Comanda />
                        <Comanda />
                        <Comanda />
                        <Comanda />
                        <Comanda />
                        <Comanda />
                        <Comanda />
                    </div>
                    <div className="text-right flex justify-end">
                    <Link to="/todos-os-pedidos" className="flex items-center font-medium">Ver tudo <ChevronsRight size="17" /></Link>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between pt-5 gap-4">
                    <h2 className="text-2xl md:text-3xl font-bold">Finalizadas</h2>
                    <div className="flex-wrap flex gap-2 text-indigo-700 items-center justify-between bg-indigo-100 p-2 rounded-lg">
                    <p className="pl-2 flex items-center justify-center gap-2 font-medium"><Funnel size="15"/>Filtros</p>
                    <input type="text" className="rounded-full px-4 max-w-27 py-1 bg-slate-50" placeholder="Status"/>
                    <input type="date" className="rounded-full px-4 max-w-41 py-1 bg-slate-50" placeholder="Data"/>
                    <input type="time" className="rounded-full px-4 py-1 bg-slate-50" placeholder="Hora"/>
                    <button className="flex bg-indigo-700 text-slate-50 rounded-full py-1 px-6 w-full md:max-w-25 font-medium justify-center">Aplicar</button>
                    </div>
                    </div>
                    <div>
                        {/* Cabeçalho */}
                        <div className="w-full overflow-x-auto">
  <div className="min-w-[700px] flex flex-col">
    {/* Cabeçalho */}
    <div className="text-center flex bg-slate-800 text-slate-50 font-semibold text-sm md:text-lg py-2 rounded-t-lg w-full px-2">
      <p className="basis-2/6">Nº da Comanda</p>
      <p className="basis-2/6">Guarda-sol</p>
      <p className="basis-1/6">Status</p>
      <p className="basis-2/6">Data</p>
      <p className="basis-2/6">Horário</p>
    </div>

    {/* Conteúdo */}
    <Finalizados />
    <Finalizados />
    <Finalizados />
    <Finalizados />
    <Finalizados />
  </div>
</div>
                    </div>
                </div>
                
            </main>
        </div>
        </div>

    )
}
export default Pedidos;