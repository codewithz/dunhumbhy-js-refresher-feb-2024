const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let evenNumbers = [];

for (let index = 0; index < numbers.length; index++) {
  const number = numbers[index];

  if (number % 2 == 0) {
    evenNumbers.push(number);
  }
}

console.log("Original :", numbers);
console.log("Even Numbers :", evenNumbers);

// ----------------------------------------------------------

function filterOdd(number) {
  return number % 2 == 1;
}

const oddNumbers = numbers.filter(filterOdd);

// Every number in numbers array will be passed to filterOdd and if it returns true
//  it will store the result in the array , else it will be dropped
console.log("---------------------- After using filter--------------------");
console.log("Original :", numbers);
console.log("Odd Numbers :", oddNumbers);

console.log(
  "---------------------- After using filter with arrow--------------------"
);

const oddNumbersWithArrow = numbers.filter((number) => number % 2 == 1);

console.log("Original :", numbers);
console.log("Odd Numbers :", oddNumbersWithArrow);

// ------------- Filter with Objects--------------

const jobs = [
  { id: 1, position: "Developer", isActive: true },
  { id: 2, position: "Tester", isActive: true },
  { id: 3, position: "Manager", isActive: false },
  { id: 4, position: "Finance", isActive: true },
  { id: 5, position: "Devops", isActive: false },
];
// -------------------------------------------------------
function filterActiveJobs(x) {
  return x.isActive;
}

const activeJobs=jobs.filter(filterActiveJobs);
// / Every job in jobs array will be passed to filterActiveJobs and if it returns true

console.log("Active Jobs:",activeJobs)


const inActiveJobs=jobs.filter((x) => !x.isActive);

console.log("InActive Jobs:",inActiveJobs)


  




// const job= { id: 1, 
//             position: "Developer", 
//             isActive: true 
//         }