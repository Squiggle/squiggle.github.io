/*! Built with http://stenciljs.com */
const { h } = window.App;

class CvPortfolioCard {
    render() {
        return (h("div", null));
    }
    static get is() { return "cv-portfolio-card"; }
    static get properties() { return {
        "img": {
            "type": String,
            "attr": "img"
        }
    }; }
}

export { CvPortfolioCard };
