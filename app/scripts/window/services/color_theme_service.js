chromeMyAdmin.factory("colorThemeService", [
            "$rootScope", "Events", "Configurations",
    function($rootScope,   Events,   Configurations) {
    "use strict";

    return {
        switchColorTheme: function (newColorTheme) {
            console.log("Current color theme: " + newColorTheme);
            $rootScope.$broadcast(Events.COLOR_THEME_SWITCHED, newColorTheme);
        }
    };
}]);
