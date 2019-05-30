# Opłata Stabilnościowa

## Czym jest Opłata Stabilnościowa?

Inteligentne kontrakty Makera pobierają Opłatę Stabilnościową obliczaną względem całkowitej ilości DAI pobieranego w zamian za zabezpieczenie finansowe zablokowane w danym CDP. Opłata ta jest zmienna i może ulec modyfikacji, w zależności od tego, w jaki sposób posiadacze tokena MKR zagłosują na propozycje przedstawiane przez Zespół Ryzyka Tymczasowego MakerDAO.

## Kiedy muszę uiścić Opłatę Stabilnościową?

W momencie, w którym spłacasz dług poprzez zwrot DAI do CDP pobrana zostanie należna opłata _proporcjonalna do ilości zwracanego DAI_. Opłata może zostać zapłacona w tokenie MKR lub dai.

## Czy muszę dokonywać nowych opłat na starych zadłużeniach?

Nie. Opłaty Stabilnościowe nigdy nie są naliczane wstecz. Jeśli opłata ulegnie zmianie, będzie ona naliczana według nowej stawki, lecz dopiero od danego momentu, podobnie jak w przypadku oprocentowania pożyczek o zmiennej stopie procentowej.

## Jaki jest cel Opłaty Stabilnościowej?

Opłata Stabilnościowa jest Czynnikiem Ryzyka stworzonym w celu rozwiązania problemu braku równowagi pomiędzy podażą a popytem na token dai, która może pojawić się w okresach niskiego lub ujemnego wzrostu na rynkach kryptowalut.

Mechanizm stojący za tą opłatą jest prosty; wraz ze _spadkiem_ popytu na dai, opłaty związane z emitowaniem nowych dai _wzrosną_, natomiast odwrotna rzecz wydarzy się, gdy popyt na rynku będzie rósł. Takie równoważenie wpływa na korzyści dla posiadaczy CDP powiązane z emitowaniem oraz niszczeniem dai i może mieć efekt stabilizujący na powiązanie o płynnym charakterze (soft-peg).

## Dlaczego Opłata Stabilnościowa ulega zmianie?

Gdy dai przez dłuższy czas wyceniane jest powyżej lub poniżej docelowej ceny 1 USD, może sygnalizować to brak równowagi pomiędzy podażą i popytem na dai. Wysokość Opłaty Stabilnościowej wpływa przede wszystkim na podaż dai, ponieważ decyduje o koszcie tworzenia dai. Im tańsze jest pożyczanie dai, dla tym większej liczby użytkowników będzie to korzystne. I odwrotnie, gdy opłata rośnie, mniej użytkowników będzie chciało pożyczać dai. Posiadacze tokenów MKR są w stanie regulować ten parametr, aby zachować pożądaną wartość powiązania z pieniądzem fiducjarnym.

Gdy dai przed dłuższy czas wyceniane jest powyżej 1 USD, oznacza to, że popyt przewyższa podaż, a uczestnicy rynku skłonni są zapłacić więcej za zakup dai. Jeśli trwa to zbyt długo, oznacza to, że konieczne jest obniżenie Opłaty Stabilnościowej w celu zachęcenia do tworzenia większej liczby dai.

Gdy dai przez dłuższy czas wyceniane jest poniżej 1 USD, oznacza to, że podaż przewyższa popyt i rynek zalewany jest przez zbyt dużą ilość dai. Jeśłi trwa to zbyt długo, oznacza to, że Opłata Stabilnościowa musi zostać podniesiona w celu spowolnienia procesu tworzenia nowych dai.

Niestety, nie jest możliwe dokładne przewidzenie wpływu zmiany opłaty przed jej wdrożeniem, ponieważ rezultaty są w pełni zależne od reakcji rynku. Wraz z upływem czasu dostępna będzie coraz większa liczba danych, która może pozwolić na zbudowanie odpowiedniego modelu predykcyjnego lub nawet jeszcze lepiej dopracowanego modelu reaktywnego, który pomoże dostroić kwestie związane z Opłatą Stabilnościową.

