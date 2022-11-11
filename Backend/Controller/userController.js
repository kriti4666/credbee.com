
import User from "../Schemas/user.schema.js";

//api for user signup
export const UserSignup = async (req, res) => {

    try {

        //to check if user exist or not
        // const userExist = await User.findOne({ email: request.body.email })
        // if (userExist) {
        //     return res.status(401).json({ message: "User already exist" })
        // }

        const user = req.body; //to get the details from the form
        const newUser = new User(user); //sending user's details to db using newUser variable
        await newUser.save(); //save to object in db
        res.status(200).json({ message: user }); //sucess status with user details in the message
        // console.log(req.body);
    } catch (e) {
        console.log(e.message);
    }

}
