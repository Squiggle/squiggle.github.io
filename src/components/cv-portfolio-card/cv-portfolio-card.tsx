import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'cv-portfolio-card',
  styles: `
  `
})
export class CvPortfolioCard {

  @Prop() img: string;

  render() {
    return (
      <div>
      </div>
    )
  }
}