/**
 * Created by Haimei on 01/09/2017.
 */

/**
 * Mimic a class with public and private methods.
 * Note:
 * public methods uses this to define a function - e.g. this.init()
 * private methods uses var to define a function - e.g. showTable()
 **/
function CustomDataTable() {

  "use strict";

  var _dataTable;

  var _statusesAndIcons = {
    "Approved - Supplier Pending": "<i class='fa fa-check-square-o is-pending' aria-hidden='true'></i>",
    "Supplier Accepted": "<i class='fa fa-file-text-o is-accepted' aria-hidden='true'></i>",
    "Waiting to send": "<i class='fa fa-clock-o is-pending is-waiting' aria-hidden='true'></i>",
    "Shipped": "<i class='fa fa-truck is-shipped' aria-hidden='true'></i>"
  };

  this.init = function () {
    showTable();
    enableResizeTable();
    addEvent();
  };

  var showTable = function () {
    var dataUrl = "module/custom-data-table/table-data.json";

    _dataTable = $("#purchase-table").DataTable({
      "scrollX": true,
      "responsive": true,
      "aLengthMenu": [
        [10, 25, 50, -1],
        [10, 25, 50, "All"]
      ],
      "pagingType": "full_numbers",
      "oLanguage": {
        "sLengthMenu": " _MENU_ ",
        "sInfo": "Showing _START_ to _END_ of _TOTAL_ results",
        "oPaginate": {
          "sFirst": "<i class='fa fa-angle-double-left' aria-hidden='true'></i>",
          "sPrevious": "<i class='fa fa-angle-left' aria-hidden='true'></i>",
          "sNext": "<i class='fa fa-angle-right' aria-hidden='true'></i>",
          "sLast": "<i class='fa fa-angle-double-right' aria-hidden='true'></i>"
        }
      },
      "bFilter": false,
      "searching": true,
      "ordering": true,
      "Info": true,
      "bAutoWidth": false,
      "dom": 'itpl',
      "ajax": dataUrl,
      "columns": [
        {
          "data": function (data, type, row) {
            return '<a href="">' + data.PO + '</a>';
          }
        },
        {"data": "Date"},
        {
          "data": function (data, type, row) {
            var icon = _statusesAndIcons[data.Status] || "";
            return '<span>' + icon + data.Status + '</span>';
          }
        },
        {
          "data": function (data, type, row) {
            return '<span><i class="fa fa-check-circle" aria-hidden="true"></i>' + data.Supplier + '</span>';
          }
        },
        {"data": "BusinessUnit"},
        {"data": "Buyer"},
        {"data": "VAT"},
        {"data": "Total"}
      ]
    });
  };

  var enableResizeTable = function () {
    $(window).resize(function () {
      _dataTable.columns.adjust().draw();
    });
  };

  var addEvent = function () {
    $("#search").on("click", function () {
      searchAll();
      searchFilter();
      $(".filter-search__content input").val("");
    });

    $("#s-status, #s-business-unit, #s-supplier").on("keyup", function (e) {
      searchFilter();
    });

    $("#overall-search").on("keyup", function (e) {
      if (e.which === 13) {
        searchAll();
      }
    })
  };

  var searchAll = function () {
    _dataTable.search($("#overall-search").val()).draw();
  };

  var searchFilter = function () {
    _dataTable.column(2).search($("#s-status").val())
      .column(3).search($("#s-supplier").val())
      .column(4).search($("#s-business-unit").val())
      .draw();
  };
}

$(document).ready(function () {
  new CustomDataTable().init();
});

