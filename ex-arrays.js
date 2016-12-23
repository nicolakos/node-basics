var grades = [100, 50, 75];

var totalGrade = 0


grades.push(89);

grades.forEach (function(grade){
  totalGrade = totalGrade + grade;
  console.log('sum' + totalGrade)
})

var average = totalGrade / grades.length;
console.log( 'average' + average);
