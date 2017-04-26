import * as types from 'src/store/types'

/**
 * @param context
 * @param payload
 */
export const setAppName = (context, payload) => {
  context.commit(types.setAppName, payload)
}
/**
 * @param context
 * @param payload
 */
export const setAppTitle = (context, payload) => {
  context.commit(types.setAppTitle, payload)
}
/**
 * @param context
 * @param payload
 */
export const setAppMenuLeft = (context, payload) => {
  context.commit(types.setAppMenuLeft, payload)
}
/**
 * @param context
 * @param payload
 */
export const setAppMenuRight = (context, payload) => {
  context.commit(types.setAppMenuRight, payload)
}
