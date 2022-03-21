function createTable(rootHTML, tableName, headers, elements) {
    let name = document.createElement('h1');
    name.innerHTML = tableName;
    rootHTML.append(name);

    let table = document.createElement('table');
    rootHTML.append(table);

    let headersRow = document.createElement('tr');
    table.append(headersRow);
    
    for(let i = 0; i < headers.length; i++) {
        let header = document.createElement('th');
        header.innerHTML = headers[i];
        headersRow.append(header);
    }

    for(let i = 0; i < elements.length; i++) {
        let row = document.createElement('tr');
        table.append(row);
        
        for(let j = 0; j < elements[i].length; j++) {
            let element = document.createElement('td');
            element.innerHTML = elements[i][j];
            row.append(element);
        }
    }
}


function createForm(root, formArray) {
    var form = document.createElement("form");
    root.append(form);

    for(let i = 0; i < formArray.length; i++) {
        if (Object.keys(formArray[i]).length > 1) {
            let label = document.createElement("label");
            label.innerHTML = formArray[i].label;
            
            let select = document.createElement("select");
            select.id = formArray[i].selectId;

            let selectValues = formArray[i].select;
            for (let j = 0; j < selectValues.length; j++) {
                let option = document.createElement("option");
                option.value = selectValues[j];
                option.text = selectValues[j];
                select.append(option);
            }

            label.append(select);
            form.append(label);
        } else {
            let submit = document.createElement("input");
            submit.type = formArray[i].input.type;
            submit.value = formArray[i].input.value;

            submit.onclick = formArray[i].input.handler;
            // form.onsubmit = formArray[i].input.handler;

            form.append(submit);
        }
    }
}