<template>
    <div v-show="show" :transition="transition">
        <div class="modal" @click.self="clickMask">
            <div class="modal-dialog" :class="modalClass" ref="dialog">
                <div class="modal-content">
                    <!--Header-->
                    <div class="modal-header">
                        <slot name="header">
                            <a type="button" class="close" style="font-size:1.75em" @click="cancel">&times;</a>
                            <h4 class="modal-title">
                                <slot name="title">
                                    {{title}}
                                </slot>
                            </h4>
                        </slot>
                    </div>
                    <!--Container-->
                    <div class="modal-body">
                        <slot></slot>
                        <div v-if="html" v-html="html"></div>
                        <div class="clearfix"></div>
                    </div>
                    <!--Footer-->
                    <div class="modal-footer">
                        <slot name="footer">
                            <button type="button" :class="cancelClass" @click="cancel">{{cancelText}}</button>
                            <button type="button" :class="okClass" @click="ok" style="margin-left:.5rem">{{okText}}</button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
        <div @keyup.escape="cancel" class="modal-backdrop in"></div>
    </div>
</template>

<style scoped>
    .modal {
        display: block;
    }
    .modal-enter-active, .modal-leave-active {
        transition: all .6s ease;
    }
    .modal-leave-active {
        /* 样式没什么用，但可以让根标签的transitionEnd生效，以去掉modal-leave */
        border-radius: 1px !important;
    }
    .modal-dialog {
        margin-top: 10vh;
    }
    .modal-enter-active .modal-dialog,
    .modal-leave-active .modal-dialog,
    .modal-enter-active .modal-dialog,
    .modal-leave-active .modal-backdrop {
        transition: all .5s ease;
    }
    .modal-enter .modal-dialog, .modal-leave-active .modal-dialog {
        opacity: 0;
        transform: translateY(-30%);
    }
    .modal-enter .modal-backdrop, .modal-leave-active .modal-backdrop {
        opacity: 0;
    }

    .modal-full.modal-dialog {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }

    .modal-full .modal-content {
      height: auto;
      min-height: 100%;
      border-radius: 0;
    }


    .modal-full .modal-header {
      /*height:20vh;*/
    }

    .modal-full .modal-body {

    }

    .modal-full .modal-footer {
      /*height:20vh;*/
      /*position: relative;*/
      /*top:50vh;*/
      /*height:20vh;*/
    }

    #modal-alert p.alert {
        padding: 2rem;
        margin: 0 auto;
    }
</style>
<script src="./index.js"></script>