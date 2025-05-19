const Sobre = () => {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 font-sans text-gray-800">
        {/* Cabeçalho Institucional */}
        <div className="mb-8 text-center">
          <h1 className="text-xl font-semibold">Universidade Federal do Paraná</h1>
          <h2 className="text-lg font-medium mt-1">Engenharia Cartográfica e de Agrimensura</h2>
          <h3 className="text-md font-normal mt-1 italic text-gray-600">Fotogrametria III</h3>
        </div>
  
        {/* Título do Trabalho */}
        <h4 className="text-center text-lg font-bold text-sky-900 mb-6">
          TP-01 – Restituição Monocular
        </h4>
  
        {/* Objetivo do trabalho */}
        <p className="mb-4 leading-relaxed">
          O presente trabalho tem por objetivo fornecer ao aluno de Engenharia Cartográfica os conhecimentos teóricos e práticos sobre a <strong>extração de informações cartográficas</strong> utilizando uma única imagem. 
        </p>
        <p className="mb-4 leading-relaxed">
          Consiste em restituir, através de dois procedimentos de baixo custo, os limites planimétricos de pelo menos duas quadras e seus respectivos lotes urbanos. O primeiro procedimento emprega a <strong>transformação projetiva plana</strong>, enquanto o segundo utiliza as <strong>equações de colinearidade</strong> combinadas com um Modelo Digital de Terreno (DTM) obtido por varredura Laser Scanner.
        </p>
        <p className="mb-4 leading-relaxed">
          São fornecidos a imagem digital, um conjunto de pontos de apoio com coordenadas cartográficas, além de informações técnicas da câmera e dados do voo para auxiliar nas restituições.
        </p>
  
        {/* Etapas do trabalho */}
        <div className="mt-8">
          <h5 className="text-sky-900 font-semibold mb-3">Etapas do trabalho</h5>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Escolher e medir 6 pontos de apoio na imagem digital para ajuste das transformações.</li>
            <li>Analisar a precisão e exatidão dos ajustes e discutir os resultados.</li>
            <li>Restituir pelo menos duas quadras com lotes usando as transformações inversas.</li>
            <li>Empregar restituição monocular sem iterações com uso do DTM.</li>
            <li>Comparar diferenças planimétricas e discutir resultados, destacando maior exatidão das equações de colinearidade.</li>
            <li>Elaborar representação cartográfica em software gráfico (Autocad, MicroStation, etc.).</li>
            <li>Preparar relatório técnico com introdução, metodologia, resultados, discussões e conclusões.</li>
          </ol>
        </div>
  
        {/* Rodapé com data e professor */}
        <footer className="mt-10 text-center text-sm italic text-gray-500">
          Curitiba, 1º Semestre 2025 – Professor Edson Mitishita
        </footer>
      </div>
    );
  }
  
  export default Sobre;