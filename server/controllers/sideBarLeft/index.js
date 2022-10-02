const { chart } = require("../../models");
module.exports = {
  get: async (req, res) => {
    try {
      const data = await chart.findAll({});
      res.status(200).send({ data: data });
    } catch (err) {
      res.status(501).send("sideBarLeft Get");
    }
  },
};
