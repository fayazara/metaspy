const ogs = require("open-graph-scraper");

export default async function products(req, res) {
  const query = req.query;
  const { url } = query;
  if (!url) {
    return res.status(400).json({ error: "Missing URL" });
  } else {
    const options = { url };
    const { result } = await ogs(options);
    res.status(200).json({ result });
  }
}
