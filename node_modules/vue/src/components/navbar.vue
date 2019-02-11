Vue.component('navbar',{
	template:
			`
			<header>
                <nav>
                   <div class="menu-icon">
                      <i class="fa fa-bars fa-2x"></i>
                   </div>
                   <div class="logo">
                      LOGO
                   </div>
                   <div class="menu">
                      <ul>
                         <li><a href="#">Home</a></li>
                         <li><a href="#">About</a></li>
                         <li><a href="#">Blog</a></li>
                         <li><a href="#">Contact</a></li>
                      </ul>
                   </div>
                </nav>
                <div class="container">
                    <div class="row">
                        <div class=" opens">
                            WELCOME TO MY WEBSITE
                        </div>
                    </div>
                    <div class="row">
                        <div class=" opens2">
                            (Ibnu Hamdam | Front-End)
                        </div>
                    </div>
                </div>
             </header>`,
		data(){
			return{
				
			}
		}
})