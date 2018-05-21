import { Component } from '@stencil/core';

@Component({
  tag: 'cv-tag-cloud-header',
  styles: `
    cv-tag-cloud-header {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      margin: 2rem;
      border-bottom: 1px solid black;
    }
    cv-tag-cloud-header::before {
      display: inline-block;
      content: "";
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      width: 2rem;
      height: 2rem;
      margin-left: -2rem;
      transform: translate(-1px, 1px) rotate(45deg);
      transform-origin: bottom right;
    }
    cv-tag-cloud-header::after {
      display: inline-block;
      content: "";
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      width: 2rem;
      height: 2rem;
      margin-right: -2rem;
      transform: translate(1px, 1px) rotate(-45deg);
      transform-origin: bottom left;
    }
    cv-tag-cloud-header .cv-tag-cloud-header-container {
      flex-grow: 1;
      display: flex;
      flex-flow: row;
      justify-content: space-between;
    }
  `
})
export class CvTagCloudHeader {
  render() {
    return (
      <div class="cv-tag-cloud-header-container">
        <slot name="start" />
        <slot name="end" />
      </div>
    )
  }
}