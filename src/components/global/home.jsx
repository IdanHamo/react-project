import PageHeader from "../common/page-header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <PageHeader
        title="Welcome to Unirex Recipes"
        description="here you can find a lot the recipes and even upload your own recipes and share them with others. you can enjoy it and more easily.  "
      ></PageHeader>

      <div className="mt-5 text-center">
        <span>
          <Link className="home-links p-3 bg-primary" to="/register">
            Register
          </Link>
        </span>
        <span className="m-3">
          <Link className="home-links p-3 bg-primary" to="/login">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Home;
