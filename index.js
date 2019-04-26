

$(document).ready(function(){
	$('btn-success').click(function(){
		// console.log(getdata());
	});
	$("select").change(function(){
		var selectedCountry = $(this).children("option").val();
		if (selectedCountry === "dollar"){
			alert("you want dollar");
		} else{
			alert('You want euro');
		};
	});

});


function getdata(){
	// body...

	$.ajax({

		url: "https://api.ravepay.co/v2/services/confluence",
		dataType: 'json',
		secret_key: "FLWSECK-dcf3ce0327fb688599a7634627a58564-X",
		  service: "rates_convert",
		  service_method: "post",
		  service_version: "v1",
		  service_channel: "transactions",
		  service_channel_group: "merchants",
		  service_payload: {
		    FromCurrency: "USD",
		    ToCurrency: "NGN",
		    Amount: 5000
		  }
		
	})
}