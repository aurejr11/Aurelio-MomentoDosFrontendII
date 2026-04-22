// Se crea el componente Card 

function Card({ titulo, descripcion }) {
  return (
    <div className="bg-[#1a1a2e] p-6 rounded-xl text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold">{titulo}</h3>
      <p className="mt-2 text-gray-300">{descripcion}</p>
    </div>


  );
}

export default Card;