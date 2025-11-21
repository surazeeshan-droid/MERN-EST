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
password: {
type:String,
required: true,
},
avatar:{
type:String,
default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fprofile&psig=AOvVaw2QEcfeG4Bs9qXKzL9Fmpt4&ust=1763795436097000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDcwLvrg5EDFQAAAAAdAAAAABAE"
},
},{ timestamps: true});
const User = mongoose.model ('User',userTabassum);

export default User;