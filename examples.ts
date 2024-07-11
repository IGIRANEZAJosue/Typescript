class Human {
   public first: string;
   private last: string;
   protected age: number;

   constructor(first: string, last: string, age: number) {
      this.first = first;
      this.last = last;
      this.age = age;
   }

   getName(): string {
      return `${this.first} ${this.last}`;
   }

}

class Person extends Human {
   constructor(first: string, last: string, age: number) {
      super(first, last, age);
   }
}

const h1 = new Human("Jane", "Doella", 30);
console.log(h1);


const p1 = new Person("John", "Doe", 30);
console.log(p1);