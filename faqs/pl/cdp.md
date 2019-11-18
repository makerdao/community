# Pozycje Długu z Zabezpieczeniem (CDP)

## Czym są Pozycje Długu z Zabezpieczeniem?

W MakerDAO Zabezpieczoną Pozycją Długu, czy też Pozycją Długu z Zabezpieczeniem (_Collateralized Debt Position_, CDP) nazywamy rodzaj pożyczki zarządzanej przez system inteligentnych kontraktów działający na blockchainie Ethereum. CDP jest podstawowym składnikiem Systemu Stablecoina Dai, który ułatwia tworzenie dai w oparciu o powierzone zabezpieczenie finansowe, które jest zatrzymywane jako zastaw do czasu zwrotu tak wygenerowanego dai.

Wykorzystywanie CDP wpływa na całkowitą podaż dai, tworząc je w oparciu o zabezpieczenie finansowe i niszcząc, gdy dług zostanie spłacony. Proces ten ma miejsce na blockchainie, co pozwala na pełną audytowalność dai będących w obiegu oraz zabezpieczenia finansowego leżącego u jego podstawy.

CDP muszą być zabezpieczone z nawiązką. Wartość zabezpieczenia finansowego w CDP musi być wyższa niż kwota długu, co gwarantuje użytkownikom, że ich dai posiada odpowiednią wartość i jest zabezpieczone istniejącymi aktywami.

## W jaki sposób działają CDP?

