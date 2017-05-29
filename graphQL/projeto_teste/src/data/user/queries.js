import {GraphQLID, GraphQLList, GraphQLNonNull} from 'graphql';
import {UserModel, UserType} from './models';
const User = {
	type: UserType,
	args: {
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve (root, params, options){
		return UserModel.findById(params.id).exec();
	}
}

const Users = {
	type: new GraphQLList(UserType),
	args: {},
	resolve (root, params, options) {
		return UserModel.find().exec();
	}
}

export default { 
	User: User,
	Users: Users
}