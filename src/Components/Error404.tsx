import { Link } from "react-router-dom";

function Error404() {
  return (
    <div>
      404 Not Found. <br></br>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Error404;
