class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end
  
  get "/recipes" do
    recipes = Recipe.all.order(:id)
    teams.to_json
  end

end
