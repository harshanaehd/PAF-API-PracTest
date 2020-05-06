$(document).ready(function() 
{  
	if ($("#alertSuccess").text().trim() == "")  
	{   
		$("#alertSuccess").hide();  
	}  
	$("#alertError").hide(); }); 
 
	// Save  
$(document).on("click", "#btnSave", function(event) 
{  
	// Clear Alerts  
	$("#alertSuccess").text("");  
	$("#alertSuccess").hide();  
	$("#alertError").text("");  
	$("#alertError").hide(); 
 
	// Form Validation  
	var status = validateHospitalForm();  
	if (status != true)  
	{   
		$("#alertError").text(status);   
		$("#alertError").show();   
		return;  
	} 
 
	// If Valid  
	var type = ($("#hidhoptIdSave").val() == "") ? "POST" : "PUT"; 
	
	$.ajax( 
	{  
		url : "HospitalAPI",  
		type : type,  
		data : $("#formHospital").serialize(),  
		dataType : "text",  
		complete : function(response, status)  
		{   
			onHospitalSaveComplete(response.responseText, status);  
		} 
	}); 
}); 

function onHospitalSaveComplete(response, status) 
{  
	if (status == "success")  
	{   
		var resultSet = JSON.parse(response); 

		if (resultSet.status.trim() == "success")   
		{    
			$("#alertSuccess").text("Successfully saved.");    
			$("#alertSuccess").show(); 

			$("#divItemsGrid").html(resultSet.data);   
		} else if (resultSet.status.trim() == "error")   
		{    
			$("#alertError").text(resultSet.data);    
			$("#alertError").show();   
		} 

	} else if (status == "error")  
	{   
		$("#alertError").text("Error while saving.");   
		$("#alertError").show();  
	} else  
	{   
		$("#alertError").text("Unknown error while saving..");   
		$("#alertError").show();  
	} 

	$("#hidhoptIdSave").val("");  
	$("#formHospital")[0].reset(); 
} 
 
	// Update 
$(document).on("click", ".btnUpdate", function(event) 
{     
	$("#hidhoptIdSave").val($(this).closest("tr").find('#hidhoptIdUpdate').val());     
	$("#hoptName").val($(this).closest("tr").find('td:eq(0)').text());     
	$("#hoptAddress").val($(this).closest("tr").find('td:eq(1)').text());     
	$("#hoptPNumber").val($(this).closest("tr").find('td:eq(2)').text());     
	$("#hoptCharge").val($(this).closest("tr").find('td:eq(3)').text()); 
}); 

	//	Remove
$(document).on("click", ".btnRemove", function(event) 
{  
	$.ajax(  
	{   
		url : "HospitalAPI",   
		type : "DELETE",   
		data : "hoptId=" + $(this).data("hoptId"),   
		dataType : "text",   
		complete : function(response, status)   
		{    
			onHospitalDeleteComplete(response.responseText, status);   
		}  
	}); 
}); 

function onHospitalDeleteComplete(response, status) 
{  
	if (status == "success")  
	{   
		var resultSet = JSON.parse(response); 

		if (resultSet.status.trim() == "success")   
		{    
			$("#alertSuccess").text("Successfully deleted.");    
			$("#alertSuccess").show(); 
		
			$("#divHospitalsGrid").html(resultSet.data);   
		} else if (resultSet.status.trim() == "error")   
		{    
			$("#alertError").text(resultSet.data);    
			$("#alertError").show();   
		}

	} else if (status == "error")  
	{   
		$("#alertError").text("Error while deleting.");   
		$("#alertError").show();  
	} else  
	{   
		$("#alertError").text("Unknown error while deleting..");   
		$("#alertError").show();  
	}
}
 
	// Client Model 
function validateHospitalForm() 
{  
	// Name  
	if ($("#hoptName").val().trim() == "")  
	{   
		return "Insert Hospital Name.";  
	} 
 
	// Address  
	if ($("#hoptAddress").val().trim() == "")  
	{   
		return "Insert Hospital Address.";  
	} 
	// Phone Number  
	if ($("#hoptPNumber").val().trim() == "")  
	{   
		return "Insert Hospital Phone Number.";  
	} 

	// Charge  
	var tmpPrice = $("#hoptCharge").val().trim();  
	if (!$.isNumeric(tmpPrice))  
	{   
		return "Insert a numarical value for Hospital Charge.";  
	} 


	return true; 
}