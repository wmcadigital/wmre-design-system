import * as polyfills from './assets/vendor/js/polyfills/polyfills';
import colorPalettes from './pages/styles/colour-palettes/_color-palettes';
import cookies from '../wmre/patterns/cookies/_example';
import headerJs from '../wmre/patterns/header/_example';
import searchFilterJs from '../wmre/patterns/search/search-filter/_example';

import {
  componentExample,
  componentExampleScript,
  componentExampleIframe
} from './_partials/component-example';

const icons = () => {
  // Ajax SVG in, SVGS are referenced in app (Icon component)
  const ajax = new XMLHttpRequest();
  ajax.open('GET', '/img/wmre-icons.min.svg', true);
  ajax.send();
  ajax.onload = () => {
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerHTML = ajax.responseText;
    document.body.insertBefore(div, document.body.childNodes[0]);
  };
};

window.addEventListener(
  'DOMContentLoaded',
  (polyfills,
  icons(),
  colorPalettes(),
  headerJs(),
  cookies(),
  searchFilterJs(),
  componentExampleIframe(),
  componentExampleScript(),
  componentExample)
);
