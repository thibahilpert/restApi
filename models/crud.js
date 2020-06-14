const crud = (crud) => {
  const getAll = async (req, res, next) => {
    try {
      const items = await crud.find();
      res.json(items);
    } catch (err) {
      next(err);
    }
  };

  const getItem = async (req, res, next) => {
    try {
      const item = await crud.findById(req.params.id);
      res.json(item);
    } catch (err) {
      next(err);
    }
  };

  const post = async (req, res, next) => {
    try {
      const item = await crud.create(req.body);
      res.json(item);
    } catch (err) {
      next(err);
    }
  };

  const put = async (req, res, next) => {
    try {
      const item = await crud.findByIdAndUpdate(req.params.id, req.body);
      res.json(item);
    } catch (err) {
      next(err);
    }
  };

  const remove = async (req, res, next) => {
    try {
      const item = await crud.deleteOne({ _id: req.params.id });
      res.json(item);
    } catch (err) {
      next(err);
    }
  };

  return {
    getAll,
    getItem,
    post,
    put,
    remove,
  };
};

module.exports = crud;
