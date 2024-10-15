const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Category = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        installationNeeded: { type: Boolean, required: true },
        averagePriceRange: { type: String, required: true }, // Example: "low", "medium", "high"
    },
    { timestamps: true },
)

module.exports = mongoose.model('categories', Category)