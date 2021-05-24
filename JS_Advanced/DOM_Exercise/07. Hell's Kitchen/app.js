function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs>textarea')

   function onClick() {

      let restaurants = JSON.parse(input.value)
      let venues = {};

      for (let i = 0; i < restaurants.length; i++) {
         [name, ...rest] = restaurants[i].split(/[/\s,-]+/);
         let team = [];

         for (let j = 0; j < rest.length; j += 2) {
            team.push({ name: rest[j], salary: Number(rest[j + 1]) })
         }

         if (venues[name]) {
            venues[name].emp = venues[name].emp.concat(team);
         } else {
            venues[name] = { emp: team };
         }

         venues[name].emp.sort((a, b) => b.salary - a.salary);
         venues[name].bestSalary = venues[name].emp[0].salary;
         venues[name].avgSalary = venues[name].emp.reduce((sum, cur) => sum += cur.salary, 0);
         venues[name].avgSalary = venues[name].avgSalary / venues[name].emp.length;
      }

      let bestRestaurant = {};
      let curSalary = 0;

      for (let [key, value] of Object.entries(venues)) {

         if (value.avgSalary > curSalary) {
            bestRestaurant = { name: key, avgSalary: value.avgSalary, bestSalary: value.emp[0].salary, emp: value.emp };
            curSalary = value.avgSalary;
         }
      }

      let resultOne = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`
      let workers = '';

      bestRestaurant.emp.forEach(x => {
         workers += `Name: ${x.name} With Salary: ${x.salary} `
      });

      document.querySelector('#bestRestaurant>p').textContent = resultOne;
      document.querySelector('#workers>p').textContent = workers;
   }
}

// function solve() {
//    document.querySelector('#btnSend').addEventListener('click', onClick);
//    let input = document.querySelector('#inputs>textarea');

//    function onClick() {
//       let restaurants = JSON.parse(input.value)
//       let venues = {};

//       for (let i = 0; i < restaurants.length; i++) {

//          [name, ...crew] = restaurants[i].split(/[/\s,-]+/);
//          let team = [];

//          for (let j = 0; j < crew.length; j += 2) {
//             let employee = { name: crew[j], salary: Number(crew[j + 1]) };
//             team.push(employee)
//          }

//          if (venues[name]) {
//             venues[name].employees = venues[name].employees.concat(team);
//          } else {
//             let venue = { name: name, employees: team, bestSalary: 0, avgSalary: 0 };
//             venues[name] = venue
//          }

//          venues[name].employees.sort((a, b) => b.salary - a.salary);
//          venues[name].bestSalary = venues[name].employees[0].salary
//          venues[name].avgSalary = venues[name].employees
//             .reduce((sum, cur) => sum + cur.salary, 0) / venues[name].employees.length;
//       }

//       let curSalary = 0;
//       let bestVenue = {};

//       for (const [key, value] of Object.entries(venues)) {

//          let avgSalary = value.avgSalary;

//          if (avgSalary > curSalary) {
//             bestVenue = value;
//             curSalary = bestVenue.avgSalary
//          }
//       }

//       let bestRestaurant = `Name: ${ bestVenue.name } Average Salary: ${ bestVenue.avgSalary.toFixed(2) } Best Salary: ${ bestVenue.bestSalary.toFixed(2) } `;
//       let bestEmployees = '';
//       bestVenue.employees.map(emp => {
//          bestEmployees += `Name: ${ emp.name } With Salary: ${ emp.salary } `;
//       });
//       document.querySelector('#bestRestaurant>p').textContent = bestRestaurant;
//       document.querySelector('#workers>p').textContent = bestEmployees;
//    }
// }