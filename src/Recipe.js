import React from "react";

function Recipe({ recipe, handleDelete }) {
    return (
        <tr className="recipe">
            <td>
                {recipe.name}
            </td>
            <td>
                {recipe.cuisine}
            </td>
            <td>
                <img src={recipe.photo} />
            </td>
            <td className="content_td">
                <p>{recipe.ingredients}</p>
            </td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td>
                <button name="delete" onClick={() => handleDelete(recipe)}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Recipe;