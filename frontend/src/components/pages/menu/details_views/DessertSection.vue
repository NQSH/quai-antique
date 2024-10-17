<script setup lang="ts">
import type { Dessert } from '@/composables/useMenu';
import { Helpers } from '@/helpers/_helpers';

const props = defineProps<{
    details?: Dessert[]
}>()
</script>

<template>
    <h2 class="text-subtitle">Nos desserts</h2>
    <ul class="articles">
        <li class="article" v-for="article in props.details">
            <article>
                <div class="article-text">
                    <h4 class="article-title text-title">{{ Helpers.FormatTool.Text.toSentenceCase(article.title) }}</h4>
                    <p class="article-description">{{ Helpers.FormatTool.Text.toSentenceCase(article.description) }}</p>
                </div>
                <span class="article-price">{{ article.price }}€</span>
            </article>
        </li>
    </ul>
</template>