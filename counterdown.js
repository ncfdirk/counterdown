/*!
* jquery.counterdown.min.js 1.0
* Customized from jquery.counterup.min.js by Benjamin Intal http://gambit.ph @bfintal
* Adapted for countdown functionality.
* Date: Jan 15, 2024
*/
(function(e) {
    "use strict";
    e.fn.counterDown = function(t) {
        var n = e.extend({
            time: 400,
            delay: 10,
            startNumber: 24,
            endNumber: 2
        }, t);
        return this.each(function() {
            var t = e(this),
                r = n,
                i = function() {
                    var e = [],
                        n = r.time / r.delay,
                        i = r.startNumber,
                        s = r.endNumber,
                        o = /^[0-9]+$/.test(i.toString()),
                        u = /^[0-9]+\.[0-9]+$/.test(i.toString()),
                        a = u ? (i.toString().split(".")[1] || []).length : 0;
                    for (var f = 0; f <= n; f++) {
                        var l = parseInt(i) - parseInt((i - s) / n * f);
                        u && (l = (parseFloat(i) - parseFloat((i - s) / n * f)).toFixed(a));
                        e.push(l);
                    }
                    t.data("counterdown-nums", e);
                    t.text(i);
                    var c = function() {
                        t.text(t.data("counterdown-nums").shift());
                        if (t.data("counterdown-nums").length) setTimeout(t.data("counterdown-func"), r.delay);
                        else {
                            delete t.data("counterdown-nums");
                            t.data("counterdown-nums", null);
                            t.data("counterdown-func", null);
                        }
                    };
                    t.data("counterdown-func", c);
                    setTimeout(t.data("counterdown-func"), r.delay);
                };
            t.waypoint(i, {
                offset: "100%",
                triggerOnce: !0
            });
        });
    }
})(jQuery);