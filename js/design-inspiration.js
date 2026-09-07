(() => {
  const picks = ["VN", "JP", "KE", "BR"];
  const countryNumbers = CountryHelpers.createCountryNumberMap(COUNTRY_MAP_INDEX);
  const continentClass = {
    Asia: "asia",
    Europe: "europe",
    Africa: "africa",
    "North America": "north-america",
    "South America": "south-america",
    Oceania: "oceania",
  };

  function card(country) {
    const c = CountryHelpers.escapeData(country);
    const languages = c.languages.map(language => language.he).join("، ");
    const flagUrl = `https://flagcdn.com/w320/${c.code.toLowerCase()}.png`;
    return `<article class="journal-card ${continentClass[c.continent]}" data-code="${c.code}">
      <svg class="route-line" viewBox="0 0 300 420" aria-hidden="true">
        <path d="M18 330 C80 290 42 210 118 184 S240 155 277 82" />
        <circle cx="18" cy="330" r="4"/><circle cx="277" cy="82" r="4"/>
      </svg>
      <header class="journal-head">
        <div class="country-stamp"><span>${String(countryNumbers.get(country.code)).padStart(3, "0")}</span><b>${c.code}</b></div>
        <div class="journal-title">
          <span class="continent-name">${c.continentHe}</span>
          <h2>${c.nameHe}</h2>
          <span lang="en" dir="ltr">${c.nameEn}</span>
        </div>
        <div class="flag-mount"><img src="${flagUrl}" alt="דגל ${c.nameHe}" /></div>
      </header>
      <dl class="quick-facts">
        <div><dt>בירה</dt><dd>${c.capital.he}</dd></div>
        <div><dt>אוכלוסייה</dt><dd>${CountryHelpers.formatPopulation(c.population.value)}</dd></div>
        <div><dt>שפה</dt><dd>${languages}</dd></div>
        <div><dt>מטבע</dt><dd>${c.currency.nameHe}</dd></div>
      </dl>
      <div class="journal-reading">
        <section class="place-story">
          <span class="section-label">מקום וסמל</span>
          <p><strong>${c.representative.titleHe}</strong> ${c.representative.descriptionHe}</p>
        </section>
        <section class="did-you-know">
          <span class="section-label">הידעת?</span>
          <p>${c.funFactHe}</p>
        </section>
      </div>
      <footer class="hello-stamp">
        <span>אומרים שלום</span>
        <strong dir="auto">${c.hello.text}</strong>
        <b>(${c.hello.pronunciationHe})</b>
      </footer>
    </article>`;
  }

  const countries = picks.map(code => COUNTRIES_DATA.find(country => country.code === code)).filter(Boolean);
  document.getElementById("concept-grid").innerHTML = countries.map(card).join("");
  window.DESIGN_INSPIRATION_READY = true;
})();
