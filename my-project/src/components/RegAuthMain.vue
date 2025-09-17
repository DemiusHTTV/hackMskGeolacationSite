<template>

       <main>
        <div class ='container'>
            <div class="window-auth-reg">
                <div class="text-box">
                    <div class="Auth-Button"   @click="activeTab = 'login'" :class = "{active: activeTab  === 'login' }">
                        <span class="txt-auth">Вход</span>
                    </div>
                    <div class="Reg-Button" :class="{active: activeTab === 'register'}">
                        <span class="txt-reg" @click="activeTab = 'register'">Зарегистрироваться</span>
                    </div>
                </div>
                <hr>
                <div class="data-box"> 
            
                    <div class="auth-content" v-if="activeTab === 'login'">
                        <div class="helper"><h2>Вход в аккаунт</h2></div>
                       <div class="class-inputs"><input type="email" placeholder="Email" v-model="loginEmail">
                        <input type="password" placeholder="Пароль" v-model="loginPassword">
                        </div> 
                    </div>

                    
                    <div class="reg-content" v-if="activeTab === 'register'">
                        <div class="helper"><h2>Регистрация</h2></div>
                        <div class =class-inputs>
                        <input type="email" placeholder="Введите ваш email" v-model="RegestrationEmail">
                        <input type="password" placeholder="Придумайте пароль" v-model="RegestrationPasswor">
                        <input type="password" placeholder="Повторите пароль" v-model="RegRetryPassword">
                        <input type="text" placeholder="Никнейм" v-model="Nickname"></div>
                    </div>
                </div>

                <div class="button">
                    <div class = auth-reg @click="handleLogin" v-if="activeTab === 'login'">Войти</div>
                    <div class="auth-reg" @click="handleRegister" v-if="activeTab === 'register'">Зарегистрироваться</div>
                </div>
            </div>
        </div>
    </main>

</template>

<script>
export default {
    name: 'RegAuthMain',
    data() { 
        return {
            activeTab: 'login',
            loginEmail: '',
            loginPassword: '',
            RegestrationEmail: '',
            RegestrationPasswor: '',
            Nickname: '',
            RegRetryPassword: '',
        }
    },
    computed: {
        IsAuthActived() {
            return this.activeTab === 'login';
        },
        IsRegistredActived() {
            return this.activeTab === 'register';
        }
    },
    methods: {
        handleLogin() {
            
            // console.log('Login:', {
            //     email: this.loginEmail,
            //     password: this.loginPassword
            // });
            this.$router.push('/main')
        },
        handleRegister() {
            
            console.log('Register:', {
                email: this.RegestrationEmail,
                password: this.RegestrationPasswor,
                nickname: this.Nickname
            });
        }
    }
}
</script>