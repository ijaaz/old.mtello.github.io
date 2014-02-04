/* global $ */
define(function (require, exports, module) {
    $(document).on("scroll", function () {
        $("header").css("opacity", "0")
    })
});