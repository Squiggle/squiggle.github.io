import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'cv-section',
  styles: `
    cv-section {
      padding: 2rem 4rem;
    }
    cv-section .cv-section--heading {
      color: var(--colour-neutral-darker, black);
    }
    cv-section .cv-section--content {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
    }
    cv-section .cv-section--content img {
      flex: 0 0 auto;
      margin-right: 2rem;
      width: 320px;
      height: 320px;
    }
  `
})
export class CvSection {

  @Prop() img: string;

  render() {
    return (
      <section>
        <div class="cv-section--heading">
          <slot name="heading" />
        </div>
        <div class="cv-section--content">
          { this.img && <img src={this.img} /> }
          <div>
            <slot />
          </div>
        </div>
      </section>
    )
  }
}