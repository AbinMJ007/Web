var lab = [];
var val = [];
var count = 0;

function addFields(){

    	 	function getData()
    	 	{
    	 		document.write("fuck you");
                var name_element = document.getElementById('lab');
                var value_element = document.getElementById('val');
                lab[count] = name_element.value;
                val[count++] = value_element.value;

                document.write(name_element.name);

    	 	}
            var number = document.getElementById("member").value;
            var container = document.getElementById("container");
            while (container.hasChildNodes()) {
                container.removeChild(container.lastChild);
            }
            for (i=0;i<number;i++){
            	
                container.appendChild(document.createTextNode(" Label "+ (i+1)+" :"));

                var label = document.createElement("input");
                label.type = "text";
                label.id="lab";
                label.name="la";
                

                label.placeholder="Enter the label";
                container.appendChild(label);
                 container.appendChild(document.createTextNode("Value " + (i+1)+" :"));
                 var value = document.createElement("input");
                value.type = "number";
                value.id="val";
                value.name="cl";
                value.placeholder="Enter the value";
                container.appendChild(value);
                container.appendChild(document.createElement("br"));
                var name_element = document.getElementById('lab');
                var value_element = document.getElementById('val');
                document.write(name_element.value);
                
            }
            var name_element = document.getElementById('lab');
                var value_element = document.getElementById('val');
                document.write(name_element.value);
            
            var par = document.createElement("input");
            par.type = "button";
            par.value = "Generate a Graph";
            par.id="sub";
            par.setAttribute("onlclick",getData);
            container.appendChild(par);
}