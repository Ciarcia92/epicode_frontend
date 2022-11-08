class Pagination {
    constructor(items=[], pageSize=10) {
      this.items = items;
      this.pageSize = pageSize;
    }
  
    viewFirst() {
      return this.items[0];
    }
  
    viewLast() {
      return this.items[this.items.length - 1];
    }
  
  }



  /*
  const users = [
    {id: 1, firstName: 'giorgio', lastName: 'rossi', classe: 'A'},
    {id: 1, firstName: 'giorgio', lastName: 'rossi', classe: 'A'},
    {id: 1, firstName: 'giorgio', lastName: 'rossi', classe: 'A'},
    {id: 1, firstName: 'giorgio', lastName: 'rossi', classe: 'A'},
    {id: 1, firstName: 'giorgio', lastName: 'rossi', classe: 'A'},
    {id: 1, firstName: 'giorgio', lastName: 'rossi', classe: 'A'},
    {id: 1, firstName: 'giorgio', lastName: 'rossi', classe: 'A'},
    {id: 1, firstName: 'giorgio', lastName: 'rossi', classe: 'A'}
  ]
  
  
  */