
function loadInventories() {
    if ($.fn.DataTable.isDataTable("#inventory-table")) {
        $('#inventory-table').DataTable().clear().destroy();
    }

    $('#inventory-table').DataTable( {
        "ajax": {
                    "url" : "services/get_inventory.php",
                    dataSrc : ''
                },
        rowId: 'id',
        "columns" : [ 
            {"data" : "id"}, 
            {"data" : "model_name"}, 
            {"data" : "manufacturer_name"}, 
            {"data" : "count"}
        ],
        "rowCallback": function( row, data ) {
        
        }
    } );    
}

function addInventoryDetails() {
    $('#inventory-table tbody').on('click', 'tr', function () {
        var id = this.id;
        $.ajax({
            'url':'services/get_inventory.php',
            method: "GET",
            data: {'id':id},
            success: function(data) {
				//alert(data);
				//return false;
                data = JSON.parse(data);
				
				//alert(data[0].model_name);
                var inventory_details = "";
                inventory_details += '<div class="control-group"><label class="control-label">Model</label><div class="controls readonly">'+data[0].model_name+'</div></div>';
                inventory_details += '<div class="control-group"><label class="control-label">Manufacturer</label><div class="controls readonly">'+data[0].manufacturer_name+'</div></div>';
                inventory_details += '<div class="control-group"><label class="control-label">Color</label><div class="controls readonly">'+data[0].color+'</div></div>';
                inventory_details += '<div class="control-group"><label class="control-label">Manufactured Year</label><div class="controls readonly">'+data[0].year+'</div></div>';
                inventory_details += '<div class="control-group"><label class="control-label">Registration #</label><div class="controls readonly">'+data[0].registration_number+'</div></div>';
                inventory_details += '<div class="control-group"><label class="control-label">Note</label><div class="controls readonly">'+data[0].note+'</div></div>';
                inventory_details += '<div class="control-group"><label class="control-label">Count</label><div class="controls readonly">'+(data[0].count== null || data[0].count == 0 ? 'Sold Out' : data[0].count)+'</div></div>';
                inventory_details += '<div class="control-group text-center">';
				if(data[0].image_url_1!='')
				inventory_details += '<img style="max-width:200px; margin: 10px;" src="images/'+ data[0].image_url_1+'"/>';
				if(data[0].image_url_2!='')
				inventory_details += '<img style="max-width:200px; margin: 10px;" src="images/'+ data[0].image_url_2+'"/>';
				inventory_details += '</div>';
                inventory_details += '<div class="form-group text-center"><button type="button" class="btn btn-default" onclick="soldOut('+id+', \''+data[0].model_name+'\')">Sold Out</button></div>';
                $('.modal-title').html(data[0].model_name);
                $('.modal-body').html(inventory_details);
                $('#model-button').click();
            }
        });
    
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            $('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }        
    
    } );
}

function soldOut(id, model_name) {

    $.ajax({
        'url':'services/sold_out_inventory.php',
        method: "POST",
        data: {'id':id},
        success: function(data) {
		//	alert(data);
            switch(data) {
                case 'success':
                        var msg = '<div class="alert alert-info text-center">';
                            msg += '<strong>Success!</strong> Model ' + model_name + ' Sold Out';
                            msg += '</div>';
                            addSoldOutNotification(id);
                            alert("Data updated successfully");
                        break;
                case 'error':
                        var msg = '<div class="alert alert-danger text-center">';
                            msg += '<strong>Failed!</strong> Something went wrong, Please try again later.';
                            msg += '</div>';
                            alert("Somthing went wrong please try again later");
                        break;
            }

            loadInventories();
            //addInventoryDetails();
		
              $('#myModal').modal('hide');
        }
    });
}

function addSoldOutNotification(model_id) {
    $.ajax({
        'url':'services/notification.php',
        method: "POST",
        data: {'model_id' : model_id, 'action' : 'add'},
        success: function(data) {
            
        }
    });
}



//loadInventories();
addInventoryDetails();
/*
$('#alerts').html(msg);
$("#alerts").show();
$("#alerts").show().delay(5000).fadeOut();
*/

