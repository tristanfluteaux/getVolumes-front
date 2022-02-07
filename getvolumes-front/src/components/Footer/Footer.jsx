import Ibanez from "../../assets/footer/ibanez.png";
import Fender from "../../assets/footer/fender.png";
import Schecter from "../../assets/footer/schecter.png";
import Dingwall from "../../assets/footer/dingwall.png";

const Footer = () => {
  return (
    <>
      <div
        style={{
          marginTop: "10px",
          paddingTop: "40px",
          backgroundColor: "#7B899E",
          height: "25vh",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "50%" }}>
          <h2>
            Projet expérimental réalisé par Tristan Fluteaux et n'inclu en aucun but commercial ni à but de profits, tout droit est réservé
            auprès des fabriquants.
          </h2>
          <div
            style={{
              display: "flex",
              height: "80px",
              justifyContent: "space-evenly",
              paddingTop:"10px"
            }}
          >
            <img src={Dingwall} alt="brend" />
            <img src={Fender} alt="brend" />
            <img src={Ibanez} alt="brend" />
            <img src={Schecter} alt="brend" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
