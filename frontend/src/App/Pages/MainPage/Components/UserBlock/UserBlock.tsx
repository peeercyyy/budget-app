function UserBlock(props: any) {
  return (
    <div className="block user user_block">
      <div className="user_info">
        <div className="user_img">
          <img
            className="profile_pic"
            src={props.imageSrc}
            alt={props.imageAlt}
          ></img>
        </div>
        <p className="user_name">{props.name}</p>
      </div>
      <div className="user_settings">
        <a href="#">Редактировать</a>
        <a href="#">Выйти</a>
      </div>
    </div>
  );
}

export default UserBlock;
