const { locationInfo } = require("../../models");
module.exports = {
  get: async (req, res) => {
    try {
      const data = await locationInfo.findAll({});
      res.status(200).send({ data: data });
    } catch (err) {
      res.status(501).send("Api Get");
    }
  },
};
