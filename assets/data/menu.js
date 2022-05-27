export default [
  {
    title: 'menu.about_company',
    i18n: 'menu.about_company',
    url: '/page/1',
    children: [
      {
        title: 'Миссия',
        url: '/page/16',
        i18n: 'menu.mission',
      },
      {
        title: 'Опыт',
        url: '/experience',
        i18n: 'menu.experience',
      },
      {
        title: 'История',
        url: '/page/18',
        i18n: 'menu.history',
      },
      {
        title: 'Только факты',
        url: '/page/19',
        i18n: 'menu.facts',
      },
      {
        title: 'Проведённые курсы',
        url: '/last-courses',
        i18n: 'menu.finished_courses',
      },
      {
        title: 'Тренеры',
        url: '/members',
        i18n: 'menu.trainers',
      },
    ],
  },
  {
    title: 'Обучение',
    url: '/courses',
    i18n: 'menu.education',
    children: [
      {
        title: 'Основы управления проектами',
        url: '/courses-category/4',
        i18n: 'menu.basis_project_management',
      },
      {
        title: 'Дистанционные курсы по управлению проектами',
        url: '/courses-category/3',
        i18n: 'menu.distance_courses',
      },
      {
        title: 'Симуляционные деловые игры',
        url: '/courses-category/5',
        i18n: 'menu.simulation_games',
      },
      {
        title: 'Программы на заказ',
        url: '/courses-category/6',
        i18n: 'menu.program_order',
      },
    ],
  },
  {
    title: 'Другие услуги',
    url: '/services',
    i18n: 'menu.other_services',
    children: [
      {
        title: 'Консалтинг',
        url: '/service/24',
        i18n: 'menu.consulting',
      },
      {
        title: 'Аутсорсинг',
        i18n: 'menu.outsourcing',
        url: '/service/25',
      },
    ],
  },
]
