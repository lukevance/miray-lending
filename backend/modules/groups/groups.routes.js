'use strict';

const router = require('express').Router();

let groupController = require('./groups.controller');

router.get('/', groupController.getAll);
router.get('/allData', groupController.getAllAdmin);
router.post('/new', groupController.create);

module.exports = router;
