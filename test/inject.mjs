import test from 'node:test'
import assert from 'node:assert/strict'
import { buildTag } from '../build-tag.js'

// index.js imports @angular/core at module load; the provider is a thin wrapper around
// injectDeskcrew, whose behaviour is covered by the shared core tests. This test pins
// the tag the README tells people to paste when they skip the provider.
test('buildTag gives the paste-in tag for src/index.html', () => {
  const { tag } = buildTag({ widgetKey: 'pub_abc12345', board: 'acme' })
  assert.match(
    tag,
    /^<script src="https:\/\/deskcrew\.io\/desk\.js" data-key="pub_abc12345" data-board="acme" defer><\/script>$/,
  )
})
