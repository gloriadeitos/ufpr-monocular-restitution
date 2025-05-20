import { useState } from 'react';

const InsercaoPontosApoio = () => {
    const [pontos, setPontos] = useState(Array(6).fill({ x: '', y: '', z: '' }));

    const handleInputChange = (index: number, axis: 'x' | 'y' | 'z', value: string) => {
        const novosPontos = [...pontos];
        novosPontos[index] = { ...novosPontos[index], [axis]: value };
        setPontos(novosPontos);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Pontos de apoio inseridos:', pontos);
        alert('Pontos salvos no estado. Etapa seguinte liberada!');
    };

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            if (!event.target || typeof event.target.result !== 'string') {
                console.error('Erro ao ler o arquivo.');
                return;
            }
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
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
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
                <button type="submit"
                    className="col-span-full mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Enviar Pontos
                </button>
            </form>
        </section>
    );
};

export default InsercaoPontosApoio;
