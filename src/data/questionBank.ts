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

export const questionGroups: CategoryGroup[] = [
  {
    id: "main",
    name: "Huvudämnen",
    categories: [
      {
        id: "sakerhet",
        name: "Säkerhet",
        sections: [sakerhet1Section, emptySection("sakerhet-2", "Säkerhet 2")]
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
