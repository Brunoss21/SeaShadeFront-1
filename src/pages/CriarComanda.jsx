import Sidebar from "../components/Sidebar"
import HeaderLogged from "../components/HeaderLogged"
import { Link } from 'react-router-dom';
import { Search,Clock, CircleQuestionMark } from 'lucide-react'
const CriarComanda = () => {

     return(
        <div className="text-slate-600 flex h-screen">
            <Sidebar/>
            <div className="flex flex-col w-full pl-20 py-4 pr-4 md:pl-25 md:pr-9">
            <HeaderLogged hasUndo link="/novo-pedido"></HeaderLogged>
            <main className="flex flex-col lg:flex-row w-full">
                <div className="flex flex-col flex-1">
                    <h1 className="text-2xl md:text-3xl font-bold">Comanda #001</h1>
                    <div className="flex flex-col gap-3">
                    <h2 className="text-lg text-slate-500">19:46 - Hoje</h2>
                    <div className="flex flex-col font-medium">
                    <h3>Guarda-sol: <span className="font-semibold">1</span></h3>
                    <h3>Atendido por: <span className="font-semibold">Bruno</span></h3>
                    </div>
                    </div>
                    <form>
                        <fieldset className="flex max-w-lg flex-col gap-3 my-5">
                         <label>
                            Selecionar Item
                           <div className="relative w-full">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                <input
                                    className="inset-shadow-sm focus:ring focus:outline-none focus:border-indigo-600 bg-white py-4 lg:py-3 pl-10 pr-5 rounded border border-slate-300 text-slate-900 w-full"
                                    type="search"
                                    placeholder="Buscar"/>
                            </div>
                         </label>
                         <label>
                            <textarea className="inset-shadow-sm focus:ring focus:outline-none focus:border-indigo-600 bg-white py-4 lg:py-3 px-4 rounded border border-slate-300 text-slate-900 w-full" rows="4" cols="50" placeholder="Observações (opcional)"></textarea>
                         </label>
                                {/* esse link existe apenas para teste */}
                                <div className="flex justify-between gap-2">
                            <Link className="cursor-pointer shadow-sm bg-slate-600 text-slate-50 font-medium rounded py-2 text-center flex-2" to="/comanda1">Selecionar pelo cardápio</Link>
                            <Link className="cursor-pointer shadow-sm bg-indigo-600 text-slate-50 font-medium rounded py-2 text-center flex-1" to="/comanda1">Adicionar</Link>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="flex flex-col md:flex-row gap-5 w-full justify-end flex-2">
                <div className="bg-slate-100 overflow-y-auto p-10 flex flex-col gap-5 rounded-lg h-210 w-full max-w-lg">
                        <div className="flex justify-between items-center">
                        <h2 className="font-bold text-2xl">Itens</h2>
                        {/* quanto passar o mouse em cima mostrar que o amber significa em preparação */}
                        <div className="text-amber-500">
                            <CircleQuestionMark size="18"/>
                        </div>
                        </div>
                        <div className="flex font-semibold text-slate-500">
                        <h3 className="flex-1">Quantidade</h3>
                        <h3 className="flex-3 text-center">Produto</h3>
                        <h3 className="flex-1 text-right">Valor</h3>
                        </div>
                        <div className="flex text-lg h-sm justify-between border-t pt-5 border-slate-300">
                        <p className="flex-1">1</p>
                        <p className="flex-3 text-center">Caipirinha de uva</p>
                        <p className="flex-1 text-right">R$ 00,00</p>
                        </div>
                        <div className="flex text-lg h-sm justify-between border-t pt-5 border-slate-300 text-amber-500 font-medium">
                        <p className="flex-1">1</p>
                        <p className="flex-3 text-center">Item 2</p>
                        <p className="flex-1 text-right">R$ 00,00</p>
                        </div>
                    </div>
                    <div className="bg-slate-100 p-10 flex flex-col gap-5 rounded-lg max-h-80 lg:max-h-65 w-full max-w-md ">
                        <h2 className="font-bold text-2xl">Resumo do Pedido</h2>
                        <div className="flex text-lg justify-between">
                        <p>Quantidade de Itens</p>
                        <p className="font-semibold">2</p>
                        </div>
                        <div className="flex text-lg justify-between">
                        <p>Status</p>
                        <p className="font-semibold text-orange-500 flex gap-2 items-center"><Clock size="18" strokeWidth={3}/>Aguardando Pedido</p>
                        </div>
                        <div className="flex text-lg justify-between">
                        <p>Subtotal</p>
                        <p className="font-semibold">R$ 00,00</p>
                        </div>
                    </div>
                   </div> 
                    
            </main>
        </div>
        </div>

    )

}

export default CriarComanda;