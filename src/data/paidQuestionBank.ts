import type { CategoryGroup, Question, QuestionSection } from "../types/questions";
import paidSakerhet1PrisinformationScenario from "../assets/paid-sakerhet1-prisinformation-scenario.png";
import paidSakerhet1AbsKontrollampaScenario from "../assets/paid-sakerhet1-abs-kontrollampa-scenario.png";
import paidSakerhet1BarnVagScenario from "../assets/paid-sakerhet1-barn-vag-scenario.png";
import paidSakerhet1BussHallplatsScenario from "../assets/paid-sakerhet1-buss-hallplats-scenario.png";
import paidSakerhet1BilbalteAbcdScenario from "../assets/paid-sakerhet1-bilbalte-abcd-scenario.png";
import paidSakerhet1RollatorScenario from "../assets/paid-sakerhet1-rollator-scenario.png";
import paidSakerhet1BarnKorsningScenario from "../assets/paid-sakerhet1-barn-korsning-scenario.png";
import paidSakerhet1PsykosDefinitionScenario from "../assets/paid-sakerhet1-psykos-definition-scenario.png";
import paidKarta1KarlstadScenario from "../assets/paid-karta1-karlstad-scenario.png";
import paidKarta1KarlstadUppdrag2Scenario from "../assets/paid-karta1-karlstad-uppdrag2-scenario.png";
import paidKarta1KarlstadUppdrag3Scenario from "../assets/paid-karta1-karlstad-uppdrag3-scenario.png";
import paidKarta1KarlstadUppdrag4Scenario from "../assets/paid-karta1-karlstad-uppdrag4-scenario.png";
import paidKarta2GoteborgScenario from "../assets/paid-karta2-goteborg-scenario.png";
import paidKarta2GoteborgUppdrag2Scenario from "../assets/paid-karta2-goteborg-uppdrag2-scenario.png";
import paidKarta2GoteborgUppdrag3Scenario from "../assets/paid-karta2-goteborg-uppdrag3-scenario.png";
import paidKarta2GoteborgCampingplatsScenario from "../assets/paid-karta2-goteborg-campingplats-scenario.png";
import paidKarta2HalmstadUppdrag1Scenario from "../assets/paid-karta2-halmstad-uppdrag1-scenario.png";
import paidKarta2HalmstadUppdrag2Scenario from "../assets/paid-karta2-halmstad-uppdrag2-scenario.png";
import paidKarta2HalmstadUppdrag3Scenario from "../assets/paid-karta2-halmstad-uppdrag3-scenario.png";
import paidKarta2MalmoUppdrag1Scenario from "../assets/paid-karta2-malmo-uppdrag1-scenario.png";
import paidKarta2MalmoUppdrag2Scenario from "../assets/paid-karta2-malmo-uppdrag2-scenario.png";
import paidKarta2MalmoUppdrag3Scenario from "../assets/paid-karta2-malmo-uppdrag3-scenario.png";
import paidKarta2MalmoFourUppdragScenario from "../assets/paid-karta2-malmo-four-uppdrag-scenario.png";
import paidKarta2MalmoFourUppdragUppdrag2Scenario from "../assets/paid-karta2-malmo-four-uppdrag-uppdrag2-scenario.png";
import paidKarta2MalmoFourUppdragUppdrag3Scenario from "../assets/paid-karta2-malmo-four-uppdrag-uppdrag3-scenario.png";
import paidKarta2MalmoFourUppdragUppdrag4Scenario from "../assets/paid-karta2-malmo-four-uppdrag-uppdrag4-scenario.png";
import paidKarta2StockholmUppdrag1Scenario from "../assets/paid-karta2-stockholm-uppdrag1-scenario.png";
import paidKarta2StockholmUppdrag1E4Scenario from "../assets/paid-karta2-stockholm-uppdrag1-e4-scenario.png";
import paidKarta2StockholmUppdrag2Scenario from "../assets/paid-karta2-stockholm-uppdrag2-scenario.png";
import paidKarta2StockholmUppdrag3Scenario from "../assets/paid-karta2-stockholm-uppdrag3-scenario.png";
import paidKarta2LuleaUppdrag1Scenario from "../assets/paid-karta2-lulea-uppdrag1-scenario.png";
import paidKarta2LuleaUppdrag2Scenario from "../assets/paid-karta2-lulea-uppdrag2-scenario.png";
import paidKarta2LuleaUppdrag3Scenario from "../assets/paid-karta2-lulea-uppdrag3-scenario.png";
import paidKarta2OstersundScenario from "../assets/paid-karta2-ostersund-scenario.png";
import paidKarta2OstersundUppdrag1Scenario from "../assets/paid-karta2-ostersund-uppdrag1-scenario.png";
import paidKarta2OstersundUppdrag2Scenario from "../assets/paid-karta2-ostersund-uppdrag2-scenario.png";
import paidKarta2OstersundUppdrag3Scenario from "../assets/paid-karta2-ostersund-uppdrag3-scenario.png";
import paidKarta2OstersundNorrScenario from "../assets/paid-karta2-ostersund-norr-scenario.png";
import paidKarta2OstersundNorrUppdrag1Scenario from "../assets/paid-karta2-ostersund-norr-uppdrag1-scenario.png";
import paidKarta2OstersundNorrUppdrag2Scenario from "../assets/paid-karta2-ostersund-norr-uppdrag2-scenario.png";
import paidKarta2OstersundNorrUppdrag3Scenario from "../assets/paid-karta2-ostersund-norr-uppdrag3-scenario.png";
import paidKarta2OsterlenKivikUppdrag1Scenario from "../assets/paid-karta2-osterlen-kivik-uppdrag1-scenario.png";
import paidKarta2OsterlenKivikUppdrag2Scenario from "../assets/paid-karta2-osterlen-kivik-uppdrag2-scenario.png";
import paidKarta2OsterlenKivikOperatorScenario from "../assets/paid-karta2-osterlen-kivik-operator-scenario.png";
import paidKarta2OsterlenKivikUppdrag3Scenario from "../assets/paid-karta2-osterlen-kivik-uppdrag3-scenario.png";
import paidKarta2OrebroUppdrag1Scenario from "../assets/paid-karta2-orebro-uppdrag1-scenario.png";
import paidKarta2OrebroUppdrag2Scenario from "../assets/paid-karta2-orebro-uppdrag2-scenario.png";
import paidKarta2OrebroUppdrag3Scenario from "../assets/paid-karta2-orebro-uppdrag3-scenario.png";
import paidKarta2GotlandUppdrag1Scenario from "../assets/paid-karta2-gotland-uppdrag1-scenario.png";
import paidKarta2GotlandUppdrag2Scenario from "../assets/paid-karta2-gotland-uppdrag2-scenario.png";
import paidKarta2GotlandUppdrag3Scenario from "../assets/paid-karta2-gotland-uppdrag3-scenario.png";
import paidKarta2GotlandTillbakaVisbyScenario from "../assets/paid-karta2-gotland-tillbaka-visby-scenario.png";
import paidKarta2BollnasUppdrag1Scenario from "../assets/paid-karta2-bollnas-uppdrag1-scenario.png";
import paidKarta2BollnasUppdrag2Scenario from "../assets/paid-karta2-bollnas-uppdrag2-scenario.png";
import paidKarta2BollnasUppdrag3Scenario from "../assets/paid-karta2-bollnas-uppdrag3-scenario.png";
import paidKarta2BorlangeUppdrag1Scenario from "../assets/paid-karta2-borlange-uppdrag1-scenario.png";
import paidKarta2BorlangeUppdrag2Scenario from "../assets/paid-karta2-borlange-uppdrag2-scenario.png";
import paidKarta2BorlangeUppdrag3Scenario from "../assets/paid-karta2-borlange-uppdrag3-scenario.png";
import paidKarta2SkellefteaUppdrag1Scenario from "../assets/paid-karta2-skelleftea-uppdrag1-scenario.png";
import paidKarta2SkellefteaUppdrag2Scenario from "../assets/paid-karta2-skelleftea-uppdrag2-scenario.png";
import paidKarta2SkellefteaUppdrag3Scenario from "../assets/paid-karta2-skelleftea-uppdrag3-scenario.png";
import paidKarta2VaxjoUppdrag1Scenario from "../assets/paid-karta2-vaxjo-uppdrag1-scenario.png";
import paidKarta2VaxjoUppdrag2Scenario from "../assets/paid-karta2-vaxjo-uppdrag2-scenario.png";
import paidKarta2VaxjoUppdrag3Scenario from "../assets/paid-karta2-vaxjo-uppdrag3-scenario.png";
import paidKarta3GotlandScenario from "../assets/paid-karta3-gotland-scenario.png";
import paidKarta3GotlandUppdrag2Scenario from "../assets/paid-karta3-gotland-uppdrag2-scenario.png";
import paidKarta3GotlandUppdrag3Scenario from "../assets/paid-karta3-gotland-uppdrag3-scenario.png";
import paidKarta3GotlandVisbyRuttScenario from "../assets/paid-karta3-gotland-visby-rutt-scenario.png";
import paidKarta1BorlangeScenario from "../assets/paid-karta1-borlange-scenario.png";
import paidKarta1BorlangeUppdrag2Scenario from "../assets/paid-karta1-borlange-uppdrag2-scenario.png";
import paidKarta1BorlangeUppdrag3Scenario from "../assets/paid-karta1-borlange-uppdrag3-scenario.png";
import paidKarta1BollnasScenario from "../assets/paid-karta1-bollnas-scenario.png";
import paidKarta1BollnasUppdrag2Scenario from "../assets/paid-karta1-bollnas-uppdrag2-scenario.png";
import paidKarta1BollnasUppdrag3Scenario from "../assets/paid-karta1-bollnas-uppdrag3-scenario.png";
import paidKarta1BodenScenario from "../assets/paid-karta1-boden-scenario.png";
import paidKarta1BodenUppdrag2Scenario from "../assets/paid-karta1-boden-uppdrag2-scenario.png";
import paidKarta1BodenUppdrag3Scenario from "../assets/paid-karta1-boden-uppdrag3-scenario.png";
import paidKarta1BodenUppdrag4Scenario from "../assets/paid-karta1-boden-uppdrag4-scenario.png";
import paidKarta1UppsalaScenario from "../assets/paid-karta1-uppsala-scenario.png";
import paidKarta1UppsalaUppdrag1Scenario from "../assets/paid-karta1-uppsala-uppdrag1-scenario.png";
import paidKarta1UppsalaUppdrag2Scenario from "../assets/paid-karta1-uppsala-uppdrag2-scenario.png";
import paidKarta1UppsalaUppdrag3Scenario from "../assets/paid-karta1-uppsala-uppdrag3-scenario.png";
import paidKarta1OlandScenario from "../assets/paid-karta1-oland-scenario.png";
import paidKarta1OlandUppdrag2Scenario from "../assets/paid-karta1-oland-uppdrag2-scenario.png";
import paidKarta1OlandUppdrag3Scenario from "../assets/paid-karta1-oland-uppdrag3-scenario.png";
import paidKarta1OlandUppdrag4Scenario from "../assets/paid-karta1-oland-uppdrag4-scenario.png";
import paidKarta1HalmstadScenario from "../assets/paid-karta1-halmstad-scenario.png";
import paidKarta1HalmstadUppdrag2Scenario from "../assets/paid-karta1-halmstad-uppdrag2-scenario.png";
import paidKarta1HalmstadUppdrag3Scenario from "../assets/paid-karta1-halmstad-uppdrag3-scenario.png";
import paidKarta1HalmstadUppdrag3MapScenario from "../assets/paid-karta1-halmstad-uppdrag3-map-scenario.png";
import paidKarta1OsterlenScenario from "../assets/paid-karta1-osterlen-scenario.png";
import paidKarta1OsterlenUppdrag2Scenario from "../assets/paid-karta1-osterlen-uppdrag2-scenario.png";
import paidKarta1OsterlenUppdrag3Scenario from "../assets/paid-karta1-osterlen-uppdrag3-scenario.png";
import paidKarta1StockholmScenario from "../assets/paid-karta1-stockholm-scenario.png";
import paidKarta1StockholmUppdrag2Scenario from "../assets/paid-karta1-stockholm-uppdrag2-scenario.png";
import paidKarta1StockholmUppdrag3Scenario from "../assets/paid-karta1-stockholm-uppdrag3-scenario.png";
import paidKarta1LundScenario from "../assets/paid-karta1-lund-scenario.png";
import paidKarta1LundUppdrag2Scenario from "../assets/paid-karta1-lund-uppdrag2-scenario.png";
import paidKarta1LundUppdrag3Scenario from "../assets/paid-karta1-lund-uppdrag3-scenario.png";
import paidKarta1VaxjoScenario from "../assets/paid-karta1-vaxjo-scenario.png";
import paidKarta1VaxjoUppdrag1Scenario from "../assets/paid-karta1-vaxjo-uppdrag1-scenario.png";
import paidKarta1VaxjoUppdrag2Scenario from "../assets/paid-karta1-vaxjo-uppdrag2-scenario.png";
import paidKarta1VaxjoUppdrag3Scenario from "../assets/paid-karta1-vaxjo-uppdrag3-scenario.png";
import paidKarta1LinkopingUppdrag1Scenario from "../assets/paid-karta1-linkoping-uppdrag1-scenario.png";
import paidKarta1LinkopingUppdrag2Scenario from "../assets/paid-karta1-linkoping-uppdrag2-scenario.png";
import paidKarta1LinkopingUppdrag3Scenario from "../assets/paid-karta1-linkoping-uppdrag3-scenario.png";
import paidKarta1KarlshamnScenario from "../assets/paid-karta1-karlshamn-scenario.png";
import paidKarta1KarlshamnUppdrag2Scenario from "../assets/paid-karta1-karlshamn-uppdrag2-scenario.png";
import paidKarta1KarlshamnUppdrag3Scenario from "../assets/paid-karta1-karlshamn-uppdrag3-scenario.png";

