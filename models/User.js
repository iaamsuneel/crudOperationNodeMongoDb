const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        name: { type: String },
        price: { type: Number },
        address: { type: String }
    }
)
module.exports = mongoose.model("User", userSchema);
