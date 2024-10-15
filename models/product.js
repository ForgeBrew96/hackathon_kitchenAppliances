const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Product = new Schema(
    {
        name: { type: String, required: true },
        priceUSD: {type: Number, required: true},
        image: { type: String, required: true },
        brand: { type: String, required: true},
        category: {type: Schema.Types.ObjectId, ref: 'Category', required: true},
        type: {type: String, required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('products', Product)