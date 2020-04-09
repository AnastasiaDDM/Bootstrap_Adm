
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
  $("#add_new_worker").click( function () {
  var newworker = $( "#pattern_table_tr_newworker");
  console.log( newworker);

  var next_id=1;
  if ($( "#table_workers").children().length != 0)
  {
	// var maxid =  parseInt($( "#table_workers tr:last-child>[id='row_worker_id']").html());
	var maxid =  parseInt($( "#table_workers tr:last-child>th").html());
    next_id = maxid + 1;
  }
  $('#table_workers').append("<tr style='display:none;' id=worker_tr_"+next_id+">"+newworker.html()+"</tr>");


$("[id='worker_tr_"+next_id+"'] th").html(next_id);
//   $("#table_workers tr:last-child>th").html(next_id);


//   $("#table_workers tr:last-child").slideDown("slow");
  $("#table_workers tr:last-child").show("slow");
    table_remove_tr_worker();
  });
  table_remove_tr_worker();
}







// function table_append_newworker()
// {

//   $("[href='#newworker']").click( function () {

// 	var target = $("#table_workers tr:last-child>[data-id='row_worker_id']");


// 	  var newworker = $( "#pattern_table_tr_newworker").html();

// 	//   if ($( "#table_workers>tbody tr:last-child>[data-id='row_worker_id']").html() == "undefined")
// 	//   {
// 	// 	//   var maxid = 0;
// 	// 	  var next_id = 1;
// 	//   }
// 	//   else {
// 	// 	var maxid =  parseInt($( "#table_workers>tbody tr:last-child>[data-id='row_worker_id']").html());
// 	// 	var next_id = maxid + 1;
// 	//   }



// 	if (target.html() == "undefined")
// 	{
// 	  //   var maxid = 0;
// 		var next_id = 1;
// 	}
// 	else {
// 	  var maxid =  parseInt($( "#table_workers>tbody tr:last-child>[data-id='row_worker_id']").html());
// 	  var next_id = maxid + 1;
// 	}



	  



// 		   console.log($( "#table_workers>tbody tr:last-child>[data-id='row_worker_id']").html());
// 		   console.log( target);

// 	  $('#table_workers>tbody tr:last-child').parent().append(newworker);

// 	  $('#table_workers>tbody tr:last-child').attr( "id", "worker_tr_"+next_id );

// 	  $('#table_workers tr:last-child>td:last-child button').attr( "data-worker_remove", "worker_tr_"+next_id );

// 	  $('#table_workers>tbody tr:last-child th').html(next_id);

// 	  console.log( $('#table_workers>tbody tr:last-child th').html(next_id));

// 	//   $(this).parent().append( $(form) );

// 	  // console.log($(this).siblings(".copy_form_answer"));

// 	  $(".copy_tr_newworker").attr( "data-rel", "single_tr_newworker" );

// 	  $("#table_workers>tbody tr:last-child").show("slow");

// 	  table_remove_tr_worker();
// 	//   activate_form_answer();
// 	});

// 	table_remove_tr_worker();

// }


function table_remove_tr_worker()
{
  var row_id=0;

  $("#table_workers [data-toggle='modal']").click( function () {

  row_id = $(this).parent().parent().parent().attr('id');
//   console.log($("#table_workers [data-toggle='modal']").html());
  console.log(row_id);
  });

  $("#btn_del_confirm").click( function () {

	// $("#"+row_id).slideUp("slow");
	$("#"+row_id).remove();	

    $("#ModalDel").modal("hide");

  });

}




// function table_remove_tr_worker()
// {



// 	// $('.btn-add-name-company').on('click', function () {
// 	// 	var name = $('.modal').find('inpit[name="name"]').val();
// 	// 	//Делайте с ним то, что нужно
// 	//   });
	


//   $("#table_workers td:last-child button").click( function () {

// 	// console.log( $("#table_workers td:last-child button"));

// 	var row_id = $(this).attr("data-worker_remove");
// 	console.log(row_id);

// 	// $("#table_workers>tbody tr [id="+row_id+"]").remove();

// 	// $("[id='worker_tr_2']").remove();

// 	$("#ModalDel #btn_confirm").click( function () {

// 		console.log($("#table_workers tr[id="+row_id+"]").html());


// 		$("#table_workers tr[id="+row_id+"]").remove();

// 		// $("#ModalDel").on("dialogclose", function(){});
// 		$("#ModalDel").modal("hide");

// 	})

// 	});



// }



// function table_del_tr_image()
// {
//   var row_id=0;

//   $("#table_images [data-toggle='modal']").click( function () {

//   row_id = $(this).parent().parent().parent().attr('id');
// //   console.log($("#table_workers [data-toggle='modal']").html());
//   console.log(row_id);
//   });

//   $("#btn_del_confirm").click( function () {

// 	// $("#"+row_id).slideUp("slow");
// 	$("#"+row_id).remove();	

//     $("#ModalDel").modal("hide");

//   });

// }

function fil_tr_image ( img_name, img_path, current_tr, next_id) {

	$(current_tr+"th").html(next_id);
	// $(current_tr+"img").attr( "src", img_path );
	$(current_tr+"img").attr({ "src": img_path, "alt": img_name });
	$(current_tr+"[data-img='image_name']").html(img_name);
	$("#ModalDownload").modal("hide");
}


function table_add_tr_image()
{
  var row_id=0;
  var newimage = $( "#pattern_table_tr_newimage");

  $("#btn_add_image_confirm").click( function () {

	var img_name = $('#table_image_name').val();

	var img_path = $('#table_image_path').val();

	var maxid =  parseInt($( "#table_images tr:last-child>th").html());
	next_id = maxid + 1;
	
	console.log(next_id);
	console.log(img_name);
	console.log(img_path);

	$('#table_images').append("<tr  id=image_tr_"+next_id+">"+newimage.html()+"</tr>");
	// $("[id='image_tr_"+next_id+"'] th").html(next_id);
	// // $("[id='image_tr_"+next_id+"'] th").attr( "data-worker_remove", "worker_tr_"+next_id );
	// $("[id='image_tr_"+next_id+"'] th").html(next_id);

	var current_tr = $("[id='image_tr_"+next_id+"']");
	console.log(current_tr);

	fil_tr_image (img_name, img_path, current_tr, next_id);
	

	// $(current_tr+"th").html(next_id);
	// // $(current_tr+"img").attr( "src", img_path );
	// $(current_tr+"img").attr({ "src": img_path, "alt": img_name });
	// $(current_tr+"[data-img='image_name']").html(img_name);


    // $("#ModalDownload").modal("hide");
  });

}







jQuery(document).ready(function () {
	
	password_roll();
	areas_more();
	input_file();
	search_roll();
	// button_search();
	table_append_newworker();
	table_add_tr_image();
	
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