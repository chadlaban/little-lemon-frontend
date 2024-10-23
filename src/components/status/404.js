import gif from "../../assets/images/gif/monkey-sawing.gif";

function Error(props) {
  return (
    <div className="main-grid">
      <h1>{props.msg}</h1>
      <img src={gif} alt="404_error_gif" />
    </div>
  );
}

export default Error;
