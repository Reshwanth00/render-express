const DbObject = require('./DbObject');

const addObject = async (formData) => {
    const {
        title,
        description,
        imageFile: {
            imageName,
            imageUrl
        },
        videoFile: {
            videoName,
            videoUrl
        }
    } = formData;  

    try {

        const newObject = new DbObject({
            title,
            description,
            imageFile: {
                imageName,
                imageUrl
            },
            videoFile: {
                videoName,
                videoUrl
            }
        });

        // Save the document to the database
        const savedObject = await newObject.save();
        return savedObject;
    } catch (error) {
        console.error("Error creating object:", error);
        throw new Error(error.message);
    }
};

const getAllObjects = async () => {
    try {
        const objects = await DbObject.find({});
        return objects;
    } catch (error) {
        console.error("Error fetching objects:", error);
        throw new Error(error.message);
    }
};

module.exports = {
    addObject,
    getAllObjects  
};