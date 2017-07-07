// ES6 class
class QuickUnion {
  constructor(numbers) {
    this.numbers = numbers;
    this.id = numbers;
    this.size = [1,1,1,1,1,1,1,1,1,1];
  }

  findRoot(i) {
    while (i !== this.id[i]) {
      i = this.id[i];
    }
    return i;
  }

  connected(p, q) {
    return this.findRoot(p) === this.findRoot(q);
  }

  union(p, q) {
    this.p = this.findRoot(p);
    this.q = this.findRoot(q);
    if (p === q) {
      return
    }
    if (this.size[p] < this.size[q]) {
      id[p] = q;
      this.size[q] += this.size[p];
    }else{
      this.id[q] = p;
      this.size[p] += this.size[q];
    }
  }

}

let qu = new QuickUnion([0,1,2,3,4,5,6,7,8,9]);
qu.union(4,5);
qu.connected(4,5);


