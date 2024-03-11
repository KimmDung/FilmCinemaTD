const Fish = require('../models/film')
const FishPedestal = require('../models/upcomingfilm')

const filmController = {
    // Add film
    addFilm : async(req,res) => {
        try {
            const newFilm = new Film(req.body);
            const saveFilm = await newFilm.save();
            res.status(200).json(saveFilm);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // ADMIN: Get all film theo
    getAllFilm : async(req,res) => {
        try {
            var obj = {}; // obj rỗng, được sử dụng để lọc dữ liệu từ cơ sở dữ liệu dựa trên các tham số yêu cầu.
            if (req.query.type) obj={habitat: req.query.type};
            console.log(req.url)
            const films = await Film.find(obj);
            res.status(200).json(films);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Get a film
    getAFilm: async(req,res) => {
        try {
            const aFilm = await Fish.findById(req.params.id);
            res.status(200).json(aFilm);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Update film
    updateFilm: async(req,res) => {
        try {
            const aFilm = await Film.findById(req.params.id);
            await aFilm.updateOne({ $set: req.body });
            res.status(200).json("Updated film successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Delete film
    deleteFilm: async(req,res) => {
        try {
            await Film.findByIdAndDelete(req.params.name);
            res.status(200).json("Deleted film successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Home
    getListFilmHome: async(req,res) => {
        try {
            const listFilm = await Film.find({}).limit(5);
            res.status(200).json(listFilm);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Get FilmDetail
    getFilmDetail: async(req,res) => {
        try {
            const result = await Film.findOne({_id:req.query.id});
            res.status(200).json(result);
            
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Get list favorite film
    getFavoriteFilm: async(req,res) => {
        try {
            const listFavoriteFilm = await Film.find({Favorite: true});
            res.status(200).json(listFilmFavorite);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Get Suggest Film
    getSuggestFilm: async(req,res) => {
        try {
            const obj = await Film.findOne({_id: req.query.id}).select("-_id habitat");
            // console.log(obj.habitat)
            const result = await Film.find({habitat: obj.habitat}).limit(6).skip(Math.floor(Math.random()*5));
            // console.log(result);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    },

   
    getListFilmPage: async(req,res) => {
        try {

            // console.log('jkashjkasdkjdaskjn');

            const pageSize   = req.query.pageSize;
            const pageNumber = req.query.pageNumber;

            const listFilm = await Film.find({});
            const listUpcoming = await Upcoming.find({});
            const listProduct  = await listFilm.concat(listFilm, listUpcoming);    

            var i = ((pageNumber-1)*pageSize);
            var j = parseInt(pageSize)+i;
            var k = 0 ;
    
            var result = [];
            for (i ; i <= j; i++){
                k++;
                result[k] = listProduct[i];
            }


            console.log(result);

            res.status(200).json(listFilm);
            res.status(200).json({result: result,totalRecord: listProduct.length});
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = filmController;