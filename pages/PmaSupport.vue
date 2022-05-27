<template>
  <div class="content">
    <div class="page_title_wrap">
      <h1 id="pagetitle">PM SUPPORT - Карта сервисов</h1>
    </div>

    <div class="service__header">Сервисы</div>
    <div class="service__links">
      <a href="/service-map/pm-check-up/" class="service__btn">PM CHECK UP</a>
      <a href="/service-map/pm-support/" class="service__btn">PM SUPPORT</a>
      <a href="/service-map/pma/" class="service__btn">PMA</a>
      <a href="/service-map/pmc/" class="service__btn">PMС</a>
    </div>
    <div class="service__banner">
      <img
        :src="require('@/assets/local/templates/main/maps/img/pm-banner2.png')"
        alt=""
      />
    </div>
    <div class="service__description">
      <div class="service__description-block">
        <div class="service__description-subheader">Состав</div>
        <ul class="service__description-list">
          <li>Планирование</li>
          <li>Мониторинг и аналитика</li>
          <li>Разработка методологии</li>
          <li>Сопровождение управления рисками и изменениями</li>
          <li>Администрирование проекта</li>
        </ul>
        <hr class="grey-line" />
        <div class="service__description-info">
          <p><b>*</b>УП - управление проектами</p>
          <p><b>*</b>КСМ - календарно-сетевая модель</p>
        </div>
        <br />
      </div>
      <div class="service__description-block">
        <div class="service__description-subheader">Результат</div>
        <ul class="service__description-list service__description-numlist">
          <li>Актуальная КСМ*</li>
          <li>Независимая отчетность и прогноз</li>
          <li>Карта рисков и реестр изменений</li>
          <li>Документированные процессы по УП*</li>
        </ul>
        <div class="like-flex">
          <div class="service__description-subheader">Подход</div>
          <hr class="grey-line" />
        </div>
        <div class="service__description-about">
          <div class="service__description-about-item">
            <img
              :src="
                require('@/assets/local/templates/main/maps/img/about1.png')
              "
              alt=""
            />
            <p>Сертифицированная команда с опытом более 15 лет в УП</p>
          </div>
          <div class="service__description-about-item">
            <img
              :src="
                require('@/assets/local/templates/main/maps/img/about4.png')
              "
              alt=""
            />
            <p>Резерв 700+ специалистов УП</p>
          </div>
          <div class="service__description-about-item">
            <img
              :src="
                require('@/assets/local/templates/main/maps/img/about5.png')
              "
              alt=""
            />
            <p>Собственный пакет ПО для контроля и аналитики проекта</p>
          </div>
          <div class="service__description-about-item">
            <img
              :src="
                require('@/assets/local/templates/main/maps/img/about6.png')
              "
              alt=""
            />
            <p>Собственная база знаний и технологические регламенты</p>
          </div>
          <div class="service__description-about-item">
            <img
              :src="
                require('@/assets/local/templates/main/maps/img/about7.png')
              "
              alt=""
            />
            <p>Работа в команде Заказчика</p>
          </div>
        </div>
        <br />
      </div>
      <div class="service__description-block">
        <div class="service__description-subheader">Опыт</div>
        <div class="service__description-exp">
          <div class="exp-row">
            <div class="exp-row-img">
              <img
                :src="
                  require('@/assets/local/templates/main/maps/img/exp5.png')
                "
                alt=""
              />
              <span>Металлургия</span>
            </div>
            <div class="exp-row-img">
              <img
                :src="
                  require('@/assets/local/templates/main/maps/img/logo5.png')
                "
                alt=""
              />
              <span class="large">&gt; ₽ 300 млрд</span>
            </div>
          </div>
          <div class="exp-row">
            <div class="exp-row-img">
              <img
                :src="
                  require('@/assets/local/templates/main/maps/img/exp1.png')
                "
                alt=""
              />
              <span>Нефтегаз</span>
            </div>
            <div class="exp-row-img">
              <img
                :src="
                  require('@/assets/local/templates/main/maps/img/logo6.png')
                "
                alt=""
              />
              <span class="large">&gt; ₽ 200 млрд</span>
            </div>
          </div>
          <div class="exp-row">
            <div class="exp-row-img">
              <img
                :src="
                  require('@/assets/local/templates/main/maps/img/exp2.png')
                "
                alt=""
              />
              <span>Энергетика</span>
            </div>
            <div class="exp-row-img">
              <img
                :src="
                  require('@/assets/local/templates/main/maps/img/logo7.png')
                "
                alt=""
              />
              <span class="large">&gt; ₽ 30 млрд</span>
            </div>
          </div>
          <div class="exp-row">
            <div class="exp-row-img">
              <img
                :src="
                  require('@/assets/local/templates/main/maps/img/exp6.png')
                "
                alt=""
              />
              <span>Горное дело</span>
            </div>
            <div class="exp-row-img">
              <img
                :src="
                  require('@/assets/local/templates/main/maps/img/logo8.png')
                "
                alt=""
              />
              <span class="large">&gt; ₽ 100 млн</span>
            </div>
          </div>
          <div class="exp-row">
            <div class="exp-row-img">
              <img
                :src="
                  require('@/assets/local/templates/main/maps/img/exp7.png')
                "
                alt=""
              />
              <span>Строительство</span>
            </div>
            <div class="exp-row-img">
              <img
                :src="
                  require('@/assets/local/templates/main/maps/img/logo9.png')
                "
                alt=""
              />
              <span class="large">&gt; ₽ 30 млн</span>
            </div>
          </div>
          <p class="large">Более 10 отраслей промышленности</p>
        </div>
        <style>
          .service__description-exp .exp-row {
            padding: 6px 0;
          }
        </style>
      </div>
    </div>
    <nuxt-link to="/contacts" class="btn-order" target="_blank"
      >Заказать сервис</nuxt-link
    >
    <style>
      .service__btn:nth-child(2) {
        color: #fff;
        background: #e71717;
        border-color: #e71717;
      }
    </style>
  </div>
</template>
<script>
export default {
  layout: 'detail',
  data() {
    return {
      sidebarItems: [
        {
          title: 'PM Excellence',
          url: '/pmc/33',
          i18n: 'menu.pmc_excellence',
        },
        {
          title: 'Что такое PMC',
          url: '/pmc/34',
          i18n: 'menu.what_is_pmc',
        },
      ],
      id: '',
      item: {
        title: '',
        img: '',
        mini_desc: '',
        content: '',
      },
    }
  },
}
</script>
