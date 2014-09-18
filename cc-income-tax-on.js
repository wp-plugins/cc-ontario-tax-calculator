var $J = jQuery.noConflict();


$J( document ).ready(function() {
	// runtime events
	
	$J(".ontario-income").keydown(function(event) {
		if(!(isIntegerKey(event))) event.preventDefault();
	});	

	$J(".ontario-income").keyup(function( ) {
		calculate_income_tax_on($J(this).closest("aside").attr("id"));
	});

});

function format_id(id,name)
{
    
};

function calculate_income_tax_on(id)
{
    var income_id = '#' + id + '-' + 'income';
	var income = parseFloat($J(income_id).val());
	
    // clear output
	$J('#' + id + '-' + 'ProvincialTax').html("");
	$J('#' + id + '-' + 'FederalTax').html("");
	$J('#' + id + '-' + 'TotalTax').html("");
	$J('#' + id + '-' + 'AverageRate').html("");
	$J('#' + id + '-' + 'AfterTaxIncome').html("");

	// if no data entered
	if (isNaN(income) || income == "") return;
	
    // calculate ON provincial taxes 2014
	ProvincialTax = 0; 
    tmpIncome = income;
    if (tmpIncome > 220000) { ProvincialTax += (tmpIncome - 220000) * 20.53 / 100; tmpIncome = 220000; }
    if (tmpIncome > 150000) { ProvincialTax += (tmpIncome - 150000) * 18.97 / 100; tmpIncome = 150000; }
    if (tmpIncome > 83237) { ProvincialTax += (tmpIncome - 83237) * 17.41 / 100; tmpIncome = 83237; }
    if (tmpIncome > 80242) { ProvincialTax += (tmpIncome - 80242) * 13.39 / 100; tmpIncome = 80242; }
    if (tmpIncome > 70651) { ProvincialTax += (tmpIncome - 70651) * 10.98 / 100; tmpIncome = 70651; }
    if (tmpIncome > 40120) { ProvincialTax += (tmpIncome - 40120) * 9.15 / 100; tmpIncome = 40120; }
    if (tmpIncome > 18502) { ProvincialTax += (tmpIncome - 18502) * 5.05 / 100; tmpIncome = 18502; }
    if (tmpIncome > 14086) { ProvincialTax += (tmpIncome - 14086) * 10.10 / 100; }

    // calculate Canadian federal taxes 2014
    FederalTax = 0;
    tmpIncome = income;
    if (tmpIncome > 136270) { FederalTax += (tmpIncome - 136270) * 29 / 100; tmpIncome = 136270; }
    if (tmpIncome > 87907) { FederalTax += (tmpIncome - 87907) * 26 / 100; tmpIncome = 87907; }
    if (tmpIncome > 43953) { FederalTax += (tmpIncome - 43953) * 22 / 100; tmpIncome = 43953; }
    if (tmpIncome > 11138) { FederalTax += (tmpIncome - 11138) * 15 / 100; }

    TotalTax = ProvincialTax + FederalTax;
	AverageRate = TotalTax / income * 100;
	if (isNaN(AverageRate)) AverageRate = 0;
	AfterTaxIncome = income - TotalTax;
	
	$J('#' + id + '-' + 'ProvincialTax').html(round2TwoDecimals(ProvincialTax));
	$J('#' + id + '-' + 'FederalTax').html(round2TwoDecimals(FederalTax));
	$J('#' + id + '-' + 'TotalTax').html(round2TwoDecimals(TotalTax));
	$J('#' + id + '-' + 'AverageRate').html(round2TwoDecimals(AverageRate));
	$J('#' + id + '-' + 'AfterTaxIncome').html(round2TwoDecimals(AfterTaxIncome));
	   
};


function isIntegerKey(evt)	  
      {
         var key = evt.which || evt.which || event.keyCode;
		 // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
		 var isInteger = (key == 8 || 
                key == 9 ||
                key == 46 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
		return isInteger;
				
      };
	  
function isDecimalKey(e, number)
      {
         var key = (e.which) ? e.which : e.keyCode;
		 // numbers (48-57 and 96-105), dot (110,190), comma (44,188), backspace(8), tab (9), navigation keys (35-40), DEL(46)
		 if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key == 110 || key == 190 || key == 8 || key == 9 || (35 <= key && key <= 40) || key == 46 )  
		 	{
			 		  if (key == 110 || key == 190)
					  {
					   	 // skip it if comma or decimal point already entered or it is empty field yet
						 if (number.indexOf(".") > -1 || number.indexOf(",") > -1 || number.length == 0) 
						 	return false; 
					  }
			          return true;
			}

         return false;
      };

function radioValue(element)	  
		 {
		    var returnValue = "";
            var radios = document.getElementsByName(element);
            
            for (var i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                    returnValue = radios[i].value;
                }
			}
			return returnValue;	
		 };	  	
function round2TwoDecimals(number)
		 {
 		    return Math.round(number*100)/100						 
		 };	
 



