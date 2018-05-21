/*! Built with http://stenciljs.com */
App.loadBundle('cv-header', ['exports'], function (exports) {
    var h = window.App.h;
    /**
     * cv-header component
     * Responsible for header layout:
     * - named slot for title
     * - named slot for subtitle
     * - positioned slot for content (intended for cv-header-meta content)
     */
    var CvHeaderSection = /** @class */ (function () {
        function CvHeaderSection() {
        }
        CvHeaderSection.prototype.render = function () {
            return (h("header", null, h("div", { class: "cv-header--title" }, h("h1", null, h("slot", { name: "title" })), h("div", { class: "cv-header--subheading" }, h("slot", { name: "subtitle" }))), h("div", { class: "cv-header--meta" }, h("slot", null))));
        };
        Object.defineProperty(CvHeaderSection, "is", {
            get: function () { return "cv-header"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CvHeaderSection, "style", {
            get: function () { return "cv-header {\n      display: block;\n      background-color: var(--colour-neutral-lightest, White);\n      padding: 4rem;\n    }\n    cv-header header {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -webkit-flex-flow: row nowrap;\n      -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n    }\n    cv-header header .cv-header--title {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n      color: var(--colour-neutral-darker, black);\n    }\n    cv-header header .cv-header--title .cv-header--subheading {\n      font-size: var(--font-size-large, 40px);\n      color: var(--colour-neutral-dark, black);\n    }\n    cv-header header .cv-header--meta {\n      -webkit-box-flex: 0;\n      -webkit-flex: 0 1 auto;\n      -ms-flex: 0 1 auto;\n      flex: 0 1 auto;\n      font-size: var(--font-size-normal, 1rem);\n      margin-left: 4rem;\n    }"; },
            enumerable: true,
            configurable: true
        });
        return CvHeaderSection;
    }());
    var CvHeaderLink = /** @class */ (function () {
        function CvHeaderLink() {
        }
        CvHeaderLink.prototype.render = function () {
            return (h("div", { class: "cv-header-link-container font-size-normal" }, h("img", { src: this.image, alt: this.alt }), this.href
                ? h("a", { class: "cv-header-link--text", href: this.href, title: this.alt }, h("slot", null))
                : h("span", { class: "cv-header-link--text" }, h("slot", null))));
        };
        Object.defineProperty(CvHeaderLink, "is", {
            get: function () { return "cv-header-link"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CvHeaderLink, "properties", {
            get: function () {
                return {
                    "alt": {
                        "type": String,
                        "attr": "alt"
                    },
                    "href": {
                        "type": String,
                        "attr": "href"
                    },
                    "image": {
                        "type": String,
                        "attr": "image"
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CvHeaderLink, "style", {
            get: function () { return "cv-header-link {\n    display: block;\n    color: var(--colour-neutral-dark, black);\n    text-transform: uppercase;\n    padding: 0 1rem 1rem 0;\n  }\n  cv-header-link .cv-header-link-container {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: row nowrap;\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n  cv-header-link .cv-header-link-container a {\n    color: var(--colour-neutral-dark, black);\n    text-decoration: none;\n  }\n  cv-header-link .cv-header-link-container img {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    height: 4rem;\n    width: 4rem;\n    margin-right: 1rem;\n  }\n  cv-header-link .cv-header-link-container .cv-header-link--text {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    overflow-wrap: break-word;\n  }"; },
            enumerable: true,
            configurable: true
        });
        return CvHeaderLink;
    }());
    var CvHeaderMeta = /** @class */ (function () {
        function CvHeaderMeta() {
        }
        CvHeaderMeta.prototype.render = function () {
            return (h("slot", null));
        };
        Object.defineProperty(CvHeaderMeta, "is", {
            get: function () { return "cv-header-meta"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CvHeaderMeta, "style", {
            get: function () { return "cv-header-meta {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-flow: column nowrap;\n      -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap; \n    }"; },
            enumerable: true,
            configurable: true
        });
        return CvHeaderMeta;
    }());
    /**
     * cv-page component
     * Responsible for centered page layout.
     */
    var CvPage = /** @class */ (function () {
        function CvPage() {
        }
        CvPage.prototype.render = function () {
            return (h("slot", null));
        };
        Object.defineProperty(CvPage, "is", {
            get: function () { return "cv-page"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CvPage, "style", {
            get: function () { return "cv-page {\n      max-width: 1200px;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-flow: column nowrap;\n      -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap;\n      min-height: 100%;\n      margin: 0 auto;\n    }\n    cv-page > cv-section {\n      margin: 0 -2rem;\n      padding: 2rem 4rem;\n      background-color: var(--colour-neutral-normal)\n    }\n    cv-page > cv-section:nth-child(2n) {\n      background-color: var(--colour-neutral-light)\n    }\n    cv-page > cv-section:last-child {\n      -webkit-box-flex: 1;\n      -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n      flex-grow: 1;\n    }"; },
            enumerable: true,
            configurable: true
        });
        return CvPage;
    }());
    var CvSection = /** @class */ (function () {
        function CvSection() {
        }
        CvSection.prototype.render = function () {
            return (h("section", null, h("div", { class: "cv-section--heading" }, h("slot", { name: "heading" })), h("div", { class: "cv-section--content" }, this.img && h("img", { src: this.img }), h("div", null, h("slot", null)))));
        };
        Object.defineProperty(CvSection, "is", {
            get: function () { return "cv-section"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CvSection, "properties", {
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
        Object.defineProperty(CvSection, "style", {
            get: function () { return "cv-section {\n      padding: 2rem 4rem;\n    }\n    cv-section .cv-section--heading {\n      color: var(--colour-neutral-darker, black);\n    }\n    cv-section .cv-section--content {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -webkit-flex-flow: row nowrap;\n      -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n      justify-content: space-between;\n    }\n    cv-section .cv-section--content img {\n      -webkit-box-flex: 0;\n      -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n      flex: 0 0 auto;\n      margin-right: 2rem;\n      width: 320px;\n      height: 320px;\n    }"; },
            enumerable: true,
            configurable: true
        });
        return CvSection;
    }());
    var CvTagCloud = /** @class */ (function () {
        function CvTagCloud() {
        }
        CvTagCloud.prototype.render = function () {
            return (h("div", null, h("slot", null)));
        };
        Object.defineProperty(CvTagCloud, "is", {
            get: function () { return "cv-tag-cloud"; },
            enumerable: true,
            configurable: true
        });
        return CvTagCloud;
    }());
    var CvTagCloudHeader = /** @class */ (function () {
        function CvTagCloudHeader() {
        }
        CvTagCloudHeader.prototype.render = function () {
            return (h("div", { class: "cv-tag-cloud-header-container" }, h("slot", { name: "start" }), h("slot", { name: "end" })));
        };
        Object.defineProperty(CvTagCloudHeader, "is", {
            get: function () { return "cv-tag-cloud-header"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CvTagCloudHeader, "style", {
            get: function () { return "cv-tag-cloud-header {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -webkit-flex-flow: row nowrap;\n      -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n      justify-content: space-between;\n      margin: 2rem;\n      border-bottom: 1px solid black;\n    }\n    cv-tag-cloud-header::before {\n      display: inline-block;\n      content: \"\";\n      border-bottom: 1px solid black;\n      border-left: 1px solid black;\n      width: 2rem;\n      height: 2rem;\n      margin-left: -2rem;\n      -webkit-transform: translate(-1px, 1px) rotate(45deg);\n      transform: translate(-1px, 1px) rotate(45deg);\n      -webkit-transform-origin: bottom right;\n      transform-origin: bottom right;\n    }\n    cv-tag-cloud-header::after {\n      display: inline-block;\n      content: \"\";\n      border-bottom: 1px solid black;\n      border-right: 1px solid black;\n      width: 2rem;\n      height: 2rem;\n      margin-right: -2rem;\n      -webkit-transform: translate(1px, 1px) rotate(-45deg);\n      transform: translate(1px, 1px) rotate(-45deg);\n      -webkit-transform-origin: bottom left;\n      transform-origin: bottom left;\n    }\n    cv-tag-cloud-header .cv-tag-cloud-header-container {\n      -webkit-box-flex: 1;\n      -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n      flex-grow: 1;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -webkit-flex-flow: row;\n      -ms-flex-flow: row;\n      flex-flow: row;\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n      justify-content: space-between;\n    }"; },
            enumerable: true,
            configurable: true
        });
        return CvTagCloudHeader;
    }());
    exports.CvHeader = CvHeaderSection;
    exports.CvHeaderLink = CvHeaderLink;
    exports.CvHeaderMeta = CvHeaderMeta;
    exports.CvPage = CvPage;
    exports.CvSection = CvSection;
    exports.CvTagCloud = CvTagCloud;
    exports.CvTagCloudHeader = CvTagCloudHeader;
    Object.defineProperty(exports, '__esModule', { value: true });
});
