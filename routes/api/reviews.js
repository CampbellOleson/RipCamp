const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const validateReviewInput = require('../../validation/reviews')
const SurfSpot = require("../../models/SurfSpot");

const Review = require('../../models/Review')



router.post("/spots/:spot_id",
    // passport.authenticate('jwt', {session: false}),
    (req, res) => {

        // console.log(req);
        const {errors, isValid } = validateReviewInput(req.body);

        if (!isValid){
            return res.status(400).json(errors);
        }

        const newReview = new Review({
            surfspot: req.params.spot_id,
            text: req.body.text
        });
        newReview.save().then(review => res.json(review));
    }
);

router.get("/spots/:spot_id/reviews", (req, res) => {
    console.log(req);
    Review.find({ surfspot: req.params.spot_id })
        .sort({ date: -1 })
        .then(reviews => res.json(reviews))
        .catch(err => res.status(404).json({ noreviewsfound: 'No reviews found' }));
});
module.exports = router;