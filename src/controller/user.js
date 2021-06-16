import UserModel from '../models/modelUser'
import RESULT from '../utils/constant' 
import moment from 'moment';

export default class User {

    async register(req, res, next) {
        let username = req.body.username;
        let userpassword = req.body.userpassword;
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
                code: Constant.RESULT.FAILD.code,
                msg: Constant.RESULT.FAILD.msg,
                data: 'Register Failed',
            })
        }

    }

}

