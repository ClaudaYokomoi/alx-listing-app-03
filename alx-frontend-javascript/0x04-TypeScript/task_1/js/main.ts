// Define an interface for a Teacher object
interface Teacher {
    readonly firstName: string; // Cannot be changed after initialization
    readonly lastName: string;  // Cannot be changed after initialization
    fullTimeEmployee: boolean;  // Indicates if the teacher is a full-time employee
    yearsOfExperience?: number; // Optional property: number of years of experience
    location: string;           // The teacher's location
    contract: boolean;          // Indicates if the teacher has a contract
    [propName: string]: any;    // Allows additional dynamic properties of any type
  }
  
  // Define an interface extending Teacher for Directors
  interface Directors extends Teacher {
    numberOfReports: number;  // Number of reports the director manages
  }
  
  // Define a function type interface for printing teacher names
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;  // Function takes two strings and returns a string
  }
  
  // Implement the printTeacher function using the defined function type
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    // Returns the first letter of the first name followed by the last name
    return `${firstName[0]}. ${lastName}`;
  };
  
  // Define an interface for a Student class constructor
  interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface; // Constructor signature
  }
  
  // Define an interface for the methods in the Student class
  interface StudentClassInterface {
    workOnHomework(): string;  // Method for working on homework
    displayName(): string;     // Method to display the student's first name
  }
  
  // Implement the Student class using the constructor interface
  const StudentClass: StudentConstructor = class StudentClass 
    implements StudentClassInterface {
    
    firstName: string;  // Stores the first name of the student
    lastName: string;   // Stores the last name of the student
  
    // Constructor initializing firstName and lastName
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Method to simulate working on homework
    workOnHomework(): string {
      return "Currently working";  // Message indicating work in progress
    }
  
    // Method to display the student's first name
    displayName(): string {
      return this.firstName;  // Return the first name of the student
    }
  };
  
  // Export the implemented function and class
  export { printTeacher, StudentClass };