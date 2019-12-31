<template>
    <div class="modal" v-show="value"  v-on:click="closeModal()" >
        <div class="modal__container" v-on:click.stop>
            <h2 class="modal__title">{{ modalTitle + (modalKey + 1) }}</h2>
            <CloseButton class="modal-close" v-on:click.native="closeModal()" />
            <button class="ok-button button" v-on:click="confirmAction">OK</button>
        </div>
    </div>
</template>

<script>
import CloseButton from "@/components/CloseButton"

export default {
    name: "Modal",
    props: {
        modalTitle: String,
        modalKey: Number,
        value: {
            required: true,
        }
    },
    components: {
        CloseButton,
    },
    methods: {
        closeModal() {
            this.$emit("input", !this.value);
        },
        confirmAction() {
            this.$emit('confirmed', this.modalKey);
            this.closeModal();
        }
    }
}
</script>

<style lang="scss" scoped>
    // $color-dark-main: #2c3e50;

    .modal {
        position: fixed;
        top: 0;
        background-color: rgba($color: $color-dark-main, $alpha: .5);
        width: 100vw;
        height: 100vh;
        z-index: 10;
    }

    .modal__title {
        margin: 40px 0;
    }

    .modal__container {
        position: absolute;
        left: 50%;
        top: 50%;
        background-color: $color-light;
        width: 90%;
        max-width: 300px;
        height: 200px;
        transform: translate(-50%, -50%);
        z-index: 20;
        border-radius: 10px;
        box-shadow: 0 0 10px $color-dark-main;
    }

    .modal-close {
        position: absolute;
        top: 20px;
        right: 20px;
    }

    .ok-button {
        border-radius: 30px;
    }
</style>