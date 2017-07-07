const numbers = [0,1,2,3,4,5,6,7,8,9];
let id = [0,1,2,3,4,5,6,7,8,9];

let connected = (p, q) => id[p] === id[q];

let union = (p, q) => {
  let pid = id[p];
  let qid = id[q];
  for (var i = 0; i < id.length; i++) {
    if (id[i] == pid) {
      id[i] = qid;
    }
  }
}

// ES6 Class
class QuickFind {
  constructor(numbers = []) {
    this.numbers = numbers;
    this.id = numbers;
  }
  
  connected(p, q) {
    return this.id[p] === this.id[q];
  }
  
  union(p, q) {
    const pid = this.id[p];
    const qid = this.id[q];
    for (var i = 0; i < this.id.length; i++) {
      if (this.id[i] === pid) {
        this.id[i] = qid;
      }
    }
  }
}

let qf = new QuickFind([0,1,2,3,4,5,6,7,8,9]);
qf.union(0,1)
qf.connected(0,1);

