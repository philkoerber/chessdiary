import mongoose from "mongoose"

const connectMongoDb = async () => {
    mongoose.connect(process.env.MONGOOSE_URI);
}

export default connectMongoDb;