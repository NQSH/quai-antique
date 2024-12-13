<script setup lang="ts">
import FormLayout, { type FormInputs } from '@/components/FormLayout.vue';
import FormSectionLayout from '@/components/FormSectionLayout.vue';
import { Input } from '@/components/inputs/classes/_input';
import InputImageFile from '@/components/inputs/InputImageFile.vue';
import InputText from '@/components/inputs/InputText.vue';
import PageContent from '@/components/PageContent.vue';
import TitleContent from '@/components/TitleContent.vue';
import { useGallery } from '@/composables/useGallery';
import { reactive } from 'vue';

const { post } = useGallery();

const inputs = reactive<FormInputs>({
    'title': new Input('title', 'Titre de l\'image', ''),
    'image': new Input('image', 'Sélectionner l\'image', undefined),
});

function onSubmit(): void {
    post();
}

</script>

<template>
    <PageContent>
        <TitleContent>
            Ajouter une image
        </TitleContent>
        <FormLayout :inputs submit-btn-label="Ajouter" @on-submit="onSubmit">
            <FormSectionLayout :title="'Sélection de l\'image'" one-lined centered-title>
                <InputText :input="inputs['title']" />
                <InputImageFile :input="inputs['image']" />
            </FormSectionLayout>
        </FormLayout>
    </PageContent>
</template>