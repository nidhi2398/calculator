function showValue(val){
	var oldVal = $('#screen').val();
	var newVal = "";

	if(oldVal == "0"){
		newVal = val;
	}else{
		newVal = oldVal + val;
	}
	
	$('#screen').val(newVal);
}


$(document).ready(function(){
	$('#btn-clear').on('click', function(){
		$('#screen').val('0');
	});

	$('#btn-equals').on('click', function(){
		var valuate = $('#screen').val();
		var result = math.evaluate(valuate);
		$('#screen_result').val(result);
	});
});