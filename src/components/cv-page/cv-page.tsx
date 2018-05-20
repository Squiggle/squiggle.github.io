import { Component } from '@stencil/core';

/**
 * cv-page component
 * Responsible for centered page layout.
 */
@Component({
  tag: 'cv-page',
  styles: `
    cv-page {
      display: flex;
      flex-flow: column nowrap;
      min-height: 100%;
      margin: 0 2rem;
    }
  `
})
export class CvPage {
  render() {
    return (
      <slot />
    );
  }
}