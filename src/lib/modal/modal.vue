<template>
  <div v-show="show" :transition="transition">
    <div :class="{modal: true, 'is-active': show}">
      <div class="modal-background" @keydown.enter.stop @keyup.escape="outsideClick" @click.stop="outsideClick"></div>
      <div class="modal-content" :class="modalClass">

          <div class="modal-header">
              <slot name="header">
                  <a type="button" class="close" @click="cancel">&times;</a>
                  <div class="modal-title">
                      <slot name="title">
                          {{title}}
                      </slot>
                  </div>
              </slot>
          </div>

          <div class="modal-body">
              <slot></slot>
              <div v-if="html" v-html="html"></div>
              <div class="clearfix"></div>
          </div>

          <div class="modal-footer">
              <slot name="footer">
                  <button type="button" :class="cancelClass" @keyup.enter="cancel" @click="cancel">{{cancelText}}</button>
                  <button type="button" :class="okClass" @click="ok" @keyup.enter="ok" style="margin-left:.5rem">{{okText}}</button>
              </slot>
          </div>
        </div>
      </div>
    </div>
</template>
<style src="./modal.css"></style>
<script src="./index.js"></script>
