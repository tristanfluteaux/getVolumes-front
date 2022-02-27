const ChangeUserInfo = ({ user, onChangeHandler }) => {
  return (
    <form>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="email" className="modif-info">
          Email :{" "}
        </label>
        <input
          className="modif-input"
          type="email"
          name="email"
          id="email"
          placeholder={user.email}
          onChange={onChangeHandler}
        />
        <label htmlFor="user_adress" className="modif-info">
          Adresse :{" "}
        </label>
        <input
          className="modif-input"
          name="user_adress"
          type=""
          id="user_adress"
          placeholder={user.user_adress}
          onChange={onChangeHandler}
        />
        <label htmlFor="user_citycode" className="modif-info">
          Code postal :{" "}
        </label>
        <input
          className="modif-input"
          name="user_citycode"
          type=""
          id="user_citycode"
          placeholder={user.user_citycode}
          onChange={onChangeHandler}
        />
        <label htmlFor="user_city" className="modif-info">
          Ville :{" "}
        </label>
        <input
          className="modif-input"
          name="user_city"
          type=""
          id="user_city"
          placeholder={user.user_city}
          onChange={onChangeHandler}
        />
      </div>
    </form>
  );
};

export default ChangeUserInfo;
