!(function (e) {
    "use strict";
    var a = e(".menu-sticky"),
        t = e(window);
    t.on("scroll", function () {
        var i = t.scrollTop();
        i < 1 ? a.removeClass("sticky") : a.addClass("sticky"),
            e("section").each(function () {
                i >= e(this).offset().top - e("#header").outerHeight() && e(this).addClass("loaded");
            });
    }),
        e(window).on("load", function () {
            e("#loading").delay(1500).fadeOut(500),
                e("#loading-center").on("click", function () {
                    e("#loading").fadeOut(500);
                });
        }),
        e(".player").length && e(".player").YTPlayer(),
        new WOW().init(),
        e(".grid").length &&
            e(".grid").imagesLoaded(function () {
                e(".gridFilter").on("click", "button", function () {
                    var t = e(this).attr("data-filter");
                    a.isotope({ filter: t });
                });
                var a = e(".grid").isotope({ itemSelector: ".grid-item", percentPosition: !0, masonry: { columnWidth: ".grid-item" } });
            }),
        e(".gridFilter button").length &&
            e(".gridFilter button").length &&
            e(".gridFilter button").on("click", function (a) {
                e(this).siblings(".active").removeClass("active"), e(this).addClass("active"), a.preventDefault();
            }),
        e(".image-popup").length &&
            e(".image-popup").magnificPopup({
                type: "image",
                callbacks: {
                    beforeOpen: function () {
                        this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure animated zoomInDown");
                    },
                },
                gallery: { enabled: !0 },
            }),
        e(window).on("load", function () {
            e("#loader").delay(1e3).fadeOut(500);
        }),
        e(".popup-videos").length && e(".popup-videos").magnificPopup({ disableOn: 10, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 }),
        
        e(".carousel").each(function () {
            var $this = $(this),
                t = $this.data("loop"),
                i = $this.data("items"),
                n = $this.data("margin"),
                d = $this.data("autoplay"),
                l = $this.data("autoplay-timeout"),
                s = $this.data("smart-speed"),
                o = $this.data("dots"),
                r = $this.data("nav"),
                c = $this.data("nav-speed"),
                p = $this.data("mobile-device"),
                u = $this.data("mobile-device-nav"),
                v = $this.data("mobile-device-dots"),
                f = $this.data("ipad-device"),
                m = $this.data("ipad-device-nav"),
                g = $this.data("ipad-device-dots"),
                h = $this.data("ipad-device2"),
                y = $this.data("ipad-device-nav2"),
                C = $this.data("ipad-device-dots2"),
                b = $this.data("md-device"),
                _ = $this.data("center-mode"),
                w = $this.data("hoverpause"),
                k = $this.data("md-device-nav"),
                D = $this.data("md-device-dots"),
                lg = $this.data("lg-device"),
                xl = $this.data("xl-device"),
                xxl = $this.data("xxl-device");
        
            $this.owlCarousel({
              loop: !!t,
              items: i || 4,
              lazyLoad: true,
              center: !!_,
              autoplayHoverPause: !!w,
              margin: n || 0,
              autoplay: !!d,
              autoplayTimeout: l || 1000,
              smartSpeed: s || 250,
              dots: !!o,
              nav: !!r,
              navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
              navSpeed: !!c,
              responsiveClass: true,
              responsive: {
                0: { items: p || 1, nav: !!u, dots: !!v, center: false },
                576: { items: h || 2, nav: !!y, dots: !!C, center: false },
                768: { items: f || 3, nav: !!m, dots: !!g, center: false },
                992: { items: b || 4, nav: !!k, dots: !!D },
                1200: { items: lg || 5, nav: !!r, dots: !!o },
                1400: { items: xl || 6, nav: !!r, dots: !!o },
                1600: { items: xxl || 7, nav: !!r, dots: !!o }
              },
            });
        }),
        
        e(".count").length && e(".count").counterUp({ delay: 20, time: 1500 }),
        e("#nav-expander").length &&
            e("#nav-expander").on("click", function (a) {
                a.preventDefault(), e("body").toggleClass("nav-expanded");
            }),
        e("#nav-close").length &&
            e("#nav-close").on("click", function (a) {
                a.preventDefault(), e("body").removeClass("nav-expanded");
            }),
        e(".course-view-part .view-icons .view-grid").on("click", function (a) {
            a.preventDefault(), e(".popular-courses").removeClass("list-view");
        }),
        e(".course-view-part .view-icons .view-list").on("click", function (a) {
            a.preventDefault(), e(".popular-courses").addClass("list-view");
        }),
        e(".toggle-btn").length &&
            e(".toggle-btn").on("click", function () {
                e(this).toggleClass("active"), e("body").toggleClass("hidden-menu");
            });
})(jQuery),
    $(function () {
        var e = $(".sidebar-navigation > ul");
        e.find("li a").click(function (a) {
            var t = $(this).parent();
            t.find("ul").length > 0 &&
                (a.preventDefault(),
                t.hasClass("selected")
                    ? (t.removeClass("selected").find("li").removeClass("selected"), t.find("ul").slideUp(400), t.find("a em").removeClass("mdi-flip-v"))
                    : (0 == t.parents("li.selected").length
                          ? (e.find("li").removeClass("selected"), e.find("ul").slideUp(400), e.find("li a em").removeClass("mdi-flip-v"))
                          : (t.parent().find("li").removeClass("selected"), t.parent().find("> li ul").slideUp(400), t.parent().find("> li a em").removeClass("mdi-flip-v")),
                      t.addClass("selected"),
                      t.find(">ul").slideDown(400),
                      t.find(">a>em").addClass("mdi-flip-v")));
        }),
            $(".sidebar-navigation > ul ul").each(function (e) {
                if ($(this).find(">li>ul").length > 0) {
                    var a = $(this).parent().parent().find(">li>a").css("padding-left"),
                        t = parseInt(a),
                        i = t + 10;
                    $(this).find(">li>a").css("padding-left", i);
                } else {
                    var a = $(this).parent().parent().find(">li>a").css("padding-left"),
                        t = parseInt(a),
                        i = t + 10;
                    $(this).find(">li>a").css("padding-left", i).parent().addClass("selected--last");
                }
            });
        for (var a = 1; a <= 10; a++) $(".sidebar-navigation > ul > " + " li > ul ".repeat(a)).addClass("subMenuColor" + a);
        var t = $("li.selected");
        t.length &&
            (function e(a) {
                var t = a.closest("ul");
                if (t.length) {
                    if ((a.addClass("selected"), t.addClass("open"), a.find(">a>em").addClass("mdi-flip-v"), !t.closest("li").length)) return !1;
                    e(t.closest("li"));
                }
            })(t);
    });
const displayTime = document.querySelector(".display-time");
function showTime() {
    let e = new Date();
    (displayTime.innerText = e.toLocaleTimeString("en-US", { hour12: !1 })), setTimeout(showTime, 1e3);
}
function updateDate() {
    let e = new Date(),
        a = e.getDay(),
        t = e.getDate(),
        i = e.getMonth(),
        n = e.getFullYear(),
        d = ["day", "daynum", "month", "year"],
        l = [["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][a], t, ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][i], n];
    for (let s = 0; s < d.length; s++) document.getElementById(d[s]).firstChild.nodeValue = l[s];
}
showTime(), updateDate();
