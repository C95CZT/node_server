import mongoose from "./db";

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - user_id
 *       - user_name
 *       - user_password
 *       - create_time
 *     properties:
 *       user_id:
 *         type: number
 *       user_name:
 *         type: string
 *       user_password:
 *         type: number
 *       create_time:
 *         type: number
 */


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

