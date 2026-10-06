// Card reutilizable con los datos principales de una receta
function MealCard({ titulo, imagen, categoria, origen, etiquetas }) {
  return (
    <article>
      <img src={`${imagen}/medium`} alt={titulo} loading="lazy" />
      <h3>{titulo}</h3>
      <ul>
        <li><span>Categoría:</span> {categoria}</li>
        <li><span>Origen:</span> {origen}</li>
      </ul>
      {etiquetas.length > 0 && (
        <div>
          {etiquetas.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}
    </article>
  );
}

export default MealCard;
