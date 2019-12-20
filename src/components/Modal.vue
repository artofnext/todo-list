<template>
    <div class="modal" v-show="value"  v-on:click="closeModal()" >
        <div class="modal__container" v-on:click.stop>
            <h2 class="modal__title">{{ modalTitle }}</h2>
            <CloseButton class="list-close" v-on:click.native="closeModal()" />
        </div>
    </div>
</template>

<script>
import CloseButton from "@/components/CloseButton"

export default {
    name: "Modal",
    props: {
        modalTitle: String,
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
        }
    }
}
</script>

<style lang="scss" scoped>
    .modal {
        position: fixed;
        top: 0;
        background-color: rgba($color: #000000, $alpha: .5);
        width: 100vw;
        height: 100vh;
        z-index: 10;
    }

    .modal__container {
        position: absolute;
        left: 50%;
        top: 50%;
        background-color: white;
        width: 90%;
        max-width: 300px;
        height: 250px;
        transform: translate(-50%, -50%);
        z-index: 20;
        border-radius: 10px;
        box-shadow: 0 0 10px black;

    }
</style>