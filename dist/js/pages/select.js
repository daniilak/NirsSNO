/**
 * xResponse function
 *
 * xResponse method is made to return jQuery ajax response
 *
 * @param  {object} your ajax param
 * @return {mix}       [ajax response]
 */
$.extend({
  xResponse: function(data) {
    // local var
    var theResponse = null;
    // jQuery ajax
    $.ajax({
      url: 'api',
      type: 'POST',
      data: data,
      dataType: 'json',
      async: false,
      success: function(respText) {
        theResponse = respText;
      }
    });
    // Return the response text
    return theResponse;
  }
});
