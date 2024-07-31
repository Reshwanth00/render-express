const User = require('./user');

const addUser = async (userData) => {
    const { name, password } = userData;
    try {
        const newUser = new User({
            name,
            password,
        });
        let savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error(error.message);
    }
};

module.exports = addUser;
