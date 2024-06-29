import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import taskController from "./controllers/taskController.js";
import errorController from "./controllers/erroController.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
const port = 3000;

console.log(__dirname);

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", taskController.getAllTaks);
// app.get("/add", taskController.getAddTakForm);
// app.post("/add", taskController.addTaks);
// app.get("/edit/:id", taskController.getEditTakForm);
// app.post("/edit/:id", taskController.editTaks);
// app.get("/complete/:id", taskController.completeTak);
// app.get("/uncomplete/:id", taskController.uncompleteTaks);
// app.get("/delete/:id", taskController.deleteTak);

app.use(errorController.error404);

app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
