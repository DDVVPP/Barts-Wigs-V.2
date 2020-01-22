const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/wigs', require('./wigs'));
router.use('/orders', require('./orders'));

router.use((req, res, next) => {
  const error = new Error('API route Not Found');
  error.status = 404;
  next(error);
});
