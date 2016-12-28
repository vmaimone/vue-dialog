<template>
  <div v-show="show" :transition="transition">
    <div :class="{modal: true, 'is-active': show}">
      <div class="modal-background" @keyup.escape="cancel" @click.stop="cancel"></div>
      <div class="modal-content" :class="modalClass">

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

          <div class="modal-body">
              <slot></slot>
              <div v-if="html" v-html="html"></div>
              <div class="clearfix"></div>
          </div>

          <div class="modal-footer">
              <slot name="footer">
                  <button type="button" :class="cancelClass" @click="cancel">{{cancelText}}</button>
                  <button type="button" :class="okClass" @click="ok" style="margin-left:.5rem">{{okText}}</button>
              </slot>
          </div>
        </div>
      </div>
    </div>

    <!--
    <div v-show="show" :transition="transition">
        <div class="modal" @click.self="clickMask">
            <div class="modal-content" :class="modalClass" ref="content">
                <div class="modal-content">

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

                    <div class="modal-body">
                        <slot></slot>
                        <div v-if="html" v-html="html"></div>
                        <div class="clearfix"></div>
                    </div>

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
    -->
</template>

<style scoped>
 .modal-open{overflow:hidden}
.modal-open .modal{overflow-x:hidden;overflow-y:auto}
.modal-content{position:relative;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px
solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}
.modal-backdrop.fade{opacity:0}
.modal-backdrop.in{opacity:.5}
.modal-header::after{content:"";display:table;clear:both}
.modal-title{margin:0;line-height:1.5;font-size:1.15em;}
.modal-footer::after{content:"";display:table;clear:both}
.modal-scrollbar-measure{
  position:absolute;
  top:-9999px;
  width:50px;
  height:50px;
  overflow:scroll
}
@media (min-width:544px){
  .modal-content{max-width:600px;margin:30px auto}
  .modal-sm{max-width:300px}
}
@media (min-width:992px){
  .modal-lg{max-width:900px}
}


.modal-background {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(10, 10, 10, 0.86);
}

.modal-content {
  margin: 0 2rem;
  max-height: calc(100vh - 160px);
  top: -25%;
  overflow: auto;
  position: relative;
  width: 100%;
  background-color: white;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  -ms-flex-negative: 1;
      flex-shrink: 1;
  padding: 20px;
}

@media screen and (min-width: 769px) {
  .modal-content {
    margin: 0 auto;
    max-height: calc(100vh - 40px);
    width: 640px;
  }
}
.modal-header .close {
  float: right;
  margin-top: .15rem;
  padding: .1rem .25rem;
  display: block;
  cursor: pointer;
  border-radius: 6px;
 }
.modal-header .close:hover {
  background-color: rgba(10, 10, 10, 0.2);
  border-radius: 6px;
}
.modal-footer {
  text-align: right;
}
.modal {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-box-align: center;
      -ms-flex-align: center;
              -ms-grid-row-align: center;
          align-items: center;
  display: none;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  overflow: hidden;
  position: fixed;
  -webkit-overflow-scrolling:touch;
  z-index: 1986;
}
.modal-full.modal-content {
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
.modal.is-active {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

/*.modal-header{padding:.75rem;border-bottom:1px solid #e5e5e5}*/
/*.modal-header .close{margin-top:-2px; font-size: 1.75rem; float: right;}*/
/*.modal-body{position:relative;padding:.5rem}*/
/*.modal-footer{padding:.5rem;text-align:right;border-top:1px solid #e5e5e5}*/
</style>
<script src="./index.js"></script>
