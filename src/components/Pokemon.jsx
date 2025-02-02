import React from "react";

function Pokemon({ pokes }) {
  const getTypeColor = (type) => {
    switch (type) {
      case "Electric":
        return "#f1c40f";
      case "Grass":
        return "#27ae60";
      case "Poison":
        return "#34495e";
      case "Fire":
        return "#e74c3c";
      case "Normal":
        return "#1abc9c";
      case "Fairy":
        return "#9b59b6";
      case "Water":
        return "#3498db";
      case "Bug":
        return "##e17055";
      case "Flying":
        return "#e67e22";
      case "Rock":
        return "#95a5a6";
      case "Ground":
        return "#fdcb6e";
      case "Psychic":
        return "#e84393";
    }
  };
  return (
    <div className="card">
      <img src={pokes.image.thumbnail} />
      <h4>{pokes.name}</h4>
      <div className="types">
        {pokes.type.map((type, index) => (
          <button style={{ backgroundColor: getTypeColor(type) }} key={index}>
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Pokemon;
