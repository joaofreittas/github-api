<template>
  <div class="container">
    <div class="content">
      <b-row class="mt-4"> 
        <b-col cols="12">
          <b-input 
            type="text" 
            name="username" 
            id="username" 
            placeholder="Seu nome de usuário" 
            v-model="username"
          />
          <b-button 
            class="mt-2" 
            @click="verifyUserName"
          >
            Buscar perfil GitHub
          </b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="mt-4" v-if="null !== user">
          <b-skeleton 
            type="avatar" 
            size="100px" 
            v-if="loading"
            class="user-perfil"
          ></b-skeleton>
          <b-avatar
            v-else 
            :src="user.avatar_url"
            size="100px"
          />
          <b-skeleton width="60%" v-if="loading" class="user-perfil mt-2"></b-skeleton>
          <p v-else>{{ user.name }}</p>
          
          <b-skeleton width="60%" v-if="loading" class="user-perfil mt-2"></b-skeleton>
          <p v-else>{{ user.location }} </p>

          <b-skeleton width="60%" v-if="loading" class="user-perfil mt-2"></b-skeleton>
          <p v-else>{{ user.public_repos }} repositórios públicos</p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import GithubService from '../services/github'

export default {
  data() {
    return {
      username: '',
      user: null,
      loading: false,
    }
  },
  methods: {
    async verifyUserName(){
      this.loading = true;
      setTimeout(async () => {
        try{
          if(this.username !== ''){
            const user = await GithubService.getUser(this.username)
            if(user) {
              console.log('user :>> ', user);
              this.user = user;
            }else {
              this.errorMessage('Usuário não encontrado!')
            }
          }else {
            this.errorMessage('Nome de usuário não foi preenchido!')
          }
        }catch(error) {
          console.log('error :>> ', error);
        }finally {
          this.loading = false;
        }
      }, 150)
    },

    errorMessage(message) {
      this.$bvToast.toast(message, {
        title: 'Atenção',
        solid: true,
        variant: 'danger',
        autoHideDelay: 5000,
      })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.user-perfil{
  margin:0 auto;
  text-align: center;
}
</style>
