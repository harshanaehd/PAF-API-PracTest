<%@ page import="model.Hospital"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Hospital Registration</title>
</head>
<body>

<div class="container">
		<div class="row">
			<div class="col-6">

				<h1>Hospital Registration v1</h1>
				<form id="formHospital" name="formHospital" method="post" action="Hospital.jsp">
					Hospital Name: 
					<input id="hoptName" name="hoptName" type="text"class="form-control form-control-sm">
					 <br> Hospital Address:
					<input id="hoptAddress" name="hoptAddress" type="text"class="form-control form-control-sm"> 
					<br> Hospital Phone Number: 
					<input id="hoptPNumber" name="hoptPNumber" type="text"class="form-control form-control-sm"> 
					<br> Hospital Charge: 
					<input id="hoptCharge" name="hoptCharge" type="text"class="form-control form-control-sm">
					 <br> 
					<input id="btnSave" name="btnSave" type="button" value="Save"class="btn btn-primary">
		<input type="hidden" id="hidhoptIdSave" name="hidhoptIdSave" value="">
				</form>


				<div id="alertSuccess" class="alert alert-success"></div>
		<div id="alertError" class="alert alert-danger"></div>
  
   <br>
   <div id="divHospitalsGrid">
   
   <%
   
      Hospital hospitalObj = new Hospital();
      out.print(hospitalObj.readHospital());
   %>
   </div>

			</div>
		</div>
	</div>

</body>
</html>