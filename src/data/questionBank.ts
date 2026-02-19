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

export const questionGroups: CategoryGroup[] = [
  {
    id: "main",
    name: "Huvudämnen",
    categories: [
      {
        id: "sakerhet",
        name: "Säkerhet",
        sections: [sakerhet1Section, sakerhet2Section]
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
