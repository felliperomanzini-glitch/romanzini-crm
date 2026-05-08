import { useState } from 'react';

export default function RomanziniCRM() {
  const [selectedClient, setSelectedClient] = useState(null);
  const [search, setSearch] = useState('');

  const clients = [
    {
      name: 'Lar Móveis',
      city: 'Divinópolis - MG',
      lastPurchase: '15/04/2026',
      factories: ['Rufato', 'Lopas', 'HB Móveis'],
      products: ['Painel Premium', 'Sofá Retrátil', 'Camarim Premium'],
      lastVisit: '02/05/2026',
      seller: 'Romanzini',
      status: 'Cliente ativo',
      obs: 'Prefere atendimento rápido e produtos premium.'
    },
    {
      name: 'Casa Bella',
      city: 'Nova Serrana - MG',
      lastPurchase: '28/04/2026',
      factories: ['Móveis Europa', 'Viero'],
      products: ['Guarda Roupa 6 Portas', 'Mesa de Jantar'],
      lastVisit: '06/05/2026',
      seller: 'Romanzini',
      status: 'Negociação aberta',
      obs: 'Cliente focado em giro rápido.'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-100 p-6 text-neutral-800">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-light tracking-wide">Representações Romanzini</h1>
            <p className="text-neutral-500 mt-2">CRM Inteligente para Atendimento e Representação Comercial</p>
          </div>

          <div className="flex gap-3 flex-wrap">
            <input
              placeholder="Buscar cliente..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-3 rounded-2xl border border-neutral-200 w-72 outline-none focus:ring-2 focus:ring-neutral-300"
            />
            <button className="px-5 py-3 rounded-2xl bg-black text-white shadow-md hover:scale-105 transition-all">
              Novo Cliente
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-3xl p-5 shadow-md">
            <p className="text-sm text-neutral-500">Clientes ativos</p>
            <h2 className="text-3xl font-semibold mt-2">128</h2>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-md">
            <p className="text-sm text-neutral-500">Visitas do mês</p>
            <h2 className="text-3xl font-semibold mt-2">42</h2>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-md">
            <p className="text-sm text-neutral-500">Últimos pedidos</p>
            <h2 className="text-3xl font-semibold mt-2">19</h2>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-md">
            <p className="text-sm text-neutral-500">Fábricas parceiras</p>
            <h2 className="text-3xl font-semibold mt-2">11</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-white rounded-3xl shadow-lg p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-medium">Clientes</h2>
              <button className="text-sm text-neutral-500 hover:text-black">Ver todos</button>
            </div>

            <div className="space-y-4">
              {clients
                .filter((client) =>
                  client.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((client, index) => (
                <div
                  key={index}
                  className="border border-neutral-200 rounded-2xl p-4 hover:shadow-md transition-all cursor-pointer"
                  onClick={() => setSelectedClient(client)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{client.name}</h3>
                    <span className="text-xs bg-neutral-100 px-3 py-1 rounded-full">
                      {client.status}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-500 mt-1">{client.city}</p>

                  <div className="mt-3 text-sm space-y-1">
                    <p><strong>Última compra:</strong> {client.lastPurchase}</p>
                    <p><strong>Última visita:</strong> {client.lastVisit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
              <div>
                <h2 className="text-3xl font-light">Ficha Completa do Cliente</h2>
                <p className="text-neutral-500 mt-1">Histórico detalhado para atendimento inteligente</p>
              </div>

              <button className="px-5 py-3 rounded-2xl bg-black text-white hover:scale-105 transition-all">
                Registrar Visita
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200">
                <h3 className="text-lg font-semibold mb-4">Dados Gerais</h3>

                <div className="space-y-3 text-sm">
                  <p><strong>Cliente:</strong> {selectedClient?.name || 'Selecione um cliente'}</p>
                  <p><strong>Cidade:</strong> {selectedClient?.city || '-'}</p>
                  <p><strong>Representante:</strong> {selectedClient?.seller || '-'}</p>
                  <p><strong>Status:</strong> {selectedClient?.status || '-'}</p>
                  <p><strong>Última visita:</strong> {selectedClient?.lastVisit || '-'}</p>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200">
                <h3 className="text-lg font-semibold mb-4">Fábricas Trabalhadas</h3>

                <div className="flex flex-wrap gap-2">
                  {(selectedClient?.factories || []).map((factory, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm"
                    >
                      {factory}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 bg-neutral-50 rounded-2xl p-5 border border-neutral-200">
                <h3 className="text-lg font-semibold mb-4">Histórico de Compras</h3>

                <div className="overflow-x-auto rounded-2xl border border-neutral-200">
                  <table className="w-full text-sm">
                    <thead className="bg-white">
                      <tr>
                        <th className="text-left p-4">Data</th>
                        <th className="text-left p-4">Produto</th>
                        <th className="text-left p-4">Fábrica</th>
                        <th className="text-left p-4">Valor</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-t border-neutral-200">
                        <td className="p-4">15/04/2026</td>
                        <td className="p-4">Camarim Premium</td>
                        <td className="p-4">HB Móveis</td>
                        <td className="p-4">R$ 4.890</td>
                      </tr>

                      <tr className="border-t border-neutral-200">
                        <td className="p-4">02/03/2026</td>
                        <td className="p-4">Painel Luxo</td>
                        <td className="p-4">Lopas</td>
                        <td className="p-4">R$ 2.150</td>
                      </tr>

                      <tr className="border-t border-neutral-200">
                        <td className="p-4">18/01/2026</td>
                        <td className="p-4">Sofá Retrátil</td>
                        <td className="p-4">Rufato</td>
                        <td className="p-4">R$ 6.200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="md:col-span-2 bg-neutral-50 rounded-2xl p-5 border border-neutral-200">
                <h3 className="text-lg font-semibold mb-4">Observações do Atendimento</h3>

                <textarea
                  className="w-full min-h-[140px] rounded-2xl border border-neutral-200 p-4 outline-none focus:ring-2 focus:ring-neutral-300"
                  placeholder="Registrar informações importantes do cliente..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
