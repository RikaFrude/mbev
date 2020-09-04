<template>
<div class="login">
    <section class="areaSpacing">
        <div class="container mb-10">
            <div class="row">

                <div class="col-md-5">
                    <div class="card">
                        <div class="card-body loginform">

                            <h4 class="card-title mb-4 mt-1">Üye Girişi</h4>
                            <form id="loginform">
                                <div class="form-group">
                                    <label class="float-left">Mail </label>
                                    <input name="" class="form-control" placeholder="Email" type="email">
                                </div> <!-- form-group// -->
                                <div class="form-group">
                                    <label class="float-left">Şifre</label>
                                    <input class="form-control" placeholder="******" type="password">
                                </div> <!-- form-group// -->
                                <div class="form-group">
                                    <div class="checkbox">
                                        <label class="float-left"> <input type="checkbox"> Şifremi hatırla </label>

                                    </div> <!-- checkbox .// -->
                                </div> <!-- form-group// -->
                                <div class="form-group loginformsbm">
                                    <button type="submit" class="btn btn-block"> Giriş Yap </button>
                                </div> <!-- form-group// -->
                                <div class="form-group">
                                    <a class="" href=" #">Şifrenizi mi unuttunuz?</a>
                                </div> <!-- form-group// -->
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 m-auto">
                    <b-icon icon="grip-horizontal" animation="cylon-vertical" font-scale="4" class="prcolor"></b-icon>
                </div>
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-body">

                            <h4 class="card-title mb-4 mt-1">Kayıt Ol</h4>
                            <form id="registerform">
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label class="float-left" for="inputEmail4">Üye Adı</label>
                                        <input type="email" class="form-control" id="inputEmail4" placeholder="Rika Frude">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label class="float-left" for="inputPassword4">Email</label>
                                        <input type="password" class="form-control" id="inputPassword4" placeholder="isim@example.com">
                                    </div>
                                </div>
                                <div class="form-row ">
                                    <div class="form-group col-md-6 ">
                                        <label class="float-left" for="inputEmail4">Şifre</label>
                                        <input type="email" class="form-control" id="inputEmail4" placeholder="**********">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label class="float-left" for="inputPassword4">Telefon</label>
                                        <input type="password" class="form-control" id="inputPassword4" placeholder="53x xxx xx xx">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="form-check float-left">
                                        <input class="form-check-input" type="checkbox" id="gridCheck">
                                        <label class="form-check-label" for="gridCheck">
                                            <p><a href="#">Üyelik koşulları</a> ve <a href="">kişisel verilerin korunmasını </a>onaylıyorum.</p>
                                        </label>

                                    </div>

                                </div>

                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary btn-block"> Kayıt Ol </button>
                                </div> <!-- form-group// -->
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>
    <mbfooter> </mbfooter>
</div>
</template>
