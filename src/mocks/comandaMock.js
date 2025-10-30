
// Mock de uma comanda ABERTA
export const mockComandaAberta = {
    id: 101,
    numeroComanda: "MOCK1",
    dataAbertura: new Date().toISOString(), // Data de agora
    guardaSol: { numero: 5, identificacao: "05" },
    atendente: { nome: "Bruno Mock" },
    status: "ABERTA", 
    itens: [
        { id: 1, produtoNome: "Água de Coco", quantidade: 2, precoUnitario: 5.00 },
        { id: 2, produtoNome: "Porção de Fritas", quantidade: 1, precoUnitario: 25.00 }
    ],
    valorTotal: 35.00
};

// Mock de uma comanda PRONTA 
export const mockComandaPronta = {
    id: 102,
    numeroComanda: "MOCK2",
    dataAbertura: new Date().toISOString(),
    guardaSol: { numero: 2, identificacao: "02" },
    atendente: { nome: "Carla Mock" },
    status: "PRONTO_PARA_ENTREGA", // Use o status exato do seu Enum
    itens: [
        { id: 3, produtoNome: "Caipirinha", quantidade: 1, precoUnitario: 15.00 }
    ],
    valorTotal: 15.00
};

// Mock do cardápio
export const mockCardapio = [
    { id: 100, nome: "Produto Mock 1", preco: 10.00, descricao: "Descrição mock 1" },
    { id: 101, nome: "Produto Mock 2", preco: 20.00, descricao: "Descrição mock 2" }
];