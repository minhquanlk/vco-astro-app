import { faker } from '@faker-js/faker';
import { R as RANDOMIZE } from './404_nhHVIpbh.mjs';
import mongoose, { Schema, model } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const dbUri = process.env.MONGO_URI;
const options = {};
let mongooseConnection;
const connectToDB = async () => {
  if (!mongooseConnection) {
    mongooseConnection = await mongoose.connect(dbUri, options);
  }
  console.log("MongoDB Connected...");
};

connectToDB();
const productSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  technology: { type: String, required: true },
  id: { type: Number, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  discount: { type: String, required: true }
});
const ProductModel = model("Product", productSchema);

async function getProducts(randomize = RANDOMIZE) {
  const products = await ProductModel.find().lean();
  const productsStaticJSON = products;
  const productsStaticData = productsStaticJSON;
  const result = randomize ? productsStaticData.map((p) => {
    p.price = faker.commerce.price();
    p.technology = faker.commerce.productName();
    p.description = faker.commerce.productDescription();
    return p;
  }) : productsStaticData;
  return result;
}

const usersStaticJSON = [
	{
		id: 1,
		name: "Neil Sims",
		avatar: "neil-sims.png",
		email: "neil.sims@flowbite.com",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		position: "Front-end developer",
		country: "United States",
		status: "Active"
	},
	{
		id: 2,
		name: "Roberta Casas",
		avatar: "roberta-casas.png",
		email: "roberta.casas@flowbite.com",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		position: "Designer",
		country: "Spain",
		status: "Active"
	},
	{
		id: 3,
		name: "Michael Gough",
		avatar: "michael-gough.png",
		email: "michael.gough@flowbite.com",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		position: "React developer",
		country: "United Kingdom",
		status: "Active"
	},
	{
		id: 4,
		name: "Jese Leos",
		avatar: "jese-leos.png",
		email: "jese.leos@flowbite.com",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		position: "Marketing",
		country: "United States",
		status: "Active"
	},
	{
		id: 5,
		name: "Bonnie Green",
		avatar: "bonnie-green.png",
		email: "bonnie.green@flowbite.com",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		position: "UI/UX Engineer",
		country: "Australia",
		status: "Offline"
	},
	{
		id: 6,
		name: "Thomas Lean",
		avatar: "thomas-lean.png",
		email: "thomas.lean@flowbite.com",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		position: "Vue developer",
		country: "Germany",
		status: "Active"
	},
	{
		id: 7,
		name: "Helene Engels",
		avatar: "helene-engels.png",
		email: "helene.engels@flowbite.com",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		position: "Product owner",
		country: "Canada",
		status: "Active"
	},
	{
		id: 8,
		name: "Lana Byrd",
		avatar: "lana-byrd.png",
		email: "lana.byrd@flowbite.com",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		position: "Designer",
		country: "United States",
		status: "Active"
	},
	{
		id: 9,
		name: "Leslie Livingston",
		avatar: "leslie-livingston.png",
		email: "leslie.livingston@flowbite.com",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		position: "Web developer",
		country: "France",
		status: "Offline"
	},
	{
		id: 10,
		name: "Robert Brown",
		avatar: "robert-brown.png",
		email: "robert.brown@flowbite.com",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		position: "Laravel developer",
		country: "Russia",
		status: "Active"
	},
	{
		id: 11,
		name: "Neil Sims",
		avatar: "neil-sims.png",
		email: "neil.sims@flowbite.com",
		position: "Front-end developer",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		country: "United States",
		status: "Active"
	},
	{
		id: 12,
		name: "Roberta Casas",
		avatar: "roberta-casas.png",
		email: "roberta.casas@flowbite.com",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		position: "Designer",
		country: "Spain",
		status: "Active"
	},
	{
		id: 13,
		name: "Michael Gough",
		avatar: "michael-gough.png",
		email: "michael.gough@flowbite.com",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		position: "React developer",
		country: "United Kingdom",
		status: "Active"
	},
	{
		id: 14,
		name: "Jese Leos",
		avatar: "jese-leos.png",
		email: "jese.leos@flowbite.com",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		position: "Marketing",
		country: "United States",
		status: "Active"
	},
	{
		id: 15,
		name: "Bonnie Green",
		avatar: "bonnie-green.png",
		email: "bonnie.green@flowbite.com",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		position: "UI/UX Engineer",
		country: "Australia",
		status: "Offline"
	},
	{
		id: 16,
		name: "Thomas Lean",
		avatar: "thomas-lean.png",
		email: "thomas.lean@flowbite.com",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		position: "Vue developer",
		country: "Germany",
		status: "Active"
	},
	{
		id: 17,
		name: "Helene Engels",
		avatar: "helene-engels.png",
		email: "helene.engels@flowbite.com",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		position: "Product owner",
		country: "Canada",
		status: "Active"
	},
	{
		id: 18,
		name: "Lana Byrd",
		avatar: "lana-byrd.png",
		email: "lana.byrd@flowbite.com",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		position: "Designer",
		country: "United States",
		status: "Active"
	},
	{
		id: 19,
		name: "Leslie Livingston",
		avatar: "leslie-livingston.png",
		email: "leslie.livingston@flowbite.com",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		position: "Web developer",
		country: "France",
		status: "Offline"
	},
	{
		id: 20,
		name: "Robert Brown",
		avatar: "robert-brown.png",
		email: "robert.brown@flowbite.com",
		biography: "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		position: "Laravel developer",
		country: "Russia",
		status: "Active"
	}
];

const usersStaticData = usersStaticJSON;
function getUsers(randomize = RANDOMIZE) {
  console.log("getUsers");
  const result = randomize ? usersStaticData.map((p) => {
    p.name = faker.person.fullName();
    p.email = faker.internet.email();
    p.position = faker.person.jobTitle();
    p.country = faker.location.country();
    return p;
  }) : usersStaticData;
  return result;
}

const endpointsToOperations = {
  products: getProducts,
  users: getUsers
};
function parseTypeParam(endpoint) {
  if (!endpoint || !(endpoint in endpointsToOperations))
    return void 0;
  return endpoint;
}
const GET = async ({ params }) => {
  console.log("Hit!", params.entity);
  const operationName = parseTypeParam(params.entity);
  if (!operationName)
    return new Response(null, {
      status: 302,
      headers: {
        "Location": "/404",
        "X-Redirected": "true"
      }
    });
  const body = await endpointsToOperations[operationName]();
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const ____entity_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   GET,
   endpointsToOperations
}, Symbol.toStringTag, { value: 'Module' }));

export { ____entity_ as _, getUsers as a, getProducts as g };
