
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







//Ф-ия добавления новой строки в таблицу разработчиков
function table_append_newworker()
{
	$("#add_new_worker").click( function () {
	var newworker = $( "#pattern_table_tr_newworker");
	console.log( newworker);


	// Находим максимальное кол-во строк в таблице 
	var next_id=1;
	if ($( "#table_workers").children().length != 0)
	{
	// var maxid =  parseInt($( "#table_workers tr:last-child>[id='row_worker_id']").html());
	var maxid =  parseInt($( "#table_workers tr:last-child>th").html());
	next_id = maxid + 1;
	}

	// Вставляем новую строку
	$('#table_workers').append("<tr style='display:none;' id=worker_tr_"+next_id+">"+newworker.html()+"</tr>");

	// Вставляем номер строки в 1 колонку
	$("[id='worker_tr_"+next_id+"'] th").html(next_id);
	//   $("#table_workers tr:last-child>th").html(next_id);


	// Показываем добавленную строку
	//   $("#table_workers tr:last-child").slideDown("slow");
	$("#table_workers tr:last-child").show("slow");
	table_tr_worker_remove();
	});
	table_tr_worker_remove();
}


//Ф-ия удаления строки в таблицу разработчиков
function table_tr_worker_remove()
{
  var row_id=0;

  $("#table_workers [data-toggle='modal']").click( function () {

	// Получаем номер строки
	row_id = $(this).parent().parent().parent().attr('id');
	//   console.log($("#table_workers [data-toggle='modal']").html());
	console.log(row_id);
  });

  // Нажатие на кнопку подтверждение
  $("#btn_del_confirm").click( function () {

	// Удаление строки
	// $("#"+row_id).slideUp("slow");
	$("#"+row_id).remove();	

    $("#ModalDel").modal("hide");

  });

}



//Ф-ия добавления новой строки в таблицу изображений 
function tr_image_add( img_name, img_path) {
	// Копирование шаблона строки изображения
	var newimage = $( "#pattern_table_tr_newimage");

	// Получения максимального кол-ва строк в таблице
	var next_id=1;
	if ($( "#table_images").children().length != 0)
	{
	  var maxid =  parseInt($( "#table_images tr:last-child>th").html());
	  next_id = maxid + 1;
	}

	// Вставка строки в таблицу
	$('#table_images').append("<tr  id=image_tr_"+next_id+">"+newimage.html()+"</tr>");

	var current_tr = $("[id='image_tr_"+next_id+"']");
	console.log(current_tr);
	console.log($(current_tr).html());


	//Здесь я хотела добавлять данные в строку по средствам переменной current_tr, но не получилось

	// $(current_tr+" th").html(next_id);
	// // $(current_tr+"img").attr( "src", img_path );
	// $(current_tr+"img").attr({ "src": img_path, "alt": img_name });
	// $(current_tr+"[data-img='image_name']").html(img_name);
	// // $("#ModalDownload").modal("hide");
	// $("#ModalSuccess_Add").modal("show");
	// console.log('"'+current_tr+' th"');

	// Заполнение строки данными, переданными извне
	$("[id='image_tr_"+next_id+"'] th").html(next_id);
	// $(current_tr+"img").attr( "src", img_path );
	$("[id='image_tr_"+next_id+"'] img").attr({ "src": img_path, "alt": img_name });
	$("[id='image_tr_"+next_id+"'] [data-img='image_name']").html(img_name);
	$("[id='image_tr_"+next_id+"'] input").attr("id", "radoi_image_"+next_id);
	$("[id='image_tr_"+next_id+"'] label").attr("for", "radoi_image_"+next_id);


	$("#ModalSuccess_Add").modal("show");

	table_tr_image_remove();
	table_tr_image_edit();
	table_image_checked_main();
}


//Ф-ия получения данных о новом изображении из модального окна для добавления
function modal_tr_image_add()
{

	$("#add_new_image").click( function () {

		//Корректировка отображения нужных кнопок формы
		$("#btn_edit_image_confirm").hide();
		$("#btn_add_image_confirm").show();
		$("#ModalDownload").modal("show");

	
		$("#btn_add_image_cancel").click( function () {
		$('#modal_image_name').val('');
		$('#modal_image_path').val('');
	});

		// table_tr_image_edit();
		// table_tr_image_remove();
	});

	
	$("#btn_add_image_confirm").click( function () {

		// Сохранение данных из полей формы
		var img_name = $('#modal_image_name').val();
	
		var img_path = $('#modal_image_path').val();

		// Закрытие формы и очистка полей
		$("#ModalDownload").modal("hide");
		// $('#ModalDownload')[0].reset();
	
		$('#modal_image_name').val('');
		$('#modal_image_path').val('');
	
		// Вызов ф-ии добавления новой информации в таблицу
		tr_image_add(img_name, img_path);
	});



// Вот здесь проблема! например, если добавить новую строку 
// и менять в ней название (хотя бы 1 раз), то все будет стираться,
// короче, проблема вся в том, что строка в таблице добавляется потом именно из-за этого
// нужно всюду пихать эти три функции. то есть вот здесь на строках 383-385
// и там наверху, где эта строка добавляется на строках 322-324!
// неужели нельзя без этой белиберды??
// просто взять и прописать все эти 3 функции написать
// внизу где происходят вызовы всех основных функций в Jquery
// я думала, может как-то в if взять что-нибудь, но так и не поняла как ( да и думаю это не поможетв)

	table_tr_image_edit();
	table_tr_image_remove();
	table_image_checked_main();

}






