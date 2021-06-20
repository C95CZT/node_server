import UserModel from '../models/modelUser'
import RESULT from '../utils/constant' 
import moment from 'moment';

export default class User {

    async register(req, res, next) {
        let username = req.body.user_name;
        let userpassword = req.body.user_password;
        try {
            const userinfo = {
                user_name: username,
                user_password: userpassword,
                create_time: moment().format('YYYY-MM-DD HH:mm')
            }
            console.log("register userinfo",userinfo)
            await UserModel.create(userinfo,(err) => {
                if (err) return handleError(err);
            })
            res.json({
                code: RESULT.SUCCESS.code,
                msg: RESULT.SUCCESS.msg,
                data: 'Register Success',
            })
        } catch (err) {
            console.log(err)
            res.json({
                code: RESULT.FAILD.code,
                msg: RESULT.FAILD.msg,
                data: 'Register Failed',
            })
        }

    }

    async list(req,res,next){
        try {
            const userList = await UserModel.find();
            res.json({
                code: RESULT.SUCCESS.code,
                msg: RESULT.SUCCESS.msg,
                data: JSON.stringify(userList),
            })
        } catch (err) {
            console.log(err)
            res.json({
                code: RESULT.FAILD.code,
                msg: RESULT.FAILD.msg,
                data: 'Register Failed',
            })
        }
    }

    async userInfo(req,res,next){
        let username =req.params.user_name
        try {
            const filter = {"user_name":username}
            const info = await UserModel.find(filter);
            res.json({
                code: RESULT.SUCCESS.code,
                msg: RESULT.SUCCESS.msg,
                data: JSON.stringify(info),
            })
        } catch (err) {
            console.log(err)
            res.json({
                code: RESULT.FAILD.code,
                msg: RESULT.FAILD.msg,
                data: 'Request Failed',
            })
        }
    }

    async update(req,res,next){
        let username = req.body.user_name;
        let userpassword = req.body.user_password; 
        try {
            const filter = {"user_name":username}
            const info = await UserModel.find(filter);
            const updateUser = await UserModel.findByIdAndUpdate(info[0]._id, { 'user_password': userpassword }, (err, docs) => {
                if (err){ 
                    console.log(err) 
                } 
                else{ 
                    console.log("Updated User:", docs); 
                } 
            })
            console.log(object);
            res.json({
                code: RESULT.SUCCESS.code,
                msg: RESULT.SUCCESS.msg,
                data: updateUser,
            })
        } catch (err) {
            console.log(err)
            res.json({
                code: RESULT.UPLOAD_ERR.code,
                msg:  RESULT.UPLOAD_ERR.msg,
                data: 'Request Failed',
            })
        }
    }

    async delete(req,res,next){
        let username = req.body.user_name;
        // let userpassword = req.body.user_password; 
        try {
            const filter = {"user_name":username}
            const delUser = await UserModel.deleteOne(filter,(err) => {
                if (err) throw handleError(err); 
            });
            res.json({
                code:RESULT.DELETE_SUCCESS.code,
                msg: RESULT.DELETE_SUCCESS.msg,
                data:delUser
            })
        } catch (err) {
            console.log(err)
            res.json({
                code: RESULT.UPLOAD_ERR.code,
                msg: RESULT.UPLOAD_ERR.msg,
                data: 'Request Failed',
            })
        }
    }
}

