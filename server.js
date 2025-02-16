const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let messages = []; // Lista para guardar los mensajes

// Ruta para enviar mensajes
app.post("/send", (req, res) => {
    const { name, message } = req.body;
    if (name && message) {
        messages.push({ name, message });
        res.json({ status: "Message sent" });
    } else {
        res.status(400).json({ error: "Invalid data" });
    }
});

// Ruta para obtener mensajes
app.get("/messages", (req, res) => {
    res.json(messages);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});