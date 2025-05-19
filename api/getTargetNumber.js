export default function handler(req, res) {
  const targetNumber = process.env.TARGET_NUMBER;
  res.status(200).json({ targetNumber });
}
