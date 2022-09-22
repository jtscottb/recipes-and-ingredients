class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end
  
  get "/recipes" do
    recipes = Recipe.all.order(:id)
    recipes.to_json
  end

  get "/ingredients" do
    ingredients = Ingredient.all.order(:id)
    ingredients.to_json
  end

  #Add New Recipe from form
  get "/recipes" do
    recipe = Recipe.create(recipe_name: params[recipe_name])
    recipe.to_json
  end

end
