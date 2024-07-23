<script setup lang="ts">
import { computed, ref, defineProps, defineEmits } from 'vue';
import {QPopupProxy} from "quasar";

interface ErrorObject {
  $uid: string;
  $message: string;
}

const props = defineProps<{
  hideBottomSpace: boolean;
  readonly: boolean;
  modelValue: string | null;
  label: string
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', value: string | null): void;
}>();

const model = computed<string | null>({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits('update:modelValue', value);
  }
});

const dateProxyRef = ref<InstanceType<typeof QPopupProxy>>();

</script>

<template>
  <q-input
      class="full-width"
      outlined
      v-model="model"
      dense
      clearable
      @click="!readonly ? $refs.dateProxy.show() : ''"
      :readonly="readonly"
      :hide-bottom-space="hideBottomSpace"
      :label="label"
      v-bind="{ ...$attrs}"
  >
    <template v-slot:prepend>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy
            ref="dateProxy"
            transition-show="scale"
            transition-hide="scale"
            v-if="!readonly"
        >
          <q-date v-model="model" mask="DD-MM-YYYY" :readonly="readonly" @input="$refs.dateProxy.hide()" />
        </q-popup-proxy>
      </q-icon>
    </template>
    <template v-slot:error>
      <slot name="error" v-if="!!errors?.length && errors?.length > 0">
        <div role="alert" v-for="err in errors" :key="err.$uid">
          {{ err?.$message }}
        </div>
      </slot>
    </template>
  </q-input>
</template>

<style scoped></style>
