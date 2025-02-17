document.addEventListener("DOMContentLoaded", () => {
  const settingsButton = document.getElementById("open-settings");
  const closeButton = document.getElementById("close-settings");
  const contrastButton = document.getElementById("toggle-contrast");
  const increaseFontButton = document.getElementById("increase-font");
  const decreaseFontButton = document.getElementById("decrease-font");
  const panel = document.getElementById("accessibility-panel");
  const body = document.body;

  let fontSize = 16;
  const open = () => {
    panel.classList.add("active");
    closeButton.focus();
  };
  const close = () => {
    panel.classList.remove("active");
  };
  const highContrast = () => {
    if (panel.classList.contains("active")) {
      const body = document.querySelector("body");
      if (body.classList.contains("high-contrast")) {
        body.classList.remove("high-contrast");
      } else {
        body.classList.add("high-contrast");
      }
    }
  };
  const increaseFont = () => {
    if (panel.classList.contains("active")) {
      const actualFontSize = window.getComputedStyle(document.querySelector("body")).fontSize;
      let actualFontSizeValue = parseInt(actualFontSize.slice(0, actualFontSize.length - 2));
      body.style.fontSize = actualFontSizeValue + 2 + "px";
      document.querySelectorAll("button").forEach((button) => {
        button.style.fontSize = actualFontSizeValue + 2 + "px";
      });
    }
  };
  const decreaseFont = () => {
    if (panel.classList.contains("active")) {
      const actualFontSize = window.getComputedStyle(document.querySelector("body")).fontSize;
      let actualFontSizeValue = parseInt(actualFontSize.slice(0, actualFontSize.length - 2));
      body.style.fontSize = Math.max(14, actualFontSizeValue - 2) + "px";
      document.querySelectorAll("button").forEach((button) => {
        button.style.fontSize = actualFontSizeValue + 2 + "px";
      });
    }
  };

  document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    switch (keyName) {
      case "a":
        open();
        break;
      case "Escape":
        close();
        break;
      case "m":
        highContrast();
        break;
      case "+":
        increaseFont();
        break;
      case "-":
        decreaseFont();
        break;
    }
  });
  settingsButton.addEventListener("click", open, false);
  closeButton.addEventListener("click", close, false);
  contrastButton.addEventListener("click", highContrast, false);
  increaseFontButton.addEventListener("click", increaseFont, false);
  decreaseFontButton.addEventListener("click", decreaseFont, false);
});
