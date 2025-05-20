import React, { useState } from 'react';
import { matrix, svd, index, range } from 'mathjs';

type Ponto = {
  xi: string;
  yi: string;
  X: string;
  Y: string;
};

interface Props {
  pontos: Ponto[];
}

const TransformacaoProjetiva: React.FC<Props> = ({ pontos }) => {
  const [homografia, setHomografia] = useState<number[][] | null>(null);

  const calcularHomografia = (pontos: Ponto[]) => {
    if (pontos.length !== 6) {
      alert('É necessário exatamente 6 pontos.');
      return;
    }

    const A: number[][] = [];

    for (const { xi, yi, X, Y } of pontos) {
      const x = parseFloat(xi);
      const y = parseFloat(yi);
      const Xr = parseFloat(X);
      const Yr = parseFloat(Y);

      A.push([-x, -y, -1, 0, 0, 0, x * Xr, y * Xr, Xr]);
      A.push([0, 0, 0, -x, -y, -1, x * Yr, y * Yr, Yr]);
    }

    const A_matrix = matrix(A);
    const { V } = svd(A_matrix);
    const h = V.subset(index(range(0, 9), 8)); // última coluna

    const H = [
      [h.get([0]), h.get([1]), h.get([2])],
      [h.get([3]), h.get([4]), h.get([5])],
      [h.get([6]), h.get([7]), h.get([8])]
    ];

    setHomografia(H);
  };

  return (
    <section className="mb-10">
      <h3 className="text-xl font-medium mb-4">4.0 Ajuste da Transformação Projetiva</h3>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        onClick={() => calcularHomografia(pontos)}
      >
        Calcular Matriz de Homografia
      </button>

      {homografia && (
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Matriz de Homografia (H):</h4>
          <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre">
            {homografia.map(row => row.map(v => v.toFixed(6)).join('\t')).join('\n')}
          </pre>
        </div>
      )}
    </section>
  );
};

export default TransformacaoProjetiva;
