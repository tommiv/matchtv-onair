"use strict";

const fs       = require("fs");
const electron = require("electron");
const ppapi    = require("./ppapi");
const onairWin = require("./onair-window.js");

const app = electron.app;

app.commandLine.appendSwitch("ppapi-flash-path", ppapi.getFlashPath());

app.on("ready", onairWin);

app.on("window-all-closed", function () {
	app.quit();
});