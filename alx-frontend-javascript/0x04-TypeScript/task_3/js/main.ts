/// <reference path="./crud.d.ts" />  // Reference to type definitions for CRUD operations

// Import required types and CRUD module
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Create a new row element with initial data
const row: RowElement = {
  firstName: "Guillaume",  // First name of the row element
  lastName: "Salva",       // Last name of the row element
};

// Insert the row into the data source and store its unique ID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row by adding a new property `age` and keeping existing data
const UpdatedRow: RowElement = { age: 23, ...row };
CRUD.updateRow(newRowID, UpdatedRow);  // Update the row in the data source

// Delete the row using its unique ID
CRUD.deleteRow(newRowID);