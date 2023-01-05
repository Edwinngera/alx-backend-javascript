interface Student {
    firstName: string;
    lastName: string;
    location: string;
}

const studentOne: Student = {
    firstName: 'Taadi',
    lastName: 'Efiekuma',
    location: 'Takoradi',
};

const studentTwo: Student = {
    firstName: 'Siano',
    lastName: 'Ashtown',
    location: 'Kumasi',
};

let studentList: Student[] = [studentOne, studentTwo];

const student_table = document.createElement('table');
const tablebody = document.createElement('tbody');

studentList.forEach((objlis) => {
    const tablename = document.createElement('tablename');
    const tablerow = document.createElement('tablerow');
    const tablelocation = document.createElement('tablelocation');

    tablename.textContent = objlis.firstName;
    tablelocation.textContent = objlis.location;
    tablerow.appendChild(tablename);
    tablerow.appendChild(tablelocation);
    tablebody.appendChild(tablerow);
})
student_table.appendChild(tablebody);
document.body.appendChild(student_table);
