import express from "express";
import path from "path";


const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "..", "build");

const app: express.Application = express();
app.use(express.static(publicPath));

app.get("*", (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
    console.log(`[APPSERVER] App running on port ${port}`);
});