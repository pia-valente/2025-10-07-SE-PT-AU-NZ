const axios = require("axios");

exports.getAllFacts = async (req, res) => {
  try {
    const page = req.query.page || 1; 
    const limit = req.query.limit || 10; 

    const response = await axios.get(`https://catfact.ninja/facts?page=${page}&limit=${limit}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch facts" });
  }
};

exports.getFactByIndex = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;

    const response = await axios.get(`https://catfact.ninja/facts?page=${page}&limit=${limit}`);
    const fact = response.data.data[id];

    if (!fact) {
      return res.status(404).json({ message: "Fact not found" });
    }

    res.json(fact);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch fact" });
  }
};