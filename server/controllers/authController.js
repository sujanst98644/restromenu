import {Auth} from '../model/authmodel.js';

export const signUp = async(req, res) => {
        const {Username, email, password } = req.body;
        console.log(Username, email, password);
        const user = await Auth.findOne({email});
        if (user) {
            return res.status(400).json({message: "User already exists"});
        }
        try {
            const newUser = new Auth({Username, email, password});
        await newUser.save();
        res.status(201).json({message: "User created successfully"});
        } catch (error) {
         res.status(500).json({message: "couldnt create user"});   
        }
    }

export const signIn = async(req, res) => {
    const {email, password} = req.body;
    console.log(email);
    try {
        const user = await Auth.findOne({email, password});
    if (!user) {
        return res.status(400).json({message: "Invalid credentials"});
    }
    res.status(200).json({message: "User logged in successfully"});
    } catch (error) {
        res.status(500).json({message: "couldnt login user"});
    }
}
