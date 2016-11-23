<template>
    <div v-show="show" :transition="transition">
        <div class="modal" @click.self="clickMask">
            <div class="modal-dialog" :class="modalClass" ref="dialog">
                <div class="modal-content">
                    <!--Header-->
                    <div class="modal-header">
                        <slot name="header">
                            <a type="button" class="close" @click="cancel">&times;</a>
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
 .modal-open{overflow:hidden}
 .modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;outline:0;-webkit-overflow-scrolling:touch}
 .modal.fade .modal-dialog{-webkit-transition:-webkit-transform .3s ease-out;transition:-webkit-transform .3s ease-out;-o-transition:-o-transform
.3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out,-o-transform
.3s ease-out;-webkit-transform:translate(0,-25%);-ms-transform:translate(0,-25%);-o-transform:translate(0,-25%);transform:translate(0,-25%)}.modal.in
.modal-dialog{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}
.modal-open .modal{overflow-x:hidden;overflow-y:auto}
.modal-dialog{position:relative;width:auto;margin:10px}
.modal-content{position:relative;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px
solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}
.modal-backdrop.fade{opacity:0}
.modal-backdrop.in{opacity:.5}
/*.modal-header{padding:.75rem;border-bottom:1px solid #e5e5e5}*/
.modal-header::after{content:"";display:table;clear:both}
/*.modal-header .close{margin-top:-2px; font-size: 1.75rem; float: right;}*/
.modal-title{margin:0;line-height:1.5}
/*.modal-body{position:relative;padding:.5rem}*/
/*.modal-footer{padding:.5rem;text-align:right;border-top:1px solid #e5e5e5}*/
.modal-footer::after{content:"";display:table;clear:both}
.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media
(min-width:544px){.modal-dialog{max-width:600px;margin:30px auto}
.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg{max-width:900px}}

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