## W jaki sposób Opłata Stabilnościowa jest obliczana?

Opłata Stabilnościowa wyliczana jest w sposób _ciągły_. Może być wyrażana w DAI lub MKR. Jak widać w poniższych wzorach, odnosi się to do naliczania dokonywanego w niewielkich przyrostach, a nie w tygodniach, miesiącach i latach. W rezultacie powstaje opłata, która jest bardzo bliska temu, czego można by oczekiwać przy składkach rocznych. Format ten został wybrany ze względu na to, że poszczególne CDP charakteryzują się różnym czasem trwania. Ponieważ nie ma minimalnych ograniczeń dotyczących czasu, przez jakiś CDP musi pozostawać otwarty, ważne jest, aby system jak najskuteczniej śledził bardzo małe przyrosty.

Przyjrzyjmy się wynikom rozmaitych podejść do struktur składek, przy założeniu, że dług w wysokości 100 000 DAI zaciągnięty został na okres 365 dni.

#### Wzory:

Gdzie:

**A** = odsetki

**P** = główna kwota inwestycji (początkowy depozyt lub kwota pożyczki)

**r** = roczna stopa procentowa (liczba dziesiętna)

**n** = ile razy w ciągu roku naliczana jest odsetkar

**t** = liczba lat, na jaką pieniądze są inwestowane lub pożyczane

