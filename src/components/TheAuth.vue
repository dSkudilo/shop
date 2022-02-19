<template>
  <div class="auth modal" @click.stop>
    <div class="grey-form">
      <input type="email" placeholder="E-MAIL">
    </div>
    <div class="grey-form">
      <input type="password" placeholder="PASSWORD">
    </div>
    <div class="auth__btns">
      <button class="dark-btn">
        <font-awesome-icon :icon="['fa','lock']">
        </font-awesome-icon>
      </button>
      <button class="dark-btn dark-btn--border">
        <font-awesome-icon :icon="['fa','user-plus']">
        </font-awesome-icon>
      </button>
    </div>
    <button class="facebook">facebook login</button>
    <button class="google">google login</button>
  </div>
</template>
