import "./Cards.css";

function Cards({ car }) {
  function handleAddToCart() {
    alert("Added to cart!");
  }

  function handleAddToFavorites() {
    let favorites = [];

    try {
      const saved = localStorage.getItem("favorites");
      favorites = saved ? JSON.parse(saved) : [];

      if (!Array.isArray(favorites)) {
        favorites = [];
      }
    } catch {
      favorites = [];
    }

    const exists = favorites.some((item) => item.id === car.id);

    if (exists) {
      alert("This car is already in your favorites!");
      return;
    }

    const updated = [...favorites, car];

    localStorage.setItem("favorites", JSON.stringify(updated));
    alert("Added to favorites!");
  }

  return (
    <div className="car-card">
      <img src={car.image} alt={`${car.type} ${car.model}`} />

      <div className="car-details">
        <h3>
          {car.type} {car.model}
        </h3>

        <p>
          <strong>Type:</strong> {car.type}
        </p>
        <p>
          <strong>Model:</strong> {car.model}
        </p>
        <p>
          <strong>Year:</strong> {car.year}
        </p>
        <p>
          <strong>HP:</strong> {car.hp}
        </p>
        <p>
          <strong>Price:</strong> ${car.price.toLocaleString()}
        </p>

        <div className="car-buttons">
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <button className="btn btn-secondary" onClick={handleAddToFavorites}>
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
