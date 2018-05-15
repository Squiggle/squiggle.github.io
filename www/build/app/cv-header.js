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
                    h("slot", { name: "title" })),
                h("div", { class: "cv-header--subheading" },
                    h("slot", { name: "subtitle" }))),
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
        return (h("div", null,
            h("slot", null)));
    }
    static get is() { return "cv-page"; }
    static get style() { return "cv-page {\n      display: block;\n      min-height: 100%;\n      max-width: 600px;\n      margin: 0 auto 0 auto;\n      -webkit-box-shadow: 4px 0 8px rgba(1,1,1,0.1), -4px 0 8px rgba(1,1,1,0.1);\n      box-shadow: 4px 0 8px rgba(1,1,1,0.1), -4px 0 8px rgba(1,1,1,0.1)\n    }"; }
}

export { CvHeaderSection as CvHeader, CvPage };
