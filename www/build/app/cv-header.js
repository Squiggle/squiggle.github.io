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
            h("div", { class: "cv-header--title" },
                h("h1", null,
                    h("slot", { name: "title" })),
                h("div", { class: "cv-header--subheading" },
                    h("slot", { name: "subtitle" }))),
            h("div", { class: "cv-header--meta" },
                h("slot", null))));
    }
    static get is() { return "cv-header"; }
    static get style() { return "cv-header {\n      display: block;\n      background-color: var(--colour-neutral-lightest, White);\n      padding: 4rem;\n    }\n    cv-header header {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -webkit-flex-flow: row nowrap;\n      -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n    }\n    cv-header header .cv-header--title {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n      color: var(--colour-neutral-darker, black);\n    }\n    cv-header header .cv-header--title .cv-header--subheading {\n      font-size: var(--font-size-large, 40px);\n      color: var(--colour-neutral-dark, black);\n    }\n    cv-header header .cv-header--meta {\n      -webkit-box-flex: 0;\n      -webkit-flex: 0 1 auto;\n      -ms-flex: 0 1 auto;\n      flex: 0 1 auto;\n      font-size: var(--font-size-normal, 1rem);\n      margin-left: 4rem;\n    }"; }
}

class CvHeaderLink {
    render() {
        return (h("div", { class: "cv-header-link-container font-size-normal" },
            h("img", { src: this.image, alt: this.alt }),
            this.href
                ? h("a", { class: "cv-header-link--text", href: this.href, title: this.alt },
                    h("slot", null))
                : h("span", { class: "cv-header-link--text" },
                    h("slot", null))));
    }
    static get is() { return "cv-header-link"; }
    static get properties() { return {
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
    }; }
    static get style() { return "cv-header-link {\n    display: block;\n    color: var(--colour-neutral-dark, black);\n    text-transform: uppercase;\n    padding: 0 1rem 1rem 0;\n  }\n  cv-header-link .cv-header-link-container {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: row nowrap;\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n  cv-header-link .cv-header-link-container a {\n    color: var(--colour-neutral-dark, black);\n    text-decoration: none;\n  }\n  cv-header-link .cv-header-link-container img {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    height: 4rem;\n    width: 4rem;\n    margin-right: 1rem;\n  }\n  cv-header-link .cv-header-link-container .cv-header-link--text {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    overflow-wrap: break-word;\n  }"; }
}

class CvHeaderMeta {
    render() {
        return (h("slot", null));
    }
    static get is() { return "cv-header-meta"; }
    static get style() { return "cv-header-meta {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-flow: column nowrap;\n      -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap; \n    }"; }
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
    static get style() { return "cv-page {\n      max-width: 1200px;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-flow: column nowrap;\n      -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap;\n      min-height: 100%;\n      margin: 0 auto;\n    }\n    cv-page > cv-section {\n      margin: 0 -2rem;\n      padding: 2rem 4rem;\n      background-color: var(--colour-neutral-normal)\n    }\n    cv-page > cv-section:nth-child(2n) {\n      background-color: var(--colour-neutral-light)\n    }\n    cv-page > cv-section:last-child {\n      -webkit-box-flex: 1;\n      -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n      flex-grow: 1;\n    }"; }
}

class CvSection {
    render() {
        return (h("section", null,
            h("div", { class: "cv-section--heading" },
                h("slot", { name: "heading" })),
            h("div", { class: "cv-section--content" },
                this.img && h("img", { src: this.img }),
                h("div", null,
                    h("slot", null)))));
    }
    static get is() { return "cv-section"; }
    static get properties() { return {
        "img": {
            "type": String,
            "attr": "img"
        }
    }; }
    static get style() { return "cv-section {\n      padding: 2rem 4rem;\n    }\n    cv-section .cv-section--heading {\n      color: var(--colour-neutral-darker, black);\n    }\n    cv-section .cv-section--content {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -webkit-flex-flow: row nowrap;\n      -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n      justify-content: space-between;\n    }\n    cv-section .cv-section--content img {\n      -webkit-box-flex: 0;\n      -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n      flex: 0 0 auto;\n      margin-right: 2rem;\n      width: 320px;\n      height: 320px;\n    }"; }
}

class CvTagCloud {
    render() {
        return (h("div", null,
            h("slot", null)));
    }
    static get is() { return "cv-tag-cloud"; }
}

class CvTagCloudHeader {
    render() {
        return (h("div", { class: "cv-tag-cloud-header-container" },
            h("slot", { name: "start" }),
            h("slot", { name: "end" })));
    }
    static get is() { return "cv-tag-cloud-header"; }
    static get style() { return "cv-tag-cloud-header {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -webkit-flex-flow: row nowrap;\n      -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n      justify-content: space-between;\n      margin: 2rem;\n      border-bottom: 1px solid black;\n    }\n    cv-tag-cloud-header::before {\n      display: inline-block;\n      content: \"\";\n      border-bottom: 1px solid black;\n      border-left: 1px solid black;\n      width: 2rem;\n      height: 2rem;\n      margin-left: -2rem;\n      -webkit-transform: translate(-1px, 1px) rotate(45deg);\n      transform: translate(-1px, 1px) rotate(45deg);\n      -webkit-transform-origin: bottom right;\n      transform-origin: bottom right;\n    }\n    cv-tag-cloud-header::after {\n      display: inline-block;\n      content: \"\";\n      border-bottom: 1px solid black;\n      border-right: 1px solid black;\n      width: 2rem;\n      height: 2rem;\n      margin-right: -2rem;\n      -webkit-transform: translate(1px, 1px) rotate(-45deg);\n      transform: translate(1px, 1px) rotate(-45deg);\n      -webkit-transform-origin: bottom left;\n      transform-origin: bottom left;\n    }\n    cv-tag-cloud-header .cv-tag-cloud-header-container {\n      -webkit-box-flex: 1;\n      -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n      flex-grow: 1;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -webkit-flex-flow: row;\n      -ms-flex-flow: row;\n      flex-flow: row;\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n      justify-content: space-between;\n    }"; }
}

export { CvHeaderSection as CvHeader, CvHeaderLink, CvHeaderMeta, CvPage, CvSection, CvTagCloud, CvTagCloudHeader };
