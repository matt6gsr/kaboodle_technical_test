import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid h-16 place-items-center mt-16">
      <h1>404 - Not Found!</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};
export default NotFound;
