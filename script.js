$(document).ready(function () {
  // Adicionar tarefa
  $("#addTask").click(function () {
    var newTaskText = $("#newTask").val();
    if (newTaskText) {
      var newTask = $("<li>" + newTaskText + "</li>");
      newTask.appendTo("#taskList");
      $("#newTask").val("");
    }
  });

  // Mostrar/Ocultar tarefas
  $("#toggleTasks").click(function () {
    $("#taskList").toggleClass("hidden");
  });

  // Remover tarefa
  $("#taskList").on("click", "li", function () {
    $(this).remove();
  });

  // Obter elemento pai
  $("#taskList").on("click", "li", function () {
    var parent = $(this).parent();
    console.log("Elemento pai:", parent[0]);
  });
});
