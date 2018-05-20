/*! Built with http://stenciljs.com */
const { h } = window.App;

/**
 * cv-header component
 * Responsible for header layout:
 * - named slot for title
 * - named slot for subtitle
 * - positioned slot for content (intended for cv-header-meta content)
 */
class CvHeaderSection {
    render() {
        return (h("header", null,
            h("div", null,
                h("h1", null,
                    h("slot", { name: "title" }),
                    h("div", { class: "subheading cv-header--subheading" },
                        h("slot", { name: "subtitle" })))),
            h("div", null,
                h("slot", null))));
    }
    static get is() { return "cv-header"; }
    static get style() { return "cv-header {\n      display: block;\n      background-color: var(--neutral-light, White);\n    }"; }
}

/**
 * cv-page component
 * Responsible for centered page layout.
 */
class CvPage {
    render() {
        return (h("slot", null));
    }
    static get is() { return "cv-page"; }
    static get style() { return "cv-page {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-flow: column nowrap;\n      -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap;\n      min-height: 100%;\n      margin: 0 2rem;\n    }"; }
}

export { CvHeaderSection as CvHeader, CvPage };