export const PAID_GROUP_ID = "paid-premium";
export const PAID_GROUP_NAME = "Betald frågor";

const section = (id: string, name: string, questions: Question[] = []): QuestionSection => ({
  id,
  name,
  questions,
});

/**
 * Betald Karta 1 — kartfrågor (Karlstad, Göteborg, Gotland, Borlänge, Bollnäs, Boden, Uppsala, Öland, Halmstad, Österlen, Stockholm, Lund, Växjö, Linköping, Karlshamn).
 * Nya frågor för Karta 2 läggs i `paidKarta2Questions` (sektion paid-karta-2). Karta 3 är tom tills ni fyller den. Svar A=0 … D=3.
 */
const paidKarta1Questions: Question[] = [
  {
    id: "paid-karta-1-q1",
    text: "Hur lång tid tar kundens resa i uppdrag 1?",
    questionImage: paidKarta1KarlstadScenario,
    options: ["Ca 3 min", "Ca 6 min", "Ca 9 min", "Ca 12 min"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q2",
    text: "Hur lång blir körsträckan i uppdrag 2?",
    questionImage: paidKarta1KarlstadUppdrag2Scenario,
    options: ["21 – 25 km", "15 – 20 km", "26 – 30 km", "31 – 35 km"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q3",
    text: "Var ligger skidliften i uppdrag 3?",
    questionImage: paidKarta1KarlstadUppdrag3Scenario,
    options: [
      "Strax väster om Smårissjön",
      "Strax söder om Skåre",
      "Strax väster om Kil",
      "Strax söder om Välsätter",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q4",
    text: "När kan du tidigast vara tillbaka i Centrala Karlstad efter att ha utfört Uppdrag 4? Räkna med 20 minuter extra för att lämna och hjälpa resenären i Arvika.",
    questionImage: paidKarta1KarlstadUppdrag4Scenario,
    options: [
      "Kl 12:50 – 13:10",
      "Kl 13:20 – 13:40",
      "Kl 13:50 – 14:10",
      "Kl 14:50 – 15:10",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q5",
    text: "Hur lång blir kundens resa i uppdrag 1?",
    questionImage: paidKarta2GoteborgScenario,
    options: ["Ca 1 km", "Ca 5 km", "Ca 7 km", "Ca 3 km"],
    correctIndex: 3,
  },
  {
    id: "paid-karta-1-q6",
    text: "I uppdrag 2 är du vid trafikplatsen där du lämnar E20 när klockan är 09.00. Vilken färja kan du tidigast hinna med?",
    questionImage: paidKarta2GoteborgUppdrag2Scenario,
    options: [
      "Den som avgår kl 09:10",
      "Den som avgår kl 10:10",
      "Den som avgår kl 09:40",
      "Den som avgår kl 10:40",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-karta-1-q7",
    text: "Hur lång blir färden på riksväg 40, räknat från att du svängt av E6, i uppdrag 3?",
    questionImage: paidKarta2GoteborgUppdrag3Scenario,
    options: ["Ca 20 km", "Ca 25 km", "Ca 30 km", "Ca 35 km"],
    correctIndex: 0,
  },
  {
    id: "paid-karta-1-q8",
    text: "Precis när du avslutat uppdrag 3 får du en ny kund som vill åka till närmaste campingplats. Var ligger det?",
    questionImage: paidKarta2GoteborgCampingplatsScenario,
    options: [
      "Strax norr om Stora Delsjön",
      "Vid sjön Aspen i Lerum",
      "Vid Landvettersjön",
      "Vid Västra Nedsjö",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-karta-1-q9",
    text: "Hur lång blir kundens resa i uppdrag 1?",
    questionImage: paidKarta3GotlandScenario,
    options: ["Ca 3 km", "Ca 5 km", "Ca 8 km", "Ca 11 km"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-1-q10",
    text: "Hur långt blir restiden för kunden i uppdrag 2?",
    questionImage: paidKarta3GotlandUppdrag2Scenario,
    options: ["Ca 35 min", "Ca 40 min", "Ca 45 min", "Ca 50 min"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-1-q11",
    text: "Hur lång tid tar framkörning till Uppdrag 3?",
    questionImage: paidKarta3GotlandUppdrag3Scenario,
    options: ["Ca 20 min", "Ca 30 min", "Ca 40 min", "Ca 45 min"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q12",
    text: "Efter uppdrag 3 ska du köra den kortaste vägsträckan tillbaka till Visby centrum. Vilka orter passerar du då?",
    questionImage: paidKarta3GotlandVisbyRuttScenario,
    options: [
      "Hemse, Klintehamn, Tofta",
      "Sproge, Klintehamn, Tofta",
      "Hemse, Buttle, Romakloster",
      "Hemse, Hejde, Vall",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-karta-1-q13",
    text: "Hur lång blir körsträckan i uppdrag 1 med framkörningen inräknad?",
    questionImage: paidKarta1BorlangeScenario,
    options: ["Ca 40 km", "Ca 20 km", "Ca 50 km", "Ca 30 km"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-1-q14",
    text: "Hur lång blir kundernas restid till flygplatsen i uppdrag 1? Räkna med medelhastigheten 35 km/h i 5 km genom Borlänge 75 km/h resten av sträckan.",
    questionImage: paidKarta1BorlangeScenario,
    options: ["20 – 23 min", "27 – 30 min", "34 – 37 min", "40 – 43 min"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q15",
    text: "Vilken väg blir kortast till teatern i uppdrag 2?",
    questionImage: paidKarta1BorlangeUppdrag2Scenario,
    options: [
      "Via Grådarondellen och Siljansvägen",
      "Via Kvarnsvedsvägen och Siljansvägen",
      "Via Tjärnavägen och Backaviadukten",
      "Via Backarondellen och Jussi Björlings väg",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-karta-1-q16",
    text: "Hur lång blir kundens resa i uppdrag 3?",
    questionImage: paidKarta1BorlangeUppdrag3Scenario,
    options: ["Ca 1,0 km", "Ca 1,5 km", "Ca 2,0 km", "Ca 3,0 km"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q17",
    text: "I uppdrag 1 ska du räkna med medelhastigheten 55 km/h på grund av morgontrafiken. När kommer skolbarnen tidigast att vara framme vid skolan Ren?",
    questionImage: paidKarta1BollnasScenario,
    options: ["Ca kl 07:45", "Ca kl 08:15", "Ca kl 08:30", "Ca kl 08:00"],
    correctIndex: 3,
  },
  {
    id: "paid-karta-1-q18",
    text: "Hur lång blir framkörning till uppdrag 2?",
    questionImage: paidKarta1BollnasUppdrag2Scenario,
    options: ["Ca 15 km", "Ca 25 km", "Ca 20 km", "Ca 30 km"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-1-q19",
    text: "Hur lång blir sjukresan i uppdrag 3 enligt avståndsmarkeringarna, Räknat från Bollnäs centrum?",
    questionImage: paidKarta1BollnasUppdrag3Scenario,
    options: ["Ca 38 km", "Ca 59 km", "Ca 79 km", "Ca 88 km"],
    correctIndex: 3,
  },
  {
    id: "paid-karta-1-q20",
    text: "När du kör sjukresa i uppdrag 3 är det halt väglag på E4. Medelhastigheten blir därför 40 km/h. Hur lång tid kommer den del av resan som går på E4 att ta?",
    questionImage: paidKarta1BollnasUppdrag3Scenario,
    options: [
      "Ca 1 tim",
      "Ca 1 tim och 15 min",
      "Ca 1 tim och 30 min",
      "Ca 1 tim och 45 min",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q21",
    text: "Hur lång blir kundens restid i uppdrag 1 om du räknar med 35 km/h som medelhastighet?",
    questionImage: paidKarta1BodenScenario,
    options: ["Ca 2 min", "Ca 4 min", "Ca 6 min", "Ca 8 min"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q22",
    text: "När du svänger in på väg 383 mot Boden i uppdrag 2 frågar telefonisten hur lång tid det tar till polisstationen. Hur lång tid tar det?",
    questionImage: paidKarta1BodenUppdrag2Scenario,
    options: ["Ca 12 min", "Ca 18 min", "Ca 24 min", "Ca 30 min"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-1-q23",
    text: "Hur lång resa får kunderna i uppdrag 3?",
    questionImage: paidKarta1BodenUppdrag3Scenario,
    options: ["Ca 50 km", "Ca 60 km", "Ca 70 km", "Ca 80 km"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q24",
    text: "I uppdrag 4 ska du vara på plats 5 minuter innan planet landar. När måste du senast starta från Sjulsmark?",
    questionImage: paidKarta1BodenUppdrag4Scenario,
    options: ["Kl 19.10", "Kl 19.20", "Kl 19.30", "Kl 19.40"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q25",
    text: "När måste du senast starta från Uppsala i uppdrag 1 för att komma till Oxsätra kyrka i tid?",
    questionImage: paidKarta1UppsalaScenario,
    options: ["Ca kl 04:15", "Ca kl 04:25", "Ca kl 04:35", "Ca kl 04:40"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-1-q26",
    text: "När kan du tidigast vara vid Sundbro flygplats i uppdrag 1?",
    questionImage: paidKarta1UppsalaUppdrag1Scenario,
    options: ["Ca kl 05:10", "Ca kl 05:20", "Ca kl 05:25", "Ca kl 05:30"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q27",
    text: "Hur lång sträcka har du kvar att köra i uppdrag 2 när du befinner dig på E18 i höjd med Önsta?",
    questionImage: paidKarta1UppsalaUppdrag2Scenario,
    options: ["Ca 62 km", "Ca 73 km", "Ca 68 km", "Ca 78 km"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-1-q28",
    text: "Vid vilken gata ligger polisstationen i uppdrag 3?",
    questionImage: paidKarta1UppsalaUppdrag3Scenario,
    options: ["Slottsgatan", "Västgötagatan", "Källgatan", "Ängsgärdsgatan"],
    correctIndex: 3,
  },
  {
    id: "paid-karta-1-q29",
    text: "Kunden i uppdrag 1 vill åka högst 15 km norrut. Hur många campingplatser finns det att träffa på?",
    questionImage: paidKarta1OlandScenario,
    options: ["5 st", "6 st", "7 st", "8 st"],
    correctIndex: 0,
  },
  {
    id: "paid-karta-1-q30",
    text: "Du har kommit till Kastlösa. När kan du tidigast hämta kunden i uppdrag 2?",
    questionImage: paidKarta1OlandUppdrag2Scenario,
    options: ["Om 25 – 30 min", "Om 35 – 40 min", "Om 15 – 20 min", "Om 45 – 50 min"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-1-q31",
    text: "I vilken samhälle ligger kyrkan som kunden i uppdrag 3 vill åka till?",
    questionImage: paidKarta1OlandUppdrag3Scenario,
    options: ["Hulterstad", "Segerstad", "Kastlösa", "S Möckleby"],
    correctIndex: 0,
  },
  {
    id: "paid-karta-1-q32",
    text: "Du ska köra kortaste vägen i uppdrag 4 vilka orter passerar du då?",
    questionImage: paidKarta1OlandUppdrag4Scenario,
    options: [
      "Gådslösa och Rälla",
      "Vedby och Rälla",
      "Störlinge och Svarteberga",
      "Störlinge och Köping",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-karta-1-q33",
    text: "Hur långt blir körsträckan från vandrarhemmet till bussterminalen i uppdrag 1?",
    questionImage: paidKarta1HalmstadScenario,
    options: ["Ca 6 km", "Ca 10 km", "Ca 18 km", "Ca 15 km"],
    correctIndex: 3,
  },
  {
    id: "paid-karta-1-q34",
    text: "Hur långt blir kundens restid i uppdrag 2? Räkna med en medelhastighet på 35 km/h för sträckan i Halmstad fram till påfarten till E6 vid väg 25",
    questionImage: paidKarta1HalmstadUppdrag2Scenario,
    options: ["20 – 25 min", "30 – 35 min", "40 – 45 min", "50 – 55 min"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q35",
    text: "När du lämnar E6 söder om Kvibille i uppdrag 3 vill telefonisten veta när du kan vara vid flygplatsen. När är du tidigast vid flygplatsen?",
    questionImage: paidKarta1HalmstadUppdrag3Scenario,
    options: ["Om ca 5 min", "Om ca 15 min", "Om ca 10 min", "Om ca 20 min"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-1-q36",
    text: "Vad betyder de två karttecknen precis till väster om kyrkan i uppdrag 3?",
    questionImage: paidKarta1HalmstadUppdrag3MapScenario,
    options: [
      "Sevärdhet – Fornlämning",
      "Fornlämning – Badplats",
      "Slott – Sevärdhet",
      "Telemast – Vandringsled",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-karta-1-q37",
    text: "När måste du senast lämna Kivik om du skall kunna lämna av sällskapet i uppdrag 1 och ha 10 min till godo?",
    questionImage: paidKarta1OsterlenScenario,
    options: ["Kl 17:50", "Kl 18:00", "Kl 18:15", "Kl 18:20"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q38",
    text: "Du har kommet till Ystad. Hur många minuter är framkörning till kund i uppdrag 2?",
    questionImage: paidKarta1OsterlenUppdrag2Scenario,
    options: ["4 min", "6 min", "8 min", "10 min"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q39",
    text: "På väg tillbaka från uppdrag 2 när du är 10 minuter innan Baskemölla ringer växeln i Kivik och undrar när du tidigast kan vara tillbaka i kivik?",
    questionImage: paidKarta1OsterlenUppdrag2Scenario,
    options: ["Om ca 20 min", "Om ca 25 min", "Om ca 30 min", "Om ca 35 min"],
    correctIndex: 0,
  },
  {
    id: "paid-karta-1-q40",
    text: "Hur lång tid tar kundens resa i uppdrag 3?",
    questionImage: paidKarta1OsterlenUppdrag3Scenario,
    options: ["15 min", "25 min", "35 min", "40 min"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q41",
    text: "Hur lång blir din framkörning till Fresta kyrka i uppdrag 1?",
    questionImage: paidKarta1StockholmScenario,
    options: ["Ca 5 km", "Ca 20 km", "Ca 15 km", "Ca 10 km"],
    correctIndex: 3,
  },
  {
    id: "paid-karta-1-q42",
    text: "Precis när du svängt in på E4 i höjd med Odenslunda i uppdrag 1 frågar kunden hur lång tid det tar innan ni kommer till Arlanda i uppdrag 1. Vilket alternativ är riktigt?",
    questionImage: paidKarta1StockholmScenario,
    options: ["6 – 8 min", "10 – 12 min", "14 – 16 min", "18 – 20 min"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q43",
    text: "När måste du senast starta från Arlanda i uppdrag 2 för att vara vid färjan i Öregrund kl 18.30?",
    questionImage: paidKarta1StockholmUppdrag2Scenario,
    options: ["Ca kl 16:20", "Ca kl 16:40", "Ca kl 17:00", "Ca kl 17:20"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-1-q44",
    text: "På vilken gata ligger polisstationen du ska till i Uppdrag 3?",
    questionImage: paidKarta1StockholmUppdrag3Scenario,
    options: ["Kaplansgatan", "Köpmangatan", "Nygatan", "Storgatan"],
    correctIndex: 3,
  },
  {
    id: "paid-karta-1-q45",
    text: "Hur lång är körsträckan från järnvägstationen till apoteket i uppdrag1?",
    questionImage: paidKarta1LundScenario,
    options: ["Ca 400 m", "Ca 800 m", "Ca 1100 m", "Ca 1500 m"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-1-q46",
    text: "Framkörning i uppdrag 2 går via Gårdstånga. När ska du senast från påfarten till E22 vid Norra Fäladen för att vara framme hos kunden kl: 10.00?",
    questionImage: paidKarta1LundUppdrag2Scenario,
    options: ["Ca kl 09:20", "Ca kl 09:30", "Ca kl 09:40", "Ca kl 09:50"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q47",
    text: "Hur lång blir sträckan som kunden i uppdrag 2 reser?",
    questionImage: paidKarta1LundUppdrag2Scenario,
    options: ["45 – 50 km", "55 – 60 km", "65 – 70 km", "75 – 80 km"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q48",
    text: "Körtiden från motorvägsavfarten öster om Flädie till domkyrkan i uppdrag 3 är ca 15 minuter. Hur lång blir kundens totala restid?",
    questionImage: paidKarta1LundUppdrag3Scenario,
    options: ["Ca 25 min", "Ca 30 min", "Ca 35 min", "Ca 40 min"],
    correctIndex: 0,
  },
  {
    id: "paid-karta-1-q49",
    text: "När måste du senast lämna garaget för att göra din första körning ? Du ska vara på plats 3 min innan utsatt tid",
    questionImage: paidKarta1VaxjoScenario,
    options: ["Kl 07:40", "Kl 07:45", "Kl 07:50", "Kl 07:55"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-1-q50",
    text: "Hur långt blir totala körsträckan från garaget till du lämnat av kunderna i uppdrag 1?",
    questionImage: paidKarta1VaxjoUppdrag1Scenario,
    options: ["Ca 2 km", "Ca 3 km", "Ca 4 km", "Ca 5 km"],
    correctIndex: 3,
  },
  {
    id: "paid-karta-1-q51",
    text: "Hur lång blir kundens resa i uppdrag 2?",
    questionImage: paidKarta1VaxjoUppdrag2Scenario,
    options: ["Ca 2 km", "Ca 4 km", "Ca 6 km", "Ca 8 km"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-1-q52",
    text: "När måste du senast hämta kunderna i uppdrag 3 för att hinna till flygplatsen på utsatt tid?",
    questionImage: paidKarta1VaxjoUppdrag3Scenario,
    options: ["Kl 18:40", "Kl 18:50", "Kl 19:10", "Kl 19:00"],
    correctIndex: 3,
  },
  {
    id: "paid-karta-1-q53",
    text: "Hur lång är framkörningssträckan i uppdrag 1?",
    questionImage: paidKarta1LinkopingUppdrag1Scenario,
    options: ["1,0 km", "1,5 km", "2,0 km", "2,5 km"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q54",
    text: "Du svänger ut på E4 vid Säby, strax söder om Säby frågar telefonisten hur lång tid du beräknas ha kvar till Mantorps motorstadion i uppdrag 2?",
    questionImage: paidKarta1LinkopingUppdrag2Scenario,
    options: ["Ca 12 min", "Ca 18 min", "Ca 15 min", "Ca 21 min"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-1-q55",
    text: "Du är på väg med din kund till Norrköpings flygplats på E4 i uppdrag 2. Vid Bäckeby frågar dig kunden hur långt kvar det är till flygplatsen?",
    questionImage: paidKarta1LinkopingUppdrag2Scenario,
    options: ["23 km", "18 km", "28 km", "33 km"],
    correctIndex: 0,
  },
  {
    id: "paid-karta-1-q56",
    text: "När du på motorvägen mellan Norrköping och Linköping enligt uppdrag 3 och har 10 km kvar på motorvägen börjar det plötsligt att regna. Du måste minska din fart till hälften. Hur mycket längre tid tar din resa?",
    questionImage: paidKarta1LinkopingUppdrag3Scenario,
    options: ["3 – 4 min", "6 – 7 min", "8 – 9 min", "10 – 13 min"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q57",
    text: "När måste du senast hämta kunden i uppdrag 1 för att vara vid kyrkan med 5 minuter marginal?",
    questionImage: paidKarta1KarlshamnScenario,
    options: ["Kl 8:20", "Kl 8:30", "Kl 8:40", "Kl 8:50"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-1-q58",
    text: "När måste du senast hämta kunden i uppdrag 2 för att du ska hinna till lunch på utsatt tid? På Ivön är medelhastigheten ca 40km/h",
    questionImage: paidKarta1KarlshamnUppdrag2Scenario,
    options: ["Kl 12:00", "Kl 12:15", "Kl 12:45", "Kl 12:30"],
    correctIndex: 3,
  },
  {
    id: "paid-karta-1-q59",
    text: "När du är på väg mot Karlshamn för uppdrag 3 vill telefonisten veta när du kan hämta kunden som väntar. Du är i korsningen mellan väg 121 och E22. När kan du tidigast hämta kunden?",
    questionImage: paidKarta1KarlshamnUppdrag3Scenario,
    options: ["4 – 8 min", "9 – 13 min", "17 – 20 min", "21 – 24 min"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-1-q60",
    text: "Hur lång sträcka åker kunden i uppdrag 3?",
    questionImage: paidKarta1KarlshamnUppdrag3Scenario,
    options: ["5 km", "7 km", "10 km", "13 km"],
    correctIndex: 2,
  },
];

/**
 * Betald Karta 2 — nya kartfrågor. ID:n `paid-karta-2-q1` …
 * Svar A=0 … D=3.
 */
const paidKarta2Questions: Question[] = [
  {
    id: "paid-karta-2-q1",
    text: "Hur lång är framkörningen i uppdrag 1 om du kör via Ellstorp och Hornsgatan?",
    questionImage: paidKarta2MalmoUppdrag1Scenario,
    options: ["Ca 3.0 km", "Ca 4.0 km", "Ca 2.5 km", "Ca 3.5 km"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-2-q2",
    text: "Hur lång blir din kundens resa i uppdrag 1?",
    questionImage: paidKarta2MalmoUppdrag2Scenario,
    options: ["20 km", "30 km", "40 km", "50 km"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-2-q3",
    text: "Hur lång blir kundens restid i uppdrag 2? Körtiden i Danmark är 10 minuter, räkna från riksgränsen.",
    questionImage: paidKarta2MalmoUppdrag2Scenario,
    options: ["Ca 30 min", "Ca 35 min", "Ca 40 min", "Ca 45 min"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q4",
    text: "Kunden i uppdrag 3 vill veta vilken buss han hinner med från bussterminalen. Vilken är den tidigaste bussen kunden hinner med? Räkna med en medelhastighet om 30 km/tim.",
    questionImage: paidKarta2MalmoUppdrag3Scenario,
    options: [
      "Bussen som avgår kl. 12.10",
      "Bussen som avgår kl. 12.15",
      "Bussen som avgår kl. 12.20",
      "Bussen som avgår kl. 12.25",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-karta-2-q5",
    text: "Hur lång är korsträckan från apoteket till polis stationen i uppdrag 1?",
    questionImage: paidKarta2LuleaUppdrag1Scenario,
    options: ["Ca 400 m", "Ca 800 m", "Ca 1000 m", "Ca 1200 m"],
    correctIndex: 3,
  },
  {
    id: "paid-karta-2-q6",
    text: "Hur lång blir din framkörning till Morjärv i uppdrag 2? sträckan mellan Luleå och motorväg infart är 5 km.",
    questionImage: paidKarta2LuleaUppdrag2Scenario,
    options: ["Ca 65 km", "Ca 70 km", "Ca 75 km", "Ca 80 km"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q7",
    text: "Hur lång tid blir din resa får kunden i uppdrag 2?",
    questionImage: paidKarta2LuleaUppdrag2Scenario,
    options: ["Ca 45 min", "Ca 55 min", "Ca 75 min", "Ca 65 min"],
    correctIndex: 3,
  },
  {
    id: "paid-karta-2-q8",
    text: "25 km från Älvsbyn i uppdrag 3 blir det halt väglag. Medelhastigheten sänks till hälften. Hur mycket längre tid tar körningen på grund av halkan?",
    questionImage: paidKarta2LuleaUppdrag3Scenario,
    options: ["Ca 20 min", "Ca 25 min", "Ca 30 min", "Ca 35 min"],
    correctIndex: 0,
  },
  {
    id: "paid-karta-2-q9",
    text: "På vilket gatan ligger Apotket i uppdrag 1?",
    questionImage: paidKarta2OstersundScenario,
    options: ["Pastorsgatan", "Prästgatan", "Biblioteksgatan", "Fältjägargänd"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-2-q10",
    text: "Hur långt blir körsträckan från apoteket till du har lämnat av medicine i laserettet i uppdrag 1?",
    questionImage: paidKarta2OstersundUppdrag1Scenario,
    options: ["Ca 61 km", "Ca 66 km", "Ca 71 km", "Ca 77 km"],
    correctIndex: 0,
  },
  {
    id: "paid-karta-2-q11",
    text: "Hur lång blir kundens restiden i uppdrag 2?",
    questionImage: paidKarta2OstersundUppdrag2Scenario,
    options: ["Ca 53 min", "Ca 58 min", "Ca 48 min", "Ca 63 min"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q12",
    text: "På vilket tid Du ska vara tillbaka i garaget som ligger i korsning mellan E14 och väg 87, efter Du klarar uppdrag 3",
    questionImage: paidKarta2OstersundUppdrag3Scenario,
    options: ["Kl. 21.00", "Kl. 21.20", "Kl. 22.00", "Kl. 21.40"],
    correctIndex: 3,
  },
  {
    id: "paid-karta-2-q13",
    text: "I uppdrag 1 ska du räkna med medelhastigheten 45 km/h på grund av morgontrafiken. När kommer skolbarnen tidigast att vara framme vid skolan Ren?",
    questionImage: paidKarta2BollnasUppdrag1Scenario,
    options: ["Ca kl. 07.45", "Ca kl. 08.05", "Ca kl. 08.15", "Ca kl. 08.30"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-2-q14",
    text: "Hur lång blir framkörning till uppdrag 2?",
    questionImage: paidKarta2BollnasUppdrag2Scenario,
    options: ["Ca 25 km", "Ca 35 km", "Ca 45 km", "Ca 55 km"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q15",
    text: "Hur lång blir sjukresan i uppdrag 3 enligt avståndsmarkeringarna? Räknat från Bollnäs centrum",
    questionImage: paidKarta2BollnasUppdrag3Scenario,
    options: ["Ca 115 Km", "Ca 110 Km", "Ca 100 Km", "Ca 105 Km"],
    correctIndex: 0,
  },
  {
    id: "paid-karta-2-q16",
    text: "När du kör sjukresa i uppdrag 3 är det halt väglag på E4. Medelhastigheten blir därför 40 km/h. Hur lång tid kommer den del av resan som går på E4 att ta?",
    questionImage: paidKarta2BollnasUppdrag3Scenario,
    options: [
      "Ca 1 tim och 35 min",
      "Ca 1 tim och 40 min",
      "Ca 1 tim och 45 min",
      "Ca 1 tim och 55 min",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-karta-2-q17",
    text: "Innan du börjar med uppdrag 1 skall du hämta taxibilen i graget vid turistinformationen. Vid vilken gata ligger garaget?",
    questionImage: paidKarta2SkellefteaUppdrag1Scenario,
    options: ["Järnvägsleden", "Trädgårdsgatan", "Strandgatan", "Viktoriagatan"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-2-q18",
    text: "På vägen till Jörn finns en rastplats där kunden vill stanna. Hur långt är det kvar till Jörn i uppdrag 1?",
    questionImage: paidKarta2SkellefteaUppdrag1Scenario,
    options: ["7 km", "13 km", "26 km", "17 km"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q19",
    text: "Hur lång blir kundens restid i uppdrag 2? Räkna med medelhastigheten 40 km/h i 6 km genom Skellefteå",
    questionImage: paidKarta2SkellefteaUppdrag2Scenario,
    options: ["Ca 20 min", "Ca 35 min", "Ca 30 min", "Ca 25 min"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-2-q20",
    text: "Hur lång blir körsträckan i uppdrag 3?",
    questionImage: paidKarta2SkellefteaUppdrag3Scenario,
    options: ["Ca 13 km", "Ca 18 km", "Ca 23 km", "Ca 28 km"],
    correctIndex: 0,
  },
  {
    id: "paid-karta-2-q21",
    text: "Hur lång blir din körning i uppdrag1 om du kör via Ellstrop och Hornsgatan?",
    questionImage: paidKarta2MalmoFourUppdragScenario,
    options: ["Ca 2,5 km", "Ca 3.0 km", "Ca 3.5 km", "Ca 4,0 km"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q22",
    text: "Hur lång blir din körning i uppdrag 2?",
    questionImage: paidKarta2MalmoFourUppdragUppdrag2Scenario,
    options: ["20 km", "30 km", "40 km", "50 km"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-2-q23",
    text: "Hur lång tid tar din körning till flygplats i uppdrag 3?",
    questionImage: paidKarta2MalmoFourUppdragUppdrag3Scenario,
    options: ["Ca 30 min", "Ca 35 min", "Ca 40 min", "Ca 45 min"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-2-q24",
    text: "Vilken bus kan du hinner med om du ska kör vid KI 12:00 från teatern i uppdrag 4?",
    questionImage: paidKarta2MalmoFourUppdragUppdrag4Scenario,
    options: ["KI 12.03", "KI 12.13", "KI 12.08", "KI 12.18"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q25",
    text: "Hur lång blir din framkörning till Fresta kyrka i uppdrag 1?",
    questionImage: paidKarta2StockholmUppdrag1Scenario,
    options: ["Ca 5 km", "Ca 20 km", "Ca 15 km", "Ca 10 km"],
    correctIndex: 3,
  },
  {
    id: "paid-karta-2-q26",
    text: "Precis när du svängt in på E4 i höjd med Hammarby kyrka i uppdrag 1 frågar kunden hur lång tid det tar innan ni kommer till Arlanda. Vilket alternativ är riktigt?",
    questionImage: paidKarta2StockholmUppdrag1E4Scenario,
    options: ["8 min", "12 min", "16 min", "20 min"],
    correctIndex: 0,
  },
  {
    id: "paid-karta-2-q27",
    text: "När måste du senast starta från Arlanda i uppdrag 2 för att vara vid färjan i Kappellskär kl 18.30?",
    questionImage: paidKarta2StockholmUppdrag2Scenario,
    options: ["Ca kl 17.10", "Ca kl 17.30", "Ca kl 17:50", "Ca kl 18.10"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-2-q28",
    text: "På vilken gata ligger polisstationen du ska till i Uppdrag 3?",
    questionImage: paidKarta2StockholmUppdrag3Scenario,
    options: ["Storgatan", "Esplanaden", "Nygatan", "Köpmangatan"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-2-q29",
    text: "På vilket gatan ligger Apoteket i uppdrag 1?",
    questionImage: paidKarta2OstersundNorrScenario,
    options: ["Prästgatan", "Pastorsgatan", "Biblioteksgatan", "Fältjägargänd"],
    correctIndex: 3,
  },
  {
    id: "paid-karta-2-q30",
    text: "Hur långt blir körsträckan från apoteket till du har lämnat av medicine i laserettet i uppdrag 1?",
    questionImage: paidKarta2OstersundNorrUppdrag1Scenario,
    options: ["Ca 55 km", "Ca 65 km", "Ca 75 km", "Ca 85 km"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q31",
    text: "Hur lång blir kundens körsträckan i uppdrag 2?",
    questionImage: paidKarta2OstersundNorrUppdrag2Scenario,
    options: ["Ca 90 km", "Ca 100 km", "Ca 110 km", "Ca 120 km"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q32",
    text: "På vilket tid Du ska vara tillbaka i garaget som ligger i korsning mellan E14 och väg 87, efter Du klarar uppdrag 3",
    questionImage: paidKarta2OstersundNorrUppdrag3Scenario,
    options: ["Kl. 20.15", "Kl. 20.30", "Kl. 20.45", "Kl. 21.00"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-2-q33",
    text: "När måsta du senast lämna Kivik för att kunna utföra i uppdrag 1 med 10 minuter marginal?",
    questionImage: paidKarta2OsterlenKivikUppdrag1Scenario,
    options: ["Ca kl. 18.10", "Ca kl. 17.55", "Ca kl. 17.40", "Ca kl. 18.25"],
    correctIndex: 0,
  },
  {
    id: "paid-karta-2-q34",
    text: "Du tankar bilen på en bensinstationen vid järnvägsstationen i Ystad. Därefter ska du hämta kunden i uppdrag 2. Hur lång blir framkörningen efter tankningen?",
    questionImage: paidKarta2OsterlenKivikUppdrag2Scenario,
    options: ["Ca 4 km", "Ca 7 km", "Ca 10 km", "Ca 13 km"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-2-q35",
    text: "Ca 10 minuter innan du ska lämna av kunden i uppdrag 2 blir du kontaktad av telefonisten som vill veta när du kan vara tillbaka i Kivik. När är du tidigast tillbaka?",
    questionImage: paidKarta2OsterlenKivikOperatorScenario,
    options: ["Om ca 20 min", "Om ca 40 min", "Om ca 30 min", "Om ca 50 min"],
    correctIndex: 0,
  },
  {
    id: "paid-karta-2-q36",
    text: "När kan kunden tidigast vara framme vid torget i uppdrag 3?",
    questionImage: paidKarta2OsterlenKivikUppdrag3Scenario,
    options: ["Kl 01:15", "Kl 01:45", "Kl 01:30", "Kl 02:00"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q37",
    text: "Hur lång tid blir från sjukhuset till polis stationen i uppdrag 1?",
    questionImage: paidKarta2OrebroUppdrag1Scenario,
    options: ["Ca 2.0 min", "Ca 3.0 min", "Ca 4.0 min", "Ca 5.0 min"],
    correctIndex: 0,
  },
  {
    id: "paid-karta-2-q38",
    text: "Hur lång blir din framkörning till Askersund i uppdrag 2 om du ligger i sevärdhet i Rinkaby?",
    questionImage: paidKarta2OrebroUppdrag2Scenario,
    options: ["Ca 70 km", "Ca 75 km", "Ca 65 km", "Ca 80 km"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q39",
    text: "När ska du starta från Askersund för att vara vid flygplats i uppdrag 2?",
    questionImage: paidKarta2OrebroUppdrag2Scenario,
    options: ["Ca kl. 11.25", "Ca kl. 11.35", "Ca kl. 11.40", "Ca kl. 11.30"],
    correctIndex: 3,
  },
  {
    id: "paid-karta-2-q40",
    text: "Hur lång blir din körning till garaget i uppdrag 3 ?",
    questionImage: paidKarta2OrebroUppdrag3Scenario,
    options: ["Ca 15 km", "Ca 30 km", "Ca 25 km", "Ca 20 km"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-2-q41",
    text: "Hur lång blir kundens resa i uppdrag 1?",
    questionImage: paidKarta2GotlandUppdrag1Scenario,
    options: ["Ca 4 km", "Ca 10 km", "Ca 13 km", "Ca 7 km"],
    correctIndex: 3,
  },
  {
    id: "paid-karta-2-q42",
    text: "Hur långt blir restiden för kunden i uppdrag 2?",
    questionImage: paidKarta2GotlandUppdrag2Scenario,
    options: ["Ca 35 min", "Ca 45 min", "Ca 50 min", "Ca 40 min"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q43",
    text: "Hur lång tid tar framkörning till Uppdrag 3?",
    questionImage: paidKarta2GotlandUppdrag3Scenario,
    options: ["Ca 20 min", "Ca 40 min", "Ca 50 min", "Ca 30 min"],
    correctIndex: 0,
  },
  {
    id: "paid-karta-2-q44",
    text: "Efter uppdrag 3 ska du köra den kortaste vägsträckan tillbaka till Visby centrum. Vilka orter passerar du då?",
    questionImage: paidKarta2GotlandTillbakaVisbyScenario,
    options: [
      "Hemse, Buttle, Romakloster",
      "Sproge, Klintehamn, Tofta",
      "Hemse, Hejde, Vall",
      "Hemse, Klintehamn, Tofta",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q45",
    text: "Hur lång blir körsträckan i uppdrag 1 med framkörningen inräknad?",
    questionImage: paidKarta2BorlangeUppdrag1Scenario,
    options: ["Ca 25 km", "Ca 45 km", "Ca 55 km", "Ca 35 km"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q46",
    text: "Hur lång blir kundernas restid till flygplatsen i uppdrag 1? Räkna med medelhastigheten 35 km/tim i 5 km genom Borlänge 75 km/h resten av sträckan.",
    questionImage: paidKarta2BorlangeUppdrag1Scenario,
    options: ["15 – 19 min", "24 – 28 min", "29 – 32 min", "20 – 23 min"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q47",
    text: "Vilken väg blir kortast till Sjukhemmet i uppdrag 2?",
    questionImage: paidKarta2BorlangeUppdrag2Scenario,
    options: [
      "Via Tjärnavägen och Backaviadukten",
      "Via Kvarnsvedsvägen och Siljansvägen",
      "Via Gårdarondellen och Siljansvägen",
      "Via Backarondellen och Jussi Björlings väg",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q48",
    text: "Hur lång blir kundens resa i uppdrag 3?",
    questionImage: paidKarta2BorlangeUppdrag3Scenario,
    options: ["Ca 1,0 km", "Ca 2,0 km", "Ca 2,5 km", "Ca 1,5 km"],
    correctIndex: 0,
  },
  {
    id: "paid-karta-2-q49",
    text: "Du ska vara hos kunden i uppdrag 1 med 3 minuters marginal. När måste du senast lämna garaget?",
    questionImage: paidKarta2VaxjoUppdrag1Scenario,
    options: ["Kl 07:50", "Kl 07:45", "Kl 07:30", "Kl 07:40"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-2-q50",
    text: "Hur långt blir totala körsträckan från garaget till du lämnat av kunderna i uppdrag 1?",
    questionImage: paidKarta2VaxjoUppdrag1Scenario,
    options: ["Ca 3 km", "Ca 4 km", "Ca 2 km", "Ca 5 km"],
    correctIndex: 3,
  },
  {
    id: "paid-karta-2-q51",
    text: "Hur lång blir kundens resa i uppdrag 2?",
    questionImage: paidKarta2VaxjoUppdrag2Scenario,
    options: ["Ca 2 km", "Ca 4 km", "Ca 6 km", "Ca 8 km"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q52",
    text: "När måste du senast hämta kunderna i uppdrag 3 för att hinna till flygplatsen på utsatt tid? Räkna med medelhastigheten 70 km/tim på hela sträckan.",
    questionImage: paidKarta2VaxjoUppdrag3Scenario,
    options: ["Kl 18.40", "Kl 19.20", "Kl 19.00", "Kl 18.20"],
    correctIndex: 1,
  },
  {
    id: "paid-karta-2-q53",
    text: "Hur långt blir körsträckan från vandrarhemmet till slotet i uppdrag 1?",
    questionImage: paidKarta2HalmstadUppdrag1Scenario,
    options: ["Ca 19 km", "Ca 15 km", "Ca 7 km", "Ca 11 km"],
    correctIndex: 0,
  },
  {
    id: "paid-karta-2-q54",
    text: "Hur långt blir kundens restid i uppdrag 2? Räkna med en medelhastighet på 35 km/tim för sträckan i Halmstad fram till påfarten till E6 vid väg 25.",
    questionImage: paidKarta2HalmstadUppdrag2Scenario,
    options: [
      "50 – 55 minuter",
      "40 – 45 minuter",
      "20 – 25 minuter",
      "30 – 35 minuter",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-karta-2-q55",
    text: "Vad betyder de två karttecknen precis till väster om kyrkan i uppdrag 3?",
    questionImage: paidKarta2HalmstadUppdrag3Scenario,
    options: [
      "Slott + sevärdhet",
      "Telemast + vandringsled",
      "Sevärdhet + fornlämning",
      "Fornlämning + badplats",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q56",
    text: "Vid påfarten på E6 i Getinge i uppdrag 3 vill telefonisten veta när du kan vara vid flygplatsen. När är du tidigast vid flygplatsen?",
    questionImage: paidKarta2HalmstadUppdrag3Scenario,
    options: ["Om ca 20 min", "Om ca 15 min", "Om ca 5 min", "Om ca 10 min"],
    correctIndex: 0,
  },
  {
    id: "paid-karta-2-q57",
    text: "När måste du senast lämna Kivik för att hinna utföra uppdrag 1 med 10 minuter marginal?",
    questionImage: paidKarta2OsterlenKivikUppdrag1Scenario,
    options: ["Ca kl. 17.40", "Ca kl. 18.10", "Ca kl. 18.25", "Ca kl. 17.55"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q58",
    text: "Du tankar bilen på en bensinstationen vid järnvägsstationen i Ystad. Därefter ska du hämta kunden i uppdrag 2. Hur lång blir framkörningen efter tankningen?",
    questionImage: paidKarta2OsterlenKivikUppdrag2Scenario,
    options: ["Ca 4 km", "Ca 10 km", "Ca 13 km", "Ca 7 km"],
    correctIndex: 3,
  },
  {
    id: "paid-karta-2-q59",
    text: "Ca 10 minuter innan du ska lämna av kunden i uppdrag 2 blir du kontaktad av telefonisten som vill veta när du kan vara tillbaka i Kivik. När är du tidigast tillbaka?",
    questionImage: paidKarta2OsterlenKivikOperatorScenario,
    options: ["Om ca 50 min", "Om ca 40 min", "Om ca 20 min", "Om ca 30 min"],
    correctIndex: 2,
  },
  {
    id: "paid-karta-2-q60",
    text: "När kan kunden tidigast vara framme vid torget i uppdrag 3?",
    questionImage: paidKarta2OsterlenKivikUppdrag3Scenario,
    options: ["Ca kl. 02.45", "Ca kl. 02.15", "Ca kl. 02.30", "Ca kl. 03.00"],
    correctIndex: 2,
  },
];

/** Betald Säkerhet 1 — frågor med tillhörande bilder. Svar A=0 … D=3. */
const paidSakerhet1Questions: Question[] = [
  {
    id: "paid-sakerhet-1-q1",
    text: "Fyra personer ska åka från centrum till flygplatsen en söndagsmorgon kl. 05.30. Sträckan är 5 km. Vad blir priset för resan enligt Prisinformationens jämförpris?",
    questionImage: paidSakerhet1PrisinformationScenario,
    options: ["Ca 135 kronor", "Ca 160 kronor", "Ca 170 kronor", "Ca 185 kronor"],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-1-q2",
    text: "Du ska skjutsa en mamma och hennes 14-åriga dotter i din taxi. Vem är ansvarig för att dottern använder bilbältet?",
    options: ["Jag som förare", "14-åringen själv", "Mamma som vårdnadshavare"],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-1-q3",
    text: "Ett barn som är 6 år ska åka i din taxi. Vilken typ av säkerhetsutrustning är lämpligast för detta barn?",
    options: ["Babyskydd", "Bälteskudde", "Bilbarnstol"],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-1-q4",
    text: "Vad är riktigt om vad du som taxiförare får berätta om vad som hänt i din bil?",
    options: [
      "Jag är skyldig att berätta vad som har hänt i bilen om en journalist frågar",
      "Om jag ska vittna i en rättegång har jag rätt att låta bli att berätta sådant som har hänt i bilen",
      "Jag har samma tystnadsplikt som en läkare eller advokat",
      "Vilken tystnadsplikt jag har framgår vanligen av en överenskommelse med åkeriet eller beställningscentralen",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-1-q5",
    text: "Vilket av följande påverkar risken för vattenplaning mest?",
    options: [
      "Bakdäckens lufttryck",
      "Däckens omkrets",
      "Däckens mönsterdjup",
      "Framdäckens lufttryck",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-1-q6",
    text: "Du kommer till en trafikolycksplats där flera personer har skadats och blöder. Vilken skyddsutrustning är viktigast att du använder?",
    options: ["Skyddsglasögon", "Gummihandskar", "Andningsskydd", "Skoskydd"],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-1-q7",
    text: "Du misstänker att din kund är drogpåverkad. Han uppträder hotfullt mot dig. Vad gäller?",
    options: [
      "Jag får avbryta transporten och avvisa kunder",
      "Jag måste fullfölja transporten om kunden begär det",
      "Jag måste tillkalla polis för att avvisa kunden",
      "Jag måste åka med kunden till närmaste sjukhus",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-1-q8",
    text: "Du får en körning där kunden är vuxen och har cerebral pares (CP). Vad innebär detta?",
    options: [
      "Kunden kan ha svårt att ta emot information",
      "Kunden kan ha okontrollerade rörelser",
      "Kunden saknar begrepp om att använda pengar",
      "Kunden har dålig lokalkännedom",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-1-q9",
    text: "Vad bör du göra för att minska miljöeffekterna vid kallstart?",
    options: [
      "Tomgångsköra med förhöjt",
      "Varvtal minst 1 minut",
      "Tomgångsköra minst 2 minuter",
      "Köra direkt men med lätt gaspådrag",
      "Tomgångsköra minst 3 minuter",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-1-q10",
    text: "Din kund får ett epileptiskt anfall. Hur ska du agera för att hjälpa honom?",
    options: [
      "Skydda honom från att slå sig",
      "Ge honom något att dricka",
      "Genast föra honom till sjukhus",
      "Hålla fast honom",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-1-q11",
    text: "När du kontrollerar motoroljan i din personbil ser du att den är gråvit. Vilken är den troligaste orsaken?",
    options: [
      "Mineralolja har blandats med syntetisk olja",
      "Oljan har blivit överhettad och skadad",
      "Kylvatten har blandats med motoroljan",
      "Delsyntetisk olja har blandats med syntetisk olja",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-1-q12",
    text: "Vad är riktigt beträffande katalysatorn i en bensindriven bil?",
    options: [
      "Avgaserna blir renade från alla skadliga ämnen",
      "För att fungera effektivt måste den uppnå en hög temperatur",
      "Den fungerar effektivt redan från start",
      "Alla sotpartiklar i avgaserna tas bort",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-1-q13",
    text: "Hur länge får du använda dubbdäck på din taxi om det inte är vinterväglag eller förväntas bli vinterväglag?",
    options: [
      "Till och med 28 februari",
      "Till och med 31 mars",
      "Till och med första vardagen efter påsk",
      "Till och med 30 april",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-1-q14",
    text: "Höger riktningsljus börjar blinka fortare än det vänstra på din bil. Vad kan det bero på?",
    options: [
      "Säkringen har för högt amperetal",
      "Glödlampan är av fel typ",
      "Glödlampan är trasig",
      "Säkringen har för lågt amperetal",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-1-q15",
    text: "Vad innebär det om den här kontrollampan tänds under färd?",
    questionImage: paidSakerhet1AbsKontrollampaScenario,
    options: [
      "Det är för lite vätska i bromssystemet",
      "Det låsningsfria bromssystemet är aktiverat",
      "Det låsningsfria bromssystemet är ur funktion",
      "Det automatiska bränslesystemet är ur funktion",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-1-q16",
    text: "Din taxi har navigationsutrustning (GPS). Vilket navigationssystem stör uppmärksamheten mest under körning?",
    options: [
      "Ett med information som tal",
      "De olika typerna stör lika mycket",
      "Informationen genom bild och text",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-1-q17",
    text: "Vad menas med demenstillstånd?",
    options: [
      "Minnessvårigheter orsakade av sjukdom i hjärnan",
      "Ökad rädsla för andra människor",
      "Sömnlöshet och oro",
      "Nedsatt rörelseförmåga på grund av ålder",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-1-q18",
    text: "Hur stor andel av personbilsförarna som dör i trafikolyckor varje år beräknas ha alkohol i kroppen?",
    options: ["5–10 %", "15–20 %", "25–30 %", "55–60 %"],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-1-q19",
    text: "Du har köpt en doftgran och placerat den i din taxibil. Kan den orsaka några hälsobesvär för dina kunder?",
    options: [
      "Nej, en enda doftgran kan inte orsaka några besvär",
      "Ja, den kan orsaka huvudvärk, men enbart i kombination med parfymämnen",
      "Ja, den kan orsaka luftvägsbesvär, men enbart om kunden åker längre sträcka",
      "Ja, den kan utlösa ett astmaanfall",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-1-q20",
    text: "Vilka är de vanligaste problemen för en person som har reumatism?",
    options: [
      "Ångest och oro",
      "Dålig balans",
      "Värk och svullnader i lederna",
      "Skakningar i armar och ben",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-1-q21",
    text: "Du tar en rökpaus utanför din taxi. Kan det påverka din nästa kunds hälsa?",
    options: [
      "Ja, kunden kan få allergiska besvär",
      "Nej, passiv rökning är inte hälsofarligt",
      "Nej, om inte röken har blåst in i bilen",
      "Ja, kunden kan få ett epileptiskt anfall",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-1-q22",
    text: "Hur kan du som förare minska risken för olyckor?",
    options: [
      "Jag kör impulsivt",
      "Jag kör med säkerhetsmarginaler",
      "Jag tränar reaktionsförmågan",
      "Jag kör offensivt",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-1-q23",
    text: "Kan en alkoholpåverkad bilförare bli straffad för rattfylleri om han eller hon har mindre än 0,2 promille alkohol i blodet?",
    options: [
      "Ja, om det kan antas att föraren inte kan framföra fordonet på ett betryggande sätt",
      "Ja, men endast om föraren blir inblandad i en trafikolycka",
      "Ja, eftersom vi har en nollgräns för alkohol i samband med bilkörning",
      "Nej",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-1-q24",
    text: "Du vet att din passagerare på en lång sjukresa är diabetiker. I början av resan blir han allt mer lågmäld och verkar vara på väg att förlora medvetandet. Vad bör du göra först?",
    options: [
      "Jag stannar bilen och uppmanar passageraren att ta en insulininjektion",
      "Jag stannar bilen och öppnar dörren så att passageraren får frisk luft",
      "Jag stannar bilen och uppmanar passageraren att äta något som innehåller socker",
      "Jag försöker få kontakt med det sjukhus vi är på väg till och kör dit så fort som möjligt",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-1-q25",
    text: "Hur ska du agera mot en kund som har Parkinsons sjukdom?",
    options: [
      "Jag frågar om kunden har några speciella önskemål om hjälp",
      "Jag ser till att kunden sitter med stöd för armarna",
      "Jag kontrollerar om kunden har något signalmärke eller hälsokort på sig",
      "Jag ringer omedelbart till 112",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-1-q26",
    text: "Du kör i 30 km/tim. Hur bör du agera i situationen på bilden?",
    questionImage: paidSakerhet1BarnVagScenario,
    options: [
      "Jag fortsätter i samma hastighet och är beredd på att bromsa",
      "Jag stannar och låter gruppen med barn lämna området",
      "Jag sänker hastigheten och är beredd på att bromsa",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-1-q27",
    text: "Vad bör du göra med använd motorolja?",
    options: [
      "Hälla den i ett kommunalt avlopp, eftersom den då avskiljs på reningsverket",
      "Bränna upp den",
      "Lämna in den till en miljöstation, eftersom den klassas som miljöfarligt avfall",
      "Spara och använda den som smörjmedel, exempelvis till cykelkedjan",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-1-q28",
    text: "Du råkar ut för en frontalkrock med din bil. Bilen har krockkudden. Har det någon betydelse om du använder bilbälte i den situationen?",
    options: [
      "Nej, krockkudden ersätter bilbältet",
      "Ja, krockkudden är ett komplement till bilbältet",
      "Ja, om jag använder bilbälte kan jag inte skydda mig genom att kasta mig åt sidan",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-1-q29",
    text: "Vilket är det viktigaste skälet till att du som taxiförare bör undvika parfym och andra starka dofter i bilen?",
    options: [
      "Parfymen kan dölja andra dofter, till exempel kolmonoxidläckage från avgassystemet",
      "Doften kan utlösa ett astmaanfall hos en passagerare med astma",
      "Passagerarna kanske inte tycker om parfymen",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-1-q30",
    text: "Bussen har stannat vid en hållplats och du ska köra rakt fram i situationen på bilden. Vilket kan bli det första olyckstillbud som du ska vara beredd på?",
    questionImage: paidSakerhet1BussHallplatsScenario,
    options: [
      "Att fotgängare går ut på det andra övergångsstället",
      "Att trafik kommer från höger i korsningen",
      "Att fotgängare går ut framför bussen",
      "Att fotgängare går ut på det första övergångsstället",
      "Att bussen lämnar hållplatsen utan att tydligt visa sina avsikter",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-1-q31",
    text: "Du kör en taxi som är utrustad med airbag på passagerarsidan. Vad är sant om att placera en kund som är kortare än 140 cm på främre passagerarsäte?",
    options: [
      "Det är farligt enbart om personen inte använder bilbälte",
      "Det är farligt enbart om bilen körs i hög hastighet",
      "Det är farligt oavsett bilens hastighet",
      "Det är farligt enbart om personen sitter i en bilbarnstol",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-1-q32",
    text: "Din kund har nedsatt rörelseförmåga och du kan inte köra ända fram till hotellets entré. Hur ska du hantera kundens bagage?",
    options: [
      "Jag frågar kunden var han vill ha det",
      "Jag bär fram det till hotellets entré",
      "Jag ställer det utanför bilen",
      "Jag bär in det till receptionen",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-1-q33",
    text: "På vilken av bilderna används bilbältet bäst för att skydda vid en trafikolycka?",
    questionImage: paidSakerhet1BilbalteAbcdScenario,
    options: ["Bild A", "Bild B", "Bild C", "Bild D"],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-1-q34",
    text: "En taxiförare har just fått besked om att en närstående till honom har blivit svårt sjuk. Kan det påverka hans körförmåga?",
    options: [
      "Ja, han kan få svårt att koncentrera sig",
      "Nej",
      "Ja, han blir sannolikt mer uppmärksam i trafiken",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-1-q35",
    text: "Du kommer fram till en olycksplats och ser att en person blöder kraftigt i benet. Du låter honom lägga sig ned. Vad bör du mer göra?",
    options: [
      "Hålla benet lågt och binda om skadan med exempelvis en halsduk",
      "Hålla benet högt och binda om skadan med exempelvis en halsduk",
      "Hålla benet högt och lämna såret öppet för att blodet ska rensa bort smuts och bakterier",
      "Hålla benet lågt och lämna såret öppet för att blodet ska rensa bort smuts och bakterier",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-1-q36",
    text: "Gör det någon skillnad för miljön om man kör med breda lågprofildäck i stället för smalare standarddäck?",
    options: [
      "Ja, luftmotståndet ökar markant med breda däck",
      "Ja, rullmotståndet ökar markant med breda däck",
      "Nej",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-1-q37",
    text: "Du ska lasta rollatorn på bilden i din taxi. Vilken bokstav markerar den spärr som måste frigöras när du ska fälla ihop rollatorn?",
    questionImage: paidSakerhet1RollatorScenario,
    options: ["Bokstav A", "Bokstav B", "Bokstav C", "Bokstav D"],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-1-q38",
    text: "Vilken är den största risken i situationen på bilden?",
    questionImage: paidSakerhet1BarnKorsningScenario,
    options: [
      "Barnet i korsningen kan cykla omkull",
      "Det kan komma en bil från vänster i korsningen",
      "Det kan komma ytterligare ett barn från höger i korsningen",
      "Det kan komma en bil från höger i korsningen",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-1-q39",
    text: "Vilken sjukdom beskrivs texten på bilden?",
    questionImage: paidSakerhet1PsykosDefinitionScenario,
    options: ["Afasi", "Apati", "Allergi", "Psykos"],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-1-q40",
    text: "Vid säkerhetskontroll upptäcker du att det är för lite vätska i behållaren med bromsvätska. Vad bör du göra?",
    options: [
      "Omedelbart lämna in bilen på verkstad eftersom man inte får fylla på sådan vätska själv",
      "Fortsätta köra som vanligt och låta verkstaden fylla på bromsvätska vid den ordinarie servicen",
      "Själv fylla på med bromsvätska enligt instruktionsboken",
      "Själv fylla på med samma sorts olja som finns i motorn",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-1-q41",
    text: "Kunden du hämtar har vit käpp, vad tyder det på?",
    options: [
      "Att kunden är synskadad",
      "Att kunden har nedsatt rörelseförmåga",
      "Att kunden är hörselskadad",
      "Att kunden är dement",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-1-q42",
    text: "Vilket förnyelsebart bränsle blandas in i nästan all bensin i Sverige i dag?",
    options: ["Benzen", "Biogas", "Diesel", "Etanol"],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-1-q43",
    text: "Du startar bilen som har kall motor. Hur snart bör du börja köra för att miljön ska påverkas så lite som möjligt av bilens avgaser?",
    options: [
      "Efter 1 minut",
      "Omgående",
      "Efter 3 minuter",
      "När motorn har uppnått normal arbetstemperatur",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-1-q44",
    text: "Du upptäcker att motortemperaturen är för hög. Vad kan felet vara?",
    options: [
      "Värmen i kupén är för låg",
      "Kylvätskan innehåller för mycket glykol",
      "Värmen i kupén är hög",
      "Fläkten till kylaren har gått sönder",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-1-q45",
    text: "Vilken är den viktigaste anledningen till att man ska lägga en medvetslös person i stabilt sidoläge?",
    options: [
      "För att lättare kunna avgöra om personen andas",
      "För att minska blödningsrisken",
      "För att förhindra att personen kvävs",
      "För att förhindra att personen blir nedkyld",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-1-q46",
    text: "Din taxi är utrustad med krockkudde på passagerarplatsen fram. Hur lång bör passageraren minst vara för att sitta säkert där?",
    options: ["100 cm", "120 cm", "140 cm", "160 cm"],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-1-q47",
    text: "Vad är fobi?",
    options: [
      "En stark överdriven rädsla för en sak eller en situation",
      "En psykisk störning som inverkar på synfältet",
      "En oförklarlig nedstämdhet under en längre period",
      "Ett stort behov av uppmärksamhet",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-1-q48",
    text: "Din kund har demens. Vad innebär det?",
    options: [
      "Kunden har talsvårigheter",
      "Kunden har nedsatt rörelseförmåga",
      "Kunden har minnessvårigheter",
      "Kunden har svåra allergier",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-1-q49",
    text: "Säkringen till helljuslampan har gått sönder. Vad händer om du monterar en säkring med för lågt amperetal?",
    options: [
      "Lampan lyser svagare",
      "Lampan lyser starkare",
      "Risken för kabelbrand ökar",
      "Det är större risk att säkringen går sönder",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-1-q50",
    text: "Vad bör du göra inför vintern för att undvika kostsamma reparationer på ditt fordon?",
    options: [
      "Byta till vintertermostat",
      "Byta motor- och växellådsolja",
      "Kontrollera att frostskyddet i kylarvätskan är tillräckligt",
      "Justera framvagnen",
    ],
    correctIndex: 2,
  },
];

/**
 * Betald frågebank — egna sektioner och frågor (kopplas inte till Teoriprovet).
 * Lägg till `Question`-objekt i respektive sektions `questions`-array.
 */
export const paidQuestionGroup: CategoryGroup = {
  id: PAID_GROUP_ID,
  name: PAID_GROUP_NAME,
  categories: [
    {
      id: "paid-sakerhet",
      name: "Säkerhet",
      sections: [
        section("paid-sakerhet-1", "Säkerhet 1", paidSakerhet1Questions),
        section("paid-sakerhet-2", "Säkerhet 2"),
        section("paid-sakerhet-3", "Säkerhet 3"),
      ],
    },
    {
      id: "paid-lagstiftning",
      name: "Lagstiftning",
      sections: [
        section("paid-lagstiftning-1", "Lagstiftning 1"),
        section("paid-lagstiftning-2", "Lagstiftning 2"),
        section("paid-lagstiftning-3", "Lagstiftning 3"),
        section("paid-lagstiftning-4", "Lagstiftning 4"),
        section("paid-lagstiftning-5", "Lagstiftning 5"),
        section("paid-lagstiftning-6", "Lagstiftning 6"),
      ],
    },
    {
      id: "paid-karta",
      name: "Karta",
      sections: [
        {
          id: "paid-karta-1",
          name: "Karta 1",
          questions: paidKarta1Questions,
        },
        {
          id: "paid-karta-2",
          name: "Karta 2",
          questions: paidKarta2Questions,
        },
        section("paid-karta-3", "Karta 3"),
      ],
    },
  ],
};
