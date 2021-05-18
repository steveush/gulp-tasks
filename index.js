const _ = require("lodash");
const u = require("./utils");
const tasks = require("./tasks");

const registerAll = (gulp, config, force) => {
    Object.keys(tasks).forEach((name) => {
        if (force || _.has(config, name)){
            // only register required tasks
            tasks[name](gulp, name, config);
        }
    });
};

module.exports = {
    all: tasks,
    packagify: u.format,
    registerAll
};