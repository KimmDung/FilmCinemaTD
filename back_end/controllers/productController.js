const Upcoming = require('../models/upcomingfilm')
const Film = require('../models/film')

const productController = {
    getProduct : async(req,res) => {
        try {
            const listFilm = await Film.find({});
            const listUpcoming = await Upcoming.find({});
            const listProduct = listProduct.concat(listFilm, listUpcoming);
         
            //   console.log(listProduct);
            res.status(200).json(listUpcoming);
        } catch (error) {
            console.log(error);
        }
    }
}   
module.exports = productController;
