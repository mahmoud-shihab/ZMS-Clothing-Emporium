import express from 'express';
const router = express.Router();

import clothingData from '../data/clothing.json' with {type: "json"};

// const clothingData = [];

router.get('/tops', (req, res) => {
  const tops = clothingData.filter(item => item.category === 'top');
  res.json(tops);
});

router.get('/bottoms', (req, res) => {
    const bottoms = clothingData.filter(item => item.category === 'bottoms');
    res.json(bottoms);
  });

router.get('/accessories', (req, res) => {
    const accessories = clothingData.filter(item => item.category === 'accessories');
    res.json(accessories);
  });

router.get('/shoes', (req, res) => {
    const shoes = clothingData.filter(item => item.category === 'shoes');
    res.json(shoes);
  });




export default router;