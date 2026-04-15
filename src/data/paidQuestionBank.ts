import type { CategoryGroup, Question, QuestionSection } from "../types/questions";
import paidSakerhet1PrisinformationScenario from "../assets/paid-sakerhet1-prisinformation-scenario.png";
import paidSakerhet1AbsKontrollampaScenario from "../assets/paid-sakerhet1-abs-kontrollampa-scenario.png";
import paidSakerhet1BarnVagScenario from "../assets/paid-sakerhet1-barn-vag-scenario.png";
import paidSakerhet1BussHallplatsScenario from "../assets/paid-sakerhet1-buss-hallplats-scenario.png";
import paidSakerhet1BilbalteAbcdScenario from "../assets/paid-sakerhet1-bilbalte-abcd-scenario.png";
import paidSakerhet1RollatorScenario from "../assets/paid-sakerhet1-rollator-scenario.png";
import paidSakerhet1BarnKorsningScenario from "../assets/paid-sakerhet1-barn-korsning-scenario.png";
import paidSakerhet1PsykosDefinitionScenario from "../assets/paid-sakerhet1-psykos-definition-scenario.png";
import paidSakerhet2RullstolTrappaScenario from "../assets/paid-sakerhet2-rullstol-trappa-scenario.png";
import paidSakerhet2BarnsakerhetslasScenario from "../assets/paid-sakerhet2-barnsakerhetslas-scenario.png";
import paidSakerhet2FobiTextScenario from "../assets/paid-sakerhet2-fobi-text-scenario.png";
import paidSakerhet2SvangHogerGangandeScenario from "../assets/paid-sakerhet2-svang-hoger-gangande-scenario.png";
import paidSakerhet3BromsvatskaVarningScenario from "../assets/paid-sakerhet3-bromsvatska-varning-scenario.png";
import paidSakerhet3MotortemperaturVarningScenario from "../assets/paid-sakerhet3-motortemperatur-varning-scenario.png";
import paidSakerhet3BilbalteAbcdScenario from "../assets/paid-sakerhet3-bilbalte-abcd-scenario.png";
import paidSakerhet3SkogsvagViltScenario from "../assets/paid-sakerhet3-skogsvag-vilt-scenario.png";
import paidSakerhet3HjartsymbolHalsbandScenario from "../assets/paid-sakerhet3-hjartsymbol-halsband-scenario.png";
import paidSakerhet3NeurologisktMarkeAbcdScenario from "../assets/paid-sakerhet3-neurologiskt-marke-abcd-scenario.png";
import paidSakerhet3TakboxScenario from "../assets/paid-sakerhet3-takbox-scenario.png";
import paidSakerhet3EpilepsiMarkeScenario from "../assets/paid-sakerhet3-epilepsi-marke-scenario.png";
import paidLagstiftning1GulHelragenLinjeScenario from "../assets/paid-lagstiftning1-gul-helragen-linje-scenario.png";
import paidLagstiftning1BussLamnaHallplatsAbScenario from "../assets/paid-lagstiftning1-buss-lamna-hallplats-ab-scenario.png";
import paidLagstiftning1PolisTeckenScenario from "../assets/paid-lagstiftning1-polis-tecken-scenario.png";
import paidLagstiftning1MotorvagSkyltScenario from "../assets/paid-lagstiftning1-motorvag-skylt-scenario.png";
import paidLagstiftning1BussfaltTiderScenario from "../assets/paid-lagstiftning1-bussfalt-tider-scenario.png";
import paidLagstiftning1ForbudMotorfordonTidsintervallScenario from "../assets/paid-lagstiftning1-forbud-motorfordon-tidsintervall-scenario.png";
import paidLagstiftning1StoppSignalUrFunktionScenario from "../assets/paid-lagstiftning1-stopp-signal-ur-funktion-scenario.png";
import paidLagstiftning1ParkeringAbcdScenario from "../assets/paid-lagstiftning1-parkering-abcd-scenario.png";
import paidLagstiftning1VajningspliktVanstersvangAbScenario from "../assets/paid-lagstiftning1-vajningsplikt-vanstersvang-ab-scenario.png";
import paidLagstiftning1GangfartsomradeScenario from "../assets/paid-lagstiftning1-gangfartsomrade-scenario.png";
import paidLagstiftning1TaxikvittoUppgifterScenario from "../assets/paid-lagstiftning1-taxikvitto-uppgifter-scenario.png";
import paidLagstiftning1FelparkeringAbScenario from "../assets/paid-lagstiftning1-felparkering-ab-scenario.png";
import paidLagstiftning1VilotidTidbokScenario from "../assets/paid-lagstiftning1-vilotid-tidbok-scenario.png";
import paidLagstiftning1DokumentTaxitrafikScenario from "../assets/paid-lagstiftning1-dokument-taxitrafik-scenario.png";
import paidLagstiftning1MaxKortidVilotidScenario from "../assets/paid-lagstiftning1-max-kortid-vilotid-scenario.png";
import paidLagstiftning1PrisinformationTaxibilScenario from "../assets/paid-lagstiftning1-prisinformation-taxibil-scenario.png";
import paidLagstiftning1BelysningSamtidigtScenario from "../assets/paid-lagstiftning1-belysning-samtidigt-scenario.png";
import paidLagstiftning1VarningsmarkeKorsningScenario from "../assets/paid-lagstiftning1-varningsmarke-korsning-scenario.png";
import paidLagstiftning1TaxiforarlegitimationPafoljdScenario from "../assets/paid-lagstiftning1-taxiforarlegitimation-pafoljd-scenario.png";
import paidLagstiftning1BaksidaVagmarkenStoppliktScenario from "../assets/paid-lagstiftning1-baksida-vagmarken-stopplikt-scenario.png";
import paidLagstiftning1TappatTaxiforarlegitimationScenario from "../assets/paid-lagstiftning1-tappat-taxiforarlegitimation-scenario.png";
import paidLagstiftning1FelskrivenTidbokScenario from "../assets/paid-lagstiftning1-felskriven-tidbok-scenario.png";
import paidLagstiftning1StopplinjeKorsningScenario from "../assets/paid-lagstiftning1-stopplinje-korsning-scenario.png";
import paidLagstiftning1ViloperiodLangkorningScenario from "../assets/paid-lagstiftning1-viloperiod-langkorning-scenario.png";
import paidLagstiftning1SvangaHogerGangareScenario from "../assets/paid-lagstiftning1-svanga-hoger-gangare-scenario.png";
import paidLagstiftning1Dygnsvila24TimmarScenario from "../assets/paid-lagstiftning1-dygnsvila-24-timmar-scenario.png";
import paidLagstiftning1SkolskjutsskyltTandScenario from "../assets/paid-lagstiftning1-skolskjutsskylt-tand-scenario.png";
import paidLagstiftning1BlinklyktorSkolskjutsScenario from "../assets/paid-lagstiftning1-blinklyktor-skolskjuts-scenario.png";
import paidLagstiftning1KorsningVagmarkeScenario from "../assets/paid-lagstiftning1-korsning-vagmarke-scenario.png";
import paidLagstiftning1ForvaraTaxiforarlegitimationScenario from "../assets/paid-lagstiftning1-forvara-taxiforarlegitimation-scenario.png";
import paidLagstiftning1SammanfletningVagmarkeScenario from "../assets/paid-lagstiftning1-sammanfletning-vagmarke-scenario.png";
import paidLagstiftning1KvittoFoljesedelTaxameterScenario from "../assets/paid-lagstiftning1-kvitto-foljesedel-taxameter-scenario.png";
import paidLagstiftning1DorrarSkolskjutsScenario from "../assets/paid-lagstiftning1-dorrar-skolskjuts-scenario.png";
import paidLagstiftning1TaxameterBesiktningScenario from "../assets/paid-lagstiftning1-taxameter-besiktning-scenario.png";
import paidLagstiftning1FornyaTaxiforarlegitimationScenario from "../assets/paid-lagstiftning1-fornya-taxiforarlegitimation-scenario.png";
import paidLagstiftning1KoraOmLastbilMotandeScenario from "../assets/paid-lagstiftning1-kora-om-lastbil-motande-scenario.png";
import paidLagstiftning1PrisinformationTaxibil2Scenario from "../assets/paid-lagstiftning1-prisinformation-taxibil-2-scenario.png";
import paidLagstiftning2FotgangareOvergangsstalleScenario from "../assets/paid-lagstiftning2-fotgangare-overgangsstalle-scenario.png";
import paidLagstiftning2Q11UserScenario from "../assets/paid-lagstiftning2-q11-user-scenario.png";
import paidLagstiftning2Q12UserScenario from "../assets/paid-lagstiftning2-q12-user-scenario.png";
import paidLagstiftning2Q13UserScenario from "../assets/paid-lagstiftning2-q13-user-scenario.png";
import paidLagstiftning2Q14UserQuestion from "../assets/paid-lagstiftning2-q14-user-question.png";
import paidLagstiftning2Q15UserQuestion from "../assets/paid-lagstiftning2-q15-user-question.png";
import paidLagstiftning2Q15UserSupplement from "../assets/paid-lagstiftning2-q15-user-supplement.png";
import paidLagstiftning2Q18UserQuestion from "../assets/paid-lagstiftning2-q18-user-question.png";
import paidLagstiftning2Q18UserSupplement from "../assets/paid-lagstiftning2-q18-user-supplement.png";
import paidLagstiftning2Q19UserQuestion from "../assets/paid-lagstiftning2-q19-user-question.png";
import paidLagstiftning2Q19UserSupplement from "../assets/paid-lagstiftning2-q19-user-supplement.png";
import paidLagstiftning2Q20UserQuestion from "../assets/paid-lagstiftning2-q20-user-question.png";
import paidLagstiftning2Q20UserSupplement from "../assets/paid-lagstiftning2-q20-user-supplement.png";
import paidLagstiftning2Q21UserQuestion from "../assets/paid-lagstiftning2-q21-user-question.png";
import paidLagstiftning2Q21UserSupplement from "../assets/paid-lagstiftning2-q21-user-supplement.png";
import paidLagstiftning2Q23UserQuestion from "../assets/paid-lagstiftning2-q23-user-question.png";
import paidLagstiftning2Q23UserSupplement from "../assets/paid-lagstiftning2-q23-user-supplement.png";
import paidLagstiftning2Q24UserQuestion from "../assets/paid-lagstiftning2-q24-user-question.png";
import paidLagstiftning2Q24UserSupplement from "../assets/paid-lagstiftning2-q24-user-supplement.png";
import paidLagstiftning2Q25UserSupplement from "../assets/paid-lagstiftning2-q25-user-supplement.png";
import paidLagstiftning2Q26UserSupplement from "../assets/paid-lagstiftning2-q26-user-supplement.png";
import paidLagstiftning2Q27UserSupplement from "../assets/paid-lagstiftning2-q27-user-supplement.png";
import paidLagstiftning2Q28UserSupplement from "../assets/paid-lagstiftning2-q28-user-supplement.png";
import paidLagstiftning2Q31UserSupplement from "../assets/paid-lagstiftning2-q31-user-supplement.png";
import paidLagstiftning2Q32UserSupplement from "../assets/paid-lagstiftning2-q32-user-supplement.png";
import paidLagstiftning2Q35UserSupplement from "../assets/paid-lagstiftning2-q35-user-supplement.png";
import paidLagstiftning2Q36UserSupplement from "../assets/paid-lagstiftning2-q36-user-supplement.png";
import paidLagstiftning2Q37UserSupplement from "../assets/paid-lagstiftning2-q37-user-supplement.png";
import paidLagstiftning2Q39UserSupplement from "../assets/paid-lagstiftning2-q39-user-supplement.png";
import paidLagstiftning2Q40UserSupplement from "../assets/paid-lagstiftning2-q40-user-supplement.png";
import paidLagstiftning2Q41UserSupplement from "../assets/paid-lagstiftning2-q41-user-supplement.png";
import paidLagstiftning2Q42UserSupplement from "../assets/paid-lagstiftning2-q42-user-supplement.png";
import paidLagstiftning2Q43UserSupplement from "../assets/paid-lagstiftning2-q43-user-supplement.png";
import paidLagstiftning2Q44UserSupplement from "../assets/paid-lagstiftning2-q44-user-supplement.png";
import paidLagstiftning2Q45UserSupplement from "../assets/paid-lagstiftning2-q45-user-supplement.png";
import paidLagstiftning2Q46UserSupplement from "../assets/paid-lagstiftning2-q46-user-supplement.png";
import paidLagstiftning3TaxibilarnaStannatRattAbScenario from "../assets/paid-lagstiftning3-taxibilarna-stannat-ratt-ab-scenario.png";
import paidLagstiftning370KmhMotandeScenario from "../assets/paid-lagstiftning3-70kmh-motande-scenario.png";
import paidLagstiftning3KorsningCyklistScenario from "../assets/paid-lagstiftning3-korsning-cyklist-scenario.png";
import paidLagstiftning3VagmarkeAbStannaScenario from "../assets/paid-lagstiftning3-vagmarke-a-b-stanna-scenario.png";
import paidLagstiftning3SituationerStannaAbcdScenario from "../assets/paid-lagstiftning3-situationer-stanna-abcd-scenario.png";
import paidLagstiftning3MotorvagSkyltHastighetScenario from "../assets/paid-lagstiftning3-motorvag-skylt-hastighet-scenario.png";
import paidLagstiftning3TidboksbladViloperiodAug30Scenario from "../assets/paid-lagstiftning3-tidboksblad-viloperiod-aug30-scenario.png";
import paidLagstiftning3TidboksbladVilotidSept24Scenario from "../assets/paid-lagstiftning3-tidboksblad-vilotid-sept24-scenario.png";
import paidLagstiftning3StoppljusKorsningScenario from "../assets/paid-lagstiftning3-stoppljus-korsning-scenario.png";
import paidLagstiftning3SvangaHogerTrafiksignalScenario from "../assets/paid-lagstiftning3-svanga-hoger-trafiksignal-scenario.png";
import paidLagstiftning3BilSlapeBeScenario from "../assets/paid-lagstiftning3-bil-slape-be-scenario.png";
import paidLagstiftning3GenomfartE4VagmarkeScenario from "../assets/paid-lagstiftning3-genomfart-e4-vagmarke-scenario.png";
import paidLagstiftning3GulaVagmarkeringarScenario from "../assets/paid-lagstiftning3-gula-vagmarkeringar-scenario.png";
import paidLagstiftning3TaxiParkeradBilScenario from "../assets/paid-lagstiftning3-taxi-parkerad-bil-scenario.png";
import paidLagstiftning3TaxiStannaVantaAbScenario from "../assets/paid-lagstiftning3-taxi-stanna-vanta-ab-scenario.png";
import paidLagstiftning3VarningsmarkeHuvudledKorsningAbcScenario from "../assets/paid-lagstiftning3-varningsmarke-huvudled-korsning-abc-scenario.png";
import paidLagstiftning3GataFardtjanstHotellScenario from "../assets/paid-lagstiftning3-gata-fardtjanst-hotell-scenario.png";
import paidLagstiftning3OvergangsstalleTillaggstavlaScenario from "../assets/paid-lagstiftning3-overgangsstalle-tillaggstavla-scenario.png";
import paidLagstiftning3KorsningAbVajningspliktHogerScenario from "../assets/paid-lagstiftning3-korsning-ab-vajningsplikt-hoger-scenario.png";
import paidLagstiftning3ForbudParkeringTiderScenario from "../assets/paid-lagstiftning3-forbud-parkering-tider-scenario.png";
import paidLagstiftning3VagfarjaKoScenario from "../assets/paid-lagstiftning3-vagfarja-ko-scenario.png";
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

