<template>
  <h1>{{count}}</h1>

  <button @click="count++">Incremetar</button>
  <button @click="count--">Diminuir</button>
  <button @click="count = 0">Resetar</button>
  
  <br><br>

  <h1 v-highlight:background.shadow="'red'">To-Do</h1>

  <p v-for="todo in doneTodos" :key="todo.text">
    {{todo.text}}
  </p>
  
  <button @click="checkAllTodos">Finalizar</button>
  <button @click="discheckAllTodos">Zerar</button>

  <br><br><br><br>

  <a v-bind:href="product.url" v-bind:class="productClass" v-on:click.once.prevent="something"> 
    {{ product.name }}
  </a>

  <br><br>
  
  <div>
    <h1 v-if="sex === 'Masculino'"> Masculino</h1>
    <h1 v-else-if="sex === 'Feminino'"> Feminino</h1>
    <h1 v-else-if="sex === 'Outro'"> Outro</h1>
  </div>

  <form>
    <input type="text" placeholder="Nome" v-model="name"/><br>

    <input type="number" placeholder="Idade" v-model="age"/><br><br>

    <textarea rows="2" placeholder="Descrição" v-model="message"></textarea><br>

    <input type="checkbox" v-model="newsletter"/> Newsletter <br><br>

    <input type="radio" name="color" value="vermelho" v-model="color"/> Vermelho
    <input type="radio" name="color" value="verde" v-model="color"/> Verde
    <input type="radio" name="color" value="azul" v-model="color"/> Azul

    <br><br>

    <select v-model="fruit">
      <option disabled selected>Selecione uma fruta</option>
      <option value="uva">Uva</option>
      <option value="banana">Banana</option>
      <option value="morango">Morango</option>
    </select>
  </form>

  <p>Nome: {{ name }}</p>
  <p>Idade: {{ age }}</p>
  <p>Mensagem: {{ message }}</p>
  <p>Newsletter: {{ newsletter }}</p>
  <p>Cor: {{ color }}</p>
  <p>Fruta: {{ fruit }}</p>

  <ButtonStyled @click="show = !show">
    <i class="fab fa-vuejs"></i>
  </ButtonStyled>

  <transition 
    enter-active-class="animate_animated animate_slideInLeft" 
    leave-active-class="animate_animated animate_slideOutLeft">
      <h3 v-if="show">Teste</h3>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonStyled from '@/components/ButtonStyled.vue'
import 'animate.css'

interface Todo{
  text: string
  done: boolean
}

export default defineComponent({
  data(){
    return {
      count: 0,
      todos: [] as Todo[],
      product: {
        name: 'Camisa',
        url: 'http://loja.com/produtos/12345',
        stock: true
      },
      sex: 'Masculino',

      name: '',
      age: 0,
      message: '',
      newsletter: false,
      color: '',
      fruit: '',

      show: false
    }
  },
  created(){
    this.todos = [
      { text: 'Estudar Typescript', done: true },
      { text: 'Lavar os pratos', done: false },
      { text: 'Aprender Nuxt.js', done: true }
    ]
  },
  watch:{
    todos(newValue: Todo[]){
      const isFinished = !newValue.some(({done}) => !done)

      if(isFinished){
        alert('Yuuuuuuppppp!')
      } else {
        alert('SHIT!')
      } 
    }
  },
  computed:{
    doneTodos(): Todo[]{
      return this.todos.filter((todo) => todo.done)
    },
    productClass(): string{
      return this.product.stock ? 'success' : 'danger'
    }
  },
  updated(){
      if(this.count === 5) this.count = 2 
    },
  methods:{
    checkAllTodos(){
      this.todos = this.todos.map(({text}) => {
        return{text, done: true}
      })
    },
    discheckAllTodos(){
      this.todos = this.todos.map(({text}) => {
        return{text, done: false}
      })
    },
    something(){
      alert('Clicado')
    },
    action(event: string){
      console.log(event)
    }
  },
  components: {
    ButtonStyled
  }
});
</script>

<style scoped>
  .danger{
    color: red;
  }
  .success{
    color: green;
  }

  input[type='email'],
input[type='text'],
select,
textarea {
  display: block;
}

form {
  padding-bottom: 1rem;
  border-bottom: 2px solid #000;
}

::v-deep.button-styled span{
  color: #000
}

/* 
v-enter-from (de onde estar vindo)
v-enter-active (como vai acontecer)
v-enter-to (para onde está indo)

v-leave-from (de onde estar vindo)
v-leave-active (como vai acontecer)
v-leave-to (para onde está indo)

O nome inicial `v` depende do atributo `name`
*/

.v-enter-from, v.leave-to{
  opacity: 0;
}

.v-enter-active, .v-leave-active{
  transition: opacity 0.5s;
}
</style>
