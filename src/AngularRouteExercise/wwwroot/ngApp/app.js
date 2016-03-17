var AngularRouteExercise;
(function (AngularRouteExercise) {
    angular.module("AngularRouteExercise", ["ui.router"])
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state("Contact", {
            url: "/contactUs",
            templateUrl: "/ngApp/angularRouteExercise.html",
            controller: ContactController,
            controllerAs: "controller"
        })
            .state("About", {
            url: "/aboutUs",
            templateUrl: "/ngApp/aboutUs.html",
            controller: AboutController,
            controllerAs: "controller"
        });
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    });
    var ContactController = (function () {
        function ContactController() {
        }
        ContactController.prototype.getContactTitle = function () {
            return this.title = "Contact Us";
        };
        return ContactController;
    }());
    angular.module("AngularRouteExercise").controller("ContactController", ContactController);
    var AboutController = (function () {
        function AboutController() {
        }
        AboutController.prototype.getAboutTitle = function () {
            return this.titleAbout = "About Us";
        };
        return AboutController;
    }());
    angular.module("AngularRouteExercise").controller("AboutController", AboutController);
})(AngularRouteExercise || (AngularRouteExercise = {}));
//# sourceMappingURL=app.js.map