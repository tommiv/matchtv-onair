"use strict";

const electron = require("electron");
const resource = require("./resource");

let window;

function create() {
	window = new electron.BrowserWindow({
		width: 1280,
		height: 742,
		title: "MatchTV: on air",
		"always-on-top": true
	});

	window.loadURL("file://" + resource.getPath("html", "onair.html"));

	// window.webContents.openDevTools();
}

module.exports = create;