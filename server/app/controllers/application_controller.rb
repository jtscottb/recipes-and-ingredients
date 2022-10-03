class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get "/recipes" do
    recipes = Recipe.all
    recipes.to_json(include: :ingredients)
  end


  post "/recipes" do
    recipe = Recipe.create(
      name: params[:name],
      instructions: params[:instructions],
      picture: params[:picture]
      )
      recipe.ingredients.create(
        name: params[:ingredients]
      )
      recipe.to_json(include: :ingredients)
  end

  patch "/recipes/:id" do
    recipe = Recipe.find(params[:id])
    recipe.update(
      name: params[:name],
      instructions: params[:instructions],
      picture: params[:picture]
    )
    recipe.ingredients.update(
      name: params[:ingredients]
    )
    recipe.to_json
  end

  delete "/recipes/:id" do
    recipe = Recipe.find(params[:id])
    recipe.destroy
    recipe.to_json
  end

end