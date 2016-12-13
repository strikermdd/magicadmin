$(document).ready(function(){
	$.fn.editable.defaults.mode = 'inline';

	// Simple list
	var todolist = document.getElementById("todo-list");
	//Sortable.create(todolist); // That's all.
	Sortable.create(todolist, {
		cursor: "move",
		animation: 150
	});
	
	
	/*
	$(".todo-list").sortable({
		cancel: ".done",
		axis: "y",
		cursor: "move",
		forcePlaceholderSize: true
	});
	*/

	$(document).on("ifChecked", ".check-icon input", function(){
		var parent = $(this).parents("li:first");
		$(parent).addClass("done");
		$(parent).data("orig-order",$(parent).index()).insertAfter($(".todo-list li:last"));
		$('.todo-item',parent).editable("toggleDisabled");
	});

	$(document).on("ifUnchecked", ".check-icon input", function(){
		var parent = $(this).parents("li:first");
		$(parent).removeClass("done");
		if($(parent).data("orig-order")){
			$(parent).insertAfter($(".todo-list li:eq("+($(parent).data("orig-order")-1)+")"));
		}
		$('.todo-item',parent).editable("toggleDisabled");
	});

	$(document).on("click",".add-todo", function(){
		var $item = '<li class="animated bounceInDown">'+
						'<span class="check-icon"><input type="checkbox" /></span>'+
						'<span class="todo-item">New todo item</span>'+
						'<span class="todo-options pull-right">'+
							'<a href="javascript:;" class="todo-delete"><i class="fa fa-close"></i></a>'+
						'</span>'+
					'</li>';
		$(".todo-list").prepend($item);
		
		$('input').iCheck({
		  checkboxClass: 'icheckbox_square-aero',
		  radioClass: 'iradio_square-aero',
		  increaseArea: '20%'
		});

		$('.todo-list .todo-item').editable({
		    type: 'text'
	    });
	    window.setTimeout(function () {
		   	$(".todo-list li").removeClass("animated");
		}, 500);
	});

	$(document).on("click", ".todo-delete", function(){
		var parent = $(this).parents("li:first");
		$(parent).hide(200);
	})

	var $contextMenu = $("#contextMenu");
    var $rowClicked;

    $(document).on("contextmenu", ".todo-list li", function (e) {
        $rowClicked = $(this)
        $contextMenu.css({
            display: "block",
            left: e.pageX,
            top: e.pageY
        });
        return false;
    });

    $contextMenu.on("click", "a", function () {
        $rowClicked.removeAttr("class").addClass($(this).data("priority"));
        $contextMenu.hide();
    });

    $(document).click(function () {
        $contextMenu.hide();
    });

	$('.todo-list .todo-item').editable({
	    type: 'text'
    });
});