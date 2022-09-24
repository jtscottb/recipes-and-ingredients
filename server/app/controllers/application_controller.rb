class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  

  post "/recipes" do
    recipe = Recipe.create(
      name: params[:name],
      instructions: params[:instructions],
      ingredient_id: params[:ingredient_id],
      picture: params[:picture]
      )
      recipe.to_json
  end

  get "/recipes" do
    recipe = Recipe.all.order(:name)
    recipe.to_json
  end

  patch "/recipes/:id" do
    recipe = Recipe.find(params[:id])
    recipe.update(
      name: params[:name],
      instructions: params[:instructions],
      picture: params[:picture]
    )
    recipe.to_json
  end

  delete "/recipes/:id" do
    recipe = Recipe.find(params[:id])
    recipe.destroy
    recipe.to_json
  end

end