/** Betald Säkerhet 2 — Svar A=0 … D=3. */
const paidSakerhet2Questions: Question[] = [
  {
    id: "paid-sakerhet-2-q1",
    text: "Hur påverkas i allmänhet en förare som använder mobiltelefon under körning?",
    options: [
      "En förare som har stor körvana blir inte påverkad",
      "Om föraren använder handsfree-utrustning påverkas inte körningen",
      "Föraren får en förlängd stoppsträcka när han eller hon bromsar",
      "Förarens körförmåga påverkas inte vid körning på motorväg",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-2-q2",
    text: "Vilken fördel har en bältestol jämfört med en bälteskudde som skyddsutrustning för barn?",
    options: [
      "Den har ett särskilt bilbälte inbyggt i stolen",
      "Den hindrar att barnet glider i sidled",
      "Den är lättare att förvara i en taxibil",
      "Den monteras alltid bakåtvänd",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-2-q3",
    text: "Du kör taxi och upptäcker att bilen drar snett. Vad kan orsaken vara?",
    options: [
      "Drivremmen till styrservopumpen har gått av",
      "Det har släppt en balansvikt från ett framhjul",
      "Vätskenivån i styrservon är för låg",
      "Punktering på ett framdäck eller för lågt lufttryck i ett av framdäcken",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-2-q4",
    text: "Du har fått punktering och monterar ett nödhjul. Vilket alternativ är riktigt?",
    options: [
      "Det finns särskilda begränsningar för hur fort man får köra med nödhjulet",
      "Nödhjulet får endast användas på sommarväglag",
      "Bilen får endast bogseras till närmaste gummiverkstad",
      "Bilen får endast köras utan passagerare",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-2-q5",
    text: "Du har kopplat en tvåaxlig lätt släpvagn till din bil och ska köra i halt väglag en dag i mars. Din bil har en totalvikt av 1800 kg och är utrustad med dubbdäck. Måste du ha dubbdäck även på släpvagnen?",
    options: [
      "Ja, men det räcker att främre axeln har dubbdäck",
      "Ja, men det räcker att bakre axeln har dubbdäck",
      "Ja, bägge axlarna måste ha dubbdäck",
      "Ja, men bara ett hjul per axel måste ha dubbdäck",
      "Nej",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-2-q6",
    text: "Vilken av dessa sjukdomar räknas till de psykotiska sjukdomarna?",
    options: ["Schizofreni", "Neuros", "Fobi", "Demens"],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-2-q7",
    text: "Vilket påstående är riktigt om lufttrycket i däcken på en bil?",
    options: [
      "För högt lufttryck innebär att bränsleförbrukningen ökar",
      "Lufttrycket har ingen betydelse för bränsleförbrukningen",
      "För lågt lufttryck innebär att bränsleförbrukningen ökar",
      "För lågt lufttryck innebär att däckslitaget minskar",
      "Lufttrycket har ingen betydelse för däckslitaget",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-2-q8",
    text: "Vilket av följande däck kan användas i trafik utan fara?",
    options: [
      "Ett varmt däck med ett lufttryck som är något högre än rekommenderat",
      "Ett varmt däck med ett lufttryck som är mycket lägre än rekommenderat",
      "Ett rotationsbundet däck som monterats fel",
      "Ett däck som har för låg dimension i förhållande till belastningen",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-2-q9",
    text: "Du kör en vuxen kund som plötsligt får det tungt att andas. Det hörs att andningen är försvårad. Vilken är den troligaste orsaken?",
    options: [
      "Kunden har fått ett astmanfall",
      "Kunden har drabbats av afasi",
      "Kunden har fått en stroke",
      "Kunden har drabbats av falsk krupp",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-2-q10",
    text: "Hur bör du inte göra, när du lyfter?",
    options: [
      "Lyfta nära kroppen",
      "Lyfta med böjda knän",
      "Fördela bördan jämt mellan händerna",
      "Lyfta enbart med ryggen",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-2-q11",
    text: "Vilket påstående om bilens bromsvätska är riktigt?",
    options: [
      "Den ska bytas regelbundet för att parkeringsbromsen ska fungera",
      "Den behöver inte bytas utan enbart fyllas på",
      "Den ska bytas regelbundet för att kokpunkten inte ska sänkas",
      "Den ska inte bytas eftersom systemet är slutet",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-2-q12",
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
    id: "paid-sakerhet-2-q13",
    text: "Vilken ordningsföljd är rätt beträffande åtgärder vid trafikolycka?",
    options: [
      "1. Varna andra trafikanter 2. Ringa SOS-alarm 112 3. Ge första hjälpen 4. Överblicka olycksplatsen",
      "1. Överblicka olycksplatsen 2. Varna andra trafikanter 3. Ge första hjälpen 4. Ringa SOS-alarm 112",
      "1. Ge första hjälpen 2. Överblicka olycksplatsen 3. Ringa SOS-alarm 112 4. Varna andra trafikanter",
      "1. Ringa SOS-alarm 112 2. Varna andra trafikanter 3. Överblicka olycksplatsen 4. Ge första hjälpen",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-2-q14",
    text: "Vilket påstående är riktigt om katalysatorn i en bensindriven bil?",
    options: [
      "80 % av alla föroreningar i avgaserna tas bort",
      "Den kan lätt överhettas om motorns varvtal är felinställt",
      "Det har ingen betydelse för avgasreningen om katalysatorn är varm eller kall",
      "Den höga arbetstemperaturen gör att den kan få lättantändliga föremål att börja brinna",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-2-q15",
    text: "Vilket påstående är riktigt om kravet på användning av bilbälte för taxiförare vid godstransport?",
    options: [
      "Det finns inget krav om transporten sker med lätt lastbil",
      "Det finns inget krav om transporten sker med minibuss",
      "Det finns inget undantag från bälteskravet vid godstransport",
      "Det finns krav men enbart om transporten sker med personbil",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-2-q16",
    text: "Du har fått fel på din taxi och tvingas stanna på en landsväg strax före ett backkrön, där högsta tillåtna hastighet är 70 km/h. Måste du sätta ut en varningstriangel?",
    options: [
      "Ja, men endast om vägen saknar vägren",
      "Ja, men endast om väderleksförhållandena är dåliga",
      "Ja, alltid",
      "Nej, det behövs inte på landsväg",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-2-q17",
    text: "Du tar medicin som kan vara trafikfarlig, varför bör du då inte köra bil?",
    options: [
      "Enbart för att den kan påverka uppmärksamheten",
      "Det är förbjudet",
      "Enbart för att den kan påverka omdömet",
      "Medicinen kan göra att du fungerar sämre som förare",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-2-q18",
    text: "Du har använt taxin till att köra din hund till veterinären. Kan det påverka nästa kund?",
    options: [
      "Ja, kunden kan få svåra allergiska besvär",
      "Nej, inte om du har kört en så kallad allergivänlig hund",
      "Nej, inte om du dammsuger bilen före nästa kund",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-2-q19",
    text: "Du ska ensam hjälpa en rullstolsburen passagerare uppför en trappa. Vilken av bilderna beskriver rätt teknik?",
    questionImage: paidSakerhet2RullstolTrappaScenario,
    options: ["Bild A", "Bild B", "Bild C", "Bild D"],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-2-q20",
    text: "Vilken hastighet kan en bil högst ha om de flesta oskyddade trafikanter ska kunna överleva om de blir påkörda?",
    options: ["20 km/h", "30 km/h", "40 km/h", "50 km/h"],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-2-q21",
    text: "Barn som är 120 cm, var sitter han säkrast?",
    options: [
      "I baksätet",
      "I framsätet",
      "Han sitter lika säkert i både fram- och baksätet",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-2-q22",
    text: "När ska du använda dig av Heimlich manöver?",
    options: [
      "När en person är chockad",
      "När en person har något fast i halsen",
      "När ett barn lider av falsk krupp",
      "När en person drabbats av ångest",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-2-q23",
    text: "En avsvimmad person, vad bör du göra i första hand?",
    options: [
      "Kontrollera andningen",
      "Larma ambulans",
      "Placera honom i stabilt sidoläge (framstupa sidoläge)",
      "Ge konstgjord andning",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-2-q24",
    text: "Hur många år bör ett barn minst vara för att du ska låta det sitta i en bältesstol eller på en bälteskudde i stället för i en bakåtvänd bilbarnstol?",
    options: ["Ca 1 år", "Ca 2 år", "Ca 4 år", "Ca 5 år"],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-2-q25",
    text: "Du får ett uppdrag där du ska köra en synskadad person. Hur bör du bemöta kunden?",
    options: [
      "Du öppnar dörren och ber kunden stiga in",
      "Du gör inget, utan låter kunden känna sig fram",
      "Du frågar om du kan vara till hjälp",
      "Du tar kunden i armen och leder kunden in i bilen",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-2-q26",
    text: "Du tar en rökpaus utanför din taxi. Kan det påverka din nästa kunds hälsa?",
    options: [
      "Ja, kunden kan få allergiska besvär",
      "Ja, kunden kan få ett epileptiskt anfall",
      "Nej, passiv rökning är inte hälsofarligt",
      "Nej, om röken inte har blåst in i bilen",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-2-q27",
    text: "Vilken är den viktigaste anledningen till att du inte använder mobiltelefonen när du kör taxi?",
    options: [
      "Strålning från mobiltelefonen kan störa bilens elektronik",
      "Du blir mindre uppmärksam på övrig trafik",
      "Du ökar hastigheten omedvetet",
      "Du stör kunden",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-2-q28",
    text: "Du har en bil som är registrerad 2006 och ska byta däck på den. Du funderar på att byta till en annan däckdimension. Får du välja vilken dimension du vill?",
    options: [
      "Ja, men enbart om däcken uppfyller belastningskraven",
      "Ja, men enbart om däcken är typgodkända",
      "Ja, om däcken är typgodkända och uppfyller belastningskraven",
      "Nej",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-2-q29",
    text: "Bilden visar reglaget för barnsäkerhetslåset på bilens ena bakdörr. Hur fungerar låset när det är aktiverat?",
    questionImage: paidSakerhet2BarnsakerhetslasScenario,
    options: [
      "Bakdörren kan endast öppnas inifrån",
      "Bakdörren kan endast öppnas med hjälp av bilens fjärrkontroll",
      "Bakdörren kan endast öppnas utifrån",
      "Bakdörren kan endast öppnas till hälften",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-2-q30",
    text: "En förare som talar i mobiltelefonen har ofta sämre reaktionsförmåga än vanligt. Normal reaktionstid är ca 1 sekund. Hur lång blir reaktionssträckan i 70 km/h om det i stället tar 2 sekunder att reagera?",
    options: ["Ca 25 m", "Ca 39 m", "Ca 50 m", "Ca 62 m", "Ca 90 m"],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-2-q31",
    text: "Vilken sjukdom beskrivs i texten på bilden?",
    questionImage: paidSakerhet2FobiTextScenario,
    options: ["Fobi", "Apati", "Psykos", "Allergi", "Afasi"],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-2-q32",
    text: "Du har en körning med en person som har diabetes. Under körningen blir personen blek, kallsvettig och irriterad. Vad bör du göra i första hand?",
    options: [
      "Se till att personen får i sig sitt insulin",
      "Försöka få personen att äta något sött",
      "Köra personen direkt till sjukhus",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-2-q33",
    text: "Du ska köra en långresa som startar kl. 22.00 och slutar kl. 03.00. Under vilken del av resan är risken störst att du råkar ut för en olycka på grund av trötthet?",
    options: [
      "Under resans sista timme",
      "Under resans första timme",
      "Efter ungefär halva resetiden",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-2-q34",
    text: "Vilken är den enskilt effektivaste utrustningen i en bil för att skydda passagerare från skador vid en frontalkrock?",
    options: [
      "Krockkuddar",
      "Bilbälte",
      "Nackskydd",
      "Antisladdsystem",
      "Låsningsfria bromsar",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-2-q35",
    text: "Vid vilken ålder brukar barn normalt börja bete sig trafiksäkert?",
    options: ["7 år", "9 år", "12 år", "14 år"],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-2-q36",
    text: "Du ska frakta en cykel med din bil. Du har inte plats med cykeln i bilen. Var bör du helst placera cykeln med tanke på miljön och bränsleförbrukningen?",
    options: [
      "Den bör ligga på takräcket",
      "Den bör hänga på en cykelhållare bak på bilen",
      "Den bör stå på en särskild cykelhållare på taket",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-2-q37",
    text: "Du kör en person som plötsligt får molande värk från bröstet ut mot armarna. Vilken är den troligaste orsaken?",
    options: [
      "Personen har något fast i halsen",
      "Personen har fått en hjärtinfarkt",
      "Personen har fått ett epileptiskt anfall",
      "Personen har fått astma",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-2-q38",
    text: "Du ska lyfta tungt gods. Vilken lyftteknik bör du använda?",
    options: [
      "Du lyfter med rak rygg och godset långt ifrån dig",
      "Du lyfter med böjd rygg och godset långt ifrån dig",
      "Du lyfter med rak rygg och godset nära dig",
      "Du lyfter med böjd rygg och godset nära dig",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-2-q39",
    text: "Du ska svänga till höger i situationen på bilden. Hur ska du göra?",
    questionImage: paidSakerhet2SvangHogerGangandeScenario,
    options: [
      "Du måste lämna företräde åt de gående",
      "Du måste inte lämna företräde åt de gående, men bör ändå göra det",
      "Du ska köra med låg hastighet och vara beredd på att de gående kan gå ut i gatan, trots att de har rött ljus",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-2-q40",
    text: "Varför har barn svårt att bete sig trafiksäkert?",
    options: [
      "För att de är korta och impulsiva och inte har fullt utvecklad syn",
      "För att de är korta och inte har fullt utvecklad hörsel och syn",
      "För att de är impulsiva och inte har fullt utvecklad hörsel",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-2-q41",
    text: "Hur bör du uppträda om en kund börjar bete sig argt eller hotfullt?",
    options: [
      "Du höjer rösten så att kunden förstår att hen beter sig illa",
      "Du tittar åt ett annat håll och låtsas inte höra",
      "Du är lugn och saklig",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-2-q42",
    text: "Du kommer fram till en olycksplats och hjälper en man som ser blek och kallsvettig ut. Bör du ge honom något att dricka?",
    options: [
      "Nej",
      "Ja, men bara om han klagar på att han är törstig",
      "Ja, men bara om han fryser",
      "Ja, gärna något varmt för att lugna honom",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-2-q43",
    text: "Vad kan bli följden av att placera tung last baktill i bilen?",
    options: [
      "Ytterkanterna på framdäcken slits hårdare",
      "Bilens köregenskaper förändras",
      "Bromssträckan blir kortare",
      "Hjulinställningen förändras",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-2-q44",
    text: "Hur bör du placera tung last i en personbils bagageutrymme?",
    options: ["Långt fram och lågt", "Långt bak och lågt", "Långt bak och högt", "Långt fram och högt"],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-2-q45",
    text: "Det är höst och du funderar på att börja använda motorvärmaren. Vid vilken högsta utetemperatur lönar det sig ur bränslebesparande synpunkt att använda motorvärmare?",
    options: [
      "Vid ca −10 °C",
      "Vid ca 0 °C",
      "Vid ca +10 °C",
      "Vid ca +18 °C",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-2-q46",
    text: "Din kund är gravt hörselskadad. Hur bör du göra för att kunden ska ha så stor chans som möjligt att uppfatta vad du säger?",
    options: [
      "Du talar så nära kundens öra eller hörapparat som möjligt",
      "Du talar så högt du kan",
      "Du talar så långsamt du kan",
      "Du söker ögonkontakt så att dina munrörelser syns",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-2-q47",
    text: "Vätskenivån i bilbatteriet är för låg. Vilken vätska ska du fylla på med?",
    options: ["Svavelsyra", "Destillerat vatten", "Saltsyra", "Frostskyddsmedel"],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-2-q48",
    text: "Sömnen har stor betydelse för fordonsförare. Vad är riktigt beträffande sömnstörningar och nattarbete?",
    options: [
      "Problemen ökar oavsett kön efter 45 års ålder",
      "Problemen ökar vanligast för kvinnor över 45 års ålder",
      "Problemen ökar vanligast för män över 45 års ålder",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-2-q49",
    text: "Hur kan du som förare bäst bidra till att nollvisionens mål uppnås?",
    options: [
      "Du använder bra däck",
      "Du kör en bil utrustad med ABS-bromsar",
      "Du tar ansvar och kör med goda marginaler",
      "Du håller alltid angiven hastighet",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-2-q50",
    text: "Vad är den troligaste följden av ett igensatt luftfilter till motorn?",
    options: [
      "Bränsleförbrukningen blir högre",
      "Luften till motorn komprimeras",
      "Luften i kupén blir sämre",
      "Bränsleblandningen blir för mager",
    ],
    correctIndex: 0,
  },
];

/** Betald Säkerhet 3 — Svar A=0 … D=3, vid fem alternativ E=4. */
const paidSakerhet3Questions: Question[] = [
  {
    id: "paid-sakerhet-3-q1",
    text: "På vilket sätt bör du i första hand hjälpa en person som är omtöcknad på grund av diabetes?",
    options: [
      "Placera i stabilt sidoläge",
      "Utför Heimlich manöver",
      "Se till att personen genast blir förd till sjukhus",
      "Ge något sött att äta",
      "Lossa kläderna kring halsen",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-3-q2",
    text: "Din kund är synskadad och har med sig sin ledarhund som har vit sele. Vad bör du göra först?",
    options: [
      "Tala om att hundar inte får följa med i taxibilar",
      "Sätt dig ner bredvid hunden för att bekanta dig med den",
      "Fråga kunden hur du ska uppträda mot hunden",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-3-q3",
    text: "Varningssymbolen tänds när du kör. När du kontrollerar behållaren för bromsvätska ser du att nivån är under minimum. Vad ska du göra?",
    questionImage: paidSakerhet3BromsvatskaVarningScenario,
    options: [
      "Du bogserar bilen till närmaste verkstad",
      "Du ser till att bilen bärgas till en verkstad",
      "Du kör försiktigt till närmaste bensinstation",
      "Du kör bilen till närmaste verkstad",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-3-q4",
    text: "Vad kan du göra för att minska fordonets bränsleförbrukning?",
    options: [
      "Undvika att använda den elektriska motorvärmaren vid temperaturer över +15 °C",
      "Utföra regelbunden service",
      "Alltid använda konstantfarthållaren",
      "Värma upp motorn på tomgång",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-3-q5",
    text: "Du kör en kund som plötsligt faller ihop och får kramper. Vilken är den troligaste orsaken?",
    options: [
      "Kunden har fått ett epileptiskt anfall",
      "Kunden är berusad",
      "Kunden har fått insulinkänning",
      "Kunden har drabbats av en stroke",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-3-q6",
    text: "Vad varnar kontrollampan på bilden för?",
    questionImage: paidSakerhet3MotortemperaturVarningScenario,
    options: [
      "Låg bromsvätskenivå",
      "Låg oljetryck",
      "Låg spolarvätskenivå",
      "Hög motortemperatur",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-3-q7",
    text: "På din taxibil är däcken märkta med M+S. Vad betyder denna märkning?",
    options: [
      "De är anpassade till körning med medelstor belastning",
      "De är anpassade speciellt för taxikörning",
      "De är anpassade till körning på vinterväglag",
      "De är anpassade till körning på sommarväglag",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-3-q8",
    text: "Av vilken anledning bör bromsvätskan bytas ut med några års mellanrum?",
    options: [
      "Den drar till sig vatten",
      "Den drar till sig luft",
      "Den blir trögflytande",
      "Den drar till sig smuts",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-3-q9",
    text: "Du kommer fram till en olycksplats och hittar en kvinna som klagar på att hon fryser. Hon ser blek och kallsvettig ut. Hur bör du göra?",
    options: [
      "Se till att hon går omkring för att hålla sig varm",
      "Se till att hon lägger sig ned med benen höjda och att du lägger en filt om henne",
      "Be henne att sätta sig och ge henne något varmt att dricka",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-3-q10",
    text: "Hur bör du göra för att minska de negativa effekterna på miljön vid kallstart?",
    options: [
      "Du börjar köra direkt men undviker att belasta motorn hårt",
      "Du låter motorn gå på tomgång i minst en minut innan du börjar köra",
      "Du låter motorn gå med förhöjt varvtal i minst en minut innan du börjar köra",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-3-q11",
    text: "På vilken av bilderna används bilbältet bäst för att skydda vid en trafikolycka?",
    questionImage: paidSakerhet3BilbalteAbcdScenario,
    options: ["Bild A", "Bild B", "Bild C", "Bild D"],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-3-q12",
    text: "Du ser i backspegeln att du kommer att bli påkörd bakifrån. Vad kan du göra för att skydda nacken mot skador?",
    options: [
      "Böja huvudet framåt och undvika att vrida huvudet",
      "Bromsa hårt",
      "Luta kroppen så långt framåt som möjligt och hålla hårt i ratten",
      "Pressa huvudet bakåt mot nackskyddet och undvika att vrida huvudet",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-3-q13",
    text: "Vad bör i första hand avgöra hur fort du kör i den här situationen?",
    questionImage: paidSakerhet3SkogsvagViltScenario,
    options: [
      "Hastighetsbegränsningen på vägen",
      "Risken för att bli bländad av solen",
      "Risken för vilt",
      "Bilens skick och last",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-3-q14",
    text: "Den 1 februari ska du koppla en släpvagn till din taxibil. Det är vinterväglag och bilen är utrustad med dubbdäck. Vilka däck får du använda på släpet?",
    options: [
      "Antingen vinterdäck eller dubbdäck",
      "Enbart vinterdäck",
      "Enbart dubbdäck",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-3-q15",
    text: "Vilken grupp av förare har oftare svårt att hinna med att överblicka trafiken i korsningar?",
    options: [
      "Män 18–24 år",
      "Kvinnor 18–24 år",
      "Förare över 65 år",
      "Förare 35–50 år",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-3-q16",
    text: "Vilken är den viktigaste anledningen till att man har sänkt hastighetsbegränsningen från 50 km/h till 30 km/h i vissa tätorter?",
    options: [
      "Att bullernivån ska bli lägre för de boende",
      "Att antalet svåra olyckor ska minska",
      "Att koldioxidutsläppen ska minska",
      "Att kolmonoxidutsläppen ska minska",
      "Att slitaget på vägbanan ska minska",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-3-q17",
    text: "När ska du byta ut bilbarnstolen mot till exempel en bilbälteskudde?",
    options: [
      "När barnet kan sitta utan stöd",
      "När barnet väger 15 kg",
      "När barnet fyllt 3 år",
      "När barnets huvud är i höjd med bilbarnstolens överkant",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-3-q18",
    text: "Din taxibil har krockkudde både på förarplatsen och passagerarplatsen fram. Vilket alternativ är rätt?",
    options: [
      "En bilbarnstol i framsätet måste vara framåtvänd",
      "Du ska sitta så nära krockkudden som möjligt",
      "Personer som är kortare än 135 cm ska sitta i baksätet",
      "Krockkudden kan i vissa fall ersätta bilbältet",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-3-q19",
    text: "Vid vilket av följande tillfällen ska taxametern besiktas när du har bytt däck?",
    options: [
      "När spårvidden ändras med mer än 5 %",
      "När bromssträckans längd påverkas med mer än 5 %",
      "När mätningen av vägsträckan ändras med mer än 5 %",
      "När du har bytt från odubbade vinterdäck till dubbdäck",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-3-q20",
    text: "Du har bytt däck på bilen. Vad ska du göra med de utslitna däcken?",
    options: [
      "Lämna dem till däckförsäljaren för återvinning",
      "Slänga dem bland de brännbara soporna",
      "Slänga dem bland grovsoporna",
      "Du måste själv lämna dem till en miljöstation",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-3-q21",
    text: "Din kund behöver rollator när han går och ska ha med rollatorn på resan. Hur gör du?",
    options: [
      "Du erbjuder kunden hjälp in i bilen och tar sedan hand om rollatorn",
      "Du tar hand om rollatorn och ber kunden sätta sig i bilen",
      "Du lägger in rollatorn i bagageutrymmet och hjälper sedan kunden in i bilen",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-3-q22",
    text: "Du kör en person som plötsligt får väldiga smärtor i armar och rygg. Personen bär denna symbol runt halsen. Vad bör du omedelbart göra?",
    questionImage: paidSakerhet3HjartsymbolHalsbandScenario,
    options: [
      "Se till att personen sitter med stöd för armarna",
      "Ge personen andningshjälp med mun-mot-mun-metoden",
      "Lossa kläderna runt halsen",
      "Larma 112",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-3-q23",
    text: "Du har en kund som får ett astmaanfall med hosta och andningssvårigheter. Vilken hjälp bör du ge först?",
    options: [
      "Tala lugnande och försöka få kundens uppmärksamhet riktad mot något annat",
      "Larma ambulans genom att ringa 112",
      "Lyfta ut kunden ur bilen och placera honom eller henne i stabilt sidoläge (framstupa sidoläge)",
      "Öppna bilens dörr så att kunden får frisk luft och ta fram eventuell medicin",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-3-q24",
    text: "Du hör ett mekaniskt skrapande ljud när du bromsar. Måste du vidta någon åtgärd?",
    options: [
      "Ja, kontrollera bromsvätskans nivå",
      "Ja, kontrollera bromsbeläggens tjocklek",
      "Ja, kontrollera servocylinderns funktion",
      "Nej, eftersom ljudet beror på att ABS-bromsen aktiverades",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-3-q25",
    text: "Vilket av märkena markerar att en person är drabbad av en neurologisk sjukdom?",
    questionImage: paidSakerhet3NeurologisktMarkeAbcdScenario,
    options: ["Märke A", "Märke B", "Märke C", "Märke D"],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-3-q26",
    text: "Din bil är manuellt växlad. Vad kan du göra för att minska bilens bränsleförbrukning?",
    options: [
      "Använda konstantfarthållaren så ofta som möjligt",
      "Alltid köra på 4:ans växel vid farter under 50 km/h",
      "Motorbromsa så lite som möjligt",
      "Växla upp tidigt och köra på så hög växel som möjligt",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-3-q27",
    text: "Vad kan förlänga din reaktionstid när du kör?",
    options: [
      "För lågt lufttryck i däcken",
      "Samtal i mobiltelefon",
      "Bristfälliga bromsar",
      "Felaktig hjulinställning",
      "Halt väglag",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-3-q28",
    text: "Varför bör du inte ha takboxen på bilen när du inte använder den?",
    questionImage: paidSakerhet3TakboxScenario,
    options: [
      "Takboxen gör att du får betydligt längre bromssträcka",
      "Takboxen gör att bilen får längre tyngdpunkt",
      "Takboxen skapar onödigt luftmotstånd som ökar bränsleförbrukningen",
      "Takboxen gör att bilen blir överstyrd",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-3-q29",
    text: "Du får en kund som bär denna symbol. Vilket symtom kan sjukdomen ge?",
    questionImage: paidSakerhet3EpilepsiMarkeScenario,
    options: [
      "Kunden kan drabbas av hjärtsvikt",
      "Kunden kan få svårt att andas",
      "Kunden kan hamna i insulinkoma",
      "Kunden kan få kramper och muskelryckningar",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-3-q30",
    text: "Du får ett köruppdrag där kunden är kraftigt alkoholpåverkad men på gott humör. Vad bör du göra?",
    options: [
      "Du begär förskottsbetalning och fullföljer uppdraget",
      "Du kontaktar sambandscentralen och informerar om vem personen är",
      "Du nekar kunden att åka med",
      "Du ber kunden att ta med sig en nykter person",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-3-q31",
    text: "Hur stora krafter kan en människa utsättas för vid en frontalkrock med två likvärdiga bilar vid en hastighet av 70 km/h per fordon?",
    options: [
      "10 gånger kroppsvikten",
      "20 gånger kroppsvikten",
      "30 gånger kroppsvikten",
      "50 gånger kroppsvikten",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-sakerhet-3-q32",
    text: "Du kör en kund som plötsligt blir blek, darrig, kallsvettig och irriterad. Vilken är den troligaste orsaken?",
    options: [
      "Kunden har diabetes",
      "Kunden är berusad",
      "Kunden har drabbats av ett epileptiskt anfall",
      "Kunden har drabbats av en stroke",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-3-q33",
    text: "Du kommer fram som första bil till en trafikolycka. Vilket alternativ beskriver hur du ska prioritera?",
    options: [
      "1. Överblicka olycksplatsen 2. Varna andra trafikanter 3. Ge livräddande första hjälp 4. Larma 112",
      "1. Larma 112 2. Ge livräddande första hjälp 3. Varna andra trafikanter 4. Överblicka olycksplatsen",
      "1. Ge livräddande första hjälp 2. Larma 112 3. Överblicka olycksplatsen 4. Varna andra trafikanter",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-sakerhet-3-q34",
    text: "När på dygnet anses risken vara störst för olyckor som beror på trötthet?",
    options: ["Kl. 21.00-24.00", "Kl. 02.00-05.00", "Kl. 07.00-10.00", "Kl. 14.00-17.00"],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-3-q35",
    text: "Inför vintern har du bytt till dubbdäck på din taxi. Vid körning dagen efter bytet känner du vibrationer och hör oljud från ett av hjulen på bilen. Vad är den troligaste orsaken?",
    options: [
      "Däcken har blivit ojämna under sommarförvaringen",
      "Dubbar från däcken har lossnat",
      "Fälgen har blivit skev under sommarförvaringen",
      "Hjulbultar håller på att lossna",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-3-q36",
    text: "Hur många personer varje år beräknas dö i olyckor där någon inblandad har varit påverkad av alkohol?",
    options: ["Ca 50 personer", "Ca 150 personer", "Ca 250 personer", "Ca 350 personer", "Ca 500 personer"],
    correctIndex: 1,
  },
  {
    id: "paid-sakerhet-3-q37",
    text: "Du använder en medicin som du inte vet om den är trafikfarlig. Du känner dig dock yr av medicinen. Kan du dömas för rattfylleri om du trots detta kör bil?",
    options: [
      "Nej, eftersom medicin inte kan likställas med alkohol eller droger",
      "Ja, men endast om du döms som vållande till en trafikolycka",
      "Ja, om det kan antas att du inte kan köra bilen på ett betryggande sätt",
      "Nej, inte om du har fått recept på medicinen av en läkare",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-sakerhet-3-q38",
    text: "Du ska lyfta tungt gods. Vilken lyftteknik bör du använda?",
    options: [
      "Du lyfter med böjda ben och böjd rygg",
      "Du lyfter med böjda ben och rak rygg",
      "Du lyfter med raka ben och böjd rygg",
      "Du lyfter med raka ben och rak rygg",
    ],
    correctIndex: 1,
  },
];

/** Betald Lagstiftning 1 — Svar A=0 … D=3, vid fem alternativ E=4. */
const paidLagstiftning1Questions: Question[] = [
  {
    id: "paid-lagstiftning-1-q1",
    text: "Vad anger en gul heldragen linje på trottoarkanten?",
    questionImage: paidLagstiftning1GulHelragenLinjeScenario,
    options: [
      "Tillåtet att stanna men endast för att släppa av passagerare",
      "Tillåtet att stanna men endast för att lasta av gods",
      "Förbud att stanna och parkera fordon",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-1-q2",
    text: "Vem har ansvaret för att en anställd taxiförares personliga tidbok blir ifylld?",
    options: [
      "Både arbetsgivaren och beställningscentralen",
      "Både föraren och arbetsgivaren",
      "Enbart föraren",
      "Enbart arbetsgivaren",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-1-q3",
    text: "Bussen ger tecken för att lämna hållplatsen. Är du skyldig att ge bussen möjlighet att lämna hållplatsen i någon av situationerna?",
    questionImage: paidLagstiftning1BussLamnaHallplatsAbScenario,
    options: [
      "Ja, men endast i A",
      "Ja, men endast i B",
      "Ja, i båda situationerna",
      "Nej",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-1-q4",
    text: "När ska du erbjuda kunden kvitto från taxametern?",
    options: [
      "Vid alla typer av köruppdrag",
      "Endast när kunden begär det",
      "Endast vid körningar med företagskunder",
      "Endast vid körningar med fast pris",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-1-q5",
    text: "Vilket av följande dokument ska du ha med när du kör taxitrafik?",
    options: [
      "Det senast utfärdade registreringsbeviset",
      "Protokoll från fordonets senaste kontrollbesiktning",
      "Anställningsintyg från arbetsgivaren",
      "Kontroll- och plomberingsrapport från senaste besiktning av taxametern",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-1-q6",
    text: "Vilket påstående är rätt om prisinformationen i en taxi?",
    options: [
      "Den ska vara fastsatt i det nedre vänstra hörnet av fordonets vindruta",
      "Den ska vara tryckt på reflekterande material som är läsbart i mörker",
      "Den ska vara läsbar från varje passagerarplats i fordonet",
      "Den ska finnas tillgänglig i pappersform så att kunden kan få ett exemplar",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-1-q7",
    text: "Vad innebär polis tecken?",
    questionImage: paidLagstiftning1PolisTeckenScenario,
    options: [
      "Minska hastigheten",
      "Du ska stanna och mötande får köra",
      "Både du och mötande får köra",
      "Du får köra och mötande ska stanna",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-1-q8",
    text: "Får du stanna din taxi vid en busshållplats för att lasta på gods?",
    options: ["Ja", "Nej"],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-1-q9",
    text: "Vilken högsta tillåtna hastighet gäller när du passerar detta vägmärke om inget annat anges?",
    questionImage: paidLagstiftning1MotorvagSkyltScenario,
    options: ["50 km/h", "70 km/h", "90 km/h", "110 km/h"],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-1-q10",
    text: "Får du köra i körfältet längst till höger med din taxi?",
    questionImage: paidLagstiftning1BussfaltTiderScenario,
    options: [
      "Ja, men endast under de tider som tilläggstavlan anger",
      "Ja, oavsett tidpunkt",
      "Nej",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-1-q11",
    text: "Vilka regler gäller för hur taxiförare ska använda bilbälte vid körning i trafik?",
    options: [
      "De behöver inte använda bilbälte vid körning i tätbebyggt område",
      "De är inte undantagna från bilbälteskravet",
      "De behöver inte använda bilbälte vid korta körningar",
      "De är undantagna från bilbälteskravet",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-1-q12",
    text: "Du kör taxi en vardag som inte är dag före helgdag kl. 20.00. En kund väntar längre fram på gatan. Får du passera förbi skyltarna?",
    questionImage: paidLagstiftning1ForbudMotorfordonTidsintervallScenario,
    options: [
      "Ja, eftersom förbudet endast gäller vid genomfart",
      "Ja, eftersom du kör yrkesmässig trafik",
      "Ja, eftersom förbudet inte gäller efter kl. 18.00",
      "Nej",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-1-q13",
    text: "När ska yrkestrafikmärket förnyas för din taxibil?",
    options: [
      "Före utgången av varje kalenderår",
      "Enligt datum på trafiktillståndet",
      "Före utgången av juni månad varje år",
      "Två år efter att föregående yrkestrafikmärke utfärdats",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-1-q14",
    text: "Du ska fortsätta rakt fram i korsningen. Trafiksignalen är ur funktion. Vad gäller?",
    questionImage: paidLagstiftning1StoppSignalUrFunktionScenario,
    options: [
      "Du behöver inte stanna men du ska lämna företräde åt den svängande bilen",
      "Du ska stanna vid stopplinjen och lämna företräde åt den svängande bilen",
      "Du fortsätter att köra eftersom trafiksignalen är ur funktion",
      "Du ska stanna vid stopplinjen men behöver inte lämna företräde åt den svängande bilen",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-1-q15",
    text: "På vilken av bilderna är bilen riktigt parkerad?",
    questionImage: paidLagstiftning1ParkeringAbcdScenario,
    options: ["Bild A", "Bild B", "Bild C", "Bild D"],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-1-q16",
    text: "Hur många år efter utfärdandet måste taxiförarlegitimationen senast förnyas?",
    options: ["1 år", "5 år", "7 år", "10 år"],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-1-q17",
    text: "Vad gäller för hur barn ska sitta i bilen vid skolskjutsning?",
    options: [
      "Barn får inte använda sittplatser i framsätet",
      "Barn upp till fem år ska använda bilbälte om särskild skyddsanordning",
      "Barn upp till fem år ska använda särskild skyddsanordning",
      "Barn får inte använda sittplatser med enbart nödbälte",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-1-q18",
    text: "Du upptäcker att en plombering på din taxameter är bruten. Vad gäller?",
    options: [
      "Du får endast använda bilen för köruppdrag mot fast pris",
      "En verkstad som är ackrediterad av SWEDAC måste plombera taxametern innan du får använda bilen i taxitrafik",
      "Du får avsluta ett påbörjat körpass, men därefter måste en godkänd verkstad plombera taxametern innan du använder bilen i taxitrafik",
      "Svensk Bilprovning måste plombera taxametern innan du får använda bilen i taxitrafik",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-1-q19",
    text: "Hur lång tid får det högst vara mellan besiktning av en taxameter?",
    options: ["6 månader", "18 månader", "12 månader", "24 månader"],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-1-q20",
    text: "Du ska svänga vänster. Har du väjningsplikt mot trafik från höger i någon av korsningarna?",
    questionImage: paidLagstiftning1VajningspliktVanstersvangAbScenario,
    options: [
      "Ja men endast i korsning A",
      "Ja men endast i korsning B",
      "Ja i båda korsningarna",
      "Nej",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-1-q21",
    text: "Din personliga tidbok är avslutad. När ska du som anställd taxiförare återlämna tidboken till din arbetsgivare?",
    options: [
      "Du ska lämna den till arbetsgivaren direkt efter avslutat körpass",
      "Du ska behålla den ett dygn och sedan lämna den till arbetsgivaren",
      "Du ska behålla den en månad och sedan lämna den till arbetsgivaren",
      "Du ska behålla den en vecka och sedan lämna den till arbetsgivaren",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-1-q22",
    text: "Vilket påstående är riktigt om tariffen fast pris vid taxikörning?",
    options: [
      "Det är ett fastställt belopp utöver grundavgiften som ska registreras före resan",
      "Det är ett fastställt belopp som ska registreras när köruppdraget påbörjas",
      "Det är en tariff som enbart används vid godstransporter",
      "Det är en tariff som enbart används vid persontransporter",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-1-q23",
    text: "Du har fått en körning till en adress vid en gata där detta vägmärke finns uppsatt. Får du passera vägmärket?",
    questionImage: paidLagstiftning1GangfartsomradeScenario,
    options: ["Ja, men bara i gångfart", "Ja, men i högst 30 km/h", "Nej"],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-1-q24",
    text: "Vilket alternativ anger två uppgifter som alltid ska finnas med på ett taxikvitto?",
    questionImage: paidLagstiftning1TaxikvittoUppgifterScenario,
    options: [
      "Antal registrerade körningar under körpasset och taxiföretagets telefonnummer",
      "Framkörningsavgiften och beställningscentralens namn",
      "Fordonets yrkestrafiknummer och inkört belopp under körpasset",
      "Förarkoden och datum för körningen",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-1-q25",
    text: "Är taxin felparkerad i någon av situationerna?",
    questionImage: paidLagstiftning1FelparkeringAbScenario,
    options: [
      "Ja, i situation A",
      "Ja, i situation B",
      "Ja, både i situation A och B",
      "Nej, inte i någon av situationerna",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-1-q26",
    text: "Du har kört taxi från kl. 05.00 den 24 september. Kl. 11.00 får du besked om ett köruppdrag som börjar kl. 11.15 och beräknas sluta kl. 15.00. Kan du ta köruppdraget med tanke på den vilotid du har haft enligt tidboksbladet?",
    questionImage: paidLagstiftning1VilotidTidbokScenario,
    options: [
      "Ja",
      "Nej, det saknas 1 timmars vilotid",
      "Nej, det saknas 2 timmars vilotid",
      "Nej, det saknas 3 timmars vilotid",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-1-q27",
    text: "Vilket alternativ anger två dokument som du måste ha med dig när du kör taxitrafik?",
    questionImage: paidLagstiftning1DokumentTaxitrafikScenario,
    options: [
      "Yrkestrafikmärke - Kopia av trafiktillståndet",
      "Taxiförarlegitimation - Bilens registreringsbevis",
      "Kopia av trafiktillståndet - Körkort",
      "Taxiförarlegitimation - Kontroll- och plomberingsrapport för taxametern",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-1-q28",
    text: "Du ska köra taxi den 20 augusti från kl. 17.00. Hur många timmar får du maximalt köra före nästa viloperiod enligt tidboksbladet?",
    questionImage: paidLagstiftning1MaxKortidVilotidScenario,
    options: ["6 timmar", "7 timmar", "10 timmar", "11 timmar"],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-1-q29",
    text: "Vilket påstående är riktigt om prisinformationen på taxibilar?",
    questionImage: paidLagstiftning1PrisinformationTaxibilScenario,
    options: [
      "Den ska illustreras med symboler fastställda av Vägverket",
      "Den ska vara tryckt på reflekterande material som är läsbart i mörker",
      "Den ska vara fastsatt i det nedre vänstra hörnet av fordonets vindruta",
      "Den ska vara läsbar utifrån om man står minst två meter från sidan på fordonet",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-1-q30",
    text: "Vilka belysningar får inte användas samtidigt vid färd?",
    questionImage: paidLagstiftning1BelysningSamtidigtScenario,
    options: [
      "Helljus och parkeringsljus",
      "Halvljus och dimljus",
      "Halvljus och parkeringsljus",
      "Helljus och dimljus",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-1-q31",
    text: "Vad innebär vägmärket?",
    questionImage: paidLagstiftning1VarningsmarkeKorsningScenario,
    options: [
      "Trafik från både vänster och höger har väjningsplikt mot mig",
      "Jag har väjningsplikt mot trafik från höger",
      "Jag har väjningsplikt mot trafik från både vänster och höger",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-1-q32",
    text: "Vad kan påföljden bli om du inte har din taxiförarlegitimation placerad på föreskrivet sätt?",
    questionImage: paidLagstiftning1TaxiforarlegitimationPafoljdScenario,
    options: [
      "Fängelse i högst 3 månader",
      "Böter",
      "Återkallelse av taxiförarlegitimationen",
      "Fängelse i högst 6 månader",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-1-q33",
    text: "Bilderna visar baksidan på olika vägmärken. Vilket vägmärke anger stopplikt vid vägkorsning?",
    questionImage: paidLagstiftning1BaksidaVagmarkenStoppliktScenario,
    options: ["Bild A", "Bild B", "Bild C", "Bild D"],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-1-q34",
    text: "Du har tappat bort din taxiförarlegitimation. Till vem ska du anmäla detta?",
    questionImage: paidLagstiftning1TappatTaxiforarlegitimationScenario,
    options: ["Länsstyrelsen", "Svenska taxiförbundet", "Vägverket", "Polisen"],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-1-q35",
    text: "Du har skrivit fel i din personliga tidbok. Vad ska du göra innan du skriver rätt text?",
    questionImage: paidLagstiftning1FelskrivenTidbokScenario,
    options: [
      "Jag ska radera ut det felskrivna",
      "Jag ska stryka över det felskrivna med ett streck",
      "Jag ska riva ut bladet där jag har skrivit fel och börja på ett nytt blad",
      "Jag ska måla över det felskrivna med korrigeringsmedel",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-1-q36",
    text: "Du ska köra rakt fram i korsningen. Det finns inga gående i närheten. Var ska du stanna?",
    questionImage: paidLagstiftning1StopplinjeKorsningScenario,
    options: [
      "En billängd före övergångsstället",
      "I höjd med stoppmärket",
      "Vid stopplinjen",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-1-q37",
    text: "Ditt arbetspass börjar kl. 07.00 den 30 september. När du påbörjat ditt körpass får du besked om en förbeställd långkörning som börjar klockan 17.00 och beräknas ta 7 timmar. När måste du senast påbörja en ny viloperiod för att kunna utföra långkörning enligt tidboksbladet?",
    questionImage: paidLagstiftning1ViloperiodLangkorningScenario,
    options: ["Kl. 09.00", "Kl. 11.00", "Kl. 13.00", "Kl. 15.00"],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-1-q38",
    text: "Du ska svänga höger. Den gående är på väg att korsa gatan och har grönt ljus samtidigt som du. Vad gäller?",
    questionImage: paidLagstiftning1SvangaHogerGangareScenario,
    options: [
      "Jag har inte väjningsplikt mot den gående eftersom hon är skyldig att stanna på refugen i mitten av gatan",
      "Jag ska köra med låg hastighet och har väjningsplikt mot den gående på övergångsstället",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-1-q39",
    text: "Hur lång måste dygnsvilan minst vara för en taxiförare under en 24-timmarsperiod?",
    questionImage: paidLagstiftning1Dygnsvila24TimmarScenario,
    options: [
      "8 timmar och den ska vara sammanhängande",
      "8 timmar och den får delas upp på två perioder",
      "11 timmar och den får delas upp på två perioder",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-1-q40",
    text: "Du kör skolskjuts med din taxi. Du har en genomlyst skolskjutsskylt på bilen. När ska den vara tänd?",
    questionImage: paidLagstiftning1SkolskjutsskyltTandScenario,
    options: [
      "Enbart 100 m före på- eller avstigning",
      "Enbart i mörker",
      "Enbart 100 m före och efter på- eller avstigning",
      "Enbart 100 m efter på- eller avstigning",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-1-q41",
    text: "Du kör skolskjuts med din taxi. När ska du ha blinklyktorna på skolskjutsskylten tända?",
    questionImage: paidLagstiftning1BlinklyktorSkolskjutsScenario,
    options: [
      "Från att jag stannar vid platsen där barnen stiger av eller på och till ca 100 m efter denna plats",
      "Enbart när jag står vid platsen där barnen stiger av eller på",
      "Från ca 100 m före platsen där barnen stiger av eller på och till jag startar därifrån",
      "Från ca 100 m före platsen där barnen stiger av eller på och till 100 m efter denna plats",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-1-q42",
    text: "Du ska köra rakt fram i korsningen. Vad gäller?",
    questionImage: paidLagstiftning1KorsningVagmarkeScenario,
    options: [
      "All korsande trafik har väjningsplikt mot mig",
      "Enbart trafik från höger har väjningsplikt mot mig",
      "Jag har väjningsplikt mot trafik som närmar sig både från vänster och höger",
      "Jag har väjningsplikt mot trafik som närmar sig från höger",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-1-q43",
    text: "Hur ska du förvara taxiförarlegitimationen under färd när du har passagerare?",
    questionImage: paidLagstiftning1ForvaraTaxiforarlegitimationScenario,
    options: [
      "Tillsammans med körkortet",
      "Tillsammans med fordonets registreringsbevis",
      "Lätt åtkomlig i bilen",
      "Väl synlig för passagerarna",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-1-q44",
    text: "Vad innebär vägmärket?",
    questionImage: paidLagstiftning1SammanfletningVagmarkeScenario,
    options: [
      "Den som kör i vänster körfält ska som regel väja för trafiken i höger körfält",
      "Förarna i båda körfälten ska ömsesidigt anpassa sig till att det blir ett körfält",
      "Den som kör i höger körfält ska som regel väja för trafiken i vänster körfält",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-1-q45",
    text: "Efter vilka körningar måste du skriva ut kvitto eller följesedel från taxametern?",
    questionImage: paidLagstiftning1KvittoFoljesedelTaxameterScenario,
    options: [
      "Alla körningar utom skolskjutsning",
      "Alla körningar",
      "Alla körningar utom körning med fast pris",
      "Alla körningar utom färdtjänstuppdraget",
      "Alla körningar utom flygtaxi",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-1-q46",
    text: "Vilken eller vilka dörrar ska inte kunna öppnas inifrån av passagerare när en personbil används som skolskjuts?",
    questionImage: paidLagstiftning1DorrarSkolskjutsScenario,
    options: [
      "Samtliga dörrar utom föraren",
      "Dörr på höger sida",
      "Samtliga dörrar till baksätet",
      "Dörr på vänster sida",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-1-q47",
    text: "När ska taxametern normalt besiktas?",
    questionImage: paidLagstiftning1TaxameterBesiktningScenario,
    options: [
      "I samband med fordonets kontrollbesiktning",
      "Varje år, senast ett år efter föregående besiktning av taxametern",
      "Vartannat år, senast två år efter föregående besiktning av taxametern",
      "Varje år i januari",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-1-q48",
    text: "Taxiförarlegitimationen ska förnyas efter ett visst antal år. Hur många?",
    questionImage: paidLagstiftning1FornyaTaxiforarlegitimationScenario,
    options: ["3 år", "5 år", "7 år", "10 år"],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-1-q49",
    text: "Du tänker köra om lastbilen. Får du köra över mittlinjen med vänster hjulpar samtidigt som du har mötande trafik?",
    questionImage: paidLagstiftning1KoraOmLastbilMotandeScenario,
    options: [
      "Nej",
      "Ja, eftersom lastbilen kör på vägrenen",
      "Ja, eftersom mötande bilar kan köra ut på vägrenen",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-1-q50",
    text: "Vilket påstående är riktigt om prisinformationen på taxibilar?",
    questionImage: paidLagstiftning1PrisinformationTaxibil2Scenario,
    options: [
      "Den ska vara fastsatt i den nedre vänstra hörnet av fordonets vindruta",
      "Den ska illustreras med symboler fastställda av Vägverket",
      "Den ska vara tryckt på reflekterande material som är läsbart i mörker",
      "Den ska vara läsbar utifrån om man står minst två meter från sidan på fordonet",
    ],
    correctIndex: 3,
  },
];

const paidLagstiftning2Questions: Question[] = [
  {
    id: "paid-lagstiftning-2-q1",
    text: "Hur ska du uppträda i den här situationen?",
    questionImage: paidLagstiftning2FotgangareOvergangsstalleScenario,
    options: [
      "Jag ska sakta in eller stanna för att visa att jag tänker väja",
      "Jag kan köra vidare utan att stanna eftersom jag ser att fotgängaren har sett mig",
      "Jag kan köra vidare eftersom fotgängaren befinner sig på mittrefugen",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-2-q2",
    text: "Var ska taxameterns kontroll- och plomberingsrapport förvaras?",
    options: ["Hos länsstyrelsen", "Hos vägverket", "I fordonet", "Hos tillståndshavaren"],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-2-q3",
    text: "När får du tidigast börja köra taxi den 14 juli enligt tidboksbladet?",
    options: ["Kl 06.00", "Kl 00.00", "Kl 07.00", "Kl 09.00"],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-2-q4",
    text: "Vem ansvarar för att en taxi som används vid skolskjutsning har rätt utrustning?",
    options: [
      "Föraren och tillståndshavaren",
      "Föraren och skolstyrelsen",
      "Föraren, tillståndshavaren och skolstyrelsen",
      "Enbart föraren",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-2-q5",
    text: "Vem ansvarar normalt för att ett 14-årigt barn använder bilbälte vid skolskjutsning i taxibil?",
    options: [
      "Barnet själv",
      "Skolpersonalen om det finns sådan med i bilen",
      "Barnets föräldrar om de finns med i bilen",
      "Föraren",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-2-q6",
    text: "Vilka fordon får du köra i yrkesmässig taxitrafik, förutom personbilar?",
    options: ["Motorcyklar", "Lätta lastbilar", "Bussar", "Lastbilar oavsett vikt"],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-2-q7",
    text: "Vilket påstående är rätt om prisinformationen i en taxi?",
    options: [
      "Den ska vara läsbar från varje passagerarplats i fordonet",
      "Den ska vara tryckt på reflekterande material som är läsbart i mörker",
      "Den ska vara fastsatt i den nedre vänstra hörnet av fordonets vindruta",
      "Den ska finnas tillgänglig i pappersform så att kunden kan få ett exemplar",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-2-q8",
    text: "Vem är ansvarig för att anteckningar om vilotider förs enligt bestämmelserna?",
    options: [
      "Enbart arbetsgivaren",
      "Enbart företagets trafikansvarige",
      "Enbart föraren",
      "Både föraren och arbetsgivaren",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-2-q9",
    text: "Vilka belysningar får inte användas samtidigt vid färd?",
    options: [
      "Halvljus och parkeringsljus",
      "Helljus och dimljus",
      "Helljus och parkeringsljus",
      "Halvljus och dimljus",
      "Parkeringsljus och dimljus",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-2-q10",
    text: "Dygnsvilan för en förare i taxitrafik får delas upp. Vilket alternativ visar en riktig uppdelning av dygnsvilan?",
    options: ["3 tim + 8 tim", "5 tim + 6 tim", "1 tim + 4 tim + 6 tim", "1 tim + 1 tim + 9 tim"],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-2-q11",
    text: "Vid vilken av följande tidpunkter gäller hastighetsbegränsningen 50 km/h?",
    questionImage: paidLagstiftning2Q11UserScenario,
    options: [
      "En söndag kl 08.00",
      "En vardag som inte är dag före helgdag kl 20.00",
      "En lördag kl 12.00",
      "En vardag som inte är dag före helgdag kl 18.00",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-2-q12",
    text: "Taxiföraren har stannat för att vänta på en kund. Är det tillåtet?",
    questionImage: paidLagstiftning2Q12UserScenario,
    options: ["Ja, i situation A", "Ja, i situation B", "Ja, i båda situationerna", "Nej"],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-2-q13",
    text: "Vilket påstående är riktigt om gatan på bilden?",
    questionImage: paidLagstiftning2Q13UserScenario,
    options: [
      "All fordonstrafik är förbjuden",
      "Man får hämta kunder som bor vid gatan med taxi",
      "All fordonstrafik",
      "Endast fordonstrafik med särskild tillstånd är tillåtet",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-2-q14",
    text: "Du har ett köruppdrag där fast pris ska gälla. När ska du senast registrera det fasta priset i taxametern? (Priset är inte bestämt av något externt samplaneringssystem)",
    questionImage: paidLagstiftning2Q14UserQuestion,
    options: [
      "Innan jag har stannat bilen vid slutet av körningen",
      "Vid slutet av körningen men innan kreditkort avläses",
      "Efter halva körningen",
      "När jag börjar körningen",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-2-q15",
    text: "Vilket vägmärke används på huvudled för att varna för en farlig korsning?",
    questionImage: paidLagstiftning2Q15UserQuestion,
    options: ["Vägmärke A", "Vägmärke B", "Vägmärke C"],
    correctIndex: 2,
    explanationImage: paidLagstiftning2Q15UserSupplement,
  },
  {
    id: "paid-lagstiftning-2-q16",
    text: "Var på fordonet ska yrkestrafikmärket vara fastsatt?",
    options: [
      "På bildens vänstar sidoruta",
      "I nedre vänstra hörnet av vindruta",
      "Bredvid den bakre registreringsskylten",
      "På bildens högra sidoruta",
      "På instrumentbrädans högra sida",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-2-q17",
    text: "När du ska börja ditt körpass upptäcker du att du glömt din personliga tidbok. Vad gäller?",
    options: [
      "Jag får påbörja en ny tidbok under förutsättning att jag använder högst två böcker samtidigt",
      "Jag får påbörja en ny tidbok under förutsättning att jag makulerar den glömda boken direkt efter mitt körpass",
      "Jag måste hämta tidboken innan jag börjar körpasset, eftersom jag inte får börja på en ny tidbok förrän den tidigare är avslutat",
      "Jag får tillfälligt använda arbetsgivarens tidbok men endast för ett körpass",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-2-q18",
    text: "Vad anger de gula vägmarkeringarna?",
    questionImage: paidLagstiftning2Q18UserQuestion,
    options: [
      "Förbud att parkera",
      "Förbud att stanna och parkera",
      "Förbud att köra på den gula heldragna linjen",
    ],
    correctIndex: 0,
    explanationImage: paidLagstiftning2Q18UserSupplement,
  },
  {
    id: "paid-lagstiftning-2-q19",
    text: "Du ska svänga till höger. Vad gäller?",
    questionImage: paidLagstiftning2Q19UserQuestion,
    options: [
      "Jag får köra utan att stanna vid stopplinjen",
      "Jag får köra men måste först stanna vid stopplinjen",
      "Jag ska stanna vid stopplinjen och vänta på grönt ljus",
    ],
    correctIndex: 0,
    explanationImage: paidLagstiftning2Q19UserSupplement,
  },
  {
    id: "paid-lagstiftning-2-q20",
    text: "Du avser att svänga in på vägen till vänster. Vad är det första du bör göra?",
    questionImage: paidLagstiftning2Q20UserQuestion,
    options: [
      "Placera bilen intill mittlinjen",
      "Ge tecken till vänster",
      "Växla ner och motorbromsa",
      "Bromsa",
      "Kontrollera bakomvarande trafik",
    ],
    correctIndex: 4,
    explanationImage: paidLagstiftning2Q20UserSupplement,
  },
  {
    id: "paid-lagstiftning-2-q21",
    text: "Taxiföraren har stannat för att släppa av en kund. Är det tillåtet?",
    questionImage: paidLagstiftning2Q21UserQuestion,
    options: [
      "Ja, i situation A",
      "Ja, i situation B",
      "Ja, både i situation A och B",
      "Nej, inte i någon av situationerna",
    ],
    correctIndex: 1,
    explanationImage: paidLagstiftning2Q21UserSupplement,
  },
  {
    id: "paid-lagstiftning-2-q22",
    text: "Du är taxiförare och har körkort med behörighet B. Vilket av följande fordon får du köra?",
    options: [
      "Lastbil med totalvikt på 3,7 ton",
      "Bil inrättad för 12 personer",
      "Personbil med totalvikt på 3,2 ton",
      "Personbil med tillkopplad tung släpvagn",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-2-q23",
    text: "Du ska hämta en passagerare. Får du stanna som taxin på bilden?",
    questionImage: paidLagstiftning2Q23UserQuestion,
    options: [
      "Ja, eftersom gatan är smal",
      "Ja, om jag på så sätt kan underlätta för övrig trafik",
      "Nej",
      "Ja, men högst 1 minut",
    ],
    correctIndex: 2,
    explanationImage: paidLagstiftning2Q23UserSupplement,
  },
  {
    id: "paid-lagstiftning-2-q24",
    text: "Du kör taxi och börjar ett körpass kl 13.00 den 4 augusti. Tidboksbladet visar dina vilotider de senaste dygnen. När måste du senast börja nästa viloperiod?",
    questionImage: paidLagstiftning2Q24UserQuestion,
    options: ["Kl 16.00 den 4 augusti", "Kl 21.30 den 4 augusti", "Kl 02.00 den 5 augusti", "Kl 19.00 den 4 augusti"],
    correctIndex: 3,
    explanationImage: paidLagstiftning2Q24UserSupplement,
  },
  {
    id: "paid-lagstiftning-2-q25",
    text: "Vilken högsta tillåtna hastighet gäller när du passerar detta vägmärke om inget annat anges?",
    questionImage: paidLagstiftning2Q25UserSupplement,
    options: ["30 km/h", "50 km/h", "70 km/h", "90 km/h"],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-2-q26",
    text: "Vilka får parkera här?",
    questionImage: paidLagstiftning2Q26UserSupplement,
    options: [
      "Alla som kör färdtjänsttransport",
      "Alla som kör sjuktransport",
      "Alla rörelsehindrande med rullstol",
      "Alla rörelsehindrande med särskild tillstånd",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-2-q27",
    text: "Du får en körning den 24 september som beräknas pågå från kl 05.00 till kl 06.00. Kan du ta körning med tanke på den vilotid du har haft enligt tidboksbladet?",
    questionImage: paidLagstiftning2Q27UserSupplement,
    options: [
      "Ja",
      "Nej, det saknas 1 timmas vilotid",
      "Nej, det saknas 2 timmars vilotid",
      "Nej, det saknas 3 timmars vilotid",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-2-q28",
    text: "Du ska fortsätta rakt fram. Gäller högerregeln i någon av korsningarna?",
    questionImage: paidLagstiftning2Q28UserSupplement,
    options: ["Ja, men enbart i korsning A", "Ja, men enbart i korsning B", "Ja, i korsning A och B", "Nej"],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-2-q29",
    text: "En polisman begär att få se körpassrapporter från de senaste dygnen som ditt fordon använts i taxitrafik. För minst hur många dygn är du skyldig att visa upp kopior av körpassrapporterna?",
    options: [
      "För de två senaste dygnen",
      "För de tre senaste dygnen",
      "För de fyra senaste dygnen",
      "För de fem senaste dygnen",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-2-q30",
    text: "Vad ska du anteckna i tidboken innan du börjar ett körpass med taxi?",
    options: [
      "Den närmaste föregående dygnsvilan",
      "De två närmast föregående dygnsvilorna",
      "De tre närmast föregående dygnsvilorna",
      "De sju närmast föregående dygnsvilorna",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-2-q31",
    text: "Du ska svänga vänster i korsningen. Måste du ge tecken åt vänster med körriktningsvisaren?",
    questionImage: paidLagstiftning2Q31UserSupplement,
    options: [
      "Nej, eftersom mötande trafik har rött ljus",
      "Ja, eftersom jag ska svänga",
      "Nej, eftersom trafiksignalen visare grön pil",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-2-q32",
    text: "Du ska svänga vänster i korsningen. Vilka regler gäller?",
    questionImage: paidLagstiftning2Q32UserSupplement,
    options: [
      "Jag kör eftersom mötande bilarna har rött ljus",
      "Jag måste stanna för att invänta grön konturpil",
      "Jag låter de mötande bilarna köra först",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-2-q33",
    text: "Din taxiförarlegitimation kan bli återkallad om du begår ett brott. För hur lång tid blir den minst återkallad?",
    options: ["1 år", "2 år", "3 år", "4 år", "5 år"],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-2-q34",
    text: "Vid vilket av följande tillfällen ska taxametern besiktigas?",
    options: [
      "När jag byter däck så att mätningen av vägsträckan ändras med mer än 2 procent",
      "När bilen byter ägare",
      "Vid kontrollbesiktningen av bilen",
      "Vid den årliga registreringsbesiktning",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-2-q35",
    text: "Du parkerar din bil lördag kl. 20.00. När får du senast hämta den?",
    questionImage: paidLagstiftning2Q35UserSupplement,
    options: ["Söndag kl. 7.00", "Söndag kl. 24.00", "Måndag kl. 7.00", "Lördag kl. 24.00"],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-2-q36",
    text: "Vilken tid får du inte parkera?",
    questionImage: paidLagstiftning2Q36UserSupplement,
    options: ["Lördag kl 7", "Lördag kl 13", "Söndag kl 9", "Söndag kl 17"],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-2-q37",
    text: "Vad innebär polisens tecken?",
    questionImage: paidLagstiftning2Q37UserSupplement,
    options: [
      "Mötande ska stanna och du ska stanna",
      "Mötande ska stanna och du ska köra",
      "Mötande ska köra och du ska stanna",
      "Både ska köra men långsamt",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-2-q38",
    text: "Vad gäller när du kör personbil med en bromsad släpvagn?",
    options: [
      "Högsta tillåtna hastighet är 80 km/h",
      "Jag måste ha med både bilens och släpvagnens registreringsbevis",
      "Jag måste köra på vägrenen om det finns en sådan",
      "Släpvagnen måste ha sommardäck om bilen har sommardäck",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-2-q39",
    text: "Är någon av bilarna felparkerad?",
    questionImage: paidLagstiftning2Q39UserSupplement,
    options: ["Ja, båda bilarna", "Nej, ingen av bilarna", "Ja, den mörka bilen", "Ja, den ljusa bilen"],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-2-q40",
    text: "Du kör på motorväg och närmar dig ett fordon från accelerationsfält",
    questionImage: paidLagstiftning2Q40UserSupplement,
    options: [
      "Jag måste byta till vänstra körfält",
      "Jag behöver inte anpassa hans inkörning underlättas",
      "Jag måste anpassa hastigheten för att inkörningen underlättas",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-2-q41",
    text: "Du kommer fram till det här vägmärket. Vad gäller?",
    questionImage: paidLagstiftning2Q41UserSupplement,
    options: [
      "Du måste svänga höger",
      "Du får inte svänga vänster",
      "Du får svänga höger eller vänster",
      "Du måste svänga vänster",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-2-q42",
    text: "I vilken situation får du stanna?",
    questionImage: paidLagstiftning2Q42UserSupplement,
    options: ["I situation på bild A", "I situation på bild B", "I situation på bild C"],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-2-q43",
    text: "På vilken av de två situationer gäller högerregel?",
    questionImage: paidLagstiftning2Q43UserSupplement,
    options: ["På bild A", "På bild B", "Ingen"],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-2-q44",
    text: "Får du köra in på den här vägen med taxi för att lämna av en kund?",
    questionImage: paidLagstiftning2Q44UserSupplement,
    options: [
      "Ja om jag kör i gångfart",
      "Ja men endast om kunden bor vid den vägen",
      "Ja om jag kör med lägre hastighet än 30km/h",
      "Nej",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-2-q45",
    text: "Du blir stoppad i en poliskontroll den 19 september kl 16.00 och visar detta tidboksbladet. Är uttagen vilotid tillräcklig?",
    questionImage: paidLagstiftning2Q45UserSupplement,
    options: [
      "Ja",
      "Nej, det saknas 1 timme vilotid",
      "Nej, det saknas 2 timme vilotid",
      "Nej, det saknas 3 timme vilotid",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-2-q46",
    text: "Du ska fortsätta rakt fram. Har du väjningsplikt mot bilen i någon av korsningarna?",
    questionImage: paidLagstiftning2Q46UserSupplement,
    options: ["Ja, men endast i korsning A", "Ja, men endast i korsning B", "Ja, i båda korsningarna", "Nej"],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-2-q47",
    text: "Vilken typ av tariff är inte tillåten att använda i trafik med privatpersoner som kunder?",
    options: ["Brytpunktstariff", "Tidstariff", "Summatariff", "Sträcktariff"],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-2-q48",
    text: "Du kör på en väg där det finns båda vita och orangefärgade linjer på din del av körbanan. Vad innebär detta för dig?",
    options: [
      "Jag kan välja att följa antingen de vita eller de orangefärgade linjerna",
      "Jag ska följa de vita linjerna",
      "Jag ska följa de orangefärgade linjerna",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-2-q49",
    text: "Under en vecka kör du taxi torsdag, fredag och lördag. Vid varje tillfälle kör du från kl. 07.00 till kl. 17.00. För hur många kalenderdygn måste du göra anteckningar i tidboken denna vecka?",
    options: ["Tre", "Fyra", "Fem", "Sex"],
    correctIndex: 1,
  },
];

const paidLagstiftning3Questions: Question[] = [
  {
    id: "paid-lagstiftning-3-q1",
    text: "Efter 11 timmar ledighet kör du taxi en lördag kl. 18.00-04.00 med en ny viloperiod kl. 20.00-21.00. På söndagen börjar du köra igen kl. 12.00. När måste du senast påbörja ytterligare viloperiod under söndagen?",
    options: ["Kl 14.00", "Kl 15.00", "Kl 16.00", "Kl 17.00"],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-3-q2",
    text: "Du börjar ditt körpass kl. 06.00 efter ett dygns vila. Du gör uppehåll i arbetet mellan kl. 09.00 och 13.00. När måste du senast sluta köra taxi enligt vilotidsförordningen?",
    options: ["kl. 21.00", "kl. 23.00", "kl. 22.00", "kl. 24.00", "kl. 01.00"],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-3-q3",
    text: "Vilken av följande personer har möjlighet att få taxiförarlegitimation?",
    options: [
      "En 19-åring som har körkort med behörighet B sedan ett år",
      "En 25-åring som har körkort med behörighet B sedan ett år",
      "En 20-åring som har körkort med behörighet B sedan två år",
      "En 21-åring som har körkort med behörighet B sedan två år",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-3-q4",
    text: "Du stannar vid vägkanten och väntar på en passagerare som dröjer. Det är mörkt och vägen saknar belysning. Vilket ljus ska du ha tänt i bilen?",
    options: ["Halvljus", "Varningsblinkers", "Parkeringsljus", "Helljus"],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-3-q5",
    text: "Vad krävs för att du ska få köra en skolskjuts med en buss som har sittplats för 10 passagerare?",
    options: [
      "Enbart D-körkort",
      "D-körkort och taxiförarlegitimation",
      "Enbart taxiförarlegitimation",
      "Enbart C-körkort",
      "C-körkort och taxiförarlegitimation",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-3-q6",
    text: "Har någon av taxibilarna stannat rätt?",
    questionImage: paidLagstiftning3TaxibilarnaStannatRattAbScenario,
    options: [
      "Ja, taxibilen på bild B",
      "Ja, både taxibilen på bild A och B",
      "Nej, ingen av taxibilarna",
      "Ja, taxibilen på bild A",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-3-q7",
    text: "Du kör i 70 km/h i situationen på bilden. Vad är säkrast att göra?",
    questionImage: paidLagstiftning370KmhMotandeScenario,
    options: ["Bromsa", "Styra ut mot högerkanten", "Signalera med signalhornet", "Signalera med helljuset"],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-3-q8",
    text: "Efter 11 timmars vila börjar du köra taxi kl. 07.00. Du har rast och vilar kl. 09.00 12.00 När måste du senast sluta detta körpass enligt vilotidsförordningen?",
    options: ["Kl. 20.00", "Kl. 22.00", "Kl. 23.00", "Kl. 01.00"],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-3-q9",
    text: "Du ska fortsätta rakt fram i korsningen. Hur kör du på säkraste sätt om cyklisten?",
    questionImage: paidLagstiftning3KorsningCyklistScenario,
    options: [
      "Jag fortsätter i höger körfält och kör om före korsningen",
      "Jag väntar med omkörning till efter korsningen",
      "Jag avvaktar och kör sedan om i korsningen",
      "Jag använder vänster körfält för att lämna god marginal",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-3-q10",
    text: "Du ska svänga till höger in på en landsväg som är huvudled och har tät trafik. Får du använda vägrenen som ett accelerationsfält?",
    options: ["Ja, men enbart i dagsljus", "Ja, alltid", "Nej"],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-3-q11",
    text: "Får du stanna för att vänta på en passagerare efter något av vägmärkena?",
    questionImage: paidLagstiftning3VagmarkeAbStannaScenario,
    options: ["Ja, men enbart efter vägmärke A", "Ja, men enbart efter vägmärke B", "Ja, efter båda vägmärkena", "Nej"],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-3-q12",
    text: "Du ska stanna för att släppa av en passagerare vid en vägkorsning. Vilket avstånd måste det minst vara till korsningen?",
    options: ["3 meter", "5 meter", "10 meter", "20 meter", "30 meter"],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-3-q13",
    text: "Hur många situationer måste du stanna, oavsett om det kommer fordon eller inte?",
    questionImage: paidLagstiftning3SituationerStannaAbcdScenario,
    options: ["I en av situationerna", "I två av situationerna", "I tre av situationerna", "I alla situationerna"],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-3-q14",
    text: "Vilken högsta tillåtna hastighet gäller när du passerar detta vägmärke om inget annat anges?",
    questionImage: paidLagstiftning3MotorvagSkyltHastighetScenario,
    options: ["50 km/h", "70 km/h", "90 km/h", "110 km/h"],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-3-q15",
    text: "Den 30 augusti har du förvärvsarbetat från kl 07.00 till kl 13.00. du börjar sedan köra taxi kl. 18.00. När måste du senast påbörja nästa viloperiod enligt tidboksbladet?",
    questionImage: paidLagstiftning3TidboksbladViloperiodAug30Scenario,
    options: ["Kl. 23.00", "Kl. 01.00", "Kl. 03.00", "Kl. 05.00"],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-3-q16",
    text: "Du ska köra rakt fram i korsningen. Vilka trafikanter kan du vara säker på har rött ljus?",
    questionImage: paidLagstiftning3StoppljusKorsningScenario,
    options: [
      "Gående som ska gå över den korsande gatan",
      "Mötande fordon",
      "Gående som ska gå över gatan på övergångsstället framför mig",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-3-q17",
    text: "Du ska svänga höger. Vad gäller?",
    questionImage: paidLagstiftning3SvangaHogerTrafiksignalScenario,
    options: [
      "Det är förbjudet att köra nu eftersom signalen med grön pil inte är tänd",
      "Det är tillåtet att köra nu eftersom trafiksignalen visar grönt ljus",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-3-q18",
    text: "Du ska bogsera en personbil som fått motorstopp. Vilken högsta tillåtna hastighet gäller?",
    options: ["20 km/h", "30 km/h", "40 km/h", "50 km/h", "70 km/h", "80 km/h"],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-3-q19",
    text: "När ska en taxiförarlegitimation förnyas?",
    options: [
      "Om innehavaren bytt adress",
      "Senast inom fem år efter utfärdandet och därefter vart femte år",
      "Om innehavaren ändrat namn",
      "Senast inom tre år efter utfärdande och därefter vart tredje år",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-3-q20",
    text: "Du råkar med din taxi köra på en parkerad personbil. Personbilsföraren är inte anträffbar. Vad måste du göra enligt lag?",
    options: [
      "Kontakta parkeringsbolaget",
      "Kontakta taxiväxeln",
      "Invänta personbilsföraren",
      "Kontakta polisen",
      "Kontakta försäkringsbolaget",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-3-q21",
    text: "Vilken vikt förändras när du tar upp passagerare i din taxibil?",
    options: ["Maximilasten", "Totalvikten", "Bruttovikten", "Tjänstevikten"],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-3-q22",
    text: "I vilket fall krävs behörighet BE för att få köra den här fordonskombinationen?",
    questionImage: paidLagstiftning3BilSlapeBeScenario,
    options: [
      "Bilens tjänstevikt är 1100 kg och släpets totalvikt är 1200 kg",
      "Bilens tjänstevikt är 1000 kg och släpets totalvikt är 900 kg",
      "Så snart släpvagnen totalvikt överstiger 750 kg",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-3-q23",
    text: "Din kund bor vid den här gatan. Får du köra in på den med din taxi för att lämna av kunden vid bostaden?",
    questionImage: paidLagstiftning3GenomfartE4VagmarkeScenario,
    options: [
      "Ja, men endast om jag kör i gångfart",
      "Ja, eftersom förbudet endast gäller om jag ska köra rakt igenom till E4 utan uppehåll",
      "Nej, enbart gående och cyklister får passera vägmärket",
      "Nej, enbart gående och cyklister får passera vägmärket",
      "Ja, men efter att ha lämnat kunden måste jag köra ut på E4",
      "Ja, eftersom taxibilar har särskilt tillstånd i detta fall",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-3-q24",
    text: "Får du under ditt körpass vid något tillfälle köra med taxametern avstängd?",
    options: [
      "Nej, taxametern måste alltid vara påslagen",
      "Ja, när jag kör färdtjänst",
      "Ja, när jag inte har någon kund i bilen",
      "Ja, när jag kör en körning till fast pris",
      "Ja, när jag kör skolskjuts",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-3-q25",
    text: "Vad anger de gula vägmarkeringarna?",
    questionImage: paidLagstiftning3GulaVagmarkeringarScenario,
    options: [
      "Förbud att parkera",
      "Förbud att stanna och parkera",
      "Förbud att köra på den gula heldragna linjen",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-3-q26",
    text: "Får du stanna med din taxi bredvid en parkerad bil för att släppa av passagerare?",
    questionImage: paidLagstiftning3TaxiParkeradBilScenario,
    options: [
      "Nej, det är inte tillåtet med två stillastående fordon i bredd",
      "Ja, men endast om det är minst 3 meter mellan taxin och gatans mitt",
      "Ja, om det inte hindrar eller stör övrig trafik",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-3-q27",
    text: "Du är anställd som taxiförare och din tidbok är fulltecknad. Vad ska du göra med tidboken?",
    options: [
      "Jag lämnar den till den arbetsgivare som jag har fått boken från. Därefter börjar jag på nästa tidbok",
      "Jag har den med mig i bilen tre arbetsdagar. Därefter lämnar jag den till arbetsgivaren",
      "Jag har den med i bilen en vecka. Därefter lämnar jag den till den arbetsgivare som jag har fått boken från",
      "Jag behåller den i ett år för att kunna lämna den till arbetsgivaren om denne begär det",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-3-q28",
    text: "Får du köra om en cykel före ett obevakat övergångsställe?",
    options: ["Ja", "Nej"],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-3-q29",
    text: "Vilket alternativ anger två uppgifter som alltid ska finnas med på ett taxikvitto?",
    options: [
      "Fordonets yrkestrafiknummer inkört belopp under körpasset",
      "Framkörningsavgiften och beställningscentralens namn",
      "Tidpunkten då köruppdraget påbörjats och avslutas",
      "Antalet registrerade körningar under körpasset och taxiföretagets telefonnummer",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-3-q30",
    text: "Vad innebär det inringade vägmärket?",
    options: [
      "Trafiken på bron är enkelriktad",
      "Endast ett fordon i taget får vistas på bron",
      "Jag ska lämna företräde till mötande trafik om utrymmet inte räcker till för möte",
      "Mötande trafik ska lämna mig företräde om utrymmet inte räcker till för möte",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-3-q31",
    text: "Du kör taxi och ska lämna av två färdtjänstkunder vid ett hotell. Får du köra in på den här gatan?",
    questionImage: paidLagstiftning3GataFardtjanstHotellScenario,
    options: [
      "Ja, men enbart om hotellet ligger gågatan",
      "Ja, all fordonstrafik är tillåten, även genomgående trafik",
      "Nej, endast utryckningsfordon får köra på gågatan",
      "Nej, all fordonstrafik är förbjuden",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-3-q32",
    text: "Vilka personer brukar gå över på övergångsstället, enligt tilläggstavlan?",
    questionImage: paidLagstiftning3OvergangsstalleTillaggstavlaScenario,
    options: [
      "Personer med nedsatt rörelseförmåga",
      "Personer med nedsatt hörsel",
      "Personer med nedsatt syn",
      "Äldre trafikanter",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-3-q33",
    text: "Har du väjningsplikt mot trafik från höger i någon av korsningarna?",
    questionImage: paidLagstiftning3KorsningAbVajningspliktHogerScenario,
    options: [
      "Ja men enbart i korsning A",
      "Ja, men enbart i korsning B",
      "Ja, i både korsningarna",
      "Nej",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-3-q34",
    text: "Vid vilken av dessa tidpunkter gäller förbudet att parkera?",
    questionImage: paidLagstiftning3ForbudParkeringTiderScenario,
    options: [
      "Torsdag kl. 18.00",
      "Lördag kl. 12.00",
      "Söndag kl. 12.00",
      "Söndag kl. 18.00",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-3-q35",
    text: "Vem ansvarar för att en taxi som används vid skolskjutsning har rätt utrustning?",
    options: [
      "Föraren och skolstyrelsen",
      "Föraren och tillståndshavaren",
      "Enbart föraren",
      "Skolstyrelsen och tillståndshavaren",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-3-q36",
    text: "Du ska börja köra taxi igen efter två veckors ledighet. Hur ska du ange dygnsvilan i tidboken före körningen?",
    options: [
      "Jag anger dygnsvila för det närmast föregående dygnet",
      "Jag anger dygnsvila för de sju närmast föregående dygnen",
      "Jag anger dygnsvila för de åtta närmaste föregående dygnen",
      "Jag anger dygnsvila för hela ledigheten",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-3-q37",
    text: "Vilken av följande transporter omfattas av vilotidsbestämmelserna för vissa vägtransporter inom landet?",
    options: [
      "Godstransport med en lastbil med totalvikt över 3,5 ton",
      "Skolskjuts med en bil som är registrerad som buss",
      "Skolskjuts med en bil som är registrerad som personbil",
    ],
    correctIndex: 2,
  },
  {
    id: "paid-lagstiftning-3-q38",
    text: "Hur lång tid får det högst vara mellan besiktningarna av en taxameter?",
    options: ["6 månader", "12 månader", "18 månader", "24 månader"],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-3-q39",
    text: "Vem ansvarar normalt för att ett 14-årigt barn använder bilbälte vid skolskjutsning i taxibil?",
    options: [
      "Skolpersonal om det finns sådan med i bilen",
      "Föraren",
      "Barnet själv",
      "Barnets föräldrar om de finns med i bilen",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-3-q40",
    text: "Du kör i taxitrafik och kommer fram till en vägfärja där andra fordon väntar i kö. Har du förtur till färjan?",
    questionImage: paidLagstiftning3VagfarjaKoScenario,
    options: [
      "Nej, det är enbart utryckningsfordon som har förtur",
      "Ja, eftersom jag kör taxi",
      "Nej, det är enbart de som har ett särskilt medgivande om det som har förtur. t.ex. öbor",
      "Ja, men enbart om jag har en kund i bilen",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-3-q41",
    text: "Får du stanna din taxi framför infarten till en fastighet för att ta upp passagerare?",
    options: [
      "Ja, men endast om passageraren är rörelsehindrad",
      "Ja, men endast om det är minst 3 meter mellan bilen och gatans mitt",
      "Nej, det är förbjudet att stanna framför en infart",
      "Ja, men endast om det inte hindrar övrig trafik",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-3-q42",
    text: "Var kan vägkontroll av taxametern ske?",
    options: [
      "Enbart på vägen, när jag kör A taxitrafik",
      "Både vid taxiföretages lokaler och på vägen när jag kör taxitrafik",
      "Enbart på vägen, när jag kör i taxitrafik, förutsatt att jag inte har någon kund i bilen",
      "Enbart vid taxiföretagets lokaler",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-3-q43",
    text: "Du har kört taxi från kl. 05.00 den 24 september. Kl. 09.00 får du besked om en körning som börjar kl. 09.15 och beräknas ta 3 timmar. Kan du ta körningen med tanke på den vilotid du har haft enligt tidboksbladet?",
    questionImage: paidLagstiftning3TidboksbladVilotidSept24Scenario,
    options: [
      "Ja",
      "Nej, det saknas 1 timmas vilotid",
      "Nej, det saknas 2 timmars vilotid",
      "Nej, det saknas 3 timmars vilotid",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-3-q44",
    text: "Hur lång tid får du som längst köra taxi under en 24-timmarsperiod?",
    options: ["8 timmar", "11 timmar", "12 timmar", "13 timmar"],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-3-q45",
    text: "Efter ett dygnsvila kör du taxi från kl. 12.00. Du har gjort uppehåll i arbetet mellan kl. 19.00 och kl. 22.00 då du får en långkörning till Stockholm. Den tar precis 6 timmar utan paus och lika lång tid tillbaka. När får du tidigast starta hemfärden från Stockholm?",
    options: ["Kl. 10.00", "Kl. 12.00", "Kl. 14.00", "Kl. 16.00", "Kl. 19.00"],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-3-q46",
    text: "Du har tappat bort din taxiförarlegitimation. Vad gäller?",
    options: [
      "Jag får köra taxi utan legitimation så snart jag anmält förlusten till vägverket",
      "Jag får köra taxi utan legitimation så snart jag anmält förlusten till länsstyrelsen",
      "Jag får köra taxi utan legitimation men högst i åtta veckor",
      "Jag får köra taxi om jag har med mig en kopia av legitimationen som jag fått från vägverket.",
    ],
    correctIndex: 3,
  },
  {
    id: "paid-lagstiftning-3-q47",
    text: "Taxiföraren har stannat för att vänta på en kund. Är det tillåtet?",
    questionImage: paidLagstiftning3TaxiStannaVantaAbScenario,
    options: [
      "Nej, inte i någon av situationerna",
      "Ja, i situation B",
      "Ja, i både situationerna",
      "Ja, i situation A",
    ],
    correctIndex: 0,
  },
  {
    id: "paid-lagstiftning-3-q48",
    text: "Vilka av dessa fall anses som yrkesmässig trafik?",
    options: [
      "När jag skjutsar en person på motorcykel mot betalning",
      "När ett företag betalar mig för att transportera gods med min taxi",
      "När jag använder min taxi utan ersättning för att hjälpa en idrottsförening",
      "När jag använder min taxi privat för att köra mina egna barn till skolan",
    ],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-3-q49",
    text: "Vilket vägmärke används på huvudled för att varna för en farlig korsning?",
    questionImage: paidLagstiftning3VarningsmarkeHuvudledKorsningAbcScenario,
    options: ["Vägmärke A", "Vägmärke B", "Vägmärke C"],
    correctIndex: 1,
  },
  {
    id: "paid-lagstiftning-3-q50",
    text: "Vilka har rätt att plombera taxametern?",
    options: [
      "Verkstäder som är ackrediterade av SWEDAC",
      "Alla märkesverkstäder",
      "Vägverket",
      "Svensk Bilprovning",
    ],
    correctIndex: 0,
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
        section("paid-sakerhet-2", "Säkerhet 2", paidSakerhet2Questions),
        section("paid-sakerhet-3", "Säkerhet 3", paidSakerhet3Questions),
      ],
    },
    {
      id: "paid-lagstiftning",
      name: "Lagstiftning",
      sections: [
        section("paid-lagstiftning-1", "Lagstiftning 1", paidLagstiftning1Questions),
        section("paid-lagstiftning-2", "Lagstiftning 2", paidLagstiftning2Questions),
        section("paid-lagstiftning-3", "Lagstiftning 3", paidLagstiftning3Questions),
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
