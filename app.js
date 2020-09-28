// from data.js
var tableData = data;


var row_number=1;
var cell=0;



tableData.forEach((report)=> {
    
    cell_list=[]
    Object.entries(report).forEach(([key, value]) => {
        //console.log(`${value}`);
        var fill_text=(`${value}`);
        cell_list.push(fill_text);
    });
        
    //console.log(cell_list);    
    var table=document.getElementById("ufo-body");
    var row=table.insertRow(row_number);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);

        //add text to the new cells
    cell1.innerHTML=cell_list[0];
    cell2.innerHTML=cell_list[1];
    cell3.innerHTML=cell_list[2];
    cell4.innerHTML=cell_list[3];
    cell5.innerHTML=cell_list[4];
    cell6.innerHTML=cell_list[5];
    cell7.innerHTML=cell_list[6];
    

    var row_number=row_number+1;
    
});




function setFilter() {
    d3.select('tbody').html(' ')
    var inputElement= d3.select('#datetime');
    var inputValue= inputElement.property('value'); 
    var tempArray= tableData.filter(sighting => sighting.datetime === inputValue);



    var row_number=1;
    var cell=0;

    function filterDisplay(array) {
        array.forEach((report)=> {
            
            cell_list=[]
            Object.entries(report).forEach(([key, value]) => {
                //console.log(`${value}`);
                var fill_text=(`${value}`);
                cell_list.push(fill_text);
            });
                
            //console.log(cell_list);    
            var table=document.getElementById("ufo-body");
            var row=table.insertRow(row_number);
            var cell1=row.insertCell(0);
            var cell2=row.insertCell(1);
            var cell3=row.insertCell(2);
            var cell4=row.insertCell(3);
            var cell5=row.insertCell(4);
            var cell6=row.insertCell(5);
            var cell7=row.insertCell(6);

                //add text the new cells
            cell1.innerHTML=cell_list[0];
            cell2.innerHTML=cell_list[1];
            cell3.innerHTML=cell_list[2];
            cell4.innerHTML=cell_list[3];
            cell5.innerHTML=cell_list[4];
            cell6.innerHTML=cell_list[5];
            cell7.innerHTML=cell_list[6];
            

            var row_number=row_number+1;
            
        });

    };

    filterDisplay(tempArray);

};
var button=d3.select("#filter-btn");



button.on("click", setFilter);


