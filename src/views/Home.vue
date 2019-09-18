<template>
  <div>
    <span>index : {{currentIndex}}</span>
    <span>value : {{currentValue}}</span>
    <br>
    <hr>
    <action-button :next-item="nextValue"></action-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import ActionButton from '@/components/ActionButton.vue';

@Component({
  components: {
    ActionButton
  }
})

export default class Home extends Vue {
  public currentIndex = 0;
  public currentValue = 0;
  public array: number[] = [];

  public created() {
    this.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.currentValue = this.array[this.currentIndex];
  }

  public nextValue() {
    this.array[this.currentIndex + 1] ? this.currentIndex += 1 : this.currentIndex = 0;
    this.currentValue = this.array[this.currentIndex];
  }
}
</script>
