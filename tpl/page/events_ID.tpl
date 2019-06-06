<section class="content">
    <div class="box box-widget box-default">
        <div class="box-header with-border">
            <div class="row">
                Работа с мероприятием: {name}
            </div>
        </div>
        <div class="box-body">
            <div class="nav-tabs-custom">
                <ul class="nav nav-tabs">
                    <li class="active"><a href="#tab_1" data-toggle="tab">Работы</a></li>
                    <li><a href="#tab_2" data-toggle="tab">Настройки</a></li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="tab_1">
                        <div class="list-group sections">
                            <div class="row" id="works">
                            </div>
                        </div>
                        <div class="form-group text-center">
                            <button type="button" class="btn btn-info add-work" data-id="{ID}"><span class="fa fa-plus"></span>
                Добавить работу</button>
                        </div>
                    </div>
                    <div class="tab-pane" id="tab_2">
                        <div class="form-group">
                            <label class="control-label">Название мероприятия:</label>
                            <input type="text" class="form-control boxed" data-autosave="name" data-id="{ID}" value="{name}">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Тип мероприятия:</label>
                            <select class="form-control boxed" data-autosave="type" data-id="{ID}"></select>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Уровень мероприятия:</label>
                            <select class="form-control boxed" data-autosave="level" data-id="{ID}"></select>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Факультет мероприятия:</label>
                            <select class="form-control boxed" data-autosave="id_fac" data-id="{ID}"></select>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Год мероприятия:</label>
                            <input type="number" class="form-control boxed" data-autosave="year" data-id="{ID}" value="{year}">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Дата начала мероприятия:</label>
                            <input type="date" class="form-control boxed" data-autosave="dateStart" data-id="{ID}" value="{dateStart}">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Дата окончания мероприятия:</label>
                            <input type="date" class="form-control boxed" data-autosave="dateEnd" data-id="{ID}" value="{dateEnd}">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Место проведения мероприятия:</label>
                            <input type="text" class="form-control boxed" data-autosave="location" data-id="{ID}" value="{location}">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Организация, отвечающая за мероприятие:</label>
                            <input type="text" class="form-control boxed" data-autosave="organization" data-id="{ID}" value="{organization}">
                        </div>
                        <div class="form-group">
                            <label class="control-label">По приказу фед.власти:</label> checkbox isOrder
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</section>