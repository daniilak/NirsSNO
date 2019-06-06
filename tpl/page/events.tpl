<section class="content">
    <div class="box box-widget box-default">
        <div class="box-header with-border">
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group">
                        <select class="form-control boxed year-list" data-sorted></select>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <select class="form-control boxed event-levels-list" data-sorted></select>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <select class="form-control boxed event-types-list" data-sorted></select>
                    </div>
                </div>
                <div class="col-md-3">
                    <button type="button" class="btn
            btn-block
            btn-primary openModal" data-toggle="modal" data-target="#addModal"><strong>Добавить
              мероприятие</strong></button>
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
<!-- Modal -->
<div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="addModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <form class="formaddModal" data-toggle="validator" role="form" method="post" onSubmit="return false">
                <div class="modal-body">
                    <div class="form-group">
                        <label class="control-label">Название мероприятие:</label>
                        <input type="text" class="form-control boxed" required name="name">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Год для отчета годового:</label>
                        <select class="form-control boxed year-list" name="year"></select>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Уровень мероприятия:</label>
                        <select class="form-control boxed event-levels-list" name="level"></select>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Тип мероприятия:</label>
                        <select class="form-control boxed event-types-list" name="type"></select>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Дата начала проведения:</label>
                        <input type="date" class="form-control boxed" required name="date_start">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Дата конца проведения:</label>
                        <input type="date" class="form-control boxed" required name="date_end">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Отвественная организация:</label>
                        <input type="text" class="form-control boxed" required name="organization">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Место проведения:</label>
                        <input type="text" class="form-control boxed" required name="location">
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success buttonSection"><i class="fa fa-paper-plane" id="spinner"></i>
              Добавить</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal"> Отмена</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>