import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'cv-header-link',
  styles: `
  cv-header-link {
    display: block;
    color: var(--colour-neutral-dark, black);
    text-transform: uppercase;
    padding: 0 1rem 1rem 0;
  }
  cv-header-link .cv-header-link-container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  cv-header-link .cv-header-link-container a {
    color: var(--colour-neutral-dark, black);
    text-decoration: none;
  }
  cv-header-link .cv-header-link-container img {
    flex: 0 0 auto;
    height: 4rem;
    width: 4rem;
    margin-right: 1rem;
  }
  cv-header-link .cv-header-link-container .cv-header-link--text {
    flex: 1 1 auto;
    overflow-wrap: break-word;
  }
  `
})
export class CvHeaderLink {

  @Prop() image: string;
  @Prop() alt: string;
  @Prop() href: string;

  render() {
    return (
      <div class="cv-header-link-container font-size-normal">
        <img src={this.image} alt={this.alt} />
        { this.href
          ? <a class="cv-header-link--text" href={this.href} title={this.alt}><slot /></a>
          : <span  class="cv-header-link--text"><slot /></span>
        }
      </div>
    )
  }
}