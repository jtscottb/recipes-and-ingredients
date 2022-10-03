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
        name: params[:ingredient1]
      )
      recipe.ingredients.create(
        name: params[:ingredient2]
      )
      recipe.ingredients.create(
        name: params[:ingredient3]
      )
      recipe.ingredients.create(
        name: params[:ingredient4]
      )
      recipe.ingredients.create(
        name: params[:ingredient5]
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
    recipe.ingredients.first.update(
      name: params[:ingredient1]
    )
    recipe.ingredients.second.update(
      name: params[:ingredient2]
    )
    recipe.ingredients.third.update(
      name: params[:ingredient3]
    )
    recipe.ingredients.fourth.update(
      name: params[:ingredient4]
    )
    recipe.ingredients.fifth.update(
      name: params[:ingredient5]
    )
    recipe.to_json(include: :ingredients)
  end

  delete "/recipes/:id" do
    recipe = Recipe.find(params[:id])
    recipe.destroy
    recipe.to_json
  end

end