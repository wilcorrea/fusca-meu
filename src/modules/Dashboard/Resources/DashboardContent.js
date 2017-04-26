
export default {
  name: 'dashboard-content',
  props: {
    classNames: {
      type: Array,
      default: () => ([])
    }
  },
  template:
    `<div class="app-content" style="position: relative" :class="classNames">
      <div class="toolbar sub-toolbar">
        <slot name="header"></slot>
      </div>
      <div class="app-container" style="border-radius: 1px">
        <slot name="content"></slot>
      </div>
    </div>`
}
