Please refer to https://haimei-zhang.github.io/data-table-example/ to view the result.

## Ajax API Data
This project needs to be served as a static server in order to read the data (The example data is contained in a json file).
Please refer to one of the approaches from [Big List of http Static Servers](https://gist.github.com/willurd/5720255) to run this project.

## Responsive
The page works responsively to adopt different screen sizes.
* This includes the input fields and the datatable
* The minumum supported page width is 320px

## Search and Filter
The overall Search includes rows in the result with any column matching the input.
* The input is not case sensitive
* After input, hitting enter or click the Search button shows the result
* e.g. search ddl would filter by PO number, search Aug would filter by date created

The filters add extra restrictions to the search result.
* These filters act on keyup, after typing, it restricts the data of a particular column
* I decided not to include a Apply button for the filters just for ease of use and less confusion

## Position of the data table columns
The order of the columns currently respects the source data.

## Order of statuses
The colours represent the status of the orders as below:
* Approved - Supplier Pending (orange)
* Supplier Accepted (dark yellow)
* Waiting to send (light yellow)
* Shipped (green)

## Object Oriented Javascript
The Javascript is written in an Object Oriented way, and the code demostrates the usage of the below:
* mimic defining and instantiating a class - e.g. CustomDataTable
* public and private method usage
* static method usage - e.g. Toggler.toggle()
