<template>
    <Dialog :open="isOpen" @close="setIsOpen">
      <DialogPanel>
        <DialogTitle>Deactivate account</DialogTitle>
        <DialogDescription>
          This will permanently deactivate your account
        </DialogDescription>
  
        <p>
          Are you sure you want to deactivate your account? All of your data will be
          permanently removed. This action cannot be undone.
        </p>
  
        <button @click="setIsOpen(false)">Deactivate</button>
        <button @click="setIsOpen(false)">Cancel</button>
      </DialogPanel>
    </Dialog>
  </template>
  
  <script >
    import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';

export default {
  props: ['isOpen'],
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  },
};
  </script>