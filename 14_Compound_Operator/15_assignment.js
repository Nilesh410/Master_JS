function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    var marksObtained=g_form.getValue('u_marks_obtained');
    var totalMarks=g_form.getValue('u_total_marks');

    //check field is empty or not 
    if(!marksObtained || !totalMarks) 
    {
        return;
    }

    marksObtained = Number(marksObtained);//convert obtained marks field value into number
    //alert('obtained marks:' + marksObtained);
    totalMarks = Number(totalMarks);//convert total marks field value into number
    //alert('total marks:' + totalMarks);

    //Check both the marks are numeric or not
    if(isNaN(marksObtained) || isNaN(totalMarks) || (marksObtained>totalMarks) || (marksObtained<0))
    {
        g_form.showFieldMsg("u_marks_obtained","Please enter the valid marks in both the fields");
        g_form.setValue('u_marks_obtained',"");
        g_form.setValue('u_grade',"");
        return ;
    }
        var percentage = (marksObtained / totalMarks) * 100;
        //alert('percentage:' + percentage);
        var grade='';
        
        if (percentage > 85) {
            grade='A';
        } else if (percentage > 65) {
            grade='B';
        } else if (percentage > 50) {
            grade='C';
        } else if (percentage < 35) {
            grade='Fail';
        } else {
            grade='';
        }
        g_form.setValue('u_grade', grade);
}
