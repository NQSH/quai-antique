<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref, useTemplateRef, type Ref } from 'vue';
import PageContent from '../PageContent.vue';
import TitleContent from '../TitleContent.vue';
import Icon from './gallery/Icon.vue';
import IconDesktop from './gallery/icons/IconDesktop.vue';
import IconMobileRegular from './gallery/icons/IconMobile.vue';
import IconSwitch from './gallery/icons/IconSwitch.vue';
import ButtonDefault from '../inputs/ButtonDefault.vue';
import Modal from '../Modal.vue';
import ModalImage from './gallery/ModalImage.vue';
import { useGallery } from '@/composables/useGallery';

const { images } = useGallery();

const isSwitched = ref(false);

const showModal = ref(false);
const modalImage = ref({
    path: '',
    title: ''
})

const galleryElement = useTemplateRef('gallery-element');

const scrollIndex = ref(0);

function onScroll(): void {
    scrollIndex.value = galleryElement.value?.scrollLeft || 0;
}

function onScrollBtnClick(direction: number): void {
    galleryElement.value?.scrollBy({left: (90 + 30) * 6 * direction - 30, behavior: 'smooth'});
}

function onSwitchClick(value: boolean) : void {
    isSwitched.value = value;
}

function onImageClick(path: string, title: string): void {
    modalImage.value.path = path;
    modalImage.value.title = title;
    showModal.value = true;
}

function onEmitHide(): void {
    showModal.value = false;
}

function onCtaClick(): void {
    window.location.href = '#/booking';
}

const isScrolled = computed(() => {
    if(scrollIndex.value) {
        return scrollIndex.value > 0;
    }

    return false;
})

const isMaxScrolled = computed(() => {
    const maxScrollSize = images.value.length * 90 + (images.value.length - 1) * 30 - 768;
    return scrollIndex.value >= maxScrollSize;
})

</script>

<template>
    <PageContent>
        <TitleContent>
            Galerie
        </TitleContent>
        <div id="switch-buttons">
            <Icon :isActive="!isSwitched" id="icon-mobile" @click="onSwitchClick(false)"><IconMobileRegular /></Icon>
            <Icon :isActive="!isSwitched" id="icon-desktop" @click="onSwitchClick(false)"><IconDesktop /></Icon>
            <Icon :isActive="isSwitched" @click="onSwitchClick(true)"><IconSwitch /></Icon>
        </div>
        <div id="gallery">
            <div id="gallery-images" @scroll="onScroll" ref="gallery-element" :data-switched="isSwitched" :data-scrolled="isScrolled" :data-max-scrolled="isMaxScrolled">
                <div class="image-container" v-for="image in images" @click="onImageClick(image.path, image. title)">
                    <img :src="'/' + image.path" :alt="image.title">
                    <span>{{ image.title.slice(0, 1).toUpperCase() + image.title.slice(1) }}</span>
                </div>
            </div>
            <div id="scroll-buttons">
                <span id="scroll-button-left" class="scroll-button" :data-switched="isSwitched" :data-scrolled="isScrolled" @click="onScrollBtnClick(-1)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 50 50">
                        <path fill="#505168" fill-rule="evenodd" d="M35.481 44.856a1.563 1.563 0 0 1-2.212 0l-18.75-18.75a1.562 1.562 0 0 1 0-2.212l18.75-18.75a1.564 1.564 0 1 1 2.212 2.212L17.834 25l17.647 17.644a1.564 1.564 0 0 1 0 2.212Z" clip-rule="evenodd"/>
                    </svg>
                </span>
                <span id="scroll-button-right" class="scroll-button" :data-switched="isSwitched" :data-max-scrolled="isMaxScrolled" @click="onScrollBtnClick(1)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 50 50">
                        <path fill="#505168" fill-rule="evenodd" d="M14.519 5.144a1.563 1.563 0 0 1 2.212 0l18.75 18.75a1.562 1.562 0 0 1 0 2.212l-18.75 18.75a1.564 1.564 0 1 1-2.212-2.212L32.166 25 14.519 7.356a1.563 1.563 0 0 1 0-2.212Z" clip-rule="evenodd"/>
                    </svg>
                </span>
            </div>
        </div>
    </PageContent>
    <div id="button-cta">
        <ButtonDefault label="Réserver une table" @on-click="onCtaClick"/>
    </div>
    <Modal :show="showModal" @hide="onEmitHide">
        <ModalImage :path="modalImage.path" :title="modalImage.title"/>
    </Modal>
</template>

<style lang="css" scoped>
#switch-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    margin-bottom: 18px;
}

#gallery {
    position: relative;
}

#gallery-images {
    display: flex;
    gap: 30px;
    
    @media (min-width: 993px) {
        &[data-switched=false] {
            overflow: scroll;
            scrollbar-width: none;
            flex-direction: row;
            flex-wrap: nowrap;
            height: 483px;

            & > .image-container {
                position: relative;
                min-width: 90px;
                height: 100%;
                border-radius: 5px;
                transition: min-width 300ms;
                transition-delay: 200ms;
                overflow: hidden;

                &:not(:hover) > span {
                    display: none;
                }
                
                &:hover {
                    min-width: 300px;

                    & > span {
                        position: absolute;
                        transform-origin: bottom left;
                        transform: rotateZ(90deg);
                        z-index: 1;
                        top: 0px;
                        left: 10px;
                        width: 483px;
                        color: var(--color-white)
                    }
                }
                
                & > img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            &[data-scrolled=true]::before {
                content: '';
                position: absolute;
                left: 0px;
                z-index: 1;
                width: 90px;
                height: 100%;
                background: linear-gradient(0.25turn, #FFF, #FFFFFF00 )
            }

            &[data-max-scrolled=false]::after {
                content: '';
                position: absolute;
                right: 0px;
                z-index: 1;
                width: 90px;
                height: 100%;
                background: linear-gradient(-0.25turn, #FFF, #FFFFFF00 )
            }
        }
    }
    

    &[data-switched=true] {
        flex-direction: column;

        & > .image-container {
            position: relative;
            width: 100%;
            border-radius: 10px;
            overflow: hidden;
            
            & > img {
                display: block;
                width: 100%;
                object-fit: cover;
                transition: filter 200ms;
            }

            &:not(:hover) > span {
                display: none;
            }

            &:hover {
                & > img {
                    filter: brightness(0.5);
                }
                & > span {
                    position: absolute;
                    bottom: 10px;
                    left: 10px;
                    z-index: 1;
                    color: var(--color-white);
                }
            }
        }
    }
}

.scroll-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    &[data-switched=true] {
        display: none;
    }
}

#scroll-button-left {
    left: -67px;

    &[data-scrolled=false] {
        display: none;
    }
}

#scroll-button-right {
    right: -67px;

    &[data-max-scrolled=true] {
        display: none;
    }
}

#icon-mobile {
    display: none;
}

@media (max-width: 992px) {
    #icon-mobile {
        display: block;
    }

    #icon-desktop {
        display: none;
    }

    #gallery-images {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;

        & span {
            display: none;
        }
        &[data-switched=false] {
            & > .image-container {
                max-width: 30%;
                height: 150px;
                border-radius: 5px;
                overflow: hidden;

                & > img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }
            }
        }
    }

    #scroll-buttons {
        display: none;
    }
}

#button-cta {
    padding: 30px 0px;
}
</style>