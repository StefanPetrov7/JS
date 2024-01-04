function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs textarea');

   function onClick() {

      let inputArr = JSON.parse(input.value);
      let restaurants = {};

      for (let i = 0; i < inputArr.length; i++) {

         let [name, ...rest] = inputArr[i].split(/[/\s,-]+/);
         let team = [];

         for (let j = 0; j < rest.length; j += 2) {

            team.push({ name: rest[j], salary: Number(rest[j + 1]) })
         }

         if (restaurants[name]) {
            restaurants[name].emp = restaurants[name].emp.concat(team);
         } else {
            restaurants[name] = {
               emp: team,
            };
         }

         restaurants[name].emp.sort((a, b) => b.salary - a.salary);
         restaurants[name].bestSalary = restaurants[name].emp[0].salary;
         restaurants[name].avgSalary = restaurants[name].emp.reduce((sum, cur) => sum + cur.salary, 0) / restaurants[name].emp.length;
      }

      let entries = Object.entries(restaurants);
      entries.sort((a,b)=> b[1].avgSalary - a[1].avgSalary);
      restaurants = entries;
      
      let bestRestaurant = restaurants[0];

      let resultOne = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].avgSalary.toFixed(2)} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`;
      let resultTwo = bestRestaurant[1].emp.map(x => `Name: ${x.name} With Salary: ${x.salary}`).join(' ');

      document.querySelector('#bestRestaurant p').textContent = resultOne;
      document.querySelector('#workers p').textContent = resultTwo;
   }
}

// => Below solution gives 72 points need to be checked and refactored.
// function solve() {
//    document.querySelector('#btnSend').addEventListener('click', onClick);

//    function onClick() {
//       let textInput = document.querySelector('#inputs textarea').value;
//       let inputArr = JSON.parse(textInput.trim());

//       let restaurants = inputArr.reduce((rest, el, i, arr) => {

//          const args = el.split(/[-,]+/).map(x => x.trim());
//          const name = args[0];

//          const empData = args.splice(1).reduce((emp, cur, i, ar) => {
//             const curArr = cur.split(' ');
//             const curEmp = { name: curArr[0], salary: Number(curArr[1]) };
//             emp.push(curEmp);
//             return emp;
//          }, []);

//          const curRest = {
//             name: name,
//             employees: empData,
//             avgSalary: empData.reduce((acc, p) => acc + p.salary, 0) / empData.length,
//          };

//          if (rest.some(x => x.name == curRest.name)) {

//             rest.forEach(obj => {
//                if (obj.name == curRest.name) {
//                   curRest.employees.forEach(newEmp => {
//                      if (!obj.employees.some(emp => emp.name == newEmp.name)) {
//                         obj.employees.push(newEmp);
//                      }
//                   });
//                }
//             });

//             return rest;
//          }

//          rest.push(curRest);
//          return rest;
//       }, []);

//       restaurants = restaurants.sort((a, b) => b.avgSalary - a.avgSalary);
//       restaurants.forEach(restaurant => restaurant.employees.sort((a, b) => b.salary - a.salary));
//       const bestRest = restaurants[0];
//       const bestEmp = bestRest.employees;
//       let resultOne = `Name: ${bestRest.name} Average Salary: ${bestRest.avgSalary.toFixed(2)} Best Salary: ${bestRest.employees[0].salary.toFixed(2)}`;
//       let resultTwo = bestEmp.map(x => `Name: ${x.name} With Salary: ${x.salary}`).join(' ');

//       document.querySelector('#bestRestaurant p').textContent = resultOne;
//       document.querySelector('#workers p').textContent = resultTwo;
//    }
// }