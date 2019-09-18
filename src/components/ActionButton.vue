<template>
    <button @click="nextItem">next</button>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class ActionButton extends Vue {
  @Prop(Function) public readonly nextItem!: () => void;
}
</script>
