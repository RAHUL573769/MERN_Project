const isLoggedIn = (req, res, next) => {
  const login = true;
  if (login) {
    req.body.id = 101;
    next();
  }

  console.log("Is User Logged");
  next();
};
module.exports = isLoggedIn;
