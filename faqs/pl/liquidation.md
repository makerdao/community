# Likwidacja

## Czym jest likwidacja?

CDP może zostać poddane likwidacji, jeśli zostanie uznane za niewystarczająco bezpieczne. Dzięki temu mamy gwarancję, że w systemie znajduje się odpowiednio duże zabezpieczenie finansowe, odpowiadające wartości stworzonych dai. Likwidacja następuje w momencie, w którym łączna zastawu danego CDP \(według osądu wyroczni\) jest warta mniej niż wymagany stopień zabezpieczenia dla danej klasy aktywów. Podczas procesu likwidacyjnego zarekwirowana zostaje ilość zabezpieczenia wystarczająca na pokrycie zadłużenia oraz opłat, pozostałe zabezpieczenie użytkownik może wypłacić.

## Dlaczego likwidacja istnieje?

Inaczej niż w przypadku pieniądza fiducjarnego, które utrzymują swoją wartość na mocy rozporządzeń rządowych, dai jest nowoczesnym i kryptograficznie bezpiecznym tzw. _pieniądzem z pokryciem_. Wszystkie dai będące w obiegu mają pokrycie w tokenach przechowywanych w inteligentnych kontraktach, co eliminuje problemy związane z zaufaniem oraz ryzyko kontrahenta. To właśnie ta pełna przejrzystość tworzy zaufanie użytkownika do systemu.

Aby mieć pewność, że wymagana nadwyżka zabezpieczenia finansowe bezustannie istnieje, pewna grupa użytkowników nazywana Opiekunami (_keepers_) jest zobowiązania do ciągłego obserwowania CDP, które mogą stać się niebezpieczne lub niewystarczająco zabezpieczone. Opiekunowie ci są specjalną kategorią użytkowników Systemu Stablecoina Dai. Są to podmioty działające w systemie, które są motywowane do upewniania się, że podaż dai pozostaje w pełni zabezpieczona oraz zachowująca wypłacalność. Pomagają utrzymać dobrą kondycję całego ekosystemu, kierując niewystarczająco zabezpieczone CDP do likwidacji tak szybko, jak tylko jest to możliwe. Jest to szczególnie ważne podczas gwałtownych spadków na rynku, ponieważ wówczas wartość zabezpieczenia finansowego może nie być w stanie pokryć zobowiązań związanych z zadłużeniem.

## Czym jest Współczynnik Likwidacji?

Każdy rodzaj zabezpieczenia finansowego ma swój własny współczynnik likwidacji, który jest określany na bazie profilu ryzyka przypisanego do tego konkretnego aktywa. Obecnie, jedynym dopuszczalnym typem zabezpieczenia jest ETH. Po uruchomieniu systemu w wersji Single Collateral Dai Zespół Ryzyka Makera dokonał oceny ryzyka związanego z aktywem, jakim jest ETH i ustalił wskaźnik likwidacji na poziomie 150%.

Zdecentralizowane wyrocznie dostarczają do systemu informacje na temat ceny ETH, umożliwiając obliczenie, kiedy współczynnik zabezpieczenia danego CDP spadł powyżej minimalnego poziomu wymaganego przez system.

Przykładowo, użytkownik może chcieć pobrać 200 DAI i sądzi, że wartość zabezpieczenia nie spadnie poniżej 50% bieżącej ceny rynkowej. Decyduje się więc na przynajmniej dwukrotność minimalnego progu zabezpieczenia. Ponieważ minimalne zabezpieczenie wynosi 150%, użytkownik wpłaca ETH warte 600 USD i pobiera 200 DAI, pozostawiając swoje CDP na 300% poziomie zabezpieczenia.

**Ważne, aby pamiętać, że 150% to najniższy punkt, w którym CDP bazujące na etherze wciąż uznawane jest za wystarczająco zabezpieczone i nie zostanie przekierowane do likwidacji przez Opiekunów.** Pozostawanie powyżej tego poziomu chroni zabezpieczenie finansowe użytkownika przed likwidacją.

