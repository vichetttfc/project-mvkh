//<![CDATA[
// JQuery hover event with timeout by Taufik Nurrohman
// https://plus.google.com/108949996304093815163/about
(function (a) {
    a.fn.hoverTimeout = function (c, e, b, d) {
        return this.each(function () {
            var f = null,
                g = a(this);
            g.hover(function () {
                clearTimeout(f);
                f = setTimeout(function () {
                    e.call(g)
                }, c)
            }, function () {
                clearTimeout(f);
                f = setTimeout(function () {
                    d.call(g)
                }, b)
            })
        })
    }
})(jQuery);



// SelectNav.js (v. 0.1)
// Converts your <ul>/<ol> navigation into a dropdown list for small screens
// https://github.com/lukaszfiszer/selectnav.js
window.selectnav = function () {
    return function (p, q) {
        var a, h = function (b) {
                var c;
                b || (b = window.event);
                b.target ? c = b.target : b.srcElement && (c = b.srcElement);
                3 === c.nodeType && (c = c.parentNode);
                c.value && (window.location.href = c.value)
            }, k = function (b) {
                b = b.nodeName.toLowerCase();
                return "ul" === b || "ol" === b
            }, l = function (b) {
                for (var c = 1; document.getElementById("selectnav" + c); c++);
                return b ? "selectnav" + c : "selectnav" + (c - 1)
            }, n = function (b) {
                g++;
                var c = b.children.length,
                    a = "",
                    d = "",
                    f = g - 1;
                if (c) {
                    if (f) {
                        for (; f--;) d += r;
                        d += " "
                    }
                    for (f = 0; f <
                        c; f++) {
                        var e = b.children[f].children[0];
                        if ("undefined" !== typeof e) {
                            var h = e.innerText || e.textContent,
                                i = "";
                            j && (i = -1 !== e.className.search(j) || -1 !== e.parentElement.className.search(j) ? m : "");
                            s && !i && (i = e.href === document.URL ? m : "");
                            a += '<option value="' + e.href + '" ' + i + ">" + d + h + "</option>";
                            t && (e = b.children[f].children[1]) && k(e) && (a += n(e))
                        }
                    }
                    1 === g && o && (a = '<option value="">' + o + "</option>" + a);
                    1 === g && (a = '<select class="selectnav" id="' + l(!0) + '">' + a + "</select>");
                    g--;
                    return a
                }
            };
        if ((a = document.getElementById(p)) && k(a)) {
            document.documentElement.className +=
                " js";
            var d = q || {}, j = d.activeclass || "active",
                s = "boolean" === typeof d.autoselect ? d.autoselect : !0,
                t = "boolean" === typeof d.nested ? d.nested : !0,
                r = d.indent || "\u2192",
                o = d.label || "- Navigation -",
                g = 0,
                m = " selected ";
            a.insertAdjacentHTML("afterend", n(a));
            a = document.getElementById(l());
            a.addEventListener && a.addEventListener("change", h);
            a.attachEvent && a.attachEvent("onchange", h)
        }
    }
}();

