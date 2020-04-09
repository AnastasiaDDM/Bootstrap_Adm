
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

 

//   function button_search() {
// 	console.log($("[href='#find_form']"));
// 	$("[href='#find_form']").click(function() {

// 	  if ($( "#find_form" ).attr('class') == 'show' ) {
// 		$("[href='#find_form']").html( "Cвернуть поиск" );
// 		$(this).removeClass("btn-outline-info");
// 		$("[href='#find_form']").addClass("btn-outline-secondary");
// 	  }
// 	  else {
// 		$( this ).html( "Расширенный поиск" );
// 		$(this).removeClass("btn-outline-secondary");
// 		$("[href='#find_form']").addClass("btn-outline-info");
// 	  }

// 	});
//   }


  function search_roll() {  
    $("[href='#find_form']").click(function() {
	  if ($( "#find_form" ).attr('style') == 'display: none;' ) {
		$( "#find_form" ).slideDown( "slow", function() {
			$( "[href='#find_form']" ).html( "Cвернуть поиск" );
			$("[href='#find_form']").removeClass("btn-outline-info");
			$( "[href='#find_form']" ).addClass("btn-outline-secondary");
		});	
	  }
	  else {
		  $( "#find_form" ).slideUp( "slow", function() {
			$( "[href='#find_form']" ).html( "Расширенный поиск" );
			$("[href='#find_form']").removeClass("btn-outline-secondary");
			$( "[href='#find_form']" ).addClass("btn-outline-info");
		  });
	  }
    });
}




function table_append_newworker()
{

  $("[href='#newworker']").click( function () {

	//   $(".btn_answer").show(500);
	//   $(this).hide(500);
	//   $("[data-rel='single_form_answer']").hide(500);
	//   $("[data-rel='single_form_answer']").detach();


	//  ВОТ ЗДЕСЬ ПРОБЛЕМА ВОЗНИКАЕТ. ПОСМОТРИ В КОНСОЛИ БРАУЗЕРА - ТАМ НЕ ВЫВОДЯТСЯ ТЕГИ TR TD
	console.log($( "#pattern_table_tr_newworker").html());
	  var newworker = $( "#pattern_table_tr_newworker").html();

	  console.log($("#table_workers>tbody tr:last-child"));
	  $('#table_workers>tbody tr:last-child').parent().append(newworker);

	//   $(this).parent().append( $(form) );

	  // console.log($(this).siblings(".copy_form_answer"));

	  $($(this).siblings(".copy_tr_newworker").attr( "data-rel", "single_tr_newworker" ));

	  $("[data-rel='single_tr_newworker']").show(500);

	//   activate_form_answer();
	});

	// $( ".btn_answer_two" ).click(function () {

	// 	$(".btn_answer_two").show(500);
	// 	$(this).hide(500);

	// 	$("[data-rel='single_form_answer']").hide(500);
	// 	$("[data-rel='single_form_answer']").detach();

	// 	// var bt_data = $(this).data("target");

	// 	var form = $( "#pattern_form_answer").html(); 

	// 	$(this).parents(".discussion").append( $(form) );

	// 	$($( ".discussion" ).children( ".copy_form_answer" ).attr( "data-rel", "single_form_answer" ));

	// 	$("[data-rel='single_form_answer']").show(500);

	// 	activate_form_answer();
	// });

	// $( ".comment_roll" ).click(function() {

	//   var com_data = $(this).data("target");

	//   $( "[id="+com_data+"] .discussion_comment" ).slideToggle( "slow", function() {

	//   });
	// });

	// $( ".btn_rollup" ).click(function() {
	  
	//   $( this ).parents(".discussion_comment").slideToggle( "slow", function() {
	//   });
	// });

}








jQuery(document).ready(function () {
	
	password_roll();
	areas_more();
	input_file();
	search_roll();
	// button_search();
	table_append_newworker();
	
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