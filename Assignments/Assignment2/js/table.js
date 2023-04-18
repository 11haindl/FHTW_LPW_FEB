class table {

    createTable(users) {
        this.buildTableHead(users[0]);
        for (let user of users) {
            this.buildTableBody(user);
            this.getRowEntries(user);
        }
        this.handleRowClick(users);

    }

    buildTableHead(user) {
        let columnIndex = 0;
        for (const key of Object.keys(user)) {
            if (columnIndex > 3) {
                break;
            }
            $('#table-head').append(`
                <th scope="col">${key}</th>
            `);
            columnIndex++;
        }

    }

    buildTableBody(user) {
        let id = Object.values(user)[0];
        $('tbody').append(`<tr id="${id}"></tr>`);
        //this.appendUserDetailRow(user)
    }

    getRowEntries(user) {
        let id = Object.values(user)[0];
        let columnIndex = 0;
        for (const value of Object.values(user)) {
            if (columnIndex > 3) {
                break;
            }
            $('#' + id).append(`
                <td>${value}</td>
            `);
            columnIndex++;
        }
    }

    handleRowClick(users) {
        let self = this;
        let $tableRow = $("#userTable tr");
        $tableRow.on("click", function () {
            let rowId = $(this).attr('id');
            let $detailRow = $('#detail-' + rowId);
            console.log(rowId);
            console.log('#detail-' + rowId);
            if ($detailRow.length) {
                $detailRow.remove();
            } else {
                $('#' + rowId).after(self.appendUserDetailRow(users[rowId - 1]));
            }
        });
    }

    appendUserDetailRow(user) {
        let id = Object.values(user)[0];
        let rowToAppend = `
        <tr id="detail-${id}">
            <td colspan="4" class="joinCell">
                <div id="detail-info-${id}">
                    ${this.buildDetailTable(user)}
                </div>
            </td>
        </tr>`;
        return rowToAppend;
    }

    buildDetailTable(object) {
        let detailTable = `
        <table class="table table-warning mb-0">
            <tbody>
                ${this.getDetailEntries(object)}
            </tbody>
        </table>
        `;
        return detailTable;
    }

    getDetailEntries(object) {

        let rows = "";
        for (let [key, value] of Object.entries(object)) {
            let row = "";
            if (typeof value === 'object' && value != null) {
                row = `
                <tr>
                    <th>${key}:</th>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="joinCell">
                        ${this.buildDetailTable(value)}
                    </td>
                </tr>
                `;
            } else {
                row = `
                <tr>
                    <th>${key}:</th>
                    <td>${value}</td>
                </tr>
                `;
            }
            console.log(row);
            console.log("key: " + key +", value: " + value); 
            rows += row;
        }
        return rows;
    }

    getDetailedInformation(user) {
        let id = Object.values(user)[0];
        $('#' + id).append(`
            
        `);
    }

    /*appendUserDetailRow(user) {
        $('tbody').append(`
        <tr hidden="true" id="detail-${user.id}">
            <td colspan="4">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col
                        ">
                        <img class="mx-auto d-block" src="${user.image}">
                        </div>
                        <div class="col">
                            <ul>
                                <li>Mädchenname: ${user.maidenName}</li>
                                <li>Geschlecht: ${user.gender}</li>
                                <li>E-Mail: ${user.email}</li>
                                <li>Telefon: ${user.phone}</li>
                                <li>Benutzername: ${user.username}</li>
                                <li>Passwort: ${user.password}</li>
                                <li>Geburtsdatum: ${user.birthDate}</li>
                                <li>Straße: ${user.address.address}</li>
                                <li>Ort: ${user.address.city}</li>
                                <li>PLZ: ${user.address.postalCode}</li>
                                <li>Bundesstaat: ${user.address.state}</li>
                                <li>Koordinaten:</li>
                                <ul>
                                    <li>Breitengrad: ${user.address.coordinates.lat}</li>
                                    <li>Längengrad: ${user.address.coordinates.lng}</li>
                                </ul>
                                <li>Blutgruppt: ${user.bloodGroup}</li>
                                <li>Größe: ${user.height}</li>
                                <li>Gewicht: ${user.weight}</li>
                                <li>Augenfarbe: ${user.eyeColor}</li>
                                <li>Haarfarbe: ${user.hair.color}</li>
                                <li>Haartyp: ${user.hair.type}</li>
                                <li>Domain: ${user.domain}</li>
                                <li>IP Adresse: ${user.ip}</li>
                                <li>MAC Adresse: ${user.macAddress}</li>
                            </ul>
                        </div>
                        <div class="col">
                            <ul>
                                
                                <li>Hochschule: ${user.university}</li>
                                <li>Zahlungsmittel:</li>
                                <ul>
                                    <li>Kartentyp: ${user.bank.cardType}</li>
                                    <li>Kartennummer: ${user.bank.cardNumber}</li>
                                    <li>gültig bis: ${user.bank.cardExpire}</li>
                                    <li>IBAN: ${user.bank.iban}</li>
                                    <li>Wärung: ${user.bank.currency}</li>
                                </ul>
                                <li>Firma: ${user.company.name}</li>
                                <ul>
                                    <li>Abteilung: ${user.company.department}</li>
                                    <li>Position: ${user.company.title}</li>
                                    <li>Straße: ${user.company.address.address}</li>
                                    <li>Ort: ${user.company.address.city}</li>
                                    <li>PLZ: ${user.company.address.postalCode}</li>
                                    <li>Bundesstaat: ${user.company.address.state}</li>
                                    <li>Breitengrad: ${user.company.address.coordinates.lat}</li>
                                </ul>
                                <li>EI-Nummer: ${user.ein}</li>
                                <li>SV-Nummer: ${user.ssn}</li>
                                <li>UserAgent: ${user.userAgent}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </td>
        </tr>`);
    }*/
}