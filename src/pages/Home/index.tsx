import './styles.css';
import { useState } from 'react';
import Breadcrumb from '../../components/breadcrumb';

const Home = () => {
  const [pontos, setPontos] = useState(Array(6).fill({ x: '', y: '', z: '' }));

  const handleInputChange = (index, axis, value) => {
    const novosPontos = [...pontos];
    novosPontos[index] = { ...novosPontos[index], [axis]: value };
    setPontos(novosPontos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Pontos de apoio inseridos:', pontos);
    alert('Pontos salvos no estado. Etapa seguinte liberada!');
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const lines = event.target.result.split('\n').filter(Boolean);
      const newPontos = [];

      for (let i = 1; i < lines.length && i <= 6; i++) {
        const parts = lines[i].trim().split(/\s+/);
        if (parts.length >= 4) {
          newPontos.push({
            x: parts[1],
            y: parts[2],
            z: parts[3],
          });
        }
      }

      while (newPontos.length < 6) {
        newPontos.push({ x: '', y: '', z: '' });
      }

      setPontos(newPontos);
    };

    reader.readAsText(file);
  };

  const handleDownloadExample = () => {
    const content = `PONTO X Y Z
148     584220.8590    7225799.7120      957.8920
145     584053.4540    7225220.5930      961.4010
184     583441.5770    7225098.1700      943.3080
201     583492.0540    7225529.0380      936.5200
139     583605.7010    7225599.1900      943.9770
149     583881.5810    7225582.5940      951.9500`;

    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'exemplo_pontos_apoio.txt';
    link.click();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-gray-800">
      <Breadcrumb />

      {/* Cabeçalho */}
      <header className="home-header mb-10 text-center mt-10">
        <p className="home-title text-3xl font-semibold mb-2">TP-01 – Restituição Monocular</p>
        <p className="home-subtitle text-lg text-gray-700">Engenharia Cartográfica e de Agrimensura – Fotogrametria III/2025-1</p>
        <p className="home-professor mt-1 text-gray-600 italic">Prof. Edson Mitishita</p>
      </header>

      {/* Introdução */}
      <section className="mb-10">
        <p>
          Este trabalho busca desenvolver competências práticas e teóricas na extração de informações cartográficas usando imagens monoculares,
          aplicando transformações projetivas e equações de colinearidade para a restituição de limites planimétricos urbanos.
        </p>
      </section>

      {/* Etapas */}
      <section className="mb-10">
        <h3 className="text-xl font-medium mb-4">1.0 Etapas de Trabalho</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Inserção de pontos de apoio.</li>
          <li>Ajuste da Transformação Projetiva Plana.</li>
          <li>Ajuste das Equações de Colinearidade Direta.</li>
          <li>Restituição dos limites planimétricos.</li>
          <li>Comparação dos resultados.</li>
          <li>Representação cartográfica.</li>
          <li>Conclusão e relatório técnico.</li>
        </ol>
      </section>

      {/* Parâmetros da câmera */}
      <section className="mb-10">
        <h3 className="text-xl font-medium mb-4">2.0 Parâmetros da Câmera / Parâmetros de Orientação Interior do Sensor</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Foco:</strong> 34,145 mm</li>
          <li><strong>Ponto Principal:</strong> xo = 0,217 mm | yo = -0,089 mm</li>
          <li><strong>Distorção radial:</strong> K1 = -9,36e-05 | K2 = 1,09e-07 | K3 = 0</li>
          <li><strong>Distorção descentrada:</strong> P1 = 0 | P2 = 0</li>
        </ul>
      </section>

      {/* Inserção de pontos de apoio */}
      <section className="mb-10">
        <h3 className="text-xl font-medium mb-4">3.0 Inserir Pontos de Apoio</h3>

        {/* Botões de Upload e Download lado a lado */}
        <div className="mb-6 flex flex-col md:flex-row items-center gap-4">
          <label className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition">
            Selecionar .txt
            <input
              type="file"
              accept=".txt"
              onChange={handleUpload}
              className="hidden"
            />
          </label>
          <button
            onClick={handleDownloadExample}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Baixar Exemplo .txt
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pontos.map((ponto, i) => (
            <div key={i} className="border p-4 rounded shadow-sm">
              <p className="font-medium mb-2">Ponto {i + 1}</p>
              <label className="block text-sm mb-1">
                X:
                <input
                  type="number"
                  className="w-full border px-2 py-1 mt-1 rounded"
                  value={ponto.x}
                  onChange={(e) => handleInputChange(i, 'x', e.target.value)}
                  required
                />
              </label>
              <label className="block text-sm mt-2">
                Y:
                <input
                  type="number"
                  className="w-full border px-2 py-1 mt-1 rounded"
                  value={ponto.y}
                  onChange={(e) => handleInputChange(i, 'y', e.target.value)}
                  required
                />
              </label>
              <label className="block text-sm mt-2">
                Z:
                <input
                  type="number"
                  className="w-full border px-2 py-1 mt-1 rounded"
                  value={ponto.z}
                  onChange={(e) => handleInputChange(i, 'z', e.target.value)}
                  required
                />
              </label>
            </div>
          ))}
          <button
            type="submit"
            className="col-span-full mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Enviar Pontos
          </button>
        </form>
      </section>

      {/* Transformação Projetiva */}
      <section className="mb-10">
        <h3 className="text-xl font-medium mb-4">4.0 Ajuste da Transformação Projetiva</h3>
        <p>Após o envio dos pontos, utiliza-se a Transformação Projetiva Plana para estimar os parâmetros de ajuste entre os pontos de imagem e suas coordenadas reais.</p>
        <p className="italic text-sm text-gray-600">[⚙️ Em breve: cálculo automático dos coeficientes projetivos com base nos pontos]</p>
      </section>

      {/* Equações de Colinearidade */}
      <section className="mb-10">
        <h3 className="text-xl font-medium mb-4">5.0 Equações de Colinearidade Direta</h3>
        <p>Com os mesmos pontos, aplica-se o modelo de colinearidade para estimar os parâmetros de orientação exterior.</p>
        <p className="italic text-sm text-gray-600">[⚙️ Em breve: estimativa com base no modelo matemático de colinearidade]</p>
      </section>

      {/* Restituição com DTM */}
      <section className="mb-10">
        <h3 className="text-xl font-medium mb-4">6.0 Restituição com DTM</h3>
        <p>Realiza-se a restituição monocular usando os parâmetros obtidos e o DTM da área, aplicando as equações inversas.</p>
        <p className="italic text-sm text-gray-600">[📁 Em breve: upload de nuvem de pontos e cálculo de restituição]</p>
      </section>

      {/* Comparação */}
      <section className="mb-10">
        <h3 className="text-xl font-medium mb-4">7.0 Comparação de Resultados</h3>
        <p>Compara-se numericamente as diferenças entre a transformação projetiva e a colinearidade inversa, identificando a mais precisa.</p>
        <p className="italic text-sm text-gray-600">[📊 Em breve: visualização comparativa dos erros]</p>
      </section>

      {/* Relatório */}
      <section className="mb-10">
        <h3 className="text-xl font-medium mb-4">8.0 Relatório Técnico</h3>
        <p>Finaliza-se com a elaboração do relatório contendo introdução, metodologia, resultados, discussão e conclusão.</p>
        <p className="italic text-sm text-gray-600">[📝 Em breve: exportar para PDF ou Word]</p>
      </section>

      {/* Rodapé */}
      <footer className="mt-16 text-center text-sm text-gray-500">
        Universidade Federal do Paraná — Setor de Ciências da Terra – Departamento de Geomática
      </footer>
    </div>
  );
};

export default Home;
