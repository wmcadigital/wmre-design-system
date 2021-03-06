function showCode() {
  // for each button we create below
  document.querySelectorAll('.wmre-js-show-code').forEach(ele => {
    function showMore(e) {
      const btn = e.target || e.srcElement; // Set btn to the element from which the click came

      // if the btn clicked contains this class, then it must be active, so reset it back to the norm
      if (btn.classList.contains('wmre-js-show-code--active')) {
        btn.previousSibling.querySelector('.hljs').style.maxHeight = '200px';
        btn.classList.remove('wmre-js-show-code--active');
        btn.innerText = 'Show more code';
      } else {
        // Else expand the code preview to 100%
        btn.previousSibling.querySelector('.hljs').style.maxHeight = '100%';
        btn.classList.add('wmre-js-show-code--active');
        btn.innerText = 'Show less code';
      }
    }

    // when clicked
    ele.addEventListener('click', e => {
      e.preventDefault();
      showMore(e);
    });

    // When keyboard "enter" pressed
    ele.addEventListener('keydown', e => {
      if (e.keyCode === 13) {
        e.preventDefault();
        showMore(e);
      }
    });
  });
}

export default () => {
  const { hljs } = window; // declare higlightJS as global var
  document.querySelectorAll('pre code').forEach(element => {
    // Run highlightJS for each pre code element found */
    hljs.highlightBlock(element);
    // If the code preview is 192 height (without padding) then we need to display the 'show more code' button
    if (element.clientHeight >= 192 && !element.classList.contains('wmre-show-more-ignore')) {
      const htmlString = '<a href="#" class="wmre-link wmre-js-show-code">Show more code</a>';

      element.parentElement.insertAdjacentHTML('afterend', htmlString);
    }
  });

  showCode(); // run show code function above when hljs has init
};