**e** = [liczba Eulera](https://www.mathsisfun.com/numbers/e-eulers-number.html)

* **P** \(1 + r/n\)^nt - P = A: składki roczne
* **P** \(1 + r/n\)^nt - P = A: składki miesięczne
* **P** \(e\)^rt - P = A: składki ciągłe

#### W uproszczeniu

Przy obliczaniu ze składką roczną, Opłata Stabilnościowa wynosi:

```text
100,000 × (1 + (12.5% / 1)) ^ (1 × 1) - 100,000 = 12,500 DAI
```

Przy obliczaniu ze składką miesięczną, Opłata Stabilnościowa wynosi:

```text
100,000 × (1 + (12.5% / 12)) ^  (12 × 1)  - 100,000 = 13,241.60 DAI
```

Przy obliczaniu ze składką ciągłą, Opłata Stabilnościowa wynosi:

```text
100,000 × 2.7183... ^ (12.5% × 1) - 100,000 = 13,314.94 DAI
```

Różnica pomiędzy roczną a ciągłą składką przy długu 100 000 DAI i oprocentowaniu RRSO 12,5% wynosi około **814,94 DAI**. Przyjrzyjmy się kilku innym przykładom obrazującym, w jaki sposób opłata może być naliczana w praktyce.

### Prosty przykład

Przy założeniu że:

* Istnieje CDP z długiem **1000** **DAI**
* CDP był otwarty przez **30** **dni**
* Obecna wartość tokena MKR wynosi  **1000** **DAI**
* Obecna wartość tokena MKR wynosi  **5%**
* Użytkownik spłaca część długu w postaci **50** **DAI**

Całkowity koszt wyrażony w dai przy spłacie **50 DAI** na poczet **1000 DAI** długu trwającego **30 dni** wynosi **0.208 DAI**, czyli około 21 centów.

Dług wyrażony w dai musi zostać teraz przeliczony do postaci tokena MKR w celu dokonania płatności. Właściciel CDP jest dłużny 0.00021 MKR.

### Bardziej szczegółowy przykład.

Całkowita Opłata Stabilnościowa naliczona w CDP może być obliczona w następujący sposób:

> \(\(\(pożyczone DAI \* \(1 + obecna Opłata Stabilnościowa w formacie dziesiętnym\)\) ^ \(wiek długu w dniach/365\)\) - pożyczone DAI \) = łączna Opłata Stabilnościowa należna w DAI

Jeśli uwzględnimy wartości, których użyliśmy już powyżej, zobaczymy następujące opłaty w DAI:

```text
(1000 * (1 + 0.05) ^ (30÷365)) - 1000 = 4.018 DAI
```

Teraz, gdy ustaliliśmy już całkowitą opłątę w DAI, możemy przekonwertować tę wartość do MKR. Przy założeniu, że kurs giełdowy 1 MKR wynosi 1000 DAI:

```text
4.018 ÷ 1000 = 0.004018 MKR
```

A ponieważ użytkownik spłaca 50 DAI, będzie musiał uiścić opłatę naliczoną dla tej wartości:

```text
(50 * (1 + 0.05) ^ (30÷365)) - 50 = 0.2009 DAI
```

Co po przekonwertowaniu do MKR ma postać:

```text
0.2009 ÷ 1000 = 0.0002009 MKR
```

Użytkownik będzie potrzebował **0.0002009 MKR** w swoim portfelu, by pokryć naliczoną opłatę za **50 DAI** na **30 dni**.

Po ukończeniu transakcji, całkowita liczba opłat dla danego CDP będzie prezentowała się następująco:


0.004018 - 0.0002009 = **0.0038171 MKR**

## Co system robi z pobranymi opłatami?

Gdy opłaty zostaną zebrane, platforma zbudowana w oparciu o inteligentne kontrakty przesyła MKR do kontraktu nazywanego [Burnerem](https://etherscan.io/token/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2) (od słowa „burn”, czyli „płonąć”, oznaczającego również niszczenie monet).

Każdy token MKR trafiający do portfela Burnera nim zostanie spalony zostaje permanentie usunięty z obiegu, ponieważ nikt nie jest w stanie wydobyć środków z tego adresu.

## Gdzie mogę sprawdzić dotychczas naliczone Opłaty Stabilnościowe?

[W Poprzednim Panelu CDP (Old CDP Dashboard):](https://dai.makerdao.com/): Saldo należne za CDP widoczne jest w kolumnie „Governance Debt” w Panelu DAI.

[W Nowym Portalu CDP (New CDP Portal)](https://cdp.makerdao.com/): W Nowym Portalu CDP (New CDP Portal): 

W Nowym Portalu CDP (New CDP Portal): [Watch your Dai](https://github.com/makerdao/awesome-makerdao/blob/master/README.md#watch-your-dai) repozytorium Niesamowitego-MakerDAO.

## W jaki sposób opłaty kształtują podaż i popyt?

Zwiększenie Opłaty Stabilnościowej przekłada się na większy koszt pożyczania CDP przez użytkowników, czyniąc korzystanie z CDP mniej atrakcyjnym. I analogicznie, obniżenie Opłaty Stabilnościowej (kosztu pożyczki) zachęca do tworzenia dodatkowych dai, realizując politykę zwiększania podaży.

## W jaki sposób obliczyć wpływ zmienności Opłat Stabilnościowych?

Możesz użyć tego uproszczonego wzoru w celu określenia należnych Opłat Stabilnościowych:

> \(\(pożyczone DAI \* \(1 + obecna Opłata Stabilnościowa w formacie dziesiętnym)\) ^ \(wiek długu w dniach/365\)\) - pożyczone DAI\) = łączna Opłata Stabilnościowa należna w DAI

Opłaty na dług w wysokości 10 000 DAI na okres 31 dni przy 5,0%:

```text
(10000 x (2.7183...) ^ (5.0%*(31/365)) - 10000 = 42.474 DAI
```

Oraz przy 10,0%:

```text
(10000 x (2.7183...) ^ (10.0%*(31/365)) - 10000 = 85.2937 DAI
```

## W jaki sposób mogę dowiedzieć się więcej na temat Zespołów Ryzyka oraz skontaktować się z fundacją w związku z obecnymi oraz przyszłymi zmianami w systemie?

Rozważ dołączenie do naszych cotygodniowych spotkań [Governance and Risk](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles) podczas których szczegółowo dyskutujemy na temat tych spraw. Harmonogramy spotkań publikowane są regularnie na  [r/MakerDAO](https://www.reddit.com/r/MakerDAO/). Sprawdź również sekcję [Governance](https://github.com/makerdao/awesome-makerdao/blob/master/README.md#governance) (zarządzanie) w repozytorium NiesamowitegoMakerDAO.

## Czy istnieje limit w zakresie tego, jak bardzo Opłaty Stabilnościowe mogą ulegać zmianie?

Zespół Ryzyka zaproponuje progi, zgodnie z którymi Opłata Stabilnościowa może ulegać zmianie (tempo zmian w czasie, odchylenie od pożądanej wartości powiązania, czasy próbkowania) i przedstawi je do zatwierdzenia głosującym w Makerze.

## Czy właściciele CDP mogą zapobiegać ryzyku związanemu ze zmianą opłat?

Jest szereg możliwości, którym użytkownicy mogą się przyjrzeć w celu zabezpieczenia się przed opłatami.

Zapotrzebowanie na MKR może być dodatnio skorelowane ze wzrostem Opłaty Stabilnościowej. Jeśli ten związek występuje i ma trwały charakter, posiadacze CDP mogą zechcieć przynajmniej częściowo zabezpieczyć się przed opłatami poprzez trzymanie tokenów MKR.

Użytkownicy poszukujący pożyczek na czas określony oraz o stałym oprocentowaniu mogą zabezpieczyć się przed ewentualnymi przyszłymi wahaniami opłat poprzez znalezienie kontrahenta, który zechce zawrzeć pożyczkę na czas określony na innych platformach kredytowych.

Najlepszą strategią zarządzania ryzykiem jest jednak zaangażowanie się w proces zarządzania i upewnienie się, że oddajemy głos w momencie, w którym propozycje są poddawane głosowaniu.

## Co się dzieje, gdy gdy zmiana opłaty zostanie odrzucona w głosowaniu?

Jeśli zmiana stopy procentowej nie zostanie przegłosowana, może to zaowocować spadkiem ceny dai, jeśli nierównowaga nadal będzie się utrzymywać. Jeśli stan ten będzie trwał, Fundacja może zdecydować się na uruchomienie Wyłączenia Awaryjnego (Emergency Shutdown), aby zapewnić bezpieczeństwo ekonomiczne posiadaczy dai.

Mechanizm głosowania jest podstawowym sposobem, w jaki społeczność może zarządzać wartością powiązania (peg) poprzez dostrajanie działania narzędzi by pozostawały w zgodzie z ustaloną polityką. Nie ma „tylnych drzwi", nikt nie jest w stanie jednostronnie zmodyfikować Parametrów Ryzyka w systemie.

## Jak często Opłata Stabilnościowa może ulegać zmianie?

Nie da się zaplanować ani przewidzieć, kiedy opłata powinno zostać zmieniona i jakie powinny być nowe stawki.

Zespół Ryzyka Tymczasowego stale monitoruje rezultaty dotychczasowych zmian i w razie potrzeby może zaproponować zmiany o podobnej lub większej wielkości. Trudno powiedzieć, jak szybko i w jakim stopniu rynek zareaguje, i z tego powodu Zespół Ryzyka podchodzi do każdego dostosowania w sposób indywidualny.

Ze względu na ryzyko manipulacji, zawsze będzie istniała konieczność pewnej rozwagi oraz przetwarzanie dostępnych sygnałów w celu ustalenia, w jaki sposób Opłaty Stabilnościowe powinny zostać skorygowane. W pełni automatyczne, oparte o algorytmy procesy podatne są na manipulacje i muszą zostać w bardzo staranny sposób przemyślane.