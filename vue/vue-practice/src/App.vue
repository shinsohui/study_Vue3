<template>
  <div>
    <h1>Hello {{ username }}</h1>
    <h2 class="line-through">line-through</h2>
    <h2 v-bind:class="textDecroation">line-through</h2>

    <!-- vue에서 클래스를 조건으로 주는 방법 -->
    <!-- 
      1. 삼항 연산자 조건 ? 참 : 거짓
    -->

    <h2 :class="isDone === true ? 'line-through' : 'highlight'">
      line-through
    </h2>

    <!-- 
      2. Object 형태의 동적 클래스 
    -->

    <h2
      :class="{
        highlight: isDone === false,
        'text-red': username === 'sohui',
      }"
    >
      Object형태의 동적 클래스
    </h2>

    <!-- 
      3. Array 형태의 동적 클래스 부여 -->
    <h2
      :class="[
        isDone === true ? 'line-through' : 'highlight',
        username === 'sohui' ? 'text-red' : 'text-green',
      ]"
    >
      Array 형태의 동적 클래스 부여
    </h2>

    <!-- v-text 비워둬야함 -->
    <h1 v-text="username"></h1>
    <h1 v-text="`${username} 만나서 반갑습니다`"></h1>
    <p>안녕하세요 저는 {{ user.name }}입니다.</p>
    <p>저는 올해 {{ user.age }}살 입니다.</p>
    <p>저의 직업은 {{ user.job }}입니다.</p>
    <!-- v-htmldp 특정 코드를 삽입해서 사용할 수도 있기 때문에, 
    믿을 수 있는 경우(외부에서 가져올 경우)에만 사용해야 함 -->

    <p v-html="button"></p>
    <p v-html="button2"></p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isDone: true,
      textDecroation: "line-through",
      username: "code",
      year: 2021,
      user: {
        name: "sohui",
        job: "programmer",
        age: 100,
      },
      button: "<button>click!</button>",
      button2: `<button onclick ='alert("hacking")'>click!</button>`,
    };
  },
};
</script>

<style>
.text-red {
  color: red;
}

.text-green {
  color: green;
}

.line-through {
  text-decoration: line-through;
}

.highlight {
  font-weight: bold;
  background: pink;
}
</style>
