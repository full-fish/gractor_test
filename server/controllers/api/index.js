module.exports = {
  get: async (req, res) => {
    try {
      res.status(200).send("Api Get Ok");
    } catch (err) {
      res.status(501).send("Api Get");
    }
  },
};
