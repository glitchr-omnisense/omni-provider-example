/**
 * Example Tiles's driver for omnimap's script (assets/omnimap.js of omnisense/omnimap):
 * draws the description ExampleProvider::describe() gave.
 *
 *   import { register } from 'omnimap';
 *   import * as driver from 'omnimap/example/assets/example.js';
 *   register('example', driver);
 */
export async function draw(element, description, options = {}) {
  // Replace with the map library's own drawing; the description is plain data.
  element.dataset.omnimapProvider = description.provider;
  element.setAttribute('role', 'img');
  element.setAttribute('aria-label', options.label ?? 'Map');
  return { element, description };
}
