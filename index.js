const u = require("./utils");
const tasks = require("./tasks");

const registerAll = (gulp, config) => {
    Object.keys(tasks).forEach((name) => {
        tasks[name](gulp, name, config);
    });
};

module.exports = {
    all: tasks,
    packagify: u.format,
    registerAll
};