function calcGrade() {

    gradeAs1 = document.getElementById("grAs1").value;
    gradeAs2 = document.getElementById("grAs2").value;
    gradeAs3 = document.getElementById("grAs3").value;
    gradeMid = document.getElementById("grMid").value;
    gradeFin = document.getElementById("grFin").value;
    gradAvg = (0.15 * gradeAs1) + (0.15 * gradeAs2) + (0.25 * gradeAs3) + (0.25 * gradeMid) + (0.25 * gradeFin);

    document.getElementById("emptyString").innerHTML = gradAvg.toString();



}