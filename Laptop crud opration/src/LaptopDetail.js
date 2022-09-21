import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";

function LaptopDetail() {
  let params = useParams();
  const navigate = useNavigate();

  const [Laptop, setLaptop] = useState({});

  useEffect(() => {
    fetch("https://630ed8ad498924524a8071c0.mockapi.io/Laptop/" + params.id, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setLaptop(res);
      });
  }, []);

  return (
    <>
      <div className="card" style={{ width: "30rem"  }}>
        <img src={Laptop.LaptopImage} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{Laptop.LaptopName}</h5>
          <h5 className="card-title">
            {Laptop.LaptopRAM}
            <br />
            {Laptop.LaptopHD}
            <br />
            {Laptop.LaptopProcessor}
            <br />
            {Laptop.LaptopGraphicsCard}
            <br />
          </h5>
          <div className="tr">
            <div className="td">
              <button
                onClick={() => {
                  fetch(
                    "https://630ed8ad498924524a8071c0.mockapi.io/Laptop/" +
                      params.id,
                    {
                      method: "DELETE",
                    }
                  ).then((res) => {
                    navigate("/Laptop");
                  });
                }}
                // style={{ border: "1px solid red", color: "red" }}
                className="red"
              >
                Delete
              </button>
            </div>
            <div className="td">
              <button
                onClick={() => {
                  navigate("/Laptop/edit/" + params.id);
                }}
                className="Green"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LaptopDetail;
