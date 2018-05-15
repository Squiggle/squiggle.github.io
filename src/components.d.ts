/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface CvHeader {

    }
  }

  interface HTMLCvHeaderElement extends StencilComponents.CvHeader, HTMLStencilElement {}

  var HTMLCvHeaderElement: {
    prototype: HTMLCvHeaderElement;
    new (): HTMLCvHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'cv-header': HTMLCvHeaderElement;
  }
  interface ElementTagNameMap {
    'cv-header': HTMLCvHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'cv-header': JSXElements.CvHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface CvHeaderAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface CvPage {

    }
  }

  interface HTMLCvPageElement extends StencilComponents.CvPage, HTMLStencilElement {}

  var HTMLCvPageElement: {
    prototype: HTMLCvPageElement;
    new (): HTMLCvPageElement;
  };
  interface HTMLElementTagNameMap {
    'cv-page': HTMLCvPageElement;
  }
  interface ElementTagNameMap {
    'cv-page': HTMLCvPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'cv-page': JSXElements.CvPageAttributes;
    }
  }
  namespace JSXElements {
    export interface CvPageAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }