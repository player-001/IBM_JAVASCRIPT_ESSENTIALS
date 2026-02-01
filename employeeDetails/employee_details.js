const employees = [
    {id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000, specialization: "Javascript"},
    {id: 2, name: "Alice Smith", age: 28, department: "HR", salary: 45000, specialization: "Python"},
    {id: 3, name: "Bob Johnson", age: 35, department: "Finance", salary: 60000, specialization: "Java"}
]

function displayEmployees(){
    const data = employees.map((employee) => {
        const str = `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`   //, each element is taken and replaced make sure to return
        return str
        }).join("")
    document.getElementById("employeesDetails").innerHTML = data
}

function calculateTotalSalaries(){
    const total = employees.reduce((acc, employee) => {          //main array is reduced into a acc
        acc = acc + employee.salary
        return acc
    }, 0)
    alert(`Total Salary: ${total}`)
}

function displayHREmployees(){
    const HRemployees = employees.filter((employee) => {return employee.department === "HR"})  // filtering only HR employees   
    const displayHR = HRemployees.map((employee) => {
        const str = `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
        return str
        }).join("")
    document.getElementById("employeesDetails").innerHTML = displayHR
}

function findEmployeeById(employeeId){
    const Selectedemployee = employees.find((employee) => {     //finding employee with empployeeId
        return employee.id === employeeId 
        })
    if (Selectedemployee){
        document.getElementById("employeesDetails").innerHTML = `<p>${Selectedemployee.id}: ${Selectedemployee.name} - ${Selectedemployee.department} - $${Selectedemployee.salary}</p>`
    }
    else{
        document.getElementById("employeesDetails").innerHTML = "No Employees Found !"
    }
}

function findBySpecialization(sub){
    const emp = employees.filter((employee) => {
        return employee.specialization === sub
    })
    const dispEmp = emp.map((e) => {
        const s = `<p>${e.id}: ${e.name} - ${e.department} - ${e.specialization}`
        return s
    })
    document.getElementById("employeesDetails").innerHTML = dispEmp
}