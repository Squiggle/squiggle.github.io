/*! Built with http://stenciljs.com */
App.loadBundle('cv-header', ['exports'], function (exports) {
    var h = window.App.h;
    var CvHeaderSection = /** @class */ (function () {
        function CvHeaderSection() {
        }
        CvHeaderSection.prototype.render = function () {
            return (h("section", null, h("slot", null)));
        };
        Object.defineProperty(CvHeaderSection, "is", {
            get: function () { return "cv-header"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CvHeaderSection, "style", {
            get: function () { return "cv-header {\n      display: block;\n      background-color: var(--secondary-light, Lavender);\n    }"; },
            enumerable: true,
            configurable: true
        });
        return CvHeaderSection;
    }());
    exports.CvHeader = CvHeaderSection;
    Object.defineProperty(exports, '__esModule', { value: true });
});
