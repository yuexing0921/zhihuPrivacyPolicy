window._PrivacyInterval = setInterval(() => {
  var modal = $(".Modal-wrapper .PrivacyConfirm-title");
  if (modal.length > 0) {
    modal.closest(".Modal-wrapper").remove();
    var root = $("html");
    root.css("overflow", "auto");
    clearInterval(window._PrivacyInterval);
  }
}, 1000);
