Vue.component('isi',{
	template:
            `
            <!-- JUMBOTRON EDUCATION -->
            <div class="jumbotron jumbotron-fluid text-white" id="grad1">
                <div class="container">
                    <h1 class="display-4 text-center ">EDUCATION</h1>
                    <br>
                    <div class="container">
                        <div class="row text-center school">
                            <div class="col-12 col-lg-4 col-md-4 col-sm-4 a">
                                <a v-on:click="handleToggle" class="btn btn-success btn-lg rounded"> Junior High School</a>
                                <transition name="fade">
                                    <div v-show="isOpen" class="box shadow-lg p-3 mb-5">
                                        <img src="vue/src/assets/IC.png" alt="" class="img-fluid">
                                        <p> SMP INSAN CENDEKIA AL-MUJTABA </p>
                                    </div>
                                </transition>
                            </div>
                            <br>
                            <div class="col-12 col-lg-4 col-md-4 col-sm-4 a">
                            <a v-on:click="handleToggle1" class="btn btn-success btn-lg"> High School</a>
                            <transition name="fade">
                                <div v-show="isOpen1" class="box1 shadow-lg p-3 mb-5">
                                    <img src="vue/src/assets/IC.png" alt="" class="img-fluid">
                                    <p> SMA INSAN CENDEKIA AL-MUJTABA </p>
                                </div>
                            </transition>
                            </div>
                            <br>
                            <div class="col-12 col-lg-4 col-md-4 col-sm-4 a">
                            <a v-on:click="handleToggle2" class="btn btn-success btn-lg"> University</a>
                            <transition name="fade">
                                    <div v-show="isOpen2" class="box2 shadow-lg p-3 mb-5">
                                        <img src="vue/src/assets/Logo_Telkom1.png" alt="" class="img-fluid" style="height:267px;width:270px;">
                                        <p> Telkom University </p>
                                    </div>
                            </transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END JUMBOTRON EDUCATION -->

            <!-- JUMBOTRON PORTOFOLIO -->
            <div class="jumbotron jumbotron-fluid text-white">

            </div>
            <!-- END JUMBOTRON PORTOFOLIO -->
            `,
		data(){
			return{
                isOpen: false,
                isOpen1: false,
                isOpen2: false
			}
        },
        methods: {
            handleToggle() {
            this.isOpen = !this.isOpen
            },
            handleToggle1() {
            this.isOpen1 = !this.isOpen1
            },
            handleToggle2() {
            this.isOpen2 = !this.isOpen2
            } 
        }
})