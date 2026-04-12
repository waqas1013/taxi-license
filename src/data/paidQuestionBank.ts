import type { CategoryGroup, Question, QuestionSection } from "../types/questions";
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
        section("paid-sakerhet-1", "Säkerhet 1"),
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
