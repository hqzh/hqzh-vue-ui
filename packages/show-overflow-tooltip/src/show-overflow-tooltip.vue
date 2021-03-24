<template>
    <tooltip
        :effect="effect"
        :disabled="!isShowTooltip"
        :content="content"
        :placement="placement"
    >
        <div class="tooltip-root" ref="container" @mouseover="onMouseOver">
            <slot></slot>
        </div>
    </tooltip>
</template>

<script>
import { Tooltip } from 'element-ui';
// 按需引入
export default {
  name: 'show-overflow-tooltip',
  components: { Tooltip },
  props: {
    effect: {
      type: String,
      default: 'light',
    },
    placement: {
      type: String,
      default: 'top',
    },
  },
  data() {
    return {
      isShowTooltip: false,
      content: '',
    };
  },
  mounted() {
    this.isContainerSqueezed();
  },
  methods: {
    onMouseOver() {
      this.isContainerSqueezed();
    },
    isContainerSqueezed() {
      const { container } = this.$refs;
      if (!container) {
        this.isShowTooltip = false;
      }
      this.isShowTooltip = container.scrollWidth !== container.clientWidth;
      this.content = container.innerText;
    },
  },
};
</script>

<style scoped>
.tooltip-root {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
}
</style>
