import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import BassWall from "../../assets/bass-paper.jpg";
import ShopNow from "../../components/Button/ShopNow";

import { getUser as listUser } from "../../redux/actions/userActions";

const UserInfo = () => {
  const [updateUser, setUpdateUser] = useState(false);

  useEffect(() => {
    const handleSubmitInfo = () => {
      axios.put();
    };
  }, []);
  const dispatch = useDispatch();

  const getUser = useSelector((state) => state.user);
  const { user, loading, error } = getUser;

  useEffect(() => {
    dispatch(listUser());
  }, [dispatch]);
  return (
    <div
      style={{
        backgroundImage: `url(${BassWall})`,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ color: "white" }}>Vos informations</h2>
      {updateUser ? (
        <form>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <label htmlFor="email" style={{ color: "white" }}>
              Email :{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={user.email}
            />
            <label htmlFor="user_adress" style={{ color: "white" }}>
              Adresse :{" "}
            </label>
            <input
              name="user_adress"
              type=""
              id="user_adress"
              placeholder={user.user_adress}
            />
            <label htmlFor="user_citycode" style={{ color: "white" }}>
              Code postal :{" "}
            </label>
            <input
              name="user_citycode"
              type=""
              id="user_citycode"
              placeholder={user.user_citycode}
            />
            <label htmlFor="user_city" style={{ color: "white" }}>
              Ville :{" "}
            </label>
            <input
              name="user_city"
              type=""
              id="user_city"
              placeholder={user.user_city}
            />
          </div>
        </form>
      ) : (
        <form>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <label htmlFor="email" style={{ color: "white" }}>
              Email :{" "}
            </label>
            <input type="email" name="email" id="email" value={user.email} />
            <label htmlFor="user_adress" style={{ color: "white" }}>
              Adresse :{" "}
            </label>
            <input
              name="user_adress"
              type=""
              id="user_adress"
              value={user.user_adress}
            />
            <label htmlFor="user_citycode" style={{ color: "white" }}>
              Code postal :{" "}
            </label>
            <input
              name="user_citycode"
              type=""
              id="user_citycode"
              value={user.user_citycode}
            />
            <label htmlFor="user_city" style={{ color: "white" }}>
              Ville :{" "}
            </label>
            <input
              name="user_city"
              type=""
              id="user_city"
              value={user.user_city}
            />
          </div>
        </form>
      )}
      <div style={{ paddingTop: "40px" }}>
        {updateUser ? (
          <ShopNow>Sauvgarder les modifications</ShopNow>
        ) : (
          <ShopNow click={() => setUpdateUser(true)}>
            Modifier vos infos
          </ShopNow>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
