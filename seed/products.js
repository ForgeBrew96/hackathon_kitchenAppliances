const mongoose = require('mongoose');
const { connectDB } = require('../db');
const { Product, Category } = require('../models');



const ___________ = [
    {
        name: 'Ceviche',
        timeInMinutes: 60,
        vegetarian: false,
        pescatarian: true,
        expenseScaleOutof5: 2,
        directions: cevicheDirections._id
    },
    {
        name: 'Llapingachos',
        timeInMinutes: 45,
        vegetarian: true,
        pescatarian: false,
        expenseScaleOutof5: 1,
        directions: llapingachosDirections._id
    },
    {
        name: 'Empanadas',
        timeInMinutes: 60,
        vegetarian: true,
        pescatarian: false,
        expenseScaleOutof5: 2,
        directions: empanadasDirections._id
    }
];
await Recipe.insertMany(___________);