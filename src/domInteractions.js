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

export const setFocusAndTitle = () => {
  let heading = document.querySelector('h1');
  heading.focus();
  document.title = heading.innerText;
};

export const displayScrollBtn = () => {
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
      const width = window.innerWidth;

      const aboutSlideDown = pxDown => {
        about.style.top = pxDown;
        about.style.transitionDelay = "0s";
        aside.style.left = "0";
        aside.style.transitionDelay = ".3s";
      };

      const aboutSlideUp = () => {
        aside.style.left = "-100%";
        aside.style.transitionDelay = "0s";
        about.style.top = "0";
        about.style.transitionDelay = ".3s";
      };

      if (about.style.top === "0px") {
        if (width < 768) {
          aboutSlideDown("400px");
        } else if (width < 992) {
          aboutSlideDown("180px");
        } else if (width < 1200) {
          aboutSlideDown("130px");
        } else {
          aboutSlideDown("80px");
        };
      } else {
        aboutSlideUp();
      };
  };
};

export const backToTop = () => {
  document.getElementById('navigation').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};
 
export const scrollToTheEnd = () => {
  document.getElementById('lastOffer').scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center'
  });
};

export const goToSection = event => {
  document.getElementById(event.target.dataset.sectionName).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'center'
  });
};

export const changeProjectImage = event => {
  let project = event.target.dataset

  if (event.target.src.includes(project.primaryImage)) {
    event.target.src = project.altImage;
  } else{
    event.target.src = project.primaryImage;
  };
};
