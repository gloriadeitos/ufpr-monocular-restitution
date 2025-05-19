import './styles.css';
import Breadcrumb from '../../components/breadcrumb';

const Home = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <Breadcrumb />

        <header className="home-header mb-10 text-center mt-10">
          <p className="home-title text-3xl font-semibold mb-2">TP-01 – Restituição Monocular</p>
          <p className="home-subtitle text-lg text-gray-700">Engenharia Cartográfica e de Agrimensura – Fotogrametria III/2025-1</p>
          <p className="home-professor mt-1 text-gray-600 italic">Prof. Edson Mitishita</p>
        </header>

        <section className="home-intro text-gray-800 text-base leading-relaxed mx-auto">
          <p>
            Este trabalho busca desenvolver competências práticas e teóricas na extração de informações cartográficas usando imagens monoculares,
            aplicando transformações projetivas e equações de colinearidade para a restituição de limites planimétricos urbanos.
          </p>
        </section>

        <footer className="home-footer mt-16 text-center text-sm text-gray-500">
          Universidade Federal do Paraná — Setor de Ciências da Terra – Departamento de Geomática
        </footer>

      </div>
    </div>
  );
};

export default Home;
