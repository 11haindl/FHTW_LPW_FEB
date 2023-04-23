/**
 * Class for creating a tables row object
 */
class row{
    /**
     * constructor:
     * cells: Array of a rows cells
     * @param {string} id - rows id (will be the html tag id), can be empty
     */
    constructor(id){
        this.id = id;
        this.cells = [];
    }

    /**
     * create a new cell object and push it to the rows cells-array
     * @param {string} type 
     * @param {string} attributes 
     * @param {string} value 
     */
    addCell(type, attributes, value){
        let newCell = new cell(type, attributes, value);
        this.cells.push(newCell);
    }

    /**
     * loop through the cells array of the row and build the
     * html for the inner of the row
     * @returns {string} html code for all cells of a row
     */
    buildHTMLCells(){
        let html = ""
        for(let cell of this.cells){
            html += cell.getCellAsHTML();
        }
        return html;
    }

    /**
     * build the html of the row, depending on if there is an
     * id given or not
     * @returns {string} html code for the row
     */
    buildHTMLRow(){
        let html = "";
        if(this.id != ""){
            html = `
            <tr id="${this.id}">
                ${this.buildHTMLCells()}
            </tr>`
        } else {
            html = `
            <tr>
                ${this.buildHTMLCells()}
            </tr>`
        }
        return html;
    }
}