// REMOVE FIRST N OCCURENCES
/*

const deleteNth = (arr: number[], n: number): number[] => {
   const itemOccurence = (number: number): number => arr.filter((num:number) => number === num).length;

   for (let number of arr) {
      const occurence: number = itemOccurence(number);

      if (occurence > n) {
         for (let i = 0; i < occurence - n; i++) {
            arr.splice(arr.lastIndexOf(number), 1);
         }
      }
   }

   return arr;
};

console.log(deleteNth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
*/

// MULTIPLES OF 3 OR 5
/*
export class Challenge {
   static solution = (number: number): number => {
      let sum: number = 0;
      if (number === 0) return 0;
      for (let i: number = 0; i < number; i++) {
         if (i % 3 === 0 || i % 5 === 0) sum += i;
      }
      return sum;
   };
}

console.log(Challenge.solution(5));
*/

// SPIN WORDS
/*
export const spinWords = (words: string): string => {
   let str: string[] = words.split(" ");
   let result: string[] = [];
   for (let i: number = 0; i < str.length; i++) {
      if (str[i].length >= 5) {
         result.push(str[i].split("").reverse().join(""));
      } else {
         result.push(str[i]);
      }
   }

   return result.join(" ");
}

console.log(spinWords("Hey fellow warrior"));
console.log(spinWords("I'm a warrior"));
*/

// DISEMVOWEL TROLLS
/*
export class Kata {
   static disemvowel = (str: string): string => {
      let vowels: string = "aeiouAEIOU";

      let array: string[] = [...str];

      for (let i: number = 0; i < array.length; i++) {
         if (vowels.includes(array[i])) {
            array.splice(i, 1);
         }
      }

      return array.join("");
   }
}

console.log(Kata.disemvowel("Hello"));
console.log(Kata.disemvowel("This website is for losers LOL!"));
*/

