class table{

    createTable(users){
        for (let user of users) {
            $('tbody').append(`
            <tr id="${user.id}">
                <td>
                    ${user.id}
                </td>
                <td>
                    ${user.firstName}
                </td>
                <td>
                    ${user.lastName}
                </td>
                <td>
                    ${user.age}
                </td>
            </tr>`);
            this.appendUserDetailRow(user);
        }
    
        this.handleRowClick();
    }

    handleRowClick(){
        let $tableRow = $("#userTable tr");
        $tableRow.on("click", function () {
            let rowId = $(this).attr('id');
            let $detailRow = $('#detail-' + rowId);
            if($detailRow.attr("hidden")){
                $detailRow.removeAttr("hidden");
            } else {
                $detailRow.attr("hidden", "true");
            }
            
        });
    }

    appendUserDetailRow(user){
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
    }
}