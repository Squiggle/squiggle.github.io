/*! Built with http://stenciljs.com */
App.loadBundle('cv-portfolio-card', ['exports'], function (exports) {
    var h = window.App.h;
    var CvPortfolioCard = /** @class */ (function () {
        function CvPortfolioCard() {
        }
        CvPortfolioCard.prototype.render = function () {
            return (h("div", null));
        };
        Object.defineProperty(CvPortfolioCard, "is", {
            get: function () { return "cv-portfolio-card"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CvPortfolioCard, "properties", {
            get: function () {
                return {
                    "img": {
                        "type": String,
                        "attr": "img"
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        return CvPortfolioCard;
    }());
    exports.CvPortfolioCard = CvPortfolioCard;
    Object.defineProperty(exports, '__esModule', { value: true });
});
