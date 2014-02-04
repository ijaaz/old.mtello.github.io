/*global $*/
define(function (require, exports, module) {
    $(".header-nav a").on("click", function () {
        $(".main-articles-iframe").attr("src", "Collection/" + $(this).text() + ".html");
    });
});