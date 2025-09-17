<template>
<header>
       <div class="wrapper-nav-bar-main">
                <h1>Главная</h1>
                <div class="nav-right">
                    <div class="button-text-Aa">
                        <span>Aa</span>
                    </div>
                    <div class="lk-button">
                        <div class="profile-button">
                            <div class="profile-avatar">И</div>
                            <h3>Профиль</h3>
                        </div>
                        <div class="profile-menu">
                            <div class="menu-item" @click="ChangeYourProfile()">
                                <i class="fas fa-user-edit"></i>
                                <span>Редактировать профиль</span>
                            </div>
                            <div class="menu-item">
                                <i class="fas fa-history"  @click="ViewYourHistory()"></i>
                                <span>История</span>
                            </div>
                            <div class="menu-item"  @click="GoExit()">
                                <i class="fas fa-sign-out-alt"></i>
                                <span>Выход</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

      
</template>
<script>
export default{
    name:'MyHeader',
    data(){
        return[

        ]

    },
    method:{
        ChangeYourProfile(){
           return this.$router.push('/changeprofile')

        },
        ViewYourHistory(){
           return this.$router.push('/history')

        },
        GoExit(){
           return this.$router.push('/')

        }

    }

}

</script>