## Czym jest cena likwidacji?

Dla danego aktywa, będącego zabezpieczeniem, jest to cena poniżej której CDP zostanie skierowane do likwidacji.

## Czym jest kara likwidacyjna?

Jest to opłata, która jest doliczana do całkowitego zadłużenia pozostałego do spłaty w przypadku, gdy dochodzi do likwidacji. Jest ona odejmowana od posiadanej kwoty zabezpieczenia CDP.

Wpływy z kar likwidacyjnych przekazywane są do puli PETH. Zwiększa to współczynnik WETH, które użytkownicy otrzymują, gdy usuwają swoje zabezpieczenie z CDP. Opłata ta zwiększa wartość puli zabezpieczeń w okresach, w których następuje wiele likwidacji, przykładowo z powodu wysokiej niestabilności rynku.

## Co dzieje się podczas likwidacji?

Likwidacja następuje, gdy Opiekun (_keeper_) zamyka CDP i przesyła je do kontraktu zapewniającego płynność (Liquidity Providing Contract, LPC), który z kolei oferuje aktywa z CDP na sprzedaż poprzez [panel Dai](https://dai.makerdao.com). Gdy zobowiązania względem długu zostaną uregulowane, niesprzedane PETH wraca do CDP właściciela.

Kolejność działań wygląda następująco:

- Określone CDP zostaje zamknięte.
- Kara likwidacyjna zostaje doliczona do długu DAI.
- LPC pobiera wystarczająco dużo PETH, żeby uregulować dług zgodnie z bieżącymi cenami dostarczanymi przez wyrocznie.
- Właściciel CDP może teraz usunąć swoje pozostałe zabezpieczenie z zamkniętej pozycji.
- Przechwycone PETH oferowane jest na sprzedaż na [dai.makerdao.com](http://dai.makerdao.com) z korzystną zniżką, zwaną spreadem Boom/Bust), doliczaną do wyceny.
- DAI uzyskane ze sprzedaży PETH zostaje zniszczone w celu zlikwidowania długu CDP.
- Jeśli po sprzedaży pozostaje nadwyżka DAI, jest ono sprzedawane za PETH, które jest następnie zniszczone, zwiększając wartość pozostałego PETH.
- Jeśli ilość DAI ze sprzedaży jest niewystarczająca, wówczas generowane jest PETH i oferowane na sprzedaż w celu pokrycia niedoboru. Powoduje to rozcieńczenie wartości całej puli.

## Jaka ilość zabezpieczenia jest pozostawiana po likwidacji?

Aby określić, jak dużo zabezpieczenia pozostanie po likwidacji, możesz użyć tego uproszczonego wzoru:

`(zabezpieczenie finansowe * cena wskazana przez wyrocznie * PETH/ETH Ratio) - (kara likwidacyjna * Dług Stabilnościowy) - Dług Stabilnościowy = (pozostałe zabezpieczenie * cena wskazana przez wyrocznie) DAI`

Zakładając, że:

- Cena jednego ETH wskazana przez wyrocznię to 350 USD
- Łączna liczba zablokowanego PETH to 10 ETH
- Współczynnik PETH/ETH to 1.012
- Kara likwidacyjna to 13%
- CDP ma Dług Stabilnościowy wynoszący 1000 DAI

`(10 × 350 × 1.012) − (13% × 1000) − 1000 = 2412 DAI or 6.891428571 ETH`

## W jaki sposób mogę obliczyć moją cenę likwidacji?

Możesz użyć następującego uproszczonego równania w celu określenia, jak znacznie musi spaść wartość zabezpieczenia finansowego, aby uruchomione zostało rozliczenie/likwidacja:

`(Dług Stabilnościowy * współczynnik likwidacyjny) / (zabezpieczenie * współczynnik PETH/ETH) = cena likwidacji`

Zakładając, że:

- Cena jednego ETH wynosi 350 USD
- Łączna liczba zablokowanego PETH to 12
- Współczynnik PETH/ETH to 1.012
- Współczynnik likwidacyjny wynosi 150%
- Dług Stabilnościowy to 1000 DAI

`(1000 × 1.5) ÷ (12 × 1.012) = 123.51 USD`

Cena ETH musiałaby spaść do 123.51 USD, zanim CDP zostałoby uznane za niewystarczająco bezpieczne i zagrożone ryzykiem likwidacji.

## W jaki sposób mogę obliczyć swój współczynnik zabezpieczenia?

Jeśli wolisz określić kondycję swojej pozycji poprzez sprawdzenie współczynnika zabezpieczenia względem długu, zamiast ceny likwidacji, możesz użyć następującego uproszczonego wzoru:

`(zablokowane PETH × cena ETH × współczynnik PETH/ETH) ÷ Dług Stabilnościowy × 100 = współczynnik zabezpieczenia

Zakładając, że:

- Cena jednego ETH wynosi 350 USD
- Łączna liczba zablokowanego PETH to 12
- Współczynnik PETH/ETH to is 1.012
- Kara likwidacyjna to 1000 DAI

`(12 × 350 × 1.012) ÷ 1000 × 100 = 425.04%`

Współczynnik zabezpieczenia CDP wynosi 425.04%.

## W jaki sposób mogę obniżyć swoją cenę likwidacji?

Głównym wyzwaniem, z jakim musza mierzyć się posiadacze CDP jest utrzymywanie bezpiecznej pozycji z dźwignią na wysoce nieprzewidywalnym rynku. Jeśli Twoje CDP bliskie jest ceny likwidacji, możesz albo dodać dodatkowe zabezpieczenie finansowe, albo zwrócić DAI, by zmniejszyć to ryzyko.

Wybór opcji zależy od długoterminowych celów. Jeśli mocno wierzysz, że w przyszłości wartość Twojego zabezpieczenia wzrośnie, możesz zdecydować się dołożyć więcej do swojej pozycji. Alternatywnie jeśli chcesz obniżyć swoją podatność na zmienność cen, możesz spłacić swój dług poprzez zwrot DAI do swojego CDP.

Najlepszym sposobem obniżenia ryzyka jest zwrot DAI, ponieważ obniża ono cenę likwidacji znacznie skuteczniej. Idzie z tym również dodatkowa korzyść polegająca na zmniejszeniu opłat stabilizacyjnych doliczanych do Twojej otwartej pozycji.

Zakładając, że:

- Cena jednego ETH wynosi 350 USD
- Łączna liczba zablokowanego PETH to 12
- Współczynnik PETH/ETH to 1.012
- Kara likwidacyjna to 150%
- Dług Stabilizacyjny to 1000 DAI

Obecna cena likwidacji

`(1000 × 1.5 ) ÷ (12 × 1.012) = 123.51 USD`

Zmiana ceny likwidacji poprzez **dodanie** 700 USD zabezpieczenia:

`(1000 × 1.5 ) ÷ (14 × 1.012) = 105.87 USD`

Zmiana ceny likwidacji poprzez **pozbycie się** 700 USD długu:

`(300 × 1.5 ) ÷ (12 × 1.012) = 37.05 USD`

Jak widać, cena likwidacji obniżyła się bardziej poprzez zwrot DAI niż dodanie większej ilości zabezpieczenia.

## Dobre praktyki pozwalające na uniknięcie likwidacji

Pilnowanie kondycji CDP to **twoją odpowiedzialność**. Zabezpieczenie aktywów przed likwidacją leży całkowicie w rękach poszczególnych posiadaczy CDP. Poniżej znajduje się szereg dobrych praktyk dotyczących monitorowania kondycji CDP.

- Skonfiguruj powiadomienia o cenach w swojej ulubionej aplikacji lub kilku aplikacjach, abyś nie został zaskoczony przez wydarzenia na rynku.
- Upewnij się, że masz dostęp do dodatkowych aktywów, które mogą zostać użyte do wzmocnienia Twojej pozycji z dźwignią poprzez zwiększenie zabezpieczenia lub sprzedaż tych aktywów za DAI niezbędne do dokonania spłaty długu.
- Jeśli podejrzewasz, że rynek przez dłuższy czas będzie notować spadki, możesz pobrać część zabezpieczenia ze swojego CDP, sprzedać je za DAI, i użyć ich do spłaty długu. _Upewnij się, że Twoje CDP nie zbliży się chwilowo do swojej ceny likwidacji, ponieważ ta taktyka tymczaswo wystawi Cię na większe ryzyko, dopóki nie uregulujesz długu w dai._

Pamiętaj, że otwarcie CDP wiąże się z wystawieniem się na ryzyko. Jak duże ryzyko zechcesz podjąć zależy od wielu czynników. Określanie osobistego [profilu ryzyka](https://www.investopedia.com/terms/r/risk-profile.asp) jest nauką samą w sobie, ale zarazem jest też czymś, co każdy posiadacz CDP musi wykonać we własnym zakresie.

Więcej informacji na temat zagrożeń znajdziesz w [warunkach świadczenia usług](https://cdp.makerdao.com/terms), które zawierają ważne informacje prawne. Każdy użytkownik CDP musi zaakceptować warunki świadczenia usług nim zdecyduje się skorzystać z Systemu Stablecoina Dai.

## W jaki sposób inteligentny kontrakt sprzedaje zabezpieczenie?

Gdy Opiekun likwiduje niewystarczająco bezpieczne CDP, kontrakt zapewniający płynność (Liquidity Providing Contract, LPC) dba o to, żeby zabezpieczenie zostało wystawione na sprzedaż w panelu [DAI](https://dai.makerdao.com/). Cena sprzedaży określana jest przez wyrocznie z zastosowanym specjalnym modyfikatorem. Modyfikator ten przeważnie przyjmuje formę rabatu, który jest doliczany do niespłaconego długu, który musi zostać odzyskany. Ten dodatkowy spread ma na celu zachęcenie do szybkiego dokapitalizowania systemu poprzez zaoferowanie nabywcom lepszej ceny aktywów pełniących rolę zabezpieczenia finansowego.

Użytkownicy mogą zakupić PETH przechwycony przez LPC poprzez swój pulpit. Każda nadwyżka DAI ze sprzedaży może być zakupiona za PETH.

## Czy mogę zakupić przechwycone PETH?

W panelu DAI znajduje się sekcja nazwana „Total Liquidity Available from forced CDP Liquidations”, w której uczestnicy rynku mogą zakupić przechwycone PETH w obniżonej cenie ustalonej przez spread Bust/Boom.

## W jak sposób „flash crash” wpłynie na likwidację CDP?

„Flash crash” (błyskawiczny spadek ceny) na pojedynczej giełdzie nie wpłynie na system, ponieważ poszczególne wyrocznie agregują ceny z wielu giełd. Po ich zebraniu medianizer oblicza medianę z tych niezależnych źródeł. Dane dostarczone przez poszczególne wyrocznie możesz zobaczyć na [https://mkr.tools/system/feeds](https://mkr.tools/system/feeds).

- Szczegołowe informacje: [https://developer.makerdao.com/feeds/](https://developer.makerdao.com/feeds/)
- Kod źródeł informacji: [https://github.com/makerdao/price-feed](https://github.com/makerdao/price-feed)
- Kod medianizera: [https://github.com/makerdao/medianizer](https://github.com/makerdao/medianizer)
- Kod aktualizatora: [https://github.com/makerdao/setzer](https://github.com/makerdao/setzer)
- Monitorowanie źródeł: [https://mkr.tools/system/feeds](https://mkr.tools/system/feeds)

## Gdzie mogę śledzić aktualne informacje na temat likwidacji?

Możesz przyjrzeć się [mkr.tools](https://mkr.tools/), które jest zewnętrznym narzędziem śledzącym system MakerDAO. Dwie strony, na których znajdują się najważniejsze informacje to [Liquidations](https://mkr.tools/system/liquidations) oraz [bites](https://mkr.tools/system/bites).
