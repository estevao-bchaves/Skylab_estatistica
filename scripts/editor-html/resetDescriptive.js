/**
 * It resets all the HTML descriptive page's form
 */
function resetDescriptive(btnOrganize = false) {
    $('tbody').sortable({disabled: true});

    if(window.bar != undefined) window.bar.destroy();

    document.getElementById('results-title').innerHTML = ""
    document.getElementById('results').innerHTML = "";
    document.getElementById("explanation").innerHTML = "";
    document.getElementById("chart").innerHTML = "";
    document.getElementById('mean').innerHTML = ``;
    document.getElementById('mode').innerHTML = ``; 

    //The measures of position cannot be changed by re-ordering the table
    if (!btnOrganize) {
        document.getElementById('measure').innerHTML = ``;
        document.getElementById('median').innerHTML = ``;    
    }

    document.getElementById('standard-deviation').innerHTML = ``;  
    document.getElementById('variance').innerHTML = ``;   
}