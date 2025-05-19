import { useLocation } from 'react-router-dom';

const routeNames: Record<string, string> = {
  '/': 'Home',
  '/sobre': 'Sobre',
  '/enunciado': 'Enunciado',
};

const Breadcrumb = () => {
  const location = useLocation();
  const path = location.pathname;

  const pageName = routeNames[path] || path.replace('/', '').charAt(0).toUpperCase() + path.slice(2);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-gray-600 mb-4 sm:mb-0">
      <span className="text-gray-400 font-medium">Você está em:</span>
      <span className="text-sky-900 font-medium bg-slate-300 px-3 py-1 rounded-md shadow-sm break-words">
        Restituição Monocular / {pageName}
      </span>
    </div>
  );
};

export default Breadcrumb;