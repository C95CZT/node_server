import UserMoel from '../models/modelUser'
import Constant from '../utils/constant' 
import moment from 'moment';

export default class User {

    //注册用户
    async register(req, res, next) {
        let username = req.body.username;
        let userpassword = req.body.userpassword;
        console.log("register model",username,userpassword)
        try {
            const userinfo = {
                user_name: username,
                user_password: userpassword,
                create_time: moment().format('YYYY-MM-DD HH:mm')
            }
            await UserModel.create(userinfo,(err) => {
                if (err) return handleError(err);
                console.log("UserModel",userinfo)
            })
            res.json({
                code: Constant.RESULT.SUCCESS.code,
                msg: Constant.RESULT.SUCCESS.msg,
                data: '注册成功',
            })
        } catch (err) {
            res.json({
                code: Constant.RESULT.FAILD.code,
                msg: Constant.RESULT.FAILD.msg,
                data: '注册失败',
            })
        }

    }

}

