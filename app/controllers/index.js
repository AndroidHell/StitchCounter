var args = arguments[0] || {}; //loads whatever from index.js. We technically don't need this here.'

/* Adds the options wrench in Android and is supposed to add options menu for iOS
 * Works for Android but haven't tested on iOS
 */
function clickedSettings(e) {
	var settingsController = Alloy.createController('settings');
	var win = settingsController.getView();

	if (Alloy.Globals.navgroup) {
		Alloy.Globals.navgroup.openWindow(win);
	} else if (OS_ANDROID) {
		win.open();
	}
}

function clickedAbout(e) {
	var aboutController = Alloy.createController('about');
	var win = aboutController.getView();

	if (Alloy.Globals.navgroup) {
		Alloy.Globals.navgroup.openWindow(win);
	} else if (OS_ANDROID) {
		win.open();
	}
}

$.index.open();
