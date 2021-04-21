/*global QUnit*/

sap.ui.define([
	"ns/calendar/controller/Calendar.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Calendar Controller");

	QUnit.test("I should test the Calendar controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
