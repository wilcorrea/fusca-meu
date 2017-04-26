import * as types from 'src/store/types'

export default {
  /**
   * @param state
   * @param name
   */
  [types.setAppName] (state, name) {
    state.app.name = name
  },
  /**
   * @param state
   * @param title
   */
  [types.setAppTitle] (state, title) {
    state.app.title = title
  },
  /**
   * @param state
   * @param menuLeft
   */
  [types.setAppMenuLeft] (state, menuLeft) {
    state.app.menuLeft = menuLeft
  },
  /**
   * @param state
   * @param menuRight
   */
  [types.setAppMenuRight] (state, menuRight) {
    state.app.menuRight = menuRight
  }
}
