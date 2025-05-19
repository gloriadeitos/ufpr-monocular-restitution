import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faDownload } from '@fortawesome/free-solid-svg-icons';

import Breadcrumb from '../../components/breadcrumb';

const Home = () => {
    const pdfPath = "/docs/Tp-01-FotogrametriaIII-2025_11.pdf";

    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-4 flex items-center justify-between flex-wrap gap-4">
                <Breadcrumb />
                <div className="flex gap-3">
                    <a
                        href={pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-100 text-sky-900 rounded-lg border border-blue-200 hover:shadow transition">
                        <FontAwesomeIcon icon={faUpRightFromSquare} />
                        Abrir em nova aba
                    </a>
                    <a
                        href={pdfPath}
                        download
                        className="flex items-center gap-2 px-4 py-2 text-sm bg-emerald-100 text-emerald-900 rounded-lg border border-emerald-200 hover:shadow transition">
                        <FontAwesomeIcon icon={faDownload} />
                        Baixar PDF
                    </a>
                </div>
            </div>

            <iframe
                src={pdfPath}
                width="100%"
                height="650vh"
                title="Enunciado do Professor"
                className="border-0 rounded-md shadow-lg"
            />
        </div>
    );
}

export default Home;
