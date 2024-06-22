document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('currentyear');
    const lastModifiedParagraph = document.getElementById('lastModified');

    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    const lastModifiedDate = document.lastModified;
    lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;
});

const backgroundFix = (bool) => {
    const scrollingElement = () => {
        const browser = window.navigator.userAgent.toLowerCase();
        if ("scrollingElement" in document) return document.scrollingElement;
        return document.documentElement;
    };

    const scrollY = bool
        ? scrollingElement().scrollTop
        : parseInt(document.body.style.top || "0");

    const fixedStyles = {
        height: "100vh",
        position: "fixed",
        top: `${scrollY * -1}px`,
        left: "0",
        width: "100vw"
    };

    Object.keys(fixedStyles).forEach((key) => {
        document.body.style[key] = bool ? fixedStyles[key] : "";
    });

    if (!bool) {
        window.scrollTo(0, scrollY * -1);
    }
};

// 変数定義
const CLASS = "-active";
let flg = false;
let accordionFlg = false;

let hamburger = document.getElementById("js-hamburger");
let focusTrap = document.getElementById("js-focus-trap");
let menu = document.querySelector(".js-nav-area");
let accordionTrigger = document.querySelectorAll(".js-sp-accordion-trigger");
let accordion = document.querySelectorAll(".js-sp-accordion");

// メニュー開閉制御
hamburger.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle(CLASS);
    menu.classList.toggle(CLASS);
    if (flg) {
        backgroundFix(false);
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.focus();
        flg = false;
    } else {
        backgroundFix(true);
        hamburger.setAttribute("aria-expanded", "true");
        flg = true;
    }
});

// escキー押下でメニューを閉じる
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        hamburger.classList.remove(CLASS);
        menu.classList.remove(CLASS);
        backgroundFix(false);
        hamburger.focus();
        hamburger.setAttribute("aria-expanded", "false");
        flg = false;
    }
});

// メニュー内アコーディオン制御
accordionTrigger.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle(CLASS);
        e.currentTarget.nextElementSibling.classList.toggle(CLASS);
        if (accordionFlg) {
            e.currentTarget.setAttribute("aria-expanded", "false");
            accordionFlg = false;
        } else {
            e.currentTarget.setAttribute("aria-expanded", "true");
            accordionFlg = true;
        }
    });
});

// フォーカストラップ制御
focusTrap.addEventListener("focus", (e) => {
    hamburger.focus();
});