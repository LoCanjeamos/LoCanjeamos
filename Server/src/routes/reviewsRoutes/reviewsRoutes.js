const express = require("express");
const router = express.Router();
const reviewController = require("../../controllers/reviewsController");


router.post('/', async (req, res) => {
    try {
      const response = await reviewController.createReview(req, res);
      return res.status(201).json(response);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al crear la review.' });
    }
  });
  

//   router.get('/', async (req, res) => {
//     try {
//       const response = await reviewController.listReviews(req, res);
//       return res.status(200).json(response);
//     } catch (error) {
//       return res.status(500).json(error.message);
//     }
//   });
  
//   router.get('/:id', async (req, res) => {
//     try {
//       const response = await reviewController.getReviewById(req, res);
//       return res.status(200).json(response);
//     } catch (error) {
//       return res.status(500).json(error.message);
//     }
//   });
  
//   router.delete('/reviews/:id', async (req, res) => {
//     try {
//       const response = await reviewController.deleteReview(req, res);
//       return res.status(200).json(response);
//     } catch (error) {
//       return res.status(500).json(error.message);
//     }
//   });
  
module.exports = router;
