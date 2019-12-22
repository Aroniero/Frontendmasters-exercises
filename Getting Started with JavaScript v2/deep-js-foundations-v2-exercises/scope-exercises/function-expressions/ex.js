function getStudentId(studentId) {
  return studentRecords.find(function matchId(record) {
    return record.id == studentId;
  });
}

function printRecords(recordIds) {
  let records = recordIds.map(getStudentId);

  records.sort((record1, record2) => {
    if (record1.name < record2.name) return -1;
    else if (record1.name < record2.name) return 1;
    else return 0;
  });

  // Bob(664): Not Paid
  records.forEach(record => {
    console.log(
      `${record.name}(${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
    );
  });
}

function paidStudentsToEnroll() {
  let idsToEnroll = studentRecords
    .filter(record => {
      return record.paid && !currentEnrollment.includes(record.id);
    })
    .map(record => {
      return record.id;
    });

  // console.log(idsToEnroll);

  return [...currentEnrollment, ...idsToEnroll];
}

function remindUnpaid(recordIds) {
  let unpaidIds = recordIds.filter(studentId => {
    let record = getStudentId(studentId);
    return !record.paid;
  });

  printRecords(unpaidIds);
}

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false }
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
