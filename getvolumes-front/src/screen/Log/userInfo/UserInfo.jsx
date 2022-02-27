import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import BassWall from "../../../assets/bass-paper.jpg";
import ShopNow from "../../../components/Button/ShopNow";
import "./userInfo.css";

import { getUser as listUser } from "../../../redux/actions/userActions";
import ChangeUserInfo from "./modules/ChangeUserInfo";

const UserInfo = () => {
  const [updateUser, setUpdateUser] = useState(false);
  const [info, setInfo] = useState({});
  const [refresh, setRefresh] = useState(false);

  const handleSubmitInfo = async (e) => {
    e.preventDefault();
    const newPut = { ...info };
    try {
      axios
        .put(`http://localhost:4000/auth/${1}`, newPut)
        .then(setUpdateUser(false));
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  const dispatch = useDispatch();

  const getUser = useSelector((state) => state.user);
  const { user } = getUser;

  useEffect(() => {
    dispatch(listUser());
  }, [dispatch, refresh]);

  const onChangeHandler = useCallback(
    ({ target: { name, value } }) =>
      console.log("inputChange") ||
      setInfo((state) => ({ ...state, [name]: value }), [])
  );

  return (
    <div
      className="user-container"
      style={{
        backgroundImage: `url(${BassWall})`,
      }}
    >
      <h2 className="user-title">Vos informations</h2>
      {updateUser ? (
        <ChangeUserInfo user={user} onChangeHandler={onChangeHandler} />
      ) : (
        <div className="info-container">
          <p className="check-info">Email : {user.email}</p>
          <p className="check-info">Adresse : {user.user_adress}</p>
          <p className="check-info">Code postal : {user.user_citycode}</p>
          <p className="check-info">Ville : {user.user_city}</p>
        </div>
      )}
      <div style={{ paddingTop: "50px" }}>
        {updateUser ? (
          <ShopNow click={handleSubmitInfo}>
            Sauvgarder les modifications
          </ShopNow>
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
