if (!self.define) {
    let e, a = {};
    const s = (s, i) => (s = new URL(s + ".js", i).href, a[s] || new Promise((a => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = s, e.onload = a, document.head.appendChild(e)
        } else e = s, importScripts(s), a()
    })).then((() => {
        let e = a[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e
    })));
    self.define = (i, r) => {
        const t = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (a[t]) return;
        let n = {};
        const c = e => s(e, t), l = {module: {uri: t}, exports: n, require: c};
        a[t] = Promise.all(i.map((e => l[e] || c(e)))).then((e => (r(...e), n)))
    }
}
define(["./workbox-4754cb34"], (function (e) {
    "use strict";
    importScripts(), self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{
        url: "/Assets/art-gallery/Images/icons/120x120.png",
        revision: "520c5fad3b3dfbd16f931a2c814db185"
    }, {
        url: "/Assets/art-gallery/Images/icons/128x128.png",
        revision: "9ca741fa72bcd2b3907f44ce4fd70473"
    }, {
        url: "/Assets/art-gallery/Images/icons/144x144.png",
        revision: "8ba5fd0ab904002ae7bf55395119485b"
    }, {
        url: "/Assets/art-gallery/Images/icons/152x152.png",
        revision: "c07474cb49082e1a192aca9d9ecf10e4"
    }, {
        url: "/Assets/art-gallery/Images/icons/16x16.png",
        revision: "07de61a1bc6a659f0add1686ccbccab9"
    }, {
        url: "/Assets/art-gallery/Images/icons/180x180.png",
        revision: "f7efc1c6966dcd2f7e852a19e402d430"
    }, {
        url: "/Assets/art-gallery/Images/icons/192x192.png",
        revision: "063cb6e5d0d261eb86a40c72e8601ac1"
    }, {
        url: "/Assets/art-gallery/Images/icons/32x32.png",
        revision: "d41a601e32e48c167c2a4438b0f6c1cd"
    }, {
        url: "/Assets/art-gallery/Images/icons/384x384.png",
        revision: "ca3715333ea363fdb7ea63d90c4f74e5"
    }, {
        url: "/Assets/art-gallery/Images/icons/512x512.png",
        revision: "ef3eabc1065b5af2bf1e7b4e50706b8e"
    }, {
        url: "/Assets/art-gallery/Images/icons/72x72.png",
        revision: "eeed172f2cb8629250b6590d474c54c4"
    }, {
        url: "/Assets/art-gallery/Images/icons/96x96.png",
        revision: "1719e00ab3dcaf97b828e30e07d1e115"
    }, {
        url: "/Assets/art-gallery/Images/image_display/Demon_Slayer.jpg",
        revision: "960361c1da3f9f2a56ce4f5ebd8d9d19"
    }, {
        url: "/Assets/art-gallery/Images/image_display/Free Palestine.png",
        revision: "f1f8b9c29b0ac41ebea5c4ea6b9340fc"
    }, {
        url: "/Assets/art-gallery/Images/image_display/Hema-chan.png",
        revision: "fbe9e73764577b13da3d3ca9de67e353"
    }, {
        url: "/Assets/art-gallery/Images/image_display/Kawaki_2Bv.png",
        revision: "4c78594a8da1591610cc6be156033a84"
    }, {
        url: "/Assets/art-gallery/Images/image_display/MH444.png",
        revision: "9cbbc53c284a46dc5335ca2b9006cedd"
    }, {
        url: "/Assets/art-gallery/Images/image_display/MH45.png",
        revision: "9a07b5f2f2c47328d455a599ef9a12e4"
    }, {
        url: "/Assets/art-gallery/Images/image_display/MHlogo.png",
        revision: "784b0efc1ca67e359dd2b5dfb763cadd"
    }, {
        url: "/Assets/art-gallery/Images/image_display/Moon_sord.jpg",
        revision: "bc0e446045a1bff9afa6cb3ceffe7334"
    }, {
        url: "/Assets/art-gallery/Images/image_display/Moon_wt.jpg",
        revision: "0b670f6e280423dd101235ee1074e99b"
    }, {
        url: "/Assets/art-gallery/Images/image_display/Mostafa.jpg",
        revision: "90832275d9b4b7129e8b967844e2e8e5"
    }, {
        url: "/Assets/art-gallery/Images/image_display/Pizza_G.jpg",
        revision: "826e447654e7f99aa980a558d6325125"
    }, {
        url: "/Assets/art-gallery/Images/image_display/Sarada_art.jpg",
        revision: "3c2a9286f7ee5661d0acd220ec711eaf"
    }, {
        url: "/Assets/art-gallery/Images/image_display/gojo_sensei.jpg",
        revision: "beea3ee9296aebba530a353aaec327e3"
    }, {
        url: "/Assets/art-gallery/Images/image_display/kawaki.jpg",
        revision: "c0fbc4a25ead2ce67b102d224eb8f19b"
    }, {
        url: "/Assets/art-gallery/Images/image_display/logo_hg.jpg",
        revision: "b9183dc80ee50241235379b6ced31be0"
    }, {
        url: "/Assets/art-gallery/Images/image_display/maki.jpg",
        revision: "37c3295d220cd1be35faae8a9b18c2c8"
    }, {
        url: "/Assets/art-gallery/Images/image_display/mh44.jpg",
        revision: "9286ecc3a8c0b4149ecceb092baf62d7"
    }, {
        url: "/Assets/art-gallery/Images/image_display/red_g.jpg",
        revision: "2b7d538ecc1632f127f4dbb0c4d7b467"
    }, {
        url: "/Assets/art-gallery/Images/image_display/rev_brt.jpg",
        revision: "42e689814b919a08d39d1c30d4abd9a2"
    }, {
        url: "/Assets/art-gallery/Images/image_display/sakura.jpg",
        revision: "9c8e75bdc35864f8f79a7b8213310bee"
    }, {
        url: "/Assets/art-gallery/Images/image_web/Demon_Slayer.webp",
        revision: "36094206746b7b2ed5520682982117b2"
    }, {
        url: "/Assets/art-gallery/Images/image_web/Free Palestine.webp",
        revision: "85826ce9dbbecbc1701c4d7fb98a5f70"
    }, {
        url: "/Assets/art-gallery/Images/image_web/Hema-chan.webp",
        revision: "0f3fc4e15b641c86f2c5c512cc81c59f"
    }, {
        url: "/Assets/art-gallery/Images/image_web/Kawaki_2Bv.webp",
        revision: "e13786958610f762bac04c6a5fb02869"
    }, {
        url: "/Assets/art-gallery/Images/image_web/MH43.webp",
        revision: "0bb6b3d69c6c2cfb9800aee933547fce"
    }, {
        url: "/Assets/art-gallery/Images/image_web/MH444.webp",
        revision: "ff1c6264ea8f12645ea6e7479cf636d9"
    }, {
        url: "/Assets/art-gallery/Images/image_web/MH45.webp",
        revision: "30e902e81927d1cde02d10c21b5853c9"
    }, {
        url: "/Assets/art-gallery/Images/image_web/MHlogo.webp",
        revision: "4b4b81279835550963262248e65d8834"
    }, {
        url: "/Assets/art-gallery/Images/image_web/Moon_sord.webp",
        revision: "115f7e075149d1b5fec09c5dcb30fe01"
    }, {
        url: "/Assets/art-gallery/Images/image_web/Moon_wt.webp",
        revision: "97130277297548b05988358505b4d312"
    }, {
        url: "/Assets/art-gallery/Images/image_web/Mostafa.webp",
        revision: "a0a7bfb94a3ac93e4afc94a26070f13d"
    }, {
        url: "/Assets/art-gallery/Images/image_web/Sarada_art.webp",
        revision: "e362abc77369d825bdec824cf86bb6ba"
    }, {
        url: "/Assets/art-gallery/Images/image_web/gojo_sensei.webp",
        revision: "726dd335730b27ab7291f128f579cd2c"
    }, {
        url: "/Assets/art-gallery/Images/image_web/image-pizza.jpg",
        revision: "826e447654e7f99aa980a558d6325125"
    }, {
        url: "/Assets/art-gallery/Images/image_web/kawaki.webp",
        revision: "62aa5a96707f06532a682245eb78ea9d"
    }, {
        url: "/Assets/art-gallery/Images/image_web/logo_hg.webp",
        revision: "dc3eb05515094bcf8c68ed42b5fb0857"
    }, {
        url: "/Assets/art-gallery/Images/image_web/maki.webp",
        revision: "39d654cd919cdd6b5820a2c6d79948b7"
    }, {
        url: "/Assets/art-gallery/Images/image_web/red_g.webp",
        revision: "c13b6176dc3aa3ea688a7adf5a851084"
    }, {
        url: "/Assets/art-gallery/Images/image_web/rev_brt.webp",
        revision: "252b08fcf51f5dfcc00dc8ff956f318b"
    }, {
        url: "/Assets/art-gallery/Images/image_web/sakura.webp",
        revision: "d7eba5de9afcbf017f822038f9137f6a"
    }, {
        url: "/Assets/art-gallery/Images/logo/My_Logo.webp",
        revision: "9359019f691bf1a898c4df77ca57526e"
    }, {
        url: "/Assets/loading/loading.gif",
        revision: "09d98bf8a6135fddd2571318227a0b1c"
    }, {
        url: "/_next/app-build-manifest.json",
        revision: "a0420711be48dd7fc5b95d80908275b4"
    }, {
        url: "/_next/static/chunks/23-76bd0cf8736df3a2.js",
        revision: "rtud16wodAXXdhUaOe4Fd"
    }, {
        url: "/_next/static/chunks/69b09407-95f0b613abbf1156.js",
        revision: "rtud16wodAXXdhUaOe4Fd"
    }, {
        url: "/_next/static/chunks/870fdd6f-a802138ca724ccd6.js",
        revision: "rtud16wodAXXdhUaOe4Fd"
    }, {
        url: "/_next/static/chunks/993-7db97c6c6535632f.js",
        revision: "rtud16wodAXXdhUaOe4Fd"
    }, {
        url: "/_next/static/chunks/app/_not-found/page-3937cd4158509815.js",
        revision: "rtud16wodAXXdhUaOe4Fd"
    }, {
        url: "/_next/static/chunks/app/layout-3e0157196ba88b93.js",
        revision: "rtud16wodAXXdhUaOe4Fd"
    }, {
        url: "/_next/static/chunks/app/page-824e08c0a2c57390.js",
        revision: "rtud16wodAXXdhUaOe4Fd"
    }, {
        url: "/_next/static/chunks/fd9d1056-4c8ab621c9c4c8c9.js",
        revision: "rtud16wodAXXdhUaOe4Fd"
    }, {
        url: "/_next/static/chunks/framework-f66176bb897dc684.js",
        revision: "rtud16wodAXXdhUaOe4Fd"
    }, {
        url: "/_next/static/chunks/main-7b9d4bc78aa8edd4.js",
        revision: "rtud16wodAXXdhUaOe4Fd"
    }, {
        url: "/_next/static/chunks/main-app-e52109058950c6a7.js",
        revision: "rtud16wodAXXdhUaOe4Fd"
    }, {
        url: "/_next/static/chunks/pages/_app-6a626577ffa902a4.js",
        revision: "rtud16wodAXXdhUaOe4Fd"
    }, {
        url: "/_next/static/chunks/pages/_error-1be831200e60c5c0.js",
        revision: "rtud16wodAXXdhUaOe4Fd"
    }, {
        url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
        revision: "79330112775102f91e1010318bae2bd3"
    }, {
        url: "/_next/static/chunks/webpack-835b42878f2f9d5e.js",
        revision: "rtud16wodAXXdhUaOe4Fd"
    }, {
        url: "/_next/static/css/29f9be68487d1aa5.css",
        revision: "29f9be68487d1aa5"
    }, {
        url: "/_next/static/css/aa843508d7afd4e5.css",
        revision: "aa843508d7afd4e5"
    }, {
        url: "/_next/static/media/loading.cf6475e3.gif",
        revision: "cf6475e3"
    }, {
        url: "/_next/static/rtud16wodAXXdhUaOe4Fd/_buildManifest.js",
        revision: "2ec694eb52ae4f523f265a46bae4d768"
    }, {
        url: "/_next/static/rtud16wodAXXdhUaOe4Fd/_ssgManifest.js",
        revision: "b6652df95db52feb4daf4eca35380933"
    }, {url: "/manifest.json", revision: "51b30877c53e23efaa5b5b64b16a5697"}, {
        url: "/manifest.json~",
        revision: "c3a2943982452736f519e5c514efdeaf"
    }], {ignoreURLParametersMatching: []}), e.cleanupOutdatedCaches(), e.registerRoute("/", new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [{
            cacheWillUpdate: async ({
                                        request: e,
                                        response: a,
                                        event: s,
                                        state: i
                                    }) => a && "opaqueredirect" === a.type ? new Response(a.body, {
                status: 200,
                statusText: "OK",
                headers: a.headers
            }) : a
        }]
    }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 31536e3})]
    }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 604800})]
    }), "GET"), e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 604800})]
    }), "GET"), e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({maxEntries: 64, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({maxEntries: 64, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute(/\.(?:mp3|wav|ogg)$/i, new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute(/\.(?:mp4)$/i, new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute((({url: e}) => {
        if (!(self.origin === e.origin)) return !1;
        const a = e.pathname;
        return !a.startsWith("/api/auth/") && !!a.startsWith("/api/")
    }), new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({maxEntries: 16, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute((({url: e}) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/")
    }), new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute((({url: e}) => !(self.origin === e.origin)), new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 3600})]
    }), "GET")
}));
