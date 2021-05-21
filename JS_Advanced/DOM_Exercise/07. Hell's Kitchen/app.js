function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs>textarea');

   function onClick() {
      let restaurants = JSON.parse(input.value)
      let venues = {};

      for (let i = 0; i < restaurants.length; i++) {

         [name, ...crew] = restaurants[i].split(/[/\s,-]+/);
         let team = [];

         for (let j = 0; j < crew.length; j += 2) {
            let employee = { name: crew[j], salary: Number(crew[j + 1]) };
            team.push(employee)
         }

         if (venues[name]) {
            venues[name].employees = venues[name].employees.concat(team);
         } else {
            let venue = { name: name, employees: team, bestSalary: 0, avgSalary: 0 };
            venues[name] = venue
         }

         venues[name].employees.sort((a, b) => b.salary - a.salary);
         venues[name].bestSalary = venues[name].employees[0].salary
         venues[name].avgSalary = venues[name].employees
            .reduce((sum, cur) => sum + cur.salary, 0) / venues[name].employees.length;
      }

      let curSalary = 0;
      let bestVenue = {};

      for (const [key, value] of Object.entries(venues)) {

         let avgSalary = value.avgSalary;

         if (avgSalary > curSalary) {
            bestVenue = value;
            curSalary = bestVenue.avgSalary
         }
      }

      let bestRestaurant = `Name: ${bestVenue.name} Average Salary: ${bestVenue.avgSalary.toFixed(2)} Best Salary: ${bestVenue.bestSalary.toFixed(2)}`;
      let bestEmployees = '';
      bestVenue.employees.map(emp => {
         bestEmployees += `Name: ${emp.name} With Salary: ${emp.salary} `;
      });
      document.querySelector('#bestRestaurant>p').textContent = bestRestaurant;
      document.querySelector('#workers>p').textContent = bestEmployees;
   }
}