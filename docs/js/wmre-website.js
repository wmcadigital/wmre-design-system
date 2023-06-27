import forEachPolyfill from './assets/vendor/js/polyfills/ie11-forEach';
import colorPalettes from './pages/styles/colour-palettes/_color-palettes';
import highlightJS from './_partials/component-example/_component-example';
import cookies from '../wmre/patterns/cookies/_example';
import headerJs from '../wmre/patterns/header/_example';
import searchFilterJs from '../wmre/patterns/search/search-filter/_example';
import footerJs from '../wmre/patterns/footer/_example';
import accordionsJS from '../wmre/components/accordion/_example';

const icons = () => {
  // Ajax SVG in, SVGS are referenced in app (Icon component)
  const ajax = new XMLHttpRequest();
  ajax.open('GET', 'http://localhost:3000/img/wmre-sprite.min.svg', true);
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
  (forEachPolyfill(),
  icons(),
  colorPalettes(),
  cookies(),
  headerJs(),
  searchFilterJs(),
  footerJs(),
  accordionsJS(),
  highlightJS)
);
