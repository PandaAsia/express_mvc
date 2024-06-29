const tasks = [
  {
    id: 1,
    title: "Tarea 1",
    complete: false,
  },
  {
    id: 2,
    title: "Tarea 2",
    complete: true,
  },
];

const getAllTaks = (req, res) => {
  res.render("index.pug", { title: "Lista de Tareas", tasks });
};

const getAddTakForm = (req, res) => {};

const addTaks = (req, res) => {};

const getEditTakForm = (req, res) => {};

const editTaks = (req, res) => {};

const completeTak = (req, res) => {};

const uncompleteTaks = (req, res) => {};

const deleteTak = (req, res) => {};

export default {
  getAllTaks,
  getAddTakForm,
  addTaks,
  getEditTakForm,
  editTaks,
  completeTak,
  uncompleteTaks,
  deleteTak,
};
