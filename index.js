import express from "express";
import cors from "cors";
import pokemonRouter from "./routes/pokemonRouter.js";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Pokémon API!");
});

app.use("/api/v1/pokemon", pokemonRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

export default app;
