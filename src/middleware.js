import data from '../data.json' assert { type: 'json' };

export const idIsNumberMiddleware = (req, res, next) => {
  const numberId = parseInt(req.params.id);
  if (isNaN(numberId)) {
    return res.status(400).json({ code: 400, message: 'Id must be a number.' });
  }
  next();
};

export const userExistsMiddleware = (req, res, next) => {
  const numberId = parseInt(req.params.id);
  const user = data.find((i) => i.id === numberId);
  if (!user) {
    return res.status(404).json({ code: 404, message: 'User not found.' });
  }
  req.foundUser = user;
  next();
};
