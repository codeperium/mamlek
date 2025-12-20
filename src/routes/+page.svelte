<script lang="ts">
    import type { PageProps } from "./$types";

    let { form }: PageProps = $props();
    let isSuccess = $derived(!!form?.success);
    let isError = $derived(!!form?.error);
</script>

<h1>MamLek</h1>
<header class="hero">
    <h2>
        Leki taniej i od ręki - sprawdź ceny i dostępność w aptekach blisko
        Ciebie.
    </h2>
    <p>
        Wpisz nazwę leku, a aplikacja porówna ceny i pokaże, gdzie jest dostępny
        w Twojej okolicy - bez dzwonienia i biegania po aptekach.
    </p>
    <button class="cta">Znajdź lek teraz</button>
</header>
<main>
    <section class="cards">
        <h2>Rozwiązujemy Twoje problemy.</h2>
        <article class="card">
            <h3>
                Kiedy dziecko choruje, liczy się czas - a Ty nie wiesz, w której
                aptece lek jest dostępny.
            </h3>
            <p class="solution">
                W aplikacji sprawdzasz dostępność leków w pobliżu i od razu
                widzisz, <strong>gdzie warto jechać.</strong>
            </p>
        </article>
        <article class="card">
            <h3>
                Ten sam lek potrafi kosztować różnie w zależności od apteki - a
                przepłacanie boli najbardziej, gdy kupujesz często.
            </h3>
            <p>
                Aplikacja w sekundę <strong>porównuje ceny</strong> w Twojej
                okolicy i pomaga wybrać
                <strong>najkorzystniejszą opcję.</strong>
            </p>
        </article>
    </section>
    <section class="breakpoint">
        <h2>Nie czekaj</h2>
        <button class="cta">Oszczędź czas i pieniądze</button>
    </section>
    <section class="demo">
        <h2>Demonstracja</h2>
        <div>Iframe.</div>
    </section>
    <h2>Czy jesteś zainteresowana?</h2>
    <section class="context">
        <h3>Kontekst</h3>
        <p>
            Masz milion spraw na głowie: praca, dom, dziecko, zakupy, a do tego
            nagle gorączka o 21:30. W takich momentach nie chcesz robić
            researchu po stronach aptek ani jeździć „na ślepo”. Ta aplikacja
            jest po to, żebyś w jednym miejscu zobaczyła
            <strong>ile kosztuje lek</strong>
            i <strong>czy jest dostępny</strong>
            w aptekach niedaleko — szybko, prosto i po ludzku.
        </p>
        <div>
            <p>Czym jest MamLek:</p>
            <ul class="what-is-solution">
                <li>
                    Aplikacja mobilna do sprawdzania cen i dostępności leków w
                    aptekach w Twojej okolicy.
                </li>
                <li>
                    Szybka pomoc w decyzji: gdzie kupić, żeby nie tracić czasu i
                    nie przepłacać.
                </li>
            </ul>
            <p>Czym MamLek <strong>NIE</strong> jest:</p>
            <ul class="what-is-not-solution">
                <li>
                    Nie jest apteką online - nie sprzedaje leków i nie realizuje
                    zamówień.
                </li>
                <li>
                    Nie zastępuje porady lekarza - pomaga w zakupie, ale nie
                    diagnozuje i nie dobiera leczenia.
                </li>
            </ul>
        </div>
    </section>

    <section class="breakpoint">
        <h3>Ostatnia szansa</h3>
        {#if !isSuccess && !isError}
            <form method="post">
                <input
                    type="email"
                    placeholder="Twój email"
                    name="email"
                    required
                />
                <input
                    name="website"
                    autocomplete="off"
                    tabindex="-1"
                    class="hidden"
                />
                <button type="submit" class="cta">
                    Chcę otrzymać powiadomienie o starcie
                </button>
            </form>
        {:else if isSuccess && !isError}
            <p>Twoje powiadomienie zostało wysłane!</p>
        {:else}
            <p>
                Wystąpił błąd podczas wysyłania powiadomienia. Spróbuj ponownie
                później.
            </p>
        {/if}
    </section>
</main>
<footer></footer>
