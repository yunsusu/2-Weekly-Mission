function Shared({ user }) {
  return (
    <div className="shared">
      <img src={user.img} alt="userimg" />
      <p>{`${user.userName}`}</p>
      <p>{`${user.name}`}</p>
    </div>
  );
}

export default Shared;
