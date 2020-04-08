
function password_roll() {
  $( ".password_roll" ).click(function() {

    $( ".password" ).slideToggle( "slow", function() {
    });
  });
  $( ".password_cancel" ).click(function() {
    
    $( ".password" ).slideToggle( "slow", function() {
    });
  });
}

function input_file() {
    let inputs = document.querySelectorAll('.input__file');
                  Array.prototype.forEach.call(inputs, function (input) {
                    let label = input.nextElementSibling,
                      labelVal = label.querySelector('.input__file-button-text').innerText;
               
                    input.addEventListener('change', function (e) {
                      let countFiles = '';
                      if (this.files && this.files.length >= 1)
                        countFiles = this.files.length;
               
                      if (countFiles)
                        label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
                      else
                        label.querySelector('.input__file-button-text').innerText = labelVal;
                    });
                  });
     }


function areas_more() {
	$( ".areas_more" ).click(function() {

	  if ($( ".all_areas" ).attr('style') == 'display: none;' ) {
		$( ".areas_more" ).html( "свернуть" );
	  }
	  else {
		$( ".areas_more" ).html( "еще..." );
	  }
	  
	  $( ".all_areas" ).slideToggle( 300, function() {
	  });

	});
  }

 
jQuery(document).ready(function () {
	
	password_roll();
	areas_more();
	input_file();
	textarea_filled();
	search_roll();
	
	if ($( window ).width() < 600) {
		$('.search_datepicker').each(function() {
			$( this  ).attr( "type", "date" );
		});
		
	}
	else {
			$('.search_datepicker').datepicker({
				language: 'ru',
				autoClose: true,
				// minDate: new Date() // Now can select only dates, which goes after today
			});
	}
		 

})