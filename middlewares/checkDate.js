const checkDate = (req, res, next) => {
  const date = new Date();
  const day = date.getDay(); // 0 - 6    sunday - saturday
  const hour = date.getHours();

  if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
    next();
  } else {
    res.send(
      "Sorry, this web app is only available during working hours (Monday to Friday, from 9 to 17)"
    );
  }
};

module.exports = checkDate;
