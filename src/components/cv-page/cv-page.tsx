import { Component } from '@stencil/core';

/**
 * cv-page component
 * Responsible for centered page layout.
 */
@Component({
  tag: 'cv-page',
  styles: `
    cv-page {
      display: block;
      min-height: 100%;
      max-width: 600px;
      margin: 0 auto 0 auto;
      box-shadow: 4px 0 8px rgba(1,1,1,0.1), -4px 0 8px rgba(1,1,1,0.1)
    }
  `
})
export class CvPage {
  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }
}