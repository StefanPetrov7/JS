// ======> Exercise Objects & Composition

// 1.	Calorie Object

function solve1(arr) {

    let result = {};
    for (let i = 0; i < arr.length; i += 2) {
        result[arr[i]] = Number(arr[i + 1]);
    }
    return result;
}


//console.log(solve1(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));

// ==========================================================================================================
// ===> 2.	Construction Crew

function solve2(worker) {

    if (worker.dizziness == true) {
        worker.levelOfHydrated+= (0.1*worker.weight*worker.experience);
        worker.dizziness = false;
    }
    return worker;
}

// console.log(solve2({
//     weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true 
// }
// ));


// ==========================================================================================================
// ===> 3.	Car Factory

