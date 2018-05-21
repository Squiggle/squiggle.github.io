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
      background-color: var(--colour-neutral-lightest, White);
      padding: 4rem;
    }
    cv-header header {
      display: flex;
      flex-flow: row nowrap;
    }
    cv-header header .cv-header--title {
      flex: 1 1 auto;
      color: var(--colour-neutral-darker, black);
    }
    cv-header header .cv-header--title .cv-header--subheading {
      font-size: var(--font-size-large, 40px);
      color: var(--colour-neutral-dark, black);
    }
    cv-header header .cv-header--meta {
      flex: 0 1 auto;
      font-size: var(--font-size-normal, 1rem);
      margin-left: 4rem;
    }
  `
})
export class CvHeaderSection {
  render() {
    return (
      <header>
        <div class="cv-header--title">
          <h1>
            <slot name="title" />
          </h1>
          <div class="cv-header--subheading">
            <slot name="subtitle" />
          </div>
        </div>
        <div class="cv-header--meta">
          <slot />
        </div>
      </header>
    );
  }
}