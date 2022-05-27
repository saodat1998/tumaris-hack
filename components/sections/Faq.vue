<template>
  <div class="faq">
    <h3 class="mb-3">{{ $t('faq.title') }}:</h3>
    <div class="accordion">
      <div
        v-for="(item, key) in list"
        :key="item.title"
        class="accordion--item"
      >
        <h4
          class="accordion--header"
          :class="{ 'accordion--header__active': expand === key }"
          @click="expand === key ? (expand = null) : (expand = key)"
        >
          {{ item.title }}

          <b-icon-plus class="accordion--icon" />
        </h4>
        <div class="accordion--content" :class="{ active: expand === key }">
          <div v-html="item.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  data() {
    return {
      visible: true,
      expand: null,
      list: [
        {
          title: 'Как подготовиться к сертификации?',
          content: `<div class="faq__accordion__item__content_all">
                <p>Для подготовки к сертификации на степень PME® рекомендуем использовать:</p>
                <p>Стандарт PMI PMBOK® (2017), Agile Practice Guide (2017), <a href="https://agilemanifesto.org/iso/ru/manifesto.html" target="_blank">Agile-манифест</a> и его <a href="https://agilemanifesto.org/iso/ru/principles.html" target="_blank">Основополагающие принципы</a>, <a href="https://scrumguides.org/download.html" target="_blank">Руководство по Scrum</a>, <a href="https://pm.expert/upload/gosts/gost54869-2011.pdf" target="_blank">ГОСТ Р 54869-2011 «Проектный менеджмент. Требования к управлению проектом»</a>, а также другую литературу по тематике управления проектами.
                    </p><p>
                        <strong>Курсы компании PM Expert: </strong><br>
                        - <a href="https://bk.pm.expert" target="_blank">Базовый курс по управлению проектами на основе стандарта PMI PMBOK® Guide 6th Edition (2017)</a><br>
                        - <a href="https://pm.expert/events/distant-courses/podgotovka-pme/" target="_blank">Подготовка к сертификационному экзамену на степень PME® (Дистанционный курс)</a>
                    </p>
                <p>
                    <strong><em>Проверить уровень знаний и готовность к прохождению сертификации PME® можно при помощи дистанционного тестирования <a href="http://pm.expert/events/certification/pm-test-online-osnovy-proektnogo-upravleniya/" target="_blank">PM Test Online «Основы проектного управления»</a>.</em></strong>
                </p>
            </div>`,
        },
        {
          title: 'Каков срок действия и условия продления сертификата PME®?',
          content: `<div class="faq__accordion__item__content_all">
                <p>Срок действия сертификата на степень PME® составляет 4 года. Для продления статуса PME® соискателю необходимо документально подтвердить получение знаний в области проектного управления за прошедшие 4 года, соответствующие 24 условным баллам. Подробнее с условиями продления сертификата PME можно ознакомиться по <a href="https://pm.expert/events/certification/prodlenie-PME/" target="_blank">ссылке</a>.</p>
            </div>`,
        },
        {
          title:
            'Что вы получите по итогу прохождения сертификационного экзамена?',
          content: `<div class="faq__accordion__item__content_all">
                <p>Cертификат и значок можно бесплатно получить в офисе компании. В случае, если Вам необходима доставка почтой или курьерской службой, стоимость доставки оплачивается Вами отдельно. <a href="/local/templates/pme/img/sample_pme.jpg" target="_blank">Образец сертификата</a>. Независимо от результатов тестирования соискатель получает протокол. <a href="/local/templates/pme/img/protokol_test.pdf" target="_blank">Образец протокола</a>.</p>
            </div>`,
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.faq {
  margin: 30px 0;
  @include sm-down() {
    h3 {
      font-size: 20px;
    }
  }
}
.accordion {
  &--item {
    border-top: 1px solid #ebebef;
    border-bottom: 1px solid #ebebef;
  }
  &--icon {
    transition: transform 0.2s ease-in-out;
  }
  &--header {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: 30px;
    margin: 0;
    @include sm-down() {
      font-size: 20px;
      padding: 15px;
    }
    &__active {
      background: #f6f7fa;
      .accordion--icon {
        transform: rotateZ(-45deg);
      }
    }
    &:hover {
      background: #f6f7fa;
    }
  }

  &--content {
    opacity: 0;
    height: 0;
    overflow: hidden;
    transition: opacity 0.9s ease;
  }
}
.active {
  opacity: 1;
  height: auto;
  padding: 30px;
  @include sm-down() {
    padding: 15px;
  }
}
</style>
