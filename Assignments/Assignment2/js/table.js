/**
 * Class for creating tables
 */
class table {
    /**
     * constructor:
     * @param {string} headId - id of the table head
     * @param {string} bodyId - id of the table body
     * @param {string} columnNumber - number of columns to display
     */
    constructor(headId, bodyId, columnNumber) {
        this.headId = headId;
        this.bodyId = bodyId;
        this.columnNumber = columnNumber;
    }

    /**
     * create the main table by building the head row,
     * loop through all users in the given object to get a row for every user.
     * table rows should react when clicked
     * @param {any} users 
     */
    createTable(users) {
        this.buildTableHead(users[0]);
        for (let user of users) {
            this.buildTableBody(user);
        }
        this.handleRowClick(users);
    }

    /**
     * loop through the keys of the given object
     * break up condition: columnIndex reaches the number of columns to display
     * append a th cell for every key in object
     * @param {any} object 
     */
    buildTableHead(object) {
        let columnIndex = 0;
        for (const key of Object.keys(object)) {
            if (columnIndex > this.columnNumber - 1) {
                break;
            }
            let headerCell = new cell("th", 'scope="col"', key);
            $(this.headId).append(headerCell.getCellAsHTML());
            columnIndex++;
        }
    }

    /**
     * create a new row object with id of the given object,
     * loop through the values of the given object
     * break up condition: columnIndex reaches the number of columns to display
     * add a cell to the row for every value,
     * append the row to the table body
     * @param {any} object 
     */
    buildTableBody(object) {
        let newRow = new row(object.id);
        let columnIndex = 0;
        for (const value of Object.values(object)) {
            if (columnIndex > this.columnNumber - 1) {
                break;
            }
            newRow.addCell("td", "", value);
            columnIndex++;
        }
        $(this.bodyId).append(newRow.buildHTMLRow());
    }

    /**
     * call a function when a row is clicked:
     * get the id of the clicked row
     * $rowDetail is an id for a new row. If the row with this id already exists,
     * remove the row from the table, otherwise create it after the clicked row
     * @param {any} users 
     */
    handleRowClick(users) {
        let self = this;
        let $tableRow = $("#userTable tr");
        $tableRow.on("click", function () {
            let rowId = $(this).attr('id');
            let $detailRow = $('#detail-' + rowId);
            if ($detailRow.length) {
                $detailRow.remove();
            } else {
                $('#' + rowId).after(self.getUserDetailRow(users[rowId - 1]));
            }
        });
    }

    /**
     * create a new row with id "detail" + id of the given object
     * set attributes: 
     * - colspan for making the column as wide as the whole table
     * - class for specific design
     * create a new table that will be a subtable of the main table
     * add a Cell to the created row with content of the created subtable
     * @param {any} object 
     * @returns {string} - html row with detailed information
     */
    getUserDetailRow(object) {
        let newRow = new row(`detail-${object.id}`);
        let attributes = `colspan="${this.columnNumber}" class="joinCell"`;
        let subtable = new table("", "subtable-body", 0);
        newRow.addCell("td", attributes, subtable.buildSubtable(object));
        return newRow.buildHTMLRow();
    }

    /**
     * make html code of a table with body,
     * inside the body get all the entries needed
     * @param {any} object 
     * @returns {string} - html table for subtable
     */
    buildSubtable(object) {
        let detailTable = `
        <table class="table table-warning mb-0">
            <tbody id="${this.bodyId}">
                ${this.getDetailEntries(object)}
            </tbody>
        </table>`;
        return detailTable;
    }

    /**
     * For every key-value pair in the object, get the correct rows to display
     * @param {any} object 
     * @returns {string} - rows of a table
     */
    getDetailEntries(object) {
        let rows = "";
        for (let [key, value] of Object.entries(object)) {
            rows += this.checkForObject(key, value);
        }
        return rows;
    }

    /**
     * if the value is an object and it is not null, create a row for the key
     * and a row for the value. The key row has a cell containing the key and an emty cell.
     * As the value is an object, in the value row will be only one cell, that calls 
     * the buildSubtable(value) method again. This is a recursive call, 
     * so that a subtable gets created as long as the value is still an object and not a string.
     * 
     * if the value is already a string, a new row will be created, with a cell for displaying 
     * the key and a cell for displaying the value
     * @param {string} key 
     * @param {any} value 
     * @returns {string} - rows that should be displayed
     */
    checkForObject(key, value) {
        let rowsToAdd = "";
        if (typeof value === 'object' && value != null) {
            let keyRow = new row("");
            keyRow.addCell("th", "", `${key}: `);
            keyRow.addCell("td", "", "");
            let valueRow = new row("");
            valueRow.addCell("td", 'colspan="2" class="joinCell"', this.buildSubtable(value));
            rowsToAdd = keyRow.buildHTMLRow() + valueRow.buildHTMLRow();
        } else {
            let newRow = new row("");
            newRow.addCell("th", "", `${key}: `);
            newRow.addCell("td", "", `${value}`);
            rowsToAdd = newRow.buildHTMLRow();
        }
        return rowsToAdd;
    }
}