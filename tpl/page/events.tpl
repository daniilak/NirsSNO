<section class="content">
  <div class="box box-widget box-default">
    <div class="box-header with-border">
      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <select class="form-control boxed" id="year-list"></select>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <select class="form-control boxed" id="event-levels-list"></select>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <select class="form-control boxed" id="event-types-list"></select>
          </div>
        </div>
        <div class="col-md-3">
          <button type="button" class="btn
            btn-block
            btn-primary openModal" data-toggle="modal"
            data-target="#addModal"><strong>Добавить мероприятие</strong></button>
        </div>
      </div>
    </div>
    <div class="box-body">
      <div class="list-group sections">
        <div class="row" id="events">
        </div>
      </div>
    </div>
  </div>
</section>