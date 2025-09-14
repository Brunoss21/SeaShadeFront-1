import { Clock, ZoomIn, ThumbsUp } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Comanda = ({ numero, mesa, status, itens}) => {

    const [isPreparando, setIsPreparando] = useState(true);

    return (
       <Link to="/comanda1"> <div className="bg-slate-50 rounded-lg min-w-49 md:min-w-60 shadow cursor-pointer">
                            <div className="bg-slate-800 px-3 py-3 rounded-t-lg flex justify-between text-slate-300 text-sm items-center">
                                 
                                 <p className="font-medium text-center text-xl text-slate-50">#000</p>
                                <p>Mesa 1</p>
        
                            </div>
                            <div className={`text-center py-1 px-2 ${isPreparando? "bg-azul-500" : "bg-orange-400"} `}>
                            <p className="text-slate-50 font-medium flex items-center justify-center gap-2 text-sm md:text-base">
                            {isPreparando ? (<>Atendimento em aberto</>) : <><Clock size="16" strokeWidth={3} />Aguardando pedido</>}
                            </p>                            </div>
                            <div className="flex font-semibold bg-slate-200 text-center py-1">
                                    <p className="flex-1">Qt.</p>
                                    <p className="flex-5">Item</p>
                                    <p className="flex-2">R$</p>
                                </div>
                            <div className="overflow-y-auto h-35 md:h-50">
                                {/* Cabeçalho */}
                                

                                {/* Itens */}
                                <div className="flex flex-col">
                                    <div className="flex text-center py-2 border-b border-slate-200">
                                        <p className="flex-1">1</p>
                                        <p className="flex-5">Caipirinha M</p>
                                        <p className="flex-2">11,10</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex font-semibold bg-slate-200 px-3 py-1 rounded-b-lg justify-between items-center">
                                    <p>Total: R$ 0,00</p>
                                    <ZoomIn size="20" className="cursor-pointer"/>
                                </div>
                        </div></Link>
    );
};

export default Comanda;