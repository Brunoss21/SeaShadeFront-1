import Sidebar from "../components/Sidebar"
import HeaderLogged from "../components/HeaderLogged"
import IconList from "../components/IconList"
import { Link } from 'react-router-dom';

const NovoPedido = () => {
const link = "";
const quantidade = 150;    
    return(
        <div className="text-slate-600 flex h-screen">
            <Sidebar/>
            <div className="flex flex-col w-full pl-20 py-4 pr-4 md:pl-25 md:pr-9">
            <HeaderLogged hasUndo link="/pedidos"></HeaderLogged>
            <main className="flex h-full flex-col lg:flex-row gap-10">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-bold">Abrir Pedido</h1>
                    <form>
                        <fieldset className="flex flex-2 flex-col gap-3 my-5">
                         <label>
                            <input
                            className="inset-shadow-sm focus:ring focus:outline-none focus:border-indigo-600 bg-white py-4 lg:py-3 px-5 rounded border border-slate-300 text-slate-900 w-full" 
                            type="text" 
                            name=""
                            placeholder="Atendente"/>
                         </label>

                         <label>
                            <input
                            className="inset-shadow-sm focus:ring focus:outline-none focus:border-indigo-600 bg-white py-4 lg:py-3 px-5 rounded border border-slate-300 text-slate-900 w-full" 
                            type="text" 
                            name=""
                            placeholder="Número do guarda-sol"/>
                         </label>

                            <label className="flex justify-between items-center text-lg">
                            Pedido rápido
                            <input type="checkbox" className="transform scale-123"/>
                         </label>

                         <label>
                            <textarea className="inset-shadow-sm focus:ring focus:outline-none focus:border-indigo-600 bg-white py-4 lg:py-3 px-5 rounded border border-slate-300 text-slate-900 w-full" rows="4" cols="50" placeholder="Observações"></textarea>
                         </label>

                            <button className="cursor-pointer shadow-sm bg-indigo-600 text-slate-50 font-medium rounded py-2">Criar comanda</button>
                        </fieldset>
                    </form>
                </div>
               <div className="flex flex-col gap-5 flex-1">
                    {/* Título */}
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-700">
                        Seus Guarda-sóis
                    </h2>

                    {/* Indicadores */}
                    <div className="flex flex-wrap gap-3">
                        <div className="bg-slate-50 rounded-lg px-3 py-1 shadow-sm text-slate-800 text-sm md:text-base">
                        Quantidade: {quantidade}
                        </div>
                        <div className="bg-green-100 rounded-lg px-3 py-1 shadow-sm text-green-800 text-sm md:text-base">
                        Disponíveis: {quantidade}
                        </div>
                        <div className="bg-red-100 rounded-lg px-3 py-1 shadow-sm text-red-800 text-sm md:text-base">
                        Ocupados: 0
                        </div>
                    </div>

                    {/* Lista de ícones */}
                    <div className="bg-slate-50 shadow rounded-lg md:p-4 p-2 max-h-80 overflow-y-auto">
                    <IconList quantidade={quantidade} />
                    </div>
                </div>
            </main>
        </div>
        </div>

    )
}
export default NovoPedido;