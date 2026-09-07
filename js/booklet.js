(() => {
  const { formatPopulation, escapeData, createCountryNumberMap, sortCountriesByNumber } = CountryHelpers;
  const COUNTRY_NUMBERS = createCountryNumberMap(COUNTRY_MAP_INDEX);

  const CONTINENTS = {
    Asia: { cls: "cont-Asia", emoji: "🌏" },
    Europe: { cls: "cont-Europe", emoji: "🌍" },
    Africa: { cls: "cont-Africa", emoji: "🌍" },
    "North America": { cls: "cont-NorthAmerica", emoji: "🌎" },
    "South America": { cls: "cont-SouthAmerica", emoji: "🌎" },
    Oceania: { cls: "cont-Oceania", emoji: "🌏" },
  };

  const ORDER = {
    Asia: 0,
    Europe: 1,
    Africa: 2,
    "North America": 3,
    "South America": 4,
    Oceania: 5,
  };

  const CONTINENT_OPENERS = {
    Asia: { slug: "asia", cls: "cont-Asia", emoji: "🌏", titleHe: "אַסְיָה", strapHe: "עָרִים עֲנָקִיּוֹת, הָרִים גְּבוֹהִים וּמִסּוֹרוֹת עַתִּיקוֹת" },
    Europe: { slug: "europe", cls: "cont-Europe", emoji: "🌍", titleHe: "אֵירוֹפָּה", strapHe: "טִירוֹת, עָרִים עַתִּיקוֹת וְהַמּוֹן שָׂפוֹת קְרוֹבוֹת" },
    Africa: { slug: "africa", cls: "cont-Africa", emoji: "🌍", titleHe: "אַפְרִיקָה", strapHe: "מִדְבָּרִיּוֹת, יַעֲרוֹת, נְהָרוֹת וְעוֹלָם חַי מֻפְלָא" },
    "North America": { slug: "north-america", cls: "cont-NorthAmerica", emoji: "🌎", titleHe: "אָמֵרִיקָה הַצְּפוֹנִית", strapHe: "מֵהַקֶּרַח בַּצָּפוֹן וְעַד לָאִיִּים הַחַמִּים" },
    "South America": { slug: "south-america", cls: "cont-SouthAmerica", emoji: "🌎", titleHe: "אָמֵרִיקָה הַדְּרוֹמִית", strapHe: "הָרִים, יַעֲרוֹת גֶּשֶׁם וְתַרְבּוּיוֹת צִבְעוֹנִיּוֹת" },
    Oceania: { slug: "oceania", cls: "cont-Oceania", emoji: "🌏", titleHe: "אוֹקְיָנְיָה", strapHe: "אִיִּים רְחוֹקִים בֵּין מֶרְחֲבֵי הָאוֹקְיָנוֹס" },
  };

  function chunks(items, size) {
    return Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
      items.slice(index * size, index * size + size),
    );
  }

  function cardTemplate(country) {
    const c = escapeData(country);
    const continent = CONTINENTS[c.continent] || { cls: "cont-Europe", emoji: "🌐" };
    const flagUrl = `https://flagcdn.com/w320/${c.code.toLowerCase()}.png`;
    const languages = c.languages.map((language) => language.he).join("، ");
    const capitalNote = c.capital.noteHe ? `<span class="info-sub">${c.capital.noteHe}</span>` : "";
    const currencyNote = c.currency.noteHe ? `<span class="info-sub">${c.currency.noteHe}</span>` : "";
    const mapNumber = COUNTRY_NUMBERS.get(country.code);

    return `<article class="country-card ${continent.cls}" data-code="${c.code}" aria-label="${c.nameHe}">
      <svg class="route-line" viewBox="0 0 300 420" aria-hidden="true">
        <path d="M18 330 C80 290 42 210 118 184 S240 155 277 82" />
        <circle cx="18" cy="330" r="4"/><circle cx="277" cy="82" r="4"/>
      </svg>
      <header class="card-header">
        <div class="card-names">
          <span class="continent-badge">${c.continentHe}</span>
          <div class="name-he">${c.nameHe}</div>
          <div class="name-en" lang="en" dir="ltr">${c.nameEn}</div>
        </div>
        <span class="country-map-number" data-country-code="${c.code}" aria-label="מספר ${mapNumber} במפה">${mapNumber}</span>
        <span class="flag-mount"><img class="card-flag" src="${flagUrl}" alt="דגל ${c.nameHe}" loading="eager" /></span>
      </header>
      <div class="card-info-grid">
        <div class="info-cell"><span class="info-label">בִּירָה</span><span class="info-value">${c.capital.he}${capitalNote}</span></div>
        <div class="info-cell"><span class="info-label">שָׂפָה</span><span class="info-value">${languages}</span></div>
        <div class="info-cell"><span class="info-label">מַטְבֵּעַ</span><span class="info-value">${c.currency.nameHe} (${c.currency.symbol})${currencyNote}</span></div>
        <div class="info-cell"><span class="info-label">אוּכְלוֹסִיָּה</span><span class="info-value">${formatPopulation(c.population.value)}</span></div>
      </div>
      <div class="card-story">
        <section class="representative"><span class="story-label">מָקוֹם וְסֵמֶל</span><p><strong>${c.representative.titleHe}</strong> ${c.representative.descriptionHe}</p></section>
        <section class="fun-fact"><span class="story-label">הֲיָדַעְתָּ?</span><p>${c.funFactHe}</p></section>
      </div>
      <div class="hello">
        <span class="hello-label">שָׁלוֹם:</span>
        <span class="hello-expression"><bdi class="hello-native" dir="auto">${c.hello.text}</bdi><span class="hello-pronunciation">(${c.hello.pronunciationHe})</span></span>
        <span class="hello-language">${c.hello.languageHe ? `בְּ${c.hello.languageHe}` : ""}</span>
      </div>
    </article>`;
  }

  function pageTemplate(cards, pageNumber) {
    return `<section class="booklet-panel content-panel" data-logical-page="${pageNumber}" aria-label="עמוד ${pageNumber}">
      ${cards.map(cardTemplate).join("")}
      <div class="panel-number">${pageNumber}</div>
    </section>`;
  }

  function continentPageTemplate(continentKey, countryCount, pageNumber) {
    const meta = CONTINENT_OPENERS[continentKey];
    return `<section class="booklet-panel continent-opener ${meta.cls}" data-logical-page="${pageNumber}" aria-label="פתיח ליבשת ${meta.titleHe}">
      <div class="continent-opener-copy">
        <span class="continent-kicker">${meta.emoji} יַבֶּשֶׁת</span>
        <h2>${meta.titleHe}</h2>
        <p>${meta.strapHe}</p>
        <span class="continent-count">${countryCount} מְדִינוֹת בַּחוֹבֶרֶת</span>
      </div>
      <figure class="continent-photo-frame">
        <img src="assets/booklet-images/${meta.slug}.png" alt="איור מסע וינטג׳י של ${meta.titleHe}" />
      </figure>
      <div class="panel-number">${pageNumber}</div>
    </section>`;
  }

  function sheetTemplate(leftPanel, rightPanel, sideNumber, physicalSheet, face, leftPage, rightPage) {
    return `<section class="booklet-sheet" data-print-side="${sideNumber}" data-physical-sheet="${physicalSheet}" data-face="${face}" data-left-page="${leftPage}" data-right-page="${rightPage}" aria-label="צד הדפסה ${sideNumber}">
      ${leftPanel}${rightPanel}
    </section>`;
  }

  function buildBooklet() {
    const countries = sortCountriesByNumber(COUNTRIES_DATA, COUNTRY_MAP_INDEX);
    const logicalPages = [
      `<section class="booklet-panel cover-page" data-logical-page="1" aria-label="כריכה קדמית">
        <img class="cover-art" src="assets/booklet-images/cover-front.png" alt="גלובוס, מצפן ונופי העולם בסגנון כרזת מסע וינטג׳ית" />
        <div class="cover-copy">
          <h1>מְדִינוֹת הָעוֹלָם<span>חוֹבֶרֶת גִּלּוּי לִילָדִים</span></h1>
          <p>150 מְדִינוֹת, עוֹלָם אֶחָד גָּדוֹל</p>
        </div>
      </section>`,
      `<section class="booklet-panel front-matter journey-page" data-logical-page="2" aria-label="איך משתמשים בחוברת">
        <div class="beseata-dishmaya">בס״ד</div>
        <span class="page-kicker">מַדְרִיךְ לַמְּטַיֵּל הַצָּעִיר</span>
        <h2>יוֹצְאִים לַדֶּרֶךְ</h2>
        <p class="page-lead">בְּכָל עַמּוּד מְחַכּוֹת אַרְבַּע מְדִינוֹת. אֶפְשָׁר לִקְרֹא לְפִי הַסֵּדֶר, לִבְחֹר יַבֶּשֶׁת אוֹ לִפְתֹּחַ בְּעַמּוּד אַקְרָאִי.</p>
        <div class="guide-route">
          <article class="guide-step"><span>1</span><h3>מְחַפְּשִׂים בַּמַּפָּה</h3><p>הַמִּסְפָּר שֶׁעַל הַכַּרְטִיס זֵהֶה לַמִּסְפָּר שֶׁבַּמַּפָּה.</p></article>
          <article class="guide-step"><span>2</span><h3>מַכִּירִים</h3><p>קוֹרְאִים אֶת הַבִּירָה, הַשָּׂפָה, הַמַּטְבֵּעַ וְהָאֻכְלוֹסִיָּה.</p></article>
          <article class="guide-step"><span>3</span><h3>מְגַלִּים</h3><p>מְחַפְּשִׂים אֶת הַמָּקוֹם הַמְּיֻחָד וְאֶת הָעֻבְדָּה הַמַּפְתִּיעָה.</p></article>
          <article class="guide-step"><span>4</span><h3>אוֹמְרִים שָׁלוֹם</h3><p>קוֹרְאִים בְּקוֹל אֶת הַבִּטּוּי וּמְנַסִּים אֶת הַהֲגִיָּה.</p></article>
        </div>
        <div class="map-key-demo"><span>15<small>VN</small></span><p><strong>הַמִּסְפָּר הוּא הַמַּפְתֵּחַ</strong> אִתּוֹ אֶפְשָׁר לַחְזֹר מֵהַמַּפָּה אֶל הַמְּדִינָה בַּחוֹבֶרֶת.</p></div>
        <blockquote class="travel-quote">„הָעוֹלָם מָלֵא בְּכָל כָּךְ הַרְבֵּה דְּבָרִים, שֶׁכֻּלָּנוּ יְכוֹלִים לִשְׂמֹחַ כִּמְלָכִים.”<cite>רוֹבֶּרְט לוּאִיס סְטִיבֶנְסוֹן</cite></blockquote>
        <div class="panel-number standalone-number">2</div>
      </section>`,
    ];

    let nextPage = 3;
    Object.keys(ORDER).forEach((continentKey) => {
      const continentCountries = countries.filter((country) => country.continent === continentKey);
      logicalPages.push(continentPageTemplate(continentKey, continentCountries.length, nextPage));
      nextPage += 1;
      chunks(continentCountries, 4).forEach((cards) => {
        logicalPages.push(pageTemplate(cards, nextPage));
        nextPage += 1;
      });
    });

    logicalPages.push(
      `<section class="booklet-panel closing-page notes-page journey-page" data-logical-page="${nextPage}" aria-label="המדינות שאני רוצה לזכור">
        <span class="page-kicker">יוֹמַן הַמַּסָּע שֶׁלִּי</span>
        <h2>מְדִינוֹת שֶׁאֲנִי רוֹצֶה לִזְכֹּר</h2>
        <p class="page-lead">בַּחֲרוּ שֵׁשׁ מְדִינוֹת שֶׁסִּקְרְנוּ אֶתְכֶם בִּמְיֻחָד וְכִתְבוּ מַה תִּרְצוּ לִזְכֹּר מֵהֶן.</p>
        <div class="memory-grid">${Array.from({ length: 6 }, (_, index) => `<article class="memory-card"><b>${index + 1}</b><span>מְדִינָה וּמִסְפָּר</span><i></i><span>מַה אֲנִי זוֹכֵר?</span><i></i><i></i></article>`).join("")}</div>
        <blockquote class="travel-quote compact">„אֲנִי חֵלֶק מִכָּל מַה שֶּׁפָּגַשְׁתִּי.”<cite>אַלְפְרֶד טֶנִיסוֹן</cite></blockquote>
        <div class="panel-number standalone-number">${nextPage}</div>
      </section>`,
      `<section class="booklet-panel closing-page quiz-page journey-page" data-logical-page="${nextPage + 1}" aria-label="חידון משפחתי">
        <span class="page-kicker">מְשַׂחֲקִים וְזוֹכְרִים</span>
        <h2>חִידוֹן מִשְׁפַּחְתִּי</h2>
        <p class="page-lead">בַּחֲרוּ כַּרְטִיס, כַּסּוּ חֵלֶק מֵהַמֵּידָע וְנַסּוּ אֶת שֵׁשׁ הַמְּשִׂימוֹת.</p>
        <div class="quiz-grid">
          <article><b>01</b><h3>מְצָא אוֹתִי</h3><p>מִי מוֹצֵא רִאשׁוֹן אֶת מִסְפַּר הַמְּדִינָה בַּמַּפָּה?</p></article>
          <article><b>02</b><h3>עִיר הַבִּירָה</h3><p>כַּסּוּ אֶת שֵׁם הַבִּירָה וְנַסּוּ לִזְכֹּר אוֹתוֹ.</p></article>
          <article><b>03</b><h3>מִי אֲנִי?</h3><p>תְּנוּ שְׁנֵי רְמָזִים מֵהַכַּרְטִיס וְנַחֲשׁוּ אֶת הַמְּדִינָה.</p></article>
          <article><b>04</b><h3>שָׁלוֹם עוֹלָם</h3><p>מִי מַצְלִיחַ לוֹמַר אֶת הַבְּרָכָה בְּקוֹל וּבְבִטָּחוֹן?</p></article>
          <article><b>05</b><h3>דֶּגֶל בְּזִכָּרוֹן</h3><p>הַבִּיטוּ בַּדֶּגֶל, כַּסּוּ אוֹתוֹ וְתָאֲרוּ אֶת הַצְּבָעִים.</p></article>
          <article><b>06</b><h3>סִפּוּר בְּדַקָּה</h3><p>סַפְּרוּ לַמִּשְׁפָּחָה עֻבְדָּה אַחַת שֶׁגִּלִּיתֶם.</p></article>
        </div>
        <div class="score-strip"><strong>כַּמָּה מְשִׂימוֹת הִצְלַחְנוּ?</strong><span>○ ○ ○ ○ ○ ○</span></div>
        <div class="panel-number standalone-number">${nextPage + 1}</div>
      </section>`,
      `<section class="booklet-panel closing-page source-note journey-page" data-logical-page="${nextPage + 2}" aria-label="איך קוראים כרטיס">
        <span class="page-kicker">מַפְתֵּחַ לַחוֹבֶרֶת</span>
        <h2>אֵיךְ קוֹרְאִים כַּרְטִיס?</h2>
        <p class="page-lead">כָּל כַּרְטִיס הוּא חַלּוֹן קָטָן לִמְדִינָה אַחַת. הִנֵּה הַדְּבָרִים שֶׁכְּדַאי לְחַפֵּשׂ בּוֹ.</p>
        <div class="about-grid">
          <article><span class="about-demo number-demo">27<small>NP</small></span><div><h3>מִסְפָּר וְדֶגֶל</h3><p>הַמִּסְפָּר מְחַבֵּר בֵּין הַכַּרְטִיס לַמַּפָּה, וְהַדֶּגֶל עוֹזֵר לְזַהוֹת אֶת הַמְּדִינָה.</p></div></article>
          <article><span class="about-demo fact-demo">4</span><div><h3>אַרְבַּע עֻבְדּוֹת בְּסִיס</h3><p>בִּירָה, שָׂפָה, מַטְבֵּעַ וְאֻכְלוֹסִיָּה — הַמִּסְפָּרִים מְעֻגָּלִים וְקַלִּים לִקְרִיאָה.</p></div></article>
          <article><span class="about-demo mark-demo">!</span><div><h3>מָקוֹם וְהֲיָדַעְתָּ?</h3><p>מָקוֹם מְיֻחָד לִזְכֹּר וְעוֹד פְּרָט קָטָן שֶׁמַּפְתִּיעַ אוֹ מְסַקְרֵן.</p></div></article>
          <article><span class="about-demo hello-demo">הַי</span><div><h3>שָׁלוֹם בַּשָּׂפָה הַמְּקוֹמִית</h3><p>הַמִּלָּה מוֹפִיעָה בִּכְתָב הַמְּקוֹרִי, וּבַסּוֹגְרַיִם תַּעְתִּיק עִבְרִי לְעֶזְרָה.</p></div></article>
        </div>
        <blockquote class="travel-quote">„אֵין אֲרָצוֹת זָרוֹת; רַק הַנּוֹסֵעַ הוּא זָר.”<cite>רוֹבֶּרְט לוּאִיס סְטִיבֶנְסוֹן</cite></blockquote>
        <div class="panel-number standalone-number">${nextPage + 2}</div>
      </section>`,
      `<section class="booklet-panel back-cover" data-logical-page="${nextPage + 3}" aria-label="כריכה אחורית">
        <img class="cover-art" src="assets/booklet-images/cover-back.png" alt="מצפן ומפה ליד הים בסגנון כרזת מסע וינטג׳ית" />
        <div class="back-cover-copy"><p>כָּל מְדִינָה הִיא עוֹלָם קָטָן שֶׁמְּחַכֶּה שֶׁנַּכִּיר אוֹתוֹ.</p></div>
      </section>`,
    );

    if (logicalPages.length !== 52) throw new Error(`Expected 52 logical pages, got ${logicalPages.length}`);
    if (logicalPages.length % 4 !== 0) throw new Error("Booklet page count must be divisible by four");

    const printSides = [];
    const sheetCount = logicalPages.length / 4;
    for (let sheet = 0; sheet < sheetCount; sheet += 1) {
      const low = 1 + sheet * 2;
      const high = logicalPages.length - sheet * 2;
      const frontSide = printSides.length + 1;
      printSides.push(sheetTemplate(logicalPages[low - 1], logicalPages[high - 1], frontSide, sheet + 1, "front", low, high));
      const backSide = printSides.length + 1;
      printSides.push(sheetTemplate(logicalPages[high - 2], logicalPages[low], backSide, sheet + 1, "back", high - 1, low + 1));
    }

    if (printSides.length !== 26) throw new Error(`Expected 26 A4 print sides, got ${printSides.length}`);
    const previewIndex = printSides.findIndex((side) => (side.match(/class="country-card/g) || []).length === 8);
    if (previewIndex < 0) throw new Error("Could not find a full eight-card print side");
    printSides[previewIndex] = printSides[previewIndex].replace('<section class="booklet-sheet"', '<section class="booklet-sheet" id="cards-preview"');
    document.getElementById("booklet").innerHTML = printSides.join("");
    window.BOOKLET_READY = true;
  }

  buildBooklet();
})();
