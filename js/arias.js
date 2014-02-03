/*global $*/
define(function (require, exports, module) {
    require("helpers/jquery");
    $(".header-nav a").on("click", function () {
        $(".main-articles-iframe").attr("src", "Collection/" + $(this).text() + ".html");
    });
});