"use strict";

const resource = require("./resource");

let flashPlugin = null;
switch (process.platform) {
	case "win32":
		flashPlugin = "pepflashplayer.dll";
	break;
	case "linux":
		flashPlugin = "libpepflashplayer.so";
	break;
	case "darwin":
		flashPlugin = "PepperFlashPlayer.plugin";
	break;
}

module.exports = {
	getFlashPath: () => resource.getPath("ppapi", flashPlugin)
};