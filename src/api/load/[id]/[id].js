export default function handler(req, res) {
  const { id } = req.query;
  const state = global.stateStore?.get(id);

  if (!state) {
    return res.status(404).json({ error: "Not found" });
  }

  res.status(200).json(state.data);
}
