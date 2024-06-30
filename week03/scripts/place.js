document.addEventListener('DOMContentLoaded', function () {
    const currentYearSpan = document.getElementById('currentyear');
    const lastModifiedSpan = document.getElementById('lastModified');

    // 現在の年を設定
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    // 最終更新日時を設定
    const lastModified = document.lastModified;
    lastModifiedSpan.textContent = `Last Modified: ${lastModified}`;

    // Cherry blossom animation setup
    const section = document.querySelector('.cherry-blossom-container');
    const createPetal = () => {
        const petalEl = document.createElement('span');
        petalEl.className = 'petal';
        const minSize = 10;
        const maxSize = 15;
        const size = Math.random() * (maxSize + 1 - minSize) + minSize;
        petalEl.style.width = `${size}px`;
        petalEl.style.height = `${size}px`;
        petalEl.style.left = Math.random() * innerWidth + 'px';
        section.appendChild(petalEl);
        setTimeout(() => {
            petalEl.remove();
        }, 10000);
    };
    setInterval(createPetal, 300);

    // Weather details
    const temperature = 5; // Example temperature in °C
    const conditions = 'Sunny'; // Example condition
    const windSpeed = 10; // Example wind speed in km/h

    document.querySelector('.weather .temperature').textContent = `Temperature: ${temperature} °C`;
    document.querySelector('.weather .conditions').textContent = `Conditions: ${conditions}`;
    document.querySelector('.weather .wind').textContent = `Wind: ${windSpeed} km/h`;

    // Wind chill calculation
    const calculateWindChill = (temperature, windSpeed) => {
        return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    };

    const displayWindChill = () => {
        const windChillElement = document.querySelector('.weather .wind-chill');
        
        if (temperature <= 10 && windSpeed > 4.8) {
            const windChill = calculateWindChill(temperature, windSpeed).toFixed(2);
            windChillElement.textContent = `Wind Chill: ${windChill} °C`;
        } else {
            windChillElement.textContent = 'Wind Chill: N/A';
        }
    };

    displayWindChill();

    // Data section details
    const data = {
        officialName: "Nippon-koku (Japan)",
        capital: "Tokyo",
        population: "Approximately 126 million (as of 2021)",
        area: "Approximately 377,975 square kilometers",
        currency: "Yen (¥)",
        officialLanguage: "Japanese",
        internationalDialingCode: "+81",
        gdp: "Approximately $5 trillion USD (nominal, as of 2021)"
    };

    const dataContainer = document.querySelector('.data');

    // 元のh2要素を維持しながら、データの内容を追加
    dataContainer.innerHTML = `
        <div class="point1">
            <h2>Data</h2>
        </div>
        <p>・Official Name: ${data.officialName}</p>
        <p>・Capital: ${data.capital}</p>
        <p>・Population: ${data.population}</p>
        <p>・Area: ${data.area}</p>
        <p>・Currency: ${data.currency}</p>
        <p>・Official Language: ${data.officialLanguage}</p>
        <p>・International Dialing Code: ${data.internationalDialingCode}</p>
        <p>・GDP: ${data.gdp}</p>
    `;
});