class tableList{
  constructor(_element:Element,tableTitle:[string],tableTd:[string],table:[Object],obj:any){
    let tables = document.createElement('table');
    if(!obj && !obj.width){
      obj.width = "400px";
    }
    tables.setAttribute("width",obj.width);
    let th = this.createdTh(tableTitle,obj);
    tables.appendChild(th);
    let tr = this.createdTr(table,tableTd,tableTitle,tables,obj);
    _element.appendChild(tr)
    if(obj.border){
      this.setBorder(tables);
    }
  }
  setBorder(tables:Element):void{
    tables.setAttribute("border","1");
    this.setBordercon(tables);
  }
  createdTh(tableTitle:[string],obj: { align: string; }):Element{
    let tr = this.setTr(obj);
    for(let i  = 0; i<tableTitle.length;i++){
      let th = document.createElement('th');
      th.innerHTML = tableTitle[i];
      tr.appendChild(th);
    }
    return tr;
  }
  createdTr(table: [Object] | { [x: string]: string; }[],tableTd: [string] | (string | number)[],tableTitle: [string],tables:Element,obj: any):Element{
    for(let i = 0; i<table.length;i++){
      let tr = this.setTr(obj);
      for(let k = 0;k<tableTitle.length;k++){
        let td = this.setTd();
        td.innerHTML = table[i][tableTd[k]]
        tr.appendChild(td);
      }
      tables.appendChild(tr);
    }
    this.setBordercon(tables);
    if(obj.stripe){
      for (let i = 0;i<tables.children.length;i++){
        if(i % 2 === 1){
          tables.children[i].setAttribute("style",'background:#FAFAFA');
        }else{
          tables.children[i].setAttribute("style",'background:#FFFFFF');
        }
      }
    }
    return tables;
  }
  setTr(obj: { align: string; }):Element{
    let tr:Element = document.createElement('tr');
    tr.setAttribute("align",obj.align);
    return tr;
  }
  setTd():Element{
    return document.createElement('td');
  }
  setBordercon(tables: Element){
    tables.setAttribute("cellpadding","0");
    tables.setAttribute("cellspacing","0");
  }
}