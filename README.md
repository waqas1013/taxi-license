# Taxi Licens - Frågebank

En enkel och modern React-app för att träna frågor inför taxiförarlegitimation.

## Funktioner

- Navigation mellan ämnen och kategorier:
  - Huvudämnen: Säkerhet, Lagstiftning, Karta
  - Taxi företag: Ekonomi, Fallstudie, Juridik, Tekniska
- Sektioner per kategori (t.ex. Säkerhet 1, Säkerhet 2)
- Frågor med flervalsalternativ
- Knapp för att kontrollera svar och markera korrekt alternativ
- Knapp `Se förklaring` som visar bild med förklaring
- Nästa/Tillbaka navigation mellan frågor
- Översikt över frågor med:
  - antal klara / kvar
  - klickbar frågelista som hoppar direkt till vald fråga

## Teknisk stack

- React + TypeScript + Vite
- Kodstruktur som enkelt kan kopplas till Firebase senare (se `src/firebase.ts`)

## Kom igång

```bash
npm install
npm run dev
```

Bygg för produktion:

```bash
npm run build
```
