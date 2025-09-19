let stateStore = new Map();

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const id = crypto.randomUUID();
  stateStore.set(id, { data: req.body, created: Date.now() });

  // auto-usuwanie po 1h
  setTimeout(() => stateStore.delete(id), 3600000);

  res.status(200).json({ id });
}
