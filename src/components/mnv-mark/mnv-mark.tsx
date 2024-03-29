import { Component, h } from '@stencil/core'

@Component({
  tag: 'mnv-mark',
  styleUrl: 'mnv-mark.css',
  shadow: true,
})
export class MnvMark {
  render() {
    return (
      <mark>
        <slot />
      </mark>
    )
  }
}
