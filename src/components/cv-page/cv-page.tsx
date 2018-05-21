import { Component } from '@stencil/core';

/**
 * cv-page component
 * Responsible for centered page layout.
 */
@Component({
  tag: 'cv-page',
  styles: `
    cv-page {
      max-width: 1200px;
      display: flex;
      flex-flow: column nowrap;
      min-height: 100%;
      margin: 0 auto;
    }
    cv-page > cv-section {
      margin: 0 -2rem;
      padding: 2rem 4rem;
      background-color: var(--colour-neutral-normal)
    }
    cv-page > cv-section:nth-child(2n) {
      background-color: var(--colour-neutral-light)
    }
    cv-page > cv-section:last-child {
      flex-grow: 1;
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