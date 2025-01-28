# Trucker Jobs - RAGE Multiplayer

## Opis

**Trucker Jobs** je aplikacija za RAGE Multiplayer platformu koja omogućava virtualnim vozačima kamiona da prevoze teret do specifičnih lokacija. Aplikacija koristi HTML, CSS i JavaScript u kombinaciji s RAGE Multiplayer API-jem kako bi omogućila interaktivno iskustvo prevoza tereta. Igrači mogu prevoziti različite vrste tereta koristeći različita vozila, a svaka tura ima svoju zaradu na temelju udaljenosti.

## Postavke

1. **Pokrenite RAGE Multiplayer server**:
   - Pogledajte [RAGE Multiplayer dokumentaciju](https://rage.mp/docs/) za upute o postavljanju servera.
   
2. **Postavite resurs u server resursima**:
   - Kopirajte sadržaj ovog repozitorija u direktorij `resources` vašeg RAGE Multiplayer servera.

3. **Pokrenite server**:
   - Pokrenite vaš RAGE Multiplayer server.

4. **Pokrenite klijent**:
   - Povežite se na svoj server pomoću RAGE Multiplayer klijenta.

## Upotreba

1. **Odaberite lokaciju**:
   - Kliknite na lokaciju u popisu da biste započeli isporuku.

2. **Otvorite popis tura**:
   - Pritisnite tipku **"Y"** za otvaranje popisa tura.

3. **Zatvorite izbornik**:
   - Pritisnite tipku **"X"** za zatvaranje izbornika.

4. **Potvrdite turu**:
   - Nakon što odaberete lokaciju, prikazat će se prozor za potvrdu gdje možete potvrditi ili otkazati isporuku.

## Značajke

- **Različite lokacije i vozila**: Svaka lokacija ima svoj grad, vozilo i vrstu posla.
- **Dinamička zarada**: Igrači zarađuju na temelju udaljenosti koju prijeđu. Cijena je određena s 5 dolara po metru.
- **Detalji ture**: Za svaku turu, korisnici mogu vidjeti informacije poput vozila, grada, vrste posla i cijene.
- **Interaktivno iskustvo**: Prikazuje se popis tura i modalna potvrda koja omogućava korisnicima da odaberu i potvrde turu.

## Primjer podataka

Svaka lokacija sadrži podatke kao što su:

- **Grad** (city): Grad u kojem se nalazi tura (npr. New York, Los Angeles, Chicago).
- **Ime ture** (tourName): Ime ture (npr. City Tour, Beach Tour).
- **Vozilo** (vehicle): Vozilo koje se koristi za prevoz (npr. Bus, Convertible, Truck).
- **Vrsta posla** (jobType): Vrsta posla koji se obavlja (npr. Prevoz Igrački, Prevoz Eksploziva).
- **Zarada** (earnings): Izračunata zarada temeljem udaljenosti između trenutne pozicije igrača i cilja.

## Prilagodba

- Ova aplikacija omogućuje dodavanje novih vrsta poslova, lokacija i vozila.
- Za dodavanje novih poslova ili lokacija, jednostavno proširite odgovarajuće objekte u JavaScript kodu.
- Nova vozila mogu se dodati u popis odabira vozila za svaku turu.

## Sudjelovanje

Ako želite doprinositi razvoju ovog projekta, slobodno [forkajte](https://github.com/YourRepo/TruckerJobs) repozitorij i predložite promjene putem pull zahtjeva. Sve sugestije i poboljšanja su dobrodošla!

## Beta Obavijest

Ovaj skript je trenutno u beta fazi. Planiramo dodati nove značajke, uključujući dodatne vrste prijevoza i više lokacija. Pratite ažuriranja!

## Kako to radi?

Aplikacija koristi funkcionalnosti temeljenje na udaljenosti između trenutne pozicije igrača i odabrane lokacije za izračunavanje zarade. Korištenjem sljedećih funkcija:
- **`calculateEarnings(location)`**: Izračunava zaradu na temelju udaljenosti između trenutne pozicije igrača i odabrane lokacije.
- **`calculateDistance(point1, point2)`**: Izračunava udaljenost između dvije točke u prostoru koristeći trodimenzionalnu udaljenost.
- **`onLocationClick(location)`**: Ovdje se prikazuju detalji o turi, vozilu, vrsti posla i iznosu zarade, uz mogućnost potvrde ili odustajanja od ture.

Sve u svemu, ovaj projekt omogućuje jednostavno prepoznavanje lokacija, vozila i vrsta poslova, kao i dinamičko izračunavanje zarade, uz interaktivne potvrde i prozore za prikaz informacija.

---

**Pratite nas za više ažuriranja i novih značajki!** ✨
