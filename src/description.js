/*-------------Не Трогать!-----------------*/
import GRAF from "./assets/GRAF.webp";
import DIAMOND from "./logo/DIAMOND.webp";
import BARON from "./assets/BARON.webp";
import GOLD from "./logo/GOLD.webp";
import LEG from "./assets/LEG.webp";
import IRON from "./logo/IRON.webp";
import GER from "./assets/GER.webp";
import EMERALD from "./logo/EMERALD.webp";
import Pic5 from "./assets/pic5.webp";
/*-----------------------------------------*/
/*
title - заголовок/название
titleColor - цвет заголовка/названия
subtitle - подзаголовок (обычно не используется)
description - текстр краткого описания
fullDesc - текст подробного описания
price - цена
image - фон
picture - картинка

Картинки и фоны редачить я буду, а ты пошел нахуй
 */
export const products = {
    Classic: {
        privilege:[
            {
        title: "Герцог",
        titleColor: "limegreen",
        description: `Направьте ваш народ на путь истинный
                      ваш долг - отдать себя на благо государства...`,
        perks:
            `Префикс в табе и чате Duke
Все питомцы + все действия с питомцами
8 точек дома
10 приватов
4 собственных варпа
Флаг для привата time-lock weather-lock
Все крылья
Сохранение инвентаря при смерти`,
        commands:
            `/nick Изменить ник
/kit duke Уникальный игровой набор
head [ник] Позволяет брать голову игрока
/grindstone Открывает точило (починка и снятие чар)
/loom Открывает ткацкий станок
/smithingtable Открывает стол кузнеца
/stonecutter Открывает камнерез
Так же наследует Legionary, Baron, Graph`,
        pets: `визер
шалкер
гаст
фантом
овца
лавомерка
эфрит
evoker
тропическая рыба
лама
житель деревни
зомби житель
пчела`,
        price: 493,
        image: GER,
        picture: EMERALD
    },
            {
        title: "Граф",
        titleColor: "lightseagreen",
        description: `Да будет так, ваше сиятельство,
                      мы признаны вашему роду...`,
        perks:
            `Префикс в табе и чате Граф
Питомцы третьего уровня
6 точек дома
8 приватов
3 собственных варпа
Флаг для привата farewell-title greeting-title 
Флаг для привата greeting farewell
Использовать инвентарь питомца
Божественные крылья
Сохранение опыта при смерти`,
        commands:
            `Команды
        /back Вернуть на точку смерти
/kit graph Уникальный игровой набор
/echest Открыть эндерсундук
/hat Надеть блок на голову
/firework Кастомизирует фейерверк
/cartographytable Открыть стол картографа
Так же наследует Legionary, Baron`,
        pets:
            `иглобрюх
панда
слайм
мул
рыба`,
        price: 385,
        image: GRAF,
        picture: EMERALD
    },
            {
                title: "Барон",
                titleColor: "gold",
                description: `Вам не ново бывать в кругах знати
                             вы должны быть примером для общины...`,
                perks:
                    `Префикс в табе и чате Барон
Пито        мцы второго уровня
4 то        чки дома
6 пр        иватов
2 со        бственных варпа
Флаг         для приватов fall-damage
Наде        вать пета на голову
Испо        льзовать цветной текст в чате
Анге        льские крылья`,
                commands:
                    `/heal Лечение (раз в 60 сек)
/anv        il Открыть наковальню
/kit         baron Уникальный игровой набор
/dep        th Узнать количество блоков над уровнем моря
/egl        ow Подсветка
Насл        едует возможности Legionary`,

                pets:
                    `полярный медведь
хогл        ин
волк        
зомб        и лошедь
агре        ссивный паук`,
                price: 249,
                image: BARON,
                picture: DIAMOND
            },
            {
                title: "Легионер",
                titleColor: "silver",
                description: `Имя, которое не просто звучит
                             они увидят... ваше превосходство...`,
                perks:
                    `Префикс в табе и чате Легионер
Пито        мцы первого уровня
2 то        чки дома
4 пр        ивата
Собс        твенный варп
Флаг         для приватов mob-spawning
Сади        ться на пета
Крыл        ья холода`,
                commands:
                    `
                /feed Пополнение полоски голода
/rep        air Починка экипировки
/kil        l Харакири (убить себя)
/kit         legionary Уникальный игровой набор
/cra        ft Открыть верстак
/cle        ar Очистка инвентаря
/cle        arinventoryconfirmtoggle вкл подтверждение очистки
/co         i Инфо о действии игрока над блоком
/che        stsort Автоматическая сортировка сундука
                `,
                pets:
                    `Лошадь
крол        ик
коро        ва
дель        фин
паук        
чере        паха
голе        м
свин        `,
                price: 119,
                image: LEG,
                picture: GOLD
            },
            {
        title: "Маркиз",
        titleColor: "green",
        description: `Разбанит вас за небольшую плату`,
        price: 40,
        image: Pic5,
        picture: IRON
    }],
        goods:[
            {
        title: "Мать админа",
        titleColor: "green",
        description: `Разбанит вас за небольшую плату`,
        price: 0,
        image: Pic5,
        picture: IRON
            }
            ]
    },
    Creative: {
        privilege:[
            {
                title: "Мать админа Креатива",
                titleColor: "green",
                description: `Разбанит вас за небольшую плату`,
                price: 461,
                image: Pic5,
                picture: IRON
            },
            {
                title: "Мать админа Креатива",
                titleColor: "green",
                description: `Разбанит вас за небольшую плату`,
                price: 985652,
                image: Pic5,
                picture: IRON
            },
            {
                title: "Мать админа Креатива",
                titleColor: "green",
                description: `Разбанит вас за небольшую плату`,
                price: 0,
                image: Pic5,
                picture: IRON
            },
            {
                title: "Мать админа Креатива",
                titleColor: "green",
                description: `Разбанит вас за небольшую плату`,
                price: 0,
                image: Pic5,
                picture: IRON
            },
        ],
        goods:[
            {
                title: "Мать Баракана",
                titleColor: "green",
                description: `Разбанит вас за небольшую плату`,
                price: 56456,
                image: Pic5,
                picture: IRON
            },
            {
                title: "Мать Виктора шлюха",
                titleColor: "green",
                description: `Разбанит вас за небольшую плату`,
                price: 12321,
                image: Pic5,
                picture: GOLD
            },
        ]
    },
    Anarchy: {
        privilege:[
            {
                title: "Мать админа Анархии",
                titleColor: "green",
                description: `Разбанит вас за небольшую плату`,
                price: 0,
                image: Pic5,
                picture: EMERALD
            },
            {
                title: "Мать админа Анархии",
                titleColor: "green",
                description: `Разбанит вас за небольшую плату`,
                price: 21316,
                image: Pic5,
                picture: GOLD
            },
            {
                title: "Мать админа Анархии",
                titleColor: "green",
                description: `Разбанит вас за небольшую плату`,
                price: 0,
                image: Pic5,
                picture: IRON
            },
            {
                title: "Мать админа Анархии",
                titleColor: "green",
                description: `Разбанит вас за небольшую плату`,
                price: 0,
                image: Pic5,
                picture: DIAMOND
            },
            {
                title: "Мать админа Анархии",
                titleColor: "green",
                description: `Разбанит вас за небольшую плату`,
                price: 0,
                image: Pic5,
                picture: IRON
            }
            ],
        goods:[
            {
                title: "Мать админа",
                titleColor: "green",
                description: `Разбанит вас за небольшую плату`,
                price: 0,
                image: Pic5,
                picture: IRON
            }
        ]
    }
}
