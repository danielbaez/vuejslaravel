<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">

                <div class="card mb-3 mt-3" v-for="item in list">
                    <div class="card-header" v-bind:href="item.slug" v-text="item.title"></div>
                    <div class="card-body">
                        <p class="card-text" v-text="item.body"></p>
                    </div>
                </div>

                <infinite-loading @infinite="infiniteMandler">
                    <div slot="no-more">--</div>
                    <div slot="spinner">Cargando...</div>
                    <div slot="no-results">Sin resultados</div>
                </infinite-loading>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [],
                page: 0
            }
        },
        methods: {
            infiniteMandler($state) {
                this.page++;
                let url = 'http://localhost:8888/vuejslaravel/public/api/posts?page='+this.page;

                axios.get(url)
                .then(response => {
                    let posts = response.data.data;

                    if(posts.length) {
                        this.list = this.list.concat(posts);
                        $state.loaded();
                    }else {
                        $state.complete();
                    }
                });
            }
        }
    }
</script>
