

namespace AngularRouteExercise {

    angular.module("AngularRouteExercise", ["ui.router"])
        .config(($stateProvider: ng.ui.IStateProvider,
            $locationProvider: ng.ILocationProvider,
            $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

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


    class ContactController {
        public title;

        getContactTitle() {
            return this.title = "Contact Us";
        }
    }
    angular.module("AngularRouteExercise").controller("ContactController", ContactController);



    class AboutController {
        public titleAbout;

        getAboutTitle() {
            return this.titleAbout = "About Us";
        }
    }
    angular.module("AngularRouteExercise").controller("AboutController", AboutController);

}