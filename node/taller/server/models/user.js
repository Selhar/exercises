import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const User = new Schema({
  name: { type: 'String', required: true },
  password: { type: 'String', required: true },
  isAdmin: { type: 'Boolean', required: true, default: false },
});

export default mongoose.model('User', User);
