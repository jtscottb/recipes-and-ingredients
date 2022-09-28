puts "🌱 Seeding spices..."

# Seed your database here

Recipe.create(name: "Peanut Butter & Jelly Sandwich", instructions: "Take two pieces of bread and spread peanut butter on one piece and jelly on the other. Then put the two pieces together and enjoy", picture:"https://media.istockphoto.com/photos/peanut-butter-and-jelly-sandwich-picture-id454170501?k=20&m=454170501&s=612x612&w=0&h=s1-O68ora9721Gfh3cRytFGzkKwPrx1Ha0Do5Gp4AyU=")
Recipe.create(name: "Avocado Toast", instructions: "Toast a slice of bread, spread avocado over the toast using a knife, and add salt and pepper to taste.", picture: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F07%2Fmain%2F1807w-avocado-toast-recipe.jpg%3Fitok%3D_dDi7ZQQ&w=800&c=sc&poi=face&q=60")

Ingredient.create(name: "Bread, peanut butter & grape jelly", measurement: "Bread: 2 slices, Peanut butter: 2 tablespoons, Jelly: 1 tablespoon", recipe_id: 0)
Ingredient.create(name: "Bread, avocado, salt & pepper", measurement: "Bread: 1 slice, Avocado: 1", recipe_id: 1)

puts "✅ Done seeding!"