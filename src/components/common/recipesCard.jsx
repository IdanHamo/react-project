import { Link } from "react-router-dom";
const RecipeCard = ({
  recipe: { _id, dishIngredients, dishDescription, dishName, dishImage },
}) => {
  return (
    <div className="card mx-0 my-3" style={{ width: "18rem" }}>
      <img src={dishImage} className="card-img-top" alt={dishName} />
      <div className="card-body">
        <h5 className="card-title">{dishName}</h5>
        <p className="card-text">{dishDescription}</p>
        <hr />
        <p className="h4">Ingredients</p>
        <span>{dishIngredients.join(", ")}</span>
      </div>
      <div className=" p-2">
        <Link
          to={`/cards/fullRecipe/${_id}`}
          className="card-link text-primary"
        >
          Open Recipe
        </Link>

        <Link
          to={`/cards/editRecipe/${_id}`}
          className="card-link text-warning"
        >
          Edit
        </Link>
        <Link to={`/cards/delete/${_id}`} className="card-link text-danger">
          delete
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
