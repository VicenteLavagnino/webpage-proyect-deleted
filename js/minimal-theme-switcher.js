/*!
 * Minimal theme switcher
 *
 * Pico.css - https://picocss.com
 * Copyright 2019-2023 - Licensed under MIT
 */

const themeSwitcher = {
  // Config
  _scheme: "dark",
  menuTarget: "details[role='list']",
  buttonsTarget: "a[data-theme-switcher]",
  buttonAttribute: "data-theme-switcher",
  rootAttribute: "data-theme",
  localStorageKey: "picoPreferredColorScheme",

  // Init
  init() {
    this.scheme = this.schemeFromLocalStorage;
    this.initSwitchers();
  },

  // Get color scheme from local storage
  get schemeFromLocalStorage() {
    if (typeof window.localStorage !== "undefined") {
      if (window.localStorage.getItem(this.localStorageKey) !== null) {
        return window.localStorage.getItem(this.localStorageKey);
      }
    }
    return this._scheme;
  },

  // Preferred color scheme
  get preferredColorScheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  },

  // Init switchers
  initSwitchers() {
    const buttons = document.querySelectorAll(this.buttonsTarget);
    buttons.forEach((button) => {
      button.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          // Set scheme
          this.scheme = button.getAttribute(this.buttonAttribute);
          // Close dropdown
          document.querySelector(this.menuTarget).removeAttribute("open");
        },
        false
      );
    });
  },

  // Set scheme
  set scheme(scheme) {
    if (scheme == "auto") {
      this.preferredColorScheme == "dark" ? (this._scheme = "dark") : (this._scheme = "light");
    } else if (scheme == "dark" || scheme == "light") {
      this._scheme = scheme;
    }
    this.applyScheme();
    this.schemeToLocalStorage();
  },

  // Get scheme
  get scheme() {
    return this._scheme;
  },

  // Apply scheme
  applyScheme() {
    const upperPhoto = document.querySelector(".upper-photo");
    const imgSrc = upperPhotos[`${this.scheme}Image`] || upperPhotos.lightImage;
    upperPhoto.setAttribute("src", imgSrc);
    upperPhoto.setAttribute("data-theme", this.scheme);

    // Cambiar el esquema de colores en la raíz del documento HTML
    document.querySelector("html").setAttribute(this.rootAttribute, this.scheme);
  }
};

// Init
themeSwitcher.init();

const upperPhotos = {
  // Config
  lightImageAttribute: "data-light",
  darkImageAttribute: "data-dark",
  lightImage: "img/light-photo.png",
  darkImage: "img/dark-photo.png",

  // Init
  init() {
    this.applyThemeImages();
  },

  // Apply images
  applyThemeImages() {
    const upperPhoto = document.querySelector(".upper-photo");
    const imgSrc = this[`${themeSwitcher.scheme}Image`] || this.lightImage;
    upperPhoto.setAttribute("src", imgSrc);
    upperPhoto.setAttribute("data-theme", themeSwitcher.scheme);
  }
};

// Init
upperPhotos.init();
