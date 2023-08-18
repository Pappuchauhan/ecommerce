const mongoose = require("mongoose")
const bernardSchema = mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String},
    email: {type: String, required: true},
    personalize: {type: String},
    linkedin: {type: String},
    status: {type: String}
}, {timestamp: {createdAt: "created_at", updatedAt: "updated_at"}})

const Bernard = mongoose.model("bernard",bernardSchema)

module.exports = {Bernard}