<script lang="ts">
    import type { PageProps } from "./$types";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import Check from "@lucide/svelte/icons/check";
    import X from "@lucide/svelte/icons/x";
    import HandCoins from "@lucide/svelte/icons/hand-coins";
    import Clock from "@lucide/svelte/icons/clock";
    import * as Item from "$lib/components/ui/item/index.js";
    import * as Card from "$lib/components/ui/card/index.js";

    let { form }: PageProps = $props();
    let isSuccess = $derived(!!form?.success);
    let isError = $derived(!!form?.error);
</script>

<header class="hero mb-7">
    <div class="hero-gradient p-10">
        <h2 class="mb-7">
            Leki taniej i od ręki - <br /> sprawdź ceny i dostępność w aptekach blisko
            Ciebie.
        </h2>
        <p class="mb-7 text-lg">
            Wpisz nazwę leku, a aplikacja porówna ceny i pokaże,<br /> gdzie jest
            dostępny w Twojej okolicy - bez dzwonienia i biegania po aptekach.
        </p>
        <Button href="#email-form" class="rounded-full cta relative bottom-0">
            Znajdź leki teraz
        </Button>
    </div>
</header>
<main>
    <section class="cards mb-5">
        <h2 class="mb-5">Rozwiązujemy Twoje problemy.</h2>
        <div class="xl:flex xl:justify-evenly">
            <article class="card mb-4 xl:mb-0 xl:max-w-[45%]">
                <Card.Root>
                    <Card.Content>
                        <Card.Title>
                            <Item.Root>
                                <Item.Media>
                                    <Clock
                                        color="#2D959F"
                                        strokeWidth="1"
                                        size="42px"
                                    />
                                </Item.Media>
                                <Item.Content>
                                    Kiedy dziecko choruje, liczy się czas - a Ty
                                    nie wiesz, w której aptece lek jest
                                    dostępny.
                                </Item.Content>
                            </Item.Root>
                        </Card.Title>
                        <Card.Description>
                            W aplikacji sprawdzasz dostępność leków w pobliżu i
                            od razu widzisz, <strong>gdzie warto jechać.</strong
                            >
                        </Card.Description>
                    </Card.Content>
                </Card.Root>
                <p class="solution"></p>
            </article>
            <article class="card xl:max-w-[45%]">
                <Card.Root>
                    <Card.Content>
                        <Card.Title>
                            <Item.Root>
                                <Item.Media>
                                    <HandCoins
                                        color="#2D959F"
                                        strokeWidth="1"
                                        size="42px"
                                    />
                                </Item.Media>
                                <Item.Content>
                                    Ten sam lek potrafi kosztować różnie w
                                    zależności od apteki.
                                </Item.Content>
                            </Item.Root>
                        </Card.Title>
                        <Card.Description>
                            Aplikacja w sekundę <strong>porównuje ceny</strong>
                            w Twojej okolicy i pomaga wybrać
                            <strong>najkorzystniejszą opcję.</strong>
                        </Card.Description>
                    </Card.Content>
                </Card.Root>
            </article>
        </div>
    </section>
    <section class="breakpoint flex flex-col items-center mb-5">
        <h2 class="mb-5 w-full">Nie czekaj</h2>
        <Button href="#email-form" class="rounded-full cta w-sm xl:w-xl">
            Znajdź leki teraz
        </Button>
    </section>
    <section class="demo mb-4">
        <h2 class="hidden">Demonstracja</h2>
        <div class="flex align-center flex-col">
            <div class="demo-stage">
                <img
                    class="max-w-[800px]"
                    alt="categories"
                    src="assets/images/categories.webp"
                />
                <h3>Przejrzysty wybór kategorii</h3>
            </div>
            <div class="demo-stage">
                <img
                    class="max-w-[600px]"
                    alt="categories"
                    src="assets/images/subcategories.webp"
                />
                <h3>Leki w wybranej kategorii</h3>
            </div>
            <div class="demo-stage">
                <img
                    class="max-w-[600px]"
                    alt="categories"
                    src="assets/images/product.webp"
                />
                <h3>Porównaj ceny i dostępność</h3>
            </div>
        </div>
    </section>
    <h2 class="mb-5">Czy jesteś zainteresowana?</h2>
    <section class="context mb-5">
        <h3 class="hidden">Kontekst</h3>
        <p class="mb-3 xl:mb-6">
            Masz milion spraw na głowie: praca, dom, dziecko, zakupy, a do tego
            nagle gorączka o 21:30. <br /> W takich momentach nie chcesz robić
            researchu po stronach aptek ani jeździć „na ślepo”.<br /> Ta
            aplikacja jest po to, żebyś w jednym miejscu zobaczyła
            <strong>ile kosztuje lek</strong>
            i <strong>czy jest dostępny</strong>
            w aptekach niedaleko — szybko, prosto i po ludzku.
        </p>
        <div class="flex flex-col xl:flex-row xl:justify-between">
            <div class="mb-5 xl:m-0 xl:max-w-[45%]">
                <h3>Czym jest MamLek:</h3>
                <ul class="what-is-solution">
                    <li>
                        <Item.Root>
                            <Item.Media>
                                <Check color="#39B18D" strokeWidth="3" />
                            </Item.Media>
                            <Item.Content>
                                Aplikacja mobilna do sprawdzania cen i
                                dostępności leków w aptekach w Twojej okolicy.
                            </Item.Content>
                        </Item.Root>
                    </li>
                    <li>
                        <Item.Root>
                            <Item.Media>
                                <Check color="#39B18D" strokeWidth="3" />
                            </Item.Media>
                            <Item.Content>
                                Szybka pomoc w decyzji: gdzie kupić, żeby nie
                                tracić czasu i nie przepłacać.
                            </Item.Content>
                        </Item.Root>
                    </li>
                </ul>
            </div>
            <div class="mb-5 xl:m-0 xl:max-w-[45%]">
                <h3>Czym MamLek <strong>NIE</strong> jest:</h3>
                <ul class="what-is-not-solution">
                    <li>
                        <Item.Root>
                            <Item.Media>
                                <X color="#D4211F" strokeWidth="3" />
                            </Item.Media>
                            <Item.Content>
                                Nie jest apteką online - nie sprzedaje leków i
                                nie realizuje zamówień.
                            </Item.Content>
                        </Item.Root>
                    </li>
                    <li>
                        <Item.Root>
                            <Item.Media>
                                <X color="#D4211F" strokeWidth="3" />
                            </Item.Media>
                            <Item.Content>
                                Nie zastępuje porady lekarza - pomaga w zakupie,
                                ale nie diagnozuje i nie dobiera leczenia.
                            </Item.Content>
                        </Item.Root>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section id="email-form" class="breakpoint pb-20">
        <h2 class="mb-5">Ostatnia szansa</h2>
        <!-- Need some trustliner -->
        {#if !isSuccess && !isError}
            <form method="post" class="flex flex-col align-center xl:flex-row">
                <!-- better validation for email input -->
                <!-- <input
                    type="email"
                    placeholder="Twój email"
                    name="email"
                    autocomplete="email"
                    required
                /> -->
                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    autocomplete="email"
                    class="max-w-md mb-4 xl:m-0 xl:max-w-md bg-primary-foreground"
                />

                <input
                    name="website"
                    autocomplete="off"
                    tabindex="-1"
                    class="hidden"
                />
                <Button type="submit" class="rounded-full cta xl:ml-5">
                    Chcę otrzymać powiadomienie o starcie
                </Button>
            </form>
        {:else if isSuccess && !isError}
            <p class="message">
                Dzięki! Dodaliśmy Cię do listy. Odezwę się, gdy startujemy.
            </p>
        {:else}
            <p class="message">
                Wystąpił błąd podczas wysyłania powiadomienia. Spróbuj ponownie
                później.
            </p>
        {/if}
    </section>
</main>
<footer></footer>

<style lang="postcss">
    @reference "tailwindcss";
    @reference "./layout.css";
    :global(html) {
        @apply font-roboto overflow-x-hidden;
    }
    :global(body) {
        @apply font-roboto font-normal text-sm leading-relaxed;
        @apply max-w-sm my-4 m-auto overflow-x-hidden;
        @apply xl:max-w-7xl xl:my-6;
    }
    :global(h1) {
        @apply font-extrabold text-6xl leading-tight tracking-tight;
    }
    :global(h2) {
        @apply font-bold text-2xl leading-tight tracking-tight;
    }
    :global(h3) {
        @apply font-bold text-lg leading-snug tracking-tight;
    }
    :global(p) {
        @apply font-normal text-sm leading-relaxed;
    }
    :global(strong) {
        @apply font-bold;
    }
    :global(ul) {
        @apply m-0 pl-5 text-sm leading-relaxed;
    }
    :global(li) {
        @apply text-sm leading-relaxed font-normal;
    }
    :global(input[type="email"]) {
        @apply text-sm leading-tight font-normal;
    }
    :global(button.cta) {
        @apply text-sm leading-none font-semibold tracking-normal;
    }
    :global(p.message) {
        @apply text-base leading-normal font-semibold tracking-tight;
    }
    header {
        @apply h-[700px] xl:h-[500px];
        background: linear-gradient(
            90deg,
            rgba(213, 230, 233, 1) 40%,
            rgba(237, 221, 83, 0) 100%
        );
    }
    header .hero-gradient h2 {
        font-size: 36px;
    }
    header .hero-gradient p {
        font-size: 18px;
    }

    .demo-stage {
        @apply flex flex-col items-center mb-4;
    }
</style>
