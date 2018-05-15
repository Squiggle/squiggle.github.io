/*! Built with http://stenciljs.com */
const { h } = window.App;

class CvPage {
    render() {
        return (h("div", null,
            h("slot", null)));
    }
    static get is() { return "cv-page"; }
    static get style() { return "cv-page {\n      max-width: 1200px;\n      background-color: var(--neutral-light, LightGrey);\n    }"; }
}

export { CvPage };
