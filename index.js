import { APP_INITIALIZER } from '@angular/core'
import { buildAttrs } from './build-tag.js'

/** Add the widget <script> to the document once. Safe to call more than once. No-op without a DOM. */
export function injectDeskcrew(options) {
  if (typeof document === 'undefined') return false
  const { attrs, warnings } = buildAttrs(options)
  for (const message of warnings) console.warn(message)
  if (!attrs) return false
  if (document.querySelector('script[src="https://deskcrew.io/desk.js"]')) return true
  const s = document.createElement('script')
  for (const [name, value] of attrs) {
    if (name === 'src') s.src = value
    else s.setAttribute(name, value)
  }
  s.defer = true
  document.head.appendChild(s)
  return true
}

/**
 * providers: [provideDeskcrew({ widgetKey: 'pub_...' })] in app.config.ts
 * (standalone) or in your root NgModule. Injects the widget when the app
 * bootstraps in the browser; with Angular SSR the server does nothing.
 *
 * @param {import('./index.js').DeskcrewOptions} options
 */
export function provideDeskcrew(options) {
  return {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: () => () => {
      injectDeskcrew(options)
    },
  }
}

export default provideDeskcrew
export { buildTag } from './build-tag.js'
