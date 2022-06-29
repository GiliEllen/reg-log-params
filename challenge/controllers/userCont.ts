import UserModel, { UserValidation } from "../models/usermodels";
import uuidv4 from "../helpers";


export async function userLogin(req, res) {
  try {
    const {  username ,email, password } = req.body;
    const { error } = UserValidation.validate({username, email, password });
    if (error) throw error;
    const user = await UserModel.findOne({username, email, password });
    if (!user) {
      res.send({ login: false });
    } else {
      res.send({ login: true , user.userid});
    }
  } catch (error) {
    res.send({ error: error.message });
  }
}

export async function userRegister(req, res) {
  try {
    const { email, username, password } = req.body;
    const userid = uuidv4();
    const { error } = UserValidation.validate({ username, email, password, userid });
    if (error) throw error;

    const user = new UserModel({ username, email, password, userid});
    await user.save();
    res.send({ register: true});
  } catch (error) {
    res.send({ error: error.message });
  }
}
