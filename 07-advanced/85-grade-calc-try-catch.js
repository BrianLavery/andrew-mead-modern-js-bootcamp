// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function (score, totalScore) {
    // Better to do validation upfront and then not run rest of code if an error
    if (typeof score !== 'number' && typeof totalScore !== 'number') {
        throw Error('Please provide numbers only')
    }
    let percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${percent}%)!`
}

try {
    let result = gradeCalc(9, 20)
    console.log(result)
} catch (e) {
    console.log('You must enter 2 numbers')
}

try {
    let result = gradeCalc([], {})
    console.log(result)
} catch (e) {
    console.log('You must enter 2 numbers')
}

try {
    let result = gradeCalc(false, '1')
    console.log(result)
} catch (e) {
    // Can access the error message created above directly
    console.log(e.message);
}