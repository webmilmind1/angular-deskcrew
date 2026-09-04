export interface DeskcrewOptions {
  /** Your DeskCrew public widget key, e.g. "pub_xxxxxxxx". Required. */
  widgetKey: string
  /** Board slug (lowercase letters, numbers and dashes). Optional. */
  board?: string
  /** Accent colour as a 6-digit hex value, e.g. "#4f46e5". Optional. */
  color?: string
  /** Which side the launcher sits on. Optional (defaults to the widget's own default). */
  position?: 'left' | 'right'
  /** Greeting shown on the launcher. Optional. */
  greeting?: string
}

import type { Provider } from '@angular/core'

/** Injects the widget <script> into the document once. Returns false when the key is invalid or without a DOM. */
export function injectDeskcrew(options: DeskcrewOptions): boolean
/** APP_INITIALIZER provider that injects the widget at bootstrap. */
export function provideDeskcrew(options: DeskcrewOptions): Provider
export default provideDeskcrew
export function buildTag(options: DeskcrewOptions): { tag: string | null; warnings: string[] }
