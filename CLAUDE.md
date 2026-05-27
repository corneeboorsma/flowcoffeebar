# Flow Coffeebar — Huisstijl & Projectregels

## Kleurenpalet

| Naam | HEX | Gebruik |
|---|---|---|
| Almond (achtergrond) | `#EDEBE6` | Pagina-achtergrond, zachte vlakken |
| Billy Button (goud) | `#B8973E` | Accenten, highlights |
| By Juliet (roze-taupe) | `#C4A8A0` | Secundaire tekst, borders |
| Caramel (primair) | `#BB9981` | Primaire kleur, knoppen, accenten |
| Caramel dark | `#9E7E64` | Hover-states primaire kleur |
| Caramel light | `#F0E6DC` | Zachte achtergronden, tags |
| Espresso (tekst) | `#3D2B1F` | Hoofdtekst |
| Taupe mid | `#7A6558` | Secundaire tekst |
| Linen | `#F7F4EF` | Kaarten, modals, witte vlakken |

## Typografie

- **Hoofdlettertype (UI / body):** Garet → geladen via `@import` van Google Fonts of lokaal. Fallback: `'Nunito', sans-serif`
- **Script / logo:** Dancing Script (als Madelyn-vervanger via Google Fonts). Gebruik voor `.script` klasse (logo "flow")
- **Koppen:** Garet Semi-Bold (600), letter-spacing licht positief
- **Body:** Garet Regular (400)

## Logo

Het logo bestaat uit:
- Script "flow" in Dancing Script, kleur `#BB9981`
- "COFFEEBAR" in Garet, kleine letter-spacing, kleur `#BB9981`

## Design principes

- Warm, organisch, uitnodigend — geen harde zwarten of felle kleuren
- Achtergrond altijd `#EDEBE6` (Almond), nooit puur wit
- Knoppen: primair = `#3D2B1F` (espresso) met witte tekst, of `#BB9981` caramel
- Borders: zacht, `#DDD5CC` of `#C4A8A0`
- Border-radius genereus (16–24px voor kaarten, 40px voor knoppen/pills)
- Shadows: warm en subtiel (`rgba(61,43,31,0.08)`)

## Stack

- Pure HTML/CSS/JS — geen framework
- Firebase Realtime Database voor bestellingen
- Menu opgeslagen in `localStorage`
- GitHub Pages hosting

## Bestanden

| Bestand | Doel |
|---|---|
| `index.html` | Klantmenukaart |
| `admin.html` | Beheerpaneel (menu, bestellingen) |
| `kitchen.html` | Keukenweergave (live orders) |
| `app2.js` | Alle logica + vertalingen (NL/EN/DE/Twents) |
| `style.css` | Alle styling |

## Taalondersteuning

NL (standaard), EN, DE, TW (Twents dialect)
