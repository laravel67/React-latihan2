import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import carsList from "./data";

function App() {
  return (
    <div>
      <Menu />
    </div>
  );
}

function Header() {
  return <h2>Car Show Room</h2>;
}

function Menu() {
  const cars = carsList;
  const countCars = cars.length;
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };
  return (
    <main className="container">
      <Header />
      {countCars > 0 && (
        <div className="">
          {carsList.map((car, index) => (
            <Car
              key={index}
              name={car.name}
              description={car.description}
              price={rupiah(car.price)}
              img={car.img}
              stocks={car.stocks}
            />
          ))}
          <span className=""> Jumlah Mobil di show room {cars.length}</span>
        </div>
      )}
      <Footer />
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = 10;
  const close = 13;
  // const isOpen = hour < open || hour > close;

  const isOpen = hour >= open && hour <= close;

  // const status = hour < open || hour > close ? "Tutup" : "Buka";
  if (isOpen) {
    return <FooterOpen open={open} close={close} />;
  } else {
    return <FooterClose />;
  }
}

function FooterOpen(props) {
  return (
    <footer>
      <div className="">
        {new Date().getFullYear()} Show Room | Buka Jam {props.open} -Jam{" "}
        {props.close}
        <button className="btn-order">Order</button>
      </div>
      {/* {isOpen && (
        )} */}
    </footer>
  );
}

function FooterClose() {
  return (
    <footer>
      <div className="">
        <p className="">Moho Maaf show room belum dibuka</p>
      </div>
    </footer>
  );
}
function Car(props) {
  return (
    <div className="car">
      <img src={props.img} alt={props.name} width="200px" />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <span>{props.price}</span>
      <div>Stocks: {props.stocks}</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
