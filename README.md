## 02_CATering

Tři cateringové společnosti dodávající občerstvení na různé akce.
Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to

**Just Food**: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.

**Your Mama**: Dodává středně drahé jídlo vyrobené z lepších surovin.

**Flavour Haven**: Dodává drahé jídlo z kvalitních surovin.

Napište pro každou z těcho společností funkci s jedním parametrem, který udává, pro kolik lidí se catering objednává. Funkce pak vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu. Například

    Catering od Flavour Haven pro 100 lidí za 300000 Kč

Vyzkoušejte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje vytvoření nějaké události s cateringem. Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. Funkce createEvent pak vrátí zprávu ve smyslu

    Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč


//komentář od Marušky 
Splnění úkolu se v podstatě děje na řádcích 13-33 v souboru script.js. Funkce dělají, co mají, vše funguje. Mám jen jednu drobnou poznámku, a sice že funkce, jejímž účelem je console.log(), nepoužívají klíčové slovo return, tedy namísto:

        const createEvent = (udalost, pocetLidi, company) => {
        return console.log(`${udalost} s cateringem od ${company(pocetLidi)}`)
        }

je vhodnější:

        const createEvent = (udalost, pocetLidi, company) => {
        console.log(`${udalost} s cateringem od ${company(pocetLidi)}`)
        }

Chování obou verzí je v podstatě stejné a do konzole se text vypíše stejně, ale v praxi tu verzi s return neuvidíš. Takže u "vypisovacích" funkcí jsou ideální dvě varianty: buď s použitím return vracíme nějaký string a do konzole pak vypíšeme výsledek funkce (jako to děláš u cateringových funkcí), nebo funkce rovnou vypisuje do konzole, pak je to bez return a pro vypsání výsledku funkci jen zavoláme.

No a teď k té tvé práci navíc :-) Je super, že sis s tím takto pohrála, je vidět, že tě to baví, ráda si hraješ se styly a umíš stránku hezky sestavit (tedy ro říkám já, která css moc nemusím a na stylování nemám moc talent). Taky moc chválím, že sis vyzkoušela setTimeOut a addEventListener. Kdybys chtěla, mohla bys ještě zapřemýšlet nad nějakou větší interaktivitou s uživatelem, že by se mu třeba nabídky zobrazily právě na kliknutí na nějaké tlačítko, zároveň by třeba pak u každé možnosti mohlo být separátní tlačítko "To chci!" a podle toho, kterou možnost by uživatel zvolil, by se mu zobrazil jiný text vztahující se k tomu, proč je právě tato možnost dobrou volbou.

Ale to jsou všechno jenom nápady navíc, kdyby sis s tím chtěla dál hrát. Jedinou "závažnější" připomínku k této části řešení mám k tlačítku #submit, které se na stránce objeví až po zobrazení všech možností, ale vlastně je tam pořád, jen bez textContentu (a když si stránku přiblížíš, uvidíš tam takové malé tlačítko bez textu). Lepší řešení je dát mu na začátku nějakou třídu .hidden s display: none, aby bylo opravdu skryté, a potom tuto třídu odebrat.

Ještě jednou díky za skvělou práci, úkol označuju jako splněný!