// Relatorios.jsx
import Sidebar from "../components/Sidebar";
import HeaderLogged from "../components/HeaderLogged";
import { TrendingUp, BarChart as BarIcon, PieChart, Activity, Users } from "lucide-react";
import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar,
  AreaChart, Area,
  ComposedChart, ResponsiveContainer
} from "recharts";

const Relatorios = () => {
  // Dados mockados
  const vendasDiarias = [
    { dia: "Seg", vendas: 12 },
    { dia: "Ter", vendas: 18 },
    { dia: "Qua", vendas: 14 },
    { dia: "Qui", vendas: 20 },
    { dia: "Sex", vendas: 25 },
    { dia: "Sáb", vendas: 30 },
    { dia: "Dom", vendas: 22 },
  ];

  const faturamentoMensal = [
    { mes: "Jan", faturamento: 1200 },
    { mes: "Fev", faturamento: 1500 },
    { mes: "Mar", faturamento: 1800 },
    { mes: "Abr", faturamento: 2000 },
    { mes: "Mai", faturamento: 2200 },
    { mes: "Jun", faturamento: 2100 },
  ];

  const receitaDespesa = [
    { mes: "Jan", receita: 2000, despesa: 1200 },
    { mes: "Fev", receita: 2500, despesa: 1500 },
    { mes: "Mar", receita: 3000, despesa: 1800 },
    { mes: "Abr", receita: 2800, despesa: 2000 },
  ];

  const vendasCompras = [
    { mes: "Jan", vendas: 50, compras: 30 },
    { mes: "Fev", vendas: 65, compras: 40 },
    { mes: "Mar", vendas: 80, compras: 55 },
    { mes: "Abr", vendas: 75, compras: 60 },
  ];

  const pedidosPorFuncionario = [
    { mes: "Jan", Bruno: 10, Ana: 12, Carlos: 8, Maria: 15 },
    { mes: "Fev", Bruno: 15, Ana: 14, Carlos: 10, Maria: 18 },
    { mes: "Mar", Bruno: 12, Ana: 18, Carlos: 9, Maria: 20 },
    { mes: "Abr", Bruno: 20, Ana: 16, Carlos: 14, Maria: 22 },
    { mes: "Mai", Bruno: 18, Ana: 20, Carlos: 15, Maria: 25 },
    { mes: "Jun", Bruno: 22, Ana: 19, Carlos: 16, Maria: 28 },
  ];

  return (
    <div className="text-slate-800 flex min-h-screen">
      <Sidebar className="w-[250px]" />
      <div className="flex flex-col w-full pl-20 py-4 pr-4 md:pl-23 md:pr-8 mt-13">
        <h1 className="text-3xl font-bold mb-8 text-blue-600">Relatórios</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Vendas Totais Diárias */}
          <div className="bg-slate-50 rounded-xl shadow-sm p-6 flex flex-col h-80">
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <TrendingUp size={20} />
              <h2 className="text-xl font-semibold">Vendas Diárias</h2>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={vendasDiarias}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="vendas" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Faturamento por Mês */}
          <div className="bg-slate-50 rounded-xl shadow-sm p-6 flex flex-col h-80">
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <BarIcon size={20} />
              <h2 className="text-xl font-semibold">Faturamento por Mês</h2>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={faturamentoMensal}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="faturamento" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Receita x Despesa */}
          <div className="bg-slate-50 rounded-xl shadow-sm p-6 flex flex-col h-80">
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <PieChart size={20} />
              <h2 className="text-xl font-semibold">Receita x Despesa</h2>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={receitaDespesa}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="receita" stackId="1" stroke="#3b82f6" fill="#3b82f6" />
                <Area type="monotone" dataKey="despesa" stackId="1" stroke="#ef4444" fill="#ef4444" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Vendas x Compras */}
          <div className="bg-slate-50 rounded-xl shadow-sm p-6 flex flex-col h-80">
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <Activity size={20} />
              <h2 className="text-xl font-semibold">Vendas x Compras</h2>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={vendasCompras}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="vendas" barSize={20} fill="#3b82f6" />
                <Line type="monotone" dataKey="compras" stroke="#f59e0b" strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Pedidos Atendidos por Funcionário */}
          <div className="bg-slate-50 rounded-xl shadow-sm p-6 flex flex-col h-80">
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <Users size={20} />
              <h2 className="text-xl font-semibold">Pedidos Atendidos por Funcionário (Mensal)</h2>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={pedidosPorFuncionario}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Bruno" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="Ana" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="Carlos" stroke="#f59e0b" strokeWidth={2} />
                <Line type="monotone" dataKey="Maria" stroke="#ef4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relatorios;
