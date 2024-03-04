/* eslint-disable no-param-reassign */
import { faker } from '@faker-js/faker';
import { RANDOMIZE } from '../app/constants.js';
import type { Products } from '../types/entities.js';
import { ProductModel } from '../types/entities.js';



export async function getProducts(randomize = RANDOMIZE) {
	const products = await ProductModel.find().lean();
	const productsStaticJSON = products;

	const productsStaticData: Products = productsStaticJSON;
	
	
	const result = randomize
		? productsStaticData.map((p) => {
				p.price = faker.commerce.price();
				p.technology = faker.commerce.productName();
				p.description = faker.commerce.productDescription();
				return p;
		  })
		: productsStaticData;
	
	return result;
}
