<template>
<div id="app">
    <div id="nav">
        <b-navbar toggleable="lg" type="light" bg-white>
            <div class="container">
                <b-navbar-brand router-link to="/"><img :src="require('./assets/mbe-logo-svg.svg')" /></b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item style="margin-top:8px" router-link to="/services">
                            Hizmetler
                        </b-nav-item>
                    </b-navbar-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto mt-3">
                        <button class="btn-login fill" left>Mutlubiev Profesyoneli Ol</button>
                        <b-nav-item router-link to="/login">
                            <b-icon icon="person"></b-icon> Giriş Yap
                        </b-nav-item>

                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
    </div>
    <router-view />
</div>
</template>

<style lang="scss">
@import "./css/main.scss";
</style>
