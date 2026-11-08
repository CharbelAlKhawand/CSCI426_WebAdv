import Cards from "../components/Cards";
import "./Store.css";

function Store() {
  const cars = [
    {
      id: 1,
      type: "McLaren",
      model: "P1",
      year: 2014,
      hp: 903,
      price: 1500000,
      image: "/images/mclaren-p1.jfif",
    },
    {
      id: 2,
      type: "Subaru",
      model: "WRX STI",
      year: 2004,
      hp: 300,
      price: 25000,
      image: "/images/subaru-wrx-sti.jfif",
    },
    {
      id: 3,
      type: "Bentley",
      model: "Continental GT",
      year: 2020,
      hp: 626,
      price: 180000,
      image: "/images/bentley-continental-gt.jfif",
    },
    {
      id: 4,
      type: "Toyota",
      model: "Supra",
      year: 2021,
      hp: 382,
      price: 55000,
      image: "/images/toyota-supra.jfif",
    },
    {
      id: 5,
      type: "Nissan",
      model: "GT-R R34",
      year: 1999,
      hp: 280,
      price: 150000,
      image: "/images/nissan-gtr-r34.jfif",
    },
  ];

  return (
    <div className="store">
      <section className="store-hero">
        <h1>Our Cars</h1>
        <p>Take a look at the cars we have available.</p>
      </section>

      <section className="store-content">
        <h2>Available Cars</h2>

        <div className="cars-grid">
          {cars.map((car) => (
            <Cards key={car.id} car={car} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Store;
