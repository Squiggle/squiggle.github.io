import { Component } from '@stencil/core';

@Component({
  tag: 'cv-tag-cloud',
  
})
export class CvTagCloud {
  render() {
    return (
      <div>
        <slot />
      </div>
    )
  }
}