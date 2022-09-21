import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./styles.css";

function Laptops() {
  const [laptops, setLaptops] = useState([]);
  useEffect(() => {
    fetch("https://630ed8ad498924524a8071c0.mockapi.io/Laptop")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setLaptops(res);
      });
  }, []);

  const foramtedLaptop = laptops.map((Lap) => {
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <div className="laptopimage" style={{ height: "30vh" }}>
            <img
              src={Lap.LaptopImage}
              className="card-img-top rounded mx-auto d-block"
              alt=""
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{Lap.LaptopName}</h5>
            <p className="card-text">
              {Lap.LaptopRAM}
              <br /> {Lap.LaptopHD}
              <br /> {Lap.LaptopProcessor}
            </p>
            <Link to={"../Laptop/" + Lap.id} className="btn btn-primary">
              All Details
            </Link>
          </div>
        </div>
      </>
    );
  });

  return foramtedLaptop;
}

export default Laptops;
