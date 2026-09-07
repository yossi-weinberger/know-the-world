// מדינות העולם — ערוך כאן להוסיף, לשנות או לתקן מידע
// שדות בעברית מנוקדת: nameHe, continentHe, capital.he, currency.nameHe, languages[].he,
//                      representative.titleHe/.descriptionHe, funFactHe, hello.pronunciationHe

window.COUNTRIES_DATA = [
  // ── אַסְיָה ─────────────────────────────────────────────────────────────

  {
    code: "IL",
    nameEn: "Israel",
    nameHe: "יִשְׂרָאֵל",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Jerusalem", he: "יְרוּשָׁלַיִם" },
    currency: { code: "ILS", symbol: "₪", nameHe: "שֶׁקֶל חָדָשׁ" },
    languages: [{ he: "עִבְרִית" }],
    population: { value: 9900000, year: 2024 },
    representative: {
      emoji: "🌿",
      titleHe: "עֵץ הַזַּיִת",
      descriptionHe:
        'עֵץ הַזַּיִת הוּא סֵמֶל שֶׁל שָׁלוֹם וְשֶׁל אֶרֶץ יִשְׂרָאֵל מֵאָז הַתַּנַּ"ך.',
    },
    funFactHe:
      "יִשְׂרָאֵל הִיא מְדִינָה קְטַנָּה, אֲבָל בָּהּ יֵשׁ גַּם מִדְבָּר, גַּם הָרִים, וְגַּם חוֹף יָם!",
    hello: { text: "שָׁלוֹם", pronunciationHe: "שָׁלוֹם" },
  },

  {
    code: "JP",
    nameEn: "Japan",
    nameHe: "יַפָּן",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Tokyo", he: "טוֹקְיוֹ" },
    currency: { code: "JPY", symbol: "¥", nameHe: "יֶן יַפָּנִי" },
    languages: [{ he: "יַפָּנִית" }],
    population: { value: 123600000, year: 2024 },
    representative: {
      emoji: "🌸",
      titleHe: "פְּרִיחַת הַדּוּבְדְּבָן",
      descriptionHe:
        "פְּרִיחַת הַדּוּבְדְּבָן (סָקוּרָה) הִיא סֵמֶל יַפָּנִי מְפֻרְסָם. פַּעַם בְּשָׁנָה כָּל הַמְּדִינָה מִתְכַּסֶּה בְּפְּרָחִים וָרֻדִּים.",
    },
    funFactHe:
      'בְּיַפָּן יֵשׁ רַכָּבוֹת מַהִירוֹת מְאֹד שֶׁנִּקְרָאוֹת שִׁינְקַנְסֶן — הֵן נוֹסְעוֹת בְּמַהִירוּת שֶׁל 320 קִ"מ בְּשָׁעָה!',
    hello: { text: "こんにちは", pronunciationHe: "קוֹנִיצִ'יוָה" },
  },

  {
    code: "CN",
    nameEn: "China",
    nameHe: "סִין",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Beijing", he: "בֵּיגִ'ינְג" },
    currency: { code: "CNY", symbol: "¥", nameHe: "יוּאָן סִינִי" },
    languages: [{ he: "סִינִית מַנְדָּרִינִית" }],
    population: { value: 1409700000, year: 2024 },
    representative: {
      emoji: "🐼",
      titleHe: "פַּנְדָּה",
      descriptionHe:
        "הַפַּנְדָּה הַגְּדוֹלָה חַיָּה רַק בְּסִין. הִיא אוֹכֶלֶת בַּמְבּוּק כָּל הַיּוֹם וְהִיא אַחַד מִבַּעֲלֵי הַחַיִּים הַנָּדִירִים בָּעוֹלָם.",
    },
    funFactHe:
      'הַחוֹמָה הַסִּינִית הַגְּדוֹלָה אֲרֻכָּה כְּ-21,000 קִ"מ — הָלִיכָה עָלֶיהָ תִּקַּח שָׁנִים רַבּוֹת!',
    hello: { text: "你好", pronunciationHe: "נִי הָאוֹ" },
  },

  {
    code: "IN",
    nameEn: "India",
    nameHe: "הוֹדּוּ",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "New Delhi", he: "נְיוּ דֶּלְהִי" },
    currency: { code: "INR", symbol: "₹", nameHe: "רוּפִּי הוֹדִי" },
    languages: [{ he: "הִינְדִי" }, { he: "אַנְגְּלִית" }],
    population: { value: 1441700000, year: 2024 },
    representative: {
      emoji: "🐅",
      titleHe: "טִיגְרִיס בֶּנְגָּלִי",
      descriptionHe:
        "הַטִּיגְרִיס הַבֶּנְגָּלִי הוּא בַּעַל הַחַיִּים הַלְּאֻמִּי שֶׁל הוֹדּוּ. זֶהוּ הַטִּיגְרִיס הַגָּדוֹל בְּיוֹתֵר בָּעוֹלָם.",
    },
    funFactHe:
      "הוֹדּוּ הִיא בֵּית הַמֹּלֶדֶת שֶׁל הַשַּׁחְמָט — וְגַם שֶׁל הַסִּפְרָה אֶפֶס, שֶׁבִּלְעָדֶיהָ אֵין חֶשְׁבּוֹן כְּמוֹ שֶׁאֲנַחְנוּ מַכִּירִים הַיּוֹם!",
    hello: { text: "नमस्ते", pronunciationHe: "נַמַסְטֶה" },
  },

  {
    code: "TR",
    nameEn: "Turkey",
    nameHe: "טוּרְקִיָּה",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Ankara", he: "אַנְקָרָה" },
    currency: { code: "TRY", symbol: "₺", nameHe: "לִירָה טוּרְקִית" },
    languages: [{ he: "טוּרְקִית" }],
    population: { value: 85400000, year: 2024 },
    representative: {
      emoji: "🌉",
      titleHe: "מֵצַר הַבּוֹסְפּוֹר",
      descriptionHe:
        "מֵצַר הַבּוֹסְפּוֹר בְּאִיסְטַנְבּוּל מַפְרִיד בֵּין אֵירוֹפָּה לְאַסְיָה. גְּשָׁרִים גְּדוֹלִים מְחַבְּרִים אֶת שְׁתֵּי הַגְּדוֹת.",
    },
    funFactHe:
      "טוּרְקִיָּה נִמְצֵאת בִּשְׁתֵּי יַבֶּשׁוֹת בְּאוֹתוֹ זְמַן — חֵלֶק מִמֶּנָּה בְּאֵירוֹפָּה וְחֵלֶק בְּאַסְיָה!",
    hello: { text: "Merhaba", pronunciationHe: "מֶרְהַבָּה" },
  },

  // ── אֵירוֹפָּה ────────────────────────────────────────────────────────────

  {
    code: "FR",
    nameEn: "France",
    nameHe: "צָרְפַת",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Paris", he: "פָּרִיז" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "צָרְפָתִית" }],
    population: { value: 68400000, year: 2024 },
    representative: {
      emoji: "🗼",
      titleHe: "מִגְדַּל אֵיפֶל",
      descriptionHe:
        "מִגְדַּל אֵיפֶל הוּא הַמּוֹנוּמֶנְט הַמְּבַקֵּר בְּיוֹתֵר בָּעוֹלָם. הוּא נִבְנָה בְּ-1889 וְגָבְהוֹ 330 מֶטֶר.",
    },
    funFactHe:
      "בְּצָרְפַת יֵשׁ יוֹתֵר מִ-1,200 סוּגֵי גְּבִינָה שׁוֹנִים — יוֹתֵר מֵאַחַת לְכָל יוֹם בַּשָּׁנָה!",
    hello: { text: "Bonjour", pronunciationHe: "בּוֹנְז'וּר" },
  },

  {
    code: "GB",
    nameEn: "United Kingdom",
    nameHe: "בְּרִיטַנְיָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "London", he: "לוֹנְדוֹן" },
    currency: { code: "GBP", symbol: "£", nameHe: "לִירָה שְׁטֶרְלִינְג" },
    languages: [{ he: "אַנְגְּלִית" }],
    population: { value: 67900000, year: 2024 },
    representative: {
      emoji: "👑",
      titleHe: "בִּיג בֶּן",
      descriptionHe:
        "בִּיג בֶּן הוּא הַשָּׁעוֹן הַגָּדוֹל שֶׁבְּלוֹנְדוֹן. קוֹרְאִים לוֹ כָּךְ עַל שֵׁם הַפַּעֲמוֹן שֶׁבְּתוֹכוֹ.",
    },
    funFactHe:
      "בְּלוֹנְדוֹן נִבְנְתָה הָרַכֶּבֶת הַתַּחְתִּית הָרִאשׁוֹנָה בָּעוֹלָם — עוֹד בִּשְׁנַת 1863!",
    hello: { text: "Hello", pronunciationHe: "הֶלוֹ" },
  },

  {
    code: "IT",
    nameEn: "Italy",
    nameHe: "אִיטַלְיָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Rome", he: "רוֹמָא" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "אִיטַלְקִית" }],
    population: { value: 58800000, year: 2024 },
    representative: {
      emoji: "🍕",
      titleHe: "פִּיצָּה",
      descriptionHe:
        "הַפִּיצָּה הוּמְצְאָה בָּאִיטַלְיָה — בְּנָאפּוֹלִי, לִפְנֵי כ-200 שָׁנָה. הַיּוֹם אוֹכְלִים אוֹתָהּ בְּכָל רְחֲבֵי הָעוֹלָם!",
    },
    funFactHe:
      "אִיטַלְיָה דּוֹמָה בְּצוּרָתָהּ לְמַגָּף! יֵשׁ בָּהּ גַּם הָרֵי גַּעַשׁ, גַּם אִיִּים, וְגַם הָרֵי אַלְפִּים מוּשְׁלָגִים בַּצָּפוֹן.",
    hello: { text: "Ciao", pronunciationHe: "צ'אוֹ" },
  },

  {
    code: "DE",
    nameEn: "Germany",
    nameHe: "גֶּרְמַנְיָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Berlin", he: "בֶּרְלִין" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "גֶּרְמָנִית" }],
    population: { value: 84600000, year: 2024 },
    representative: {
      emoji: "📖",
      titleHe: "הַדְּפוּס",
      descriptionHe:
        "בְּגֶרְמַנְיָה הוּמְצָא הַדְּפוּס — יוֹהָאנֶס גּוּטֶנְבֶּרְג בָּנָה אֶת מְכוֹנַת הַדְּפוּס הָרִאשׁוֹנָה, וּבִגְלָלָהּ יֵשׁ הַיּוֹם סְפָרִים.",
    },
    funFactHe:
      "בְּגֶרְמַנְיָה יֵשׁ אַלְפֵי טִירוֹת עַתִּיקוֹת. רַבּוֹת מֵהֶן עוֹמְדוֹת עַל גְּדוֹת נְהַר הָרַיְן.",
    hello: { text: "Hallo", pronunciationHe: "הַלוֹ" },
  },

  {
    code: "ES",
    nameEn: "Spain",
    nameHe: "סְפָרַד",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Madrid", he: "מַדְרִיד" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "סְפָרַדִּית" }],
    population: { value: 47900000, year: 2024 },
    representative: {
      emoji: "🍊",
      titleHe: "תַּפּוּזֵי סְפָרַד",
      descriptionHe:
        "סְפָרַד מְפֻרְסֶמֶת בְּתַפּוּזִים מְתוּקִים וּבְעֵצֵי זַיִת. חֵלֶק גָּדוֹל מִן הַשֶּׁמֶן שֶׁאוֹכְלִים בְּאֵירוֹפָּה מַגִּיעַ מִשָּׁם.",
    },
    funFactHe:
      'מִסְּפָרַד יָצְאוּ חֲכָמִים גְּדוֹלִים. הָרַמְבַּ"ם נוֹלַד בְּקוֹרְדוֹבָה שֶׁבִּסְפָרַד.',
    hello: { text: "Hola", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "GR",
    nameEn: "Greece",
    nameHe: "יָוָן",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Athens", he: "אָתוּנָה" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "יְוָנִית" }],
    population: { value: 10000000, year: 2024 },
    representative: {
      emoji: "🏛️",
      titleHe: "עַמּוּדֵי אַתּוּנָה",
      descriptionHe:
        "עַל גִּבְעָה בְּאָתוּנָה עוֹמֵד בִּנְיַן אֶבֶן עַתִּיק בֶּן כְּ-2,500 שָׁנָה. עַמּוּדָיו הַגְּבוֹהִים הֵם מֵהַמַּרְאוֹת הַמּוּכָּרִים בָּעוֹלָם.",
    },
    funFactHe:
      "הַרְבֵּה מִלִּים בְּמַדָּע וּבְהַנְדָּסָה מַגִּיעוֹת מִיְּוָנִית. לְיָוָן גַּם יֵשׁ אַלְפֵי אִיִּים קְטַנִּים בַּיָּם!",
    hello: { text: "Γεια σας", pronunciationHe: "יַאסַס" },
  },

  {
    code: "NL",
    nameEn: "Netherlands",
    nameHe: "הוֹלַנְד",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Amsterdam", he: "אַמְסְטֶרְדַם" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "הוֹלַנְדִית" }],
    population: { value: 17900000, year: 2024 },
    representative: {
      emoji: "🌷",
      titleHe: "צְבַּעוֹנִי",
      descriptionHe:
        "הוֹלַנְד הִיא יַצְרָנִית הַצְּבַּעוֹנִים הַגְּדוֹלָה בָּעוֹלָם. כָּל שָׁנָה הִיא מְיַצְאֶת מִילְיַארְדֵי פְּרָחִים לְכָל הָעוֹלָם.",
    },
    funFactHe:
      "הוֹלַנְד הִיא מְדִינָה שֶׁחֵלֶק גָּדוֹל מִמֶּנָּה נִמְצָא מִתַּחַת לְפְּנֵי הַיָּם — הָאֲנָשִׁים שָׁם בָּנוּ סְכָרִים עֲנָקִיִּים כְּדֵי לְמַנֹּעַ הַצָּפָה!",
    hello: { text: "Hallo", pronunciationHe: "הַלוֹ" },
  },

  {
    code: "RU",
    nameEn: "Russia",
    nameHe: "רוּסְיָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Moscow", he: "מוֹסְקְבָה" },
    currency: { code: "RUB", symbol: "₽", nameHe: "רוּבְּל רוּסִי" },
    languages: [{ he: "רוּסִית" }],
    population: { value: 144200000, year: 2024 },
    representative: {
      emoji: "🐻",
      titleHe: "הַדֹּב הַרוּסִי",
      descriptionHe:
        "הַדֹּב הוּא הַסֵּמֶל הַמּוּכָּר בְּיוֹתֵר שֶׁל רוּסְיָה. בְּרוּסְיָה חַיִּים כְּרֶבַע מִכָּל הַדֻּבִּים בָּעוֹלָם.",
    },
    funFactHe:
      "רוּסְיָה הִיא הַמְּדִינָה הַגְּדוֹלָה בָּעוֹלָם — גְּדוֹלָה כִּמְעַט פִּי שְׁנַיִם מֵאַרְצוֹת הַבְּרִית, וְיֵשׁ בָּהּ 11 אֲזוֹרֵי זְמַן!",
    hello: { text: "Привет", pronunciationHe: "פְּרִיבְיֶט" },
  },

  // ── אַפְרִיקָה ────────────────────────────────────────────────────────────

  {
    code: "EG",
    nameEn: "Egypt",
    nameHe: "מִצְרַיִם",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Cairo", he: "קַהִיר" },
    currency: { code: "EGP", symbol: "E£", nameHe: "לִירָה מִצְרִית" },
    languages: [{ he: "עֲרָבִית" }],
    population: { value: 106400000, year: 2024 },
    representative: {
      emoji: "🔺",
      titleHe: "הַפִּירָמִידוֹת",
      descriptionHe:
        "הַפִּירָמִידוֹת בְּגִּיזָה הֵן אַחַד מִשִּׁבְעַת פְּלָאֵי הָעוֹלָם הָעַתִּיק. הֵן נִבְנוּ לִפְנֵי כ-4,500 שָׁנָה!",
    },
    funFactHe:
      'נְהַר הַנִּילוסוסבְּמִצְרַיִם הוּא הַנָּהָר הָאָרֹךְ בְּיוֹתֵר בָּעוֹלָם — הוּא זוֹרֵם לְאֹרֶךְ שֶׁל 6,650 קִ"מ!',
    hello: { text: "مرحبا", pronunciationHe: "מַרְחַבָּה" },
  },

  {
    code: "ZA",
    nameEn: "South Africa",
    nameHe: "דְּרוֹם אַפְרִיקָה",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Pretoria", he: "פְּרֵטוֹרְיָה" },
    currency: {
      code: "ZAR",
      symbol: "R",
      nameHe: "רַנְד דְּרוֹם אַפְרִיקָאִי",
    },
    languages: [
      { he: "זוּלוּ" },
      { he: "אַנְגְּלִית" },
      { he: "אַפְרִיקָאַנְס" },
    ],
    population: { value: 60600000, year: 2024 },
    representative: {
      emoji: "🦁",
      titleHe: "אַרְיֵה",
      descriptionHe:
        "דְּרוֹם אַפְרִיקָה הִיא בֵּית גִּדּוּל לְחַיּוֹת בָּר מֻפְלָאוֹת — אֲרָיוֹת, פִּילִים, נְמֵרִים, קַרְנַפִּים וְתֵאִים. קוֹרְאִים לָהֶם 'הַחֲמִשָּׁה הַגְּדוֹלִים'.",
    },
    funFactHe:
      "לִדְרוֹם אַפְרִיקָה יֵשׁ שָׁלוֹשׁ עָרֵי בִּירָה שׁוֹנוֹת! פְּרֵטוֹרְיָה, קֵייפּ טָאוּן וּבְּלוּמְפוֹנְטֵיין.",
    hello: { text: "Sawubona", pronunciationHe: "סָאוּבּוֹנָה" },
  },

  {
    code: "MA",
    nameEn: "Morocco",
    nameHe: "מָרוֹקוֹ",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Rabat", he: "רָבָּט" },
    currency: { code: "MAD", symbol: "MAD", nameHe: "דִּירְהַם מָרוֹקָאִי" },
    languages: [{ he: "עֲרָבִית" }, { he: "בֶּרְבֶּרִית" }],
    population: { value: 37500000, year: 2024 },
    representative: {
      emoji: "🌴",
      titleHe: "עֵץ הָאַרְגָּן",
      descriptionHe:
        "עֵץ הָאַרְגָּן גָּדֵל רַק בְּמָרוֹקוֹ. מִפֵּרוֹתָיו מְפִיקִים שֶׁמֶן אַרְגָּן יְקָר מְאֹד, שֶׁמִּשְׁתַּמְּשִׁים בּוֹ בְּבִישּׁוּל וּבְטִיפּוּחַ.",
    },
    funFactHe:
      "מָרוֹקוֹ הִיא הַמְּדִינָה הַיְּחִידָה בְּאַפְרִיקָה שֶׁיֵּשׁ לָהּ חוֹף גַּם לְאֹקְיָינוֹס הַאַטְלַנְטִי וְגַּם לַיָּם הַתִּיכוֹן!",
    hello: { text: "مرحبا", pronunciationHe: "מַרְחַבָּה" },
  },

  // ── אָמֶרִיקָה הַצְּפוֹנִית ──────────────────────────────────────────────

  {
    code: "US",
    nameEn: "United States",
    nameHe: "אַרְצוֹת הַבְּרִית",
    continent: "North America",
    continentHe: "אָמֶרִיקָה הַצְּפוֹנִית",
    capital: { en: "Washington D.C.", he: "וָשִׁינְגְּטוֹן" },
    currency: { code: "USD", symbol: "$", nameHe: "דּוֹלָר אָמֶרִיקָאִי" },
    languages: [{ he: "אַנְגְּלִית" }],
    population: { value: 335900000, year: 2024 },
    representative: {
      emoji: "🦅",
      titleHe: "נֶשֶׁר מְקָרֵחַ",
      descriptionHe:
        "הַנֶּשֶׁר הַמְּקָרֵחַ הוּא הָעוֹף הַלְּאֻמִּי שֶׁל אַרְצוֹת הַבְּרִית. הוּא מֵסַמֵּל חֵרוּת וְכֹּחַ, וּמוֹפִיעַ עַל הַסֶּמֶל הַלְּאֻמִּי.",
    },
    funFactHe:
      "אַרְצוֹת הַבְּרִית מֻרְכֶּבֶת מֵ-50 מְדִינוֹת שׁוֹנוֹת! לְכָל מְדִינָה יֵשׁ דֶּגֶל וְחֻקִּים מְיֻחָדִים לָהּ.",
    hello: { text: "Hello", pronunciationHe: "הֶלוֹ" },
  },

  {
    code: "CA",
    nameEn: "Canada",
    nameHe: "קָנָדָה",
    continent: "North America",
    continentHe: "אָמֶרִיקָה הַצְּפוֹנִית",
    capital: { en: "Ottawa", he: "אוֹטָוָה" },
    currency: { code: "CAD", symbol: "$", nameHe: "דּוֹלָר קָנָדִי" },
    languages: [{ he: "אַנְגְּלִית" }, { he: "צָרְפָתִית" }],
    population: { value: 40100000, year: 2024 },
    representative: {
      emoji: "🍁",
      titleHe: "עֲלֵה מֵייפְּל",
      descriptionHe:
        "עֲלֵה הַמֵּייפְּל הָאָדֹם הוּא סֵמֶל קָנָדָה — הוּא מוֹפִיעַ בְּמֶרְכַּז הַדֶּגֶל. בְּקָנָדָה מְפִיקִים סִירוֹפּ מֵייפְּל מֵעֵצִים גְּדוֹלִים.",
    },
    funFactHe:
      "קָנָדָה הִיא הַמְּדִינָה הַשְּׁנִיָּה בְּגוֹדְלָהּ בָּעוֹלָם! יֵשׁ בָּהּ גַּם שֶׁלֶג קַר מְאֹד בַּחֹרֶף וְגַּם יְעָרוֹת עֲנָקִיִּים.",
    hello: { text: "Hello / Bonjour", pronunciationHe: "הֶלוֹ / בּוֹנְז'וּר" },
  },

  {
    code: "MX",
    nameEn: "Mexico",
    nameHe: "מֶקְסִיקוֹ",
    continent: "North America",
    continentHe: "אָמֶרִיקָה הַצְּפוֹנִית",
    capital: { en: "Mexico City", he: "מֶקְסִיקוֹ סִיטִי" },
    currency: { code: "MXN", symbol: "$", nameHe: "פֶּסוֹ מֶקְסִיקָאִי" },
    languages: [{ he: "סְפָרַדִּית" }],
    population: { value: 129700000, year: 2024 },
    representative: {
      emoji: "🌵",
      titleHe: "סַבְרֵס",
      descriptionHe:
        "הַסַּבְרֵס גָּדֵל בַּמִּדְבָּרוֹת שֶׁל מֶקְסִיקוֹ. הוּא יָכוֹל לִשְׂרֹד זְמַן רַב בְּלִי מַיִם!",
    },
    funFactHe:
      "מֶקְסִיקוֹ הִיא בֵּית הַמֹּלֶדֶת שֶׁל הַשּׁוֹקוֹלָד! כְּבָר לִפְנֵי מֵאוֹת שָׁנִים שָׁתוּ שָׁם מַשְׁקֵה קָקָאוֹ חַם.",
    hello: { text: "Hola", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "CU",
    nameEn: "Cuba",
    nameHe: "קוּבָּה",
    continent: "North America",
    continentHe: "אָמֶרִיקָה הַצְּפוֹנִית",
    capital: { en: "Havana", he: "הָוָואנָה" },
    currency: { code: "CUP", symbol: "$", nameHe: "פֶּסוֹ קוּבָּאנִי" },
    languages: [{ he: "סְפָּרַדִּית" }],
    population: { value: 11200000, year: 2024 },
    representative: {
      emoji: "🚗",
      titleHe: "מְכוֹנִיּוֹת עַתִּיקוֹת",
      descriptionHe:
        "בְּרְחוֹבוֹת הָוָואנָה נוֹסְעוֹת עֲדַיִן מְכוֹנִיּוֹת צִבְעוֹנִיּוֹת מִשְּׁנוֹת הַחֲמִשִּׁים — כְּמוֹ מוּזֵיאוֹן נוֹסֵעַ.",
    },
    funFactHe:
      "קוּבָּה הִיא אִי גָּדוֹל בַּיָּם הַקָּרִיבִּי. גְּדֵלִים שָׁם הַרְבֵּה קְנֵה סֻכָּר וּפֵרוֹת טְרוֹפִּיִּים.",
    hello: { text: "Hola", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "CR",
    nameEn: "Costa Rica",
    nameHe: "קוֹסְטָה רִיקָה",
    continent: "North America",
    continentHe: "אָמֶרִיקָה הַצְּפוֹנִית",
    capital: { en: "San José", he: "סָן חוֹסֶה" },
    currency: { code: "CRC", symbol: "₡", nameHe: "קוֹלוֹן קוֹסְטָה רִיקָאִי" },
    languages: [{ he: "סְפָּרַדִּית" }],
    population: { value: 5200000, year: 2024 },
    representative: {
      emoji: "🦥",
      titleHe: "עַצְלָן",
      descriptionHe:
        "הָעַצְלָן חַי בְּיַעֲרוֹת קוֹסְטָה רִיקָה. הוּא נָע לְאַט מְאֹד וְיָשֵׁן הַרְבֵּה שָׁעוֹת בַּיּוֹם.",
    },
    funFactHe:
      "קוֹסְטָה רִיקָה מְפִיקָה יוֹתֵר מִ-99% מֵהַחַשְׁמַל שֶׁלָּהּ מִמְּקוֹרוֹת מִתְחַדְּשִׁים כְּמוֹ מַיִם, רוּחַ וְשֶׁמֶשׁ — אַחַת הַמְּדִינוֹת הַיְּרֻקּוֹת בְּיוֹתֵר בָּעוֹלָם!",
    hello: { text: "Pura vida", pronunciationHe: "פּוּרָה וִידָה" },
  },

  {
    code: "JM",
    nameEn: "Jamaica",
    nameHe: "גָ'מַיְקָה",
    continent: "North America",
    continentHe: "אָמֶרִיקָה הַצְּפוֹנִית",
    capital: { en: "Kingston", he: "קִינְגְסְטוֹן" },
    currency: { code: "JMD", symbol: "$", nameHe: "דּוֹלָר גָ'מַיְקָאִי" },
    languages: [{ he: "אַנְגְּלִית" }],
    population: { value: 2800000, year: 2024 },
    representative: {
      emoji: "⛰️",
      titleHe: "הֶהָרִים הַכְּחֻלִּים",
      descriptionHe:
        "בְּגָ'מַיְקָה יֵשׁ הָרִים כְּחֻלִּים שֶׁגְּדֵל בָּהֶם קָפֶה מְפֻרְסָם בְּכָל הָעוֹלָם.",
    },
    funFactHe:
      "אוּסֵיין בּוֹלְט — הָאָדָם הַמָּהִיר בְּיוֹתֵר בְּהִיסְטוֹרְיָה — גָּדַל בְּגָ'מַיְקָה. הוּא רָץ 100 מֶטֶר בְּ-9.58 שְׁנִיּוֹת!",
    hello: { text: "Wha gwaan", pronunciationHe: "וָה גְּוָאן" },
  },

  {
    code: "DO",
    nameEn: "Dominican Republic",
    nameHe: "הָרֶפּוּבְּלִיקָה הַדּוֹמִינִיקָנִית",
    continent: "North America",
    continentHe: "אָמֶרִיקָה הַצְּפוֹנִית",
    capital: { en: "Santo Domingo", he: "סַנְטוֹ דּוֹמִינְגוֹ" },
    currency: { code: "DOP", symbol: "$", nameHe: "פֶּסוֹ דּוֹמִינִיקָנִי" },
    languages: [{ he: "סְפָּרַדִּית" }],
    population: { value: 11300000, year: 2024 },
    representative: {
      emoji: "🏖️",
      titleHe: "חוֹפֵי הַקָּרִיבִּי",
      descriptionHe:
        "הָרֶפּוּבְּלִיקָה הַדּוֹמִינִיקָנִית יוֹשֶׁבֶת עַל הָאִי הִיסְפַּנְיוֹלָה. חוֹפֶיהָ הַלְּבָנִים וּמֵימֶיהָ הַטּוּרְקִיז הֵם מִן הַיָּפִים בְּיוֹתֵר בָּעוֹלָם.",
    },
    funFactHe:
      "סַנְטוֹ דּוֹמִינְגוֹ הִיא הָעִיר הַאֵירוֹפִּית הַוְּתִיקָה בְּיוֹתֵר בָּאָמֶרִיקָה — הִיא נוֹסְדָה בְּ-1496 עַל יְדֵי בַּרְתּוֹלוֹמֵאוֹ קוֹלוּמְבּוּס, אָחִיו שֶׁל כְּרִיסְטוֹפֶר.",
    hello: { text: "Hola", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "GT",
    nameEn: "Guatemala",
    nameHe: "גּוּאָטֵמָלָה",
    continent: "North America",
    continentHe: "אָמֶרִיקָה הַצְּפוֹנִית",
    capital: { en: "Guatemala City", he: "גּוּאָטֵמָלָה סִיטִי" },
    currency: { code: "GTQ", symbol: "Q", nameHe: "קֶצַ'ל גּוּאָטֵמַלִי" },
    languages: [{ he: "סְפָּרַדִּית" }, { he: "שָׂפוֹת מַאיָה" }],
    population: { value: 18000000, year: 2024 },
    representative: {
      emoji: "🦜",
      titleHe: "עוֹף הַקֶּצַ'ל",
      descriptionHe:
        "הַקֶּצַ'ל הוּא עוֹף יָרֹק מַדְהִים — זְנָבוֹ אָרֹךְ כְּמֶטֶר! הוּא מוֹפִיעַ עַל הַדֶּגֶל וְעַל הַמַּטְבֵּעַ שֶׁל גּוּאָטֵמָלָה.",
    },
    funFactHe:
      "בְּגּוּאָטֵמָלָה יֵשׁ הָרֵי גַּעַשׁ וִיעָרוֹת גְּדוֹלִים. גְּדֵלִים שָׁם גַּם פּוֹלֵי קָפֶה מְעֻלִּים.",
    hello: { text: "Hola", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "PA",
    nameEn: "Panama",
    nameHe: "פָּנַמָה",
    continent: "North America",
    continentHe: "אָמֶרִיקָה הַצְּפוֹנִית",
    capital: { en: "Panama City", he: "פָּנַמָה סִיטִי" },
    currency: { code: "USD", symbol: "$", nameHe: "דּוֹלָר אָמֶרִיקָאִי" },
    languages: [{ he: "סְפָּרַדִּית" }],
    population: { value: 4400000, year: 2024 },
    representative: {
      emoji: "⛵",
      titleHe: "תְּעָלַת פָּנַמָה",
      descriptionHe:
        "תְּעָלַת פָּנַמָה מְחַבֶּרֶת בֵּין הָאוֹקְיָינוֹס הָאַטְלַנְטִי לְאוֹקְיָינוֹס הַשָּׁקֵט — חוֹסֶכֶת לַסְּפִינוֹת מַסָּע שֶׁל 13,000 ק\"מ מִסָּבִיב לְדָרוֹם אָמֶרִיקָה.",
    },
    funFactHe:
      "תְּעָלַת פָּנַמָה, שֶׁנִּפְתְּחָה בְּ-1914, הִיא אַחַת מֵהַנְּדְסוֹת הַמֹּפְלָאוֹת בָּעוֹלָם. כ-14,000 סְפִינוֹת עוֹבְרוֹת בָּהּ מִדֵּי שָׁנָה!",
    hello: { text: "Hola", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "HT",
    nameEn: "Haiti",
    nameHe: "הַאִיטִי",
    continent: "North America",
    continentHe: "אָמֶרִיקָה הַצְּפוֹנִית",
    capital: { en: "Port-au-Prince", he: "פּוֹר אוֹ פְּרֵנְס" },
    currency: { code: "HTG", symbol: "G", nameHe: "גּוּרְד הַאִיטִי" },
    languages: [{ he: "צָרְפָתִית" }, { he: "קְרֵיאוֹל הַאִיטִי" }],
    population: { value: 11000000, year: 2024 },
    representative: {
      emoji: "⛰️",
      titleHe: "הֶהָרִים וְהַיָּם",
      descriptionHe:
        "הַאִיטִי יוֹשֶׁבֶת עַל חֲצִי אִי בַּקָּרִיבִּי. יֵשׁ בָּהּ הָרִים תְּלוּלִים וְחוֹפִים יָפִים.",
    },
    funFactHe:
      "הַאִיטִי הָיְתָה הַמְּדִינָה הָרִאשׁוֹנָה בָּאִיִּים הַקָּרִיבִּיִּים שֶׁקִּבְּלָה עַצְמָאוּת — כְּבָר בִּשְׁנַת 1804.",
    hello: { text: "Bonjou", pronunciationHe: "בּוֹנְזׁ'וּ" },
  },

  {
    code: "HN",
    nameEn: "Honduras",
    nameHe: "הוֹנְדּוּרַס",
    continent: "North America",
    continentHe: "אָמֶרִיקָה הַצְּפוֹנִית",
    capital: { en: "Tegucigalpa", he: "טֶגוּסִיגַלְפָּה" },
    currency: { code: "HNL", symbol: "L", nameHe: "לֶמְפִּירָה הוֹנְדּוּרִי" },
    languages: [{ he: "סְפָּרַדִּית" }],
    population: { value: 10000000, year: 2024 },
    representative: {
      emoji: "🌴",
      titleHe: "יְעָרוֹת וּמֵי תְּכֵלֶת",
      descriptionHe:
        "הוֹנְדּוּרַס מְכֻסָּה יְעָרוֹת, וְלָהּ חוֹף אָרֹךְ לַיָּם הַקָּרִיבִּי. הָאִיִּים שֶׁלְּיָדָהּ מְפֻרְסָמִים בְּמַיִם צְלוּלִים.",
    },
    funFactHe:
      "שְׁמָהּ שֶׁל הוֹנְדּוּרַס פֵּרוּשׁוֹ 'עֳמָקִים' בִּסְפָרַדִּית — עַל שֵׁם הַיָּם הֶעָמֹק שֶׁלְּיַד חוֹפֶיהָ.",
    hello: { text: "Hola", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "NI",
    nameEn: "Nicaragua",
    nameHe: "נִיקָרָגְוָה",
    continent: "North America",
    continentHe: "אָמֶרִיקָה הַצְּפוֹנִית",
    capital: { en: "Managua", he: "מָנַגְוָה" },
    currency: { code: "NIO", symbol: "C$", nameHe: "קוֹרְדוֹבָה נִיקָרָגְוִי" },
    languages: [{ he: "סְפָּרַדִּית" }],
    population: { value: 7000000, year: 2024 },
    representative: {
      emoji: "🌋",
      titleHe: "הָרֵי הַגְּעָשׁ",
      descriptionHe:
        "נִיקָרָגְוָה מְכֻנֵּית 'אֶרֶץ הָאֲגַמִּים וְהָרֵי הַגְּעָשׁ' — יֵשׁ בָּהּ יוֹתֵר מ-40 הָרֵי גְּעָשׁ, מֵהֶם 6 פְּעִילִים! הָאִי אוֹמֶטֶפֶה נוֹצַר מִשְּׁנֵי הָרֵי גְּעָשׁ בְּתוֹךְ אֲגַם.",
    },
    funFactHe:
      "לָגוּנַת אַפוֹיֶּקֶה בְּנִיקָרָגְוָה הִיא הָאֲגַם הַיְּחִיד בָּעוֹלָם שֶׁיֵּשׁ בּוֹ כַּרְכִּישִׁים מִיָּם — הֵם הִסְתַּגְּלוּ לַמַּיִם הַמְּתוּקִים לִפְנֵי אַלְפֵי שָׁנִים!",
    hello: { text: "Hola", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "SV",
    nameEn: "El Salvador",
    nameHe: "אֶל סַלְוָדוֹר",
    continent: "North America",
    continentHe: "אָמֶרִיקָה הַצְּפוֹנִית",
    capital: { en: "San Salvador", he: "סָן סַלְוָדוֹר" },
    currency: { code: "USD", symbol: "$", nameHe: "דּוֹלָר אָמֶרִיקָאִי" },
    languages: [{ he: "סְפָּרַדִּית" }],
    population: { value: 6500000, year: 2024 },
    representative: {
      emoji: "🌋",
      titleHe: "אֶרֶץ הָרֵי הַגְּעָשׁ",
      descriptionHe:
        "אֶל סַלְוָדוֹר הִיא הַמְּדִינָה הַקְּטַנָּה בְּיוֹתֵר בְּמֶרְכַּז אָמֶרִיקָה — אַךְ יֵשׁ בָּהּ 23 הָרֵי גַּעַשׁ!",
    },
    funFactHe:
      "אַף שֶׁאֶל סַלְוָדוֹר קְטַנָּה, יֵשׁ בָּהּ עֲשָׂרוֹת הָרֵי גַּעַשׁ. הַמַּאֲכָל הָאָהוּב שָׁם נִקְרָא פּוּפּוּסָה — מְעֻגָּה דַּקָּה מִמִּין תְּבוּאָה.",
    hello: { text: "Hola", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "TT",
    nameEn: "Trinidad and Tobago",
    nameHe: "טְרִינִידָד וְטוֹבָּגוֹ",
    continent: "North America",
    continentHe: "אָמֶרִיקָה הַצְּפוֹנִית",
    capital: { en: "Port of Spain", he: "פּוֹרְט אוֹף סְפֵּיְן" },
    currency: { code: "TTD", symbol: "$", nameHe: "דּוֹלָר טְרִינִידָדִי" },
    languages: [{ he: "אַנְגְּלִית" }],
    population: { value: 1400000, year: 2024 },
    representative: {
      emoji: "🐢",
      titleHe: "צַבּוֹת הַיָּם",
      descriptionHe:
        "לְחוֹפֵי טוֹבָּגוֹ מַגִּיעוֹת צַבּוֹת יָם עֲנָקִיּוֹת לָהַטִּיל בֵּיצִים — אֶחָד הַמַּרְאוֹת הַמְּיֻחָדִים בָּעוֹלָם.",
    },
    funFactHe:
      "בְּטְרִינִידָד נִמְצָא אֲגַם הַזֶּפֶת הַגָּדוֹל בָּעוֹלָם — בְּרֵכָה טִבְעִית שֶׁל זֶפֶת שֶׁמִּמֶּנָּהּ עוֹשִׂים כְּבִישִׁים.",
    hello: { text: "Wha' happening", pronunciationHe: "וָה הַפֶּנִינְג" },
  },

  // ── אָמֶרִיקָה הַדְּרוֹמִית ───────────────────────────────────────────────

  {
    code: "BR",
    nameEn: "Brazil",
    nameHe: "בְּרָזִיל",
    continent: "South America",
    continentHe: "אָמֶרִיקָה הַדְּרוֹמִית",
    capital: { en: "Brasília", he: "בְּרָזִילְיָה" },
    currency: { code: "BRL", symbol: "R$", nameHe: "רֵאָל בְּרָזִילָאִי" },
    languages: [{ he: "פּוֹרְטוּגָלִית" }],
    population: { value: 216400000, year: 2024 },
    representative: {
      emoji: "🦜",
      titleHe: "יַעַר הָאָמָזוֹנָס",
      descriptionHe:
        "יַעַר הָאָמָזוֹנָס שֶׁבְּבְּרָזִיל הוּא יַעַר הַגֶּשֶׁם הַגָּדוֹל בָּעוֹלָם. חַיִּים בּוֹ תּוּכִּיִּים, פֵּרוֹת וְחַיּוֹת שֶׁאֵין בְּשׁוּם מָקוֹם אַחֵר.",
    },
    funFactHe:
      "בְּרָזִיל הִיא הַמְּדִינָה הַיְּחִידָה בְּאָמֶרִיקָה הַדְּרוֹמִית שֶׁמְּדַבְּרִים בָּהּ פּוֹרְטוּגָלִית.",
    hello: { text: "Olá", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "AR",
    nameEn: "Argentina",
    nameHe: "אַרְגֶּנְטִינָה",
    continent: "South America",
    continentHe: "אָמֶרִיקָה הַדְּרוֹמִית",
    capital: { en: "Buenos Aires", he: "בּוּאֶנוֹס אַיְרֶס" },
    currency: { code: "ARS", symbol: "$", nameHe: "פֶּסוֹ אַרְגֶּנְטִינִי" },
    languages: [{ he: "סְפָרַדִּית" }],
    population: { value: 46400000, year: 2024 },
    representative: {
      emoji: "🌾",
      titleHe: "הַפַּמְפַּס",
      descriptionHe:
        "בְּאַרְגֶּנְטִינָה יֵשׁ מִישׁוֹרִים עֲנָקִיִּים שֶׁנִּקְרָאִים פַּמְפַּס. עַל הַגְּבוּל עִם בְּרָזִיל יֵשׁ גַּם מְפַלִּים אַדִּירִים.",
    },
    funFactHe:
      "בִּדְרוֹם אַרְגֶּנְטִינָה נִמְצֵאת פַּטַגּוֹנְיָה — אֵזוֹר עָצוּם שֶׁל הָרִים, קַרְחוֹנִים וְרוּחַ חֲזָקָה.",
    hello: { text: "Hola", pronunciationHe: "אוֹלָה" },
  },

  // ── עוֹד מדינות אַסְיָה ──────────────────────────────────────────────────

  {
    code: "KR",
    nameEn: "South Korea",
    nameHe: "דְּרוֹם קוֹרֵיאָה",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Seoul", he: "סֵאוּל" },
    currency: { code: "KRW", symbol: "₩", nameHe: "וֹן קוֹרֵיאָנִי" },
    languages: [{ he: "קוֹרֵיאָנִית" }],
    population: { value: 51700000, year: 2024 },
    representative: {
      emoji: "✍️",
      titleHe: "הַכְּתָב הַקּוֹרֵיאנִי",
      descriptionHe:
        "לְקוֹרֵיאָה יֵשׁ כְּתָב מְיֻחָד שֶׁהוּמְצָא לְפָנֵי כְּ-500 שָׁנָה — הוּא פָּשׁוּט לִלְמִידָה, וְיַלְדֵי קוֹרֵיאָה לוֹמְדִים לִקְרֹא מַהֵר.",
    },
    funFactHe:
      "כִּמְעַט חֲצִי מִדְּרוֹם קוֹרֵיאָה מְכֻסָּה הָרִים. בֵּין הֶהָרִים יֵשׁ גַּם אִיִּים קְטַנִּים עַל הַיָּם.",
    hello: { text: "안녕하세요", pronunciationHe: "אַן-נְיוֹנְג הַסֵּיוֹ" },
  },

  {
    code: "TH",
    nameEn: "Thailand",
    nameHe: "תַּאִילַנְד",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Bangkok", he: "בַּנְגְּקוֹק" },
    currency: { code: "THB", symbol: "฿", nameHe: "בָּאט תַּאִי" },
    languages: [{ he: "תַּאִית" }],
    population: { value: 71800000, year: 2024 },
    representative: {
      emoji: "🐘",
      titleHe: "פִּיל אַסְיָה",
      descriptionHe:
        "הַפִּיל הוּא הַחַיָּה הַלְּאֻמִּית שֶׁל תַּאִילַנְד — מְאוֹת שָׁנִים שָׁמְשׁוּ הַפִּילִים בְּמִלְחָמוֹת וּבְעֲבוֹדַת יַעַר. הַיּוֹם הֵם מוּגָנִים.",
    },
    funFactHe:
      "תַּאִילַנְד הִיא הַמְּדִינָה הַיְּחִידָה בְּדְּרוֹם-מִזְרַח אַסְיָה שֶׁלֹּא הָיְתָה תַּחַת שִׁלְטוֹן אֵירוֹפִּאִי מֵעוֹלָם — שְׁמָהּ הָעַתִּיק פֵּרוּשׁוֹ 'אֶרֶץ הַחוֹפְשִׁיִּים'.",
    hello: { text: "สวัสดีครับ", pronunciationHe: "סַוַאת דִּי" },
  },

  {
    code: "AE",
    nameEn: "United Arab Emirates",
    nameHe: "אִיחוּד הָאֶמִירַיּוֹת",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Abu Dhabi", he: "אַבּוּ דַּאבִּי" },
    currency: { code: "AED", symbol: "د.إ", nameHe: "דִּירְהַם אֶמִירָאתִי" },
    languages: [{ he: "עֲרָבִית" }],
    population: { value: 10000000, year: 2024 },
    representative: {
      emoji: "🦅",
      titleHe: "הַבַּז הַנּוֹדֵד",
      descriptionHe:
        "הַבַּז הַנּוֹדֵד הוּא סֵמֶל הָאֵמִירוּיוֹת. צַיִד בַּבַּזִּים הוּא מָסֹרֶת עַתִּיקָה שָׁם.",
    },
    funFactHe:
      "בּוּרְג' חֲלִיפָה בְּדוּבַּי הוּא הַבִּנְיָן הַגָּבוֹהַּ בְּיוֹתֵר בָּעוֹלָם — 828 מֶטֶר! וּבַמִּדְבָּר שֶׁלְּיָדוֹ יֵשׁ מִגְרַשׁ סְקִי עִם שֶׁלֶג אֲמִתִּי.",
    hello: { text: "مرحبا", pronunciationHe: "מַרְחַבָּה" },
  },

  {
    code: "ID",
    nameEn: "Indonesia",
    nameHe: "אִינְדּוֹנֵזְיָה",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Jakarta", he: "גַ'קַרְטָה" },
    currency: { code: "IDR", symbol: "Rp", nameHe: "רוּפִּיָה אִינְדּוֹנֵזִית" },
    languages: [{ he: "אִינְדּוֹנֵזִית" }],
    population: { value: 278000000, year: 2024 },
    representative: {
      emoji: "🦎",
      titleHe: "דְּרַקוֹן קוֹמוֹדוֹ",
      descriptionHe:
        "דְּרַקוֹן קוֹמוֹדוֹ הוּא הַלְּטָאָה הַגְּדוֹלָה בְּיוֹתֵר בָּעוֹלָם — עַד 3 מֶטֶר! הוּא חַי רַק בְּאִינְדּוֹנֵזְיָה, בְּאִי קוֹמוֹדוֹ.",
    },
    funFactHe:
      "אִינְדּוֹנֵזְיָה מוֹרְכֶּבֶת מִיּוֹתֵר מ-17,000 אִיִּים! הִיא הַמְּדִינָה הָאַרְכִּיפֶּלָגִית הַגְּדוֹלָה בְּיוֹתֵר בָּעוֹלָם.",
    hello: { text: "Halo", pronunciationHe: "הַאלוֹ" },
  },

  {
    code: "JO",
    nameEn: "Jordan",
    nameHe: "יַרְדֵּן",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Amman", he: "עַמָּן" },
    currency: { code: "JOD", symbol: "JD", nameHe: "דִּינָר יַרְדֵּנִי" },
    languages: [{ he: "עֲרָבִית" }],
    population: { value: 10800000, year: 2024 },
    representative: {
      emoji: "🏛️",
      titleHe: "פֶּטְרָה",
      descriptionHe:
        "פֶּטְרָה הִיא עִיר עַתִּיקָה שֶׁנֶּחְצְבָה כֻּלָּהּ מִסֶּלַע אָדֹם לִפְנֵי כ-2,000 שָׁנָה. הִיא נִמְנֵית עַל שִׁבְעַת פְּלָאֵי הָעוֹלָם הַחֲדָשִׁים.",
    },
    funFactHe:
      "עֲקַבָה שֶׁבְּיַרְדֵּן נִמְצֵאת עַל יַם סוּף. מִשָּׁם רוֹאִים מַיִם צְלוּלִים וְדָגִים צִבְעוֹנִיִּים.",
    hello: { text: "مرحبا", pronunciationHe: "מַרְחַבָּה" },
  },

  {
    code: "SA",
    nameEn: "Saudi Arabia",
    nameHe: "עֲרַב הַסְּעוּדִית",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Riyadh", he: "רִיאָד" },
    currency: { code: "SAR", symbol: "﷼", nameHe: "רִיאַל סַעוּדִי" },
    languages: [{ he: "עֲרָבִית" }],
    population: { value: 36000000, year: 2024 },
    representative: {
      emoji: "🌴",
      titleHe: "עֵץ הַתָּמָר",
      descriptionHe:
        "עֲרַב הַסְּעוּדִית מְכֻסָּה בְּרֻבָּהּ מִדְבָּר. הַתְּמָרִים שֶׁגְּדֵלִים שָׁם נֶחְשָׁבִים מִן הַמְּעֻלִּים בָּעוֹלָם.",
    },
    funFactHe:
      "עֲרַב הַסְּעוּדִית מְכִילָה כ-17% מֵרֶזֶרְבוֹת הַנֶּפְט שֶׁל כָּל הָעוֹלָם — זֶה הַאוֹצָר הַגָּדוֹל בְּיוֹתֵר שֶׁל נֶפְט מוּכָּח עַל כַּדּוּר הָאָרֶץ.",
    hello: { text: "مرحبا", pronunciationHe: "מַרְחַבָּה" },
  },

  {
    code: "VN",
    nameEn: "Vietnam",
    nameHe: "וְיֶטְנָם",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Hanoi", he: "הָאנוֹי" },
    currency: { code: "VND", symbol: "₫", nameHe: "דּוֹנְג וְיֶטְנָמִי" },
    languages: [{ he: "וְיֶטְנָמִית" }],
    population: { value: 98000000, year: 2024 },
    representative: {
      emoji: "🍜",
      titleHe: "מָרַק פוֹ",
      descriptionHe:
        "פוֹ הוּא מָרָק אֲטְרִיּוֹת וְיֶטְנָמִי מְפֻרְסָם שֶׁמְּבַשְּׁלִים אוֹתוֹ שָׁעוֹת רַבּוֹת. הוּא הַמָּנָה הַלְּאֻמִּית שֶׁל וְיֶטְנָם.",
    },
    funFactHe:
      "וְיֶטְנָם הִיא הַמְּדִינָה הַשְּׁנִיָּה בַּגֹּדֶל לְיַצּוּא קָפֶה בָּעוֹלָם — אַחֲרֵי בְּרָזִיל. הִיא גַּם מְיַיצֶּאֶת אֶת רֹב הַפִּלְפֵּל הַשָּׁחוֹר שֶׁבָּעוֹלָם!",
    hello: { text: "Xin chào", pronunciationHe: "סִין צ'אוֹ" },
  },

  {
    code: "PH",
    nameEn: "Philippines",
    nameHe: "פִילִיפִּינִים",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Manila", he: "מָנִילָה" },
    currency: { code: "PHP", symbol: "₱", nameHe: "פֶּסוֹ פִילִיפִּינִי" },
    languages: [{ he: "פִילִיפִינִית" }, { he: "אַנְגְּלִית" }],
    population: { value: 115000000, year: 2024 },
    representative: {
      emoji: "🌺",
      titleHe: "פֶּרַח הַסַּמְפַּגִיטָה",
      descriptionHe:
        "הַסַּמְפַּגִיטָה הַלְּבָנָה הָרֵיחָנִית הִיא פֶּרַח לְאֻמִּי שֶׁל פִילִיפִּינִים — הוּא מְסַמֵּל טֹהַר וּפְשִׁיטוּת.",
    },
    funFactHe:
      "פִילִיפִּינִים הִיא אַרְכִּיפֶּלָג שֶׁל יוֹתֵר מִ-7,600 אִיִּים! רַק כ-2,000 מֵהֶם מְיֻשָּׁבִים בְּקָבַע.",
    hello: { text: "Kamusta", pronunciationHe: "קַמוּסְטָה" },
  },

  {
    code: "SG",
    nameEn: "Singapore",
    nameHe: "סִינְגָּפּוּר",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Singapore", he: "סִינְגָּפּוּר" },
    currency: { code: "SGD", symbol: "$", nameHe: "דּוֹלָר סִינְגָּפּוּרִי" },
    languages: [{ he: "אַנְגְּלִית" }, { he: "סִינִית" }, { he: "מָלַאיִית" }],
    population: { value: 5900000, year: 2024 },
    representative: {
      emoji: "🚢",
      titleHe: "נְמַל סִינְגָּפּוּר",
      descriptionHe:
        "סִינְגָּפּוּר הִיא אֶחָד הַנְּמַלִּים הָעֲסוּקִים בְּיוֹתֵר בָּעוֹלָם — סְפִינוֹת מִכָּל הָעוֹלָם עוֹצְרוֹת שָׁם.",
    },
    funFactHe:
      "סִינְגָּפּוּר הִיא מְדִינַת־אִי קְטַנָּה מְאֹד — קְטַנָּה פִּי שְׁלֹשִׁים מִיִּשְׂרָאֵל בְּעֵרֶךְ — אַךְ אַחַת הָעֲשִׁירוֹת בָּעוֹלָם.",
    hello: { text: "Hello", pronunciationHe: "הֶלּוֹ" },
  },

  {
    code: "NP",
    nameEn: "Nepal",
    nameHe: "נֶפָּאל",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Kathmandu", he: "קַטְמַנְדּוּ" },
    currency: { code: "NPR", symbol: "₨", nameHe: "רוּפִּי נֶפָּאלִי" },
    languages: [{ he: "נֶפָּאלִית" }],
    population: { value: 30000000, year: 2024 },
    representative: {
      emoji: "🏔️",
      titleHe: "הַר אֶוֶרֶסְט",
      descriptionHe:
        "הַר אֶוֶרֶסְט — הָהָר הַגָּבוֹהַּ בְּיוֹתֵר בָּעוֹלָם (8,849 מֶטֶר) — נִמְצָא בְּנֶפָּאל. מַדֵּי שָׁנָה עוֹלִים אֵלָיו מֵאוֹת מְטַפְּסִים מִכָּל הָעוֹלָם.",
    },
    funFactHe:
      "נֶפָּאל הִיא בֵּית לִשְׁמוֹנָה מִעֲשֶׂרֶת הֶהָרִים הַגְּבוֹהִים בְּיוֹתֵר בָּעוֹלָם, כּוּלָּם מֵעַל 8,000 מֶטֶר!",
    hello: { text: "नमस्ते", pronunciationHe: "נַמַסְטֵה" },
  },

  {
    code: "PK",
    nameEn: "Pakistan",
    nameHe: "פָּקִיסְטָן",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Islamabad", he: "אִסְלַאמַבַּאד" },
    currency: { code: "PKR", symbol: "₨", nameHe: "רוּפִּי פָּקִיסְטָנִי" },
    languages: [{ he: "אוּרְדּוּ" }, { he: "אַנְגְּלִית" }],
    population: { value: 231000000, year: 2024 },
    representative: {
      emoji: "🏔️",
      titleHe: "הַר K2",
      descriptionHe:
        "K2 הוּא הָהָר הַגָּבוֹהַּ הַשֵּׁנִי בָּעוֹלָם (8,611 מֶטֶר) וְנִמְצָא בְּפָּקִיסְטָן. הַמְּטַפְּסִים מַחְשִׁיבִים אוֹתוֹ לְמַסּוּכָּן יוֹתֵר מֵאֶוֶרֶסְט.",
    },
    funFactHe:
      "נְהַר הָאִינְדוּס חוֹצֶה אֶת פָּקִיסְטָן. בִּלְעָדָיו רֹב הַמְּדִינָה הָיְתָה מִדְבָּר.",
    hello: { text: "السلام عليكم", pronunciationHe: "אַסַּלַאמוּ עַלַיְכוּם" },
  },

  {
    code: "IR",
    nameEn: "Iran",
    nameHe: "אִירָן",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Tehran", he: "טֶהֶרָן" },
    currency: { code: "IRR", symbol: "﷼", nameHe: "רִיאַל אִירָנִי" },
    languages: [{ he: "פָּרְסִית" }],
    population: { value: 87000000, year: 2024 },
    representative: {
      emoji: "🌹",
      titleHe: "הַשָּׁטִיחַ הַפַּרְסִי",
      descriptionHe:
        "אִירָן (פָּרָס) מְפֻרְסֶמֶת בְּשָׁטִיחִים פַּרְסִיִּים יְפֵי פְּלָאִים שֶׁאוֹרְגִים אוֹתָם בְּיַד מֵאָז אֲלָפֵי שָׁנִים — כָּל שָׁטִיחַ הוּא יְצִירַת אָמָנוּת יְחִידַת מִינָהּ.",
    },
    funFactHe:
      'כּוֹרֶשׁ מֶלֶךְ פָּרַס נִזְכָּר בַּתַּנַּ"ךְ — הוּא הִרְשָׁה לְיִשְׂרָאֵל לָשׁוּב לִירוּשָׁלַיִם וְלִבְנוֹת אֶת בֵּית הַמִּקְדָּשׁ.',
    hello: { text: "سلام", pronunciationHe: "סַלָּאם" },
  },

  {
    code: "MY",
    nameEn: "Malaysia",
    nameHe: "מָלֵיזְיָה",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Kuala Lumpur", he: "קוּאָלָה לוּמְפּוּר" },
    currency: { code: "MYR", symbol: "RM", nameHe: "רִינְגִּיט מָלֵיזִי" },
    languages: [{ he: "מָלַאיִית" }],
    population: { value: 33000000, year: 2024 },
    representative: {
      emoji: "🏙️",
      titleHe: "מִגְדְּלֵי פֶּטְרוֹנַס",
      descriptionHe:
        "מִגְדְּלֵי פֶּטְרוֹנַס בְּקוּאָלָה לוּמְפּוּר הָיוּ הַגְּבוֹהִים בָּעוֹלָם בֵּין 1998 ל-2004 — גֹּבָהָם 452 מֶטֶר, מְחֻבָּרִים בְּגֶשֶׁר שֶׁמִּתְנוֹסֵס בַּאֲוִיר!",
    },
    funFactHe:
      "מָלֵיזְיָה הִיא הַמְּדִינָה הַשְּׁנִיָּה בַּגֹּדֶל לְיַצּוּא שֶׁמֶן דֶּקֶל בָּעוֹלָם — שֶׁמֶן זֶה נִמְצָא בְּלֶחֶם, בִּשְׁוֹקוֹלָד וּבְמוּצָרִים רַבִּים נוֹסָפִים.",
    hello: { text: "Apa khabar", pronunciationHe: "אַפָּה קַבָּר" },
  },

  {
    code: "MN",
    nameEn: "Mongolia",
    nameHe: "מוֹנְגּוֹלְיָה",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Ulaanbaatar", he: "אוּלָאן בָּאטוֹר" },
    currency: { code: "MNT", symbol: "₮", nameHe: "טוּגְרִיק מוֹנְגּוֹלִי" },
    languages: [{ he: "מוֹנְגּוֹלִית" }],
    population: { value: 3400000, year: 2024 },
    representative: {
      emoji: "🏕️",
      titleHe: "הַיּוּרְט — הָאֹהֶל הַמּוֹנְגּוֹלִי",
      descriptionHe:
        "הַיּוּרְט הוּא אֹהֶל עָגֹל מְסֹרָתִי שֶׁמְּרַכִּיבִים וּמְפַרְקִים בְּקַלּוּת — מֵאוֹת שָׁנִים נוֹדְדִים הַמּוֹנְגּוֹלִים בַּמִּישׁוֹר וּמַקִּימִים אוֹתוֹ בְּכָל מָקוֹם.",
    },
    funFactHe:
      "גֵ'נְגִ'יס חָאן מוֹנְגּוֹלִי הִקִּים בַּמֵּאָה הַ-13 אֶת הָאִמְפֶּרְיָה הַיַּבַּשְׁתִּית הַגְּדוֹלָה בְּיוֹתֵר בְּהִיסְטוֹרְיָה — הִיא הָשְׁטָחָה מֵהָאוֹקְיָינוֹס הַשָּׁקֵט עַד מִזְרַח אֵירוֹפָּה!",
    hello: { text: "Сайн уу", pronunciationHe: "סַיְן אוּ" },
  },

  {
    code: "KZ",
    nameEn: "Kazakhstan",
    nameHe: "קָזַחְסְטָן",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Astana", he: "אַסְטַאנָה" },
    currency: { code: "KZT", symbol: "₸", nameHe: "טֶנְגֶה קָזַחִי" },
    languages: [{ he: "קָזַחִית" }, { he: "רוּסִית" }],
    population: { value: 19000000, year: 2024 },
    representative: {
      emoji: "🦅",
      titleHe: "נֶשֶׁר הַמִּישׁוֹר",
      descriptionHe:
        "הַנֶּשֶׁר הַזָּהָב הוּא סֵמֶל קָזַחְסְטָן — הוּא מְסַמֵּל חֵרוּת וְכֹחַ. צַיָּדִים קָזַחִים מְאַלְּפִים נְשָׁרִים לְצֹד אִתָּם מֵאָז מֵאוֹת שָׁנִים.",
    },
    funFactHe:
      "קָזַחְסְטָן הִיא הַמְּדִינָה הַמְּסֻגֶּרֶת (לְלֹא גִּישָׁה לַיָּם) הַגְּדוֹלָה בְּיוֹתֵר בָּעוֹלָם — גְּדוֹלָה יוֹתֵר מִכָּל מֶרְחַב מַעֲרַב אֵירוֹפָּה גַּם יַחַד!",
    hello: { text: "Сәлем", pronunciationHe: "סָלֶם" },
  },

  {
    code: "BD",
    nameEn: "Bangladesh",
    nameHe: "בַּנְגְלַדֵּשׁ",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Dhaka", he: "דָּאקָה" },
    currency: { code: "BDT", symbol: "৳", nameHe: "טָקָה בַּנְגְלַדֵּשִׁי" },
    languages: [{ he: "בֶּנְגָּלִית" }],
    population: { value: 170000000, year: 2024 },
    representative: {
      emoji: "🚣",
      titleHe: "דֶּלְטַת הַנְּהָרוֹת",
      descriptionHe:
        "בַּנְגְלַדֵּשׁ יוֹשֶׁבֶת עַל הַדֶּלְטָה הַגְּדוֹלָה בְּיוֹתֵר בָּעוֹלָם — גַּנְג'ס–בְּרַהְמַפּוּטְרָה. הַנְּהָרוֹת מַזִּינִים אֶת הַקַּרְקַע הַפּוֹרְיָה שֶׁלָּהּ.",
    },
    funFactHe:
      "בְּדָּאקָה, בִּירַת בַּנְגְלַדֵּשׁ, יֵשׁ כְּמִילְיוֹן רִיקְשׁוֹת — יוֹתֵר מֵכָּל עִיר אַחֶרֶת בָּעוֹלָם! הָרִיקְשָׁה הִיא כְּלִי הַתְּחַבּוּרָה הַנְּפוֹצָה בְּיוֹתֵר בָּאָרֶץ.",
    hello: { text: "নমস্কার", pronunciationHe: "נוֹמוֹשְׁקָר" },
  },

  {
    code: "KH",
    nameEn: "Cambodia",
    nameHe: "קַמְבּוֹדְיָה",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Phnom Penh", he: "פְּנוֹם פֶּן" },
    currency: { code: "KHR", symbol: "៛", nameHe: "רִיֶּאל קַמְבּוֹדִי" },
    languages: [{ he: "חְמֶרִית" }],
    population: { value: 17000000, year: 2024 },
    representative: {
      emoji: "🌊",
      titleHe: "אֲגַם טוֹנְלֵה סַפּ",
      descriptionHe:
        "קַמְבּוֹדְיָה מְכֻסָּה יְעָרוֹת וּנְהָרוֹת. אֲגַם טוֹנְלֵה סַפּ הוּא אֶחָד הָאֲגַמִּים הַגְּדוֹלִים בְּאַסְיָה.",
    },
    funFactHe:
      "בְּקַמְבּוֹדְיָה נִשְׁאֲרוּ עָרֵי אֶבֶן עַתִּיקוֹת גְּדוֹלוֹת — חוֹמוֹת וּשְׁעָרִים שֶׁנִּבְנוּ לִפְנֵי כְּ-800 שָׁנָה.",
    hello: { text: "ជំរាបសួរ", pronunciationHe: "צ'וּם רֵיאַפּ סוּאוֹר" },
  },

  {
    code: "QA",
    nameEn: "Qatar",
    nameHe: "קָטַאר",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Doha", he: "דוֹחָה" },
    currency: { code: "QAR", symbol: "﷼", nameHe: "רִיאַל קָטָרִי" },
    languages: [{ he: "עֲרָבִית" }],
    population: { value: 2900000, year: 2024 },
    representative: {
      emoji: "🏜️",
      titleHe: "חֲצִי אִי בַּמִּדְבָּר",
      descriptionHe:
        "קָטַאר הִיא חֲצִי אִי קָטָן בַּמִּפְרָץ. רֹב הָאֲדָמָה מִדְבָּר, וּבִזְכוּת הַגַּז הִיא עֲשִׁירָה.",
    },
    funFactHe:
      "קָטַאר הִיא מֵהָעֲשִׁירוֹת בְּיוֹתֵר בָּעוֹלָם לַנֶּפֶשׁ, בִּזְכוּת מִרְבָצֵי גַּז טִבְעִי עֲנָקִיִּים. הִיא גַּם אַחַת הַמְּדִינוֹת הַקְּטַנּוֹת בְּאַסְיָה — בְּגֹדֶל כ-11,500 קִ\"מ מְרֻבָּע.",
    hello: { text: "مرحبا", pronunciationHe: "מַרְחַבָּה" },
  },

  {
    code: "IQ",
    nameEn: "Iraq",
    nameHe: "עִירָק",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Baghdad", he: "בַּגְדַּאד" },
    currency: { code: "IQD", symbol: "ع.د", nameHe: "דִּינָר עִירָקִי" },
    languages: [{ he: "עֲרָבִית" }, { he: "כּוּרְדִּית" }],
    population: { value: 42000000, year: 2024 },
    representative: {
      emoji: "📜",
      titleHe: "הַגְּמָרָא",
      descriptionHe:
        "בְּעִירָק הָיְתָה בָּבֶל. שָׁם נִכְתְּבָה הַגְּמָרָא — הַתַּלְמוּד הַבַּבְלִי שֶׁלּוֹמְדִים עַד הַיּוֹם. שָׁם חָיוּ אֲמוֹרָאִים כְּמוֹ רַב וּשְׁמוּאֵל.",
    },
    funFactHe:
      "עִירָק נִמְצֵאת בֵּין נְהַר חִדֶּקֶל לִנְהַר פְּרָת. בִּזְכוּת הַמַּיִם גִּדְּלוּ שָׁם תְּבוּאָה כְּבָר בִּימֵי קֶדֶם.",
    hello: { text: "مرحبا", pronunciationHe: "מַרְחַבָּה" },
  },

  {
    code: "BT",
    nameEn: "Bhutan",
    nameHe: "בּוּטָן",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Thimphu", he: "תִימְפּוּ" },
    currency: { code: "BTN", symbol: "Nu", nameHe: "נוּלְטְרוּם בּוּטַנִי" },
    languages: [{ he: "דְּזוֹנְגְּקָה" }],
    population: { value: 780000, year: 2024 },
    representative: {
      emoji: "🏔️",
      titleHe: "הָרֵי הַהִימָלַיָה",
      descriptionHe:
        "בּוּטָן הִיא מְדִינָה קְטַנָּה בֵּין הָרִים גְּבוֹהִים. רֹב שִׁטְחָהּ מְכֻסֶּה יְעָרוֹת נְקִיִּים.",
    },
    funFactHe:
      "בּוּטָן מוֹדֶדֶת הַצְלָחָה לֹא רַק בְּכֶסֶף אֶלָּא גַּם בְּאֹשֶׁר הָאֲנָשִׁים — וְהִיא מְדִינָה יְרֻקָּה מְאֹד.",
    hello: { text: "Kuzu zangpo", pronunciationHe: "קוּזוּ זַנְגְּפּוֹ" },
  },

  {
    code: "MV",
    nameEn: "Maldives",
    nameHe: "מַלְדִיבִים",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Malé", he: "מָאלֵה" },
    currency: { code: "MVR", symbol: "Rf", nameHe: "רוּפִּיָיה מַלְדִיבִית" },
    languages: [{ he: "דִיוֶהִי" }],
    population: { value: 520000, year: 2024 },
    representative: {
      emoji: "🏝️",
      titleHe: "אִיֵּי הָאֲלְמוּגִים",
      descriptionHe:
        "מַלְדִיבִים הִיא שַׁרְשֶׁרֶת שֶׁל 1,192 אִיִּים קְטַנִּים בָּאוֹקְיָינוֹס הַהֹדִי. שׂוֹנִיּוֹת הָאֲלְמוּגִים שֶׁלָּהּ הֵן מִן הַיָּפִות בָּעוֹלָם.",
    },
    funFactHe:
      "מַלְדִיבִים הִיא הַמְּדִינָה הַנְּמוּכָה בְּיוֹתֵר בָּעוֹלָם — נְקֻדַּת הַשִּׁיא שֶׁלָּהּ הִיא רַק 2.4 מֶטֶר מֵעַל פְּנֵי הַיָּם! עֵלִיַּת מֵי הַיָּם בְּשֶׁל הִתְחַמְּמוּת גְּלוֹבָלִית מְאַיֶּמֶת לְהַצִּיף אוֹתָהּ.",
    hello: { text: "Haalu kihineh?", pronunciationHe: "הָאלוּ קִיהִינֶה" },
  },

  {
    code: "UZ",
    nameEn: "Uzbekistan",
    nameHe: "אוּזְבֶּקִיסְטָן",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Tashkent", he: "טַשְׁקֶנְט" },
    currency: { code: "UZS", symbol: "сум", nameHe: "סוּם אוּזְבֶּקִי" },
    languages: [{ he: "אוּזְבֶּקִית" }],
    population: { value: 36000000, year: 2024 },
    representative: {
      emoji: "🏙️",
      titleHe: "סָמַרְקַנְד",
      descriptionHe:
        "סָמַרְקַנְד הָיְתָה עִיר גְּדוֹלָה עַל דֶּרֶךְ הַמֶּשִׁי. הַכִּפּוֹת הַכְּחֻלּוֹת שֶׁלָּהּ נִרְאוֹת מֵרָחוֹק.",
    },
    funFactHe:
      "בְּבוּכָארָה שֶׁבְּאוּזְבֶּקִיסְטָן חָיְתָה קְהִלָּה יְהוּדִית עַתִּיקָה — יְהוּדֵי בּוּכָארָה — בְּמֶשֶׁךְ אַלְפֵי שָׁנִים. הַרְבֵּה מֵהֶם עָלוּ לְאֶרֶץ יִשְׂרָאֵל.",
    hello: { text: "Assalomu alaykum", pronunciationHe: "אַסַּלוֹמוּ עֲלַיְכוּם" },
  },

  {
    code: "MM",
    nameEn: "Myanmar",
    nameHe: "בּוּרְמָה",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Naypyidaw", he: "נַיְפִּידוֹ" },
    currency: { code: "MMK", symbol: "K", nameHe: "קְיָאט בּוּרְמִי" },
    languages: [{ he: "בּוּרְמִית" }],
    population: { value: 54000000, year: 2024 },
    representative: {
      emoji: "🚣",
      titleHe: "אֲגַם אִינְלֵה",
      descriptionHe:
        "בַּאֲגַם אִינְלֵה גָּרִים אֲנָשִׁים בְּבָתִּים עַל כְּלוֹנְסָאוֹת, וְדַיָּגִים חוֹתְרִים בְּרֶגֶל אַחַת — מַרְאֶה מְיֻחָד בָּעוֹלָם.",
    },
    funFactHe:
      "בּוּרְמָה מְפֻרְסֶמֶת בַּעֲצֵי טִיק חֲזָקִים וּבִשְׂדוֹת אֹרֶז יְרֻקִּים לְאֹרֶךְ נְהַר הָאִירַוַואדִי.",
    hello: { text: "မင်္ဂလာပါ", pronunciationHe: "מִינְגַּלַּבָּר" },
  },

  {
    code: "LK",
    nameEn: "Sri Lanka",
    nameHe: "סְרִי לַנְקָה",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Colombo", he: "קוֹלוֹמְבּוֹ" },
    currency: { code: "LKR", symbol: "₨", nameHe: "רוּפִּי שֶׁל סְרִי לַנְקָה" },
    languages: [{ he: "סִינְהָלִית" }, { he: "טָמִילִית" }],
    population: { value: 22000000, year: 2024 },
    representative: {
      emoji: "🍃",
      titleHe: "תֵּה צֵ'יְלוֹן",
      descriptionHe:
        "סְרִי לַנְקָה (לְשֶׁעָבַר צֵ'יְלוֹן) מְיַיצֶּרֶת חֵלֶק מֵהַתֵּה הַמְּעֻלֶּה בְּיוֹתֵר בָּעוֹלָם. שְׂדוֹת הַתֵּה הַיְּרֻקִּים בֶּהָרִים הֵם מִן הַנּוֹפוֹת הַיָּפִים בְּאַסְיָה.",
    },
    funFactHe:
      "סְרִי לַנְקָה הִיא אִי גָּדוֹל בְּצוּרַת דִּמְעָה. גְּדֵלִים שָׁם תֵּה, קִנָּמוֹן וַאֲבָנִים יְקָרוֹת.",
    hello: { text: "ආයුබෝවන්", pronunciationHe: "אַיוּבוֹוָן" },
  },

  {
    code: "OM",
    nameEn: "Oman",
    nameHe: "עוֹמַאן",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Muscat", he: "מַסְקַט" },
    currency: { code: "OMR", symbol: "﷼", nameHe: "רִיאַל עוֹמַאנִי" },
    languages: [{ he: "עֲרָבִית" }],
    population: { value: 4600000, year: 2024 },
    representative: {
      emoji: "🌿",
      titleHe: "לְבוֹנָה",
      descriptionHe:
        "עוֹמַאן הָיְתָה מֶרְכַּז יְצוּא לְבוֹנָה — הַשֶּׂרָף הָרֵיחָנִי שֶׁהִבִּיאוּ גַּם לְבֵית הַמִּקְדָּשׁ בִּירוּשָׁלַיִם.",
    },
    funFactHe:
      "עוֹמַאן הִיא מֵהַמְּדִינוֹת הָעַתִּיקוֹת בְּמִסְחָר בַּיָּם — סְפִינוֹת מֵעוֹמַאן הִגִּיעוּ לְהוֹדּוּ, לְסִין וּלְחֹוף הַנְּחֹשֶׁת (זַמְבְּיָה הַמּוֹדֶרְנִית) לִפְנֵי 4,000 שָׁנָה!",
    hello: { text: "مرحبا", pronunciationHe: "מַרְחַבָּה" },
  },

  {
    code: "GE",
    nameEn: "Georgia",
    nameHe: "גֵּאוֹרְגְּיָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Tbilisi", he: "טְבִילִיסִי" },
    currency: { code: "GEL", symbol: "₾", nameHe: "לַארִי גֵּאוֹרְגִּי" },
    languages: [{ he: "גֵּאוֹרְגִּית" }],
    population: { value: 3700000, year: 2024 },
    representative: {
      emoji: "✡️",
      titleHe: "יְהוּדֵי גֵּאוֹרְגְּיָה",
      descriptionHe:
        "בְּגֵאוֹרְגְּיָה חָיָה קְהִלָּה יְהוּדִית עַתִּיקָה. קוֹרְאִים לָהֶם גַּם גּוּרְגִ'ים — יְהוּדִים שֶׁשָּׁמְרוּ שָׁם תּוֹרָה וְמִנְהָגִים דּוֹרוֹת רַבִּים.",
    },
    funFactHe:
      "גֵּאוֹרְגְּיָה נִמְצֵאת בֵּין הַיָּם הַשָּׁחֹר לְהָרֵי הַקַּוְקָז. בֶּהָרִים יֵשׁ כְּפָרִים גְּבוֹהִים, וּבַחֹרֶף יוֹרֵד שֶׁלֶג.",
    hello: { text: "გამარჯობა", pronunciationHe: "גַּמַּרְג'וֹבָה" },
  },

  {
    code: "LB",
    nameEn: "Lebanon",
    nameHe: "לְבָנוֹן",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Beirut", he: "בֵּירוּת" },
    currency: { code: "LBP", symbol: "LL", nameHe: "לִירָה לְבָנוֹנִית" },
    languages: [{ he: "עֲרָבִית" }],
    population: { value: 5500000, year: 2024 },
    representative: {
      emoji: "🌲",
      titleHe: "אֶרֶז הַלְּבָנוֹן",
      descriptionHe:
        "אֶרֶז הַלְּבָנוֹן מוֹפִיעַ עַל הַדֶּגֶל הַלְּבָנוֹנִי — עֵץ אַדִּיר שֶׁנִּזְכָּר בַּתַּנַ\"ךְ. עֵצֵי אֶרֶז מִלְּבָנוֹן שׁוּמְשׁוּ לְבִנְיַן אֳנִיּוֹת, אַרְמוֹנוֹת וְאֶת בֵּית הַמִּקְדָּשׁ בִּירוּשָׁלַיִם.",
    },
    funFactHe:
      "בֵּירוּת הִיא אַחַת הֶעָרִים הָעַתִּיקוֹת בְּיוֹתֵר בָּעוֹלָם — מְיֻשֶּׁבֶת לְפָחוֹת 5,000 שָׁנָה! הַפִּינִיקִים הָרִאשׁוֹנִים יָצְאוּ מֵחוֹף לְבָנוֹן לְגַלּוֹת אֶת הָעוֹלָם הַיָּם-תִּיכוֹנִי.",
    hello: { text: "مرحبا", pronunciationHe: "מַרְחַבָּה" },
  },

  // ── עוֹד מדינות אֵירוֹפָּה ──────────────────────────────────────────────

  {
    code: "PT",
    nameEn: "Portugal",
    nameHe: "פּוֹרְטוּגַל",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Lisbon", he: "לִיסַבּוֹן" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "פּוֹרְטוּגָלִית" }],
    population: { value: 10300000, year: 2024 },
    representative: {
      emoji: "🐓",
      titleHe: "תַּרְנְגוֹל בַּרְסֵלוֹש",
      descriptionHe:
        "הַתַּרְנְגוֹל הַצִּבְעוֹנִי מִבַּרְסֵלוֹש הוּא הַסֵּמֶל הַמּוּכָּר בְּיוֹתֵר שֶׁל פּוֹרְטוּגַל — לֶגֶנְדָה שֶׁל תַּרְנְגוֹל שֶׁהָעִיד עַל חָפּוּי.",
    },
    funFactHe:
      "הַמָּלָחִים הַפּוֹרְטוּגָלִים הָיוּ הָרִאשׁוֹנִים שֶׁהִגִּיעוּ בִּסְפִינָה לְהוֹדּוּ, לְבְּרָזִיל וְלְיַפָּן — הֵם הָיוּ מַלָּחִים אַמִּיצִים שֶׁשָּׁטוּ לְמָקוֹמוֹת בִּלְתִּי נוֹדָעִים!",
    hello: { text: "Olá", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "CH",
    nameEn: "Switzerland",
    nameHe: "שְׁוֵיצַרְיָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Bern", he: "בֶּרְן" },
    currency: { code: "CHF", symbol: "Fr.", nameHe: "פְרַנְק שְׁוֵיצָרִי" },
    languages: [{ he: "גֶּרְמָנִית" }, { he: "צָרְפָתִית" }, { he: "אִיטַלְקִית" }],
    population: { value: 8800000, year: 2024 },
    representative: {
      emoji: "🍫",
      titleHe: "שׁוֹקוֹלָד שְׁוֵיצָרִי",
      descriptionHe:
        "שְׁוֵיצַרְיָה הִיא בֵּית הַמֹּלֶדֶת שֶׁל שׁוֹקוֹלַד הֶחָלָב — דָּנִיֶּאל פֶּטֶר פָּתַח אֶת הַמִּתְכּוֹן בְּ-1875 בְּשִׁיתּוּף עִם הֶנְרִי נֶסְלֶה.",
    },
    funFactHe:
      "לִשְׁוֵיצַרְיָה יֵשׁ אַרְבַּע שָׂפוֹת רְשָׁמִיּוֹת: גֶּרְמָנִית, צָרְפָתִית, אִיטַלְקִית וְרוֹמַנְשׁ. הִיא גַּם לֹא הִשְׁתַּתְּפָה בְּשׁוּם מִלְחָמָה מֵאָז שְׁנַת 1815!",
    hello: { text: "Grüezi", pronunciationHe: "גְרִיאֶצִי" },
  },

  {
    code: "SE",
    nameEn: "Sweden",
    nameHe: "שְׁוֵדְיָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Stockholm", he: "סְטוֹקְהוֹלְם" },
    currency: { code: "SEK", symbol: "kr", nameHe: "כֶּתֶר שְׁוֶדִי" },
    languages: [{ he: "שְׁוֶדִית" }],
    population: { value: 10600000, year: 2024 },
    representative: {
      emoji: "🫎",
      titleHe: "הָאַיָּל הַשְּׁוֶדִי",
      descriptionHe:
        "הָאַיָּל (מוּס) הוּא הַסֵּמֶל הַבִּלְתִּי רְשָׁמִי שֶׁל שְׁוֵדְיָה — הוּא גָּדֵל בְּיַעֲרוֹת שְׁוֵדְיָה הַגְּדוֹלִים וּמֵסַמֵּל אֶת הַטֶּבַע הָצְּפוֹנִי.",
    },
    funFactHe:
      "שְׁוֵדְיָה נָתְנָה לָעוֹלָם אֶת רַהִיטֵי אִיקֵיאָה, וְגַם אֶת פְּרַס נוֹבֶל — פְּרַס חָשׁוּב לְמַדָּע וּלְשָׁלוֹם.",
    hello: { text: "Hej", pronunciationHe: "הֵיי" },
  },

  {
    code: "NO",
    nameEn: "Norway",
    nameHe: "נוֹרְבֶגְיָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Oslo", he: "אוֹסְלוֹ" },
    currency: { code: "NOK", symbol: "kr", nameHe: "כֶּתֶר נוֹרְבֶגִי" },
    languages: [{ he: "נוֹרְבֶגִית" }],
    population: { value: 5500000, year: 2024 },
    representative: {
      emoji: "🌌",
      titleHe: "זוֹהַר הַצָּפוֹן",
      descriptionHe:
        "הַזּוֹהַר הַצְּפוֹנִי (אוֹרוֹרָה בּוֹרֵיאָלִיס) הוּא תַּצּוּגַת אוֹר קְסוּמָה בַּשָּׁמַיִם — גַּלֵּי אוֹר יָרֹק, סָגוֹל וָוָרֹד רוֹקְדִים בַּלַּיְלָה.",
    },
    funFactHe:
      "בְּנוֹרְבֶגְיָה בְּקַיִץ הַשֶּׁמֶשׁ לֹא שׁוֹקַעַת בְּכַּלָּל מֵאַמְצַע יוּנִי עַד אֶמְצַע יוּלִי — לַיְלָה שְׁלֵם שֶׁל אוֹר!",
    hello: { text: "Hei", pronunciationHe: "הֵיי" },
  },

  {
    code: "PL",
    nameEn: "Poland",
    nameHe: "פּוֹלִין",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Warsaw", he: "וַרְשָׁה" },
    currency: { code: "PLN", symbol: "zł", nameHe: "זְלוֹטִי פּוֹלָנִי" },
    languages: [{ he: "פּוֹלָנִית" }],
    population: { value: 41000000, year: 2024 },
    representative: {
      emoji: "🦅",
      titleHe: "הַנֶּשֶׁר הַלָּבָן",
      descriptionHe:
        "הַנֶּשֶׁר הַלָּבָן עַל רֶקַע אָדֹם הוּא סֵמֶל פּוֹלִין מֵאָז הַמֵּאָה הַ-13. הוּא מוֹפִיעַ עַל הַדֶּגֶל וּמְסַמֵּל גְּאַוָּה לְאֻמִּית.",
    },
    funFactHe:
      "בְּפּוֹלִין חָיוּ פַּעַם מִילְיוֹנֵי יְהוּדִים, וְהָיוּ שָׁם יְשִׁיבוֹת מְפֻרְסָמוֹת. וַרְשָׁה הָיְתָה אַחַת הֶעָרִים הַיְּהוּדִיּוֹת הַגְּדוֹלוֹת בָּעוֹלָם.",
    hello: { text: "Cześć", pronunciationHe: "צ'שְׁץ׳" },
  },

  {
    code: "DK",
    nameEn: "Denmark",
    nameHe: "דֶּנְמַרְק",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Copenhagen", he: "קוֹפֶּנְהָגֶן" },
    currency: { code: "DKK", symbol: "kr", nameHe: "כֶּתֶר דָּנִי" },
    languages: [{ he: "דָּנִית" }],
    population: { value: 5900000, year: 2024 },
    representative: {
      emoji: "🧱",
      titleHe: "לֶגוֹ",
      descriptionHe:
        "לֶגוֹ הוּמְצָא בְּדֶּנְמַרְק. הַיּוֹם יְלָדִים בְּכָל הָעוֹלָם בּוֹנִים בּוֹ. הַשֵּׁם בָּא מִדָּנִית: 'שַׂחֵק טוֹב'.",
    },
    funFactHe:
      "דֶּנְמַרְק בְּנוּיָה מֵהַרְבֵּה אִיִּים. אֶפְשָׁר לַעֲבֹר בֵּינֵיהֶם עַל גְּשָׁרִים אֲרֻכִּים.",
    hello: { text: "Hej", pronunciationHe: "הֵיי" },
  },

  {
    code: "AT",
    nameEn: "Austria",
    nameHe: "אוֹסְטְרִיָּה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Vienna", he: "וִיאֶנָּה" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "גֶּרְמָנִית" }],
    population: { value: 9100000, year: 2024 },
    representative: {
      emoji: "🎵",
      titleHe: "מוֹצָרְט",
      descriptionHe:
        "מוֹצָרְט נוֹלַד בְּאוֹסְטְרִיָּה. הוּא הִתְחִיל לִכְתֹּב נְגִינוֹת כְּבָר בְּגִיל חָמֵשׁ, וְחִבֵּר מֵאוֹת יְצִירוֹת.",
    },
    funFactHe:
      "רֹב אוֹסְטְרִיָּה הָרָרִי — הָאַלְפִּים מְכַסִּים חֵלֶק גָּדוֹל מִמֶּנָּה, וּבַחֹרֶף יֵשׁ שֶׁלֶג רָב.",
    hello: { text: "Hallo", pronunciationHe: "הַלוֹ" },
  },

  {
    code: "BE",
    nameEn: "Belgium",
    nameHe: "בֶּלְגִּיָּה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Brussels", he: "בְּרִיסֶל" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "הוֹלַנְדִּית" }, { he: "צָרְפָתִית" }],
    population: { value: 11700000, year: 2024 },
    representative: {
      emoji: "🍫",
      titleHe: "שׁוֹקוֹלָד בֶּלְגִּי",
      descriptionHe:
        "בֶּלְגִּיָּה מְפֻרְסֶמֶת בְּשׁוֹקוֹלָד הַמְּעֻלֶּה שֶׁלָּהּ. יֵשׁ שָׁם יוֹתֵר מ-2,000 חַנֻּיּוֹת שׁוֹקוֹלָד!",
    },
    funFactHe:
      "הַוָּאפֶל וְהַצִ'יפְּס הֻמְצְאוּ בְּבֶלְגִּיָּה — הַצִ'יפְּס הָאֲמִתִּי הוּא בֶּלְגִּי, לֹא אָמֶרִיקָאִי!",
    hello: { text: "Hallo", pronunciationHe: "הָאלוֹ" },
  },

  {
    code: "FI",
    nameEn: "Finland",
    nameHe: "פִינְלַנְד",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Helsinki", he: "הֶלְסִינְקִי" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "פִינִית" }],
    population: { value: 5600000, year: 2024 },
    representative: {
      emoji: "🏞️",
      titleHe: "אֶרֶץ הָאֲגַמִּים",
      descriptionHe:
        "בְּפִינְלַנְד יֵשׁ אַלְפֵי אֲגַמִּים וִיעָרוֹת. בַּצָּפוֹן, בַּקַּיִץ, הַשֶּׁמֶשׁ כִּמְעַט לֹא שׁוֹקַעַת.",
    },
    funFactHe:
      "בְּפִינְלַנְד בַּקַּיִץ הַשֶּׁמֶשׁ לֹא שׁוֹקַעַת כְּלָל — יֵשׁ יָמִים שֶׁהִיא זוֹרַחַת 24 שָׁעוֹת בַּיּוֹם! זֶה נִקְרָא 'חַצּוֹת הַשֶּׁמֶשׁ'.",
    hello: { text: "Hei", pronunciationHe: "הֵיי" },
  },

  {
    code: "IE",
    nameEn: "Ireland",
    nameHe: "אִירְלַנְד",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Dublin", he: "דַּבְלִין" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "אַנְגְּלִית" }, { he: "אִירִית" }],
    population: { value: 5100000, year: 2024 },
    representative: {
      emoji: "🍀",
      titleHe: "שַׁמְרוֹק",
      descriptionHe:
        "הַשַּׁמְרוֹק הוּא סוּג שֶׁל תִּלְתָּן — עָלֶה יָרֹק עִם שְׁלֹשָׁה עָלְעַלִּים. הוּא סֵמֶל אִירְלַנְד.",
    },
    funFactHe:
      "אִירְלַנְד מְכֻנָּה 'הָאִי הַיָּרֹק' כִּי הַגֶּשֶׁם מַשְׁאִיר אֶת הַדֶּשֶׁא יָרֹק כָּל הַשָּׁנָה.",
    hello: { text: "Hello", pronunciationHe: "הֶלוֹ" },
  },

  {
    code: "CZ",
    nameEn: "Czech Republic",
    nameHe: "צֶ'כְיָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Prague", he: "פְּרַאג" },
    currency: { code: "CZK", symbol: "Kč", nameHe: "קוֹרוּנָה צֶ'כִית" },
    languages: [{ he: "צֶ'כִית" }],
    population: { value: 10900000, year: 2024 },
    representative: {
      emoji: "🏰",
      titleHe: "טִירַת פְּרַאג",
      descriptionHe:
        "טִירַת פְּרַאג הִיא מֵהַטִּירוֹת הַגְּדוֹלוֹת בָּעוֹלָם — יֵשׁ בָּהּ אַרְמוֹנוֹת, גַּנִּים וּמִגְדָּלִים מִתְּקוּפוֹת שׁוֹנוֹת.",
    },
    funFactHe:
      "בְּכִּיכַּר הָעִיר הָעַתִּיקָה שֶׁל פְּרַאג עוֹמֵד שָׁעוֹן אַסְטְרוֹנוֹמִי מִשְּׁנַת 1410 — אֶחָד הַשְּׁעוֹנִים הַמֶּכָּנִיִּים הָעַתִּיקִים בְּיוֹתֵר בָּעוֹלָם שֶׁעֲדַיִן עוֹבֵד.",
    hello: { text: "Ahoj", pronunciationHe: "אַהוֹי" },
  },

  {
    code: "UA",
    nameEn: "Ukraine",
    nameHe: "אוּקְרַאִינָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Kyiv", he: "קִיֵּב" },
    currency: { code: "UAH", symbol: "₴", nameHe: "הְרִיבְנָה אוּקְרַאִינִית" },
    languages: [{ he: "אוּקְרַאִינִית" }],
    population: { value: 38000000, year: 2024 },
    representative: {
      emoji: "🌻",
      titleHe: "הַחַמָּנִית",
      descriptionHe:
        "הַחַמָּנִית הִיא פֶּרַח הַלֵּאוּמִי שֶׁל אוּקְרַאִינָה. שְׂדוֹת הַחַמָּנִיּוֹת הַצְּהֻבִּים הֵם אֶחָד מִמַּרְאוֹת הַקַּיִץ הָאוֹפְיְינִיּיִּים בְּמִדִינָה זוֹ.",
    },
    funFactHe:
      "אוּקְרַאִינָה הִיא הַמְּדִינָה הַגְּדוֹלָה בְּיוֹתֵר הַנְּמְצֵאת כֻּלָּהּ בְּתוֹךְ אֵירוֹפָּה. הִיא מְכֻנָּה 'סַל הַלֶּחֶם שֶׁל אֵירוֹפָּה' בִּגְלַל שְׂדוֹת הַחִיטָּה הָעֲנָקִיִּים שֶׁלָּהּ.",
    hello: { text: "Привіт", pronunciationHe: "פְּרִיוִיט" },
  },

  {
    code: "HU",
    nameEn: "Hungary",
    nameHe: "הוּנְגַּרְיָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Budapest", he: "בּוּדָפֶּשְׁט" },
    currency: { code: "HUF", symbol: "Ft", nameHe: "פוֹרִינְט הוּנְגָּרִי" },
    languages: [{ he: "הוּנְגָּרִית" }],
    population: { value: 9700000, year: 2024 },
    representative: {
      emoji: "🧩",
      titleHe: "קוּבִיָּה הוּנְגָּרִית",
      descriptionHe:
        "הַקּוּבִיָּה הַהוּנְגָּרִית — הַצַּעֲצוּעַ הַנִּמְכָּר בְּיוֹתֵר בְּהִיסְטוֹרְיָה — הוּמְצְאָה בְּ-1974 עַל יְדֵי אֶרְנֵא רוּבִּיק.",
    },
    funFactHe:
      "הוּנְגַּרְיָה הִיא בֵּית לְיוֹתֵר מ-1,000 מַעְיָנוֹת חַמִּים טִבְעִיִּים. בְּבּוּדָפֶּשְׁט יֵשׁ בָּתֵּי מֶרְחָץ מְרַהִיבִים שֶׁבְּנוּיִים מֵאָה שָׁנִים!",
    hello: { text: "Szia", pronunciationHe: "סִיָה" },
  },

  {
    code: "RO",
    nameEn: "Romania",
    nameHe: "רוּמֶנְיָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Bucharest", he: "בּוּקָרֶשְׁט" },
    currency: { code: "RON", symbol: "lei", nameHe: "לֵיי רוּמֶנִי" },
    languages: [{ he: "רוּמֶנִית" }],
    population: { value: 19000000, year: 2024 },
    representative: {
      emoji: "🏔️",
      titleHe: "הָרֵי הַקַּרְפָּטִים",
      descriptionHe:
        "הָרֵי הַקַּרְפָּטִים חוֹצִים אֶת רוּמֶנְיָה. יֵשׁ שָׁם יְעָרוֹת, טִירוֹת עַתִּיקוֹת וְדֻבִּים.",
    },
    funFactHe:
      "דֶּלְתַת הַדָּנוּבָּה בְּרוּמֶנְיָה הִיא מֵהַגְּדוֹלוֹת בְּאֵירוֹפָּה — בֵּית לְמֵאוֹת סוּגֵי צִפֳּרִים.",
    hello: { text: "Bună ziua", pronunciationHe: "בּוּנֶה זִיוּאָה" },
  },

  {
    code: "IS",
    nameEn: "Iceland",
    nameHe: "אִיסְלַנְד",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Reykjavik", he: "רֵיקְיָאוִויק" },
    currency: { code: "ISK", symbol: "kr", nameHe: "קְרוּנָה אִיסְלַנְדִּית" },
    languages: [{ he: "אִיסְלַנְדִּית" }],
    population: { value: 380000, year: 2024 },
    representative: {
      emoji: "🌋",
      titleHe: "הַגֵּיזֶר וְהַזּוֹהַר",
      descriptionHe:
        "אִיסְלַנְד יוֹשֶׁבֶת עַל רְצוּעַת הָרֵי גַּעַשׁ. יֵשׁ שָׁם גֵּיזֶרִים שֶׁפּוֹלְטִים מַיִם רוֹתְחִים לְגֹבַהּ שֶׁל 30 מֶטֶר!",
    },
    funFactHe:
      "אִיסְלַנְד מְפִיקָה כִּמְעַט אֶת כָּל הַחַשְׁמַל שֶׁלָּהּ מֵאֵנֶרְגְּיָה גֵּיאוֹתֶרְמִית וְמַיִם — אֵין שָׁם כִּמְעַט בְּכְלָל זִיהוּם אֲוִיר! בַּחֹרֶף נִרְאִים שָׁם זוֹרְעִים צְפוֹנִיִּים מְרַהִיבִים.",
    hello: { text: "Halló", pronunciationHe: "הָאלּוֹ" },
  },

  {
    code: "HR",
    nameEn: "Croatia",
    nameHe: "קְרוֹאַטְיָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Zagreb", he: "זַגְרֶב" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "קְרוֹאָטִית" }],
    population: { value: 4000000, year: 2024 },
    representative: {
      emoji: "🏰",
      titleHe: "דוּבְּרוֹבְנִיק",
      descriptionHe:
        "דוּבְּרוֹבְנִיק הִיא עִיר חוֹמוֹת עַתִּיקָה עַל חוֹף הַיָּם. הָרְחוֹבוֹת שֶׁלָּהּ עֲשׂוּיִים אֶבֶן, וְהַיָּם סָבִיב כָּחֹל.",
    },
    funFactHe:
      "לִקְרוֹאַטְיָה יֵשׁ יוֹתֵר מֵאֶלֶף אִיִּים עַל חוֹף הַיָּם. רַק בְּחֵלֶק מֵהֶם גָּרִים אֲנָשִׁים.",
    hello: { text: "Bok", pronunciationHe: "בּוֹק" },
  },

  {
    code: "BG",
    nameEn: "Bulgaria",
    nameHe: "בּוּלְגַּרְיָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Sofia", he: "סוֹפְיָה" },
    currency: { code: "BGN", symbol: "лв", nameHe: "לֶב בּוּלְגָּרִי" },
    languages: [{ he: "בּוּלְגָּרִית" }],
    population: { value: 6500000, year: 2024 },
    representative: {
      emoji: "🌹",
      titleHe: "שֶׁמֶן וֶרֶד",
      descriptionHe:
        "בּוּלְגַּרְיָה מְיַיצֶּרֶת כ-70% מֵשֶׁמֶן הַוֶּרֶד בָּעוֹלָם, הַמְּשַׁמֵּשׁ לְבָשָׂמִים יְקָרֵי עֵרֶךְ. בְּגַּן שׁוּשַׁנִּים בְּרוֹזוֹבָה עֶמֶק נֶאֱסָפִים כ-3 טוֹן עֲלֵי שׁוּשָׁן בַּשָּׁנָה.",
    },
    funFactHe:
      "הָאָלְפַּבֵּית הַקִּירִילִי — הַמִּשְׁמָשׁ לִכְתּוֹב רוּסִית, סֶרְבִּית, אוּקְרַאִינִית וְשָׂפוֹת נוֹסָפוֹת — הוּמְצָא בְּבּוּלְגַּרְיָה בַּמֵּאָה הַ-9 עַל יְדֵי קִירִיל וּמֶתּוֹדְיוּס!",
    hello: { text: "Здравей", pronunciationHe: "זְדְרַאוֵּי" },
  },

  {
    code: "RS",
    nameEn: "Serbia",
    nameHe: "סֶרְבְּיָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Belgrade", he: "בֵּלְגְרַד" },
    currency: { code: "RSD", symbol: "дин", nameHe: "דִּינָר סֶרְבִּי" },
    languages: [{ he: "סֶרְבִּית" }],
    population: { value: 6800000, year: 2024 },
    representative: {
      emoji: "⚡",
      titleHe: "נִיקוֹלָה טֶסְלָה",
      descriptionHe:
        "נִיקוֹלָה טֶסְלָה הָיָה מַמְצִיא סֶרְבִּי. הוּא פִּתֵּחַ אֶת זֶרֶם הַחַשְׁמַל שֶׁמַּגִּיעַ הַיּוֹם לְכָל בַּיִת.",
    },
    funFactHe:
      "בֵּלְגְרַד, בִּירַת סֶרְבְּיָה, יוֹשֶׁבֶת בְּמִפְגָּשׁ שֶׁל שְׁנֵי נְהָרוֹת גְּדוֹלִים.",
    hello: { text: "Zdravo", pronunciationHe: "זְדְרַאוּוֹ" },
  },

  {
    code: "EE",
    nameEn: "Estonia",
    nameHe: "אֶסְטוֹנְיָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Tallinn", he: "טַלִּין" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "אֶסְטוֹנִית" }],
    population: { value: 1400000, year: 2024 },
    representative: {
      emoji: "🌲",
      titleHe: "יְעָרוֹת",
      descriptionHe:
        "יוֹתֵר מֵחֲצִי אֶסְטוֹנְיָה מְכֻסָּה יַעַר. בֵּין הָעֵצִים יֵשׁ גַּם אֲגַמִּים קְטַנִּים.",
    },
    funFactHe:
      "בְּטַלִּין הַבִּירָה יֵשׁ עִיר עַתִּיקָה עִם חוֹמוֹת וּמִגְדָּלִים בְּנֵי מֵאוֹת שָׁנִים.",
    hello: { text: "Tere", pronunciationHe: "טֶרֶה" },
  },

  {
    code: "LT",
    nameEn: "Lithuania",
    nameHe: "לִיטָא",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Vilnius", he: "וִילְנִיוּס" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "לִיטָאִית" }],
    population: { value: 2800000, year: 2024 },
    representative: {
      emoji: "📖",
      titleHe: "יְרוּשָׁלַיִם דְּלִיטָא",
      descriptionHe:
        "וִילְנָא נִקְרְאָה 'יְרוּשָׁלַיִם דְּלִיטָא'. הַגָּאוֹן מִוִּילְנָא לָמַד וְלִמֵּד שָׁם — מֵאַחַד גְּדוֹלֵי הַתּוֹרָה בְּכָל הַדּוֹרוֹת.",
    },
    funFactHe:
      "בְּלִיטָא יֵשׁ אַלְפֵי אֲגַמִּים וִיעָרוֹת. בַּקַּיִץ הַיָּמִים אֲרֻכִּים מְאֹד.",
    hello: { text: "Labas", pronunciationHe: "לַבַּס" },
  },

  {
    code: "SK",
    nameEn: "Slovakia",
    nameHe: "סְלוֹבַקְיָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Bratislava", he: "בְּרָטִיסְלַוָה" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "סְלוֹבָקִית" }],
    population: { value: 5500000, year: 2024 },
    representative: {
      emoji: "🏰",
      titleHe: "טִירוֹת סְלוֹבַקְיָה",
      descriptionHe:
        "לִסְלוֹבַקְיָה יֵשׁ יוֹתֵר מ-180 טִירוֹת וּשְׁרִידֵי טִירוֹת — יוֹתֵר לְשֶׁטַח מִכָּל מְדִינָה אַחֶרֶת! רַבּוֹת מֵהֵן עוֹמְדוֹת עַל פְּסָגוֹת הָרִים בְּאֵרוֹפָּה הַמֶּרְכָּזִית.",
    },
    funFactHe:
      "בְּרָטִיסְלַוָה, בִּירַת סְלוֹבַקְיָה, הִיא הָעִיר הַיְּחִידָה בָּעוֹלָם הַגּוֹבֶלֶת בְּשְׁתֵּי מְדִינוֹת שׁוֹנוֹת — אוֹסְטְרִיָּה וְהוּנְגַּרְיָה — וְנִמְצֵאת עַל הַדָּנוּבָּה!",
    hello: { text: "Ahoj", pronunciationHe: "אַהוֹי" },
  },

  {
    code: "SI",
    nameEn: "Slovenia",
    nameHe: "סְלוֹבֶנְיָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Ljubljana", he: "לְיוּבְּלְיַאנָה" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "סְלוֹבֶנִית" }],
    population: { value: 2100000, year: 2024 },
    representative: {
      emoji: "🏔️",
      titleHe: "אֲגַם בְּלֶד",
      descriptionHe:
        "אֲגַם בְּלֶד הוּא מֵהַנּוֹפִים הַיָּפִים בְּאֵירוֹפָּה — אִי קָטָן בְּאֶמְצַע מַיִם יְרֻקִּים, מוּקָף הָרִים וְטִירָה עַל צוּק.",
    },
    funFactHe:
      "סְלוֹבֶנְיָה הִיא אַחַת הַמְּדִינוֹת הַיְּרֻקּוֹת בְּיוֹתֵר בְּאֵירוֹפָּה — 60% מִשִּׁטְחָהּ מְכֻסֶּה יְעָרוֹת! הִיא גַּם בֵּית לְנְּקָרוֹת גִּיר מְדַהִימוֹת, כּוֹלֵל מְעָרוֹת פּוֹסְטוֹיְנָה הָעֲנָקִיּוֹת.",
    hello: { text: "Živjo", pronunciationHe: "זִ'יוְיוֹ" },
  },

  {
    code: "LV",
    nameEn: "Latvia",
    nameHe: "לַטְבִיָּה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Riga", he: "רִיגָה" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "לַטְבִית" }],
    population: { value: 1800000, year: 2024 },
    representative: {
      emoji: "🎵",
      titleHe: "עַנְבָּר",
      descriptionHe:
        "לַטְבִיָּה מְפֻרְסֶמֶת בָּעַנְבָּר — אֶבֶן זָהֹבָה שֶׁנִּמְצֵאת עַל חוֹף הַיָּם הַבַּלְטִי.",
    },
    funFactHe:
      "לַטְבִיָּה שִׁחְרְרָה עַצְמָהּ מִבְּרִית הַמּוֹעֲצוֹת בְּ-1991 בְּמָה שֶׁנִּקְרָא 'מֶהְפֵּכַת הַשִּׁירָה' — אֲנָשִׁים עָמְדוּ בְּשַׁרְשֶׁרֶת אֱנוֹשִׁית שֶׁל 600 ק\"מ בְּשִׁירָה!",
    hello: { text: "Sveiki", pronunciationHe: "סְוֵיקִי" },
  },

  {
    code: "AL",
    nameEn: "Albania",
    nameHe: "אַלְבָּנְיָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Tirana", he: "טִירָנָה" },
    currency: { code: "ALL", symbol: "L", nameHe: "לֶק אַלְבָּנִי" },
    languages: [{ he: "אַלְבָּנִית" }],
    population: { value: 2800000, year: 2024 },
    representative: {
      emoji: "🦅",
      titleHe: "הַנֶּשֶׁר הַכָּפוּל",
      descriptionHe:
        "דֶּגֶל אַלְבָּנְיָה מַרְאֶה נֶשֶׁר שָׁחוֹר דּוּ-רֹאשִׁי עַל רֶקַע אָדֹם — אֶחָד הַסְּמָלִים הַהֶרַלְדִּיִּים הָעַתִּיקִים בְּאֵירוֹפָּה. הַנֶּשֶׁר מְסַמֵּל כֹּחַ וְחֵרוּת.",
    },
    funFactHe:
      "לְאַלְבַּנְיָה יֵשׁ חוֹף יָפֶה עַל הַיָּם הָאַדְרִיָּאטִי, וּבֶהָרִים שֶׁלָּהּ יֵשׁ אַגְמֵי מַיִם צְלוּלִים.",
    hello: { text: "Mirëdita", pronunciationHe: "מִירֶדִּיטָה" },
  },

  {
    code: "LU",
    nameEn: "Luxembourg",
    nameHe: "לוּקְסֶמְבּוּרְג",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Luxembourg City", he: "לוּקְסֶמְבּוּרְג" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "לוּקְסֶמְבּוּרְגִּית" }, { he: "צָרְפָתִית" }, { he: "גֶּרְמָנִית" }],
    population: { value: 660000, year: 2024 },
    representative: {
      emoji: "🏰",
      titleHe: "הַמְּבַצָּר הָעַתִּיק",
      descriptionHe:
        "לוּקְסֶמְבּוּרְג נוֹסְדָה סְבִיב מְבַצָּר עַתִּיק עַל צוּק — הָיְתָה לְמִבְצָר הַחָזָק בְּיוֹתֵר בְּצָפוֹן אֵירוֹפָּה. כַּיּוֹם הָעִיר נֶחְשֶׁבֶת לְאַחַת הַיָּפוֹת בְּיוֹתֵר בְּיַבֶּשֶׁת.",
    },
    funFactHe:
      "לוּקְסֶמְבּוּרְג הִיא הַמְּדִינָה הַגְּדוֹלָה הָעֲשִׁירָה בְּיוֹתֵר בָּעוֹלָם לַנֶּפֶשׁ! הִיא גַּם הַדּוּכַסְיָּה הַגְּדוֹלָה הַיְּחִידָה בָּעוֹלָם שֶׁעֲדַיִן בְּתַוְקֶפֶת — שָׁלִיט נוֹסֵא תֹּאַר 'דּוּכַס'.",
    hello: { text: "Moien", pronunciationHe: "מוֹיֶן" },
  },

  {
    code: "MT",
    nameEn: "Malta",
    nameHe: "מַלְטָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Valletta", he: "וַלֶּטָּה" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "מַלְטִית" }, { he: "אַנְגְּלִית" }],
    population: { value: 530000, year: 2024 },
    representative: {
      emoji: "🪨",
      titleHe: "אִי הָאֶבֶן",
      descriptionHe:
        "מַלְטָה הִיא אִי קָטָן בַּיָּם הַתִּיכוֹן. יֵשׁ בָּהּ בִּנְיְנֵי אֶבֶן עַתִּיקִים בְּנֵי אַלְפֵי שָׁנִים.",
    },
    funFactHe:
      "מַלְטָה הִיא אַחַת הַמְּדִינוֹת הַקְּטַנּוֹת בְּיוֹתֵר בָּעוֹלָם — רַק 316 ק\"מ מְרֻבָּע — אַךְ בְּמֶשֶׁךְ הִיסְטוֹרְיָה הָיְתָה בָּהּ שׁוֹלֶטֶת הַפִּינִיקִים, הָרוֹמִים, הָאַרַבִּים, הַנּוֹרְמָנִים, וּפָרָשֵׁי מַלְטָה!",
    hello: { text: "Merħba", pronunciationHe: "מֶרְחְבָּה" },
  },

  // ── עוֹד מדינות אַפְרִיקָה ─────────────────────────────────────────────

  {
    code: "KE",
    nameEn: "Kenya",
    nameHe: "קֵנְיָה",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Nairobi", he: "נַיְרוֹבִּי" },
    currency: { code: "KES", symbol: "KSh", nameHe: "שִׁילִינְג קֵנְיָאִי" },
    languages: [{ he: "סְוָאהִילִי" }, { he: "אַנְגְּלִית" }],
    population: { value: 56000000, year: 2024 },
    representative: {
      emoji: "🦒",
      titleHe: "גִּ'ירָף",
      descriptionHe:
        "קֵנְיָה הִיא אַחַד הַמְּקוֹמוֹת הַטּוֹבִים בְּיוֹתֵר בָּעוֹלָם לִרְאוֹת גִּ'ירָפוֹת, אֲרָיוֹת וּפִילִים בַּחוֹפְשִׁי.",
    },
    funFactHe:
      "קֵנְיָה נִמְצֵאת עַל קוֹ הַמַּשְׁוֶה. בִּגְלַל גֹּבַהּ הֶהָרִים לֹא תָּמִיד חַם שָׁם כְּמוֹ שֶׁחוֹשְׁבִים.",
    hello: { text: "Jambo", pronunciationHe: "גַ'מְבּוֹ" },
  },

  {
    code: "NG",
    nameEn: "Nigeria",
    nameHe: "נִיגֶרְיָה",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Abuja", he: "אַבּוּגַ'ה" },
    currency: { code: "NGN", symbol: "₦", nameHe: "נַיְרָה נִיגֶרִית" },
    languages: [{ he: "אַנְגְּלִית" }, { he: "הַאוּסָה" }, { he: "יוֹרוּבָּה" }],
    population: { value: 230000000, year: 2024 },
    representative: {
      emoji: "🦅",
      titleHe: "הַנֶּשֶׁר הַנִּיגֶרִי",
      descriptionHe:
        "הַנֶּשֶׁר מוֹפִיעַ עַל סֵמֶל נִיגֶרְיָה. נִיגֶרְיָה הִיא הַמְּדִינָה הַמְּאֻכְלֶסֶת בְּיוֹתֵר בְּאַפְרִיקָה.",
    },
    funFactHe:
      "נִיגֶרְיָה הִיא הַמְּדִינָה הַמְּאֻכְלֶסֶת בְּיוֹתֵר בְּאַפְרִיקָה — כְּ-230 מִילְיוֹן אִישׁ! יֵשׁ בָּהּ גַּם נֶפְט הַרְבֵּה.",
    hello: { text: "Bawo ni", pronunciationHe: "בָּאוּוֹ נִי (יוֹרוּבָּה)" },
  },

  {
    code: "ET",
    nameEn: "Ethiopia",
    nameHe: "אֶתְיוֹפְּיָה",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Addis Ababa", he: "אַדִּיס אַבֶּבָּה" },
    currency: { code: "ETB", symbol: "Br", nameHe: "בִּיר אֶתְיוֹפִּי" },
    languages: [{ he: "אַמְהָרִית" }],
    population: { value: 127000000, year: 2024 },
    representative: {
      emoji: "☕",
      titleHe: "קָפֶה",
      descriptionHe:
        "הַקָּפֶה הוּמְצָא בְּאֶתְיוֹפְּיָה! לְפִי הָאַגָּדָה, רוֹעֶה עִזִּים בְּשֵׁם קַלְדִּי שָׂם לֵב שֶׁהָעִזִּים שֶׁלּוֹ עֵרָנִיּוֹת אַחֲרֵי שֶׁאָכְלוּ פֵּרוֹת מֵעֵץ הַקָּפֶה.",
    },
    funFactHe:
      "מֵאֶתְיוֹפְּיָה עָלוּ לְאֶרֶץ יִשְׂרָאֵל קְהִלּוֹת יְהוּדִיּוֹת עַתִּיקוֹת — בֵּיתָא יִשְׂרָאֵל. אֶתְיוֹפְּיָה גַּם כִּמְעַט לֹא הָיְתָה מוֹשָׁבָה אֵירוֹפִּית.",
    hello: { text: "ሰላም", pronunciationHe: "סֵלַם" },
  },

  {
    code: "TZ",
    nameEn: "Tanzania",
    nameHe: "טַנְזַנְיָה",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Dodoma", he: "דּוֹדוֹמָה" },
    currency: { code: "TZS", symbol: "TSh", nameHe: "שִׁילִינְג טַנְזַנְיָאנִי" },
    languages: [{ he: "סְוָואהִילִי" }, { he: "אַנְגְּלִית" }],
    population: { value: 65500000, year: 2024 },
    representative: {
      emoji: "🦒",
      titleHe: "סֶרֶנְגֶּטִי",
      descriptionHe:
        "מִישׁוֹר הַסֶּרֶנְגֶּטִי שֶׁבְּטַנְזַנְיָה הוּא בֵּית לְמִיגְרַציָּה הַגְּדוֹלָה בְּיוֹתֵר בְּעוֹלָם — מִילְיוֹנֵי חַיּוֹת עוֹבְרוֹת בּוֹ מִדֵּי שָׁנָה.",
    },
    funFactHe:
      "הַר קִילִימַנְגָ'רוֹ שֶׁבְּטַנְזַנְיָה הוּא הַר הַשִּׁיא שֶׁל אַפְרִיקָה — גֹּבַהּ 5,895 מֶטֶר. עַל אַף שֶׁהוּא קָרוֹב לַקַּו הָרָאשׁוֹן, בְּרֹאשׁוֹ יֵשׁ שֶׁלֶג לְאוֹרֶךְ כָּל הַשָּׁנָה!",
    hello: { text: "Habari", pronunciationHe: "הַבָּרִי" },
  },

  {
    code: "GH",
    nameEn: "Ghana",
    nameHe: "גָּאנָה",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Accra", he: "אַקְרָה" },
    currency: { code: "GHS", symbol: "₵", nameHe: "סֶדִי גָּאנִי" },
    languages: [{ he: "אַנְגְּלִית" }],
    population: { value: 33500000, year: 2024 },
    representative: {
      emoji: "🍫",
      titleHe: "עֵץ הַקָּקָאוֹ",
      descriptionHe:
        "גָּאנָה הִיא אַחַת הַמְּדִינוֹת הַגְּדוֹלוֹת בְּיוֹתֵר לְיַצּוּא קָקָאוֹ — הַחׁוֹמֶר הָעִיקָרִי לְהַכְנַת שׁוֹקוֹלָד.",
    },
    funFactHe:
      "גָּאנָה הָיְתָה הַמְּדִינָה הָרִאשׁוֹנָה בְּאַפְרִיקָה שֶׁמִּדְרוֹם לַסַּהֲרָה שֶׁזָּכְתָה לְעַצְמָאוּת — בְּשָׁנַת 1957, בְּהַנְהָגַת קְוָאמֶה נְקְרוּמָה.",
    hello: { text: "Akwaaba", pronunciationHe: "אַקְוַאָבָּה" },
  },

  {
    code: "MG",
    nameEn: "Madagascar",
    nameHe: "מָדַגַסְקָר",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Antananarivo", he: "אַנְטַנַנַרִיבוּ" },
    currency: { code: "MGA", symbol: "Ar", nameHe: "אַרְיָארִי מַלְגַּשִׁי" },
    languages: [{ he: "מַלְגַּשִׁית" }, { he: "צָרְפָתִית" }],
    population: { value: 29000000, year: 2024 },
    representative: {
      emoji: "🦎",
      titleHe: "לֵימוּר",
      descriptionHe:
        "הַלֵּמוּר חַי רַק בְּמָדַגַסְקָר. עֵינָיו הַגְּדוֹלוֹת מְאִירוֹת בַּחֹשֶׁךְ, וְהוּא אֶחָד הַיּוֹנְקִים הַמְּיֻחָדִים בְּיוֹתֵר בָּעוֹלָם.",
    },
    funFactHe:
      "מָדַגַסְקָר הִיא אִי עֲנָקִי בְּאוֹקְיָינוֹס הַהֹדִי — כ-90% מֵהַצּוֹמֵחַ וּבַעֲלֵי הַחַיִּים שָׁם לֹא נִמְצָאִים בְּשׁוּם מָקוֹם אַחֵר בָּעוֹלָם!",
    hello: { text: "Manao ahoana", pronunciationHe: "מָנָאוּ אַהוּאָנָה" },
  },

  {
    code: "DZ",
    nameEn: "Algeria",
    nameHe: "אַלְגִ'רְיָה",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Algiers", he: "אַלְגִ'יר" },
    currency: { code: "DZD", symbol: "DA", nameHe: "דִּינָר אַלְגִ'רִי" },
    languages: [{ he: "עֲרָבִית" }, { he: "בֶּרְבֶּרִית" }],
    population: { value: 46000000, year: 2024 },
    representative: {
      emoji: "🏜️",
      titleHe: "מִדְבַּר הַסַּהֲרָה",
      descriptionHe:
        "כ-80% מִשִּׁטְחָהּ שֶׁל אַלְגִ'רְיָה הוּא מִדְבַּר סַהֲרָה. הַסַּהֲרָה הוּא הַמִּדְבָּר הַחַם הַגָּדוֹל בְּיוֹתֵר בָּעוֹלָם.",
    },
    funFactHe:
      "אַלְגִ'ירְיָה הִיא הַמְּדִינָה הַגְּדוֹלָה בְּיוֹתֵר בְּאַפְרִיקָה — שִׁטְחָהּ גָּדוֹל מִשִּׁטְחָהּ שֶׁל צָרְפַת פִּי אַרְבַּע בְּעֵרֶךְ!",
    hello: { text: "مرحبا", pronunciationHe: "מַרְחַבָּה" },
  },

  {
    code: "CD",
    nameEn: "DR Congo",
    nameHe: "קוֹנְגּוֹ הַדֵּמוֹקְרָטִית",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Kinshasa", he: "קִינְשָׁסָה" },
    currency: { code: "CDF", symbol: "FC", nameHe: "פְּרַנְק קוֹנְגוֹלֵזִי" },
    languages: [{ he: "צָרְפָתִית" }, { he: "לִינְגָּלָה" }],
    population: { value: 102000000, year: 2024 },
    representative: {
      emoji: "🦍",
      titleHe: "הַגּוֹרִילָּה הָהָרִית",
      descriptionHe:
        "הַגּוֹרִילָּה הָהָרִית חַיָּה בְּיַעֲרוֹת קוֹנְגּוֹ. הִיא גְּדוֹלָה, חֲזָקָה, וְחַיָּה בְּמִשְׁפָּחוֹת.",
    },
    funFactHe:
      "קוֹנְגּוֹ מְכִילָה אֶת יַעַר הַגֶּשֶׁם הַשֵּׁנִי בְּגֹדְלוֹ בָּעוֹלָם אַחֲרֵי הָאָמָזוֹן — הוּא בֵּית לְגוֹרִילּוֹת, בּוֹנוֹבּוֹאִים וְאוֹקַפִּיוֹת.",
    hello: { text: "Mbote", pronunciationHe: "מְבוֹטֶה" },
  },

  {
    code: "UG",
    nameEn: "Uganda",
    nameHe: "אוּגַנְדָּה",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Kampala", he: "קַמְפָּאלָה" },
    currency: { code: "UGX", symbol: "USh", nameHe: "שִׁילִינְג אוּגַנְדִּי" },
    languages: [{ he: "אַנְגְּלִית" }, { he: "סְוָואהִילִי" }],
    population: { value: 48000000, year: 2024 },
    representative: {
      emoji: "🦍",
      titleHe: "גּוֹרִילּוֹת הָהָר",
      descriptionHe:
        "אוּגַנְדָּה הִיא אַחַד הַמְּקוֹמוֹת הַבּוֹדְדִים בָּעוֹלָם שֶׁבָּהֶם אֶפְשָׁר לִרְאוֹת גּוֹרִילּוֹת הָהָר בְּטֶבַע — כ-500 מֵהֶן חַיּוֹת בְּהָרֵי בְּוִינְדִי.",
    },
    funFactHe:
      "מְקוֹר נְהַר הַנִּילוסוס— הַנָּהָר הָאָרֹךְ בְּיוֹתֵר בָּעוֹלָם — הוּא בְּאוּגַנְדָּה, בְּאֲגַם וִיקְטוֹרְיָה. מִשָּׁם הַנָּהָר זוֹרֵם צָפוֹנָה 6,650 ק\"מ עַד מִצְרַיִם!",
    hello: { text: "Oli otya", pronunciationHe: "אוֹלִי אוֹטְיָה" },
  },

  {
    code: "TN",
    nameEn: "Tunisia",
    nameHe: "תּוּנִיסְיָה",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Tunis", he: "תּוּנִיס" },
    currency: { code: "TND", symbol: "DT", nameHe: "דִּינָר תּוּנִיסָאִי" },
    languages: [{ he: "עֲרָבִית" }],
    population: { value: 12000000, year: 2024 },
    representative: {
      emoji: "🏛️",
      titleHe: "קַרְתָּגוֹ הָעַתִּיקָה",
      descriptionHe:
        "קַרְתָּגוֹ, קָרוֹב לְתּוּנִיס הַמּוֹדֶרְנִית, הָיְתָה אַחַת הֶעָרִים הַגְּדוֹלוֹת בָּעַת הָעַתִּיקָה — יָרִיבָה רוֹמָא בַּשִּׁלְטוֹן עַל הַיָּם הַתִּיכוֹן.",
    },
    funFactHe:
      "בְּאִי גֶּרְבָּה שֶׁבְּתוּנִיסְיָה יֵשׁ קְהִלָּה יְהוּדִית עַתִּיקָה, וּבֵית כְּנֶסֶת 'אֶל־גְרִיבָּה' שֶׁעוֹמֵד מֵאוֹת שָׁנִים.",
    hello: { text: "أهلاً", pronunciationHe: "אַהְלַן" },
  },

  {
    code: "CM",
    nameEn: "Cameroon",
    nameHe: "קָמֶרוּן",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Yaoundé", he: "יָאוּנְדֵה" },
    currency: { code: "XAF", symbol: "Fr", nameHe: "פְּרַנְק CFA" },
    languages: [{ he: "צָרְפָתִית" }, { he: "אַנְגְּלִית" }],
    population: { value: 28000000, year: 2024 },
    representative: {
      emoji: "🦁",
      titleHe: "כָּל סוּגֵי הַנּוֹף",
      descriptionHe:
        "בְּקָמֶרוּן יֵשׁ מִדְבָּר, יַעַר גֶּשֶׁם, סָוַואנָה, הָרִים, חוֹף וּנְהָרוֹת — כָּל סוּגֵי הַנּוֹף שֶׁל אַפְרִיקָה.",
    },
    funFactHe:
      "הַר קָמֶרוּן (4,095 מֶטֶר) הוּא הָהָר הַגָּבוֹהַּ בְּיוֹתֵר בְּמַעֲרַב אַפְרִיקָה — וְהוּא גַּם הַר גְּעָשׁ פָּעִיל! הוּא התְפָּרֵץ לַאַחֲרוֹנָה בְּשָׁנַת 2000.",
    hello: { text: "Bonjour", pronunciationHe: "בּוֹנְזׁ'וּר" },
  },

  {
    code: "SN",
    nameEn: "Senegal",
    nameHe: "סֶנֶגַל",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Dakar", he: "דָּאקָר" },
    currency: { code: "XOF", symbol: "Fr", nameHe: "פְּרַנְק CFA מַעֲרָב אַפְרִיקָאִי" },
    languages: [{ he: "צָרְפָתִית" }, { he: "וּוֹלוֹף" }],
    population: { value: 17000000, year: 2024 },
    representative: {
      emoji: "🌳",
      titleHe: "עֵץ הַבַּאוֹבַּב",
      descriptionHe:
        "הַבַּאוֹבַּב הוּא עֵץ עֲנָקִי הַנִּקְרָא 'עֵץ הַחַיִּים' — גִּזְעוֹ הָעָבֶה מְאַחְסֵן מַיִם, וְהוּא יָכוֹל לִחְיוֹת אַלְפֵי שָׁנִים.",
    },
    funFactHe:
      "בְּסֶנֶגַל יֵשׁ אֲגַם וָרוֹד! הַמַּיִם נִרְאִים וְּרוֹדִים בִּגְלַל מֶלַח וִיצוּרִים קְטַנִּים שֶׁחַיִּים בָּהֶם.",
    hello: { text: "Na nga def", pronunciationHe: "נָה נָגַה דֶף" },
  },

  {
    code: "RW",
    nameEn: "Rwanda",
    nameHe: "רְוַואנְדָה",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Kigali", he: "קִיגַּלִי" },
    currency: { code: "RWF", symbol: "Fr", nameHe: "פְּרַנְק רְוַואנְדִי" },
    languages: [{ he: "קִינְיַרְוַואנְדָה" }, { he: "אַנְגְּלִית" }, { he: "צָרְפָתִית" }],
    population: { value: 14000000, year: 2024 },
    representative: {
      emoji: "🦍",
      titleHe: "גּוֹרִילּוֹת הָהָר",
      descriptionHe:
        "רְוַואנְדָה הִיא אַחַד הַמְּקוֹמוֹת הַבּוֹדְדִים בָּעוֹלָם שֶׁאֶפְשָׁר לִפְגֹּשׁ גּוֹרִילּוֹת הָהָר בְּטֶבַע — כ-600 מֵהֶן חַיּוֹת בְּיַעֲרוֹת הַגְּבוּל.",
    },
    funFactHe:
      "רְוַואנְדָה הִיא מֵהַמְּדִינוֹת הַנְּקִיּוֹת בְּאַפְרִיקָה. פַּעַם בַּחֹדֶשׁ כָּל הָאֲנָשִׁים יוֹצְאִים לְנַקּוֹת אֶת הָרְחוֹבוֹת.",
    hello: { text: "Muraho", pronunciationHe: "מוּרָהוֹ" },
  },

  {
    code: "NA",
    nameEn: "Namibia",
    nameHe: "נָמִיבְּיָה",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Windhoek", he: "וִינְדְּהוּק" },
    currency: { code: "NAD", symbol: "$", nameHe: "דּוֹלָר נָמִיבִּי" },
    languages: [{ he: "אַנְגְּלִית" }],
    population: { value: 2700000, year: 2024 },
    representative: {
      emoji: "🐘",
      titleHe: "פִּילֵי מִדְבָּר",
      descriptionHe:
        "בְּנָמִיבְּיָה חַיִּים פִּילֵי מִדְבָּר — פִּילִים שֶׁלָּמְדוּ לִחְיוֹת בְּמָקוֹם יָבֵשׁ מְאֹד.",
    },
    funFactHe:
      "נָמִיבְּיָה הִיא מֵהַמְּדִינוֹת הַדְּלִילוֹת בְּאֻכְלוּסִין — כְּ-3 נְפָשׁוֹת לְקִילוֹמֶטֶר מְרֻבָּע. חַיִּים שָׁם כַּלְבֵּי יָם, פִּילֵי מִדְבָּר וּצְבָאִים.",
    hello: { text: "Hallo", pronunciationHe: "הָאלּוֹ" },
  },

  {
    code: "ZW",
    nameEn: "Zimbabwe",
    nameHe: "זִימְבַּבְּוֶה",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Harare", he: "הֲרָרֵה" },
    currency: { code: "ZWG", symbol: "ZiG", nameHe: "זָהָב זִימְבַּבְּוִי" },
    languages: [{ he: "אַנְגְּלִית" }, { he: "שׁוֹנָה" }, { he: "נְדֶבֶּלֶה" }],
    population: { value: 16000000, year: 2024 },
    representative: {
      emoji: "💧",
      titleHe: "מְפַלֵּי וִיקְטוֹרְיָה",
      descriptionHe:
        "מְפַלֵּי וִיקְטוֹרְיָה עַל גְּבוּל זִימְבַּבְּוֶה–זַמְבְּיָה הֵם הַמַּפָּל הַגָּדוֹל בְּיוֹתֵר בָּעוֹלָם לְפִי שִׁטְחוֹ — 1,708 מֶטֶר רֹחַב! הַקּוֹל שֶׁלָּהֶם נִשְׁמָע מ-40 ק\"מ רָחוֹק.",
    },
    funFactHe:
      "שֵׁם זִימְבַּבְּוֶה פֵּרוּשׁוֹ 'בֵּית אֶבֶן'. יֵשׁ שָׁם חָרָבוֹת שֶׁל עִיר עַתִּיקָה שֶׁנִּבְנְתָה מֵאֲבָנִים גְּדוֹלוֹת — בְּלִי מֶלֶט.",
    hello: { text: "Mhoroi", pronunciationHe: "מְהוֹרוֹיִ" },
  },

  {
    code: "CI",
    nameEn: "Ivory Coast",
    nameHe: "חוֹף הַשְּׁנַהָב",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Yamoussoukro", he: "יָמוּסוּקְרוֹ" },
    currency: { code: "XOF", symbol: "Fr", nameHe: "פְּרַנְק CFA מַעֲרָב אַפְרִיקָאִי" },
    languages: [{ he: "צָרְפָתִית" }],
    population: { value: 27000000, year: 2024 },
    representative: {
      emoji: "🍫",
      titleHe: "עֵץ הַקָּקָאוֹ",
      descriptionHe:
        "חוֹף הַשְּׁנַהָב הִיא יַצְרָנִית הַקָּקָאוֹ הַגְּדוֹלָה בְּיוֹתֵר בָּעוֹלָם — כ-40% מִכָּל הַקָּקָאוֹ בָּעוֹלָם גָּדֵל שָׁם.",
    },
    funFactHe:
      "יֵשׁ שָׁם יְעָרוֹת טְרוֹפִּיִּים וְחוֹף אָרֹךְ עַל הָאוֹקְיָינוֹס. הַמְּדִינָה נִקְרֵאת כָּךְ כִּי פַּעַם הוֹצִיאוּ מִשָּׁם שְׁנַהָב — שֵׁן שֶׁל פִּיל.",
    hello: { text: "Bonjour", pronunciationHe: "בּוֹנְזׁ'וּר" },
  },

  {
    code: "AO",
    nameEn: "Angola",
    nameHe: "אַנְגּוֹלָה",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Luanda", he: "לוּאַנְדָּה" },
    currency: { code: "AOA", symbol: "Kz", nameHe: "קְוַוַנְזָה אַנְגּוֹלִי" },
    languages: [{ he: "פּוֹרְטוּגָלִית" }],
    population: { value: 34000000, year: 2024 },
    representative: {
      emoji: "💎",
      titleHe: "יְהָלוֹמִים וְנֶפְט",
      descriptionHe:
        "אַנְגּוֹלָה הִיא אַחַת הַמְּדִינוֹת הָעֲשִׁירוֹת בְּמַשְׁאָבִים בְּאַפְרִיקָה — נֶפְט בְּחֵיק הַיָּם וְיְהָלוֹמִים בְּמַעֲמַקֵּי הָאֲדָמָה.",
    },
    funFactHe:
      "אַנְגּוֹלָה הָיְתָה מוּשְׁבָה פּוֹרְטוּגָלִית עַד 1975 — לָכֵן הִיא הַמְּדִינָה הַפּוֹרְטוּגָלִית-דּוֹבֶרֶת הַגְּדוֹלָה בְּיוֹתֵר בְּאַפְרִיקָה. הַנָּהָר קוֹנְגוֹ, הָעָמֹק בְּיוֹתֵר בָּעוֹלָם, עוֹבֵר בְּגְּבוּלָהּ.",
    hello: { text: "Olá", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "SD",
    nameEn: "Sudan",
    nameHe: "סוּדָן",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Khartoum", he: "חַרְטוּם" },
    currency: { code: "SDG", symbol: "LS", nameHe: "פּוּנְט סוּדָנִי" },
    languages: [{ he: "עֲרָבִית" }],
    population: { value: 46000000, year: 2024 },
    representative: {
      emoji: "🏛️",
      titleHe: "פִּירָמִידוֹת הַנּוּבִּים",
      descriptionHe:
        "לְסוּדָן יֵשׁ יוֹתֵר פִּירָמִידוֹת מִמִּצְרַיִם — כ-200 פִּירָמִידוֹת נוּבִּיּוֹת שֶׁל מַמְלֶכֶת כּוּשׁ הָעַתִּיקָה. הֵן צָרוֹת וְתְּלוּלוֹת יוֹתֵר מֵהַמִּצְרִיּוֹת.",
    },
    funFactHe:
      "מַמְלֶכֶת כּוּשׁ הַנּוּבִּית שָׁלְטָה בַּמִּצְרַיִם עַצְמָהּ בְּמֶשֶׁךְ כ-100 שָׁנָה (סְבִיב 770–660 לִפְנֵי הַסְּפִירָה) — פַּרְעוֹנִים שְׁחוֹרִים שָׁלְטוּ בְּמִצְרַיִם!",
    hello: { text: "مرحبا", pronunciationHe: "מַרְחַבָּה" },
  },

  {
    code: "ZM",
    nameEn: "Zambia",
    nameHe: "זַמְבְּיָה",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Lusaka", he: "לוּסַקָה" },
    currency: { code: "ZMW", symbol: "ZK", nameHe: "קְוַוַצ'ָה זַמְבִּי" },
    languages: [{ he: "אַנְגְּלִית" }],
    population: { value: 20000000, year: 2024 },
    representative: {
      emoji: "💧",
      titleHe: "מְפַלֵּי וִיקְטוֹרְיָה",
      descriptionHe:
        "מִצַּד זַמְבְּיָה אֶפְשָׁר לִרְאוֹת אֶת מְפַלֵּי וִיקְטוֹרְיָה מִלְּמַעְלָה — מַיִם שׁוֹצְפִים וְנוֹפְלִים אֶל הַתְּהוֹם.",
    },
    funFactHe:
      "שְׁמָהּ שֶׁל זַמְבְּיָה בָּא מִנְּהַר זַמְבֵּזִי. בְּרֹב הַמְּדִינָה יֵשׁ סָוַואנָה — מִישׁוֹרִים עִם עֵצִים פְּזוּרִים וְחַיּוֹת בָּר.",
    hello: { text: "Muli bwanji", pronunciationHe: "מוּלִי בְּוַאנְג'ִי" },
  },

  {
    code: "BW",
    nameEn: "Botswana",
    nameHe: "בּוֹצְוַאנָה",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Gaborone", he: "גַּבּוֹרוֹנֵה" },
    currency: { code: "BWP", symbol: "P", nameHe: "פּוּלָה בּוֹצְוַאנִי" },
    languages: [{ he: "אַנְגְּלִית" }, { he: "סֶצְוַואנָה" }],
    population: { value: 2600000, year: 2024 },
    representative: {
      emoji: "🐘",
      titleHe: "דֶּלְטַת אוֹקָוַוַנְגוֹ",
      descriptionHe:
        "דֶּלְטַת אוֹקָוַוַנְגוֹ הִיא נֵס טֶבַע — נָהָר שֶׁזּוֹרֵם אֶל תּוֹךְ הַמִּדְבָּר וְיוֹצֵר גַּן עֵדֶן לְפִילִים, אֲרָיוֹת, קַרְנָפִים וַּאֲגַמִּים!",
    },
    funFactHe:
      "בּוֹצְוַאנָה הִיא הַמְּדִינָה עִם הָאוּכְלוֹסִיַּת פִּילִים הַגְּדוֹלָה בְּיוֹתֵר בָּעוֹלָם — כ-130,000 פִּילִים! גַּם יְהָלוֹמִים מֵהַנּוֹקִים שֶׁלָּהּ הֵם מֵהַטּוֹבִים בָּעוֹלָם.",
    hello: { text: "Dumela", pronunciationHe: "דוּמֶלָה" },
  },

  // ── עוֹד מדינות אָמֶרִיקָה הַדְּרוֹמִית ────────────────────────────────

  {
    code: "PE",
    nameEn: "Peru",
    nameHe: "פֶּרוּ",
    continent: "South America",
    continentHe: "אָמֶרִיקָה הַדְּרוֹמִית",
    capital: { en: "Lima", he: "לִימָה" },
    currency: { code: "PEN", symbol: "S/.", nameHe: "סוֹל פֵּרוּאָנִי" },
    languages: [{ he: "סְפָרַדִּית" }, { he: "קֶצ'וּאָה" }],
    population: { value: 33000000, year: 2024 },
    representative: {
      emoji: "🦙",
      titleHe: "לָמָה",
      descriptionHe:
        "הַלָּמָה הִיא חַיַּת מָשָׂא שֶׁשָּׁמְשָׁה אֶת עַם הָאִינְקָה בָּהָרִים לָלֶכֶת אֲלַפֵּי שָׁנִים. הַיּוֹם הִיא סֵמֶל פֶּרוּ הַמּוּכָּר בְּיוֹתֵר.",
    },
    funFactHe:
      "הַבַּטָּטָה וְהַתַּפּוּחַ אֲדָמָה שֶׁאֲנַחְנוּ אוֹכְלִים נוֹלְדוּ בְּפֶּרוּ — אַנְשֵׁי הָאִינְקָה גִּדְּלוּ אוֹתָם בְּהָרִים בְּגוֹבַה 4,000 מֶטֶר לִפְנֵי אַלְפֵּי שָׁנִים!",
    hello: { text: "Hola", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "CL",
    nameEn: "Chile",
    nameHe: "צ'ִילֵה",
    continent: "South America",
    continentHe: "אָמֶרִיקָה הַדְּרוֹמִית",
    capital: { en: "Santiago", he: "סַנְטְיָאגוֹ" },
    currency: { code: "CLP", symbol: "$", nameHe: "פֶּסוֹ צ'ִילֵאָנִי" },
    languages: [{ he: "סְפָרַדִּית" }],
    population: { value: 19600000, year: 2024 },
    representative: {
      emoji: "🌋",
      titleHe: "הָהָרִים וְהָאֲגָמִים",
      descriptionHe:
        "צ'ִילֵה מַשְׁתָּרַעַת לְאֹרֶךְ רָצוּעָה צָרָה בֵּין הָאַנְדִּים לַיָּם — יֵשׁ בָּהּ קְרָחוֹנִים, לָבָה וּמִדְבָּר כְּתֻמִים, הַכֹּל בְּמְדִינָה אַחַת.",
    },
    funFactHe:
      "צ'ִילֵה הִיא הַמְּדִינָה הָאֲרֻכָּה וְהַצָּרָה בְּיוֹתֵר בָּעוֹלָם — 4,300 ק\"מ מִצָּפוֹן לְדָרוֹם אַךְ רַק 175 ק\"מ רֹחַב בְּמֶמּוּצָע!",
    hello: { text: "Hola", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "CO",
    nameEn: "Colombia",
    nameHe: "קוֹלוֹמְבִּיָּה",
    continent: "South America",
    continentHe: "אָמֶרִיקָה הַדְּרוֹמִית",
    capital: { en: "Bogotá", he: "בּוֹגוֹטָה" },
    currency: { code: "COP", symbol: "$", nameHe: "פֶּסוֹ קוֹלוֹמְבִּיָּאנִי" },
    languages: [{ he: "סְפָּרַדִּית" }],
    population: { value: 52200000, year: 2024 },
    representative: {
      emoji: "☕",
      titleHe: "קָפֶה קוֹלוֹמְבִּיָּאנִי",
      descriptionHe:
        "קוֹלוֹמְבִּיָּה מְפֻרְסֶמֶת בְּקָפֶה שֶׁלָּהּ הַמְּעֻלֶּה. פַּרְחֵי הַקָּפֶה הַלְּבָנִים פּוֹרְחִים פַּעֲמַיִם בַּשָּׁנָה בְּזְכוּת הַאַקְלִים הַמְּיֻחָד שֶׁל הָהָרִים.",
    },
    funFactHe:
      "לְקוֹלוֹמְבִּיָּה יֵשׁ חוֹף גַּם לָאוֹקְיָינוֹס הַשָּׁקֵט וְגַם לְיָם הַקָּרִיבִּי.",
    hello: { text: "Hola", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "EC",
    nameEn: "Ecuador",
    nameHe: "אֶקְוָדוֹר",
    continent: "South America",
    continentHe: "אָמֶרִיקָה הַדְּרוֹמִית",
    capital: { en: "Quito", he: "קִיטוֹ" },
    currency: { code: "USD", symbol: "$", nameHe: "דּוֹלָר אָמֶרִיקָאִי" },
    languages: [{ he: "סְפָּרַדִּית" }],
    population: { value: 18000000, year: 2024 },
    representative: {
      emoji: "🐢",
      titleHe: "צַב הַגָּלַפָּגוֹס",
      descriptionHe:
        "אִיֵּי גָּלַפָּגוֹס שֶׁל אֶקְוָדוֹר הֵם בֵּית לְצַבִּים עֲנָקִיִּים שֶׁיְּכוֹלִים לִחְיוֹת מֵאָה וְחַמִּשִּׁים שָׁנָה!",
    },
    funFactHe:
      "אִיֵּי גָּלַפָּגוֹס שֶׁל אֶקְוָדוֹר נִמְצָאִים מַמָּשׁ עַל קוֹ הָרֹחַב — וְיֵשׁ שָׁם בַּעֲלֵי חַיִּים שֶׁלֹּא תִּמְצָא בְּשׁוּם מָקוֹם אַחֵר.",
    hello: { text: "Hola", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "BO",
    nameEn: "Bolivia",
    nameHe: "בּוֹלִיבְיָה",
    continent: "South America",
    continentHe: "אָמֶרִיקָה הַדְּרוֹמִית",
    capital: { en: "Sucre", he: "סוּקְרֶה" },
    currency: { code: "BOB", symbol: "Bs.", nameHe: "בּוֹלִיבְיָאנוֹ" },
    languages: [{ he: "סְפָּרַדִּית" }, { he: "קֶ'צ'וּאָה" }],
    population: { value: 12400000, year: 2024 },
    representative: {
      emoji: "🧂",
      titleHe: "סָלָאר דֶה אוּיוּנִי",
      descriptionHe:
        "מִישׁוֹר הַמֶּלַח שֶׁל בּוֹלִיבְיָה הוּא הַגָּדוֹל בָּעוֹלָם — אַחֲרֵי גֶּשֶׁם הוּא נִהְיֶה כְּמַרְאָה עֲנָקִית שֶׁמְּשַׁקֶּפֶת אֶת הַשָּׁמַיִם.",
    },
    funFactHe:
      "לָה פָּז שֶׁבְּבּוֹלִיבְיָה הִיא הַבִּירָה הַשִּׁלְטוֹנִית הַגְּבוֹהָה בְּיוֹתֵר בָּעוֹלָם — הִיא יוֹשֶׁבֶת עַל גֹּבַהּ 3,640 מֶטְרִים מֵעַל פְּנֵי הַיָּם!",
    hello: { text: "Hola", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "VE",
    nameEn: "Venezuela",
    nameHe: "וֶנֶצְוֵאלָה",
    continent: "South America",
    continentHe: "אָמֶרִיקָה הַדְּרוֹמִית",
    capital: { en: "Caracas", he: "קָרָקָס" },
    currency: { code: "VES", symbol: "Bs.", nameHe: "בּוֹלִיבָר וֶנֶצְוֵאלִי" },
    languages: [{ he: "סְפָּרַדִּית" }],
    population: { value: 28000000, year: 2024 },
    representative: {
      emoji: "💧",
      titleHe: "מַפְּלֵי אַנְחַל",
      descriptionHe:
        "מַפְּלֵי אַנְחַל הֵם הַמַּפָּל הַגָּבוֹהַּ בְּיוֹתֵר בָּעוֹלָם — 979 מֶטֶר. הַמַּיִם צוֹנְחִים מֵרֹאשׁ הָהָר עַד הָעֵמֶק.",
    },
    funFactHe:
      "בְּוֶנֶצְוֵאלָה יֵשׁ הָרִים שֶׁרֹאשָׁם שָׁטוּחַ כְּמוֹ שֻׁלְחָן. קוֹרְאִים לָהֶם טֶפּוּי.",
    hello: { text: "Hola", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "UY",
    nameEn: "Uruguay",
    nameHe: "אוּרוּגְוַאי",
    continent: "South America",
    continentHe: "אָמֶרִיקָה הַדְּרוֹמִית",
    capital: { en: "Montevideo", he: "מוֹנְטֵוִידֵאוֹ" },
    currency: { code: "UYU", symbol: "$", nameHe: "פֶּסוֹ אוּרוּגְוַאי" },
    languages: [{ he: "סְפָּרַדִּית" }],
    population: { value: 3500000, year: 2024 },
    representative: {
      emoji: "🐄",
      titleHe: "פָּרוֹת",
      descriptionHe:
        "בְּאוּרוּגְוַאי יֵשׁ יוֹתֵר פָּרוֹת מִבְּנֵי אָדָם! רֹב הַמְּדִינָה מִישׁוֹרִים יְרֻקִּים.",
    },
    funFactHe:
      "אוּרוּגְוַאי הִיא מֵהַמְּדִינוֹת הַקְּטַנּוֹת בְּאָמֶרִיקָה הַדְּרוֹמִית, וְיֵשׁ לָהּ חוֹף אָרֹךְ עַל הָאוֹקְיָינוֹס.",
    hello: { text: "Hola", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "PY",
    nameEn: "Paraguay",
    nameHe: "פָּרַגְוַאי",
    continent: "South America",
    continentHe: "אָמֶרִיקָה הַדְּרוֹמִית",
    capital: { en: "Asunción", he: "אַסוּנְסְיוֹן" },
    currency: { code: "PYG", symbol: "₲", nameHe: "גְּוָארָנִי פָּרַגְוַאִי" },
    languages: [{ he: "סְפָּרַדִּית" }, { he: "גְּוָארָנִי" }],
    population: { value: 7400000, year: 2024 },
    representative: {
      emoji: "🎸",
      titleHe: "הַנֵּבֶל הַפָּרַגְוַאִי",
      descriptionHe:
        "פָּרַגְוַאי מְפֻרְסֶמֶת בְּנֵבֶל — זֶהוּ כְּלִי הַנְּגִינָה הַלְּאֻמִּי שֶׁלָּהּ.",
    },
    funFactHe:
      "פָּרַגְוַאי הִיא אַחַת הַמְּדִינוֹת הַבּוֹדְדוֹת בְּאָמֶרִיקָה שֶׁבָּהּ שָׂפָה יְלִידִית — גְּוָארָנִי — הִיא שָׂפָה רִשְׁמִית לְצַד סְפָּרַדִּית, וְרֹב הָאוּכְלוֹסִיָּה מְדַבֶּרֶת אוֹתָהּ!",
    hello: { text: "Mba'éichapa", pronunciationHe: "מְבַּאֵיצ'אָפָּה" },
  },

  {
    code: "GY",
    nameEn: "Guyana",
    nameHe: "גַּיָאנָה",
    continent: "South America",
    continentHe: "אָמֶרִיקָה הַדְּרוֹמִית",
    capital: { en: "Georgetown", he: "גֵ'וֹרְג'טַאוּן" },
    currency: { code: "GYD", symbol: "$", nameHe: "דּוֹלָר גַּיָאנִי" },
    languages: [{ he: "אַנְגְּלִית" }],
    population: { value: 800000, year: 2024 },
    representative: {
      emoji: "💧",
      titleHe: "מְפַל קָאיֶטוּר",
      descriptionHe:
        "מְפַל קָאיֶטוּר נוֹשֵׂר לְגֹבַהּ 226 מֶטֶר בְּתוֹךְ יַעַר גֶּשֶׁם פְּרִימִיטִיבִי — הוּא הַמַּפָּל הַחָזָק בְּיוֹתֵר בָּעוֹלָם לְפִי נְפַח מַיִם לְיִחִידַת רֹחַב.",
    },
    funFactHe:
      "גַּיָאנָה הִיא הַמְּדִינָה הַדְּרוֹם-אָמֶרִיקָאִית הַיְּחִידָה שֶׁאַנְגְּלִית הִיא שְׂפָתָהּ הָרִשְׁמִית — מִשּׁוּם שֶׁהָיְתָה מוּשְׁבָּה בְּרִיטִית. יוֹתֵר מ-80% מִשִּׁטְחָהּ מְכֻסֶּה יַעַר גֶּשֶׁם!",
    hello: { text: "Hello", pronunciationHe: "הֶלּוֹ" },
  },

  // ── אוֹקְיָינוּסְיָה ──────────────────────────────────────────────────────

  {
    code: "AU",
    nameEn: "Australia",
    nameHe: "אוֹסְטְרַלְיָה",
    continent: "Oceania",
    continentHe: "אוֹקְיָינוּסְיָה",
    capital: { en: "Canberra", he: "קַנְבֵּרָה" },
    currency: { code: "AUD", symbol: "$", nameHe: "דּוֹלָר אוֹסְטְרַלִי" },
    languages: [{ he: "אַנְגְּלִית" }],
    population: { value: 26500000, year: 2024 },
    representative: {
      emoji: "🦘",
      titleHe: "קֶנְגּוּרוּ",
      descriptionHe:
        "הַקֶּנְגּוּרוּ חַי רַק בְּאוֹסְטְרַלְיָה. הַנְּקֵבָה נוֹשֵׂאת אֶת הַגּוּר בְּכִיס עַל הַבֶּטֶן — וְיֵשׁ שָׁם יוֹתֵר קֶנְגּוּרוּאִים מֵאֲנָשִׁים.",
    },
    funFactHe:
      "אוֹסְטְרַלְיָה הִיא גַּם מְדִינָה וְגַם יַבֶּשֶׁת שְׁלֵמָה. כְּשֶׁבָּאָרֶץ חֹרֶף — שָׁם קַיִץ.",
    hello: { text: "G'day", pronunciationHe: "גְּדֵיי" },
  },

  {
    code: "NZ",
    nameEn: "New Zealand",
    nameHe: "נְיוּ זִילַנְד",
    continent: "Oceania",
    continentHe: "אוֹקְיָינוּסְיָה",
    capital: { en: "Wellington", he: "וֶלִינְגְטוֹן" },
    currency: { code: "NZD", symbol: "$", nameHe: "דּוֹלָר נְיוּ-זִילַנְדִּי" },
    languages: [{ he: "אַנְגְּלִית" }, { he: "מָאוֹרִית" }],
    population: { value: 5100000, year: 2024 },
    representative: {
      emoji: "🥝",
      titleHe: "עוֹף הַקִּיוִי",
      descriptionHe:
        "הַקִּיוִי הוּא עוֹף לֵילִי קָטָן שֶׁאֵינוֹ יָכוֹל לָעוּף — הוּא סֵמֶל לְאוּמִי שֶׁל נְיוּ זִילַנְד, וְהַתּוֹשָׁבִים מְכַנִּים אֶת עַצְמָם 'קִיוִיז'.",
    },
    funFactHe:
      "נְיוּ זִילַנְד בְּנוּיָה מִשְּׁנֵי אִיִּים גְּדוֹלִים — הָאִי הַצְּפוֹנִי וְהָאִי הַדְּרוֹמִי. יֵשׁ שָׁם גַּם יוֹתֵר כְּבָשִׂים מִבְּנֵי אָדָם.",
    hello: { text: "Kia ora", pronunciationHe: "קִיָה אוֹרָה" },
  },

  {
    code: "PG",
    nameEn: "Papua New Guinea",
    nameHe: "פָּפּוּאָה גִינֵאָה הַחֲדָשָׁה",
    continent: "Oceania",
    continentHe: "אוֹקְיָינוּסְיָה",
    capital: { en: "Port Moresby", he: "פּוֹרְט מוֹרֶסְבִּי" },
    currency: { code: "PGK", symbol: "K", nameHe: "קִינָה" },
    languages: [{ he: "אַנְגְּלִית" }, { he: "טוֹק פִּיסִין" }],
    population: { value: 10000000, year: 2024 },
    representative: {
      emoji: "🦜",
      titleHe: "צִפּוֹר גַּן הָעֵדֶן",
      descriptionHe:
        "צִפּוֹר גַּן הָעֵדֶן הִיא עוֹף צִבְעוֹנִי מַדְהִים שֶׁחַי בַּיְּעָרוֹת. נוֹצוֹתֶיהָ נִרְאוֹת כְּמוֹ מַחֲזֵה טֶבַע.",
    },
    funFactHe:
      "פָּפּוּאָה גִינֵאָה הַחֲדָשָׁה הִיא הַמְּדִינָה בַּעֲלַת הַשָּׂפוֹת הַמְּגֻוָּנוֹת בְּיוֹתֵר בָּעוֹלָם — יֵשׁ שָׁם יוֹתֵר מ-800 שָׂפוֹת שׁוֹנוֹת, כ-10% מִכָּל שָׂפוֹת הָעוֹלָם!",
    hello: { text: "Gude", pronunciationHe: "גּוּדֵה" },
  },

  {
    code: "FJ",
    nameEn: "Fiji",
    nameHe: "פִיגִ'י",
    continent: "Oceania",
    continentHe: "אוֹקְיָינוּסְיָה",
    capital: { en: "Suva", he: "סוּוָה" },
    currency: { code: "FJD", symbol: "$", nameHe: "דּוֹלָר פִיגִ'יִי" },
    languages: [{ he: "אַנְגְּלִית" }, { he: "פִיגִ'יִית" }],
    population: { value: 930000, year: 2024 },
    representative: {
      emoji: "🏝️",
      titleHe: "אִיֵּי הַגַּן הַטְּרוֹפִּי",
      descriptionHe:
        "פִיגִ'י הִיא אַרְכִּיפֶּלָג שֶׁל 333 אִיִּים בָּאוֹקְיָינוֹס הַשָּׁקֵט. מֵימֶיהָ הַכְּחֻלִּים וְחוֹפֶיהָ הַלְּבָנִים מוֹשְׁכִים תַּיָּירִים מִכָּל הָעוֹלָם.",
    },
    funFactHe:
      "הַמִּלָּה 'בּוּלָה' בְּשָׂפַת פִיגִ'י פֵּרוּשָׁהּ גַּם 'שָׁלוֹם' וְגַּם 'חַיִּים' — הַתּוֹשָׁבִים אוֹמְרִים אוֹתָהּ בְּשִׂמְחָה רַבָּה לְכָל אוֹרֵחַ שֶׁמַּגִּיעַ!",
    hello: { text: "Bula", pronunciationHe: "בּוּלָה" },
  },

  {
    code: "WS",
    nameEn: "Samoa",
    nameHe: "סָמוֹאָה",
    continent: "Oceania",
    continentHe: "אוֹקְיָינוּסְיָה",
    capital: { en: "Apia", he: "אָפִּיָה" },
    currency: { code: "WST", symbol: "T", nameHe: "טָאלָה סָמוֹאִי" },
    languages: [{ he: "סָמוֹאִית" }, { he: "אַנְגְּלִית" }],
    population: { value: 220000, year: 2024 },
    representative: {
      emoji: "🌺",
      titleHe: "הַמִּשְׁפָּחָה וְהַכְּפָר",
      descriptionHe:
        "בְּסָמוֹאָה הַחַיִּים סְבִיב הַמִּשְׁפָּחָה וְהַכְּפָר. כָּל כְּפָר שׁוֹמֵר עַל הַמָּסֹרֶת שֶׁלּוֹ.",
    },
    funFactHe:
      "סָמוֹאָה קָפְצָה צַד שֶׁל קַו הַתַּאֲרִיךְ הַבֵּינְלְאֻמִּי בְּ-2011 — וְדִלְּגָה עַל יוֹם שָׁלֵם (30 בְּדֶצֶמְבֶּר) כְּדֵי לִהְיוֹת מְסוּנְכֶּרֶנֶת עִם אוֹסְטְרַלְיָה וּנְיוּ זִילַנְד!",
    hello: { text: "Talofa", pronunciationHe: "טָלוֹפָה" },
  },

  {
    code: "TO",
    nameEn: "Tonga",
    nameHe: "טוֹנְגָה",
    continent: "Oceania",
    continentHe: "אוֹקְיָינוּסְיָה",
    capital: { en: "Nuku'alofa", he: "נוּקוּאָלוֹפָה" },
    currency: { code: "TOP", symbol: "T$", nameHe: "פַּאאַנְגָה טוֹנְגִי" },
    languages: [{ he: "טוֹנְגִית" }, { he: "אַנְגְּלִית" }],
    population: { value: 100000, year: 2024 },
    representative: {
      emoji: "🐋",
      titleHe: "לִוְיָתְנֵי הַגַּבְנוֹן",
      descriptionHe:
        "טוֹנְגָה הִיא אֶחָד הַמְּקוֹמוֹת הַנְּדִירִים שֶׁבָּהֶם אֶפְשָׁר לִרְאוֹת לִוְיָתְנֵי גַּבְנוֹן — עֲנָקֵי יָם שֶׁמַּגִּיעִים לְשָׁם בְּכָל שָׁנָה.",
    },
    funFactHe:
      "טוֹנְגָה הִיא הַמַּמְלָכָה הַיְּחִידָה בָּאוֹקְיָינוֹס הַשָּׁקֵט שֶׁלֹּא הָיְתָה מֵעוֹלָם תַּחַת שִׁלְטוֹן קוֹלוֹנְיָאלִי אֵירוֹפִּאִי. הַמַּלֶּךְ שׁוֹלֵט שָׁם עַד הַיּוֹם!",
    hello: { text: "Mālō e lelei", pronunciationHe: "מָאלוֹ אֵה לֵלֵיי" },
  },

  // ── Added: Jewish-history and coverage gaps ─────────────────────────

  {
    code: "YE",
    nameEn: "Yemen",
    nameHe: "תֵּימָן",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Sana'a", he: "צַנְעָא" },
    currency: { code: "YER", symbol: "﷼", nameHe: "רִיאַל תֵּימָנִי" },
    languages: [{ he: "עֲרָבִית" }],
    population: { value: 34500000, year: 2024 },
    representative: {
      emoji: "🏙️",
      titleHe: "מִגְדְּלֵי בּוֹץ",
      descriptionHe:
        "בְּתֵימָן יֵשׁ עָרִים עַתִּיקוֹת עִם בָּתִּים גְּבוֹהִים מִבּוֹץ, בְּנֵי מֵאוֹת שָׁנִים.",
    },
    funFactHe:
      "מִתֵּימָן עָלְתָה לָאָרֶץ קְהִלָּה יְהוּדִית עַתִּיקָה וּמְפֻרְסֶמֶת. יְהוּדֵי תֵּימָן שָׁמְרוּ מָסֹרֶת תּוֹרָה וְנִגּוּן מְיֻחָדִים אַלְפֵי שָׁנִים.",
    hello: { text: "مرحبا", pronunciationHe: "מַרְחַבָּה" },
  },

  {
    code: "SY",
    nameEn: "Syria",
    nameHe: "סוּרְיָה",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Damascus", he: "דַּמֶּשֶׂק" },
    currency: { code: "SYP", symbol: "£", nameHe: "לִירָה סוּרִית" },
    languages: [{ he: "עֲרָבִית" }],
    population: { value: 23000000, year: 2024 },
    representative: {
      emoji: "🏺",
      titleHe: "דַּמֶּשֶׂק",
      descriptionHe:
        'דַּמֶּשֶׂק נִזְכֶּרֶת בַּתַּנַּ"ךְ. הִיא מֵהֶעָרִים הָעַתִּיקוֹת בָּעוֹלָם שֶׁמְּיֻשָּׁבוֹת בְּלִי הֶפְסֵק.',
    },
    funFactHe:
      "בַּחֲלַב וּבְדַמֶּשֶׂק חָיוּ קְהִלּוֹת יְהוּדִיּוֹת גְּדוֹלוֹת. רַבִּים מִיְּהוּדֵי סוּרְיָה עָלוּ לְאֶרֶץ יִשְׂרָאֵל.",
    hello: { text: "مرحبا", pronunciationHe: "מַרְחַבָּה" },
  },

  {
    code: "LY",
    nameEn: "Libya",
    nameHe: "לוּב",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Tripoli", he: "טְרִיפּוֹלִי" },
    currency: { code: "LYD", symbol: "LD", nameHe: "דִּינָר לוּבִי" },
    languages: [{ he: "עֲרָבִית" }],
    population: { value: 7200000, year: 2024 },
    representative: {
      emoji: "🏜️",
      titleHe: "מִדְבָּר וְיָם",
      descriptionHe:
        "לְלוּב יֵשׁ חוֹף אָרֹךְ לַיָּם הַתִּיכוֹן, וְרֹב שִׁטְחָהּ הוּא מִדְבַּר סַהֲרָה.",
    },
    funFactHe:
      "בְּלוּב חָיְתָה קְהִלָּה יְהוּדִית עַתִּיקָה. רֹב יְהוּדֵי לוּב עָלוּ לְיִשְׂרָאֵל בִּשְׁנוֹת הַחֲמִשִּׁים.",
    hello: { text: "مرحبا", pronunciationHe: "מַרְחַבָּה" },
  },

  {
    code: "BY",
    nameEn: "Belarus",
    nameHe: "בֵּלָארוּס",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Minsk", he: "מִינְסְק" },
    currency: { code: "BYN", symbol: "Br", nameHe: "רוּבֶּל בֵּלָארוּסִי" },
    languages: [{ he: "בֵּלָארוּסִית" }, { he: "רוּסִית" }],
    population: { value: 9100000, year: 2024 },
    representative: {
      emoji: "🌲",
      titleHe: "יְעָרוֹת וּבִצּוֹת",
      descriptionHe:
        "בֵּלָארוּס מְכֻסָּה יְעָרוֹת, אֲגַמִּים וּבִצּוֹת. חֵלֶק גָּדוֹל מִן הַמְּדִינָה הוּא טֶבַע פָּתוּחַ.",
    },
    funFactHe:
      "בְּווֹלוֹזִ'ין וּבְמִיר שֶׁבְּבֵּלָארוּס עָמְדוּ יְשִׁיבוֹת מְפֻרְסָמוֹת. יְשִׁיבַת מִיר פּוֹעֶלֶת הַיּוֹם בִּירוּשָׁלַיִם וּבְבֵיתָר.",
    hello: { text: "Прывітанне", pronunciationHe: "פְּרִיבִיטַאנְיֶה" },
  },

  {
    code: "MD",
    nameEn: "Moldova",
    nameHe: "מוֹלְדֹבָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Chișinău", he: "קִישִׁינֵב" },
    currency: { code: "MDL", symbol: "L", nameHe: "לֵי מוֹלְדֹבִי" },
    languages: [{ he: "רוֹמֶנִית" }],
    population: { value: 2500000, year: 2024 },
    representative: {
      emoji: "🍇",
      titleHe: "כַּרְמֵי עֲנָבִים",
      descriptionHe:
        "מוֹלְדֹבָה מְפֻרְסֶמֶת בְּכַרְמֵי עֲנָבִים אֲרֻכִּים. יֵשׁ שָׁם מַרְתְּפֵי יַיִן מֵהַגְּדוֹלִים בָּעוֹלָם.",
    },
    funFactHe:
      "קִישִׁינֵב הָיְתָה מֶרְכַּז יְהוּדִי גָּדוֹל. הַרְבֵּה מִשְׁפָּחוֹת בְּאֶרֶץ יִשְׂרָאֵל שָׁרֳשֵׁיהֶן מִשָּׁם.",
    hello: { text: "Bună", pronunciationHe: "בּוּנֶה" },
  },

  {
    code: "CY",
    nameEn: "Cyprus",
    nameHe: "קַפְרִיסִין",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Nicosia", he: "נִיקוֹסְיָה" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "יְוָנִית" }, { he: "טוּרְקִית" }],
    population: { value: 1300000, year: 2024 },
    representative: {
      emoji: "🏝️",
      titleHe: "אִי הַנְּחֹשֶׁת",
      descriptionHe:
        "קַפְרִיסִין הִיא אִי גָּדוֹל בַּיָּם הַתִּיכוֹן. בַּעֲבָר כָּרוּ שָׁם נְחֹשֶׁת — וּמִכָּאן שְׁמָהּ בִּלְשׁוֹנוֹת רַבּוֹת.",
    },
    funFactHe:
      "קַפְרִיסִין קְרוֹבָה לְאֶרֶץ יִשְׂרָאֵל — טִיסָה קְצָרָה. יֵשׁ בָּהּ הָרִים, חוֹפִים, וְגַם קְהִלָּה יְהוּדִית קְטַנָּה.",
    hello: { text: "Γεια σας", pronunciationHe: "יַאסַס" },
  },

  {
    code: "AM",
    nameEn: "Armenia",
    nameHe: "אַרְמֶנְיָה",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Yerevan", he: "יֵרֶוָואן" },
    currency: { code: "AMD", symbol: "֏", nameHe: "דְּרַאם אַרְמֶנִי" },
    languages: [{ he: "אַרְמֶנִית" }],
    population: { value: 2800000, year: 2024 },
    representative: {
      emoji: "⛰️",
      titleHe: "הַר אֲרָרָט",
      descriptionHe:
        'הַר אֲרָרָט נִרְאֶה הֵיטֵב מֵאַרְמֶנְיָה. בַּתַּנַּ"ךְ נֶאֱמַר שֶׁתֵּבַת נֹחַ נָחָה עַל הָרֵי אֲרָרָט.',
    },
    funFactHe:
      "לְאַרְמֶנְיָה יֵשׁ כְּתָב מְיֻחָד מִשֶּׁלָּהּ, בֶּן יוֹתֵר מִ-1,600 שָׁנָה. הָהָרִים שֶׁלָּהּ גְּבוֹהִים, וְהַחֹרֶף שָׁם קָר מְאֹד.",
    hello: { text: "Բարև", pronunciationHe: "בָּרֶב" },
  },

  {
    code: "AF",
    nameEn: "Afghanistan",
    nameHe: "אַפְגָּנִיסְטָן",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Kabul", he: "קָאבּוּל" },
    currency: { code: "AFN", symbol: "؋", nameHe: "אַפְגָּנִי" },
    languages: [{ he: "דַּרִית" }, { he: "פַּשְׁטוֹ" }],
    population: { value: 43000000, year: 2024 },
    representative: {
      emoji: "🏔️",
      titleHe: "הֶהָרִים הַגְּבוֹהִים",
      descriptionHe:
        "רֹב אַפְגָּנִיסְטָן הוּא הָרִים גְּבוֹהִים. בַּחֹרֶף יֵשׁ שָׁם שֶׁלֶג, אַף שֶׁהִיא קְרוֹבָה לַמִּדְבָּר.",
    },
    funFactHe:
      "אַפְגָּנִיסְטָן הִיא מְדִינָה סְגוּרָה — אֵין לָהּ חוֹף יָם. מִשָּׁם מַגִּיעַ גַּם הָאֶבֶן הַכְּחֻלָּה לַפִּיס־לָזוּלִי.",
    hello: { text: "سلام", pronunciationHe: "סַלָּאם" },
  },

  {
    code: "LA",
    nameEn: "Laos",
    nameHe: "לָאוֹס",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Vientiane", he: "וְיֶנְטְיַאן" },
    currency: { code: "LAK", symbol: "₭", nameHe: "קִיפּ לָאִי" },
    languages: [{ he: "לָאִית" }],
    population: { value: 7700000, year: 2024 },
    representative: {
      emoji: "🌊",
      titleHe: "נְהַר הַמֵּקוֹנְג",
      descriptionHe:
        "נְהַר הַמֵּקוֹנְג חוֹצֶה אֶת לָאוֹס. עַל גְּדוֹתָיו כְּפָרִים, שְׂדוֹת אֹרֶז וְיְעָרוֹת.",
    },
    funFactHe:
      "לָאוֹס הִיא הַמְּדִינָה הַיְחִידָה בִּדְרוֹם־מִזְרַח אַסְיָה שֶׁאֵין לָהּ חוֹף יָם — הִיא מֻקֶּפֶת יַבָּשָׁה מִכָּל צַד.",
    hello: { text: "ສະບາຍດີ", pronunciationHe: "סַבַּאי דִּי" },
  },

  {
    code: "MZ",
    nameEn: "Mozambique",
    nameHe: "מוֹזַמְבִּיק",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Maputo", he: "מַפּוּטוֹ" },
    currency: { code: "MZN", symbol: "MT", nameHe: "מֶטִיקַל" },
    languages: [{ he: "פּוֹרְטוּגָלִית" }],
    population: { value: 34000000, year: 2024 },
    representative: {
      emoji: "🌊",
      titleHe: "תְּעָלַת מוֹזַמְבִּיק",
      descriptionHe:
        "בֵּין מוֹזַמְבִּיק לְמָדַגַסְקָר נִמְצֵאת תְּעָלַת מוֹזַמְבִּיק — רְצוּעַת יָם אֲרֻכָּה בָּאוֹקְיָינוֹס הַהֹדִי.",
    },
    funFactHe:
      "לְמוֹזַמְבִּיק יֵשׁ אֶחָד הַחוֹפִים הָאֲרֻכִּים בְּאַפְרִיקָה. מְדַבְּרִים שָׁם פּוֹרְטוּגָלִית, כְּמוֹ בִּבְרָזִיל.",
    hello: { text: "Olá", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "AZ",
    nameEn: "Azerbaijan",
    nameHe: "אֲזֶרְבַּיְגָ'ן",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Baku", he: "בַּאקוּ" },
    currency: { code: "AZN", symbol: "₼", nameHe: "מַנַאט אֲזֶרִי" },
    languages: [{ he: "אֲזֶרִית" }],
    population: { value: 10200000, year: 2024 },
    representative: {
      emoji: "🌊",
      titleHe: "יָם כַּסְפִּי",
      descriptionHe:
        "בַּאקוּ יוֹשֶׁבֶת עַל חוֹף יָם כַּסְפִּי — הַיָּם־הָאֲגַם הַגָּדוֹל בָּעוֹלָם.",
    },
    funFactHe:
      "בַּאֲזֶרְבַּיְגָ'ן יֵשׁ יוֹתֵר הָרֵי רֶפֶשׁ מִבְּכָל מְדִינָה אַחֶרֶת — בּוֹץ שֶׁפּוֹרֵץ מִן הָאֲדָמָה כְּמוֹ הַר גַּעַשׁ קָטָן.",
    hello: { text: "Salam", pronunciationHe: "סַלָּאם" },
  },

  {
    code: "KW",
    nameEn: "Kuwait",
    nameHe: "כּוּוֵית",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Kuwait City", he: "כּוּוֵית סִיטִי" },
    currency: { code: "KWD", symbol: "د.ك", nameHe: "דִּינָר כּוּוֵיתִי" },
    languages: [{ he: "עֲרָבִית" }],
    population: { value: 4900000, year: 2024 },
    representative: {
      emoji: "🛢️",
      titleHe: "נֶפְט",
      descriptionHe:
        "כּוּוֵית קְטַנָּה, אַךְ יֵשׁ בָּהּ הַרְבֵּה נֶפְט. הַדִּינָר שֶׁלָּהּ הוּא מֵהַמַּטְבְּעוֹת הַחֲזָקִים בָּעוֹלָם.",
    },
    funFactHe:
      "כּוּוֵית קְטַנָּה מִיִּשְׂרָאֵל, וְרֻבָּהּ מִדְבָּר. מִגְדְּלֵי כּוּוֵית עַל חוֹף הַמִּפְרָץ נִרְאִים מֵרָחוֹק.",
    hello: { text: "مرحبا", pronunciationHe: "מַרְחַבָּה" },
  },

  {
    code: "SR",
    nameEn: "Suriname",
    nameHe: "סוּרִינָאם",
    continent: "South America",
    continentHe: "אָמֶרִיקָה הַדְּרוֹמִית",
    capital: { en: "Paramaribo", he: "פָּרַמָרִיבּוֹ" },
    currency: { code: "SRD", symbol: "$", nameHe: "דּוֹלָר סוּרִינָאמִי" },
    languages: [{ he: "הוֹלַנְדִית" }],
    population: { value: 630000, year: 2024 },
    representative: {
      emoji: "🌳",
      titleHe: "יַעַר הַגֶּשֶׁם",
      descriptionHe:
        "רֹב סוּרִינָאם מְכֻסֶּה יַעַר גֶּשֶׁם. חַיִּים שָׁם אַלְפֵי סוּגֵי צִפֳּרִים וְעֵצִים.",
    },
    funFactHe:
      "סוּרִינָאם הִיא הַמְּדִינָה הַיְחִידָה בְּאָמֶרִיקָה הַדְּרוֹמִית שֶׁשְּׂפָתָהּ הָרִשְׁמִית הִיא הוֹלַנְדִית.",
    hello: { text: "Hallo", pronunciationHe: "הַלוֹ" },
  },

  {
    code: "BA",
    nameEn: "Bosnia and Herzegovina",
    nameHe: "בּוֹסְנְיָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Sarajevo", he: "סָרַיֵיבוֹ" },
    currency: { code: "BAM", symbol: "KM", nameHe: "מַרְק בּוֹסְנִי" },
    languages: [{ he: "בּוֹסְנִית" }, { he: "קְרוֹאָטִית" }, { he: "סֶרְבִּית" }],
    population: { value: 3200000, year: 2024 },
    representative: {
      emoji: "🌉",
      titleHe: "הַגֶּשֶׁר הֶעָתִיק",
      descriptionHe:
        "בְּמוֹסְטַר עוֹמֵד גֶּשֶׁר אֶבֶן עַתִּיק מְקֻמָּר מֵעַל הַנָּהָר — אֶחָד הַמַּרְאוֹת הַמּוּכָּרִים שֶׁל בּוֹסְנְיָה.",
    },
    funFactHe:
      "סָרַיֵיבוֹ מֻקֶּפֶת הָרִים. בַּחֹרֶף יֵשׁ שָׁם שֶׁלֶג, וּבַקַּיִץ הַנְּהָרוֹת מְלֵאִים מַיִם.",
    hello: { text: "Zdravo", pronunciationHe: "זְדְרַאווֹ" },
  },

  {
    code: "ML",
    nameEn: "Mali",
    nameHe: "מַאלִי",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Bamako", he: "בָּמָקוֹ" },
    currency: { code: "XOF", symbol: "Fr", nameHe: "פְּרַנְק CFA מַעֲרָב אַפְרִיקָאִי" },
    languages: [{ he: "צָרְפָתִית" }, { he: "בַּמְבַּרָה" }],
    population: { value: 24000000, year: 2024 },
    representative: {
      emoji: "📚",
      titleHe: "טִימְבּוּקְטוּ",
      descriptionHe:
        "טִימְבּוּקְטוּ הָיְתָה עִיר מְסֹחָר עַתִּיקָה בִּקְצֵה הַמִּדְבָּר, מְפֻרְסֶמֶת בְּסִפְרִיּוֹת וּכְתָבֵי יָד יְשָׁנִים.",
    },
    funFactHe:
      "נְהַר נִיגֶּר חוֹצֶה אֶת מַאלִי בְּקֶשֶׁת גְּדוֹלָה. חֵלֶק מִן הַמְּדִינָה הוּא סַהֲרָה, וְחֵלֶק שְׂדוֹת וּכְפָרִים.",
    hello: { text: "I ni ce", pronunciationHe: "אִי נִי צֵ'ה" },
  },

  {
    code: "MK",
    nameEn: "North Macedonia",
    nameHe: "מַקְדוֹנְיָה הַצְּפוֹנִית",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Skopje", he: "סְקוֹפְּיֶה" },
    currency: { code: "MKD", symbol: "ден", nameHe: "דִּינָר מַקְדוֹנִי" },
    languages: [{ he: "מַקְדוֹנִית" }],
    population: { value: 1800000, year: 2024 },
    representative: {
      emoji: "🏞️",
      titleHe: "אֲגַם אוֹחְרִיד",
      descriptionHe:
        "אֲגַם אוֹחְרִיד הוּא מֵהָאֲגַמִּים הָעַתִּיקִים בְּאֵירוֹפָּה — מַיִם צְלוּלִים בֵּין הָרִים.",
    },
    funFactHe:
      "מַקְדוֹנְיָה הַצְּפוֹנִית הִיא מְדִינָה בַּלְקָנִית קְטַנָּה, בְּלִי חוֹף יָם, בֵּין הָרִים וְאֲגַמִּים.",
    hello: { text: "Здраво", pronunciationHe: "זְדְרַאווֹ" },
  },

  {
    code: "ME",
    nameEn: "Montenegro",
    nameHe: "מוֹנְטֶנֶגְרוֹ",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Podgorica", he: "פּוֹדְגּוֹרִיצָה" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "מוֹנְטֶנֶגְרִית" }],
    population: { value: 620000, year: 2024 },
    representative: {
      emoji: "⛰️",
      titleHe: "הָהָר הַשָּׁחֹר",
      descriptionHe:
        "שֵׁם הַמְּדִינָה פֵּרוּשׁוֹ 'הָהָר הַשָּׁחֹר' — הָרִים כֵּהִים מֵעַל הַיָּם הָאַדְרִיָּאטִי.",
    },
    funFactHe:
      "מוֹנְטֶנֶגְרוֹ קְטַנָּה, אַךְ יֵשׁ בָּהּ גַּם חוֹף יָם וְגַם הָרִים תְּלוּלִים בְּמֶרְחָק קָצָר.",
    hello: { text: "Zdravo", pronunciationHe: "זְדְרַאווֹ" },
  },

  {
    code: "KG",
    nameEn: "Kyrgyzstan",
    nameHe: "קִירְגִּיזְסְטָן",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Bishkek", he: "בִּישְׁקֶק" },
    currency: { code: "KGS", symbol: "сом", nameHe: "סוֹם קִירְגִּיזִי" },
    languages: [{ he: "קִירְגִּיזִית" }, { he: "רוּסִית" }],
    population: { value: 7100000, year: 2024 },
    representative: {
      emoji: "🏔️",
      titleHe: "אֲגַם אִיסִיק־קוּל",
      descriptionHe:
        "אִיסִיק־קוּל הוּא אֲגַם הָרִים גָּדוֹל שֶׁאֵינוֹ קוֹפֵא בַּחֹרֶף, אַף שֶׁהוּא גָּבוֹהַּ מְאֹד.",
    },
    funFactHe:
      "רֹב קִירְגִּיזְסְטָן הוּא הָרִים. רַבִּים עֲדַיִן גָּרִים בְּאָהֳלֵי יוּרְט וְנוֹדְדִים עִם הַצֹּאן.",
    hello: { text: "Салам", pronunciationHe: "סַלָּאם" },
  },

  {
    code: "TJ",
    nameEn: "Tajikistan",
    nameHe: "טַגִ'יקִיסְטָן",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Dushanbe", he: "דּוּשַׁנְבֶּה" },
    currency: { code: "TJS", symbol: "ЅМ", nameHe: "סוֹמוֹנִי" },
    languages: [{ he: "טַגִ'יקִית" }],
    population: { value: 10100000, year: 2024 },
    representative: {
      emoji: "⛰️",
      titleHe: "הָרֵי הַפַּמִּיר",
      descriptionHe:
        "הַפַּמִּיר הֵם מֵהָהָרִים הַגְּבוֹהִים בָּעוֹלָם. כִּמְעַט כָּל טַגִ'יקִיסְטָן הָרָרִית.",
    },
    funFactHe:
      "בְּהָרֵי טַגִ'יקִיסְטָן יֵשׁ קַרְחוֹנִים גְּדוֹלִים. גַּם בַּקַּיִץ נִשְׁאָר שֶׁלֶג עַל הַפְּסָגוֹת.",
    hello: { text: "Салом", pronunciationHe: "סַלוֹם" },
  },

  {
    code: "TM",
    nameEn: "Turkmenistan",
    nameHe: "טוּרְקְמֶנִיסְטָן",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Ashgabat", he: "אַשְׁגָּבַּאט" },
    currency: { code: "TMT", symbol: "m", nameHe: "מַנַאט טוּרְקְמֶנִי" },
    languages: [{ he: "טוּרְקְמֶנִית" }],
    population: { value: 6500000, year: 2024 },
    representative: {
      emoji: "🐎",
      titleHe: "סוּס אַחַל־טֶקֶה",
      descriptionHe:
        "סוּס הָאַחַל־טֶקֶה הוּא גַּאֲוַת טוּרְקְמֶנִיסְטָן — סוּס מָהִיר וּמְבָרִיק שֶׁגּוּדַּל שָׁם מֵאוֹת שָׁנִים.",
    },
    funFactHe:
      "רֹב טוּרְקְמֶנִיסְטָן הוּא מִדְבַּר קָרָה־קוּם. אַשְׁגָּבַּאט מְפֻרְסֶמֶת בְּבִנְיָנִים לְבָנִים מֵאֶבֶן שַׁיִשׁ.",
    hello: { text: "Salam", pronunciationHe: "סַלָּאם" },
  },

  {
    code: "BH",
    nameEn: "Bahrain",
    nameHe: "בַּחְרֵין",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Manama", he: "מַנַאמָה" },
    currency: { code: "BHD", symbol: "BD", nameHe: "דִּינָר בַּחְרֵינִי" },
    languages: [{ he: "עֲרָבִית" }],
    population: { value: 1500000, year: 2024 },
    representative: {
      emoji: "🦪",
      titleHe: "פְּנִינִים",
      descriptionHe:
        "בַּחְרֵין הָיְתָה מֶרְכַּז דַיִג פְּנִינִים בַּמִּפְרָץ עוֹד לִפְנֵי שֶׁמָּצְאוּ שָׁם נֶפְט.",
    },
    funFactHe:
      "בַּחְרֵין הִיא מְדִינַת־אִי קְטַנָּה בַּמִּפְרָץ הַפַּרְסִי — מְחֻבֶּרֶת לְסַעוּדְיָה בְּגֶשֶׁר אָרֹךְ.",
    hello: { text: "مرحبا", pronunciationHe: "מַרְחַבָּה" },
  },

  {
    code: "KP",
    nameEn: "North Korea",
    nameHe: "צְפוֹן קוֹרֵיאָה",
    continent: "Asia",
    continentHe: "אַסְיָה",
    capital: { en: "Pyongyang", he: "פְּיוֹנְגְיַאנְג" },
    currency: { code: "KPW", symbol: "₩", nameHe: "ווֹן צְפוֹן קוֹרֵיאנִי" },
    languages: [{ he: "קוֹרֵיאָנִית" }],
    population: { value: 26000000, year: 2024 },
    representative: {
      emoji: "⛰️",
      titleHe: "הֶהָרִים וְהַחֹרֶף",
      descriptionHe:
        "צְפוֹן קוֹרֵיאָה הָרָרִית מְאֹד. בַּחֹרֶף קַר שָׁם, וּבֶהָרִים יֵשׁ שֶׁלֶג.",
    },
    funFactHe:
      "צְפוֹן קוֹרֵיאָה הִיא הַחֵלֶק הַצְּפוֹנִי שֶׁל חֲצִי הַאִי הַקּוֹרֵיאנִי. מְדַבְּרִים שָׁם אוֹתָהּ שָׂפָה שֶׁבַּדָּרוֹם.",
    hello: { text: "안녕하세요", pronunciationHe: "אַן-נְיוֹנְג הַסֵּיוֹ" },
  },

  {
    code: "SO",
    nameEn: "Somalia",
    nameHe: "סוֹמַלְיָה",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Mogadishu", he: "מוֹגַדִישׁוּ" },
    currency: { code: "SOS", symbol: "Sh", nameHe: "שִׁילִינְג סוֹמָלִי" },
    languages: [{ he: "סוֹמָלִית" }, { he: "עֲרָבִית" }],
    population: { value: 18000000, year: 2024 },
    representative: {
      emoji: "🐪",
      titleHe: "קֶרֶן אַפְרִיקָה",
      descriptionHe:
        "סוֹמַלְיָה יוֹשֶׁבֶת עַל 'קֶרֶן אַפְרִיקָה' — הַבְּלִיטָה שֶׁבְּמִזְרַח הַיַּבֶּשֶׁת, בְּצוּרַת קֶרֶן.",
    },
    funFactHe:
      "לְסוֹמַלְיָה אֶחָד הַחוֹפִים הָאֲרֻכִּים בְּאַפְרִיקָה. יֵשׁ שָׁם הַרְבֵּה גְּמַלִּים, וְהַיָּם חַם כָּל הַשָּׁנָה.",
    hello: { text: "Salaam", pronunciationHe: "סַלָּאם" },
  },

  {
    code: "MW",
    nameEn: "Malawi",
    nameHe: "מָלַאוִוי",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Lilongwe", he: "לִילוֹנְגְוֵוה" },
    currency: { code: "MWK", symbol: "K", nameHe: "קְוַואצָ'ה מָלַאוִוית" },
    languages: [{ he: "אַנְגְּלִית" }, { he: "צִ'יצֶ'וָה" }],
    population: { value: 21000000, year: 2024 },
    representative: {
      emoji: "🌊",
      titleHe: "אֲגַם מָלַאוִוי",
      descriptionHe:
        "אֲגַם מָלַאוִוי הוּא אֶחָד הָאֲגַמִּים הָאֲרֻכִּים בָּעוֹלָם — מָלֵא דָּגִים בִּצְבָעִים שׁוֹנִים.",
    },
    funFactHe:
      "מָלַאוִוי מְכֻנָּה 'לֵב אַפְרִיקָה הַחַם' — מְדִינָה צָרָה וְאֲרֻכָּה לְיַד אֲגַם גָּדוֹל.",
    hello: { text: "Moni", pronunciationHe: "מוֹנִי" },
  },

  {
    code: "ER",
    nameEn: "Eritrea",
    nameHe: "אֶרִיתְרְאָה",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Asmara", he: "אַסְמָרָה" },
    currency: { code: "ERN", symbol: "Nfk", nameHe: "נַקְפָה" },
    languages: [{ he: "תִּגְרִינְיָה" }, { he: "עֲרָבִית" }],
    population: { value: 3700000, year: 2024 },
    representative: {
      emoji: "🌊",
      titleHe: "יַם סוּף",
      descriptionHe:
        "לְאֶרִיתְרְאָה חוֹף אָרֹךְ לְיַם סוּף. מֵעֵבֶר לַיָּם נִמְצֵאת עֲרַב הַסְּעוּדִית.",
    },
    funFactHe:
      "אַסְמָרָה, הַבִּירָה, יוֹשֶׁבֶת גָּבוֹהַּ בֶּהָרִים — לְכֵן הַמֶּזֶג שָׁם נוֹחַ יוֹתֵר מֵעַל חוֹף הַיָּם הַחַם.",
    hello: { text: "Selam", pronunciationHe: "סֶלָם" },
  },

  {
    code: "SS",
    nameEn: "South Sudan",
    nameHe: "דְּרוֹם סוּדָן",
    continent: "Africa",
    continentHe: "אַפְרִיקָה",
    capital: { en: "Juba", he: "גֻּ'בָּה" },
    currency: { code: "SSP", symbol: "£", nameHe: "לִירָה דְּרוֹם סוּדָנִית" },
    languages: [{ he: "אַנְגְּלִית" }],
    population: { value: 11500000, year: 2024 },
    representative: {
      emoji: "🌊",
      titleHe: "הַנִּילוסוּס הַלָּבָן",
      descriptionHe:
        "הַנִּילוסוּס הַלָּבָן זוֹרֵם בְּדְרוֹם סוּדָן בְּדַרְכּוֹ מִן הָאֲגַמִּים שֶׁל מִזְרַח אַפְרִיקָה צָפוֹנָה.",
    },
    funFactHe:
      "דְּרוֹם סוּדָן הִיא הַמְּדִינָה הַצְּעִירָה בָּעוֹלָם — קִבְּלָה עַצְמָאוּת בִּשְׁנַת 2011.",
    hello: { text: "Hello", pronunciationHe: "הֶלוֹ" },
  },

  {
    code: "AD",
    nameEn: "Andorra",
    nameHe: "אַנְדוֹרָה",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Andorra la Vella", he: "אַנְדוֹרָה לַה וְלָה" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "קָטָלָנִית" }],
    population: { value: 80000, year: 2024 },
    representative: {
      emoji: "🏔️",
      titleHe: "הָרֵי הַפִּירֵנָאִים",
      descriptionHe:
        "אַנְדוֹרָה חֲבוּיָה בֵּין צָרְפַת לְסְפָרַד, בְּתוֹךְ הָרֵי הַפִּירֵנָאִים.",
    },
    funFactHe:
      "אַנְדוֹרָה קְטַנָּה מְאֹד — אֶפְשָׁר לַחֲצֹת אוֹתָהּ בִּנְסִיעָה קְצָרָה. בַּחֹרֶף יֵשׁ שָׁם הַרְבֵּה שֶׁלֶג.",
    hello: { text: "Hola", pronunciationHe: "אוֹלָה" },
  },

  {
    code: "MC",
    nameEn: "Monaco",
    nameHe: "מוֹנָקוֹ",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Monaco", he: "מוֹנָקוֹ" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "צָרְפָתִית" }],
    population: { value: 39000, year: 2024 },
    representative: {
      emoji: "🌊",
      titleHe: "הַחוֹף הַקָּטָן",
      descriptionHe:
        "מוֹנָקוֹ הִיא מְדִינָה זְעִירָה עַל חוֹף הַיָּם הַתִּיכוֹן, מֻקֶּפֶת כִּמְעַט כֻּלָּהּ בְּצָרְפַת.",
    },
    funFactHe:
      "מוֹנָקוֹ הִיא מֵהַמְּדִינוֹת הַקְּטַנּוֹת בָּעוֹלָם — אֶפְשָׁר לַחֲצֹת אוֹתָהּ בְּהִלּוּךְ תוֹךְ שָׁעָה.",
    hello: { text: "Bonjour", pronunciationHe: "בּוֹנְז'וּר" },
  },

  {
    code: "LI",
    nameEn: "Liechtenstein",
    nameHe: "לִיכְטֶנְשְׁטַיְין",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "Vaduz", he: "וַאדוּץ" },
    currency: { code: "CHF", symbol: "Fr.", nameHe: "פְרַנְק שְׁוֵיצָרִי" },
    languages: [{ he: "גֶּרְמָנִית" }],
    population: { value: 40000, year: 2024 },
    representative: {
      emoji: "🏰",
      titleHe: "טִירַת וַאדוּץ",
      descriptionHe:
        "טִירַת וַאדוּץ עוֹמֶדֶת עַל צוּק מֵעַל הָעִיר — בֵּיתוֹ שֶׁל נְסִיךְ הַמְּדִינָה.",
    },
    funFactHe:
      "לִיכְטֶנְשְׁטַיְין נִמְצֵאת בֵּין שְׁוֵיצַרְיָה לְאוֹסְטְרִיָּה. אֵין לָהּ נְמַל תְּעוּפָה מִשֶּׁלָּהּ.",
    hello: { text: "Hallo", pronunciationHe: "הַלוֹ" },
  },

  {
    code: "SM",
    nameEn: "San Marino",
    nameHe: "סַן מָרִינוֹ",
    continent: "Europe",
    continentHe: "אֵירוֹפָּה",
    capital: { en: "San Marino", he: "סַן מָרִינוֹ" },
    currency: { code: "EUR", symbol: "€", nameHe: "אֵירוֹ" },
    languages: [{ he: "אִיטַלְקִית" }],
    population: { value: 34000, year: 2024 },
    representative: {
      emoji: "⛰️",
      titleHe: "הַר טִיטַאנוֹ",
      descriptionHe:
        "סַן מָרִינוֹ יוֹשֶׁבֶת עַל הַר טִיטַאנוֹ, מֻקֶּפֶת מִכָּל צַד בְּאִיטַלְיָה.",
    },
    funFactHe:
      "סַן מָרִינוֹ נֶחְשֶׁבֶת לְאַחַת הַמְּדִינוֹת הָעַתִּיקוֹת בְּיוֹתֵר בָּעוֹלָם שֶׁעֲדַיִן קַיֶּמֶת.",
    hello: { text: "Ciao", pronunciationHe: "צ'אוֹ" },
  },
];
