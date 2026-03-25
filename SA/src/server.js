const express = require("express");
const app = express();
const netflixRoutes = require("./src/routes/netflixRoutes");
 
app.use(express.json());
 
// prefixo /api para todas as rotas
app.use("/api", netflixRoutes);
 
// health check
app.get("/", (req, res) => res.json({ status: "ok", message: "Netflix API running 🎬" }));
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 