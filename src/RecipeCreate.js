import React, { useState } from "react";

function RecipeCreate( {handleCreate} ) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  const [formData, setFormData] = useState({...initialFormState})
  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreate(formData);
    setFormData({...initialFormState});
  };
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input id="name" name="name" type="text" onChange={handleChange} value={formData.name} placeholder="Name"/>
            </td>
            <td>
              <input id="cuisine" name="cuisine" type="text" onChange={handleChange} value={formData.cuisine} placeholder="Cuisine"/>
            </td>
            <td>
              <input id="photo" name="photo" type="url" onChange={handleChange} value={formData.photo} placeholder="URL"/>
            </td>
            <td>
              <textarea id="ingredients" name="ingredients" onChange={handleChange} value={formData.ingredients} placeholder="Ingredients"/>
            </td>
            <td>
              <textarea id="preparation" name="preparation" onChange={handleChange} value={formData.preparation} placeholder="Preparation"/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
