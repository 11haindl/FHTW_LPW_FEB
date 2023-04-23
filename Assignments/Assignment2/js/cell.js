/**
 * Class for a cell of a table row
 */
class cell {
    /**
     * consturctor:
     * @param {string} type - th or td
     * @param {string} attributes - all kind of attributes that a html table cell can have
     * @param {string} content - text in cell
     */
    constructor(type, attributes, content) {
        this.type = type;
        this.attributes = attributes;
        this.content = content;
    }

    /**
     * build a html string for displaying the cell depending on type, attributes and content
     * @returns {string} html code of a cell
     */
    getCellAsHTML(){
        let html = "";
        if(this.attributes != ""){
            html = `<${this.type} ${this.attributes}>${this.content}</${this.type}>`;
        } else {
            html = `<${this.type}>${this.content}</${this.type}>`;
        }
        return html;
    }
}