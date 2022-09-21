import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home_main">
        <div className="home_header">
          <h1>Desire Laptopes</h1>
        </div>
        <div className="home_contant">
          <h3>
            Show More Check Writing QualityComputers are great for almost
            anything; they fulfill every aspect of our lives. We use them to
            play games, watch movies, send emails, surf the internet, write
            essays, and troll people for fun when we’ve had a bad day. They are
            versatile and amazing, but they are all different and I 'm not
            talking about Macs and PCs. This essay is about desktops, laptops,
            and special devices that you would not think of as computers in the
            normal sense; these are called the special class or SC for short.
            They are categories of computers and other such devices.
          </h3>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => {
              navigate("/Laptop");
            }}
          >
            Go to all Laptops{" "}
          </button>
        </div>
      </div>
    </>
  );
}
