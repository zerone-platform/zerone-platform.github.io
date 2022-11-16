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

export const changeScrollBtn = (black, white) => {
  let top1 = document.documentElement.scrollTop;
  let top2 = document.body.scrollTop;
  
  if (top1 >= 7640 || top2 >= 7640) {
      black.style.display = 'block';
      white.style.display = 'none';
  } else if (top1 >= 7560 || top2 >= 7560) {
      black.style.display = 'none';
      white.style.display = 'block';
  } else if (top1 >= 7090 || top2 >= 7090) {
    black.style.display = "block";
    white.style.display = "none";
  } else if (top1 >= 6900 || top2 >= 6900) {
    black.style.display = "none";
    white.style.display = "block";
  } else if (top1 >= 5900 || top2 >= 5900) {
    black.style.display = "block";
    white.style.display = "none";
  } else if (top1 >= 4400 || top2 >= 4400) {
    black.style.display = "none";
    white.style.display = "block";
  } else if (top1 >= 100 || top2 >= 100) {
    black.style.display = "block";
    white.style.display = "none";
  } else {
    black.style.display = "none";
    white.style.display = "none";
  }
};

export const slideAsideNav = (about, aside) => {
  if (about.style.top !== "200px") {
    about.style.top = "200px";
    about.style.transitionDelay = "0s";
    aside.style.left = "0";
    aside.style.transitionDelay = ".5s";
  } else {
    aside.style.left = "-100%";
    aside.style.transitionDelay = "0s";
    about.style.top = "0";
    about.style.transitionDelay = ".5s";
  }
};
