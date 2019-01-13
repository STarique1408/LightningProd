({
	toggleButton : function(component, event, helper) {
        alert("Click 1");
        var buttonVisible = component.get("v.isVisible");
        if(buttonVisible){
          component.set("v.isVisible","false"); 
            console.log(v.isVisible);
        }
        else{
          component.set("v.isVisible","true");  
            console.log(v.isVisible);
        }
		
	},
    handleChange : function(component, event, helper) {
        var selectedOption = component.find("carType").get("v.value");
        alert('Slected Option'+selectedOption);
    },
    getCarTypes : function(component, event, helper) {
    	component.set("v.carList",['All Types', 'Luxury Cars', 'Sports Cars']);
    	alert('Component is initialized');
    },
    handleRender : function(component, event, helper) {
        
        alert('Component is rendered');
    }
})