var requestIp = require("request-ip");

module.exports = {
  get: async (req, res) => {
    try {
      let ip = requestIp.getClientIp(req);
      res.status(200).send({ data: ip });
    } catch (err) {
      res.status(501).send("navBar Get");
    }
  },
};
