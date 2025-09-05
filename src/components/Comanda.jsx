const Comanda = () => {
    return (
        <div className="bg-slate-50 rounded-lg max-w-60 shadow">
                            <div className="bg-slate-800 px-3 py-3 rounded-t-lg flex justify-between text-slate-300 text-sm items-center">
                                 <p>Cliente</p>
                                 <p className="font-medium text-center text-xl text-slate-50">#000</p>
                                <p>Mesa 1</p>
        
                            </div>
                            <div className="flex font-semibold bg-slate-200 px-3 text-center py-1">
                                    <p className="flex-1">Qt.</p>
                                    <p className="flex-5">Item</p>
                                    <p className="flex-2">R$</p>
                                </div>
                            <div className="overflow-y-auto h-40 max-w-sm">
                                {/* Cabeçalho */}
                                

                                {/* Itens */}
                                <div className="flex flex-col">
                                    <div className="flex text-center py-2 px-3">
                                        <p className="flex-1">1</p>
                                        <p className="flex-5">Caipirinha M</p>
                                        <p className="flex-2">11,10</p>
                                    </div>
                                    <div className="flex text-center py-2 px-3">
                                        <p className="flex-1">2</p>
                                        <p className="flex-5">Caipirinha G</p>
                                        <p className="flex-2">18,50</p>
                                    </div>
                                    <div className="flex text-center py-2 px-3">
                                        <p className="flex-1">1</p>
                                        <p className="flex-5">Suco de Laranja</p>
                                        <p className="flex-2">9,00</p>
                                    </div>
                                    <div className="flex text-center py-2 px-3">
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