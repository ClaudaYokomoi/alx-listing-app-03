// Define an interface for Director-specific methods
interface DirectorInterface {
    workFromHome(): string;  // Method indicating remote work capability
    getCoffeeBreak(): string;  // Method indicating break permission
    workDirectorTasks(): string;  // Method describing director's tasks
  }
  
  // Define an interface for Teacher-specific methods
  interface TeacherInterface {
    workFromHome(): string;  // Method indicating remote work capability
    getCoffeeBreak(): string;  // Method indicating break permission
    workTeacherTasks(): string;  // Method describing teacher's tasks
  }
  
  // Class implementing DirectorInterface
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";  // Director can work remotely
    }
  
    getCoffeeBreak(): string {
      return "Getting a coffee break";  // Director is allowed a coffee break
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";  // Describes director's work
    }
  }
  
  // Class implementing TeacherInterface
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";  // Teacher cannot work remotely
    }
  
    getCoffeeBreak(): string {
      return "Cannot have a break";  // Teacher is not allowed a break
    }
  
    workTeacherTasks(): string {
      return "Getting to work";  // Describes teacher's work
    }
  }
  
  // Function to create an employee based on salary
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher();  // Teacher is assigned for low salary
    } else {
      return new Director();  // Director is assigned for higher salary
    }
  }
  
  // Test employee creation with different salaries
  console.log(createEmployee(200));  // Logs Teacher instance
  console.log(createEmployee(1000));  // Logs Director instance
  console.log(createEmployee("$500"));  // Logs Director instance
  
  // Functions specific to employees
  
  // Function to check if an employee is a Director
  function isDirector(employee: Teacher | Director): boolean {
    return employee instanceof Director;  // Checks instance type
  }
  
  // Function to execute employee-specific tasks
  function executeWork(employee: Teacher | Director): string {
    if (employee instanceof Director) {
      return employee.workDirectorTasks();  // Executes Director tasks
    } else if (employee instanceof Teacher) {
      return employee.workTeacherTasks();  // Executes Teacher tasks
    }
  }
  
  // Test task execution for different employees
  console.log(executeWork(createEmployee(200)));  // Executes Teacher's task
  console.log(executeWork(createEmployee(1000)));  // Executes Director's task
  
  // Define string literal types for subjects
  type Subjects = "Math" | "History";
  
  // Function to simulate teaching a class
  function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
      return `Teaching Math`;  // Describes teaching Math
    } else if (todayClass === "History") {
      return `Teaching History`;  // Describes teaching History
    }
  }
  
  // Test teaching different classes
  console.log(teachClass("Math"));  // Logs teaching Math
  console.log(teachClass("History"));  // Logs teaching History