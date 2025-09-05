import Sidebar from "../components/Sidebar"
import HeaderLogged from "../components/HeaderLogged"
import { Link } from 'react-router-dom';
import Comanda from "../components/Comanda"

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
                    <h1 className="text-2xl md:text-3xl font-bold">Pedidos em Andamento</h1>
                    <div className="w-full flex gap-5">
                        <Comanda />
                        <Comanda />
                        <Comanda />
                        <Comanda />
                        <Comanda />
                        <Comanda />
                        <Comanda />
                        <Comanda />
                    </div>
                    <h2 className="text-2xl font-bold">Finalizados</h2>
                </div>
                
            </main>
        </div>
        </div>

    )
}
export default Pedidos;