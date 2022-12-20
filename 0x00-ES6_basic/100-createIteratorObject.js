/* eslint-disable no-unused-vars */
export default function createIteratorObject(report) {
  const emp = [];
  for (const [dept, employees] of Object.entries(report.allEmployees)) {
    emp.push(employees);
  }
  return emp.flat();
}
