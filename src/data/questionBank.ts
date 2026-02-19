import { CategoryGroup, QuestionSection } from "../types/questions";
import sakerhetOlyckaForklaringImage from "../assets/sakerhet-olycka-forklaring.png";
import sakerhetOlyckaPolisenForklaringImage from "../assets/sakerhet-olycka-polisen-forklaring.png";
import sakerhetMedvetslosForklaringImage from "../assets/sakerhet-medvetslos-forklaring.png";
import sakerhetMedvetslosRyggForklaringImage from "../assets/sakerhet-medvetslos-rygg-forklaring.png";
import sakerhetLuftstrupeForklaringImage from "../assets/sakerhet-luftstrupe-forklaring.png";
import sakerhetHalsokortFragaImage from "../assets/sakerhet-halsokort-fraga.png";
import sakerhetHalsokortForklaringImage from "../assets/sakerhet-halsokort-forklaring.png";
import sakerhetAfasiFragaImage from "../assets/sakerhet-afasi-fraga.png";
import sakerhetAfasiForklaringImage from "../assets/sakerhet-afasi-forklaring.png";
import sakerhetAstmaForklaringImage from "../assets/sakerhet-astma-forklaring.png";
import sakerhetAstmaMarkeFragaImage from "../assets/sakerhet-astma-marke-fraga.png";
import sakerhetAstmaMarkeForklaringImage from "../assets/sakerhet-astma-marke-forklaring.png";
import sakerhetBlodarsjukaForklaringImage from "../assets/sakerhet-blodarsjuka-forklaring.png";
import sakerhetDiabetesForklaringImage from "../assets/sakerhet-diabetes-forklaring.png";
import sakerhetInsulinkanningForklaringImage from "../assets/sakerhet-insulinkanning-forklaring.png";
import sakerhetEpilepsiFragaImage from "../assets/sakerhet-epilepsi-fraga.png";
import sakerhetEpilepsiForklaringImage from "../assets/sakerhet-epilepsi-forklaring.png";
import sakerhetHjartfelFragaImage from "../assets/sakerhet-hjartfel-fraga.png";
import sakerhetHjartfelForklaringImage from "../assets/sakerhet-hjartfel-forklaring.png";
import sakerhetDefibrillatorFragaImage from "../assets/sakerhet-defibrillator-fraga.png";
import sakerhetDefibrillatorForklaringImage from "../assets/sakerhet-defibrillator-forklaring.png";
import sakerhetStrokeForklaringImage from "../assets/sakerhet-stroke-forklaring.png";
import sakerhetKarlkrampForklaringImage from "../assets/sakerhet-karlkramp-forklaring.png";
import sakerhetCpForklaringImage from "../assets/sakerhet-cp-forklaring.png";
import sakerhetAidsForklaringImage from "../assets/sakerhet-aids-forklaring.png";
import sakerhetAutismForklaringImage from "../assets/sakerhet-autism-forklaring.png";
import sakerhetFobiForklaringImage from "../assets/sakerhet-fobi-forklaring.png";
import sakerhetHandikappForklaringImage from "../assets/sakerhet-handikapp-forklaring.png";
import sakerhetBilbalteForklaringImage from "../assets/sakerhet-bilbalte-forklaring.png";
import sakerhetBilbarnstolForklaringImage from "../assets/sakerhet-bilbarnstol-forklaring.png";
import sakerhetBarnstolFramsateForklaringImage from "../assets/sakerhet-barnstol-framsate-forklaring.png";
import sakerhetMinimilangdForklaringImage from "../assets/sakerhet-minimilangd-forklaring.png";
import sakerhetSidolageFragaImage from "../assets/sakerhet-sidolage-fraga.png";
import sakerhetPRutaFragaImage from "../assets/sakerhet-p-ruta-fraga.png";
import sakerhetMsForklaringImage from "../assets/sakerhet-ms-forklaring.png";
import sakerhetAirbagLampaFragaImage from "../assets/sakerhet-airbag-lampa-fraga.png";
import sakerhetPsykosFragaImage from "../assets/sakerhet-psykos-fraga.png";
import sakerhetFobiFragaImage from "../assets/sakerhet-fobi-fraga.png";
import sakerhetLambdasondForklaringImage from "../assets/sakerhet-lambdasond-forklaring.png";
import sakerhetDackLufttryckForklaringImage from "../assets/sakerhet-dack-lufttryck-forklaring.png";
import sakerhetDackSlitageForklaringImage from "../assets/sakerhet-dack-slitage-forklaring.png";
import sakerhetBalanseringForklaringImage from "../assets/sakerhet-balansering-forklaring.png";
import sakerhetFramhjulsinstallningForklaringImage from "../assets/sakerhet-framhjulsinstallning-forklaring.png";
import sakerhetBromsbelaggForklaringImage from "../assets/sakerhet-bromsbelagg-forklaring.png";
import sakerhetSkivbromsarForklaringImage from "../assets/sakerhet-skivbromsar-forklaring.png";
import sakerhetSakringForklaringImage from "../assets/sakerhet-sakring-forklaring.png";
import sakerhetDieselForklaringImage from "../assets/sakerhet-diesel-forklaring.png";
import sakerhetForvarmningDieselForklaringImage from "../assets/sakerhet-forvarmning-diesel-forklaring.png";
import sakerhetSvartRookForklaringImage from "../assets/sakerhet-svart-rook-forklaring.png";
import sakerhetDieselKraftlosForklaringImage from "../assets/sakerhet-diesel-kraftlos-forklaring.png";
import sakerhetDieselParkeringForklaringImage from "../assets/sakerhet-diesel-parkering-forklaring.png";
import sakerhetKylsystemForklaringImage from "../assets/sakerhet-kylsystem-forklaring.png";
import sakerhetOljelampaFragaImage from "../assets/sakerhet-oljelampa-fraga.png";
import sakerhetOljetryckForklaringImage from "../assets/sakerhet-oljetryck-forklaring.png";
import sakerhetKylvatskaLampaFragaImage from "../assets/sakerhet-kylvatska-lampa-fraga.png";
import sakerhetKylvatskaLampaForklaringImage from "../assets/sakerhet-kylvatska-lampa-forklaring.png";
import sakerhetTempHanteraFragaImage from "../assets/sakerhet-temp-hantera-fraga.png";
import sakerhetTempHanteraForklaringImage from "../assets/sakerhet-temp-hantera-forklaring.png";
import sakerhetBatteriVatskaForklaringImage from "../assets/sakerhet-batteri-vatska-forklaring.png";
import sakerhetBatteriKapacitetForklaringImage from "../assets/sakerhet-batteri-kapacitet-forklaring.png";
import sakerhetElsystemStromForklaringImage from "../assets/sakerhet-elsystem-strom-forklaring.png";
import sakerhetGeneratorLaddarInteForklaringImage from "../assets/sakerhet-generator-laddar-inte-forklaring.png";
import sakerhetKontrollampaGeneratorFragaImage from "../assets/sakerhet-kontrollampa-generator-fraga.png";
import sakerhetStyrinrattningForklaringImage from "../assets/sakerhet-styrinrattning-forklaring.png";
import sakerhetFotbromsForklaringImage from "../assets/sakerhet-fotbroms-forklaring.png";
import sakerhetStyrservoKontrollForklaringImage from "../assets/sakerhet-styrservo-kontroll-forklaring.png";
import sakerhetBromslampaFragaImage from "../assets/sakerhet-bromslampa-fraga.png";
import sakerhetBromslampaForklaringImage from "../assets/sakerhet-bromslampa-forklaring.png";
import sakerhetAbsForklaringImage from "../assets/sakerhet-abs-forklaring.png";
import sakerhetSommardackForklaringImage from "../assets/sakerhet-sommardack-forklaring.png";
import sakerhetDackDrarForklaringImage from "../assets/sakerhet-dack-drar-forklaring.png";
import sakerhetSlitagevarnareForklaringImage from "../assets/sakerhet-slitagevarnare-forklaring.png";
import sakerhetKamaxelremForklaringImage from "../assets/sakerhet-kamaxelrem-forklaring.png";
import sakerhetKultryckForklaringImage from "../assets/sakerhet-kultryck-forklaring.png";
import sakerhetAstmaAnfallForklaringImage from "../assets/sakerhet-astma-anfall-forklaring.png";
import sakerhetDackLufttryckForklaringImage from "../assets/sakerhet-dack-lufttryck-forklaring.png";
import sakerhetKonstgjordAndningForklaringImage from "../assets/sakerhet-konstgjord-andning-forklaring.png";
import sakerhetAbsFordelarForklaringImage from "../assets/sakerhet-abs-fordelar-forklaring.png";
import sakerhetTrotthetForklaringImage from "../assets/sakerhet-trotthet-forklaring.png";
import sakerhetEkonomisktKorsattForklaringImage from "../assets/sakerhet-ekonomiskt-korsatt-forklaring.png";
import sakerhetLyftteknikForklaringImage from "../assets/sakerhet-lyftteknik-forklaring.png";
import sakerhetBilbalteLivForklaringImage from "../assets/sakerhet-bilbalte-liv-forklaring.png";
import sakerhetTrotthetSingelolyckaForklaringImage from "../assets/sakerhet-trotthet-singelolycka-forklaring.png";
import sakerhetHuvudstodFragaImage from "../assets/sakerhet-huvudstod-fraga.png";
import sakerhetHuvudstodForklaringImage from "../assets/sakerhet-huvudstod-forklaring.png";
import sakerhetDiabetesOmtocknadForklaringImage from "../assets/sakerhet-diabetes-omtocknad-forklaring.png";
import sakerhetNollvisionenForklaringImage from "../assets/sakerhet-nollvisionen-forklaring.png";
import sakerhetVinterKylsystemForklaringImage from "../assets/sakerhet-vinter-kylsystem-forklaring.png";
import sakerhetHjartinfarktForklaringImage from "../assets/sakerhet-hjartinfarkt-forklaring.png";
import sakerhetVinterdackMonsterdjupForklaringImage from "../assets/sakerhet-vinterdack-monsterdjup-forklaring.png";
import sakerhetLedgangsreumatismForklaringImage from "../assets/sakerhet-ledgangsreumatism-forklaring.png";
import sakerhetBilbarnstolForklaringImage from "../assets/sakerhet-bilbarnstol-forklaring.png";
import sakerhetMobiltelefonUpphinnandeolyckorForklaringImage from "../assets/sakerhet-mobiltelefon-upphinnandeolyckor-forklaring.png";
import sakerhetServostyrningForklaringImage from "../assets/sakerhet-servostyrning-forklaring.png";
import sakerhetKallstartMiljoForklaringImage from "../assets/sakerhet-kallstart-miljo-forklaring.png";
import sakerhetKatalysatorKoldioxidForklaringImage from "../assets/sakerhet-katalysator-koldioxid-forklaring.png";
import sakerhetRollatorFragaImage from "../assets/sakerhet-rollator-fraga.png";
import sakerhetRollatorForklaringImage from "../assets/sakerhet-rollator-forklaring.png";
import sakerhetBromsvarningslampaFragaImage from "../assets/sakerhet-bromsvarningslampa-fraga.png";
import sakerhetBromsvarningslampaForklaringImage from "../assets/sakerhet-bromsvarningslampa-forklaring.png";
import sakerhetHydraulisktBromssystemForklaringImage from "../assets/sakerhet-hydrauliskt-bromssystem-forklaring.png";
import sakerhetDemensForklaringImage from "../assets/sakerhet-demens-forklaring.png";
import sakerhetSidokollisionForklaringImage from "../assets/sakerhet-sidokollision-forklaring.png";
import sakerhetTungLastKurvorForklaringImage from "../assets/sakerhet-tung-last-kurvor-forklaring.png";
import sakerhetLastsakringForklaringImage from "../assets/sakerhet-lastsakring-forklaring.png";
import sakerhetRadialdackLufttryckLivslangdForklaringImage from "../assets/sakerhet-radialdack-lufttryck-livslangd-forklaring.png";
import sakerhetOlycksplatsFlyttaFordonForklaringImage from "../assets/sakerhet-olycksplats-flytta-fordon-forklaring.png";
import sakerhetSlapvagnKultryckForklaringImage from "../assets/sakerhet-slapvagn-kultryck-forklaring.png";
import sakerhetTaxiprisBerakningFragaImage from "../assets/sakerhet-taxipris-berakning-fraga.png";
import sakerhetTaxiprisBerakningForklaringImage from "../assets/sakerhet-taxipris-berakning-forklaring.png";
import sakerhetEpilepsiSymbolFragaImage from "../assets/sakerhet-epilepsi-symbol-fraga.png";
import sakerhetEpilepsiSymbolForklaringImage from "../assets/sakerhet-epilepsi-symbol-forklaring.png";
import sakerhetStartkablarTaxiForklaringImage from "../assets/sakerhet-startkablar-taxi-forklaring.png";
import sakerhetKrockkuddePassagerareForklaringImage from "../assets/sakerhet-krockkudde-passagerare-forklaring.png";
import sakerhetMotorvarmareTidForklaringImage from "../assets/sakerhet-motorvarmare-tid-forklaring.png";
import sakerhetReaktionsstrackaMobilForklaringImage from "../assets/sakerhet-reaktionsstracka-mobil-forklaring.png";
import sakerhetBaltesstolBalteskuddeForklaringImage from "../assets/sakerhet-baltesstol-balteskudde-forklaring.png";
import sakerhetFrontalkollisionHastighetForklaringImage from "../assets/sakerhet-frontalkollision-hastighet-forklaring.png";
import sakerhetRullatorFraga2Image from "../assets/sakerhet-rullator-fraga-2.png";
import sakerhetTungLastPlaceringForklaringImage from "../assets/sakerhet-tung-last-placering-forklaring.png";
import sakerhetAvgassystemLackageForklaringImage from "../assets/sakerhet-avgassystem-lackage-forklaring.png";
import sakerhetAvgaserFarligaAmnenForklaringImage from "../assets/sakerhet-avgaser-farliga-amnen-forklaring.png";
import sakerhetBromsvatskaByteForklaringImage from "../assets/sakerhet-bromsvatska-byte-forklaring.png";
import sakerhetSakringLagtAmperetalForklaringImage from "../assets/sakerhet-sakring-lagt-amperetal-forklaring.png";
import sakerhetBilbatteriVatskenivaForklaringImage from "../assets/sakerhet-bilbatteri-vatskeniva-forklaring.png";
import sakerhetBilDrarSnettForklaringImage from "../assets/sakerhet-bil-drar-snett-forklaring.png";
import sakerhetNollvisionenCentrumForklaringImage from "../assets/sakerhet-nollvisionen-centrum-forklaring.png";
import sakerhetServoBromsarForklaringImage from "../assets/sakerhet-servo-bromsar-forklaring.png";
import sakerhetReservdackHastighetForklaringImage from "../assets/sakerhet-reservdack-hastighet-forklaring.png";
import sakerhetKatalysatorReningsgradForklaringImage from "../assets/sakerhet-katalysator-reningsgrad-forklaring.png";
import sakerhetOskyddadeTrafikanterHastighetForklaringImage from "../assets/sakerhet-oskyddade-trafikanter-hastighet-forklaring.png";
import sakerhetTrotthetRiskTidForklaringImage from "../assets/sakerhet-trotthet-risk-tid-forklaring.png";
import sakerhetAvbrytaTransportAlkoholForklaringImage from "../assets/sakerhet-avbryta-transport-alkohol-forklaring.png";
import sakerhetKatalysatorVaxthuseffektForklaringImage from "../assets/sakerhet-katalysator-vaxthuseffekt-forklaring.png";
import sakerhetDackOjamntSlitetFragaImage from "../assets/sakerhet-dack-ojamnt-slitet-fraga.png";
import sakerhetDackOjamntSlitetForklaringImage from "../assets/sakerhet-dack-ojamnt-slitet-forklaring.png";
import sakerhetMotorvarmareTemperaturForklaringImage from "../assets/sakerhet-motorvarmare-temperatur-forklaring.png";
import sakerhetAirbagPassagerareLangdForklaringImage from "../assets/sakerhet-airbag-passagerare-langd-forklaring.png";
import sakerhetBransleforbrukningMotorvarmareForklaringImage from "../assets/sakerhet-bransleforbrukning-motorvarmare-forklaring.png";
import sakerhetMobiltelefonOlyckorForklaringImage from "../assets/sakerhet-mobiltelefon-olyckor-forklaring.png";
import sakerhetAbsFordelForklaringImage from "../assets/sakerhet-abs-fordel-forklaring.png";
import sakerhetKrockviktPassagerareForklaringImage from "../assets/sakerhet-krockvikt-passagerare-forklaring.png";
import sakerhetVitKappSynskadadForklaringImage from "../assets/sakerhet-vit-kapp-synskadad-forklaring.png";
import sakerhetDubbdackTaxiTidForklaringImage from "../assets/sakerhet-dubbdack-taxi-tid-forklaring.png";
import sakerhetNyaDackMonteringForklaringImage from "../assets/sakerhet-nya-dack-montering-forklaring.png";
import sakerhetMotorvagAccelerationFaltForklaringImage from "../assets/sakerhet-motorvag-acceleration-falt-forklaring.png";
import sakerhetBromsvatskaBehallareFragaImage from "../assets/sakerhet-bromsvatska-behallare-fraga.png";
import sakerhetKamaxelremByteForklaringImage from "../assets/sakerhet-kamaxelrem-byte-forklaring.png";
import sakerhetMotortemperaturFlaktremForklaringImage from "../assets/sakerhet-motortemperatur-flaktrem-forklaring.png";
import sakerhetTaxiprisBerakningFragaImage from "../assets/sakerhet-taxipris-berakning-fraga.png";
import sakerhetTaxiprisBerakningForklaringImage from "../assets/sakerhet-taxipris-berakning-forklaring.png";
import sakerhetRmeFordelarForklaringImage from "../assets/sakerhet-rme-fordelar-forklaring.png";
import sakerhetBrytpunktstariffPrivatpersonerForklaringImage from "../assets/sakerhet-brytpunktstariff-privatpersoner-forklaring.png";
import sakerhetRullstolTrappaFragaImage from "../assets/sakerhet-rullstol-trappa-fraga.png";
import sakerhetRullstolTrappaForklaringImage from "../assets/sakerhet-rullstol-trappa-forklaring.png";
import sakerhetRollatorHjalpForklaringImage from "../assets/sakerhet-rollator-hjalp-forklaring.png";
import sakerhetTrotthetPausForklaringImage from "../assets/sakerhet-trotthet-paus-forklaring.png";
import sakerhetTaxiprisBerakning2FragaImage from "../assets/sakerhet-taxipris-berakning-2-fraga.png";
import sakerhetTaxiprisBerakning2ForklaringImage from "../assets/sakerhet-taxipris-berakning-2-forklaring.png";
import sakerhetSkolbussBarnFragaImage from "../assets/sakerhet-skolbuss-barn-fraga.png";
import sakerhetTaxiprisBerakning3FragaImage from "../assets/sakerhet-taxipris-berakning-3-fraga.png";
import sakerhetTaxiprisBerakning3ForklaringImage from "../assets/sakerhet-taxipris-berakning-3-forklaring.png";
import sakerhetTaxiprisBerakning4FragaImage from "../assets/sakerhet-taxipris-berakning-4-fraga.png";
import sakerhetTaxiprisBerakning4ForklaringImage from "../assets/sakerhet-taxipris-berakning-4-forklaring.png";
import sakerhetTaxiprisBerakning5FragaImage from "../assets/sakerhet-taxipris-berakning-5-fraga.png";
import sakerhetTaxiprisBerakning5ForklaringImage from "../assets/sakerhet-taxipris-berakning-5-forklaring.png";
import sakerhetFarligtGodsSkyltFragaImage from "../assets/sakerhet-farligt-gods-skylt-fraga.png";
import sakerhetFarligtGodsSkyltForklaringImage from "../assets/sakerhet-farligt-gods-skylt-forklaring.png";
import sakerhetKontrollampaGeneratorRemFragaImage from "../assets/sakerhet-kontrollampa-generator-rem-fraga.png";
import sakerhetAbsLampaFragaImage from "../assets/sakerhet-abs-lampa-fraga.png";
import sakerhetBromsvatskaBehallareFragaImage from "../assets/sakerhet-bromsvatska-behallare-fraga.png";

