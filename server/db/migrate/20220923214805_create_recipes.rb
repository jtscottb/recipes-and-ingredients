class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :instructions
      t.integer :ingredient_id
      t.string :picture
    end
  end
end
