function loadManufacturer() {
    $.ajax({
        'url':'services/get_manufacturer.php',
        method: "GET",
        success: function(data) {
			//alert(122);/*
			//alert(data);
            data = JSON.parse(data);
            var manufacturer = "<option>Select Manufacturer</option>";
            for(i=0; i < data.length; i++) {
                manufacturer += "<option value='"+data[i].manufacturerid+"'>"+ data[i].name +"</option>";
            }
            $('#select-manufacturer').html(manufacturer);
        }
    });
}

loadManufacturer();

function addModel() {
	
	if($('#model-name').val()=='')
	{
	alert("please enter model name");
	$('#model-name').focus();
	return false;
	}
	if($('#select-manufacturer').val()=='')
	{
	alert("please select Manufacture");
	$('#select-manufacturer').focus();
	return false;
	}
	if($('#model-color').val()=='')
	{
	alert("please enter Color name");
	$('#model-color').focus();
	return false;
	}
	if($('#model-year').val()=='')
	{
	alert("please enter year");
	$('#model-year').focus();
	return false;
	}
	if($('#model-count').val()=='')
	{
	alert("please enter count");
	$('#model-count').focus();
	return false;
	}
	
	//alert("sdf");
	//return false;
    var image1 = $('#image-1').prop('files')[0];
    var image2 = $('#image-2').prop('files')[0];
    var form_data = new FormData();
    form_data.append('model-name', $('#model-name').val());
    form_data.append('manufacturer_id', $('#select-manufacturer').val());
    form_data.append('model-color', $('#model-color').val());
    form_data.append('model-year', $('#model-year').val());
    form_data.append('model-reg-no', $('#model-reg-no').val());
    form_data.append('model-note', $('#model-note').val());
    form_data.append('model-count', $('#model-count').val());
    form_data.append('image_file1', image1);
    form_data.append('image_file2', image2);
	


    $.ajax({
        'url':'services/add_model.php',
        method: "POST",
        data: form_data,
        processData: false,
        contentType: false,
        success: function(data) {
				//alert(data);
	//return false;
            switch(data) {
                case 'success':
                        var msg = '<div class="alert alert-success text-center">';
                            msg += '<strong>Success!</strong> Car Model added successfully.';
                            msg += '</div>';
                        break;
                case 'error':
                        var msg = '<div class="alert alert-danger text-center">';
                            msg += '<strong>Failed!</strong> Something went wrong, Please try again later.';
                            msg += '</div>';
                        break;
            }
            $('#alerts').html(msg);
            $("#alerts").show();
            $("#alerts").show().delay(5000).fadeOut();
			$('#model-name').val('');
			$('#select-manufacturer').val('');
			$('#model-color').val('');
			$('#model-year').val('');
			$('#model-reg-no').val('');
			$('#model-note').val('');
			$('#model-count').val(0);
			$('#image-1').val('');
			$('#image-1').val('');
			
			
			
        }
    });
}

