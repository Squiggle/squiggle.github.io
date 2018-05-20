import { Component } from '@stencil/core';

/**
 * cv-header component
 * Responsible for header layout:
 * - named slot for title
 * - named slot for subtitle
 * - positioned slot for content (intended for cv-header-meta content)
 */
@Component({
  tag: 'cv-header',
  styles: `
    cv-header {
      display: block;
      background-color: var(--neutral-light, White);
    }
  `
})
export class CvHeaderSection {
  render() {
    return (
      <header>
        <div>
          <h1>
            <slot name="title" />
            <div class="subheading cv-header--subheading">
              <slot name="subtitle" />
            </div>
          </h1>
        </div>
        <div>
          <slot />
        </div>
      </header>
    );
  }
}