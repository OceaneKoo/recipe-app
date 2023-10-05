/** @format */
//italy
import pizza from "../italian/pizza-removebg-preview.png";
import cabonara from "../italian/carbonara-removebg-preview.png";
import lasagna from "../italian/lasagna-removebg-preview.png";
import risotto from "../italian/risotto-removebg-preview.png";
import tiramisu from "../italian/tiramisu-removebg-preview.png";
import osso from "../italian/osso-removebg-preview.png";
import salad from "../italian/salad-removebg-preview.png";
import pesto from "../italian/pesto-removebg-preview.png";
import panna from "../italian/panna-removebg-preview.png";
//japanese
import sushi from "../japanese/sushi-removebg-preview.png";
import sashimi from "../japanese/sashimi-removebg-preview.png";
import tempura from "../japanese/tempura-removebg-preview.png";
import tonatsu from "../japanese/Tonkatsu-removebg-preview.png";
import gyoza from "../japanese/Gyoza-removebg-preview.png";
import yakitori from "../japanese/Yakitori-removebg-preview.png";
import udon from "../japanese/udon-removebg-preview.png";
import Okonomiyaki from "../japanese/Okonomiyaki-removebg-preview.png";
import ramen from "../japanese/ramen-removebg-preview.png";
//thai
import padthai from "../thai/pad-thai-removebg-preview.png";
import padew from "../thai/pad-see-ew-removebg-preview.png";
import mango from "../thai/mango-salad-removebg-preview.png";
import papaya from "../thai/papaya-salad-removebg-preview (2).png";
import massaman from "../thai/massaman-removebg-preview (1).png";
import rice from "../thai/sticky-rice-removebg-preview.png";
import greencurry from "../thai/green-curry-removebg-preview.png";
import tomyum from "../thai/tom-yum-goong-removebg-preview (2).png";
import panang from "../thai/panang-curry-removebg-preview.png";
//french
import coq from "../french/coq-removebg-preview.png";
import ratatouille from "../french/Ratatouille-removebg-preview.png";
import beef from "../french/Beef-Bourguignon-removebg-preview.png";
import nicoise from "../french/Salade-Niçoise-removebg-preview.png";
import croissant from "../french/croissant-removebg-preview.png";
import quichie from "../french/quiche-removebg-preview.png";
import creme from "../french/creme-removebg-preview.png";
import daude from "../french/daube-removebg-preview.png";
import duck from "../french/duck-removebg-preview.png";
export const dummyData = [
	{
		name: "italian",
		dishes: [
			{
				id: "1",
				name: "Margherita Pizza",
				img: pizza,
				about:
					"The Margherita pizza is a classic Italian pizza topped with tomato sauce, fresh mozzarella cheese, and fresh basil leaves.",
				instructions:
					"Preheat your oven to the highest temperature it can go, typically around 475°F to 500°F (245°C to 260°C).:On a floured surface, roll out the pizza dough to your desired thickness. You can use a rolling pin or your hands.Prepare the Pizza Base:Place the rolled-out dough on a pizza stone or a baking sheet lined with parchment paper.:Spread the tomato sauce evenly over the pizza dough, leaving a small border around the edges for the crust.:Tear or slice the mozzarella cheese and distribute it evenly over the tomato sauce.:Place fresh basil leaves on top of the cheese. You can tear them or leave them whole for a rustic look.:Drizzle the olive oil over the pizza. This adds flavor and helps the pizza crust to turn golden brown.:Carefully transfer the pizza into the preheated oven. Bake for about 10-15 minutes, or until the crust is golden and the cheese is bubbly and slightly browned.:Remove the pizza from the oven and let it cool for a minute. Slice it into wedges and serve while it's still hot and fresh.",
				ingredients: [
					{ name: "Pizza dough", amount: "300g" },
					{ name: "Tomato sauce", amount: "1 cup" },
					{ name: "Mozzarella cheese", amount: "200g" },
					{ name: "Fresh basil leaves", amount: "Handful" },
					{ name: "Olive oil", amount: "2 tablespoons" },
				],
				calories: 800,
				time: "20 minutes",
				rating: 4.8,
				difficulty: "Easy",
			},
			{
				id: "2",
				name: " Carbonara",
				img: cabonara,

				about:
					"Spaghetti Carbonara is a classic Roman pasta dish known for its creamy sauce made from eggs, cheese, and pancetta. It's a comfort food favorite.",
				instructions:
					"Boil the Spaghetti: Cook the spaghetti in a large pot of boiling salted water until al dente. Drain and set aside.Cook the Bacon: While the spaghetti is cooking, cut the bacon into small pieces and cook it in a skillet over medium heat until crispy. Remove from the pan and set aside.Prepare the Egg Mixture: In a bowl, whisk together the eggs, grated Parmesan cheese, and black pepper. This will be the creamy sauce for the carbonara.Sauté the Garlic: In the same skillet, add the minced garlic and cook for about 30 seconds, or until fragrant.Combine the Ingredients: Add the cooked spaghetti to the skillet with the garlic. Toss well to coat the spaghetti with the garlic flavor.Add the Bacon: Add the cooked bacon pieces to the skillet and toss again to distribute the bacon evenly.Pour in the Egg Mixture: Remove the skillet from heat. Quickly pour the egg and cheese mixture over the spaghetti and toss continuously. The residual heat from the spaghetti will cook the eggs, creating a creamy sauce.Serve: Plate the spaghetti carbonara and garnish with additional black pepper and grated Parmesan cheese if desired.",

				ingredients: [
					{ name: "Spaghetti", amount: "200g" },
					{ name: "Bacon", amount: "150g" },
					{ name: "Eggs", amount: "3" },
					{ name: "Parmesan cheese", amount: "1/2 cup" },
					{ name: "Garlic", amount: "2 cloves" },
					{ name: "Black pepper", amount: "1 teaspoon" },
				],
				calories: 700,
				time: "15 minutes",
				rating: 4.7,
				difficulty: "Intermediate",
			},
			{
				id: "3",
				name: "Lasagna",
				img: lasagna,

				about:
					"Lasagna is a layered Italian pasta dish made with sheets of lasagna noodles, ricotta cheese, mozzarella cheese, and a rich meat sauce.",
				instructions:
					"Preheat the Oven:Preheat your oven to 375°F (190°C).Boil the Lasagna Noodles:Bring a large pot of salted water to a boil. Cook the lasagna noodles according to the package instructions until they are al dente. Drain and set aside.Brown the Ground Beef:In a large skillet, cook the ground beef over medium-high heat until it's browned and cooked through. Drain any excess fat.Layer the Lasagna:In a baking dish, spread a thin layer of tomato sauce on the bottom. Place a layer of lasagna noodles over the sauce.Spread a layer of ricotta cheese over the noodles, followed by a layer of ground beef and a layer of shredded mozzarella cheese.Repeat the layers until all ingredients are used, finishing with a layer of mozzarella cheese on top.Bake:Cover the baking dish with aluminum foil and bake in the preheated oven for about 25-30 minutes, or until the cheese is bubbly and golden.Rest and Serve:Allow the lasagna to rest for a few minutes before slicing and serving. remove all the next line ",
				ingredients: [
					{ name: "Lasagna noodles", amount: "12 sheets" },
					{ name: "Ricotta cheese", amount: "2 cups" },
					{ name: "Mozzarella cheese", amount: "2 cups (shredded)" },
					{ name: "Ground beef", amount: "1 pound" },
					{ name: "Tomato sauce", amount: "3 cups" },
				],
				calories: 900,
				time: "1.5 hours",
				rating: 4.9,
				difficulty: "Intermediate",
			},
			{
				id: "4",
				name: "Risotto ",
				img: risotto,

				about:
					"Risotto ai Funghi is a creamy Italian rice dish cooked with mushrooms, garlic, onions, and a broth made from simmering mushrooms.",
				instructions:
					"Prepare the Broth:Heat the chicken broth in a separate pot and keep it warm.Sauté the Onions:In a large, deep skillet or a wide saucepan, melt the butter over medium heat. Add the chopped onion and sauté until translucent.Cook the Mushrooms:Add the sliced mushrooms to the skillet with the onions. Cook until the mushrooms release their moisture and turn golden brown. This should take about 5-7 minutes.Toast the Rice:Add the Arborio rice to the skillet with the mushrooms and onions. Cook for about 2-3 minutes, stirring constantly, until the rice is well-coated with the butter and has a slightly translucent edge.Start Adding Broth:Begin adding the warm chicken broth, one ladle at a time, to the rice mixture. Stir constantly and allow the liquid to be absorbed before adding more. This process should take about 18-20 minutes.Continue Adding Broth:Keep adding broth and stirring until the rice is creamy but still slightly al dente. Taste occasionally to check the doneness.Final Touches:Stir in the grated Parmesan cheese. If the risotto seems too thick, you can add a bit more broth.Season and Serve:Taste and adjust the seasoning with salt and pepper as needed.Optional Garnish:You can garnish with extra grated Parmesan cheese and some freshly chopped parsley if desired.Serve Warm:Serve the Mushroom Risotto immediately while it's hot.",
				ingredients: [
					{ name: "Arborio rice", amount: "1 cup" },
					{ name: "Mushrooms", amount: "200g (sliced)" },
					{ name: "Onion", amount: "1 (chopped)" },
					{ name: "Chicken broth", amount: "4 cups" },
					{ name: "Butter", amount: "2 tablespoons" },
					{ name: "Parmesan cheese", amount: "1/2 cup (grated)" },
				],
				calories: 600,
				time: "30 minutes",
				rating: 4.6,
				difficulty: "Intermediate",
			},
			{
				id: "5",
				name: "Tiramisu",
				img: tiramisu,

				about:
					"Tiramisu is a classic Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.",
				instructions:
					"Prepare the Coffee:Brew a cup of strong coffee and let it cool to room temperature.Whip the Egg Yolks:In a mixing bowl, whisk the egg yolks until they become pale and creamy.Add Mascarpone:Gently fold the mascarpone cheese into the whipped egg yolks until well combined.Dip the Ladyfingers:Quikly dip each ladyfinger into the brewed coffee. Be careful not to soak them too long, as they can become too soggy.Layer the Dish:Arrange a layer of soaked ladyfingers in the bottom of a serving dish.Spread the Mascarpone Mixture:Spread half of the mascarpone and egg yolk mixture over the ladyfingers.Repeat Layers:Add another layer of soaked ladyfingers on top of the mascarpone mixture.Finish with Mascarpone Mixture:Spread the remaining mascarpone mixture over the second layer of ladyfingers.Chill:Cover the dish and refrigerate for at least 4 hours or overnight. This allows the flavors to meld and the dessert to set.Dust with Cocoa Powder:Before serving, dust the top with cocoa powder using a fine sieve or sifter.Serve and Enjoy:Slice and serve your delicious homemade Tiramisu.",
				ingredients: [
					{ name: "Mascarpone cheese", amount: "8 ounces" },
					{ name: "Egg yolks", amount: "4" },
					{ name: "Ladyfingers", amount: "24" },
					{ name: "Coffee", amount: "1 cup (brewed and cooled)" },
					{ name: "Cocoa powder", amount: "2 tablespoons" },
				],
				calories: 450,
				time: "25 minutes",
				rating: 4.8,
				difficulty: "Intermediate",
			},
			{
				id: "6",
				name: "Caprese Salad",
				img: salad,

				about:
					"Caprese Salad is a simple Italian salad made with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of balsamic glaze.",
				instructions:
					"Slice the Tomatoes and Mozzarella:Wash and slice the tomatoes into ¼-inch thick rounds. Similarly, slice the fresh mozzarella cheese into similar-sized rounds.:Arrange the tomato and mozzarella slices on a serving platter, alternating them and slightly overlapping.:Tuck fresh basil leaves in between the tomato and mozzarella slices. You can tear them slightly for added aroma.Drizzle with Olive Oil and Balsamic Glaze:Drizzle olive oil and balsamic glaze over the salad.The glaze adds a sweet and tangy flavor that complements the dish beautifully.Season with Salt and Pepper:Season the salad with a pinch of salt and a sprinkle of black pepper to taste.Seeve Fresh:Serve the Caprese salad immediately to enjoy the flavors at their freshest.",
				ingredients: [
					{ name: "Tomatoes", amount: "2 large" },
					{ name: "Fresh mozzarella cheese", amount: "200g" },
					{ name: "Fresh basil leaves", amount: "Handful" },
					{ name: "Balsamic glaze", amount: "2 tablespoons" },
					{ name: "Olive oil", amount: "2 tablespoons" },
					{ name: "Salt", amount: "to taste" },
					{ name: "Black pepper", amount: "to taste" },
				],
				calories: 300,
				time: "10 minutes",
				rating: 4.7,
				difficulty: "Easy",
			},
			{
				id: "7",
				name: "Ossobuco",
				img: osso,

				about:
					"Ossobuco is a Milanese specialty consisting of braised veal shanks cooked with white wine, broth, and gremolata (a mixture of lemon zest, garlic, and parsley).",
				instructions:
					"Prepare the Veal Shanks:Season the veal shanks with salt and black pepper on both sides. This helps to enhance the flavor of the meat.Sear the Veal Shanks:In a large, heavy-bottomed pot or Dutch oven, heat some olive oil over medium-high heat. Once hot, add the veal shanks and sear them until they are browned on all sides. This should take about 5-7 minutes per side. Remove the shanks and set them aside.Prepare the Tomatoes:In the same pot, add the tomatoes. You can either peel and chop them or use canned diced tomatoes. Cook for a few minutes until they start to soften.Add White Wine:Pour in the white wine and let it simmer for a few minutes to reduce and concentrate the flavors.Return Veal Shanks:Return the veal shanks to the pot, placing them on top of the tomato mixture.Pour in Broth:Add the broth to the pot, making sure the veal shanks are mostly submerged. You can use beef or veal broth for this.Simmer and Braise:Cover the pot and reduce the heat to low. Let the ossobuco simmer and braise for about 1.5 to 2 hours, or until the meat is tender and easily pulls away from the bone. Check occasionally and add more broth if needed to keep the shanks partially submerged.Prepare Gremolata:While the ossobuco is cooking, prepare the gremolata. Finely chop fresh parsley, garlic, and lemon zest and combine them in a small bowl.Serve:Once the veal shanks are tender and the sauce has thickened, remove the pot from heat. Sprinkle the gremolata over the top for a burst of fresh flavor.Plate and Enjoy:Serve your delicious ossobuco with a side of risotto, polenta, or mashed potatoes, and enjoy this Italian classic.",
				ingredients: [
					{ name: "Veal shanks", amount: "4 pieces" },
					{ name: "Tomatoes", amount: "4 large" },
					{ name: "White wine", amount: "1 cup" },
					{ name: "Broth", amount: "2 cups" },
					{
						name: "Gremolata (lemon zest, garlic, parsley)",
						amount: "for garnish",
					},
					{ name: "Salt", amount: "to taste" },
					{ name: "Black pepper", amount: "to taste" },
				],
				calories: 900,
				time: "2.5 hours",
				rating: 4.5,
				difficulty: "Advanced",
			},

			{
				id: "8",
				name: "Pesto ",
				img: pesto,

				about:
					"A traditional Ligurian sauce made from fresh basil leaves, garlic, pine nuts, Parmesan cheese, and olive oil, often served with pasta.",
				instructions:
					"Prepare the Ingredients:Wash and dry the fresh basil leaves. Peel and roughly chop the garlic cloves.Toast the Pine Nuts (Optional):In a dry skillet over low-medium heat, toast the pine nuts until they turn golden brown. This should take about 2-3 minutes. Be sure to watch them closely as they can burn quickly.Blend the Ingredients:In a food processor or blender, combine the fresh basil leaves, chopped garlic, toasted pine nuts, grated Parmesan cheese, salt, and black pepper.Blend and Gradually Add Olive Oil:While the processor is running, gradually pour in the olive oil in a steady stream. This helps to emulsify the pesto and create a smooth, creamy consistency.Scrape Down the Sides (Optional):Stop the processor and scrape down the sides with a spatula to ensure all ingredients are well incorporated.Adjust Seasoning (Optional):Taste the pesto and adjust the salt and pepper to your preference.Store or Use Immediately:If not using immediately, transfer the pesto to an airtight container and store it in the refrigerator. Pesto can be stored for up to a week.",
				ingredients: [
					{ name: "Fresh basil leaves", amount: "2 cups" },
					{ name: "Garlic", amount: "2 cloves" },
					{ name: "Pine nuts", amount: "1/4 cup" },
					{ name: "Parmesan cheese", amount: "1/2 cup (grated)" },
					{ name: "Olive oil", amount: "1/2 cup" },
					{ name: "Salt", amount: "to taste" },
					{ name: "Black pepper", amount: "to taste" },
				],
				calories: 350,
				time: "15 minutes",
				rating: 4.9,
				difficulty: "Easy",
			},
			{
				id: "9",
				name: "Panna Cotta",
				img: panna,
				about:
					"Panna Cotta is a creamy Italian dessert that translates to 'cooked cream.' It's made with cream, sugar, and gelatin, often flavored with vanilla or citrus.",
				instructions:
					"Prepare the Gelatin:In a small bowl, sprinkle the gelatin over 1/4 cup of cold water. Let it sit for about 5 minutes to bloom.Heat the Cream and Sugar:In a saucepan, combine the heavy cream and granulated sugar. Warm the mixture over medium heat, stirring occasionally, until the sugar has completely dissolved. You want the mixture to be hot but not boiling.Incorporate Gelatin:Add the bloomed gelatin to the warm cream mixture. Stir continuously until the gelatin has completely dissolved.Add Flavor (Optional):If desired, add citrus zest (such as lemon or orange) for extra flavor. This step is optional and can be skipped if you prefer a classic vanilla panna cotta.Integrate Vanilla Extract:Stir in the vanilla extract for a lovely aromatic touch.Strain the Mixture (Optional):If you used citrus zest and want a smooth texture, strain the mixture through a fine-mesh sieve to remove the zest.Pour into Molds or Glasses:Divide the mixture evenly into individual serving molds or glasses.Chill and Set:Allow the panna cotta to cool at room temperature for a bit, then cover and transfer it to the refrigerator. Let it chill for at least 4 hours, or until completely set.Serve:Once set, you can serve the panna cotta as is or with a fruit compote, berry sauce, or caramel drizzle.",
				ingredients: [
					{ name: "Heavy cream", amount: "2 cups" },
					{ name: "Granulated sugar", amount: "1/2 cup" },
					{ name: "Gelatin powder", amount: "2 teaspoons" },
					{ name: "Vanilla extract", amount: "1 teaspoon" },
					{ name: "Citrus zest (optional)", amount: "for flavor" },
				],
				calories: 320,
				time: "3 hours",
				rating: 4.8,
				difficulty: "Intermediate",
			},
		],
	},
	{
		name: "thai",
		dishes: [
			{
				id: "1",
				name: "Pad Thai",
				img: padthai,
				about:
					"Pad Thai is a popular Thai stir-fried noodle dish with a balance of sweet, sour, salty, and spicy flavors. It typically includes noodles, shrimp or chicken, tofu, peanuts, and lime.",
				instructions:
					"1. Stir-fry noodles with protein, tofu, and vegetables. 2. Add sauce and toss. 3. Serve with peanuts and lime.",
				ingredients: [
					{ name: "Rice noodles", amount: "200g" },
					{ name: "Shrimp or chicken", amount: "150g" },
					{ name: "Firm tofu", amount: "100g (cubed)" },
					{ name: "Bean sprouts", amount: "1 cup" },
					{ name: "Peanuts", amount: "1/4 cup (crushed)" },
					{ name: "Lime wedges", amount: "For garnish" },
				],
				calories: 400,
				time: "30 minutes",
				rating: 4.8,
				difficulty: "Intermediate",
			},
			{
				id: "2",
				name: "GreenCurry",
				img: greencurry,

				about:
					"Green Curry is a fragrant Thai curry known for its vibrant green color and spicy, aromatic flavor. It typically includes green curry paste, coconut milk, protein, and vegetables.",
				instructions:
					"1. Cook green curry paste with coconut milk. 2. Add protein and vegetables. 3. Simmer until cooked.",
				ingredients: [
					{ name: "Green curry paste", amount: "3 tablespoons" },
					{ name: "Coconut milk", amount: "400ml" },
					{ name: "Chicken or tofu", amount: "200g" },
					{ name: "Eggplant", amount: "1 cup (sliced)" },
					{ name: "Basil leaves", amount: "1/2 cup" },
				],
				calories: 500,
				time: "40 minutes",
				rating: 4.7,
				difficulty: "Intermediate",
			},
			{
				id: "3",
				name: "TomYumGong",
				img: tomyum,

				about:
					"Tom Yum Goong is a spicy and sour Thai soup with prawns, flavored with fragrant herbs like lemongrass, kaffir lime leaves, and galangal.",
				instructions:
					"1. Simmer herbs in broth. 2. Add prawns and mushrooms. 3. Season with lime juice and fish sauce.",
				ingredients: [
					{ name: "Prawns", amount: "200g" },
					{ name: "Lemongrass stalks", amount: "2" },
					{ name: "Kaffir lime leaves", amount: "4" },
					{ name: "Galangal", amount: "4 slices" },
					{ name: "Mushrooms", amount: "1 cup" },
					{ name: "Lime juice", amount: "3 tablespoons" },
					{ name: "Fish sauce", amount: "2 tablespoons" },
				],
				calories: 300,
				time: "25 minutes",
				rating: 4.9,
				difficulty: "Intermediate",
			},
			{
				id: "4",
				name: "Massaman",
				img: massaman,

				about:
					"Massaman Curry is a rich and hearty Thai curry with influences from Persian cuisine. It features tender meat, potatoes, peanuts, and a fragrant curry sauce.",
				instructions:
					"1. Cook Massaman curry paste with coconut milk. 2. Add meat, potatoes, and peanuts. 3. Simmer until cooked.",
				ingredients: [
					{ name: "Massaman curry paste", amount: "3 tablespoons" },
					{ name: "Coconut milk", amount: "400ml" },
					{ name: "Beef or chicken", amount: "300g" },
					{ name: "Potatoes", amount: "2 large (cubed)" },
					{ name: "Peanuts", amount: "1/4 cup" },
				],
				calories: 600,
				time: "45 minutes",
				rating: 4.8,
				difficulty: "Intermediate",
			},
			{
				id: "5",
				name: "PapayaSalad",
				img: papaya,

				about:
					"Som Tum is a spicy Thai salad made with shredded green papaya, tomatoes, green beans, and peanuts, dressed in a zesty lime dressing.",
				instructions:
					"1. Pound papaya, tomatoes, and beans in a mortar. 2. Add lime dressing and toss.",
				ingredients: [
					{ name: "Green papaya", amount: "1 cup (shredded)" },
					{ name: "Cherry tomatoes", amount: "1/2 cup" },
					{ name: "Long beans", amount: "1/4 cup" },
					{ name: "Peanuts", amount: "2 tablespoons" },
					{ name: "Lime juice", amount: "3 tablespoons" },
					{ name: "Fish sauce", amount: "2 tablespoons" },
					{ name: "Palm sugar", amount: "1 tablespoon" },
				],
				calories: 250,
				time: "20 minutes",
				rating: 4.7,
				difficulty: "Easy",
			},
			{
				id: "6",
				name: "PanangCurry",
				img: panang,

				about:
					"Panang Curry is a creamy and mildly spicy Thai curry known for its rich and nutty flavor. It typically includes panang curry paste, coconut milk, protein, and kaffir lime leaves.",
				instructions:
					"1. Cook panang curry paste with coconut milk. 2. Add protein and vegetables. 3. Simmer until cooked.",
				ingredients: [
					{ name: "Panang curry paste", amount: "3 tablespoons" },
					{ name: "Coconut milk", amount: "400ml" },
					{ name: "Chicken or tofu", amount: "200g" },
					{ name: "Red bell pepper", amount: "1 (sliced)" },
					{ name: "Kaffir lime leaves", amount: "4" },
				],
				calories: 550,
				time: "35 minutes",
				rating: 4.7,
				difficulty: "Intermediate",
			},
			{
				id: "7",
				name: "PadSeeEw",
				img: padew,
				about:
					"Pad See Ew is a popular Thai stir-fried noodle dish with a sweet and savory soy-based sauce. It typically includes wide rice noodles, protein, and Chinese broccoli.",
				instructions:
					"1. Stir-fry noodles with protein and Chinese broccoli. 2. Add sauce and toss.",
				ingredients: [
					{ name: "Wide rice noodles", amount: "200g" },
					{ name: "Chicken or tofu", amount: "150g" },
					{ name: "Chinese broccoli", amount: "1 cup (chopped)" },
					{ name: "Soy sauce", amount: "3 tablespoons" },
					{ name: "Oyster sauce", amount: "2 tablespoons" },
					{ name: "Eggs", amount: "2" },
				],
				calories: 450,
				time: "30 minutes",
				rating: 4.6,
				difficulty: "Intermediate",
			},
			{
				id: "8",
				name: "StickyRice",
				img: rice,

				about:
					"Khao Niew Mamuang is a popular Thai dessert made with sweet sticky rice, ripe mango, and coconut milk. It's a delightful combination of creamy, sweet, and slightly salty flavors.",
				instructions:
					"1. Rinse and soak glutinous rice. 2. Steam the rice until cooked. 3. Prepare coconut sauce. 4. Serve sticky rice with mango slices and drizzle with coconut sauce.",
				ingredients: [
					{ name: "Glutinous rice", amount: "1 cup" },
					{ name: "Ripe mango", amount: "1 (peeled and sliced)" },
					{ name: "Coconut milk", amount: "1/2 cup" },
					{ name: "Palm sugar", amount: "2 tablespoons" },
					{ name: "Salt", amount: "1/4 teaspoon" },
					{
						name: "Sesame seeds",
						amount: "1 tablespoon (toasted, for garnish)",
					},
				],
				calories: 300,
				time: "45 minutes",
				rating: 4.9,
				difficulty: "Easy",
			},
			{
				id: "9",
				name: " MangoSalad",
				img: mango,

				about:
					"Yum Mamuang is a zesty Thai salad made with green mango, shrimp, peanuts, and herbs, all tossed in a spicy lime dressing.",
				instructions:
					"1. Shred mango and cook shrimp. 2. Toss with peanuts, herbs, and lime dressing.",
				ingredients: [
					{ name: "Green mango", amount: "1 cup (shredded)" },
					{ name: "Shrimp", amount: "150g (cooked and peeled)" },
					{ name: "Peanuts", amount: "1/4 cup (roasted and crushed)" },
					{ name: "Lime juice", amount: "3 tablespoons" },
					{ name: "Fish sauce", amount: "2 tablespoons" },
					{ name: "Bird's eye chilies", amount: "2 (minced, optional)" },
					{ name: "Cilantro and mint leaves", amount: "For garnish" },
				],
				calories: 250,
				time: "25 minutes",
				rating: 4.7,
				difficulty: "Easy",
			},
		],
	},
	{
		name: "french",
		dishes: [
			{
				id: "1",
				name: "Coq au Vin",
				img: coq,
				about:
					"Coq au Vin is a classic French dish that features chicken slow-cooked in red wine with onions, mushrooms, and bacon. It's known for its rich and savory flavors.",
				instructions:
					"1. Marinate chicken in red wine. 2. Sauté bacon, onions, and mushrooms. 3. Add chicken and simmer until cooked.",
				ingredients: [
					{ name: "Chicken pieces", amount: "4 (legs and thighs)" },
					{ name: "Red wine", amount: "1 bottle" },
					{ name: "Onions", amount: "2 (sliced)" },
					{ name: "Mushrooms", amount: "200g (sliced)" },
					{ name: "Bacon", amount: "100g (chopped)" },
					{ name: "Flour", amount: "2 tablespoons (for coating chicken)" },
					{ name: "Chicken broth", amount: "1 cup" },
					{ name: "Garlic", amount: "3 cloves (minced)" },
					{ name: "Thyme", amount: "1 teaspoon" },
					{ name: "Bay leaves", amount: "2" },
					{ name: "Butter", amount: "2 tablespoons" },
				],
				calories: 600,
				time: "2 hours",
				rating: 4.8,
				difficulty: "Intermediate",
			},
			{
				id: "2",
				name: "Ratatouille",
				img: ratatouille,

				about:
					"Ratatouille is a Provencal vegetable stew that celebrates the flavors of summer. It includes tomatoes, eggplant, zucchini, bell peppers, and herbs.",
				instructions:
					"1. Sauté vegetables with herbs and tomatoes. 2. Layer and bake until tender.",
				ingredients: [
					{ name: "Eggplant", amount: "1 (cubed)" },
					{ name: "Zucchini", amount: "2 (cubed)" },
					{ name: "Bell peppers", amount: "2 (sliced)" },
					{ name: "Tomatoes", amount: "4 (chopped)" },
					{ name: "Onions", amount: "2 (sliced)" },
					{ name: "Garlic", amount: "3 cloves (minced)" },
					{ name: "Olive oil", amount: "3 tablespoons" },
					{ name: "Basil leaves", amount: "1/4 cup (chopped)" },
					{ name: "Thyme", amount: "1 teaspoon" },
					{ name: "Bay leaves", amount: "2" },
					{ name: "Salt and pepper", amount: "To taste" },
				],
				calories: 400,
				time: "1.5 hours",
				rating: 4.7,
				difficulty: "Easy",
			},
			{
				id: "3",
				name: "Bourguignon",
				img: beef,

				about:
					"Beef Bourguignon is a classic French beef stew cooked in red wine, with onions, carrots, and mushrooms. It's known for its hearty and robust flavor.",
				instructions:
					"1. Marinate beef in red wine. 2. Sauté onions, carrots, and mushrooms. 3. Add beef and simmer until tender.",
				ingredients: [
					{ name: "Beef stew meat", amount: "800g (cubed)" },
					{ name: "Red wine", amount: "1 bottle" },
					{ name: "Onions", amount: "2 (sliced)" },
					{ name: "Carrots", amount: "3 (sliced)" },
					{ name: "Mushrooms", amount: "200g (sliced)" },
					{ name: "Bacon", amount: "100g (chopped)" },
					{ name: "Flour", amount: "2 tablespoons (for coating beef)" },
					{ name: "Beef broth", amount: "2 cups" },
					{ name: "Garlic", amount: "3 cloves (minced)" },
					{ name: "Thyme", amount: "1 teaspoon" },
					{ name: "Bay leaves", amount: "2" },
					{ name: "Butter", amount: "2 tablespoons" },
				],
				calories: 700,
				time: "3 hours",
				rating: 4.9,
				difficulty: "Intermediate",
			},
			{
				id: "4",
				name: "Croissant",
				img: croissant,

				about:
					"A Croissant is a buttery, flaky pastry that is a staple of French cuisine. It's made from layered dough and is perfect for breakfast or as a snack.",
				instructions:
					"1. Prepare laminated dough. 2. Shape and proof croissants. 3. Bake until golden brown.",
				ingredients: [
					{ name: "All-purpose flour", amount: "250g" },
					{ name: "Unsalted butter", amount: "150g (cold)" },
					{ name: "Water", amount: "125ml (cold)" },
					{ name: "Milk", amount: "60ml (cold)" },
					{ name: "Sugar", amount: "2 tablespoons" },
					{ name: "Yeast", amount: "2 teaspoons" },
					{ name: "Salt", amount: "1 teaspoon" },
				],
				calories: 250,
				time: "3 hours",
				rating: 4.8,
				difficulty: "Advanced",
			},
			{
				id: "5",
				name: "Niçoise",
				img: nicoise,

				about:
					"Salade Niçoise is a colorful and refreshing French salad originating from Nice. It features tuna, hard-boiled eggs, tomatoes, olives, and green beans.",
				instructions:
					"1. Arrange lettuce, tuna, eggs, tomatoes, beans, and olives on a platter. 2. Drizzle with vinaigrette.",
				ingredients: [
					{ name: "Tuna steaks", amount: "200g (grilled)" },
					{ name: "Eggs", amount: "4 (hard-boiled and halved)" },
					{ name: "Cherry tomatoes", amount: "1 cup" },
					{ name: "Green beans", amount: "1 cup (blanched)" },
					{ name: "Kalamata olives", amount: "1/2 cup" },
					{ name: "Lettuce", amount: "4 cups (mixed greens)" },
					{ name: "Anchovy fillets", amount: "4" },
					{ name: "Red onion", amount: "1/4 (thinly sliced)" },
					{ name: "Potatoes", amount: "2 (boiled and quartered)" },
					{ name: "Vinaigrette", amount: "For drizzling" },
				],
				calories: 350,
				time: "30 minutes",
				rating: 4.7,
				difficulty: "Easy",
			},
			{
				id: "6",
				name: "QuicheLorraine",
				img: quichie,

				about:
					"Quiche Lorraine is a savory French tart known for its buttery crust and creamy egg filling with bacon or lardons. It's a popular brunch dish.",
				instructions:
					"1. Prepare pie crust. 2. Cook bacon and spread in crust. 3. Whisk eggs, cream, and seasonings. Pour over bacon and bake.",
				ingredients: [
					{ name: "Pie crust", amount: "1 (store-bought or homemade)" },
					{ name: "Bacon or lardons", amount: "200g (cooked and chopped)" },
					{ name: "Eggs", amount: "4" },
					{ name: "Heavy cream", amount: "250ml" },
					{ name: "Milk", amount: "100ml" },
					{ name: "Gruyere cheese", amount: "100g (grated)" },
					{ name: "Nutmeg", amount: "1/4 teaspoon (optional)" },
					{ name: "Salt and pepper", amount: "To taste" },
				],
				calories: 400,
				time: "50 minutes",
				rating: 4.6,
				difficulty: "Intermediate",
			},
			{
				id: "7",
				name: "Boeuf en Daube",
				img: daude,

				about:
					"Boeuf en Daube is a traditional Provençal beef stew slow-cooked in red wine with a variety of herbs and vegetables. It's a flavorful and hearty dish.",
				instructions:
					"1. Marinate beef in red wine and herbs. 2. Sauté onions, carrots, and garlic. 3. Add beef and simmer until tender.",
				ingredients: [
					{ name: "Beef chuck roast", amount: "1.5 kg (cut into chunks)" },
					{ name: "Red wine", amount: "1 bottle" },
					{ name: "Onions", amount: "2 (sliced)" },
					{ name: "Carrots", amount: "4 (sliced)" },
					{ name: "Garlic cloves", amount: "4 (minced)" },
					{ name: "Thyme", amount: "1 teaspoon" },
					{ name: "Bay leaves", amount: "2" },
					{ name: "Orange zest", amount: "1 tablespoon" },
					{ name: "Tomato paste", amount: "2 tablespoons" },
					{ name: "Beef broth", amount: "2 cups" },
					{ name: "Olive oil", amount: "2 tablespoons" },
				],
				calories: 800,
				time: "4 hours",
				rating: 4.7,
				difficulty: "Intermediate",
			},
			{
				id: "8",
				name: "Duck à l'Orange",
				img: duck,

				about:
					"Duck à l'Orange is a classic French dish that features roast duck served with a sweet and tangy orange sauce. It's a combination of rich and citrusy flavors.",
				instructions:
					"1. Roast duck until golden and crisp. 2. Prepare orange sauce with orange juice, sugar, and vinegar. 3. Serve duck with sauce.",
				ingredients: [
					{ name: "Duck", amount: "1 whole (about 2 kg)" },
					{ name: "Oranges", amount: "4 (juiced and zested)" },
					{ name: "Sugar", amount: "1 cup" },
					{ name: "White wine vinegar", amount: "1/2 cup" },
					{ name: "Chicken broth", amount: "1 cup" },
					{ name: "Grand Marnier (optional)", amount: "2 tablespoons" },
					{ name: "Butter", amount: "2 tablespoons" },
					{ name: "Salt and pepper", amount: "To taste" },
				],
				calories: 1200,
				time: "2.5 hours",
				rating: 4.8,
				difficulty: "Advanced",
			},
			{
				id: "9",
				name: "Crème Brûlée",
				img: creme,

				about:
					"Crème Brûlée is a classic French dessert known for its creamy custard base and caramelized sugar top. It's a delightful combination of smooth and crunchy textures.",
				instructions:
					"1. Prepare custard with cream, egg yolks, sugar, and vanilla. 2. Bake until set. 3. Caramelize sugar on top.",
				ingredients: [
					{ name: "Heavy cream", amount: "2 cups" },
					{ name: "Egg yolks", amount: "6" },
					{ name: "Granulated sugar", amount: "1/2 cup" },
					{ name: "Vanilla extract", amount: "1 teaspoon" },
					{ name: "Brown sugar", amount: "4 tablespoons (for caramelizing)" },
				],
				calories: 450,
				time: "1.5 hours",
				rating: 4.9,
				difficulty: "Intermediate",
			},
		],
	},
	{
		name: "japanese",
		dishes: [
			{
				id: "1",
				name: "Sushi",
				img: sushi,
				about:
					"Sushi is a Japanese dish consisting of vinegared rice combined with various ingredients like seafood, vegetables, and occasionally tropical fruits.",
				instructions:
					"1. Prepare sushi rice. 2. Arrange ingredients on top of the rice. 3. Roll or shape as desired.",
				ingredients: [
					{ name: "Sushi rice", amount: "2 cups" },
					{ name: "Nori (seaweed)", amount: "Sheets" },
					{ name: "Fresh fish (e.g., salmon, tuna)", amount: "Varies" },
					{ name: "Vegetables (e.g., cucumber, avocado)", amount: "Varies" },
					{ name: "Soy sauce", amount: "For dipping" },
					{ name: "Wasabi and pickled ginger", amount: "To taste" },
				],
				calories: 300,
				time: "30 minutes",
				rating: 4.8,
				difficulty: "Intermediate",
			},
			{
				id: "2",
				name: "Tempura",
				img: tempura,
				about:
					"Tempura is a Japanese dish of battered and deep-fried seafood and vegetables.",
				instructions:
					"1. Prepare tempura batter. 2. Coat ingredients and fry until golden and crispy.",
				ingredients: [
					{ name: "Shrimp", amount: "6 large" },
					{
						name: "Vegetables (e.g., sweet potato, bell pepper)",
						amount: "Varies",
					},
					{ name: "Tempura flour", amount: "1 cup" },
					{ name: "Ice water", amount: "1 cup" },
					{ name: "Dipping sauce", amount: "For serving" },
				],
				calories: 400,
				time: "45 minutes",
				rating: 4.7,
				difficulty: "Intermediate",
			},
			{
				id: "3",
				name: "Ramen",
				img: ramen,
				about:
					"Ramen is a Japanese noodle soup dish characterized by its broth, noodles, and various toppings like pork, seaweed, and green onions.",
				instructions:
					"1. Prepare broth. 2. Cook ramen noodles. 3. Assemble with toppings.",
				ingredients: [
					{ name: "Pork broth", amount: "4 cups" },
					{ name: "Ramen noodles", amount: "200g" },
					{ name: "Sliced pork belly", amount: "150g" },
					{ name: "Nori (seaweed)", amount: "2 sheets" },
					{ name: "Green onions", amount: "2 stalks" },
					{ name: "Soft-boiled egg", amount: "1" },
				],
				calories: 500,
				time: "1 hour",
				rating: 4.9,
				difficulty: "Intermediate",
			},
			{
				id: "4",
				name: "Sashimi",
				img: sashimi,
				about:
					"Sashimi is a Japanese delicacy consisting of thinly sliced raw fish or seafood, often served with soy sauce and wasabi.",
				instructions:
					"1. Slice fresh fish into thin pieces. 2. Arrange on a plate. 3. Serve with soy sauce and wasabi.",
				ingredients: [
					{ name: "Fresh fish (e.g., salmon, tuna)", amount: "Varies" },
					{ name: "Soy sauce", amount: "For dipping" },
					{ name: "Wasabi", amount: "To taste" },
					{ name: "Pickled ginger", amount: "For garnish" },
				],
				calories: 250,
				time: "15 minutes",
				rating: 4.7,
				difficulty: "Easy",
			},
			{
				id: "5",
				name: "Okonomiyaki",
				img: Okonomiyaki,
				about:
					"Okonomiyaki is a savory Japanese pancake made with a variety of ingredients like cabbage, pork, and seafood, topped with a special okonomiyaki sauce and mayonnaise.",
				instructions:
					"1. Mix batter and ingredients. 2. Cook on a hot griddle. 3. Top with sauce and mayonnaise.",
				ingredients: [
					{ name: "Cabbage", amount: "2 cups (shredded)" },
					{ name: "Flour", amount: "1 cup" },
					{ name: "Eggs", amount: "2" },
					{ name: "Pork belly slices", amount: "100g" },
					{ name: "Tenkasu (tempura scraps)", amount: "1/4 cup" },
					{ name: "Okonomiyaki sauce", amount: "To taste" },
					{ name: "Japanese mayonnaise", amount: "To taste" },
				],
				calories: 600,
				time: "30 minutes",
				rating: 4.8,
				difficulty: "Intermediate",
			},
			{
				id: "6",
				name: "Yakitori",
				img: yakitori,
				about:
					"Yakitori is a Japanese dish of grilled skewers, typically featuring bite-sized pieces of chicken and various vegetables, seasoned and cooked over charcoal.",
				instructions:
					"1. Thread chicken and vegetables onto skewers. 2. Grill until cooked. 3. Brush with tare sauce.",
				ingredients: [
					{ name: "Chicken pieces", amount: "300g" },
					{ name: "Green bell pepper", amount: "1" },
					{ name: "Onion", amount: "1" },
					{ name: "Soy sauce", amount: "1/4 cup" },
					{ name: "Sake", amount: "2 tablespoons" },
					{ name: "Mirin", amount: "2 tablespoons" },
					{ name: "Sugar", amount: "1 tablespoon" },
				],
				calories: 400,
				time: "25 minutes",
				rating: 4.7,
				difficulty: "Intermediate",
			},
			{
				id: "7",
				name: "Gyoza",
				img: gyoza,
				about:
					"Gyoza are Japanese dumplings filled with ground meat and vegetables, wrapped in a thin dough and pan-fried until golden and crispy.",
				instructions:
					"1. Prepare filling. 2. Assemble gyoza. 3. Pan-fry until golden.",
				ingredients: [
					{ name: "Ground pork", amount: "200g" },
					{ name: "Cabbage", amount: "1 cup (finely chopped)" },
					{ name: "Garlic cloves", amount: "2 (minced)" },
					{ name: "Ginger", amount: "1 teaspoon (grated)" },
					{ name: "Gyoza wrappers", amount: "30 pieces" },
					{ name: "Soy sauce", amount: "2 tablespoons" },
					{ name: "Sesame oil", amount: "1 tablespoon" },
				],
				calories: 350,
				time: "40 minutes",
				rating: 4.9,
				difficulty: "Intermediate",
			},
			{
				id: "8",
				name: "Udon",
				img: udon,
				about:
					"Udon is a type of thick wheat noodle commonly used in Japanese cuisine. It can be served hot or cold with various toppings and in different broths.",
				instructions:
					"1. Cook udon noodles. 2. Prepare broth. 3. Add toppings and serve.",
				ingredients: [
					{ name: "Udon noodles", amount: "200g" },
					{ name: "Dashi stock", amount: "4 cups" },
					{ name: "Soy sauce", amount: "2 tablespoons" },
					{ name: "Mirin", amount: "2 tablespoons" },
					{
						name: "Toppings of choice (e.g., green onions, tempura)",
						amount: "Varies",
					},
				],
				calories: 400,
				time: "20 minutes",
				rating: 4.6,
				difficulty: "Easy",
			},
			{
				id: "9",
				name: "Tonkatsu",
				img: tonatsu,
				about:
					"Tonkatsu is a popular Japanese dish consisting of a breaded and deep-fried pork cutlet, typically served with shredded cabbage and a special tonkatsu sauce.",
				instructions:
					"1. Bread and fry the pork cutlet. 2. Slice and serve with cabbage and tonkatsu sauce.",
				ingredients: [
					{ name: "Pork loin or tenderloin", amount: "4 pieces" },
					{ name: "Flour", amount: "1 cup" },
					{ name: "Eggs", amount: "2" },
					{ name: "Panko breadcrumbs", amount: "2 cups" },
					{ name: "Cabbage", amount: "1/2 head (shredded)" },
					{ name: "Tonkatsu sauce", amount: "For serving" },
				],
				calories: 600,
				time: "30 minutes",
				rating: 4.8,
				difficulty: "Intermediate",
			},
		],
	},
];
