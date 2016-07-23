## Usage
In the template: 
```
<vue-grid 
  :row-data="rows"
  :column-defs="cols"
  :sort-model.sync="sorts"
  :filter-model.sync="filters"
  :quick-filter="quickfilter">
</vue-grid>
```
Parent Component: 
```
const VueGrid = require('vm-grid');

const $vm = new Vue({
  
  el: '#app',
  
  components: {'vue-grid': VueGrid },
  
  created: function () {
    getSampleData3().then(data => this.$set('rows', data))
  },
  
  data: {
    quickfilter: '',
    
    cols: [
      {headerName: 'col1', field: 'Column 1'},
      {headerName: 'col2', field: 'Column 2'},
      {headerName: 'col3', field: 'Column 3'}
    ],
    
    rows: [],
    
    /* will set the initial state of filter and sort models */
    filters: { 
      fieldName: ['selectedValue'] 
    },
    sorts: {
      something: 'asc'
    }
  },
  
  methods: {
    /* interact with the bound models */
    sortBySomething: function() {  
      this.$set( 'sorts', { something: 'desc'} )  
    }
  }    
})
```
