document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('currentyear');
    const lastModifiedParagraph = document.getElementById('lastModified');

    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    const lastModifiedDate = document.lastModified;
    lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Sapporo Japan",
            location: "Sapporo, Japan",
            dedicated: "2016, August, 21",
            area: 48450,
            imageUrl: "https://churchofjesuschrist.org/imgs/c917995588e9c8d3ce881ebd32405150f9109fa7/full/320%2C/0/default"
        },
        {
            templeName: "Paris France",
            location: "Le Chesnay, France",
            dedicated: "2017, May, 21",
            area: 44200,
            imageUrl:"https://www.churchofjesuschrist.org/imgs/5ec026c4efeaaa19a98e40f0f1b4c6069ae63517/full/320%2C/0/default"
        }
        ];

    const templeContainer = document.getElementById('temple-cards');

    function displayTemples(temples) {
        templeContainer.innerHTML = '';
        temples.forEach(temple => {
            const templeCard = document.createElement('div');
            templeCard.classList.add('temple-card');

            templeCard.innerHTML = `
                <figure>
                    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                    <figcaption>
                        <h3>${temple.templeName}</h3>
                        <p><strong>Location:</strong> ${temple.location}</p>
                        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                        <p><strong>Area:</strong> ${temple.area} sq ft</p>
                    </figcaption>
                </figure>
            `;

            templeContainer.appendChild(templeCard);
        });
    }


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
    displayTemples(temples);

    // Add event listeners for filtering
    const menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filterType = e.target.textContent;

            let filteredTemples = [];
            if (filterType === 'Old') {
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            } else if (filterType === 'New') {
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            } else if (filterType === 'Large') {
                filteredTemples = temples.filter(temple => temple.area > 90000);
            } else if (filterType === 'Small') {
                filteredTemples = temples.filter(temple => temple.area < 10000);
            } else {
                filteredTemples = temples;
            }

            displayTemples(filteredTemples);
        });
    });


});

