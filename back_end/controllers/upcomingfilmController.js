const Upcoming = require('../models/upcomingfilm');
const { getFilmDetail } = require('./filmController');


const upcomingfilmController = {
    // Add Upcomingfilm
    addUpcomingFilm : async(req,res) => {
        try {
            const newUpcomingFilm = new Upcoming(req.body);
            const saveUpcomingFilm = await newUpcomingFilm.save();
            res.status(200).json(saveUpcomingFilm);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Get all Upcoming Film
    getAllUpcomingFilm : async(req,res) => {
        try {
            const UpcomingFilms = await Upcoming.find();
            res.status(200).json(UpcomingFilms);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Get a Upcoming Film
    getAUpcomingFilm : async(req,res) => {
        try {
            const aUpcomingFilm = await Upcoming.findById(req.params.id);
            res.status(200).json(aUpcomingFilm); 
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Update a Upcoming film
    updateUpcomingFilm: async(req,res) => {
        try {
            const aUpcomingFilm = await Upcoming.findById(req.params.id);
            await aUpcomingFilm.updateOne({ $set: req.body });
            res.status(200).json("Updated upcoming film successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Delete   Upcoming Film
    deleteUpcomingFilm: async(req,res) => {
        try {
            await Upcoming.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted upcoming film successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Get list upcoming film
    getListUpcomingFilm: async(req,res) => {
        try {
            const listUpcomingFilm = await Upcoming.find({}).limit(5);
            res.status(200).json(listUpcomingFilm);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Detail 
    getUpcomingFilm: async(req,res) => {
        try {
            const result = await Upcoming.findOne({_id:req.query.id});
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Suggest
    getSuggestUpcomingFilm: async(req,res) => {
        try {
            const result = await Upcoming.find({}).limit(6).skip(Math.floor(Math.random()*5));
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    },


} 
module.exports = upcomingfilmController;