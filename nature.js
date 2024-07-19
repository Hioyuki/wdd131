document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const closeBtn = document.getElementById('close');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu a');

    hamburger.addEventListener('click', () => {
        navMenu.classList.add('show');
        hamburger.style.display = 'none';
        closeBtn.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('show');
        hamburger.style.display = 'block';
        closeBtn.style.display = 'none';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                event.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
                navMenu.classList.remove('show');
                hamburger.style.display = 'block';
                closeBtn.style.display = 'none';
            }
        });
    });

    const currentYearSpan = document.getElementById('currentyear');
    const lastModifiedParagraph = document.getElementById('lastModified');

    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    const lastModifiedDate = document.lastModified;
    lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;

    var unit = 100,
        canvasList,
        info = {},
        colorList;

    function init() {
        info.seconds = 0;
        info.t = 0;
        canvasList = [];
        colorList = [];

        canvasList.push(document.getElementById("waveCanvas"));
        colorList.push(['#0ff', '#ff0', '#f00', '#00f', '#f0f']);

        for (var canvasIndex in canvasList) {
            var canvas = canvasList[canvasIndex];
            canvas.width = document.documentElement.clientWidth;
            canvas.height = 200;
            canvas.contextCache = canvas.getContext("2d");
        }

        update();
    }

    function update() {
        for (var canvasIndex in canvasList) {
            var canvas = canvasList[canvasIndex];
            draw(canvas, colorList[canvasIndex]);
        }

        info.seconds = info.seconds + .014;
        info.t = info.seconds * Math.PI;

        setTimeout(update, 35);
    }

    function draw(canvas, color) {
        var context = canvas.contextCache;
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawWave(canvas, color[0], 0.8, 3, 0);
        drawWave(canvas, color[1], 0.5, 4, 0);
        drawWave(canvas, color[2], 0.3, 1.6, 0);
        drawWave(canvas, color[3], 0.2, 3, 100);
        drawWave(canvas, color[4], 0.5, 1.6, 250);
    }

    function drawWave(canvas, color, alpha, zoom, delay) {
        var context = canvas.contextCache;
        context.strokeStyle = color;
        context.lineWidth = 1;
        context.globalAlpha = alpha;
        context.beginPath();
        drawSine(canvas, info.t / 0.5, zoom, delay);
        context.stroke();
    }

    function drawSine(canvas, t, zoom, delay) {
        var xAxis = Math.floor(canvas.height / 2);
        var yAxis = 0;
        var context = canvas.contextCache;
        var x = t;
        var y = Math.sin(x) / zoom;
        context.moveTo(yAxis, unit * y + xAxis);

        for (i = yAxis; i <= canvas.width + 10; i += 10) {
            x = t + (-yAxis + i) / unit / zoom;
            y = Math.sin(x - delay) / 3;
            context.lineTo(i, unit * y + xAxis);
        }
    }

    init();


    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        saveFormData(name, email, message);
        alert('Form submitted successfully!');
    });


    function saveFormData(name, email, message) {
        const formData = { name, email, message };
        localStorage.setItem('formData', JSON.stringify(formData));
    }


    function checkFormData() {
        const storedData = JSON.parse(localStorage.getItem('formData'));
        if (storedData) {
            console.log(`Name: ${storedData.name}, Email: ${storedData.email}, Message: ${storedData.message}`);
        } else {
            console.log('No form data found');
        }
    }
    checkFormData();


    const soilTypes = [
        { name: 'Loam Soil', description: 'Loamy soil is composed of sand, silt, and clay in relatively even concentration.' },
        { name: 'Silt Soil', description: 'Silty soil is smooth to the touch and retains water better than sandy soil.' },
        { name: 'Organic Soil', description: 'Organic soil is rich in organic matter and is great for growing plants.' },
        { name: 'Sandy Soil', description: 'Sandy soil is light, warm, and dry with large particles.' },
        { name: 'Clay Soil', description: 'Clay soil is heavy, retains moisture, and is rich in nutrients.' },
        { name: 'Calcareous Soil', description: 'Calcareous soil contains a high amount of calcium carbonate.' }
    ];

    soilTypes.forEach(soil => {
        console.log(`${soil.name}: ${soil.description}`);
    });
});