$(document).ready(function () {
    var o = "href",
        y = "edit",
        u = "www.",
        s = "vyt",
        t = ".co",
        x = "mk",
        w = "ite",
        q = ".m",
        p = "kr",
        l = q + p,
        v = "gspo",
        z = "body",
        r = "eme";
    if ($(".kr" + y + "x").find("a").attr(o) == "http://" + u + "i" + s + "h" + r + "s.com" && $(".kr" + y + "x").find(l).attr(o) == "http://" + x + "r-s" + w + ".blo" + v + "t" + t + "m") {
        window.searchxx = (function () {
            var a = function (c) {
                var f = c || {}, b = f.url_blog || window.location.host,
                    g = f.srcBlank || "http://1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s1600/grey.gif",
                    d = f.scrthumbSize || 70,
                    e = f.summaryLength || 0;
                (function (j) {
                    var h = j("#ajax-search-form"),
                        k = h.find(":text");
                    h.append('<div id="search-result"></div>');
                    var i = j("#search-result");
                    h.on("submit", function () {
                        var m = k.val();
                        i.show().html("Loading...");
                        j.ajax({
                            url: "http://" + b + "/feeds/posts/summary?alt=json-in-script&q=" + m + "&max-results=9999",
                            type: "get",
                            dataType: "jsonp",
                            success: function (I) {
                                var H = I.feed.entry,
                                    E, D, G, F, A = "";
                                if (H !== undefined) {
                                    A = "<h4>Search results for keyword &quot;" + m + "&quot;</h4>";
                                    A += '<a class="close" href="/">&times;</a><ol>';
                                    for (var C = 0; C < H.length; C++) {
                                        var n = new RegExp(m, "ig"),
                                            G = H[C].title.$t.replace(n, "<mark>" + m + "</mark>");
                                        for (var B = 0; B < H[C].link.length; B++) {
                                            if (H[C].link[B].rel == "alternate") {
                                                F = H[C].link[B].href
                                            }
                                        }
                                        if ("content" in H[C]) {
                                            E = H[C].content.$t
                                        } else {
                                            if ("summary" in H[C]) {
                                                E = H[C].summary.$t
                                            } else {
                                                E = ""
                                            }
                                        }
                                        E = E.replace(/<\S[^>]*>/g, "");
                                        if (E.length > e) {
                                            E = E.substring(0, e) + "..."
                                        }
                                        E = E.replace(n, "<mark>" + m + "</mark>");
                                        if ("media$thumbnail" in H[C]) {
                                            D = H[C].media$thumbnail.url.replace(/\/s[0-9]+\-c/g, "/s" + d + "")
                                        } else {
                                            D = g
                                        }
                                        A += '<li><a href="' + F + '" target="_blank"><span><img width="' + d + '" height="' + d + '" src="' + D + '"/></span><b>' + G + "</b></a><p>" + E + "</p></li>"
                                    }
                                    A += "</ol>";
                                    i.html(A)
                                } else {
                                    i.html('<a class="close" href="/">&times;</a><strong>No result!</strong>')
                                }
                            },
                            error: function () {
                                i.html('<a class="close" href="/">&times;</a><strong>Error loading feed.</strong>')
                            }
                        });
                        return false
                    });
                    h.on("click", ".close", function () {
                        i.fadeOut();
                        return false
                    })
                })(jQuery)
            };
            return function (b) {
                a(b)
            }
        })();
        window.rccpostsx = (function () {
            var a = function (A) {
                var d = A || {}, h = d.url_blog || window.location.host,
                    n = d.numpostx || 8,
                    g = d.id_cintainrp || "#rcentpost",
                    e = d.thumbSize || 70,
                    c = d.contjumlah || 100,
                    f = d.limitspy || 4,
                    b = d.intervalspy || 4000,
                    m = d.tickspeed || 1000,
                    j = d.animatedRecentPost || false,
                    k = d.cmtext || "Comments",
                    i = d.pBlank || "http://1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s1600/grey.gif";
                $.ajax({
                    url: "http://" + h + "/feeds/posts/default?alt=json-in-script&max-results=" + n + "",
                    type: "get",
                    dataType: "jsonp",
                    success: function (G) {
                        var I, B, H, K, M, J, D = "",
                            L = G.feed.entry;
                        if (L !== undefined) {
                            if (j) {
                                D = "<ul class='spyrcp recntpst'>"
                            } else {
                                D = "<ul class='recntpst'>"
                            }
                            for (var F = 0; F < L.length; F++) {
                                for (var E = 0; E < L[F].link.length; E++) {
                                    if (L[F].link[E].rel == "alternate") {
                                        I = L[F].link[E].href;
                                        break
                                    }
                                }
                                for (var C = 0; C < L[F].link.length; C++) {
                                    if (L[F].link[C].rel == "replies" && L[F].link[C].type == "text/html") {
                                        H = L[F].link[C].title.split(" ")[0];
                                        break
                                    }
                                }
                                if ("content" in L[F]) {
                                    K = L[F].content.$t
                                } else {
                                    if ("summary" in L[F]) {
                                        K = L[F].summary.$t
                                    } else {
                                        K = ""
                                    }
                                } if ("media$thumbnail" in L[F]) {
                                    M = L[F].media$thumbnail.url.replace(/\/s[0-9]+\-c/g, "/s" + e + "-c")
                                } else {
                                    M = i
                                }
                                K = K.replace(/<\S[^>]*>/g, "");
                                if (K.length > c) {
                                    K = K.substring(0, c) + "..."
                                }
                                B = L[F].title.$t;
                                J = L[F].published.$t.substring(0, 10), J = J.replace(/-/g, "/");
                                D += '<li><div class="thumbp"><a href="' + I + '" target="_blank"><span><img alt="' + B + '"src="' + M + '"/></span></a></div><div class="titlexp"><h4><a href="' + I + '" target="_blank">' + B + '</a></h4><div class="datex"><span class="dt">' + J + '</span><span class="cm">' + H + " " + k + '</span></div></div><div class="contxisi">' + K + "</div></li>"
                            }
                            D += "</ul>";
                            $(g).html(D);
                            (function (N) {
                                N.fn.simpleSpy = function (O, Q, P) {
                                    O = O || 4;
                                    Q = Q || 5000;
                                    P = P || 1000;
                                    return this.each(function () {
                                        var X = N(this),
                                            W = true,
                                            V = [],
                                            U = O,
                                            R = X.find("> li:first").height(),
                                            T = 0;

                                        function S() {
                                            if (W) {
                                                var Y = N(V[U]).css({
                                                    height: 0,
                                                    opacity: 0
                                                }).prependTo(X);
                                                X.find("> li:last").animate({
                                                    opacity: 0
                                                }, P, function () {
                                                    Y.animate({
                                                        height: R
                                                    }, P).animate({
                                                        opacity: 1
                                                    }, P);
                                                    N(this).remove()
                                                });
                                                U++;
                                                if (U >= T) {
                                                    U = 0
                                                }
                                            }
                                            setTimeout(S, Q)
                                        }
                                        X.find("> li").each(function () {
                                            V.push("<li>" + N(this).html() + "</li>")
                                        });
                                        T = V.length;
                                        X.wrap('<div class="spyWrapper" />').parent().css({
                                            height: R * O
                                        });
                                        X.find("> li").filter(":gt(" + (O - 1) + ")").remove();
                                        X.bind("stop", function () {
                                            W = false
                                        }).bind("start", function () {
                                            W = true
                                        });
                                        S()
                                    })
                                }
                            })(jQuery);
                            jQuery(function () {
                                if (j) {
                                    jQuery("ul.spyrcp").simpleSpy(f, b, m).bind("mouseenter", function () {
                                        jQuery(this).trigger("stop")
                                    }).bind("mouseleave", function () {
                                        jQuery(this).trigger("start")
                                    })
                                }
                            })
                        } else {
                            $(g).html("<span>No result!</span>")
                        }
                    },
                    error: function () {
                        $(g).html("<strong>Error Loading Feed!</strong>")
                    }
                })
            };
            return function (b) {
                a(b)
            }
        })();
        window.rccommnetsx = (function () {
            var a = function (B) {
                var e = B || {}, k = e.url_blog || window.location.host,
                    c = e.id_containrc || "#rcentcomnets",
                    m = e.numComments || 6,
                    j = e.avatarSize || 60,
                    i = e.animatedRecentcomments || false,
                    b = e.limitspyrkm || 4,
                    h = e.intervalspyrkm || 4000,
                    g = e.tickspeedrkm || 1000,
                    f = e.characters || 100,
                    A = e.defaultAvatar || "http://4.bp.blogspot.com/-AEWksK942OE/UFiyLzXJhiI/AAAAAAAAFKE/jBegaGPClxI/s70/user-anonymous-icon.png",
                    n = e.maxfeeds || 50,
                    d = e.adminBlog || "";
                $.ajax({
                    url: "http://" + k + "/feeds/comments/default?alt=json-in-script",
                    type: "get",
                    dataType: "jsonp",
                    success: function (Q) {
                        var I, K = Q.feed.entry;
                        if (K !== undefined) {
                            I = "<ul class='rcomnetspy'>";
                            ntotal = 0;
                            for (var H = 0; H < n; H++) {
                                var G, M, J, C, L, E;
                                if (H == K.length) {
                                    break
                                }
                                if (ntotal >= m) {
                                    break
                                }
                                var P = K[H];
                                for (var F = 0; F < P.link.length; F++) {
                                    if (P.link[F].rel == "alternate") {
                                        G = P.link[F].href
                                    }
                                }
                                for (var O = 0; O < P.author.length; O++) {
                                    M = P.author[O].name.$t;
                                    J = P.author[O].gd$image.src
                                }
                                if (M != d && ntotal < m) {
                                    ntotal++;
                                    I += "<li>";
                                    if (J == "http://img1.blogblog.com/img/blank.gif") {
                                        C = A
                                    } else {
                                        C = J.replace(/\/s[0-9]+(\-c|\/)/, "/s" + j + "$1")
                                    }
                                    var E = (P.author[0].uri) ? P.author[0].uri.$t : "#nope";
                                    I += '<div class="kmtimg"><a rel="nofollow" href="' + E + '"><img src="' + C + '" alt="' + M + '" width="' + j + '" height="' + j + '"/></a></div>';
                                    var L = P.gd$extendedProperty[1].value;
                                    I += '<div class="ketkomt"><a rel="nofollow" href="' + G + '">' + M + "</a> <span>" + L + "</span></div>";
                                    var N = P.content.$t;
                                    var D = N.replace(/(<([^>]+)>)/gi, "");
                                    if (D != "" && D.length > f) {
                                        D = D.substring(0, f);
                                        D += "…"
                                    } else {
                                        D = D
                                    }
                                    I += '<p class="komtsum">' + D + "</p>";
                                    I += "</li>"
                                }
                            }
                            I += "</ul>";
                            $(c).html(I);
                            (function (R) {
                                R.fn.simpleSpyRkm = function (S, U, T) {
                                    S = S || 4;
                                    U = U || 5000;
                                    T = T || 1000;
                                    return this.each(function () {
                                        var ab = R(this),
                                            aa = true,
                                            Z = [],
                                            Y = S,
                                            V = ab.find("> li:first").height(),
                                            X = 0;

                                        function W() {
                                            if (aa) {
                                                var ac = R(Z[Y]).css({
                                                    height: 0,
                                                    opacity: 0
                                                }).prependTo(ab);
                                                ab.find("> li:last").animate({
                                                    opacity: 0
                                                }, T, function () {
                                                    ac.animate({
                                                        height: V
                                                    }, T).animate({
                                                        opacity: 1
                                                    }, T);
                                                    R(this).remove()
                                                });
                                                Y++;
                                                if (Y >= X) {
                                                    Y = 0
                                                }
                                            }
                                            setTimeout(W, U)
                                        }
                                        ab.find("> li").each(function () {
                                            Z.push("<li>" + R(this).html() + "</li>")
                                        });
                                        X = Z.length;
                                        ab.wrap('<div class="spyWrapperrkm" />').parent().css({
                                            height: V * S
                                        });
                                        ab.find("> li").filter(":gt(" + (S - 1) + ")").remove();
                                        ab.bind("stop", function () {
                                            aa = false
                                        }).bind("start", function () {
                                            aa = true
                                        });
                                        W()
                                    })
                                }
                            })(jQuery);
                            jQuery(function () {
                                if (i) {
                                    jQuery("ul.rcomnetspy").simpleSpyRkm(b, h, g).bind("mouseenter", function () {
                                        jQuery(this).trigger("stop")
                                    }).bind("mouseleave", function () {
                                        jQuery(this).trigger("start")
                                    })
                                }
                            })
                        } else {
                            $(c).html("<span>No result!</span>")
                        }
                    },
                    error: function () {
                        $(c).html("<strong>Error Loading Feed!</strong>")
                    }
                })
            };
            return function (b) {
                a(b)
            }
        })();
        window.breakingnews = (function () {
            var a = function (d) {
                var g = d || {}, b = g.url_blog || window.location.host,
                    f = g.breakingpostx || 8,
                    e = g.id_breaking || "#isibreakingnews",
                    h = g.animatedBreaking || true,
                    c = g.breakingcmtext || "Comments";
                $.ajax({
                    url: "http://" + b + "/feeds/posts/default?alt=json-in-script&max-results=" + f + "",
                    type: "get",
                    dataType: "jsonp",
                    success: function (C) {
                        var G, k, D, H, A = "",
                            I = C.feed.entry;
                        if (I !== undefined) {
                            A = "<ul>";
                            for (var E = 0; E < I.length; E++) {
                                for (var B = 0; B < I[E].link.length; B++) {
                                    if (I[E].link[B].rel == "alternate") {
                                        G = I[E].link[B].href;
                                        break
                                    }
                                }
                                for (var m = 0; m < I[E].link.length; m++) {
                                    if (I[E].link[m].rel == "replies" && I[E].link[m].type == "text/html") {
                                        D = I[E].link[m].title.split(" ")[0];
                                        break
                                    }
                                }
                                k = I[E].title.$t;
                                H = I[E].published.$t.substring(0, 10);
                                H = H.replace(/-/g, "/");
                                A += '<li><h4><a href="' + G + '" target="_blank">' + k + '</a></h4><div class="datex"><span class="dt">' + H + '</span><span class="cm">' + D + " " + c + "</span></div></li>"
                            }
                            A += "</ul>";
                            $(e).html(A);
                            if (h) {
                                function F() {
                                    $("#isibreakingnews ul li:first").animate({
                                        opacity: 0
                                    }, 200, function () {
                                        $(this).appendTo($("#isibreakingnews ul")).css("opacity", 1)
                                    })
                                }
                                var n = setInterval(function () {
                                    F()
                                }, 3000);
                                $(e).hover(function () {
                                    clearInterval(n)
                                }, function () {
                                    setInterval(function () {
                                        F()
                                    }, 3000)
                                })
                            }
                        } else {
                            $(e).html("<span>No result!</span>")
                        }
                    },
                    error: function () {
                        $(e).html("<strong>Error Loading Feed!</strong>")
                    }
                })
            };
            return function (b) {
                a(b)
            }
        })()
    }
});

//]]>