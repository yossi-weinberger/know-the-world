---
name: "מדינות העולם"
description: "כרטיסי היכרות צבעוניים ונקיים לילדים בני 9"
colors:
  ink: "#0f172a"
  body: "#1e293b"
  muted: "#475569"
  paper: "#f8fafc"
  white: "#ffffff"
  action: "#2563eb"
  asia: "#ea580c"
  europe: "#2563eb"
  africa: "#ca8a04"
  north-america: "#16a34a"
  south-america: "#059669"
  oceania: "#7c3aed"
typography:
  headline:
    fontFamily: "Heebo, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 900
    lineHeight: 1.15
  body:
    fontFamily: "Heebo, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "Heebo, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 800
    lineHeight: 1.25
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
components:
  country-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.body}"
    rounded: "{rounded.lg}"
    padding: "8px"
  hello-label:
    backgroundColor: "#166534"
    textColor: "#f0fdf4"
    rounded: "{rounded.sm}"
    padding: "1px 7px"
---

# Design System: מדינות העולם

## Overview

**Creative North Star: "אטלס שולחני צבעוני"**

המערכת מיועדת לילד בן 9 שקורא חוברת מודפסת באור יום. היא משתמשת בנייר בהיר, בדיו כהה ובצבע שונה לכל יבשת. כל כרטיס צריך להרגיש כמו הזמנה קצרה לגלות מקום חדש.

**Key Characteristics:** קריאות גבוהה, היררכיה ברורה, צבעי יבשות עקביים, מידע קצר, ללא שכבות טכניות.

## Colors

צבעי היבשות משמשים לזיהוי. כחול הפעולה שמור לכפתורי המסך. רקע הכרטיס נשאר בהיר כדי לחסוך דיו ולשמור על קריאות.

**The Continent Rule.** צבע חזק אחד בלבד מוביל כל כרטיס, לפי היבשת שלו.

## Typography

**Display Font:** Heebo עם Arial כחלופה  
**Body Font:** Heebo עם Arial כחלופה

שמות המדינות כבדים וגדולים. תוויות קצרות ומודגשות. הטקסט המסביר אינו קטן ממה שניתן לקרוא בנוחות בהדפסת A5.

## Elevation

במסך משתמשים בצל רך כדי להפריד כרטיסים מהרקע. בדפוס הצל מוסר והמסגרת לבדה מגדירה את הכרטיס.

## Components

### Country Card

כותרת עם דגל, שם ויבשת; אחריה נתוני יסוד; אחר כך סיפור קצר, עובדה מעניינת וברכת שלום. מידע על מקורות ותחזוקה אינו מופיע בכרטיס.

### Hello Block

התווית „שלום:” מוצגת ככותרת ירוקה מובחנת. אחריה הביטוי בשפת המקור והתעתיק העברי בסוגריים.

### Controls

במסך בלבד: חיפוש, סינון יבשת, בחירת פריסה, הדפסה וכניסה לגרסת החוברת. כל פקד משתמש בצורה ובמצב מיקוד עקביים.

## Do's and Don'ts

### Do:

- **Do** להציג בכל כרטיס רק מידע שילד יכול להבין ולזכור.
- **Do** להשתמש בכותרות מילוליות גם כשיש אימוג'י.
- **Do** לבדוק כל פריסת דפוס בגודל הפיזי האמיתי שלה.

### Don't:

- **Don't** להציג מקורות, הערות ביקורת, תאריכי אחזור או הסברים טכניים בתוך הכרטיסים.
- **Do** לסדר ארבעה כרטיסים בכל עמוד A5 בגריד 2×2, עם שוליים חיצוניים מזעריים.
- **Don't** לחרוג מארבעה כרטיסים לעמוד A5; זה יוצר שמונה כרטיסים בכל צד A4 מלא.
- **Don't** להשתמש בצבעים בהירים לטקסט גוף או באפקטים שמכבידים על ההדפסה.
