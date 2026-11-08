import { useState } from "react";
import { Link } from "react-router-dom";
import "./Favorites.css";

function loadFavorites() {
  try {
    const saved = localStorage.getItem("favorites");
    const cars = saved ? JSON.parse(saved) : [];
    return Array.isArray(cars) ? cars : [];
  } catch {
    return [];
  }
}

function Favorites() {
  const [favorites, setFavorites] = useState(loadFavorites);

  function removeFavorite(id) {
    const updated = favorites.filter((car) => car.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  function clearFavorites() {
    setFavorites([]);
    localStorage.removeItem("favorites");
  }

  return (
    <div className="favorites">
      <section className="favorites-hero">
        <h1>My Favorites</h1>
        <p>Here are the cars you saved from our store.</p>
      </section>

      <section className="favorites-content">
        <h2>Saved Cars ({favorites.length})</h2>

        {favorites.length === 0 ? (
          <div className="favorites-empty">
            <p>You haven't added any cars to your favorites yet.</p>
            <Link to="/store" className="btn btn-primary">
              Browse Cars
            </Link>
          </div>
        ) : (
          <>
            <div className="favorites-list">
              {favorites.map((car) => (
                <div className="favorite-item" key={car.id}>
                  <img src={car.image} alt={`${car.type} ${car.model}`} />

                  <div className="favorite-details">
                    <h3>
                      {car.type} {car.model}
                    </h3>
                    <p>Year: {car.year}</p>
                    <p>HP: {car.hp}</p>
                    <p>Price: ${car.price.toLocaleString()}</p>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFavorite(car.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <button className="clear-btn" onClick={clearFavorites}>
              Clear All
            </button>
          </>
        )}
      </section>
    </div>
  );
}

export default Favorites;
