import { Schema, model } from 'mongoose';


const userSchema: Schema = new Schema({
	fname: {
	  type: String,
	  required: true,
	},
	lname: {
	  type: String,
	  required: true,
	},
	avatar: {
	  type: String,
	  required: false,
	},
	email: {
	  type: String,
	  required: true,
	  unique: true,
	},
	phone: {
	  type: String,
	  required: false,
	},
	school_company: {
	  type: String,
	  required: false,
	},
	position: {
	  type: String,
	  required: false,
	},
	city: {
	  type: String,
	  required: false,
	},
	password: {
	  type: String,
	  required: true,
	},
	role: {
	  type: String,
	  required: false,
	},
	
  },{
	timestamps: true //so that we have createdAt and updatedAt fields
  }
  );
  
export const UserModel = model('User', userSchema);