var tableList = /** @class */ (function () {
    function tableList(_element, tableTitle, tableTd, table, obj) {
        var tables = document.createElement('table');
        if (!obj && !obj.width) {
            obj.width = "400px";
        }
        tables.setAttribute("width", obj.width);
        var th = this.createdTh(tableTitle, obj);
        tables.appendChild(th);
        var tr = this.createdTr(table, tableTd, tableTitle, tables, obj);
        _element.appendChild(tr);
        if (obj.border) {
            this.setBorder(tables);
        }
    }
    tableList.prototype.setBorder = function (tables) {
        tables.setAttribute("border", "1");
        this.setBordercon(tables);
    };
    tableList.prototype.createdTh = function (tableTitle, obj) {
        var tr = this.setTr(obj);
        for (var i = 0; i < tableTitle.length; i++) {
            var th = document.createElement('th');
            th.innerHTML = tableTitle[i];
            tr.appendChild(th);
        }
        return tr;
    };
    tableList.prototype.createdTr = function (table, tableTd, tableTitle, tables, obj) {
        for (var i = 0; i < table.length; i++) {
            var tr = this.setTr(obj);
            for (var k = 0; k < tableTitle.length; k++) {
                var td = this.setTd();
                td.innerHTML = table[i][tableTd[k]];
                tr.appendChild(td);
            }
            tables.appendChild(tr);
        }
        this.setBordercon(tables);
        if (obj.stripe) {
            for (var i = 0; i < tables.children.length; i++) {
                if (i % 2 === 1) {
                    tables.children[i].setAttribute("style", 'background:#FAFAFA');
                }
                else {
                    tables.children[i].setAttribute("style", 'background:#FFFFFF');
                }
            }
        }
        return tables;
    };
    tableList.prototype.setTr = function (obj) {
        var tr = document.createElement('tr');
        tr.setAttribute("align", obj.align);
        return tr;
    };
    tableList.prototype.setTd = function () {
        return document.createElement('td');
    };
    tableList.prototype.setBordercon = function (tables) {
        tables.setAttribute("cellpadding", "0");
        tables.setAttribute("cellspacing", "0");
    };
    return tableList;
}());