const emptySection = (id: string, name: string): QuestionSection => ({
  id,
  name,
  questions: []
});

const sakerhet1Section: QuestionSection = {
  id: "sakerhet-1",
  name: "Säkerhet & beteende",
  questions: [
    {
      id: "sakerhet-1-q-real-1",
      text: "Det finns viktiga åtgärder när du som första person kommer till en olycksplats med personskada. I vilken ordning bör du utföra dem?",
      options: [
        "1. Ge första hjälp\n2. Varna andra medtrafikanter\n3. Överblicka situationen\n4. Ring 112",
        "1. Ge första hjälp\n2. Varna andra medtrafikanter\n3. Överblicka situationen\n4. Ring 112",
        "1. Överblicka situationen\n2. Varna medtrafikanter\n3. Ge första hjälp\n4. Ring 112",
        "1. Ring 112\n2. Varna andra medtrafikanter\n3. Överblicka situationen\n4. Ge första hjälpen"
      ],
      correctIndex: 2,
      explanationImage: sakerhetOlyckaForklaringImage
    },
    {
      id: "sakerhet-1-q-real-2",
      text: "Du är inblandad i en olycka med din taxi. När ska polisen komma?",
      options: [
        "Om någon person skadats.",
        "Om något fordon ej går att köra.",
        "Om något vilt skadats.",
        "Vid alla olyckor."
      ],
      correctIndex: 0,
      explanationImage: sakerhetOlyckaPolisenForklaringImage
    },
    {
      id: "sakerhet-1-q-real-3",
      text: "En avsvimmad person vaknar inte när du tilltalar och ruskar honom varsamt. Vad bör du göra i första hand?",
      options: [
        "Placera honom i stabilt sidoläge (framstupa sidoläge).",
        "Kontrollera andningen.",
        "Ge konstgjord andning.",
        "Larma ambulans."
      ],
      correctIndex: 1,
      explanationImage: sakerhetMedvetslosForklaringImage
    },
    {
      id: "sakerhet-1-q-real-4",
      text: "Vilken är den viktigaste anledningen till att man inte ska lägga en medvetslös person på rygg?",
      options: [
        "Att det är svårare att avgöra om personen andas.",
        "Att blödningsrisken kan öka.",
        "Att personen kan kvävas.",
        "Att personen kan bli nedkyld."
      ],
      correctIndex: 2,
      explanationImage: sakerhetMedvetslosRyggForklaringImage
    },
    {
      id: "sakerhet-1-q-real-5",
      text: "Vilket av följande svarsförslag beskriver typiska tecken på att en person har fått ett främmande föremål i luftstrupen?",
      options: [
        "Personen tar sig för bröstet, faller ihop och andas stötvis samt får svag och hes röst.",
        "Personen fäktar med armarna, andas och hostar rosslande och skriker oartikulerat.",
        "Personen fäktar med armarna, andas och hostar rosslande och skriker oartikulerat.",
        "Personen tar sig mot halsen, kippar efter luft, kan inte tala eller hosta och ser panikslagen ut."
      ],
      correctIndex: 3,
      explanationImage: sakerhetLuftstrupeForklaringImage
    },
    {
      id: "sakerhet-1-q-real-6",
      text: "En taxikund bär det avbildade märket på sitt ytterplagg. Vad ger det för upplysning?",
      questionImage: sakerhetHalsokortFragaImage,
      options: [
        "Personen lider av hjärtsjukdom och har en pacemaker inopererad.",
        "Personen behöver hjälp på grund av ett dolt handikapp, och du bör fråga personen hur du bäst kan hjälpa till.",
        "Personen har i väskan eller i fickan ett hälsokort som innehåller informationen om personens sjukdom eller handikapp.",
        "Personen lider av astma och tål inte rök och starkt luktande ämnen."
      ],
      correctIndex: 2,
      explanationImage: sakerhetHalsokortForklaringImage
    },
    {
      id: "sakerhet-1-q-real-7",
      text: "Afasi är en sjukdom utmärkt med detta märke. Vad innebär det?",
      questionImage: sakerhetAfasiFragaImage,
      options: [
        "Personen har en talstörning som beror på en hjärnskada.",
        "Personen förlorar medvetandet och faller ihop med muskelryckningar och kramper.",
        "Personen får andnöd och svårt att andas ut och blir samtidigt orolig och trött.",
        "Personen lider av hjärtfel och har en pacemaker inopererad."
      ],
      correctIndex: 0,
      explanationImage: sakerhetAfasiForklaringImage
    },
    {
      id: "sakerhet-1-q-real-8",
      text: "Vilket av följande svarsförslaget beskriver symtom som ett tecken på en byggande astmaattack?",
      options: [
        "Personen får andnöd, svårt att andas ut och blir orolig och trött.",
        "Personen blir blek, irriterad, kallsvettig och börjar darra.",
        "Personen förlorar medvetandet och faller ihop med muskelryckningar och kramper.",
        "Personen får andnöd, blir kallsvettig och får smärtor i bröstet som strålar ut mot hals och armar"
      ],
      correctIndex: 0,
      explanationImage: sakerhetAstmaForklaringImage
    },
    {
      id: "sakerhet-1-q-real-9",
      text: "En taxikund bär det avbildade märket på sitt ytterplagg. Vad ger det för information?",
      questionImage: sakerhetAstmaMarkeFragaImage,
      options: [
        "Personen är hörselskadad men kan uppfatta långsamt tal om man artikulera tydligt.",
        "Personen lider av astma och tål inte rök och starkt luktande ämne.",
        "Personen har afasi, vilket innebär talsvårigheter samt svårighet att förstå både tal och skrift.",
        "Personen lider av hjärtfel och bär inopererad stimulator."
      ],
      correctIndex: 1,
      explanationImage: sakerhetAstmaMarkeForklaringImage
    },
    {
      id: "sakerhet-1-q-real-10",
      text: "Du kör skolskjuts med din taxi. Två av de barn som du har i bilen har blödarsjuka. Vad ska du göra om de börjar blöda?",
      options: [
        "Stanna bilen på lämplig plats, larma ambulans och hjälpa de blödarsjuka med något varmt att dricka.",
        "Hjälpa de blödarsjuka att få fram sin medicin ur väskan eller fickan om det behövs.",
        "Se till att de genast förs till sjukhus.",
        "Hjälpa de blödarsjuka att inta halvsittande ställning och larma ambulans, ring 112."
      ],
      correctIndex: 2,
      explanationImage: sakerhetBlodarsjukaForklaringImage
    },
    {
      id: "sakerhet-1-q-real-11",
      text: "Du skall köra skolskjuts till närbelägen skola. Två av eleverna i bilen lider av blödarsjuka. Vad ska du tänka på?",
      options: [
        "I händelse av olycka kan du smittas av blödarsjuka vid återupplivning genom mun-mot-mun metoden.",
        "I händelse av olycka måste dessa elever ha speciell blod vid eventuell transfusion.",
        "Eleverna lider av blodcancer och kan behöva akut vård på grund av detta.",
        "En stötskada kan leda till förblödning då blodet saknar förmåga att levra sig."
      ],
      correctIndex: 3
    },
    {
      id: "sakerhet-1-q-real-12",
      text: "Vid vilken sjukdomstillstånd är det lämpligt att äta eller dricka?",
      options: [
        "Vid kruppanfall",
        "Vid astmaanfall",
        "Vid ett epileptiskt anfall",
        "Vid insulinkänning hos en diabetiker"
      ],
      correctIndex: 3,
      explanationImage: sakerhetDiabetesForklaringImage
    },
    {
      id: "sakerhet-1-q-real-13",
      text: "Vilka symtom kan vara tecken på att en person med diabetes börjar få insulinkänning?",
      options: [
        "Personen får omväxlande frossbrytningar och svettningar, blir rödblommig och klagar över huvudvärk",
        "Personen blir blek, darrig, kallsvettig och irriterad",
        "Personen förlorar medvetandet och faller ihop med muskelryckningar och kramper.",
        "Personen får andnöd och har svårt att andas ut och blir samtidigt orolig och trött"
      ],
      correctIndex: 1,
      explanationImage: sakerhetInsulinkanningForklaringImage
    },
    {
      id: "sakerhet-1-q-real-14",
      text: "Du har en taxikund som plötsligt får ett epileptiskt anfall och hållande kramper. Vilken hjälp ger du först?",
      questionImage: sakerhetEpilepsiFragaImage,
      options: [
        "Placera personen i framstupa sidoläge.",
        "Tillkalla Ambulans.",
        "Ser till att personen inte skadar sig själv. (skydda honom mot nyfikna åskådare)",
        "Sätta ett mjukt föremål mellan tänderna."
      ],
      correctIndex: 2,
      explanationImage: sakerhetEpilepsiForklaringImage
    },
    {
      id: "sakerhet-1-q-real-15",
      text: "En passagerare åker in i din taxi och har på sig detta märke. Vad kan det innebära?",
      questionImage: sakerhetHjartfelFragaImage,
      options: [
        "Afasi sjukdom, alltså hjärnskadad person.",
        "Det är ett hjärtfel där en s.k. pacemaker är inopererad (hjärtstimulator).",
        "Fobisjukdom, alltså överdriven rädsla.",
        "Det är ett hjärtfel med en s.k. defibrillator med olika rytmrubbningar i hjärtat."
      ],
      correctIndex: 1,
      explanationImage: sakerhetHjartfelForklaringImage
    },
    {
      id: "sakerhet-1-q-real-16",
      text: "Vad innebär vidstående ID-bricka?",
      questionImage: sakerhetDefibrillatorFragaImage,
      options: [
        "Att personen har inopererad pacemaker.",
        "Att personen lider av astma.",
        "Att personen lider av epilepsi.",
        "Att personen har inopererad defibrillator som stabiliserar hjärtrytmen."
      ],
      correctIndex: 3,
      explanationImage: sakerhetDefibrillatorForklaringImage
    },
    {
      id: "sakerhet-1-q-real-17",
      text: "Vilket av följande svarsförslag beskriver symtom som ett tecken på att en person har drabbats av stroke, d.v.s. syrebrist i hjärnan eller en blödning i hjärnan?",
      options: [
        "Personen får andnöd och svårt att andas ut och blir samtidigt orolig och trött.",
        "Personen får andnöd, blir kallsvettig och klagar över smärtor i bröstet som strålar ut mot hals och armar.",
        "Personen drabbas av halvsidig förlamning, domningar eller känselnedsättning samt medvetande rubbning eller medvetslöshet.",
        "Personen verkar först frånvarande, förlorar sedan medvetandet och faller ihop med muskelryckningar och kramper."
      ],
      correctIndex: 2,
      explanationImage: sakerhetStrokeForklaringImage
    },
    {
      id: "sakerhet-1-q-real-18",
      text: "Personen får andnöd, kallsvettig samt klagar över smärtor i bröstet som strålar ut mot hals och armar. Vilket tillstånd befinner han sig i?",
      options: [
        "Diabetes sjukdom.",
        "Syrebrist i hjärtmuskeln.",
        "Astmaattack.",
        "Stroke."
      ],
      correctIndex: 1,
      explanationImage: sakerhetKarlkrampForklaringImage
    },
    {
      id: "sakerhet-1-q-real-19",
      text: "Du ska köra en kund som haft en stroke och är förlamad eller försvagad i ena sidan. Vad bör du tänka på när du ska hjälpa honom?",
      options: [
        "Man ska alltid vara två som lyfter. En lyfter under armarna och en lyfter i benen.",
        "Att lyfta honom från både sidorna.",
        "Att lyfta honom från den sida som inte är förlamad.",
        "Att lyfta honom från den förlamade sidan, eftersom känseln är sämre där."
      ],
      correctIndex: 2
    },
    {
      id: "sakerhet-1-q-real-20",
      text: "Du får en körning där kunden är vuxen och har cerebral pares (CP). Vad innebär detta?",
      options: [
        "Kunden saknar begrepp om att använda pengar",
        "Kunden kan ha svårt att ta emot information",
        "Kunden har dåligt lokalkännedom",
        "Kunden kan ha okontrollerade rörelser"
      ],
      correctIndex: 3,
      explanationImage: sakerhetCpForklaringImage
    },
    {
      id: "sakerhet-1-q-real-21",
      text: "Du kör en Aids sjuk passagerare till sjukhuset. Vad ska du tänka på?",
      options: [
        "Passageraren är känslig för smittor.",
        "Passageraren kan smitta mig genom beröring.",
        "Passageraren kan smitta mig med AIDS genom att jag andas samma luft i bilen.",
        "Passageraren kan smitta mig med AIDS genom att jag andas samma luft i bilen."
      ],
      correctIndex: 0,
      explanationImage: sakerhetAidsForklaringImage
    },
    {
      id: "sakerhet-1-q-real-22",
      text: "Vad innebär det att en person är autistisk?",
      options: [
        "Personen är rädd för att vistas på öppna platser, t.ex. torg.",
        "Personen har grava sömnproblem.",
        "Personen är svårt hörselskadad och har talsvårigheter.",
        "Personen är upptagen med sin inre värld och är ofta svår att få kontakt med."
      ],
      correctIndex: 3,
      explanationImage: sakerhetAutismForklaringImage
    },
    {
      id: "sakerhet-1-q-real-23",
      text: "Vad innebär det att en person lider av affektiva störningar?",
      options: [
        "Personen är långvarig nedstämd.",
        "Personen är överaktiv samt mycket aggressiv.",
        "Personen reagerar inte känslomässigt på en situation så som man är van vid.",
        "Personen har nedsatt syn, hörsel och smakfunktioner."
      ],
      correctIndex: 2,
      explanationImage: sakerhetAutismForklaringImage
    },
    {
      id: "sakerhet-1-q-real-24",
      text: "Vad innebär det att en person lider av fobi?",
      options: [
        "Personen har ett överdrivet aggressivt beteende.",
        "Personen har en överdriven rädsla för någon.",
        "Personen är överaktiv.",
        "Personen är långvarigt nedstämd."
      ],
      correctIndex: 1,
      explanationImage: sakerhetFobiForklaringImage
    },
    {
      id: "sakerhet-1-q-real-25",
      text: "Du får en körning där kunden visar ha ett handikapp som du inte vet något om. Vad bör du göra?",
      options: [
        "Tala om att du inte kan ta körningen, men kan beställa en annan bil åt kunden.",
        "Fråga kunden om vilken hjälp som behövs och hur du kan hjälpa till.",
        "Försöka att inte låta kunden märka din osäkerhet och låta kunden själv ta initiativ om hjälp skulle behövas.",
        "Försöka hjälpa till efter bästa förmåga och hoppas att kunden inte tycker att du är okunnig."
      ],
      correctIndex: 1,
      explanationImage: sakerhetHandikappForklaringImage
    },
    {
      id: "sakerhet-1-q-real-26",
      text: "Krockkuddens uppgift är att minska personskador vid en kollision. Hur kan du som förare påverka så att skadorna blir så lindriga som möjligt?",
      options: [
        "Genom att köra med armar och ben helt utsträckta.",
        "Genom att förarstolen sitter tillräckligt långt fram.",
        "Genom att luta ryggstödet långt tillbaka.",
        "Genom att använda bilbälte."
      ],
      correctIndex: 3,
      explanationImage: sakerhetBilbalteForklaringImage
    },
    {
      id: "sakerhet-1-q-real-27",
      text: "Vad är det som avgör när ett barn ska börja använda bälteskudde istället för bältesstol.",
      options: [
        "Om bilen är utrustad med sidokrockkuddar.",
        "Barnens vikt.",
        "Barnens längd.",
        "Om platsen är försedd med två eller tre punktsbälte."
      ],
      correctIndex: 2,
      explanationImage: sakerhetBilbarnstolForklaringImage
    },
    {
      id: "sakerhet-1-q-real-28",
      text: "Vad är sant beträffande montering av barnstol i framsätet?",
      options: [
        "Att använda ordinarie bilbälten.",
        "Barnstolen skall placeras minst 20 cm från instrumentbrädan.",
        "Att vara säker på att krockkudden är urkopplat."
      ],
      correctIndex: 2,
      explanationImage: sakerhetBarnstolFramsateForklaringImage
    },
    {
      id: "sakerhet-1-q-real-29",
      text: "Vilken minimilängd bör en person ha vid passagerarplats i framsätet?",
      options: [
        "Barn som är 100 cm lång",
        "Barn som är 120 cm lång",
        "Barn som är 140 cm lång"
      ],
      correctIndex: 2,
      explanationImage: sakerhetMinimilangdForklaringImage
    },
    {
      id: "sakerhet-1-q-real-30",
      text: "Vilken av följande fyra bilder visar en framstupa sidoläge?",
      options: [
        "Bild A",
        "Bild B",
        "Bild C",
        "Bild D"
      ],
      correctIndex: 3,
      questionImage: sakerhetSidolageFragaImage
    },
    {
      id: "sakerhet-1-q-real-31",
      text: "Vem får parkera i en P-ruta utmärkt med dessa vägmärken?",
      options: [
        "Alla rörelsehindrade.",
        "Endast rörelsehindrade med särskilt tillstånd.",
        "Tillfälligt rörelsehindrade med eller utan tillstånd.",
        "Endast rullstolsbundna."
      ],
      correctIndex: 1,
      questionImage: sakerhetPRutaFragaImage
    },
    {
      id: "sakerhet-1-q-real-32",
      text: "Du har i bilen ett barn som är 6 år gammalt. Vilken skyddsanordning skall användas?",
      options: [
        "Bilbarnstol",
        "Babyskydd",
        "Bälteskudde",
        "Bilbälte"
      ],
      correctIndex: 2
    },
    {
      id: "sakerhet-1-q-real-33",
      text: "Vilken sjukdom eller skada kännetecknas av syn- och hörselrubbningar, talsvårigheter, kramper och ibland även psykisk utvecklingsstörning?",
      options: [
        "Ledgångsreumatism",
        "Cerebral pares (CP)",
        "Multipel skleros (MS)",
        "Parkinson"
      ],
      correctIndex: 2,
      explanationImage: sakerhetMsForklaringImage
    },
    {
      id: "sakerhet-1-q-real-34",
      text: "Lampan på bilden lyser när du kör. Vilket system fungerar inte som det ska?",
      options: [
        "Säkerhetsutrustning inne i bilen",
        "De låsningsfria bromsarna",
        "Den datorstyrda tändningen",
        "Den elektriska styrservon"
      ],
      correctIndex: 0,
      questionImage: sakerhetAirbagLampaFragaImage
    },
    {
      id: "sakerhet-1-q-real-35",
      text: "Din kund får ett epileptiskt anfall. Hur skall du agera för att hjälpa honom?",
      options: [
        "Skydda honom från att slå sig",
        "Hålla fast honom",
        "Ge honom något att dricka",
        "Genast föra honom till sjukhus"
      ],
      correctIndex: 0,
      explanationImage: sakerhetEpilepsiForklaringImage
    },
    {
      id: "sakerhet-1-q-real-36",
      text: "Vilken sjukdom beskrivs i texten på bilden?",
      options: [
        "Psykos",
        "Fobi",
        "Allergi",
        "Apati",
        "Afasi"
      ],
      correctIndex: 0,
      questionImage: sakerhetPsykosFragaImage
    },
    {
      id: "sakerhet-1-q-real-37",
      text: "Vilken sjukdom beskrivs i texten på bilden?",
      options: [
        "Psykos",
        "Fobi",
        "Allergi",
        "Apati",
        "Afasi"
      ],
      correctIndex: 1,
      questionImage: sakerhetFobiFragaImage
    },
    {
      id: "sakerhet-1-q-real-38",
      text: "Till vilken av dessa personer är det olämpligt att ge något att äta eller dricka?",
      options: [
        "En diabetiker som har fått insulinkänning",
        "En ambivalent person",
        "En person som har fått ett epileptiskt anfall.",
        "En person med afasi"
      ],
      correctIndex: 2
    },
    {
      id: "sakerhet-1-q-real-39",
      text: "Du har köpt en \"doftgran\" och placerat den i din taxibil. Kan den orsaka några hälsobesvär för dina kunder?",
      options: [
        "Ja, den kan orsaka huvudvärk, men enbart i kombinationen med parfymämnen",
        "Nej, en enda doftgran kan inte orsaka några besvär",
        "Ja, den kan utlösa ett astmaanfall",
        "Ja, den kan orsaka luftvägsbesvär, men enbart om kunden åker en länge sträcka"
      ],
      correctIndex: 2
    }
  ]
};

