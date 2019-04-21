function sending(sendingData) {
	  $.ajax({
	    url: "/admin",
	    data: sendingData,
	    type: "POST",
	    dataType: "json",
	    success: function(data) {}
	  });
	}
$(document).ready(function () {
	
	

	$(".formaddModal")
    .unbind("submit")
    .submit(function(e) {
      e.preventDefault();
      $("#spinner")
        .removeClass()
        .addClass("fa fa-spinner fa-spin");
      data = sending($("form").serializeArray());
      if (data !== false) {
        $("#spinner")
          .removeClass()
          .addClass("fa fa-paper-plane");
        $("#addModal").modal("hide");
        alert("Данные обновлены");
        $(".form-control.box").each(function(i, elem) {
          $(elem).val("");
        });
        document.location.reload(true);
      } else {
        alert();
      }
    });
	
	
	$(".searching-btn").on("click", function() {
	  	let sendingData = {
	      lName: $('.searching[data-type="last_name"]').val(),
	      fName: $('.searching[data-type="first_name"]').val(),
	    };
	    
	    if (sendingData.fName.lenght == 0 && sendingData.lName.lenght == 0) {
	    	return;
	    }
	  
	    $.ajax({
	      url:"/admin", 
	      data: sendingData,
	      type: "POST",
	      dataType: "json",
	      success: function(data) {
	      	if (data.code == 1)
	      		alert('Не найден с такими параметрами')
			$('.searching-div').html(data.html);
	      }
	    });
	    
    });
	
	$(".download_file").on("click", function() {
	  	let sendingData = {
	      download_file: $(this).data("id"),
	    };
	  

	    const text = $('.download_file[data-id="'+sendingData.download_file+'"]').text();
	    
	    
	    $('.download_file[data-id="'+sendingData.download_file+'"]').html(
	      '<i class="fa fa-spinner fa-spin"></i> Идет обработка документа'
	    );
	    $.ajax({
	      url:"/admin", 
	      data: sendingData,
	      type: "POST",
	      dataType: "json",
	      success: function(data) {
			$('.download_file[data-id="'+sendingData.download_file+'"]').html('<i class="fa fa-save"></i>' + text);
	        window.location = "https://ais.snochuvsu.ru/" + data.url;
	      }
	    });
	    
    });
	
	
	
	$(".set_active").click(function() {
		var dataSend = {
			id : $(this).data('id'),
			isact : $(this).data('isact')
		}
		$.ajax({
			url:"/admin", 
			data: dataSend, 
			type:'POST', 
			dataType: 'json',
			success:function(data){
				var k = 1;
				$(".set_active[data-id='" + dataSend.id + "']").text("Деактивизировать")
				if (dataSend.isact == 1) {
					$(".set_active[data-id='" + dataSend.id + "']").text("Сделать активной")
					k = 0;
				}
				$(".set_active[data-id='" + dataSend.id + "']")
                .data("isact", k)
                .attr("data-isact", k);
                
			}
		});
	});
	
	 $(document).on('change', '.edit_form', function() {
	 	var dataSend = {
			id : $(this).data('id'),
			typeform : $(this).data('typeform'),
			value : $(this).val()
		}
        $.ajax({
            data : dataSend,
            dataType: 'json',
			type: 'POST',
            success : function(data) {
                
            }
        })
    })
    
    $(document).on('change', '.edit_facs', function() {
	 	var dataSend = {
			id : $(this).data('id'),
			facsform : $(this).data('facsform'),
			value : $(this).val()
		}
        $.ajax({
            data : dataSend,
            dataType: 'json',
			type: 'POST',
            success : function(data) {
               
            }
        })
    })
    
    
    

});