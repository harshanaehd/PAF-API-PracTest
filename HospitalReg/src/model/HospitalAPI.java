package model;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

@WebServlet("/HospitalAPI")
public class HospitalAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	Hospital HospitObj = new Hospital();
	
    
     // @see HttpServlet#HttpServlet()
     
    public HospitalAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

    // @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	// @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		String output = HospitObj.insertHospital(request.getParameter("hoptName"),      
				request.getParameter("hoptAddress"),     
				request.getParameter("hoptPNumber"),       
				request.getParameter("hoptCharge")); 
	 
	 response.getWriter().write(output); 
		
		
	}

	// @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		Map paras = getParasMap(request); 
		 
		 String output = HospitObj.updateHospital(paras.get("hidhoptIdSave").toString(),     
				 paras.get("hoptName").toString(),     
				 paras.get("hoptAddress").toString(),        
				 paras.get("hoptPNumber").toDouble(),        
				 paras.get("hoptCharge").toString()); 
		 
		 response.getWriter().write(output);
	}

	
	 // @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		
		Map paras = getParasMap(request); 
		 
		 String output = HospitObj.deleteHospital(paras.get("hoptId").toString()); 
		 
		 response.getWriter().write(output);
	}

	
	// Convert request parameters to a Map 
		private static Map getParasMap(HttpServletRequest request) 
		{  
			Map<String, String> map = new HashMap<String, String>();  
			try  
			{   
				Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");   
				String queryString = scanner.hasNext() ?          
						scanner.useDelimiter("\\A").next() : "";  
						scanner.close(); 
		 
		  String[] params = queryString.split("&");   
		  for (String param : params)   
		  { 

	 
		   String[] p = param.split("=");    
		   map.put(p[0], p[1]);   
		   }  
		  }  
			catch (Exception e)  
			{  
				
			}  return map; 
			
		}
}

