
// Componente Header.jsx
function Header() {
  return (
    <section className="flex justify-between items-center px-10 py-20 bg-[#0e0a27] text-white">
      
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">
          ESTILO URBANO REDEFINIDO
        </h1>

        <p className="mt-4 text-gray-300">
          Descubre nuestra colección de ropa urbana minimalista
        </p>

        <button className="mt-6 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
          EXPLORAR COLLECCIÓN
        </button>
      </div>
      
    </section>
  );
}

export default Header;