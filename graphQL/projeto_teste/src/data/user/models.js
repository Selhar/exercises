import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID
} from 'graphql';
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	}
});

export let UserModel = mongoose.model('User', schema);

export let UserType = new GraphQLObjectType({
	name: 'User', 
	fields: {
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		firstName: {
			type: GraphQLString
		},
		lastName: {
			type: GraphQLString
		}
	}
});

export let UserInput = new GraphQLInputObjectType({
	name: "UserInput",
	fields: {
		firstName: {
			type: GraphQLString
		},
		lastName: {
			type: GraphQLString
		}
	}
});