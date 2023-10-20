import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})

export default mongoose.model('Users', userSchema)