const jq = $.noConflict();
jq(function () {
  let selectAll = jq(".slc-all");
  //   Select All
  function updateCheckBox() {
    let singleCheck = jq(".single-slc");
    singleCheck.prop("checked", selectAll.prop("checked"));
    jq(".slc-all-label").text(
      selectAll.prop("checked") ? "Remove All" : "Select All"
    );
  }
  selectAll.click(function () {
    updateCheckBox();
  });
  jq(document).on("change", ".single-slc", function () {
    let totalCheckboxes = jq(".single-slc").length;
    let checkCount = jq(".single-slc:checked").length;
    selectAll.prop("checked", totalCheckboxes === checkCount);
    if (checkCount === 0) jq(".slc-all-label").text("Select All");
    else if (checkCount === totalCheckboxes)
      jq(".slc-all-label").text("Remove All");
  });
  //   add new todo
  jq(".add-text").click(function () {
    let inputValue = jq(".form-control").val();
    let cloneList = jq(".list-group li").eq(1).clone();
    cloneList.appendTo(".list-group");
    cloneList.find(".userText").text(inputValue);
  });
});
