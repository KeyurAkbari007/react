import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Laptopadd() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    if (params.id > 0) {
      fetch("https://630ed8ad498924524a8071c0.mockapi.io/Laptop/" + params.id, {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        });
    }
  }, []);

  return (
    <>
      {/* <div className="addtodata">
        <div>
          Enter Laptop Name : &nbsp;
          <span>
            <input
              value={data.LaptopName}
              onChange={(e) => {
                setData({ ...data, LaptopName: e.target.value });
              }}
              type="text"
            />
          </span>
        </div>
        <div>
          Enter Laptop Image :{" "}
          <span>
            <input
              value={data.LaptopImage}
              onChange={(e) => {
                setData({ ...data, LaptopImage: e.target.value });
              }}
              type="text"
            />
          </span>{" "}
        </div>
        <div>
          Enter Laptop Ram :{" "}
          <span>
            <input
              value={data.LaptopRAM}
              onChange={(e) => {
                setData({ ...data, LaptopRAM: e.target.value });
              }}
              type="text"
            />
          </span>{" "}
        </div>
        <div>
          Enter Laptop HD :{" "}
          <span>
            <input
              value={data.LaptopHD}
              onChange={(e) => {
                setData({ ...data, LaptopHD: e.target.value });
              }}
              type="text"
            />
          </span>{" "}
        </div>
        <div>
          Enter Laptop Processor :{" "}
          <span>
            <input
              value={data.LaptopProcessor}
              onChange={(e) => {
                setData({ ...data, LaptopProcessor: e.target.value });
              }}
              type="text"
            />
          </span>{" "}
        </div>
        <div>
          Enter Laptop Graphics Card :{" "}
          <span>
            <input
              value={data.LaptopGraphicsCard}
              onChange={(e) => {
                setData({ ...data, LaptopGraphicsCard: e.target.value });
              }}
              type="text"
            />
          </span>{" "}
        </div>
        <button
          onClick={() => {
            if (params.id > 0) {
              fetch(
                "https://630ed8ad498924524a8071c0.mockapi.io/Laptop/" +
                  params.id,
                {
                  method: "PUT",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-Type": "application/json"
                  }
                }
              ).then(() => {
                navigate("/Laptop");
              });
            } else {
              fetch("https://630ed8ad498924524a8071c0.mockapi.io/Laptop/", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json"
                }
              }).then(() => {
                navigate("/Laptop");
              });
            }
          }}
        >
          {params.id > 0 && "Edit  "}
          {!(params.id > 0) && "Add  "}
          Laptop
        </button>
      </div> */}
      <div className="addform-container">
        {/* <div>
          <h1 className="mb-3">Add Phone Details</h1>
        </div> */}

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingPassword"
            value={data.LaptopName}
            placeholder="Enter Phone Name"
            onChange={(e) => {
              setData({ ...data, LaptopName: e.target.value });
            }}
          ></input>
          <label for="floatingPassword"> Phone Name..</label>
        </div>
        <div class="form-floating mt-3">
          <input
            type="text"
            class="form-control"
            id="floatingPassword"
            value={data.LaptopImage}
            placeholder="Enter Image Link"
            onChange={(e) => {
              setData({ ...data, LaptopImage: e.target.value });
            }}
          ></input>
          <label for="floatingPassword"> Image Link..</label>
        </div>
        <div class="form-floating mt-3">
          <input
            type="text"
            class="form-control"
            id="floatingPassword"
            value={data.LaptopRAM}
            placeholder="Enter Model Name"
            onChange={(e) => {
              setData({ ...data, LaptopRAM: e.target.value });
            }}
          ></input>
          <label for="floatingPassword"> Laptop RAM...</label>
        </div>
        <div class="form-floating mt-3">
          <input
            type="text"
            class="form-control"
            id="floatingPassword"
            value={data.LaptopHD}
            placeholder="Enter Phone Maker"
            onChange={(e) => {
              setData({ ...data, LaptopHD: e.target.value });
            }}
          ></input>
          <label for="floatingPassword"> Laptop HD..</label>
        </div>
        <div class="form-floating mt-3">
          <input
            type="text"
            class="form-control"
            id="floatingPassword"
            value={data.LaptopProcessor}
            placeholder="Enter Description"
            onChange={(e) => {
              setData({ ...data, LaptopProcessor: e.target.value });
            }}
          ></input>
          <label for="floatingPassword"> LaptopProcessor..</label>
        </div>
        <div class="form-floating mt-3">
          <input
            type="text"
            class="form-control"
            id="floatingPassword"
            value={data.LaptopGraphicsCard}
            placeholder="Enter Phone Price"
            onChange={(e) => {
              setData({ ...data, LaptopGraphicsCard: e.target.value });
            }}
          ></input>
          <label for="floatingPassword"> LaptopGraphicsCard..</label>
        </div>
        <button
          onClick={() => {
            if (params.id > 0) {
              fetch(
                "https://630ed8ad498924524a8071c0.mockapi.io/Laptop/" +
                  params.id,
                {
                  method: "PUT",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              ).then(() => {
                navigate("/Laptop");
              });
            } else {
              fetch("https://630ed8ad498924524a8071c0.mockapi.io/Laptop/", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json",
                },
              }).then(() => {
                navigate("/Laptop");
              });
            }
          }}
        >
          {params.id > 0 && "Edit  "}
          {!(params.id > 0) && "Add  "}
          Laptop
        </button>
      </div>
    </>
  );
}
