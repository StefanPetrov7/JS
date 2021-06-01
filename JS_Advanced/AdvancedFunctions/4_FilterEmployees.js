function solve(data, criteria) {

    const arr = JSON.parse(data);
    const [prop, value] = criteria.split('-');
    const result = [];
    arr.map(el => {
        if (el[prop] === value) {
            result.push(el);
        }
    });
    
    return print.call(result);

    function print() {
        this.forEach((el, i) => {
            console.log(`${i}. ${el.first_name} ${el.last_name} - ${el.email}`);
        });
    }
}




solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female');




solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`, 'last_name-Johnson');





// function sortEmploye(data, criteria) {
//     const [key, value] = criteria.split('-');

//     JSON.parse(data)
//         .filter((employe) => employe[key] === value || employe[key] == 'all')
//         .forEach((employe, count) => {
//             console.log(`${count}. ${employe.first_name} ${employe.last_name} - ${employe.email}`);
//         });
// }

// sortEmploye(`[{ "id": "1", 
//     "first_name": "Ardine", 
//     "last_name": "Bassam", 
//     "email": "abassam0@cnn.com", 
//     "gender": "Female" }, { "id": "2", 
//     "first_name": "Kizzee", 
//     "last_name": "Jost", 
//     "email": "kjost1@forbes.com", 
//     "gender": "Female" },{ "id": "3", 
//     "first_name": "Evanne", 
//     "last_name": "Maldin", 
//     "email": "emaldin2@hostgator.com", 
//     "gender": "Male"}]`,
//     'gender-Female')

