<script setup lang="ts">
import type { Drink } from '@/composables/useMenu';
import { Helpers } from '@/helpers/_helpers';

const props = defineProps<{
    title: string,
    articles: Array<Drink>
}>()
</script>

<template>
    <div class="category-container">
        <h3 class="category-title text-subtitle">{{ Helpers.FormatTool.Text.toSentenceCase(props.title) }}</h3>
        <ul class="category-details-list">
            <li class="article" v-for="article in props.articles">
                <article>
                    <div>
                        <h4 class="article-title text-title">{{ Helpers.FormatTool.Text.toSentenceCase(article.title) }}</h4>
                    </div>
                    <span class="article-price">{{ article.price }}€</span>
                </article>
            </li>
        </ul>
    </div>
</template>