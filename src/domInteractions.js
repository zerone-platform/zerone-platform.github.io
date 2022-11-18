const _getDomElement = (attribute, value) => {
  return document.querySelector(`[${attribute}="${value}"]`);
};

export const mapListToDOMElements = (listOfValues, attribute) => {
  const _viewElements = {};

  for (const value of listOfValues) {
    _viewElements[value] = _getDomElement(attribute, value);
  }

  return _viewElements;
};

export const stopArrowAnimation = event => {
  const arrow = document.querySelector('.pricing__more');
  if (event.target.scrollLeft >= 1100) {
    arrow.style.animationPlayState = 'paused';
  } else {
    arrow.style.animationPlayState = 'running';
  };
};

export const setFocusAndTitle = () => {
  let heading = document.querySelector('h1');
  heading.focus();
  document.title = heading.innerText;
};

export const addAPIScript = () => {
  const scriptAPI = document.createElement('script');
  scriptAPI.type = 'text/javascript';
  scriptAPI.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
  document.body.appendChild(scriptAPI);
};

export const displayScrollBtn = event => {
  const scrollBtn = document.querySelector('#goTop');
  let top1 = document.documentElement.scrollTop;
  let top2 = document.body.scrollTop;

  if (top1 >= 100 || top2 >= 100) {
      scrollBtn.style.display = 'block';
  } else {
      scrollBtn.style.display = 'none';
  };
};

export const showAsideNav = event => {
  if (event.type === 'click' || event.key === 'Enter') {
      const about = document.querySelector('#about');
      const aside = document.querySelector('#asideNavigation');

      if (about.style.top !== "200px") {
        about.style.top = "200px";
        about.style.transitionDelay = "0s";
        aside.style.left = "0";
        aside.style.transitionDelay = ".3s";
      } else {
        aside.style.left = "-100%";
        aside.style.transitionDelay = "0s";
        about.style.top = "0";
        about.style.transitionDelay = ".3s";
      };

      if (event.target.localName === 'a') {
          document.querySelector('.aside-nav__links .selected').classList.remove('selected');
          event.target.classList.add('selected');
      };
  };
};

export const backToTop = event => {
  document.getElementById('navigation').scrollIntoView({behavior: 'smooth', block: 'start'});
};
 
export const scrollToTheEnd = event => {
  document.getElementById('lastOffer').scrollIntoView({behavior: 'smooth', block: 'start'});
};