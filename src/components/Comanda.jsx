import { Clock } from 'lucide-react';
const Comanda = () => {
    return (
        <div className="bg-slate-50 rounded-lg min-w-49 md:min-w-60 shadow overflow-hidden">
                            <div className="bg-slate-800 px-3 py-3 rounded-t-lg flex justify-between text-slate-300 text-sm items-center">
                                 
                                 <p className="font-medium text-center text-xl text-slate-50">#000</p>
                                <p>Mesa 1</p>
        
                            </div>
                            {/* Aplicar variavel status e se possivel um cronometro */}
                            <div className="text-center bg-orange-400 py-1 px-2 ">
                                <p className="text-slate-50 font-medium flex items-center justify-center gap-2 text-sm md:text-base"><Clock size="16" strokeWidth={3}/>Aguardando Atendimento</p>
                            </div>
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
                                    <div className="flex text-center py-2 border-b border-slate-200">
                                        <p className="flex-1">2</p>
                                        <p className="flex-5">Caipirinha G</p>
                                        <p className="flex-2">18,50</p>
                                    </div>
                                    <div className="flex text-center py-2 border-b border-slate-200">
                                        <p className="flex-1">1</p>
                                        <p className="flex-5">Suco de Laranja</p>
                                        <p className="flex-2">9,00</p>
                                    </div>
                                    <div className="flex text-center py-2 border-b border-slate-200">
                                        <p className="flex-1">1</p>
                                        <p className="flex-5">Suco de Laranja</p>
                                        <p className="flex-2">9,00</p>
                                    </div>
                                    <div className="flex text-center py-2 border-b border-slate-200">
                                        <p className="flex-1">1</p>
                                        <p className="flex-5">Suco de Laranja</p>
                                        <p className="flex-2">9,00</p>
                                    </div>
                                    <div className="flex text-center py-2">
                                        <p className="flex-1">1</p>
                                        <p className="flex-5">Suco de Laranja</p>
                                        <p className="flex-2">9,00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex font-semibold bg-slate-200 px-3 py-1 rounded-b-lg">
                                    <p>Total: R$ 0,00</p>
                                </div>
                        </div>
    );
};

export default Comanda;