(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{400:function(t,e,o){"use strict";o.r(e);var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"thisColumn",staticClass:"d-column",class:t.getColumnClass()},[o("div",{staticClass:"d-col-wrapper",class:{"d-dragging-now":t.getIsDraggingNow}},[o("a",{staticClass:"d-column-panel",on:t._d({},[t.$clickevent,function(e){return e.preventDefault(),e.stopPropagation(),t.openColumnPanel()}])}),t._v(" "),o("div",{staticClass:"d-col-move-column-right",on:{"&mousedown":function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?null:"button"in e&&0!==e.button?null:t.startDragColumn(e)},"&touchstart":function(e){return e.stopPropagation(),t.startDragColumn(e)}}}),t._v(" "),t.colIndex?t._e():o("draggable",{staticClass:"d-column-drop-zone d-to-left",attrs:{list:[],group:t.groupForDrag,disabled:!t.draggableIsEnabled,sort:!1},on:{change:t.appendToNewColumnToLeft,end:t.dragend}}),t._v(" "),o("draggable",{staticClass:"d-column-drop-zone",attrs:{list:[],group:t.groupForDrag,disabled:!t.draggableIsEnabled,sort:!1},on:{change:t.appendToNewColumn,end:t.dragend}}),t._v(" "),o("draggable",{class:t.getInnerClass(),attrs:{list:t.getDragList(),animation:200,group:t.groupForDrag,disabled:!t.draggableIsEnabled,sort:!1,delay:200,delayOnTouchOnly:!0},on:{change:t.append,start:t.dragstart,end:t.dragend}},[t._l(t.getColChilds(),(function(e,l){return["Button"==e.atomType?[o("AtomButton",{attrs:{"block-id":t.blockId,colIndex:t.colIndex,"item-id":e.id}})]:"Text"==e.atomType?[o("AtomText",{attrs:{"block-id":t.blockId,colIndex:t.colIndex,"item-id":e.id}})]:"Header"==e.atomType?[o("AtomHeader",{attrs:{"block-id":t.blockId,colIndex:t.colIndex,"item-id":e.id}})]:"Image"==e.atomType?[o("AtomImage",{attrs:{"block-id":t.blockId,colIndex:t.colIndex,"item-id":e.id}})]:"Form"==e.atomType?[o("AtomForm",{attrs:{"block-id":t.blockId,colIndex:t.colIndex,"item-id":e.id}})]:"Menu"==e.atomType?[o("AtomMenu",{attrs:{"block-id":t.blockId,colIndex:t.colIndex,"item-id":e.id}})]:"Product"==e.atomType?[o("AtomProduct",{attrs:{"block-id":t.blockId,colIndex:t.colIndex,"item-id":e.id}})]:"ProductsList"==e.atomType?[o("AtomProductsList",{attrs:{"block-id":t.blockId,colIndex:t.colIndex,"item-id":e.id}})]:"EmptyLine"==e.atomType?[o("AtomEmptyLine",{attrs:{"block-id":t.blockId,colIndex:t.colIndex,"item-id":e.id}})]:"Hr"==e.atomType?[o("AtomHr",{attrs:{"block-id":t.blockId,colIndex:t.colIndex,"item-id":e.id}})]:"YandexMap"==e.atomType?[o("AtomYandexMap",{attrs:{"block-id":t.blockId,colIndex:t.colIndex,"item-id":e.id}})]:"Gallery"==e.atomType?[o("AtomGallery",{attrs:{"block-id":t.blockId,colIndex:t.colIndex,"item-id":e.id}})]:"Slider"==e.atomType?[o("AtomSlider",{attrs:{"block-id":t.blockId,colIndex:t.colIndex,"item-id":e.id}})]:"Html"==e.atomType?[o("AtomHtml",{attrs:{"block-id":t.blockId,colIndex:t.colIndex,"item-id":e.id}})]:"Video"==e.atomType?[o("AtomVideo",{attrs:{"block-id":t.blockId,colIndex:t.colIndex,"item-id":e.id}})]:"DList"==e.atomType?[o("AtomDList",{attrs:{"block-id":t.blockId,colIndex:t.colIndex,"item-id":e.id}})]:"Social"==e.atomType?[o("AtomSocial",{attrs:{"block-id":t.blockId,colIndex:t.colIndex,"item-id":e.id}})]:t._e()]}))],2)],1)])};l._withStripped=!0;var i=o(147),d=o(7),n=o(156),s=o(1),a={data(){return{body:null,target:null,currentCol:null,rightColumn:null,rightColumnSize:null,draggableIsEnabled:!0,dragStep:0,dragStartPosX:0,dragStartPosY:0,maxApplyCol:11,dragTimeout:null,waiter:null,controlOnStart:!1,groupForDrag:{name:"atoms",pull:this.getDragPullType,revertClone:!0}}},mounted(){this.body=document.querySelector("body");let t=this.getData();this.currentCol=t.attrs.class.value.split("-").pop(),document.addEventListener("atom-image-set-column-draggable",this.eventIsColumnDraggable)},beforeDestroy(){document.removeEventListener("atom-image-set-column-draggable",this.eventIsColumnDraggable)},methods:{openColumnPanel(){let t=this.blockId,e=this.col.id,o=this.colIndex;n.designerLeftMenu.openMenuForColumn({blockId:t,id:e,index:o,type:"column"})},eventIsColumnDraggable(t){this.draggableIsEnabled=t.detail.enabled,t.detail.enabled?document.querySelector("body").classList.remove("d-sortable-disabled"):document.querySelector("body").classList.add("d-sortable-disabled")},getDragPullType(){return!this.controlOnStart||"clone"},getInnerClass(){return["designer-col","d-col-"+this.col.id]},getColumnWrapperClass(){return"d-col-wrapper-"+this.col.id},getElementIndex(t){for(var e=0;t=t.previousElementSibling;)e++;return e},append(t){setTimeout(()=>{if(window.cancel_drag)window.cancel_drag=!1;else{if(t.added){let e=JSON.parse(JSON.stringify(t.added.element));e.id=this.uuid(),this.addNewAtomToColumn({block_id:this.blockId,col_id:this.col.id,index:t.added.newIndex,atom:e})}if(t.moved){if("clone"==this.groupForDrag.pull()){let e=JSON.parse(JSON.stringify(t.moved.element));e.id=this.uuid(),this.addNewAtomToColumn({block_id:this.blockId,col_id:this.col.id,index:t.moved.newIndex,atom:e})}else this.moveAtomInColumn({block_id:this.blockId,col_id:this.col.id,new_index:t.moved.newIndex,old_index:t.moved.oldIndex,clone:document.querySelector("body").classList.contains("d-atom-sorting")})}if(t.removed){let e=0;this.getColumnData(this.blockId,this.col.id).childs.forEach((o,l)=>{l==t.removed.oldIndex&&(e=o.id)}),e=t.removed.element.id,this.deleteAtom({id:e,block_id:this.blockId});let o=this.getBlockData(this.blockId);this.setBlockData({block_id:this.blockId,childs:o.childs}),this.changeColumnsWidthsIfNeeded(this.blockId,this.col.id)}this.deleteStoreCaches(),this.closeLastPanel()}},200)},startDragColumn(t){this.target=t.target,this.target.classList.add("hover");let e=this.getData();this.rightColumn=this.getColumnFromRightHand(this.blockId,this.col.id),this.rightColumnSize=1*this.rightColumn.attrs.class.value.split("-").pop(),this.currentCol=1*e.attrs.class.value.split("-").pop(),this.maxApplyCol=this.currentCol+(this.rightColumnSize-1);let o=this.$refs.thisColumn.closest(".d-row");if(!o)throw new Error(lang.t("Не найдена строка"));this.dragStep=o.offsetWidth/12,this.dragStartPosX=window.scrollX+this.target.getBoundingClientRect().left,this.body=document.querySelector("body"),this.body.classList.add("designer-drag-mode"),this.body.addEventListener(this.$mouseup,this.stopDragColumn),this.body.addEventListener(this.$mousemove,this.mouseDragColumn)},stopDragColumn(t){this.target.classList.remove("hover"),this.setColumnData(this.col),this.setColumnData(this.rightColumn),this.body.classList.remove("designer-drag-mode"),this.body.removeEventListener(this.$mouseup,this.stopDragColumn),this.body.removeEventListener(this.$mousemove,this.mouseDragColumn);let e=new CustomEvent("designer.change-column-width",{detail:{id:this.col.id}});document.dispatchEvent(e)},mouseDragColumn(t){if(null==this.waiter){let e=s.b.getMouseOrTouchMoveCoordinate(t,"x")-this.dragStartPosX;if(Math.abs(e)>=this.dragStep){if(e<0){if(1==this.currentCol)return;this.currentCol--,this.rightColumnSize++}else{if(this.currentCol+1>this.maxApplyCol)return;this.currentCol++,this.rightColumnSize--}this.col.attrs.class.value=this.getColClassBySize(this.currentCol),this.rightColumn.attrs.class.value=this.getColClassBySize(this.rightColumnSize),this.waiter=!0,this.dragTimeout=setTimeout(()=>{clearTimeout(this.dragTimeout),this.dragStartPosX=window.scrollX+this.target.getBoundingClientRect().left,this.waiter=null},200)}}},getDragList(){return JSON.parse(JSON.stringify(this.col.childs))},getData(){return this.getColumnData(this.blockId,this.col.id)},getColChilds(){return this.col.childs},getAdditionalClass(){return this.getData().additional_class},getColumnClass(){let t=this.getData(),e=[],o=this.getData().attrs;o&&o.class&&o.class.value&&e.push(o.class.value),e.push("d-col-12"),e.push(this.getColumnWrapperClass());let l=this.getAdditionalClass();return l&&l.length&&e.push(l),t.hidden.xs&&e.push("d-hidden-col-xs"),e.join(" ")},...Object(d.b)("blocks",["setColumnData","setBlockData","deleteStoreCaches","deleteAtom"])},computed:{...Object(d.c)("blocks",["getColumnData","getBlockData","getColumnFromRightHand"])}},r=o(101),c=o(99),m=o(100),u={name:"Column",mixins:[i.a,r.a,c.a,m.a,a],props:{blockId:{type:String,required:!0},col:{type:Object,required:!0},colIndex:{type:Number,required:!0}},components:{AtomButton:()=>o.e(4).then(o.bind(null,407)),AtomText:()=>o.e(29).then(o.bind(null,408)),AtomImage:()=>o.e(19).then(o.bind(null,387)),AtomForm:()=>o.e(14).then(o.bind(null,390)),AtomMenu:()=>o.e(22).then(o.bind(null,391)),AtomHeader:()=>o.e(17).then(o.bind(null,409)),AtomProduct:()=>o.e(23).then(o.bind(null,388)),AtomProductsList:()=>o.e(24).then(o.bind(null,392)),AtomEmptyLine:()=>o.e(13).then(o.bind(null,410)),AtomHr:()=>o.e(18).then(o.bind(null,411)),AtomYandexMap:()=>o.e(31).then(o.bind(null,412)),AtomGallery:()=>o.e(15).then(o.bind(null,393)),AtomHtml:()=>o.e(16).then(o.bind(null,413)),AtomVideo:()=>o.e(30).then(o.bind(null,394)),AtomSlider:()=>o.e(27).then(o.bind(null,395)),AtomDList:()=>o.e(12).then(o.bind(null,414)),AtomSocial:()=>o.e(28).then(o.bind(null,396))}},h=o(98),g=Object(h.a)(u,l,[],!1,null,null,null);g.options.__file="-readyscript/modules/designer/view/js/app/src/components/designerblock/elements/column/column.vue";e.default=g.exports}}]);