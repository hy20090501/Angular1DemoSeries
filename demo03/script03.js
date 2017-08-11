var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/tab1");

    $stateProvider
        .state("tab1", {
            url: "/tab1",
            templateUrl: "tab1/tab1.html"
        })
        .state("tab1.page1", {
            url: "/page1",
            templateUrl: "tab1/page1.html"
        })
        .state("tab1.page1.content1", {
            url: "/content1",
            templateUrl: "tab1/page1_content1.html"
        })
        .state("tab1.page2", {
            url: "/page2",
            templateUrl: "tab1/page2.html"
        })
        .state("tab1.page3", {
            url: "/page3",
            templateUrl: "tab1/page3.html"
        })
        .state("tab2", {
            url: "/tab2",
            templateUrl: "tab2/tab2.html"
        })
        .state("tab2.page1", {
            url: "/page1",
            templateUrl: "tab2/page1.html"
        })
        .state("tab2.page2", {
            url: "/page2",
            templateUrl: "tab2/page2.html"
        })
        .state("tab2.page3", {
            url: "/page3",
            templateUrl: "tab2/page3.html"
        });
});