var middleware1 = function (req, res, next) {
  console.log("hello this is middleware1.");
  next(); //Call next() so Express will call the next middleware function in the chain.
};

module.exports = middleware1;
