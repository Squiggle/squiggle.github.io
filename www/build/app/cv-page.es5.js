/*! Built with http://stenciljs.com */
App.loadBundle('cv-page', ['exports'], function (exports) {
    var h = window.App.h;
    var CvPage = /** @class */ (function () {
        function CvPage() {
        }
        CvPage.prototype.render = function () {
            return (h("div", null, h("slot", null)));
        };
        Object.defineProperty(CvPage, "is", {
            get: function () { return "cv-page"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CvPage, "style", {
            get: function () { return "cv-page {\n      max-width: 1200px;\n      background-color: var(--neutral-light, LightGrey);\n    }"; },
            enumerable: true,
            configurable: true
        });
        return CvPage;
    }());
    exports.CvPage = CvPage;
    Object.defineProperty(exports, '__esModule', { value: true });
});
