const _PrivacyInterval = setInterval(() => {
  var modal = $(".Modal-wrapper .PrivacyConfirm-title");
  if (modal.length > 0) {
    clearInterval(_PrivacyInterval);
    modal.remove();
    var root = $("html");
    root.css("overflow", "auto");
  }
}, 1000);
