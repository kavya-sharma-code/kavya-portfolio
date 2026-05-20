// /api/quote

const apiUrl = process.env.ZEN_QUOTES_API_URL;

async function handler(req, res) {
  if (req.method === "GET") {
    if (!apiUrl) {
      return res.status(500).json({ error: "Missing ZEN_QUOTES_API_URL" });
    }

    const response = await fetch(apiUrl);
    const data = await response.json();

    res.status(200).json(data);
  }
}

export default handler;
