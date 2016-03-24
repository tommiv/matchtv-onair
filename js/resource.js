"use strict";

const path  = require("path");

module.exports = {
	getPath: (type, name) => path.join(process.cwd(), type, name)
};