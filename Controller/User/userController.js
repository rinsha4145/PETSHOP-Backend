const User = require('../../Models/user');
const { joiUserSchema } = require('../../Models/validation');

// User Registration
const userReg = async (req, res, next) => {
    try {
        console.log("Request Body:", req.body); // Log incoming data
        const { value, error } = joiUserSchema.validate(req.body);
        if (error) {
            console.log("Validation Error:", error);
            return res.status(400).json({ status: 'error', message: error.details[0].message });
        }

        const { username, password, cpassword, email, phone, gender, address } = value;
        if (password !== cpassword) {
            return res.status(400).json({ status: 'error', message: 'Passwords do not match' });
        }

        const newUser = new User({ username, password,cpassword, email, phone, gender, address });
        await newUser.save(); // Attempt to save to MongoDB
        console.log("User saved:", newUser);

        res.status(201).json({ status: 'success', message: 'User registered successfully', data: newUser });
    } catch (error) {
        console.error("Error saving to MongoDB:", error); // Log any error during save
        res.status(500).json({ status: 'error', message: 'An error occurred while registering the user' });
    }
}



// User Login 
const userlogin = async (req, res, next) => {

    const { value, error } = JoiUserSchema.validate(req.body);
    if (error) {
        return next(new CustomError('Validation error: ' + error.details[0].message, 400));
    }
    const { username, password } = value;

//     // Admin login JWT
//     // const adminName = process.env.ADMIN_USERNAME;
//     // const adminPass = process.env.ADMIN_PASSWORD;
//     // if (username === adminName && password === adminPass) {
//     //     console.log('admin logged');
//         // const token = jwt.sign(
//         //     { id: 'admin', admin: true }, process.env.JWT_KEY, { expiresIn: '30m' }
//         // );
//         // const refreshToken = jwt.sign(
//         //     { id: 'admin', admin: true }, process.env.JWT_KEY, { expiresIn: '7d' }
//         // );
//         // res.cookie("token", token, {
//         //     httpOnly: true, 
//         //     secure: false, // Disable 'secure' for development (non-HTTPS)
//         //     sameSite: "none", // Use 'lax' for local development
//         //     maxAge: 30 * 60 * 1000 // 30 minutes
//         // });
        
//         // res.cookie("refreshtoken", refreshToken, {
//         //     httpOnly: true,
//         //     secure: false, // Disable 'secure' for development
//         //     sameSite: "none", // 'lax' works fine on localhost
//         //     maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
//         // })
//         return res.status(200).json({ token: token, refreshToken, admin: true });
//     }

//     //user Logout
//     const userLogout = async (req, res, next) => {
//         try {
//             res.clearCookie('token','refreshtoken', {
//                 httpOnly: true,
//                 secure: true,
//                 sameSite: 'none',
//             });
//             res.status(200).json({ status: 'success', message: 'Logout successful' });
    
//         } catch (error) {
//             next(new CustomError('Logout failed', 500));
//         }
    };

module.exports = { userReg};
