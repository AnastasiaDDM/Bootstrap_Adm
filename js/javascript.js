
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
function table_tr_worker_add()
{
	$("#add_new_worker").click( function () {

		var newworker = $( "#pattern_table_tr_newworker");

		// Находим максимальное кол-во строк в таблице 
		var next_id=1;
		if ($( "#table_workers").children().length != 0)
		{
			var maxid =  parseInt($( "#table_workers tr:last-child>th").html());
			next_id = maxid + 1;
		}

		// Вставляем новую строку
		$('#table_workers').append("<tr style='display:none;' id=worker_tr_"+next_id+">"+newworker.html()+"</tr>");

		// Вставляем номер строки в 1 колонку
		$("#worker_tr_"+next_id+" th").html(next_id);

		// Показываем добавленную строку
		$("#worker_tr_"+next_id).show("slow");

		table_tr_worker_remove();
	});

	table_tr_worker_remove();
}


//Ф-ия удаления строки в таблицу разработчиков
function table_tr_worker_remove()
{
	var row_id="";

	$("#table_workers [data-del='#ModalDel']").click( function () {

		//Корректировка отображения нужных кнопок формы
		$("#del_image_btn_confirm").hide();
		$("#del_worker_btn_confirm").show();
		$("#ModalDel").modal("show");

		// Получаем номер строки
		row_id = $(this).parent().parent().parent().attr('id');

		console.log(row_id);
	});

	console.log(row_id);
	// Нажатие на кнопку подтверждение
	$("#del_worker_btn_confirm").click( function () {
		console.log(row_id);
		if (row_id.length > 0) {

			console.log(row_id);
			// Удаление строки
			$("#"+row_id).hide();

			$("#ModalDel").modal("hide");

		}

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

	var current_tr = $("#image_tr_"+next_id);
	console.log(current_tr);
	console.log($(current_tr).html());


	// Заполнение строки данными, переданными извне
	current_tr.find("th").html(next_id);
	current_tr.find("img").attr({ "src": img_path, "alt": img_name });
	current_tr.find("[data-img='image_name']").html(img_name);
	current_tr.find("input").attr("id", "radoi_image_"+next_id);
	current_tr.find("label").attr("for", "radoi_image_"+next_id);

	show_modal_success("Данные успешно добавлены!");

	tr_image_init();
}


//Ф-ия получения данных о новом изображении из модального окна для добавления
function modal_tr_image_add()
{

	$("#add_new_image").click( function () {

		//Корректировка отображения нужных кнопок формы
		$("#edit_image_btn_confirm").hide();
		$("#add_image_btn_confirm").show();
		$("#ModalDownload").modal("show");
	});

	$("#btn_add_image_cancel").click( function () {
		$('#modal_image_name').val('');
		$('#modal_image_path').val('');
	});

	
	$("#add_image_btn_confirm").off().click( function () {

		// Сохранение данных из полей формы
		var img_name = $('#modal_image_name').val();
	
		var img_path = $('#modal_image_path').val();


		if(img_name == "") {
			show_modal_success("Ввведите название изображения!");

		}
		else {
			// Закрытие формы и очистка полей
			$("#ModalDownload").modal("hide");
			// $('#ModalDownload')[0].reset();

			$('#modal_image_name').val('');
			$('#modal_image_path').val('');

			// Вызов ф-ии добавления новой информации в таблицу
			tr_image_add(img_name, img_path);
		}

		
	});
}






//Ф-ия удаления строки изображения
function modal_tr_image_remove()
{
	$("#table_images [data-del='#ModalDel']").click( function () {

		//Корректировка отображения нужных кнопок формы
		$("#del_worker_btn_confirm").hide();
		$("#del_image_btn_confirm").show();
		$("#ModalDel").modal("show");

		// Получение номера строки
		current_edited_row_id_image = $(this).parent().parent().parent().attr('id');
	});

	$("#del_image_btn_confirm").off().click( function () {

		if (current_edited_row_id_image.length > 0) {

		// Удаление строки из таблицы
		$("#"+current_edited_row_id_image).remove();	

		$("#ModalDel").modal("hide");
		show_modal_success("Данные удалены!");

		}
	});
}



//Ф-ия изменения данных строки в таблице изображений 
function tr_image_edit( img_name, img_path, current_edited_row_id_image) {

	console.log(current_edited_row_id_image);
	console.log(img_name);
	console.log(img_path);


	// Заполнение строки таблицы новыми данными
	// $("[id='image_tr_"+row_id+"'] th").html(row_id);
	// $(current_tr+"img").attr( "src", img_path );
	// $("#"+row_id+" img").attr({ "src": img_path, "alt": img_name });
	$("#"+current_edited_row_id_image+" [data-img='image_name']").html(img_name);

	show_modal_success("Данные успешно изменены!");

}


//Ф-ия получения изменненных данных об изображении из модального окна для редактирования
function modal_tr_image_edit()
{
	$("#table_images [data-edit='#ModalDownload']").click( function () {

		//Корректировка отображения нужных кнопок формы
		$("#add_image_btn_confirm").hide();
		$("#edit_image_btn_confirm").show();
		$("#ModalDownload").modal("show");


		// Получение номера строки
		current_edited_row_id_image = $(this).parent().parent().parent().attr('id');

		// Заполнение формы данными
		$('#modal_image_name').val($("#"+current_edited_row_id_image+" [data-img='image_name']").html());
		//   $('#modal_image_path').val($("#"+row_id+" img").attr('src'));

		//   $("[id='image_tr_"+next_id+"'] img").attr({ "src": img_path, "alt": img_name });
		//   $("[id='image_tr_"+next_id+"'] [data-img='image_name']").html(img_name);


		console.log($("#"+current_edited_row_id_image+" [data-img='image_name']").html());
	});
	  
  
	$("#edit_image_btn_confirm").off().click( function () {
		
		if (current_edited_row_id_image.length > 0) {

			// Получение данных из полей формы
			console.log($('#modal_image_name').val());
			var img_name = $('#modal_image_name').val();

			var img_path = $('#modal_image_path').val();

			if(img_name == "") {
				show_modal_success("Ввведите название изображения!");
	
			}
			else {
			// Закрытие и очистка модального окна
			$("#ModalDownload").modal("hide");

			$('#modal_image_name').val('');
			$('#modal_image_path').val('');

			console.log(current_edited_row_id_image);
			console.log(img_name);
			console.log(img_path);

			// Вызов ф-ии изменения информации в таблице
			tr_image_edit(img_name, img_path, current_edited_row_id_image);
			}
  
		}
	});

}




//Ф-ия назначения статуса главного изображения
function table_image_checked_main()
{
	var input_id="";

	$("#table_images input").click( function () {

		// Сохранение состояния, т.е. оставляем выбранным предыдущее изображение
		input_id = $(this);
		$(this).prop("checked",false);
		$(image_checked_input_id).prop("checked",true);

		$("#ModalMain").modal("show");

	});

	$("#image_checked_main_confirm").click( function () {

		if (input_id.length > 0) {

		// Выбираем новое изображение главым
		$(input_id).prop("checked",true);
		
		// Меняем значение глобальной переменной главного изображения
		image_checked_input_id = input_id;
		console.log(image_checked_input_id);

		$("#ModalMain").modal("hide");

		show_modal_success("Главное изображение успешно изменено!");
		}

	});
}


//Ф-ия отображения модального окна с уведомлением о завершении операции
function show_modal_success(text)
{
	$("#ModalSuccess_text").html(text);
	$("#ModalSuccess").modal("show");
}


// Инициализируем все события с изображениями
function tr_image_init() 
{
	modal_tr_image_add();
	modal_tr_image_remove();
	modal_tr_image_edit();
	table_image_checked_main();
}


// function datepicker_init() 
// {
// 	if ($( window ).width() < 600) {
// 		$('.search_datepicker').each(function() {
// 			$( this  ).attr( "type", "date" );
// 		});
		
// 	}
// 	else {
// 			$('.search_datepicker').datepicker({
// 				language: 'ru',
// 				autoClose: true,
// 				// minDate: new Date() // Now can select only dates, which goes after today
// 			});
// 	}
// }



function tag_add() 
{
	$("#tag_add").click( function () {

		var newtag = $( "#pattern_tag_add").html();

		// Находим максимальное кол-во существующих тегов
		var next_id=1;

		var tags_children = $( "#tags_all").children().length;
		if ( tags_children != 0)
		{
			next_id = tags_children + 1;
		}

		// Вставляем новый тег
		$('#tags_all ').append(newtag);

		// Показываем добавленный тег
		$('#tags_all div:nth-child('+next_id+')').slideDown(200);

		tag_del();
	});
	tag_del();
}


function tag_del() 
{
	$("[data-del='delete']").click( function () {

		// Получение тега
		var current_tag_deleted = $(this).parent().parent().parent();

		// Удаление тега
		current_tag_deleted.remove();
	});
}



function area_add() 
{
	$("#area_add").click( function () {

		var newarea = $( "#pattern_area_add").html();

		// Находим максимальное кол-во существующих областей
		var next_id=1;

		var areas_children = $( "#areas_all").children().length;
		if ( areas_children != 0)
		{
			next_id = areas_children + 1;
		}

		// Вставляем новую область
		$('#areas_all ').append(newarea);

		// Показываем добавленную область
		$('#areas_all div:nth-child('+next_id+')').slideDown(200);

		area_del();
	});
	area_del();
}


function area_del() 
{
	$("[data-del='delete']").click( function () {

		// Получение области
		var current_area_deleted = $(this).parent().parent().parent();

		// Удаление области
		current_area_deleted.remove();
	});
}





//Ф-ия добавления новой строки в таблицу изображений 
function tr_area_add(area_name, area_comment, area_visible) {
	// Копирование шаблона строки изображения
	var newarea = $( "#pattern_table_tr_area");

	console.log(area_name);
	console.log(area_comment);
	console.log(area_visible);

	// Получения максимального кол-ва строк в таблице
	var next_id=1;
	if ($( "#table_areas").children().length != 0)
	{
	  var maxid =  parseInt($( "#table_areas tr:last-child>th").html());
	  next_id = maxid + 1;
	}

	// Вставка строки в таблицу
	$('#table_areas').append("<tr  id=area_tr_"+next_id+">"+newarea.html()+"</tr>");

	var current_tr = $("#area_tr_"+next_id);
	console.log(current_tr);
	console.log($(current_tr).html());


	// Заполнение строки данными, переданными извне
	current_tr.find("th").html(next_id);
	// current_tr.find("[data-area='image_name']").html(img_name);
	current_tr.find("[data-area='area_name']").html(area_name);
	current_tr.find("[data-area='area_comment']").html(area_comment);

	if(area_visible == true) {
		current_tr.find("[data-area='area_visible']").html("Да");
	}
	else {
		current_tr.find("[data-area='area_visible']").html("Нет");
	}

	show_modal_success("Данные успешно добавлены!");

	tr_area_init();
}


//Ф-ия получения данных о новом изображении из модального окна для добавления
function modal_tr_area_add()
{

	$("#add_new_area").click( function () {

		//Корректировка отображения нужных кнопок формы
		$("#edit_area_btn_confirm").hide();
		$("#add_area_btn_confirm").show();
		$("#ModalDownload").modal("show");
	});

	$("#btn_add_area_cancel").click( function () {
		$('#modal_area_name').val('');
		$("#modal_area_visible").prop("checked", true);
		$('#modal_area_comment').val('');
	});

	
	$("#add_area_btn_confirm").off().click( function () {

		// Сохранение данных из полей формы
		var area_name = $('#modal_area_name').val();
	
		var area_comment = $('#modal_area_comment').val();

		var area_visible = $("#modal_area_visible").prop("checked");

		if(area_name == "") {
			// alert("Ввведите наименование области!")
			show_modal_success("Ввведите наименование области!");

		}
		else {
		// Закрытие формы и очистка полей
		$("#ModalDownload").modal("hide");
		// $('#ModalDownload')[0].reset();
	
		$('#modal_area_name').val('');
		$("#modal_area_visible").prop("checked", true);
		$('#modal_area_comment').val('');
	
		// Вызов ф-ии добавления новой информации в таблицу
		tr_area_add(area_name, area_comment, area_visible);
		}

		
	});
}


//Ф-ия изменения данных строки в таблице изображений 
function tr_area_edit(area_name, area_comment, area_visible, current_edited_row_id_area) {


	// Заполнение строки таблицы новыми данными
	// $("[id='image_tr_"+row_id+"'] th").html(row_id);
	// $(current_tr+"img").attr( "src", img_path );
	// $("#"+row_id+" img").attr({ "src": img_path, "alt": img_name });
	$("#"+current_edited_row_id_area+" [data-area='area_name']").html(area_name);
	$("#"+current_edited_row_id_area+" [data-area='area_comment']").html(area_comment);

	if(area_visible == true) {
		$("#"+current_edited_row_id_area+" [data-area='area_visible']").html("Да");
	}
	else {
		$("#"+current_edited_row_id_area+" [data-area='area_visible']").html("Нет");
	}

	show_modal_success("Данные успешно изменены!");

}


//Ф-ия получения изменненных данных об изображении из модального окна для редактирования
function modal_tr_area_edit()
{
	$("#table_areas [data-edit='#ModalDownload']").click( function () {

		console.log("gg");

		//Корректировка отображения нужных кнопок формы
		$("#add_area_btn_confirm").hide();
		$("#edit_area_btn_confirm").show();
		$("#ModalDownload").modal("show");


		// Получение номера строки
		current_edited_row_id_area = $(this).parent().parent().parent().attr('id');

		console.log(current_edited_row_id_area);
		console.log($('#modal_area_name').val($("#"+current_edited_row_id_area+" [data-area='area_name']").html()));
		console.log($("#"+current_edited_row_id_area+" [data-area='area_name']").html());

		// Заполнение формы данными
		$('#modal_area_name').val($("#"+current_edited_row_id_area+" [data-area='area_name']").html());
		$('#modal_area_comment').val($("#"+current_edited_row_id_area+" [data-area='area_comment']").html());
		//   $('#modal_image_path').val($("#"+row_id+" img").attr('src'));

		if($("#"+current_edited_row_id_area+" [data-area='area_visible']").html() == "Да" ) {
			$("#modal_area_visible").prop("checked", true);
		}
		else {
			$("#modal_area_visible").prop("checked", false);
		}
	


		//   $("[id='image_tr_"+next_id+"'] img").attr({ "src": img_path, "alt": img_name });
		//   $("[id='image_tr_"+next_id+"'] [data-img='image_name']").html(img_name);


	});
	  
  
	$("#edit_area_btn_confirm").off().click( function () {
		
		if (current_edited_row_id_area.length > 0) {

			// Сохранение данных из полей формы
		var area_name = $('#modal_area_name').val();
	
		var area_comment = $('#modal_area_comment').val();

		var area_visible = $("#modal_area_visible").prop("checked");

		if(area_name == "") {
			// alert("Ввведите наименование области!")
			show_modal_success("Ввведите наименование области!");

		}
		else {
		// Закрытие формы и очистка полей
		$("#ModalDownload").modal("hide");
		// $('#ModalDownload')[0].reset();
	
		$('#modal_area_name').val('');
		$("#modal_area_visible").prop("checked", true);
		$('#modal_area_comment').val('');
	
			// Вызов ф-ии изменения информации в таблице
			tr_area_edit(area_name, area_comment, area_visible, current_edited_row_id_area);
		}

		

  
		}
	});

}


//Ф-ия удаления строки изображения
function modal_tr_area_remove()
{
	$("#table_areas [data-del='#ModalDel']").click( function () {

		//Корректировка отображения нужных кнопок формы
		$("#del_area_btn_confirm").hide();
		$("#del_area_btn_confirm").show();
		$("#ModalDel").modal("show");

		// Получение номера строки
		current_edited_row_id_area = $(this).parent().parent().parent().attr('id');
	});

	$("#del_area_btn_confirm").off().click( function () {

		if (current_edited_row_id_area.length > 0) {

		// Удаление строки из таблицы
		$("#"+current_edited_row_id_area).remove();	

		$("#ModalDel").modal("hide");
		show_modal_success("Данные удалены!");

		}
	});
}




// Инициализируем все события с изображениями
function tr_area_init() 
{
	modal_tr_area_add();
	modal_tr_area_remove();
	modal_tr_area_edit();
}


















// Глобальная переменная статуса главного изображения
var image_checked_input_id;
image_checked_input_id = $("#table_images input:checked");

// Глобальная переменная текущей изменяемой строки изображений
var current_edited_row_id_image = "";

// Глобальная переменная текущей изменяемой строки областей и тегов
var current_edited_row_id_area = "";

jQuery(document).ready(function () {
	
	password_roll();
	// areas_more();
	// input_file();
	search_roll();
// 	table_tr_worker_add();
// 	tr_image_init();
// 	// datepicker_init();
// 	tag_add();
//  area_add();
})