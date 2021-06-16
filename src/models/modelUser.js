import mongoose from "./db";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: Number,
    user_name: String,
    user_password: String,
    user_age: String,
    user_level: String,
    create_time:String
})

//建立索引  提高查询效率
userSchema.index({user_id: 1})

const userModel = mongoose.model('userModel', userSchema);

export default userModel;

