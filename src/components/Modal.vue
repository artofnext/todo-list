<template>
    <div class="modal">
        <div class="modal__container">
            <h2 class="modal__title">{{ modalTitle }}</h2>
            <CloseButton class="list-close" v-on:click.native="modalTitle = 'Close!'" />

        </div>
    </div>
</template>

<script>
import CloseButton from "@/components/CloseButton"

export default {
    name: "Modal",
    props: {
        modalTitle: String,
    },
    components: {
        CloseButton,
    },
}
</script>