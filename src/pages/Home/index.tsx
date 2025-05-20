import './styles.css';
import Breadcrumb from '../../components/breadcrumb';
import HeaderRestituicao from '../../components/restituicao/header';
import FooterRestituicao from '../../components/restituicao/footer';
import InsercaoPontosApoio from '../../components/restituicao/insercao/pontos-apoio';

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-gray-800">
      <Breadcrumb />
      <HeaderRestituicao />

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
      <InsercaoPontosApoio />

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

      <FooterRestituicao />
    </div>
  );
};

export default Home;
