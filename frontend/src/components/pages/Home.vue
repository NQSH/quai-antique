<script setup lang="ts">
import PageContent from '../PageContent.vue';
import ButtonBooking from '../inputs/ButtonBooking.vue';

</script>

<template>
    <section id="hero">
        <img src="/img-hero.png" alt="Image du hero">
        <h1 class="text-header">Bienvenu au<br><span>Quai Antique</span></h1>
        <ButtonBooking />
        <a href="#/menu">Découvrir notre carte</a>
    </section>
    <PageContent>
        <article id="leader-article">
            <div class="article-image">
                <div class="decoration-back"></div>
                <img src="/img-leader.png" alt="Image du chef cuisinier">
                <div class="decoration-front"></div>
            </div>
            <div class="article-text">
                <h2 class="text-title">Le Chef</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum commodi totam earum quasi officia vel distinctio. Hic saepe error alias delectus, dolorem, sed vero voluptatem molestias neque soluta asperiores ut.</p>
            </div>
        </article>
        <article id="savoie-article">
            <div class="article-text">
                <h2 class="text-title">La Savoie, Un Amour</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id qui quos similique optio consectetur ipsum ad nam, et earum, eius quam. Hic et blanditiis consectetur aliquam vel laudantium nobis.</p>
            </div>
            <div class="article-image">
                <img src="/img-savoie-first.png" alt="Image de nourriture">
            </div>
        </article>
        <article id="meal-article">
            <div class="article-text">
                <h2 class="text-title">Du déjeuner ...</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem consequuntur molestias, molestiae, quod nisi ipsum velit officia deleniti eius nemo amet earum reprehenderit nam labore et sed expedita eligendi.</p>
            </div>
            <div class="article-image">
                <svg id="meal-images" xmlns="http://www.w3.org/2000/svg" width="768" height="163" fill="none" viewBox="0 0 768 163">
                    <g clip-path="url(#a)">
                        <path fill="url(#b)" d="M0 10C0 4.477 4.477 0 10 0h631.417c10.818 0 12.437 15.583 1.851 17.808L0 153V10Z"/>
                        <path fill="url(#c)" d="M124.731 145.192 768 10v143c0 5.523-4.477 10-10 10H126.583c-10.818 0-12.438-15.583-1.852-17.808Z"/>
                    </g>
                    <defs>
                        <pattern id="b" width="1" height="1" patternContentUnits="objectBoundingBox">
                        <use href="#d" transform="matrix(.00078 0 0 .0037 0 -1.079)"/>
                        </pattern>
                        <pattern id="c" width="1" height="1" patternContentUnits="objectBoundingBox">
                        <use href="#e" transform="matrix(.00078 0 0 .0037 0 -1.079)"/>
                        </pattern>
                        <image id="d" width="1287" height="854" href="/img-meal-lunch.png"/>
                        <image id="e" width="1287" height="854" href="/img-meal-diner.png"/>
                        <clipPath id="a">
                        <path fill="#fff" d="M0 0h768v163H0z"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="article-text diner-text">
                <h2 class="text-title">... Au dîner</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore soluta recusandae culpa esse obcaecati ducimus, impedit odit, incidunt porro sunt placeat non architecto quia nostrum sequi ad. Consequuntur, distinctio amet.</p>
            </div>
        </article>
        <ButtonBooking />
    </PageContent>
</template>

<style lang="css" scoped>
#hero {
    width: 100%;
    height: calc(100vh - 59px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    position: relative;

    & > h1 {
        color: var(--color-white);
        text-align: center;

        & > span {
            font-family: var(--font-family-secondary);
            font-size: 40px;
        }
    }

    & > img {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        filter: brightness(0.5);
        object-fit: cover;
    }

    & > a {
        color: var(--color-white);
    }
}

#leader-article {
    display: flex;
    flex-direction: row;
    gap: 18px;

    & .article-image {
        position: relative;
        min-width: 166px;
        max-width: 166px;
        height: 220px;
        padding: 10px 16.5px;

        & > img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
        
        & > .decoration-back {
            position: absolute;
            content: '';
            width: 133px;
            height: 200px;
            border-radius: 10px;
            border: 1px solid var(--color-secondary);
            transform: rotate(-10deg);
            z-index: -1;
        }
        
        & > .decoration-front {
            position: absolute;
            content: '';
            width: 133px;
            height: 200px;
            border-radius: 10px;
            border: 1px solid var(--color-secondary-light);
            transform: rotate(10deg);
            z-index: 1;
            top: 10px;
        }
    }
}

#savoie-article {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 18px;
    padding-block: 40px;

    & > .article-image {
        min-width: 200px;
        max-width: 200px;
        height: 200px;
        
        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    &::before {
        position: absolute;
        content: '';
        width: 100vw;
        height: 100%;
        background-color: var(--color-secondary-light);
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

#meal-article {
    display: flex;
    flex-direction: column;
    gap: 18px;

    & > svg {
        max-width: 100%;
    }
}

#meal-images {
    max-width: 100%;
}

.article-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 18px;

    & > h2 {
        color: var(--color-tertiary);
    }

    & > p {
        color: var(--color-tertiary-light);
    }
}

.diner-text {
    text-align: end;
}

@media (max-width: 576px) {
    #leader-article,
    #savoie-article {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }   
}
</style>