Użytkownik, który zechce pobrać dai, musi dokonać depozytu ETH do CDP. Po zdeponowaniu może wygenerować dai w ilości proporcjonalnej do zdeponowanej kwoty. Tak długo, jak długo posiadacz CDP zachowuje minimalny [Współczynnik Zabezpieczenia](cdp.md#czym-jest-współczynnik-zabezpieczenia-collateralization-ratio), może swobodnie wypłacać i deponować nadmiarowe zabezpieczenie.

Po wygenerowaniu dai, posiadacze CDP mogą zrobić z nim co tylko zechcą. W momencie, w którym zapragną odzyskać całość zdeponowanego zabezpieczenia finansowego, będą musieli spłacić całą kwotę pobranego dai.

Ten cykl pożyczek/spłat oraz dodawania/odejmowania zabezpieczenia może trwać tak długo, jak długo właściciel CDP zechce zachować swoją pozycję otwartą. Użytkownicy mogą zamykać swoje CDP poprzez spłacanie długu oraz związanych z nim odsetek w całości.

## Kto może otworzyć CDP?

CDP nie wymagają specjalnych uprawnień. Każdy może je stworzyć i ich używać. Nie ma wymagań związanych z historią zadłużenie ani uciążliwego procesu ubiegania się o pożyczkę. System nie jest kontrolowany przez stojące na straży osoby ani przez pośredników. CDP Makera początkowo przypisane jest do konta Ethereum, które je utworzyło, ale po utworzeniu może być swobodnie przenoszone pomiędzy portfelami.

## Czy CDP wiąże się z jakimiś opłatami?

Tak. Właściciele CDP płacą za zaciągnięty dług opłatę, obliczaną na podstawie Opłaty Stabilizacyjnej. Jest to [efektywna roczna stopa oprocentowania (_APY_)](https://mfiles.pl/pl/index.php/Efektywna_roczna_stopa_procentowa).

Jeśli CDP stanie się niedostatecznie zabezpieczony lub wartość zastawu będzie niebezpiecznie niska, może zostać zlikwidowany, a jego aktywa zostaną w sposób autonomiczny zarekwirowane przez System Maker, a następnie sprzedane w celu pokrycia zadłużenia. Wiąże się to z nałożeniem Kary Likwidacyjnej.

## Czym jest Współczynnik Zabezpieczenia (Collateralization Ratio)?

Współczynnik Zabezpieczenia jest stosunkiem wartości zastawu, jakie użytkownik zdeponował w danym CDP i ilości DAI, jaką pobrał.

Przykładowo: Powiedzmy, że ether zdeponowany w CDP jest warty obecnie 150 USD, a pożyczone zostało 50 DAI. Oznacza to, że współczynnik zabezpieczenia wynosi 300%. Dla każdego 1 dai wartość zabezpieczenia to 3 USD. W Systemie Makera CDP może zostać zlikwidowane, jeśli spadnie poniżej [Współczynnika Likwidacji](https://github.com/makerdao/community/blob/master/faqs/liquidation.md#what-is-the-liquidation-ratio), który jest równy minimalnemu Współczynnikowi Zabezpieczenia.

## Jakiego rodzaju ryzyko wiąże się z posiadaniem CDP?

Posiadanie CDP jest z natury ryzykowne. Istnieją cztery główne kategorie rodzajów ryzyka warte rozważenia w kontekście użytkowania CDP – ryzyko związane z rynkiem, ryzyko związane z użytkowaniem, ryzyko systemowe oraz ryzyko związane ze zmiennością parametrów.

- **Ryzyko związane z rynkiem:** Używanie CDP związane jest z zaciągnięciem długu i przekazaniem własności aktywów na rzecz inteligentnego kontraktu, który może sprzedać te aktywa w przypadku pogorszenia się koniunktury na rynku. Każde zadłużone CDP ma obliczoną Cenę Likwidacyjną. Jeśli cena danego aktywa spadniej poniżej tej ceny, CDP ulega likwidacji. Używanie CDP do [dźwigni](https://www.tms.pl/definicja/dzwignia-finansowa-lewar) wprowadza kolejną warstwę ryzyka. Potencjalna nagroda jest wyższa przy użyciu dźwigni, ale wraz z nią wzrasta ryzyko potencjalnej straty. Powszechną praktyką pośród użytkowników jest utrzymywanie wysokiego współczynnika zabezpieczenia w celu przygotowania się na ewentualne spadki na rynku – w celu uniknięcia likwidacji.
- **Ryzyko związane z użytkowaniem:** Istnieje ryzyko powiązane z błędami użytkownika. MakerDAO nie ma możliwości odwrócenia jakichkolwiek transakcji ani odzyskania środków wysłanych na nieprawidłowe adresy lub kontrakty.
- **Ryzyko systemowe:** Istnieje wiele potencjalnych zagrożeń dotyczących pomyślnego i ciągłego funkcjonowania Platformy Maker. Poniższa lista ma na celu zwrócenie uwagi na pewne ryzyka systemowe, ale nie obejmuje ich wszystkich:
  - Atak hakerski na infrastrukturę inteligentnych kontraktów
  - Zdarzenie typu „czarny łabędź” powiązane z jednym lub kilkoma rodzajami zabezpieczeń finansowych
  - Błędy związane z wyceną, irracjonalne i nieprzewidywalne okoliczności
  - Awaria scentralizowanej infrastruktury, np. połączeń internetowych, błędy MetaMaska itd.
- **Ryzyko związane ze zmiennością parametrów:** Warto zaznaczyć, że posiadacze CDP muszą liczy się ze zmianami parametrów ryzyka w systemie MakerDAO. Przekłada się to na ryzyko finansowe dla właścicieli CDP. Poniżej znajduje się niekompletna lista parametrów, które mogą ulegać zmianie:
  - Opłata Stabilizacyjna
  - Wskaźnik Likwidacji
  - Pułap Zadłużenia danego Typu Zabezpieczenia
  - Kara Likwidacyjna

## Jakie są dobre praktyki dotyczące ograniczania ryzyka?

Ryzyku rynkowemu można zapobiegać poprzez ustawianie powiadomień o cenach, zachowując wysoki Współczynnik Zabezpieczenia, regularnie monitorując stan CDP i trzymając odpowiednią ilość rezerw poza CDP, żeby w razie czego móc spłacić dług lub zwiększyć kwotę zabezpieczenia. Wiele osób ma tendencję do podejmowania przesadnie ryzykownych zakładów, co do kierunku w jakim będzie podążał rynek. Może to doprowadzić do likwidacji ich CDP i związanych z tym strat.

Ryzyko użytkowania może zostać złagodzone poprzez testy przy użyciu niewielkich kwot oraz poprzez dokładne sprawdzenie, z którymi adresami użytkownik wchodzi w interakcję.

## Jakie mogą być korzyści z posiadania CDP?

- **Elastyczne warunki spłaty:** Nie ma ograniczeń ani harmonogramów minimalnych spłat związanych z posiadaniem CDP. Użytkownicy mogą swobodnie pobierać dai i dokładać dodatkowe zabezpieczenia finansowe kiedy tylko zechcą.
- **Brak wymagań odnośnie historii kredytowej:** Nie ma wymogów odnośnie dotychczasowej historii pożyczek ani uciążliwego procesu aplikowania o pożyczkę. Każdy, kto ma adres Ethereum, może uzyskać dostęp do systemu.
- **Brak ryzyka kontrahenta:** System działa jako autonomiczny inteligentny kontrakt, użytkownicy mogą wchodzić w interakcję z przejrzystym systemem finansowym bez konieczności ufania jakimkolwiek podmiotom w zakresie zarządzania czy dostępu do środków. Wszystkie transakcje rejestrowane są w publicznym łańcuchu bloków i dostępne dla każdego do wglądu.
- **Zdecentralizowany handel z depozytami zabezpieczającymi:** Użytkownicy mogą zablokować swój ether, pobrać dai i zakupić więcej etheru w celu dodania go do swojej pierwotnej pozycji. Pozwala im to na wykorzystanie dźwigni finansowej.

## Dlaczego miałbym chcieć otworzyć CDP?

Istnieje szereg powodów, dla których można by chcieć skorzystać z CDP. Bazując na doświadczeniach użytkowników, zebraliśmy kilka przykładów poniżej:

- **Dźwignia finansowa:** użytkownik może podejrzewać, że wartość danego aktywa wkrótce wzrośnie na wartości, więc wykorzystuje część swojego zabezpieczenia w celu pobrania dai i nabycia wspomnianego aktywa. Za jakiś czas, gdy wartość danego aktywa wzrosła, może sprzedać je za więcej dai niż pierwotnie pobrał, dzięki czemu jest w stanie zwrócić pożyczkę, zachowując dla siebie różnicę.
- **Dźwignia finansowa:** użytkownik chce kupić samochód. Może dojść do wniosku, że tradycyjne możliwości finansowania nie oferują tak dobrych warunków lub kosztów, jakie można uzyskać przy pomocy CDP. Użytkownik może pobrać dai na rzecz swojego ETH, nabyć samochód i spłacać zadłużenie według ustalonego przez siebie harmonogramu.
- **Refinansowanie:** użytkownik może być dłużny pieniądze pożyczone na wysoki procent. Zamiast sprzedawać swoje aktywa w celu spłaty, może zdecydować się na pobranie dai na rzecz zadłużenia, przekształcenie dai w klasyczny pieniądz fiducjarny i spłacenie części lub pełnej kwoty bardziej kosztownego długu.

Ważne, by pamiętać, że tworząc CDP i pobierając dai, użytkownicy tworzą zadłużenie i podejmują ryzyko, np. związane z Opłatą Stabilnościową lub likwidacją.

## Czy są powody, dla których lepiej unikać otwierania CDP?

_Żaden_ fragment tego dokumentu nie ma charakteru porady inwestycyjnej, ale warto zaznaczyć, że istnieje szereg powodów, dla których warto unikać otwierania CDP.

Przykładowo, jeśli jesteś zainteresowany pozyskaniem stabilnej kryptowaluty, lecz niezaznajomiony z niuansami wchodzenia w interakcje z inteligentnymi kontraktami, nie powinieneś otwierać CDP. Zamiast tego bardziej typowym rozwiązaniem będzie zakup DAI na giełdzie.

Otwieranie CDP może również wiązać się z narażeniem na rozmaite rodzaje ryzyka, które w efekcie mogą doprowadzić do straty finansowej.

Jeśli wierzysz, że rynek wchodzi w okres długotrwałego spadku, możesz zechcieć na nowo oszacować, czy nie jest koniecznie bieżące zarządzanie CDP. Długo trwająca bessa może wymagać bezustannego dokładania zabezpieczenia do pozycji, aby zapewnić jej trwałość lub przygotowania dostępnych środków, które można wymienić je na dai w celu spłacania zaległego długu.

## Jaki rodzaj zabezpieczenia finansowego mogę stosować?

W przypadku dai o pojedynczym zabezpieczeniu (Single Collateral Dai) ether (ETH) jest jedynym dopuszczalnym typem zabezpieczenia finansowego. W kolejnej wersji systemu (Multi Collateral Dai) dopuszczalne będą różne rodzaje zabezpieczeń finansowych. Nowe typy zabezpieczeń będą ustalane przez posiadaczy tokena MKR w procesie zarządzania.

## Czy możliwe jest spłacenie dai z portfela giełdowego?

Nie, musisz wejść w interakcję z inteligentnym kontraktem w specjalny sposób, co może zostać osiągnięte wyłącznie za pośrednictwem stworzonej w tym celu strony internetowej lub poprzez bezpośrednią interakcję z inteligentnym kontraktem. Używanie czegokolwiek innego niż strona WWW lub innego portfela, niż ten który otworzył to CDP może mieć katastrofalne skutki, jeśli nie masz dogłębnej wiedzy na temat działania kontraktów obsługujących MakerDAO.

## Ile zabezpieczenia mogę maksymalnie wpłacić?

Nie ma ograniczeń w kwestii tego, jak duże zabezpieczenie może być użyte w CDP.

## Co dzieje się z airdropami, gdy mój ether zablokowany jest w CDP?

Wszystkie aktywa trzymane w systemie zarządzane są przez inteligentne kontrakty, które nie są w stanie śledzić, ani redystrybuować airdropowanych tokenów. Nie ma możliwości uzyskania dostępu do tokenów przesłanych na te adresy.

## Co jeśli zechcę użyć zdeponowanych środków w innym projekcie, mając jednocześnie otwarte CDP?

Po zablokowaniu zabezpieczenia finansowego używanie tych samych tokenów w innych smart kontraktach nie jest już możliwe. W przyszłości projekty mogą zdecydować się na tworzenie tokenów reprezentujących tokeny złożone w depozycie jako zabezpieczenie finansowe. Możliwe, że w przyszłości głosujący nad MakerDAO zdecydują się dopuścić tego typu tokeny jako zabezpieczenie finansowe.

## Czy muszę spłacić dai, jeśli moje zabezpieczenie zyska na wartości?

Użytkownicy muszą ręcznie spłacić cały swój dług, łącznie z [Opłatą Stabilizacyjną](stability-fee.md), jeśli chcą uwolnić całość swoich zabezpieczeń finansowych. System nie spłaca automatycznie Opłat Stabilizacyjnych na podstawie zabezpieczenia finansowego zdeponowanego w CDP, które w międzyczasie zyskało na wartości.

Wraz ze wzrostem wartości zabezpieczenia finansowego można wycofywać jego część, zachowując ten sam Współczynnik Zabezpieczenia. Zabezpieczenie powyżej minimalnego współczynnika zabezpieczenia może zostać wycofane, jednak spowoduje to wzrost Ceny Likwidacyjnej, zwiększając tym samym ryzyko. Jeśli wzrasta wartość Twojego zabezpieczenia, Twój Współczynnik Zabezpieczenia również rośnie.

## Czy mogę użyć tego samego CDP po tym, jak zostanie zlikwidowane?

Tak, tak długo, jak długo w CDP znajduje się zabezpieczenie finansowe, możesz pobierać z niego dai. Likwidacja nie zamyka CDP, można dodawać do niego zabezpieczenie i zaciągną kolejny dług.

## W jaki sposób mogę zweryfikować wypłacalność systemu CDP?

System działa na blockchainie Ethereum, więc wszystkie kontrakty i transakcje są publicznie dostępne. Użytkownicy mogą wchodzić w interakcję z całkowicie transparentnym systemem finansowym bez konieczności ufania kontrahentom. Każdy może samodzielnie sprawdzić wypłacalność systemu odwiedzając któryś z wielu [paneli ze statystykami MakerDAO](https://github.com/makerdao/awesome-makerdao/blob/master/README.md#watch-your-dai) lub poprzez przesłanie zapytania bezpośrednio do blockchaina.