//Ф-ия удаления строки изображения
function table_tr_image_remove()
{
	var row_id=0;

	$("#table_images [data-target='#ModalDel']").click( function () {

		// Получение номера строки
		row_id = $(this).parent().parent().parent().attr('id');
	});

	$("#btn_del_confirm").click( function () {

		// Удаление строки из таблицы
		// $("#"+row_id).slideUp("slow");
		$("#"+row_id).remove();	

		$("#ModalDel").modal("hide");
		$("#ModalSuccess_Del").modal("show");

	});
}



//Ф-ия изменения данных строки в таблице изображений 
function tr_image_edit( img_name, img_path, row_id) {

	console.log(row_id);
	console.log(img_name);
	console.log(img_path);


	// Заполнение строки таблицы новыми данными
	// $("[id='image_tr_"+row_id+"'] th").html(row_id);
	// $(current_tr+"img").attr( "src", img_path );
	// $("#"+row_id+" img").attr({ "src": img_path, "alt": img_name });
	$("#"+row_id+" [data-img='image_name']").html(img_name);

	$("#ModalSuccess_Edit").modal("show");

	table_tr_image_remove();

}


//Ф-ия получения изменненных данных об изображении из модального окна для редактирования
function table_tr_image_edit()
{
	var row_id=0;

	$("#table_images [data-edit='#ModalDownload']").click( function () {

		//Корректировка отображения нужных кнопок формы
		$("#btn_add_image_confirm").hide();
		$("#btn_edit_image_confirm").show();
		$("#ModalDownload").modal("show");


		// Получение номера строки
		row_id = $(this).parent().parent().parent().attr('id');

		// Заполнение формы данными
		$('#modal_image_name').val($("#"+row_id+" [data-img='image_name']").html());
		//   $('#modal_image_path').val($("#"+row_id+" img").attr('src'));

		//   $("[id='image_tr_"+next_id+"'] img").attr({ "src": img_path, "alt": img_name });
		//   $("[id='image_tr_"+next_id+"'] [data-img='image_name']").html(img_name);


		console.log($("#"+row_id+" [data-img='image_name']").html());
	});
	  
  
	$("#btn_edit_image_confirm").click( function () {
  
		// Получение данных из полей формы
		console.log($('#modal_image_name').val());
		var img_name = $('#modal_image_name').val();

		var img_path = $('#modal_image_path').val();

		// Закрытие и очистка модального окна
		$("#ModalDownload").modal("hide");

		$('#modal_image_name').val('');
		$('#modal_image_path').val('');

		console.log(row_id);
		console.log(img_name);
		console.log(img_path);

		// Вызов ф-ии изменения информации в таблице
		tr_image_edit(img_name, img_path, row_id);
  
	});

}




//Ф-ия назначения статуса главного изображения
function table_image_checked_main()
{
	var input_id;

	$("#table_images input").click( function () {

		// Сохранение состояния, т.е. оставляем выбранным предыдущее изображение
		input_id = $(this);
		$(this).prop("checked",false);
		$(image_checked_input_id).prop("checked",true);

		$("#ModalMain").modal("show");

	});

	$("#image_checked_main_confirm").click( function () {

		// Выбираем новое изображение главым
		$(input_id).prop("checked",true);
		
		// Меняем значение глобальной переменной главного изображения
		image_checked_input_id = input_id;
		console.log(image_checked_input_id);

		$("#ModalMain").modal("hide");
		$("#ModalSuccess_Edit").modal("show");

	});
}











// Глобальная переменная статуса главного изображения
var image_checked_input_id;
image_checked_input_id = $("#table_images input:checked");

jQuery(document).ready(function () {
	
	password_roll();
	areas_more();
	input_file();
	search_roll();
	// button_search();
	table_append_newworker();
	modal_tr_image_add();
	// table_tr_image_edit();
	// table_tr_image_remove();


	// table_image_checked_main();


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