import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'fabric-toggle',
  styleUrl: './Toggle.css',
  shadow: true
})
export class MyComponent {
  @Prop({ mutable: true }) checked: boolean = false;
  @Prop() disabled?: boolean = false;

  private onClick () {
    if (this.disabled) return
    this.checked = !this.checked
  }

  render() {
    return (
      <div class={this.checked ? 'root is-checked' : 'root'}>
        <label htmlFor="Toggle29" class="ms-Label ms-Toggle-label label" id="Toggle29-label">Enabled and checked</label>
        <div class="container">
          <button class="ms-Toggle-background pill" id="Toggle29" type="button" role="switch" aria-checked="true" data-is-focusable="true" aria-labelledby="Toggle29-label"
                  onClick={() => this.onClick()}>
            <div class="ms-Toggle-thumb thumb"></div>
          </button>
          <label htmlFor="Toggle29" class="ms-Label ms-Toggle-stateText text" id="Toggle29-stateText">On</label>
        </div>
      </div>
    )
  }
}
