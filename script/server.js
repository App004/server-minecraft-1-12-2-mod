function copy() {
  var copyText = document.getElementById("A");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  Swal.fire({
         title: " copy success ",
         icon: "success"
         input: "text"
  });
}