//It chooses what to show when the form is changed
$("#import-select").on("change", function() {
    let table = document.getElementById('results');
    if (table.innerHTML != "") resetDescriptive();

    let dataType = document.getElementById('import-select').value;

    if (dataType == 'hand') {
        $('#file-form').trigger('reset');
        document.getElementById('hand-form').style = ''
        document.getElementById('file-form').style = 'display:none'
    }
    
    if (dataType == 'file') {
        $('#hand-form').trigger('reset');
        document.getElementById('hand-form').style = 'display:none'
        document.getElementById('file-form').style = ''
    }

    if (dataType == '') {
        $('#file-form').trigger('reset');
        $('#hand-form').trigger('reset');
        document.getElementById('hand-form').style = 'display:none'
        document.getElementById('file-form').style = 'display:none'
    }
})