const data = require('../data-source.json');

const getData = async (req, res, next) => {
  res.status(200).json(data);
};

module.exports = { getData };