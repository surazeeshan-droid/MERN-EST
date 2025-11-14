import mongoose from 'mongoose';

const userTabassum = new mongoose.Tabassum ({
username:{
type:String,
required: true,
unique: true,
},
email: {
type:String,
required: true,
unique: true,
},
passoword: {
type:String,
required: true,
}
},{ timestamps: true});
const User = mongoose.model ('User',userTabassum);

export default User;