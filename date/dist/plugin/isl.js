!function(o, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : t();
}(this, function() {
    Date.extend({
        toIsl: function(o) {
            var t = new Date(o).format(), f = t.y, r = t.M, a = t.d;
            3 > r && (f -= 1, r += 12);
            var e, l, M, h, i, n = Math.floor(f / 100), d = 2 - n + Math.floor(n / 4);
            1583 > f && (d = 0), 1582 == f && (r > 10 && (d = -10), 10 == r && (d = 0, a > 4 && (d = -10))), 
            e = Math.floor(365.25 * (f + 4716)) + Math.floor(30.6001 * (r + 1)) + a + d - 1524, 
            d = 0, e > 2299160 && (n = Math.floor((e - 1867216.25) / 36524.25), d = 1 + n - Math.floor(n / 4)), 
            l = e + d + 1524, M = Math.floor((l - 122.1) / 365.25), h = Math.floor(365.25 * M), 
            i = Math.floor((l - h) / 30.6001), a = l - h - Math.floor(30.6001 * i), r = i - 1, 
            i > 13 && (M += 1, r = i - 13), f = M - 4716;
            var u, m, s, p, x = ((e + 1) % 7 + 7) % 7 + 1, y = 10631 / 30, c = 1948084, v = .1335, D = e - c, j = Math.floor(D / 10631);
            D -= 10631 * j, u = Math.floor((D - v) / y), m = 30 * j + u, D -= Math.floor(u * y + v), 
            s = Math.floor((D + 28.5001) / 29.5), 13 == s && (s = 12), p = D - Math.floor(29.5001 * s - 29);
            var w = _.fixResult(map.isl.fixDate, t.y, t.M, t.d, m, s, p);
            return {
                iy: w.y,
                im: w.m,
                id: w.d,
                iw: x,
                jd: e - 1
            };
        }
    });
});