import Sidebar from "../components/Sidebar";
import HeaderLogged from "../components/HeaderLogged";
import { ShoppingCart, Clock, UserCheck, TrendingUp, AlertTriangle, Users, MinusSquare } from "lucide-react";
import React from 'react';

const Inicio = () => {
  // Dados simulados
  const indicadores = [
    { title: "Ticket Médio", value: "R$ 38,50", icon: TrendingUp, color: "green" },
    { title: "Pedidos Ativos", value: 12, icon: ShoppingCart, color: "blue" },
    { title: "Pedidos Finalizados Hoje", value: 25, icon: UserCheck, color: "green" },
    { title: "Tempo Médio de Preparo", value: "12 min", icon: Clock, color: "orange" },
  ];

  const topItens = [
    { nome: "Caipirinha de Uva", qtd: 25 },
    { nome: "Porção de Camarão", qtd: 18 },
    { nome: "Água de Coco", qtd: 15 },
    { nome: "Batata Frita", qtd: 12 }
  ];

  const itensComBaixaSaida = [
    { nome: "Cachaça", qtdVendida: 3 },
    { nome: "Espetinho de Queijo", qtdVendida: 5 },
    { nome: "Caipirinha de Abacaxi", qtdVendida: 7 }
  ];

  const estoqueCritico = [
    { nome: "Porção de Camarão", quantidade: 3, max: 10 },
    { nome: "Batata Frita", quantidade: 2, max: 10 },
    { nome: "Caipirinha de Uva", quantidade: 1, max: 10 }
  ];

  const funcionarios = [
    { nome: "Bruno", pedidosAtivos: 4, totalAtendidos: 10 },
    { nome: "Ana", pedidosAtivos: 3, totalAtendidos: 12 }
  ];

  return (
    <div className="text-slate-800 flex h-screen ">
      <Sidebar className="w-[250px]" />
      <div className="flex flex-col w-full pl-20 py-4 pr-4 md:pl-23 md:pr-8">
        <HeaderLogged />

        <h1 className="text-3xl font-bold mb-8 text-blue-600">Painel Operacional</h1>

        {/* Indicadores (KPIs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {indicadores.map((item, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-xl shadow-sm p-6 flex items-center gap-4 border-l-4 border-blue-500"
            >
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <item.icon size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-500">{item.title}</span>
                <span className="text-2xl font-bold text-slate-800">{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Seções de Listas e Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Top Itens */}
          <div className="bg-teal-50 rounded-xl shadow-sm p-6 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4 text-teal-700">
              <TrendingUp size={20} />
              <h2 className="text-xl font-semibold">Itens Mais Vendidos</h2>
            </div>
            <ul className="flex flex-col gap-3">
              {topItens.map((item, i) => (
                <li key={i} className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold text-teal-600">{i + 1}. {item.nome}</span>
                  <span className="text-lg font-bold text-teal-800">{item.qtd}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Itens com Baixa Saída */}
          <div className="bg-red-50 rounded-xl shadow-sm p-6 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4 text-red-600">
              <MinusSquare size={20} />
              <h2 className="text-xl font-semibold">Itens com Baixa Saída</h2>
            </div>
            <ul className="flex flex-col gap-3">
              {itensComBaixaSaida.map((item, i) => (
                <li key={i} className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold text-red-500">{item.nome}</span>
                  <span className="text-lg font-bold text-red-800">{item.qtdVendida}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Estoque Crítico */}
          <div className="bg-amber-50 rounded-xl shadow-sm p-6 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4 text-amber-600">
              <AlertTriangle size={20} />
              <h2 className="text-xl font-semibold">Estoque Crítico</h2>
            </div>
            <ul className="flex flex-col gap-4">
              {estoqueCritico.map((item, i) => (
                <li key={i} className="flex flex-col">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-amber-800">{item.nome}</span>
                    <span className="text-sm font-medium text-amber-500">{item.quantidade} de {item.max}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-amber-500 h-2 rounded-full"
                      style={{ width: `${(item.quantidade / item.max) * 100}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Funcionários */}
        <div className="bg-slate-50 rounded-xl shadow-sm p-6 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4 text-blue-700">
            <Users size={20} />
            <h2 className="text-xl font-semibold">Visão Geral da Equipe</h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {funcionarios.map((func, i) => (
              <li key={i} className="flex flex-col p-4 bg-white rounded-lg">
                <span className="font-bold text-lg text-blue-700">{func.nome}</span>
                <span className="text-sm text-slate-600">
                  Pedidos Ativos: <span className="font-bold">{func.pedidosAtivos}</span>
                </span>
                <span className="text-sm text-slate-600">
                  Total Atendidos Hoje: <span className="font-bold">{func.totalAtendidos}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
