
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


	// console.log($( "#pattern_table_tr_newworker").html());
	  var newworker = $( "#pattern_table_tr_newworker").html();

	  if ($( "#table_workers>tbody tr:last-child>[data-id='row_worker_id']").html() == "undefined")
	  {
		//   var maxid = 0;
		  var next_id = 1;
	  }
	  else {
		var maxid =  parseInt($( "#table_workers>tbody tr:last-child>[data-id='row_worker_id']").html());
		var next_id = maxid + 1;
	  }



	  



		   console.log($( "#table_workers>tbody tr:last-child>[data-id='row_worker_id']").html());
		   console.log( next_id);

	  $('#table_workers>tbody tr:last-child').parent().append(newworker);

	  $('#table_workers>tbody tr:last-child').attr( "id", "worker_tr_"+next_id );

	  $('#table_workers tr:last-child>td:last-child button').attr( "data-id", "worker_tr_"+next_id );

	  $('#table_workers>tbody tr:last-child th').html(next_id);

	  console.log( $('#table_workers>tbody tr:last-child th').html(next_id));

	//   $(this).parent().append( $(form) );

	  // console.log($(this).siblings(".copy_form_answer"));

	  $(".copy_tr_newworker").attr( "data-rel", "single_tr_newworker" );

	  $("#table_workers>tbody tr:last-child").show("slow");

	  table_remove_tr_worker();
	//   activate_form_answer();
	});

	table_remove_tr_worker();

}




function table_remove_tr_worker()
{



	// $('.btn-add-name-company').on('click', function () {
	// 	var name = $('.modal').find('inpit[name="name"]').val();
	// 	//Делайте с ним то, что нужно
	//   });
	


  $("#table_workers td:last-child button").click( function () {

	// console.log( $("#table_workers td:last-child button"));

	var row_id = $(this).attr("data-id");
	console.log(row_id);

	// $("#table_workers>tbody tr [id="+row_id+"]").remove();

	// $("[id='worker_tr_2']").remove();

	$("#ModalDel #btn_confirm").click( function () {

		console.log($("#table_workers tr[id="+row_id+"]").html());


		$("#table_workers tr[id="+row_id+"]").remove();

		// $("#ModalDel").on("dialogclose", function(){});
		$("#ModalDel").modal("hide");

	})
	
	});



}




jQuery(document).ready(function () {
	
	password_roll();
	areas_more();
	input_file();
	search_roll();
	// button_search();
	table_append_newworker();
	// table_remove_tr_worker();
	
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