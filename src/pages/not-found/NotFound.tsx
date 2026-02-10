import { Link } from 'react-router-dom';
import PageMeta from "@/components/shared/PageMeta";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <PageMeta 
        title="Página não encontrada" 
        description="Erro 404 - A página que você está procurando não existe."
      />
      
      <h1 className="text-9xl font-extrabold text-lime opacity-90">404</h1>
      <h2 className="text-3xl font-bold text-white mt-4">
        Ops! Página não encontrada.
      </h2>
      <p className="text-gray-light mt-4 max-w-md text-lg">
        Parece que você se perdeu no catálogo. A página que você está procurando
        não existe ou foi removida.
      </p>
      <Link
        to="/"
        className="mt-8 px-8 py-3 bg-lime text-gray-dark font-bold rounded-full hover:bg-white transition-colors duration-300"
      >
        Voltar para o Início
      </Link>
    </div>
  );
}
