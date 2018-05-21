import { Component } from '@stencil/core';

@Component({
  tag: 'cv-header-meta',
  styles: `
    cv-header-meta {
      display: flex;
      flex-flow: column nowrap; 
    }
  `
})
export class CvHeaderMeta {
  render() {
    return (
      <slot />
    );
  }
}