const sakerhet2Section: QuestionSection = {
  id: "sakerhet-2",
  name: "Säkerhet & beteende 2",
  questions: [
    {
      id: "sakerhet-2-q-real-1",
      text: "Vad har lambdasonden för funktion?",
      options: [
        "Kontrollera hur mycket syre det är kvar i avgaserna.",
        "Kontrollera att katalysatorn håller tillräckligt med värme.",
        "Kontrollera bränsleblandningen i motorn.",
        "Kontrollera mängden olja i växellådan."
      ],
      correctIndex: 0,
      explanationImage: sakerhetLambdasondForklaringImage
    },
    {
      id: "sakerhet-2-q-real-2",
      text: "Under vilka omständigheter är det mest lämpligt att kontrollera lyfttrycket i dina personbildäck?",
      options: [
        "När bilen är fullastad.",
        "När bilens däck är varma.",
        "När bilen är tom från passageraren.",
        "När bilens däck är kalla."
      ],
      correctIndex: 3,
      explanationImage: sakerhetDackLufttryckForklaringImage
    },
    {
      id: "sakerhet-2-q-real-3",
      text: "Vad kan vara den stora orsaken för däckslitaget?",
      options: [
        "För mycket lågtryck i däcken.",
        "Ett däck slits mindre vid 120km/h än vid 70 km/h på grund av att däcksvärmen blir lägre vid högre fart.",
        "Ett däck slits ungefär dubbelt så snabbt vid 120km/h än vid 70 km/h på grund av att däcksvärmen blir högre vid högre fart.",
        "Om lufttrycket är för lågt i höger framdäck drar bilen åt höger. För lite luft i båda framdäcken får till följd att bilen blir lättstyrd."
      ],
      correctIndex: 2,
      explanationImage: sakerhetDackSlitageForklaringImage
    },
    {
      id: "sakerhet-2-q-real-4",
      text: "Vad kan orsaken vara om du känner skakningar i ratten vid en viss hastighet?",
      options: [
        "Lågt lufttryck i bakdäcken.",
        "Obalans i bromsskivorna.",
        "Obalans i hjul, vikten är inte jämt fördelad eller slitage på framdäcken.",
        "Högt lufttryck i bakdäcken."
      ],
      correctIndex: 2,
      explanationImage: sakerhetBalanseringForklaringImage
    },
    {
      id: "sakerhet-2-q-real-5",
      text: "När du kör, känner du att hjulen drar snett, samtidigt som den skakar i ratten, vad kan detta beror på?",
      options: [
        "Höger framhjul obalanserat.",
        "Servopumben har hoppat av.",
        "Höger bakhjul obalanserat.",
        "Du har kört på en trottarkant eller balansvikter har lossnat."
      ],
      correctIndex: 3,
      explanationImage: sakerhetFramhjulsinstallningForklaringImage
    },
    {
      id: "sakerhet-2-q-real-6",
      text: "Du hör ett metalliskt skrapande ljud när du bromsar. Måste du vidta någon åtgärd?",
      options: [
        "Ja, kontrollera bromsbeläggens tjocklek.",
        "Ja, kontrollera bromsvätskans nivå.",
        "Nej, eftersom ljudet beror på att ABS-bromsen aktiverades.",
        "Ja, kontrollera servocylinderns funktion."
      ],
      correctIndex: 0,
      explanationImage: sakerhetBromsbelaggForklaringImage
    },
    {
      id: "sakerhet-2-q-real-7",
      text: "Vad är det för skillnad mellan skivbromsar och trumbromsar?",
      options: [
        "Skivbromsarna är lättare att integrera med parkeringsbromsen.",
        "Skivbromsarna ger något jämnare bromsverkan samt kyls snabbare",
        "Skivbromsarna är mindre känsliga för fukt och lättare att servera",
        "Skivbromsarna kräver inte servosystem och underhållsfria"
      ],
      correctIndex: 1,
      explanationImage: sakerhetSkivbromsarForklaringImage
    },
    {
      id: "sakerhet-2-q-real-8",
      text: "Vilket påstående om säkringarnas amperetal är riktig?",
      options: [
        "Alla säkringar i en bil ska ha samma amperetal",
        "Om en säkring har för högt amperetal kan för hög strömstyrka släppas fram",
        "Har säkringen för låg amperetal släpps för svag ström fram till respektive funktion"
      ],
      correctIndex: 1,
      explanationImage: sakerhetSakringForklaringImage
    },
    {
      id: "sakerhet-2-q-real-9",
      text: "Vad är sant om Dieselmotorn?",
      options: [
        "En dieselmotor har tändstift.",
        "En dieselmotor går även att köra på bensin.",
        "En dieselmotor har högre kompression än en bensinmotor.",
        "En dieselmotor drar alltid mer bränsle än en motsvarande bensinmotor."
      ],
      correctIndex: 2,
      explanationImage: sakerhetDieselForklaringImage
    },
    {
      id: "sakerhet-2-q-real-10",
      text: "Vilken funktion har en förglödningsanordning i en dieselmotor?",
      options: [
        "Den värmer upp motorblocket på en dieselmotor vid kallstart.",
        "Den förvärmer katalysatorn vid kallstart.",
        "En dieselmotor har högre kompression än en bensinmotor.",
        "Den gör så att tändstiften antänds i rätt ögonblick."
      ],
      correctIndex: 0,
      explanationImage: sakerhetForvarmningDieselForklaringImage
    },
    {
      id: "sakerhet-2-q-real-11",
      text: "Din bil har ovanligt svarta avgaser, vad kan detta bero på?",
      options: [
        "Hög förbrukning av motorolja.",
        "Luft har kommit in i styrservosystemet.",
        "För lite vätska i servobehållaren.",
        "Smutsigt luftfilter eller för fet bränsle luft blandning."
      ],
      correctIndex: 3,
      explanationImage: sakerhetSvartRookForklaringImage
    },
    {
      id: "sakerhet-2-q-real-12",
      text: "Din dieselmotor blir plötsligt kraftlös. Vad kan detta bero på?",
      options: [
        "Kylslangarna har gått av eller läcker.",
        "Fel på förglödningsanordningen.",
        "Igensatt bränslefilter.",
        "Generatorremmen har gått av."
      ],
      correctIndex: 2,
      explanationImage: sakerhetDieselKraftlosForklaringImage
    },
    {
      id: "sakerhet-2-q-real-13",
      text: "Hur bör du parkera din dieselbil?",
      options: [
        "Den normala vana att parkera vilken bil som helst.",
        "Växeln i friläge samt åtdragen parkeringsbroms och hjulen ej vridna mot trottoarkanten.",
        "Växeln i friläge samt åtdragen parkeringsbroms och hjulen vridna mot trottoarkanten.",
        "Växeln i ettan samt åtdragen parkeringsbroms och hjulen vridna mot trottoarkanten."
      ],
      correctIndex: 2,
      explanationImage: sakerhetDieselParkeringForklaringImage
    },
    {
      id: "sakerhet-2-q-real-14",
      text: "Vad är riktigt beträffande kylsystemet i ett fordon?",
      options: [
        "Du bör undvika att använda glykol sommartid.",
        "Genom att använda ren glykol förhindra du att kylsystemet riskerar att frysa sönder.",
        "Kylsystem med övertryck har ofta en normal arbetstemperaturen upp mot 120 C.",
        "Kylvätskan byts regelbunden enligt biltillverkarens rekommendationen."
      ],
      correctIndex: 1,
      explanationImage: sakerhetKylsystemForklaringImage
    },
    {
      id: "sakerhet-2-q-real-15",
      text: "Under körning upptäcker du att denna symbol tänds på instrumentpanelen. Vad ska du göra?",
      options: [
        "Köra till närmaste bensinstation och fylla på spolarvätska",
        "Köra arbetspasset ut för att sedan kontrollera felet",
        "Stanna snarast och kontrollera kylvätskans nivå",
        "Stanna snarast och kontrollera oljenivån i motorn"
      ],
      correctIndex: 3,
      questionImage: sakerhetOljelampaFragaImage,
      explanationImage: sakerhetOljetryckForklaringImage
    },
    {
      id: "sakerhet-2-q-real-16",
      text: "Du upptäcker att motortemperaturen är för hög. Vad kan felet vara?",
      options: [
        "Kupévärmaren är för låg",
        "Kylvätskan består enbart av glykol.",
        "Kupévärmaren är för hög.",
        "Elfläkten till kylaren har gått sönder."
      ],
      correctIndex: 3
    },
    {
      id: "sakerhet-2-q-real-17",
      text: "Vad varnar denna kontrollampa för?",
      options: [
        "Att bromsvätsketemperaturen är för hög.",
        "Att motorns kylvätsketemperaturen är för hög.",
        "Att växellådas olja är överhettad.",
        "Att katalysator är överhettad."
      ],
      correctIndex: 1,
      questionImage: sakerhetKylvatskaLampaFragaImage,
      explanationImage: sakerhetKylvatskaLampaForklaringImage
    },
    {
      id: "sakerhet-2-q-real-18",
      text: "Hur bör du hantera situationen, när denna kontroll lampan lyser?",
      options: [
        "Kolla säkringar.",
        "Stanna och fyll på glykolen.",
        "Kontrollera batteriets vatten.",
        "Stanna på tomgång tills temperaturen sänkts, stäng av motorn, därefter kolla kylsvätskan."
      ],
      correctIndex: 3,
      questionImage: sakerhetTempHanteraFragaImage,
      explanationImage: sakerhetTempHanteraForklaringImage
    },
    {
      id: "sakerhet-2-q-real-19",
      text: "Vilken vätska ska vid behov fyllas på bilbatteriet och till vilken nivå?",
      options: [
        "Svavelsyra till cirka i cm över blyplattorna.",
        "Destillerat eller avjoniserat vatten till i höjd med blyplattorna.",
        "Svavelsyra till höjd med blyplattorna.",
        "Destillerat eller avjoniserat vatten till cirka 1cm över blyplattorna."
      ],
      correctIndex: 3,
      explanationImage: sakerhetBatteriVatskaForklaringImage
    },
    {
      id: "sakerhet-2-q-real-20",
      text: "Vad är sant angående elsystemet / belysningen i bilbatteriet i bilen?",
      options: [
        "Batteriet drar ström från bilen.",
        "Om batteriet är urladdat kan det inte frysa sönder 5-10 minusgrader.",
        "När det är låg vätskenivå i batteriet kan blyoxidplattorna förstöras.",
        "Vid behov på vintern skall du fylla glykol i batteriet."
      ],
      correctIndex: 2,
      explanationImage: sakerhetBatteriVatskaForklaringImage
    },
    {
      id: "sakerhet-2-q-real-21",
      text: "Vad är sant om batteriet?",
      options: [
        "Batteriets kapaciteten måste kontrolleras före laddningen.",
        "Batteriets locken minskar bilens vätskenivån om den är inte ordentligt stängt.",
        "Batteriet är den starkaste delen som driver energi för bilen.",
        "Batteriet vätska måste bytas vartannat år."
      ],
      correctIndex: 0,
      explanationImage: sakerhetBatteriKapacitetForklaringImage
    },
    {
      id: "sakerhet-2-q-real-22",
      text: "Vilket av elsystemet tar mest ström i bilen?",
      options: [
        "Batteriet",
        "Start motorn",
        "Generatorn",
        "Lamporna"
      ],
      correctIndex: 1,
      explanationImage: sakerhetElsystemStromForklaringImage
    },
    {
      id: "sakerhet-2-q-real-23",
      text: "Hur kan du se att generatorremmen gått av då du kör?",
      options: [
        "Laddningslampan lyser.",
        "Helljuset fungerar inte.",
        "Inre belysning fungerar inte.",
        "Oljetryckslampan lyser."
      ],
      correctIndex: 0,
      explanationImage: sakerhetGeneratorLaddarInteForklaringImage
    },
    {
      id: "sakerhet-2-q-real-24",
      text: "Vad betyder nedanstående kontrollampa?",
      options: [
        "Generatorn laddar inte.",
        "Batteriets cellerna är helt urladdade.",
        "Batteriet är tomt på vätskan",
        "En batterikabel har glapp."
      ],
      correctIndex: 0,
      questionImage: sakerhetKontrollampaGeneratorFragaImage
    },
    {
      id: "sakerhet-2-q-real-25",
      text: "Du kör taxi och känner skakningar i ratten. Vad är den troligaste orsaken?",
      options: [
        "Styrservopumpen är ur funktion.",
        "En balansvikt har lossnat från ett framhjul",
        "Vätskenivån i styrservon är för låg.",
        "Bakvagnsinställningen är felaktig"
      ],
      correctIndex: 1,
      explanationImage: sakerhetStyrinrattningForklaringImage
    },
    {
      id: "sakerhet-2-q-real-26",
      text: "Om du trycker på fotbromspedalen, vilka hjul påverkas av din bromsning?",
      options: [
        "Alla hjul tar jämnt bromsverkan.",
        "Om bilen är understyrd påverkas då framhjulen.",
        "Om bilen är överstyrd påverkas bakhjulen.",
        "Framhjulen bara, eftersom handbromsen påverkar bakhjulen."
      ],
      correctIndex: 0,
      explanationImage: sakerhetFotbromsForklaringImage
    },
    {
      id: "sakerhet-2-q-real-27",
      text: "Hur kontrollerar man på bästa sätt att styrservon fungerar?",
      options: [
        "Man kontrollerar att vätskenivån i behållaren för styrservooljan är rätt.",
        "Man krypkör och styr maximalt åt båda hållen och kontrollerar att styrningen går lätt.",
        "Man står still med påslagen motor och styr maximalt åt båda hållen och kontrollerar att styrningen går lätt.",
        "Håll ratten med lätt tryck åt endera hållet. Starta motorn. Om du känner ett ryck i ratten när motorn startar vet du att styrservon fungerar."
      ],
      correctIndex: 3,
      explanationImage: sakerhetStyrservoKontrollForklaringImage
    },
    {
      id: "sakerhet-2-q-real-28",
      text: "Vilket är troligen felet om lampan tänds under körning?",
      options: [
        "Bromsarna kan lätt låsa sig vid hårdbromsning.",
        "Parkering bromsen är ur funktionen.",
        "ABS bromsarna har slutat fungera.",
        "En bromskrets har slutat fungera, eller för låg vätska nivå."
      ],
      correctIndex: 3,
      questionImage: sakerhetBromslampaFragaImage,
      explanationImage: sakerhetBromslampaForklaringImage
    },
    {
      id: "sakerhet-2-q-real-29",
      text: "Hur kan du veta att en ABS broms börjar arbeta?",
      options: [
        "Bromspedalen blir hårdare.",
        "Genom att hålla in bromspedalen och känna hur den vibrerar.",
        "Det börjar lukta vid inbromsning."
      ],
      correctIndex: 1,
      explanationImage: sakerhetAbsForklaringImage
    },
    {
      id: "sakerhet-2-q-real-30",
      text: "Vilket förnybart bränsle blandas in i nästan all bensin i Sverige i dag?",
      options: [
        "Etanol",
        "Benzen",
        "Biogas",
        "Diesel"
      ],
      correctIndex: 0
    },
    {
      id: "sakerhet-2-q-real-31",
      text: "Vad händer med däck som innehålla enbart syntetgummi i stark kyla?",
      options: [
        "Vinterdäck innehåller mer plats och gummi än sommar däck.",
        "Plastinblandningen i sommardäcket gör att dessa hårdnar vid minusgrader, vilket medför sämre väggrep än vinterdäck.",
        "Plastinblandningen i sommardäcket gör att dessa mjuknar vid minusgrader, vilket medför bättre väggrep än vinterdäck.",
        "Sommardäck är innehåller mer cancerframkallande ämne än vinterdäck."
      ],
      correctIndex: 1,
      explanationImage: sakerhetSommardackForklaringImage
    },
    {
      id: "sakerhet-2-q-real-32",
      text: "Vad påverkar fordonet så att det drar på sidan, när man kör rakt?",
      options: [
        "För lite luft i ett framhjul gör att fordonet drar åt det hållet.",
        "Styrenheten behöver justeras.",
        "För lite servovätska.",
        "För lite luft i ett framhjul gör att fordonet drar åt andra hållet."
      ],
      correctIndex: 0,
      explanationImage: sakerhetDackDrarForklaringImage
    },
    {
      id: "sakerhet-2-q-real-33",
      text: "Vad bör du byta när du ser slitagevarnare?",
      options: [
        "Byta batteriet",
        "Byta bromsklossar",
        "Byta generatorrem",
        "Byta däck"
      ],
      correctIndex: 3,
      explanationImage: sakerhetSlitagevarnareForklaringImage
    },
    {
      id: "sakerhet-2-q-real-34",
      text: "Vad bör du byta eller åtgärda för att undvika motorhavari samt dyrbara reperationer innan felet förvärras?",
      options: [
        "Kamaxelremmen byts regelbundet.",
        "Bromsklostret.",
        "Olja och filtret.",
        "Fläckt remmen."
      ],
      correctIndex: 0,
      explanationImage: sakerhetKamaxelremForklaringImage
    },
    {
      id: "sakerhet-2-q-real-35",
      text: "Hur förändras köregenskaperna när du ändrar bilens vikt från tjänstevikt till totalvikt?",
      options: [
        "Bromssträckan blir längre.",
        "Vingligare körning.",
        "Bilen blir svårstyrd i nedförslut."
      ],
      correctIndex: 0
    },
    {
      id: "sakerhet-2-q-real-36",
      text: "Du har kopplat en släpvagn till din taxi, men kultrycket är för högt. Vad kan det medföra?",
      options: [
        "Katastrofbromsen upphör att fungera",
        "Halvljuset blir bländande",
        "Framdäckens väggrepp blir bättre",
        "Slitaget på bilens framdäck ökar"
      ],
      correctIndex: 1,
      explanationImage: sakerhetKultryckForklaringImage
    },
    {
      id: "sakerhet-2-q-real-37",
      text: "Kontrollampan på bilden tänds under körning. Vilken bör din första åtgärd vara?",
      options: [
        "Jag kontrollerar motorolja.",
        "Jag byter batteri.",
        "Jag kontrollerar generatorremmen.",
        "Jag fyller på destillerat vatten i batteriet."
      ],
      correctIndex: 2,
      questionImage: sakerhetKontrollampaGeneratorRemFragaImage
    },
    {
      id: "sakerhet-2-q-real-38",
      text: "Vad kan du göra för att minska fordonets bränsleförbrukning?",
      options: [
        "Alltid använda konstantfarthållaren",
        "Undvika att använda den elektriska motorvärmare vid temperaturer över + 15 °C",
        "Värma upp motorn på tomgång",
        "Utföra regelbunden service"
      ],
      correctIndex: 3
    },
    {
      id: "sakerhet-2-q-real-39",
      text: "Du har fått punktering och monterat ett nödhjul. Vilket alternativ är riktigt?",
      options: [
        "Det finns särskilda begränsningar för hur fort jag får köra med nödhjulet.",
        "Bilen får endast köras utan passagerare",
        "Bilen får endast bogseras till närmaste gummiverkstad.",
        "Nödhjulet får endast användas på sommarväglag."
      ],
      correctIndex: 0
    },
    {
      id: "sakerhet-2-q-real-40",
      text: "Vad innebär det om den här kontrollampan tänds under färd?",
      options: [
        "Det låsningsfria bromssystemet är ur funktion",
        "Det låsningsfria bromssystemet är aktiverat",
        "Det automatiska bränslesystemet är ur funktion",
        "Det är för lite vätska i bromssystemet"
      ],
      correctIndex: 0,
      questionImage: sakerhetAbsLampaFragaImage
    },
    {
      id: "sakerhet-2-q-real-41",
      text: "Vilket påstående om fordons koldioxidutsläpp är riktigt?",
      options: [
        "De påverkar inte växthuseffekten",
        "De påverkas av förarens körsätt",
        "De försämrar trädens tillväxt",
        "De minskas av katalysatorn"
      ],
      correctIndex: 1
    },
    {
      id: "sakerhet-2-q-real-42",
      text: "Din bil är manuellt växlad. Vad kan du göra för att minska bilens bränsleförbrukning?",
      options: [
        "Växla upp tidigt och köra på så hög växel som möjligt",
        "Växla upp sent och köra på så låg växel som möjligt.",
        "Använd konstatfarthållare så ofta som möjligt",
        "Alltid köra på 4:ans växel vid farter under 50 km i timmen"
      ],
      correctIndex: 0
    },
    {
      id: "sakerhet-2-q-real-43",
      text: "Hur påverkas koldioxid utsläppen om bränsleförbrukningen i din bil minskar?",
      options: [
        "De minskar proportionellt lika mycket som bränsle förbrukningen",
        "De minskar dubbelt så mycket som bränsle förbrukningen",
        "De minskar 4 gånger så mycket som bränsleförbrukningen",
        "De påverkas inte alls"
      ],
      correctIndex: 0
    },
    {
      id: "sakerhet-2-q-real-44",
      text: "I vilken behållare finns vätskan som kan visa om det är något fel på bromsarna?",
      options: [
        "Behållaren i ring A",
        "Behållaren i ring B",
        "Behållaren i ring C",
        "Behållaren i ring D"
      ],
      correctIndex: 0,
      questionImage: sakerhetBromsvatskaBehallareFragaImage
    },
    {
      id: "sakerhet-2-q-real-45",
      text: "Vilka däck är ur miljösynpunkt bäst att köpa till din taxi?",
      options: [
        "Däck som innehåller hög HA-olja",
        "Däck som innehåller låg HA-olja",
        "Däck som innehåller ingen HA-olja"
      ],
      correctIndex: 2
    },
    {
      id: "sakerhet-2-q-real-46",
      text: "Vad bör du göra inför vintern för att undvika dyra reparationer på ditt fordon?",
      options: [
        "Byta bränslefilter",
        "Kontrollera att glykoltillsatsen i kylsystemet är tillräckligt",
        "Byta bromsvätska",
        "Byta växellådsolja"
      ],
      correctIndex: 1
    }
  ]
};

