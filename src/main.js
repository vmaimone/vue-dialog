const Vue = require('vue')
const vagGrid = require('./lib')
const dataset = require('../demo/dev-data')

const api = {
  getOrders() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(dataset.slice(0)), 1e3)
    })
  }
}

new Vue({
  el: '#app',
  components: {
    vagGrid
  },
  data: {
    demoGridApi: null,
    boundApi: null,
    filterText: '',
    sorts: [],
    filters: [],
    demoData: [],
    coldefs: [
      { field: 'source', headerName: 'Src' },
      { field: 'inventoryId', headerName: 'Tag #' },
      { field: 'itemNo', headerName: 'Product Code' },
      { field: 'description', headerName: 'Description' },
      { field: 'customer', headerName: 'Customer' },
      { field: 'size', headerName: 'Size' },
      { field: 'location', headerName: 'Location' },
      { field: 'weight', headerName: 'Weight' },
      { field: 'qty', headerName: 'Qty' },
      { field: 'qtyOnOrder', headerName: 'Incoming' },
      { field: 'qtyHardReserved', headerName: 'Rsvd' },
      { field: 'vendor', headerName: 'Vendor' },
      { field: 'poNumber', headerName: 'PO #' },
      { field: 'bol', headerName: 'BOL #' },
      { field: 'heat', headerName: 'Heat' }
    ]

  },
  ready() {
    api
      .getOrders()
      .then(data => {
        return this.demoData = data
      })
      .then(data => {
        console.log( this.demoGridApi )
      })
  },

  // watch: {
  //   rowData(n, o) {
  //     if (n !== o) {
  //       console.log(n)
  //       this.api.setRowData(n || [])
  //     }


  //     this.api.setRowData(newVal);
  //     this.$emit('filter-changed', this.filterModel);
  //     this.api.sizeColumnsToFit();


  //   }
  // }
})