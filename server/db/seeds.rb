puts "🌱 Seeding spices..."

# Seed your database here

Recipe.create(id:0, name: "Peanut Butter & Jelly Sandwich", instructions: "Take two pieces of bread and spread peanut butter on one piece and jelly on the other. Then put the two pieces together and enjoy :)")
Recipe.create(id:1, name: "Avocado Toast", instructions: "Toast a slice of bread, spread avocado over the toast using a knife, and add salt and pepper to taste.")

Ingredient.create(name: "Bread, peanut butter & grape jelly", measurement: "Bread: 2 slices, Peanut butter: 2 tablespoons, Jelly: 1 tablespoon", recipe_id: 0)
Ingredient.create(name: "Bread, avocado, salt & pepper", measurement: "Bread: 1 slice, Avocado: 1", recipe_id: 1)

puts "✅ Done seeding!"