const sakerhet3Section: QuestionSection = {
  id: "sakerhet-3",
  name: "Säkerhet & beteende 3",
  questions: [
    {
      id: "sakerhet-3-q-real-1",
      text: "Du närmar dig en skola under skoltid. Vad är viktigast att du som förare är uppmärksam på?",
      options: [
        "Lekande barn",
        "Hastighetsbegränsningen",
        "Övergångställe",
        "Skolpatruller"
      ],
      correctIndex: 0
    },
    {
      id: "sakerhet-3-q-real-2",
      text: "Du har en kund som får ett astmaanfall med hosta och andningssvårigheter. Vilken hjälp bör du ge först?",
      options: [
        "Lyfta ut kunden ur bilen och placera honom eller henne i stabilt sidoläge (framstupa sidoläge).",
        "Öppna bildörren så kunden får frisk luft och ta fram eventuell medicin.",
        "Larma ambulans genom att ringa 112.",
        "Tala lugnande och försöka få kundens uppmärksamhet riktad mot något annat."
      ],
      correctIndex: 1,
      explanationImage: sakerhetAstmaAnfallForklaringImage
    },
    {
      id: "sakerhet-3-q-real-3",
      text: "Vilken förutsättning är viktigast när du ska kontrollera om lufttrycket i däcken är det som rekommenderas?",
      options: [
        "Att bilen är olastad",
        "Att däcken är varma",
        "Att däcken är kalla",
        "Att bilen är maxlastad"
      ],
      correctIndex: 2,
      explanationImage: sakerhetDackLufttryckForklaringImage
    },
    {
      id: "sakerhet-3-q-real-4",
      text: "Hur kan du kontrollera att luften kommer ner till lungorna när du ger konstgjord andning?",
      options: [
        "Jag ser att ansiktet återfår normal färg",
        "Jag ser att bröstkorgen rör sig",
        "Jag hör när luften kommer ned till lungorna",
        "Jag känner att överskottsluft kommer ut via näsan"
      ],
      correctIndex: 1,
      explanationImage: sakerhetKonstgjordAndningForklaringImage
    },
    {
      id: "sakerhet-3-q-real-5",
      text: "Vilken fördel har ABS-bromsar jämfört med bromsar utan ABS?",
      options: [
        "Vid hård bromsning är risken för sladd mindre med ABS",
        "Bromssträckan blir alltid kortare med ABS",
        "Bromssystemet är underhållsfritt eftersom ABS- systemet är slutet"
      ],
      correctIndex: 0,
      explanationImage: sakerhetAbsFordelarForklaringImage
    },
    {
      id: "sakerhet-3-q-real-6",
      text: "Under vilken del av en långresa anses risken vara störst för att föraren råkar ut för en olycka på grund av trötthet?",
      options: [
        "Under de första 15 minuterna av resan",
        "Efter ungefär halva restiden",
        "Under de sista 15 minuterna av resan"
      ],
      correctIndex: 2,
      explanationImage: sakerhetTrotthetForklaringImage
    },
    {
      id: "sakerhet-3-q-real-7",
      text: "Du kör en manuell växlad taxi. Vilket av följande körsätt är mest bränslebesparande?",
      options: [
        "Växla upp sent och köra på så låg växel som möjligt",
        "Undvika hårda inbromsningar och stopp",
        "Använda låg växel vid högt varvtal",
        "Undvika att motorbromsa för att sänka farten"
      ],
      correctIndex: 1,
      explanationImage: sakerhetEkonomisktKorsattForklaringImage
    },
    {
      id: "sakerhet-3-q-real-8",
      text: "Du ska lyfta tungt gods. Vilken lyftteknik bör du använda?",
      options: [
        "Jag lyfter med raka ben och rak rygg",
        "Jag lyfter med böjda ben och rak rygg",
        "Jag lyfter med raka ben och böjd rygg",
        "Jag lyfter med böjda ben och böjd rygg"
      ],
      correctIndex: 1,
      explanationImage: sakerhetLyftteknikForklaringImage
    },
    {
      id: "sakerhet-3-q-real-9",
      text: "Hur många liv skulle sparas årligen om alla alltid använde bilbälte",
      options: [
        "Ca 10-20",
        "Ca 80-90",
        "Ca 160-170",
        "Ca 250-260"
      ],
      correctIndex: 1,
      explanationImage: sakerhetBilbalteLivForklaringImage
    },
    {
      id: "sakerhet-3-q-real-10",
      text: "Vilken typ av olyckor anses mest vanliga I samband med trötthet?",
      options: [
        "Mötesolyckor",
        "Omkörningsolyckor",
        "Upphinnandeolyckor",
        "Singelolyckor"
      ],
      correctIndex: 3,
      explanationImage: sakerhetTrotthetSingelolyckaForklaringImage
    },
    {
      id: "sakerhet-3-q-real-11",
      text: "På vilken av bilderna sitter föraren säkrast för att skydda sig mot nackskador vid påkörning bakifrån?",
      options: [
        "Bild A",
        "Bild B",
        "Bild C",
        "Bild D"
      ],
      correctIndex: 2,
      questionImage: sakerhetHuvudstodFragaImage,
      explanationImage: sakerhetHuvudstodForklaringImage
    },
    {
      id: "sakerhet-3-q-real-12",
      text: "På vilket sätt bör du i första hand hjälpa en person som är omtöcknad på grund av diabetes?",
      options: [
        "Placera i stabilt sidoläge (framstupa sidoläge)",
        "Lossa kläderna kring halsen",
        "Se till att personen genast blir förd till sjukhus",
        "Ge något sött att äta"
      ],
      correctIndex: 3,
      explanationImage: sakerhetDiabetesOmtocknadForklaringImage
    },
    {
      id: "sakerhet-3-q-real-13",
      text: "Vilket är det långsiktiga målet för trafiksäkerhetsarbetet enligt Nollvisionen?",
      options: [
        "Minskning med 10 procent av antalet dödade och allvarligt skadade per år",
        "Minskning med 20 procent av antalet dödade och allvarligt skadade per år",
        "Noll dödade och allvarligt skadade i vägtrafiken per år",
        "Högst 500 dödade i vägtrafiken per år"
      ],
      correctIndex: 2,
      explanationImage: sakerhetNollvisionenForklaringImage
    },
    {
      id: "sakerhet-3-q-real-14",
      text: "Vad bör du göra inför vintern för att undvika kostsamma reparationer på ditt fordon?",
      options: [
        "Kontrollera att frostskyddet i kylarvätskan är tillräckligt",
        "Byta motor- och växellådsolja",
        "Byta till vintertermostat",
        "Justera framvagnen"
      ],
      correctIndex: 0,
      explanationImage: sakerhetVinterKylsystemForklaringImage
    },
    {
      id: "sakerhet-3-q-real-15",
      text: "Vilka symtom kan vara tecken på att en person håller på att få en hjärtinfarkt?",
      options: [
        "Personen blir blek, darrig, kallsvettig och irriterad men förstår inte själv att han är sjuk",
        "Personen får andnöd, blir kallsvettig och klagar över smärtor i bröstet som strålar ut mot hals och armar",
        "Personen förlorar medvetandet och faller ihop med muskelryckningar och kramper",
        "Personen blir förvirrad, blir aggressiv mot personer omgivningen och tappar känseln i armarna"
      ],
      correctIndex: 1,
      explanationImage: sakerhetHjartinfarktForklaringImage
    },
    {
      id: "sakerhet-3-q-real-16",
      text: "Vilket är minsta tillåtna mönsterdjup på ett personbilsdäck när det används på vinterväglag i januari?",
      options: [
        "1.6 mm",
        "2.0 mm",
        "2.6 mm",
        "3.0 mm",
        "3.6 mm",
        "4.0 mm"
      ],
      correctIndex: 3,
      explanationImage: sakerhetVinterdackMonsterdjupForklaringImage
    },
    {
      id: "sakerhet-3-q-real-17",
      text: "Vilket av följande symtom kan tyda på ledgångsreumatism?",
      options: [
        "Skakningar",
        "Balansrubbningar",
        "Minskad rörlighet i ledarna"
      ],
      correctIndex: 2,
      explanationImage: sakerhetLedgangsreumatismForklaringImage
    },
    {
      id: "sakerhet-3-q-real-18",
      text: "Din kund är gravt hörselskadad. Hur bör du göra för att kunden ska ha så stor chans som möjligt att uppfatta vad du säger?",
      options: [
        "Jag talar så högt jag kan",
        "Jag söker ögonkontakt så att mina munrörelser syns",
        "Jag talar så nära kundens öra eller hörapparat som möjligt",
        "Jag talar så långsamt jag kan"
      ],
      correctIndex: 1
    },
    {
      id: "sakerhet-3-q-real-19",
      text: "Ett barn som är 17 månader ska åka i din taxi. Barnet kan sitta utan stöd. Vilken skyddsutrustning bör barnet använda?",
      options: [
        "Bältestol",
        "Bälteskudde",
        "Babyskydd",
        "Bilbarnstol"
      ],
      correctIndex: 3,
      explanationImage: sakerhetBilbarnstolForklaringImage
    },
    {
      id: "sakerhet-3-q-real-20",
      text: "Vilken av följande olyckstyper är överrepresenterade när föraren använder mobiltelefon under körning?",
      options: [
        "Viltolyckor",
        "Korsningsolyckor",
        "Mörkerolyckor",
        "Upphinnandeolyckor"
      ],
      correctIndex: 3,
      explanationImage: sakerhetMobiltelefonUpphinnandeolyckorForklaringImage
    },
    {
      id: "sakerhet-3-q-real-21",
      text: "Bilens servostyrning är urfunktion. Hur påverkas styrningen?",
      options: [
        "Bilen börjar dra snett",
        "Bilen blir tungstyrd",
        "Det rycker i ratten när jag svänger",
        "Ratten låser sig"
      ],
      correctIndex: 1,
      explanationImage: sakerhetServostyrningForklaringImage
    },
    {
      id: "sakerhet-3-q-real-22",
      text: "Vad bör du göra för att minska miljöeffekterna vid kallstart?",
      options: [
        "Köra direkt men med lätt gaspådrag",
        "Tomgångsköra med förhöjt varvtal minst 1 minut",
        "Tomgångsköra minst 2 minuter",
        "Tomgångsköra minst 3 minuter"
      ],
      correctIndex: 0,
      explanationImage: sakerhetKallstartMiljoForklaringImage
    },
    {
      id: "sakerhet-3-q-real-23",
      text: "Taxin är förbeställd av en kund som talat om att han är synskadad. Hur bör du göra när du kommer fram till kunden?",
      options: [
        "Jag går ur bilen, går fram till kunden, presenterar mig och frågar efter kundens namn",
        "Jag går ur bilen, öppnar dörren på passagerarsidan och ber kunden sätta sig",
        "Jag sitter kvar i bilen, öppnar dörren på passagerarsidan och ber kunden sätta sig",
        "Jag sitter kvar i bilen, öppnar dörren på passagerarsidan och frågar efter kundens namn"
      ],
      correctIndex: 0
    },
    {
      id: "sakerhet-3-q-real-24",
      text: "Vilket av de skadliga ämnena i avgaserna minskas inte av bilens katalysator?",
      options: [
        "Kolväten",
        "Kolmonoxid (Koloxid)",
        "Kväveoxider",
        "Koldioxid"
      ],
      correctIndex: 3,
      explanationImage: sakerhetKatalysatorKoldioxidForklaringImage
    },
    {
      id: "sakerhet-3-q-real-25",
      text: "Du ska köra en kund som är rullstolsburen. Måste kunden använda bilbälte?",
      options: [
        "Nej, enligt bilbälteslagen behöver rullstolsburna inte använda bilbälte",
        "Ja, om det finns bilbälte",
        "Ja, men endast om kunden sitter i framsätet"
      ],
      correctIndex: 1
    },
    {
      id: "sakerhet-3-q-real-26",
      text: "Du ska lasta rollatorn på bilden i din taxi. Vilken bokstav markerar den spärr som måste frigöras när du ska fälla ihop rollatorn?",
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
      correctIndex: 2,
      questionImage: sakerhetRollatorFragaImage,
      explanationImage: sakerhetRollatorForklaringImage
    },
    {
      id: "sakerhet-3-q-real-27",
      text: "Vad innebär det om varningslampan tänds?",
      options: [
        "Parkeringsbromsen är ur funktion",
        "Färdbromsens ABS-system är ur funktion",
        "Temperaturen i kylarvätskan är för hög",
        "Färdbromsen kan vara helt eller delvis ur funktion"
      ],
      correctIndex: 3,
      questionImage: sakerhetBromsvarningslampaFragaImage,
      explanationImage: sakerhetBromsvarningslampaForklaringImage
    },
    {
      id: "sakerhet-3-q-real-28",
      text: "Vid kontroll av bilens hydrauliska bromssystem upptäcker du att bromspedalen sakta sjunker mot golvet. Vad tyder det på?",
      options: [
        "Läckage i bromssystemet",
        "Luft i bromssystemet",
        "Att bromsarna måste justeras",
        "Slitna bromsbelägg"
      ],
      correctIndex: 0,
      explanationImage: sakerhetHydraulisktBromssystemForklaringImage
    },
    {
      id: "sakerhet-3-q-real-29",
      text: "Vad menas med demens tillstånd?",
      options: [
        "Sömnlöshet och oro",
        "Minnessvårigheter orsakade av sjukdom i hjärnan",
        "Ökad rädsla för andra människor",
        "Nedsatt rörelseförmåga på grund av ålder"
      ],
      correctIndex: 1,
      explanationImage: sakerhetDemensForklaringImage
    },
    {
      id: "sakerhet-3-q-real-30",
      text: "En modern och säker bil klarar att skydda de åkande vid en sidokollision, under förutsättning att de använder bilbälte och att fordonet som kör in i bilen inte kör alltför fort. Hur fort får det påkörande fordonet högst köra för att det ska gälla?",
      options: [
        "45-50 km/h",
        "60-65 km/h",
        "75-80 km/h",
        "90-95 km/h"
      ],
      correctIndex: 0,
      explanationImage: sakerhetSidokollisionForklaringImage
    },
    {
      id: "sakerhet-3-q-real-31",
      text: "Du har lastat tung last i bagageutrymmet på din taxi. Påverkar detta bilens köregenskaper vid körning i kurvor?",
      options: [
        "Ja, bilen vill svänga mer än i olastat skick",
        "Nej, bilens köregenskaper förändras inte",
        "Ja, bilen vill fortsätta rakt fram"
      ],
      correctIndex: 0,
      explanationImage: sakerhetTungLastKurvorForklaringImage
    },
    {
      id: "sakerhet-3-q-real-32",
      text: "Du ska frakta gods med din taxi. Vilken belastning ska lastsäkringen minst motstå framåt och bakåt enligt allmänna bestämmelser?",
      options: [
        "Hela lastvikten framåt och halva lastvikten bakåt",
        "Hela lastvikten både framåt och bakåt",
        "Halva lastvikten både framåt och bakåt",
        "Halva lastvikten framåt och hela lastvikten bakåt"
      ],
      correctIndex: 0,
      explanationImage: sakerhetLastsakringForklaringImage
    },
    {
      id: "sakerhet-3-q-real-33",
      text: "Du har radialdäck på din taxi. Hur påverkar lufttrycket i däcken deras livslängd?",
      options: [
        "Lufttrycket har ingen betydelse för däckens livslängd",
        "Ett par hekto för lågt lufttryck förkortar däckens livslängd",
        "Ett par hekto för högt lufttryck förkortar däckens livslängd"
      ],
      correctIndex: 1,
      explanationImage: sakerhetRadialdackLufttryckLivslangdForklaringImage
    },
    {
      id: "sakerhet-3-q-real-34",
      text: "Du kommer fram till en olycksplats. Får du flytta fordon som varit inblandade i olyckan?",
      options: [
        "Ja, alltid",
        "Ja, om de är till fara för övriga trafikanter",
        "Nej, de får endast räddningstjänsten",
        "Nej, det får endast polisen"
      ],
      correctIndex: 1,
      explanationImage: sakerhetOlycksplatsFlyttaFordonForklaringImage
    },
    {
      id: "sakerhet-3-q-real-35",
      text: "Du har kopplat en släpvagn till din taxi, men kultrycket är för högt. Vad kan det medföra?",
      options: [
        "Katastrofbromsen upphör att fungera",
        "Halvljuset blir bländande",
        "Framdäckens väggrepp blir bättre",
        "Slitaget på bilens framdäck ökar"
      ],
      correctIndex: 1,
      explanationImage: sakerhetSlapvagnKultryckForklaringImage
    },
    {
      id: "sakerhet-3-q-real-36",
      text: "Två personer ska åka taxi en måndag kl 07.00. Resan beräknas ta ca 10 min och är 5 km lång. Hur mycket kommer resan att kosta enligt prisinformationen?",
      options: [
        "Ca 90 kr",
        "Ca 110 kr",
        "Ca 155 kr",
        "Ca 165 kr"
      ],
      correctIndex: 2,
      questionImage: sakerhetTaxiprisBerakningFragaImage,
      explanationImage: sakerhetTaxiprisBerakningForklaringImage
    },
    {
      id: "sakerhet-3-q-real-37",
      text: "En kund bär denna symbol på sitt ytterplagg. Vilken sjukdom har kunden?",
      options: [
        "Astma",
        "Diabetes",
        "Hjärtsjukdom",
        "Epilepsi"
      ],
      correctIndex: 3,
      questionImage: sakerhetEpilepsiSymbolFragaImage,
      explanationImage: sakerhetEpilepsiSymbolForklaringImage
    },
    {
      id: "sakerhet-3-q-real-38",
      text: "Vilken risk finns med att använda startkablar när du använder taxin för att hjälpa någon annan att starta?",
      options: [
        "Glödlamporna kan gå sönder",
        "Fordonen kan bli strömförande",
        "Taxametern kan få driftstörningar",
        "Startmotorn kan överhettas"
      ],
      correctIndex: 2,
      explanationImage: sakerhetStartkablarTaxiForklaringImage
    },
    {
      id: "sakerhet-3-q-real-39",
      text: "Din taxi är utrustad med krockkuddar fram. Din passagerare är 120 cm lång. Var sitter han säkrast?",
      options: [
        "I baksätet",
        "I framsätet",
        "Han sitter lika säkrast i båda fram och baksätet"
      ],
      correctIndex: 0,
      explanationImage: sakerhetKrockkuddePassagerareForklaringImage
    },
    {
      id: "sakerhet-3-q-real-40",
      text: "Utetemperaturen är 0 grader och din bil har stått ute hela natten. Hur länge bör den elektriska motorvärmaren vara inkopplad innan du startar motorn?",
      options: [
        "Ca 15 minuter",
        "Ca 30 minuter",
        "Ca 1 timme",
        "Ca 2 timmar",
        "Ca 3 timmar"
      ],
      correctIndex: 2,
      explanationImage: sakerhetMotorvarmareTidForklaringImage
    },
    {
      id: "sakerhet-3-q-real-41",
      text: "En förare som talar i mobiltelefon har oftare sämre reaktionsförmåga än vanligt. Normal reaktionstid är ca 1 sekund. Hur lång blir reaktionssträckan i 70km/h om det istället tar 2 sekunder att reagera?",
      options: [
        "Ca 25 m",
        "Ca 39 m",
        "Ca 50 m",
        "Ca 62 m",
        "Ca 90 m"
      ],
      correctIndex: 1,
      explanationImage: sakerhetReaktionsstrackaMobilForklaringImage
    },
    {
      id: "sakerhet-3-q-real-42",
      text: "Vilken fördel är det med en bältesstol jämfört med en bälteskudde som skyddsutrustning för barn?",
      options: [
        "Den monteras alltid bakåtvänd",
        "Den hindrar att barnet glider i sidled",
        "Den är lättare att förvara i en taxibil",
        "Den har ett särskilt bilbälte inbyggt i stolen"
      ],
      correctIndex: 1,
      explanationImage: sakerhetBaltesstolBalteskuddeForklaringImage
    },
    {
      id: "sakerhet-3-q-real-43",
      text: "Kan en alkoholpåverkad bilförare bli straffad för rattfylleri om han eller hon har mindre än 0.2 promille alkohol i blodet?",
      options: [
        "Ja, men endast om föraren blir inblandad i en trafikolycka",
        "Ja, eftersom vi har en nollgräns för alkohol i samband med bilkörning",
        "Ja, om det kan antas att föraren inte kan framföra fordonet på ett betryggande sätt",
        "Nej"
      ],
      correctIndex: 2
    },
    {
      id: "sakerhet-3-q-real-44",
      text: "Hur påverkas i allmänhet en förare som använder mobiltelefon under körning?",
      options: [
        "Föraren får en förlängd stoppsträcka när han eller hon bromsar",
        "En förare som har stor körvana blir inte påverkad",
        "Förarens körförmåga påverkas inte vid körning på motorväg",
        "Om föraren använder \"handsfreeutrustning\" påverkas inte körningen"
      ],
      correctIndex: 0
    },
    {
      id: "sakerhet-3-q-real-45",
      text: "En modern och säker bil klarar att skydda de åkande mot att dödas eller skadas allvarligt vid en frontalkollision mellan normalstora personbilar. Förutsättningen är att de använder bilbälte. Upp till vilken hastighet gäller detta?",
      options: [
        "30-35 km/h",
        "60-65 km/h",
        "80-85 km/h",
        "100-110 km/h"
      ],
      correctIndex: 1,
      explanationImage: sakerhetFrontalkollisionHastighetForklaringImage
    },
    {
      id: "sakerhet-3-q-real-46",
      text: "Vad är riktigt om vad du som taxiförare får berätta om vad som hänt i din bil?",
      options: [
        "Om jag ska vittna i en rättegång har jag rätt att låta bli att berätta sådant som har hänt i bilen",
        "Vilken tystnadsplikt jag har framgår vanligen av en överenskommelse med åkeriet eller beställningscentralen",
        "Jag är skyldig att berätta vad som har hänt i bilen om en journalist frågar",
        "Jag har samma tystnadsplikt som en läkare eller advokat"
      ],
      correctIndex: 1
    },
    {
      id: "sakerhet-3-q-real-47",
      text: "Du ska lasta rullatorn på bilden i din taxi. Vilken bokstav markerar den spärr som måste frigöras när du ska fälla ihop rullatorn?",
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
      correctIndex: 0,
      questionImage: sakerhetRullatorFraga2Image
    },
    {
      id: "sakerhet-3-q-real-48",
      text: "Vilket påstående speglar bäst grundtanken i 'Nollvisionen'?",
      options: [
        "Vi ska i olycksförebyggande syfte införa en lag som begränsar möjligheten för yngre förare att köra bil under helger och nätter",
        "Vi ska i skadeförebyggande syfte se till att ett misstag i trafiken får så lindriga konsekvenser som möjligt för de inblandade",
        "Vi ska i skadeförebyggande syfte kraftigt öka straffen för hastighetsöverträdelser",
        "Vi ska i olycksförebyggande syfte döma rattfyllerister hårdare",
        "Vi ska i olycksförebyggande syfte utöka kontrollera av våra bilar ute på vägarna"
      ],
      correctIndex: 1
    },
    {
      id: "sakerhet-3-q-real-49",
      text: "Hur bör du helst placera tung last i en personbil?",
      options: [
        "Långt fram och lågt",
        "Långt fram och högt",
        "Långt bak och lågt",
        "Långt bak och högt"
      ],
      correctIndex: 0,
      explanationImage: sakerhetTungLastPlaceringForklaringImage
    },
    {
      id: "sakerhet-3-q-real-50",
      text: "Din bil har en läcka i avgassystemet. Vad innebär det för risk?",
      options: [
        "Koloxid kan tränga in i bilen",
        "Bränsleförbrukningen blir betydligt högre än normalt",
        "Motorn blir svårstartad",
        "Motortemperaturen blir högre än normalt"
      ],
      correctIndex: 0,
      explanationImage: sakerhetAvgassystemLackageForklaringImage
    },
    {
      id: "sakerhet-3-q-real-51",
      text: "Vad är sant om de farliga ämnen som finns i bilarnas avgaser?",
      options: [
        "Alla försvinner ur kretsloppet inom högst ett år",
        "Alla försvinner ur kretsloppet efter 3-5 år",
        "Alla försvinner ur kretsloppet inom 10 år",
        "Vissa ämnen kan stanna i kretsloppet i hundratals år"
      ],
      correctIndex: 3,
      explanationImage: sakerhetAvgaserFarligaAmnenForklaringImage
    }
  ]
};

