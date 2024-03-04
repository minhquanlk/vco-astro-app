import type { endpointsToOperations } from '../pages/api/[...entity].js';
import type { playgroundActions } from '../pages/playground/_actions.js';
import * as dbCongig from '../config/db.js'
import { Schema, model } from 'mongoose';

export type EndpointsToOperations = typeof endpointsToOperations;
export type Endpoint = keyof EndpointsToOperations;
dbCongig.connectToDB();

export type Products = Product[];
export interface Product {
	name: string;
	category: string;
	technology: string;
	id: number;
	description: string;
	price: string;
	discount: string;
}

const productSchema: Schema = new Schema<Product>({
	name: { type: String, required: true },
	category: { type: String, required: true },
	technology: { type: String, required: true },
	id: { type: Number, required: true },
	description: { type: String, required: true },
	price: { type: String, required: true },
	discount: { type: String, required: true },
  });

export const ProductModel = model<Product>('Product', productSchema);

export type Users = User[];
export interface User {
	id: number;
	name: string;
	avatar: string;
	email: string;
	biography: string;
	position: string;
	country: string;
	status: string;
}

export type PlaygroundAction = (typeof playgroundActions)[number];