const sakerhet4Section: QuestionSection = {
  id: "sakerhet-4",
  name: "Säkerhet & beteende 4",
  questions: [
    {
      id: "sakerhet-4-q-real-1",
      text: "Varför rekommenderas regelbundet byte av bromsvätskan?",
      options: [
        "Den drar till sig dammpartiklar",
        "Den drar till sig vatten vilket sänker kokpunkten",
        "Det är risk att den får paraffinutfällningar med tiden",
        "Den blir trögflytande med tiden"
      ],
      correctIndex: 1,
      explanationImage: sakerhetBromsvatskaByteForklaringImage
    },
    {
      id: "sakerhet-4-q-real-2",
      text: "Säkringen till en helljuslampa har gått sönder. Vad händer om du monterar en säkring med för lågt amperetal?",
      options: [
        "Det är större risk att säkringen går sönder",
        "Lampan lyser starkare",
        "Risken för kabelbrand ökar",
        "Lampan lyser svagare"
      ],
      correctIndex: 0,
      explanationImage: sakerhetSakringLagtAmperetalForklaringImage
    },
    {
      id: "sakerhet-4-q-real-3",
      text: "Om du byter säkringen för halvljus till en starkare säkring, vad händer?",
      options: [
        "Halvljuset blir starkare",
        "Det överhettas i elkablarna",
        "Kraften på ljuset blir högre"
      ],
      correctIndex: 1
    },
    {
      id: "sakerhet-4-q-real-4",
      text: "Vilket påstående är riktigt om bilbatterier?",
      options: [
        "Batteriets kapacitet minskar om vätskenivån är för låg vid upprepade tillfällen",
        "Temperaturen har ingen inverkan på batteriets förmåga att avge energi",
        "Batteriet är den del av fordonet som förbrukar mest ström",
        "Innan ett batteri sätts på laddning bör man se till att det är helt urladdat"
      ],
      correctIndex: 0,
      explanationImage: sakerhetBilbatteriVatskenivaForklaringImage
    },
    {
      id: "sakerhet-4-q-real-5",
      text: "Du kör personbil och upptäcker att bilen drar snett. Vad kan orsaken vara?",
      options: [
        "Framvagnsinställningen är felaktig",
        "Drivremmen till styrservopumpen har gått av",
        "Vätskenivån i styrservon är för låg",
        "Det är obalans i framhjulen"
      ],
      correctIndex: 0,
      explanationImage: sakerhetBilDrarSnettForklaringImage
    },
    {
      id: "sakerhet-4-q-real-6",
      text: "Vad sätts i centrum i Nollvisionen inom vägtrafiken?",
      options: [
        "Människors liv och hälsa",
        "Fordonens miljöpåverkan",
        "Fordonens framkomlighet",
        "Polisens övervakning"
      ],
      correctIndex: 0,
      explanationImage: sakerhetNollvisionenCentrumForklaringImage
    },
    {
      id: "sakerhet-4-q-real-7",
      text: "Hur kan du märka att servon till bromsarna inte fungerar?",
      options: [
        "Jag måste trampa hårdare än normalt när jag bromsar",
        "Jag måste trampa upprepade gånger för att bromsa",
        "Det finns inget motstånd i pedalen när jag bromsar"
      ],
      correctIndex: 0,
      explanationImage: sakerhetServoBromsarForklaringImage
    },
    {
      id: "sakerhet-4-q-real-8",
      text: "Vad kan bli följden av att placera tung last baktill i bilen?",
      options: [
        "Bromssträckan blir kortare",
        "Hjulinställningen förändras",
        "Ytterkanterna på framdäcken slits hårdare",
        "Bilens köregenskaper förändras"
      ],
      correctIndex: 3
    },
    {
      id: "sakerhet-4-q-real-9",
      text: "Ett hjul har gått sönder och du byter till reservdäck. Vad bör du göra?",
      options: [
        "Köra fram kunden och sedan byta däcken",
        "Köra direkt till en gummifabrik",
        "Det finns en viss hastighet där man får köra med reservdäck"
      ],
      correctIndex: 2,
      explanationImage: sakerhetReservdackHastighetForklaringImage
    },
    {
      id: "sakerhet-4-q-real-10",
      text: "Vad är rätt angående en katalysator i en bil?",
      options: [
        "Den renar 50-60% av avgaser",
        "Den renar 60-70% av avgaser",
        "Den renar 70-80% av avgaser",
        "Den renar 80-90% av avgaser"
      ],
      correctIndex: 3,
      explanationImage: sakerhetKatalysatorReningsgradForklaringImage
    },
    {
      id: "sakerhet-4-q-real-11",
      text: "De flesta oskyddade trafikanter överlever om de blir påkörda av en bil i en viss hög hastighet. Vilken?",
      options: [
        "20 km/h",
        "30 km/h",
        "40 km/h",
        "50 km/h",
        "60 km/h",
        "70 km/h"
      ],
      correctIndex: 1,
      explanationImage: sakerhetOskyddadeTrafikanterHastighetForklaringImage
    },
    {
      id: "sakerhet-4-q-real-12",
      text: "När på dygnet anses risken vara störst för olyckor som beror på trötthet?",
      options: [
        "KL 21.00-24.00",
        "KL 02.00-05.00",
        "KL 07.00-10.00",
        "KL 14.00-17.00"
      ],
      correctIndex: 1,
      explanationImage: sakerhetTrotthetRiskTidForklaringImage
    },
    {
      id: "sakerhet-4-q-real-13",
      text: "En kund är alkoholpåverkad och han beter sig hotfull. Vad bör du göra?",
      options: [
        "Ring polisen",
        "Avbryta transport",
        "Ring beställning centralen"
      ],
      correctIndex: 1,
      explanationImage: sakerhetAvbrytaTransportAlkoholForklaringImage
    },
    {
      id: "sakerhet-4-q-real-14",
      text: "Du hör ett metalliskt skrapande ljud när du bromsar. Måste du vidta någon åtgärd?",
      options: [
        "Ja, kontrollera bromsbeläggens tjocklek",
        "Ja, kontrollera bromsvätskans nivå",
        "Nej, eftersom ljudet beror på att ABS-bromsen aktiverades",
        "Ja, kontrollera servocylinderns funktion"
      ],
      correctIndex: 0
    },
    {
      id: "sakerhet-4-q-real-15",
      text: "Din kund har en ledsagare som följer med vid resan. Hur bör du göra?",
      options: [
        "Jag frågar kunden om han behöver hjälp",
        "Jag frågar ledsagaren om kunden behöver hjälp",
        "Jag förutsätter att ledsagaren hjälper kunden"
      ],
      correctIndex: 0
    },
    {
      id: "sakerhet-4-q-real-16",
      text: "Vad är sant gällande katalysator?",
      options: [
        "Den minskar inte växthuseffekten",
        "Den förstör trädens tillväxt",
        "Den minskar växthuseffekten",
        "Den minskar inte koloxid"
      ],
      correctIndex: 0,
      explanationImage: sakerhetKatalysatorVaxthuseffektForklaringImage
    },
    {
      id: "sakerhet-4-q-real-17",
      text: "Varför är däcket ojämnt slitet?",
      options: [
        "För lågt lufttryck",
        "Fel på hjulinställning",
        "Obalans",
        "Fel material"
      ],
      correctIndex: 1,
      questionImage: sakerhetDackOjamntSlitetFragaImage,
      explanationImage: sakerhetDackOjamntSlitetForklaringImage
    },
    {
      id: "sakerhet-4-q-real-18",
      text: "Du kör på landsväg, hastigheten på vägen är 70 km/h och du får motorstopp. Bör du placera ut en varningstriangel?",
      options: [
        "Ja, alltid",
        "Nej, behövs inte"
      ],
      correctIndex: 0
    },
    {
      id: "sakerhet-4-q-real-19",
      text: "Under vilken högsta utetemperatur bör du använda den elektriska motorvärmaren före kallstart?",
      options: [
        "+10 °C",
        "+5 °C",
        "0 °C",
        "-5 °C",
        "-10 °C",
        "-15 °C"
      ],
      correctIndex: 0,
      explanationImage: sakerhetMotorvarmareTemperaturForklaringImage
    },
    {
      id: "sakerhet-4-q-real-20",
      text: "I din bil har du en airbag placerad på passagerarens framsäte. Hur lång bör passageraren vara för att kunna sitta där framme?",
      options: [
        "100 cm lång",
        "120 cm lång",
        "140 cm lång"
      ],
      correctIndex: 2,
      explanationImage: sakerhetAirbagPassagerareLangdForklaringImage
    },
    {
      id: "sakerhet-4-q-real-21",
      text: "På vilket sätt kan du påverka bränsleförbrukningen i din bil?",
      options: [
        "Bränsleförbrukningen blir lägre om jag använder motorvärmare på vintern",
        "Bränsleförbrukningen blir lägre om jag kör på låga växlar",
        "Bränsleförbrukningen blir högre om bilen får regelbunden service",
        "Bränsleförbrukningen blir högre om jag har högt lufttryck i däcken"
      ],
      correctIndex: 0,
      explanationImage: sakerhetBransleforbrukningMotorvarmareForklaringImage
    },
    {
      id: "sakerhet-4-q-real-22",
      text: "Hur kan du på bästa sätt minska bränsleförbrukningen?",
      options: [
        "Släppa gasen i god tid så att du undviker hårda bromsar",
        "Växla till låg växel i alla uppförsbackar",
        "Använda farthållare",
        "Jag försöker hela tiden att köra på höga motorvarv"
      ],
      correctIndex: 0
    },
    {
      id: "sakerhet-4-q-real-23",
      text: "Vilken typ av olyckor anses mest vanligt i samband med mobiltelefon?",
      options: [
        "Singelolyckor",
        "Upphinnande olyckor",
        "Korsnings olyckor",
        "Omkörningsolyckor"
      ],
      correctIndex: 1,
      explanationImage: sakerhetMobiltelefonOlyckorForklaringImage
    },
    {
      id: "sakerhet-4-q-real-24",
      text: "Du har en kund som har med sig ledsagare. Vad bör du göra?",
      options: [
        "Du frågar vad kunden behöver för hjälp",
        "Du tar över kunden från ledsagaren",
        "Du låter ledsagaren hjälpa kunden"
      ],
      correctIndex: 0
    },
    {
      id: "sakerhet-4-q-real-25",
      text: "Vad är fördelen med en ABS broms?",
      options: [
        "Den förhindrar låsningen på hjulen",
        "Den minskar bromssträckan i alla vägar"
      ],
      correctIndex: 0,
      explanationImage: sakerhetAbsFordelForklaringImage
    },
    {
      id: "sakerhet-4-q-real-26",
      text: "Du har en vuxen person i baksätet. Hur stor blir passagerarens krockvikt om du i 50km/h kör rakt in i stillastående tung lastbil?",
      options: [
        "Ca 100 kg",
        "Ca 300 kg",
        "Ca 1000 kg",
        "Ca 3000 kg"
      ],
      correctIndex: 3,
      explanationImage: sakerhetKrockviktPassagerareForklaringImage
    },
    {
      id: "sakerhet-4-q-real-27",
      text: "Du har en vuxen passagerare som sitter obältad i baksätet i din bil. Hur många gånger större än kroppsvikten blir passagerarens krockvikt om du frontalkrockar med en tung lastbil i ca 50 km/h?",
      options: [
        "Ca två gånger",
        "Ca fyra gånger",
        "Ca tio gånger",
        "Ca 25 gånger",
        "Ca 50 gånger"
      ],
      correctIndex: 4
    },
    {
      id: "sakerhet-4-q-real-28",
      text: "Du har en kund som har med sig en vit käpp. Vad har han för sjukdom?",
      options: [
        "Rörelsehindrad",
        "Synskadad"
      ],
      correctIndex: 1,
      explanationImage: sakerhetVitKappSynskadadForklaringImage
    },
    {
      id: "sakerhet-4-q-real-29",
      text: "Hur länge får du använda dubbdäck på din taxi om det inte är vinterväglag eller förväntas bli det?",
      options: [
        "Till och med 30 april",
        "Till och med 28 februari",
        "Till och med 31 mars",
        "Till och med första vardagen efter påsk"
      ],
      correctIndex: 0,
      explanationImage: sakerhetDubbdackTaxiTidForklaringImage
    },
    {
      id: "sakerhet-4-q-real-30",
      text: "Två av däcken på din taxi är så slitna att de bör bytas ut. Var bör de nya däcken monteras för att köregenskaperna skall bli så säkra som möjligt?",
      options: [
        "Båda däcken på framaxeln",
        "Ett på vardera fram- och bakaxeln",
        "Båda däcken på bakaxeln"
      ],
      correctIndex: 2,
      explanationImage: sakerhetNyaDackMonteringForklaringImage
    },
    {
      id: "sakerhet-4-q-real-31",
      text: "Du kör på motorväg och närmar dig ett fordon från accelerationfält. Vad ska du göra?",
      options: [
        "Jag måste byta till vänstra körfält",
        "Jag behöver inte anpassa hans inkörning",
        "Jag måste anpassa hastigheten för att inkörning underlättas"
      ],
      correctIndex: 2,
      explanationImage: sakerhetMotorvagAccelerationFaltForklaringImage
    },
    {
      id: "sakerhet-4-q-real-32",
      text: "Vilken typ av vätska finns i den inringade behållaren på bilden?",
      options: [
        "Glykolblandning med vatten",
        "Bromsvätska",
        "Styrservovätska",
        "Spolvätska"
      ],
      correctIndex: 1,
      questionImage: sakerhetBromsvatskaBehallareFragaImage
    },
    {
      id: "sakerhet-4-q-real-33",
      text: "Vad bör du byta eller åtgärda för att undvika motorhaveri samt dyrbara reparationer innan felet förvärras?",
      options: [
        "Kamaxelremmen byts regelbundet",
        "Bromsklostret",
        "Olja och filtret",
        "Fläktremmen"
      ],
      correctIndex: 0,
      explanationImage: sakerhetKamaxelremByteForklaringImage
    },
    {
      id: "sakerhet-4-q-real-34",
      text: "Din kund är synskadad och har med sig sin ledarhund som har vit sele. Vad bör du göra först?",
      options: [
        "Tala om att hundar inte får följa med i taxibilar",
        "Fråga den synskadade hur jag ska uppträda mot hunden",
        "Sätta mig ner bredvid hunden för att bekanta mig med den"
      ],
      correctIndex: 1
    },
    {
      id: "sakerhet-4-q-real-35",
      text: "Motortemperaturen stiger upp. Vad ska du göra?",
      options: [
        "Du kollar motoroljan",
        "Byter batteriet",
        "Tittar efter fläktremmen"
      ],
      correctIndex: 2,
      explanationImage: sakerhetMotortemperaturFlaktremForklaringImage
    },
    {
      id: "sakerhet-4-q-real-36",
      text: "Hur många personer varje år beräknas dö i olyckor där någon inblandad har varit påverkad av alkohol?",
      options: [
        "Ca 50 personer",
        "Ca 150 personer",
        "Ca 250 personer",
        "Ca 350 personer",
        "Ca 500 personer"
      ],
      correctIndex: 1
    },
    {
      id: "sakerhet-4-q-real-37",
      text: "Två personer ska åka taxi en lördag kl 03.00. Resan beräknas ta ca 15 min och är 1,5 mil lång. Hur mycket kommer resan att kosta enligt prisinformationen?",
      options: [
        "Ca 195 kr",
        "Ca 250 kr",
        "Ca 310 kr",
        "Ca 400 kr"
      ],
      correctIndex: 2,
      questionImage: sakerhetTaxiprisBerakningFragaImage,
      explanationImage: sakerhetTaxiprisBerakningForklaringImage
    },
    {
      id: "sakerhet-4-q-real-38",
      text: "Nya bilar använder (RME) som kommer ur raps. Vilka fördelar har det jämfört med diesel?",
      options: [
        "Den är fylld med svavel",
        "Den bidrar till växthuseffekten, vilket medför klimatförändring",
        "Den ökar inte på koldioxidhalten, alltså bidrar inte till växthuseffekten",
        "Det minskar bränsleförbrukning vilket medför bättre bilekonomi"
      ],
      correctIndex: 2,
      explanationImage: sakerhetRmeFordelarForklaringImage
    },
    {
      id: "sakerhet-4-q-real-39",
      text: "Till vem gäller inte brytpunktstariffen?",
      options: [
        "Färdtjänst",
        "Skolskjuts",
        "Företag",
        "Privatpersoner"
      ],
      correctIndex: 3,
      explanationImage: sakerhetBrytpunktstariffPrivatpersonerForklaringImage
    },
    {
      id: "sakerhet-4-q-real-40",
      text: "Du ska ensam hjälpa en rullstolsburen passagerare nerför en trappa. Vilken av bilderna beskriver rätt teknik?",
      options: [
        "Bild A",
        "Bild B",
        "Bild C",
        "Bild D"
      ],
      correctIndex: 3,
      questionImage: sakerhetRullstolTrappaFragaImage,
      explanationImage: sakerhetRullstolTrappaForklaringImage
    },
    {
      id: "sakerhet-4-q-real-41",
      text: "Vilken växel ska du använda när du kör en ny bil i 50 km/h?",
      options: [
        "2:an",
        "3:an",
        "4:an"
      ],
      correctIndex: 2
    },
    {
      id: "sakerhet-4-q-real-42",
      text: "Din kund behöver rollator när han går och ska ha med rollatorn på resan. Hur gör du?",
      options: [
        "Jag erbjuder kunden hjälp in i bilen och tar sedan hand om rollatorn",
        "Jag lägger in rollatorn i bagageutrymmet och hjälper sedan kunden in i bilen",
        "Jag tar hand om rollatorn och ber kunden sätta sig i bilen"
      ],
      correctIndex: 0,
      explanationImage: sakerhetRollatorHjalpForklaringImage
    },
    {
      id: "sakerhet-4-q-real-43",
      text: "Du har släppt av en kund och på vägen hem tillbaka känner du dig trött. Vad bör du göra?",
      options: [
        "Jag stanna bilen och springer några varv runt den",
        "Jag öppnar fönstret för att få frisk luft",
        "Jag höjer radio volymen",
        "Jag tar en paus och sover lite"
      ],
      correctIndex: 3,
      explanationImage: sakerhetTrotthetPausForklaringImage
    },
    {
      id: "sakerhet-4-q-real-44",
      text: "Vad är riktigt beträffande katalysatorn i en bensindriven bil?",
      options: [
        "Den fungerar effektivt redan från start",
        "Avgaserna blir renade från alla skadliga ämnen",
        "Alla sotpartiklar i avgaserna tas bort",
        "För att fungera effektivt måste den uppnå en hög temperatur"
      ],
      correctIndex: 3
    },
    {
      id: "sakerhet-4-q-real-45",
      text: "Du får ett köruppdrag natten till en lördag kl 00.30. Två personer vill åka hem till sin bostad och vill veta vad det kostar. Sträckan är 1.5 mil. Vad blir priset för resan enligt prisinformationen?",
      options: [
        "Ca 250 kr",
        "Ca 290 kr",
        "Ca 310 kr",
        "Ca 350 kr"
      ],
      correctIndex: 3,
      questionImage: sakerhetTaxiprisBerakning2ForklaringImage,
      explanationImage: sakerhetTaxiprisBerakning2FragaImage
    },
    {
      id: "sakerhet-4-q-real-46",
      text: "Du närmar dig skolbussen. Vad bör du vara mest uppmärksam på?",
      options: [
        "Personerna på andra sidan av gatan",
        "Barnen som lämnar bussen",
        "Mötande trafik",
        "Bussen, när blinkern visar att den ska köra ut från hållplatsen"
      ],
      correctIndex: 1,
      questionImage: sakerhetSkolbussBarnFragaImage
    },
    {
      id: "sakerhet-4-q-real-47",
      text: "Vad kan för låg kultryck innebära när du kör med tillkopplad släpvagn?",
      options: [
        "Att bilens köregenskaper försämras",
        "Att jag måste öka lufttrycket i hjulen på släpvagnen",
        "Att jag måste öka lufttrycket i bilens framhjul",
        "Att halvljuset blir bländande"
      ],
      correctIndex: 0
    },
    {
      id: "sakerhet-4-q-real-48",
      text: "En person ska åka taxi en fredag kl 10.00. Resan beräknas ta ca 30 minuter och det är 1 mil. Hur mycket kommer resan att kosta enligt prisinformationen?",
      options: [
        "Ca 292 kr",
        "Ca 326 kr",
        "Ca 488 kr",
        "Ca 526 kr"
      ],
      correctIndex: 1,
      questionImage: sakerhetTaxiprisBerakning3FragaImage,
      explanationImage: sakerhetTaxiprisBerakning3ForklaringImage
    },
    {
      id: "sakerhet-4-q-real-49",
      text: "Du kör en bil 2004 års-modell. Vilken sätt är mest bränsle spårande?",
      options: [
        "Frikoppla",
        "Motorbromsa med litet gaspedal",
        "Motorbromsa utan gaspedal"
      ],
      correctIndex: 2
    },
    {
      id: "sakerhet-4-q-real-50",
      text: "En person ska åka taxi en måndagsmorgon kl. 07.00. Resan beräknas ta 30 min och är 2 mil lång. Hur mycket kommer resan att kosta enligt prisinformationen?",
      options: [
        "Ca 240 kr",
        "Ca 270 kr",
        "Ca 420 kr",
        "Ca 450 kr"
      ],
      correctIndex: 3,
      questionImage: sakerhetTaxiprisBerakning4ForklaringImage,
      explanationImage: sakerhetTaxiprisBerakning4FragaImage
    },
    {
      id: "sakerhet-4-q-real-51",
      text: "Vilka är den lägsta hastighet hos en bil som medför att de flesta oskyddade trafikanter omkommer om de blir påkörda?",
      options: [
        "30 km/h",
        "50 km/h",
        "70 km/h",
        "90 km/h"
      ],
      correctIndex: 1
    },
    {
      id: "sakerhet-4-q-real-52",
      text: "Fyra personer ska åka från centrum till flygplatsen en söndagsmorgon kl. 05.30. Sträckan är 5 km. Vad blir priset för resan enligt prisinformationens jämförpris?",
      options: [
        "Ca 145 kr",
        "Ca 160 kr",
        "Ca 170 kr",
        "Ca 185 kr"
      ],
      correctIndex: 3,
      questionImage: sakerhetTaxiprisBerakning5FragaImage,
      explanationImage: sakerhetTaxiprisBerakning5ForklaringImage
    },
    {
      id: "sakerhet-4-q-real-53",
      text: "Du kommer till en olycksplats. Vilken viktig information får du av denna skylt som sitter på ett av fordonen?",
      options: [
        "Fordonet är lastat med levande djur",
        "Fordonet är lastat med livsmedel",
        "Fordonets last är ömtålig",
        "Fordonet är lastat med farligt gods"
      ],
      correctIndex: 3,
      questionImage: sakerhetFarligtGodsSkyltFragaImage,
      explanationImage: sakerhetFarligtGodsSkyltForklaringImage
    }
  ]
};

export const questionGroups: CategoryGroup[] = [
  {
    id: "main",
    name: "Teoriprovet",
    categories: [
      {
        id: "sakerhet",
        name: "Säkerhet",
        sections: [sakerhet1Section, sakerhet2Section, sakerhet3Section, sakerhet4Section]
      },
      {
        id: "lagstiftning",
        name: "Lagstiftning",
        sections: [emptySection("lagstiftning-1", "Lagstiftning 1")]
      },
      {
        id: "karta",
        name: "Karta",
        sections: [emptySection("karta-1", "Karta 1")]
      }
    ]
  },
  {
    id: "taxi-foretag",
    name: "Taxi företag",
    categories: [
      {
        id: "ekonomi",
        name: "Ekonomi",
        sections: [emptySection("ekonomi-1", "Ekonomi 1")]
      },
      {
        id: "fallstudie",
        name: "Fallstudie",
        sections: [emptySection("fallstudie-1", "Fallstudie 1")]
      },
      {
        id: "juridik",
        name: "Juridik",
        sections: [emptySection("juridik-1", "Juridik 1")]
      },
      {
        id: "tekniska",
        name: "Tekniska",
        sections: [emptySection("tekniska-1", "Tekniska 1")]
      }
    ]
  }
];
