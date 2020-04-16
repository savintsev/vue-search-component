<template>
    <div class="search">
        <form action="/" method="post" class="search__form" @submit.prevent="submitHandler">
            <div class="search__fields">
                <div class="search-main">
                    <div class="search-main__fields" :data-bytitle="isByTitle">
                        <div class="search-main__selects">
                            <select name="city" class="search-main__select" :disabled="isByTitle">
                                <option v-for="(cityValue, cityKey) in fields.cities" :key="cityKey" :value="cityKey" v-text="cityValue"></option>
                            </select>

                            <select name="realization" class="search-main__select" :disabled="isByTitle">
                                <option
                                    v-for="(realizationValue, realizationKey) in fields.realization"
                                    :key="realizationKey"
                                    :value="realizationKey"
                                    v-text="realizationValue"
                                ></option>
                            </select>

                            <select name="place" class="search-main__select" :disabled="isByTitle">
                                <option v-for="(placeValue, placeKey) in fields.place" :key="placeKey" :value="placeKey" v-text="placeValue"></option>
                            </select>
                        </div>

                        <div class="search-main__bytitle">
                            <input
                                type="text"
                                inputmode="search"
                                name="title"
                                placeholder="Введите название объекта (бизнес-центра, торгового центра, новостройки, логопарка)"
                                class="search-main__input"
                                required="required"
                                :disabled="!isByTitle"
                            />
                        </div>
                    </div>

                    <button type="submit" class="search-main__submit">Найти</button>
                </div>

                <div class="search-additional" v-if="!isByTitle && (isWithPrice || isWithMeter)">
                    <div class="search-additional__item search-additional__item--price">
                        <button type="button" class="search-additional__switcher" v-if="!isWithPrice" @click="isWithPrice = !isWithPrice">
                            Добавить цену
                        </button>

                        <template v-if="isWithPrice">
                            <input type="text" name="price_from" placeholder="От" class="search-additional__input search-additional__input--price" />

                            <input type="text" name="price_to" placeholder="До" class="search-additional__input search-additional__input--price" />

                            <select name="period" class="search-additional__select search-additional__select--price">
                                <option value="month">₽/месяц</option>
                                <option value="year">₽/год</option>
                            </select>
                        </template>
                    </div>

                    <div class="search-additional__item search-additional__item--meter">
                        <button type="button" class="search-additional__switcher" v-if="!isWithMeter" @click="isWithMeter = !isWithMeter">
                            Добавить метраж
                        </button>

                        <template v-if="isWithMeter">
                            <input
                                type="text"
                                inputmode="numeric"
                                name="meter_from"
                                placeholder="От"
                                class="search-additional__input search-additional__input--meter"
                            />
                            <input
                                type="text"
                                inputmode="numeric"
                                name="meter_to"
                                placeholder="До"
                                class="search-additional__input search-additional__input--meter"
                            />
                            <span class="search-additional__m2">м<sup>2</sup></span>
                        </template>
                    </div>
                </div>
            </div>

            <div class="search__controls">
                <div class="search-toggle">
                    <label for="search_type" class="search-toggle__label" :data-disabled="!isByTitle">Основной поиск</label>

                    <span class="search-toggle__toggle">
                        <input type="checkbox" name="search_type" id="search_type" v-model="isByTitle" />
                        <label for="search_type"></label>
                    </span>

                    <label for="search_type" class="search-toggle__label" :data-disabled="isByTitle">Искать по названию</label>
                </div>

                <div class="search-switchers" v-if="!isByTitle">
                    <button type="button" class="search-switchers__button" :data-on="isWithPrice" @click="isWithPrice = !isWithPrice">
                        <svg
                            class="search-switchers__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path d="M10 1a9 9 0 11-9 9 9 9 0 019-9z" fill="none" stroke="#4f6882" stroke-width="2" />
                            <path d="M14 11h-3v3a1 1 0 01-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 112 0v3h3a1 1 0 010 2z" fill="#506981" fill-rule="evenodd" />
                        </svg>
                        <span class="search-switchers__text">Цена</span>
                    </button>

                    <button type="button" class="search-switchers__button" :data-on="isWithMeter" @click="isWithMeter = !isWithMeter">
                        <svg
                            class="search-switchers__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path d="M10 1a9 9 0 11-9 9 9 9 0 019-9z" fill="none" stroke="#4f6882" stroke-width="2" />
                            <path d="M14 11h-3v3a1 1 0 01-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 112 0v3h3a1 1 0 010 2z" fill="#506981" fill-rule="evenodd" />
                        </svg>
                        <span class="search-switchers__text">Метраж</span>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Search',

    data() {
        return {
            isByTitle: false,

            isWithPrice: false,

            isWithMeter: false,

            fields: {
                cities: {
                    moscow: 'Москва',
                    spb: 'Санкт-Петербург',
                    abakan: 'Абакан',
                    anapa: 'Анапа',
                    arh: 'Архангельск',
                    astr: 'Астрахань'
                },

                realization: {
                    buy: 'Купить',
                    rent: 'Арендовать'
                },

                place: {
                    office: 'Офис',
                    mall: 'Торговый центр'
                }
            }
        };
    },

    methods: {
        submitHandler(e) {
            const formData = new FormData(e.target);

            const result = {};

            formData.forEach((value, key) => {
                result[key] = value;
            });

            console.log({result});
        }
    }
};
</script>

<style lang="scss">
.search {
    width: 940px;
    margin: 0;
    padding: 0;
    background: #82b3e5;
    background: linear-gradient(90deg, #82b3e5 0%, #a8d5e9 100%);

    &__fields {
        margin: 0;
        padding: 36px 20px;
    }

    &__controls {
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 10px 20px;
        background: #e6f2fe;
    }

    &-main {
        overflow: hidden;
        display: flex;
        height: 44px;
        margin: 0;

        &__fields {
            transform: translateY(0);
            transition: transform 0.3s ease;
            flex-grow: 1;
            margin: 0;

            &[data-bytitle] {
                transform: translateY(-100%);
            }
        }

        &__selects {
            display: flex;
            margin: 0;
        }

        &__select {
            appearance: none;
            width: calc(100% / 3);
            height: 44px;
            margin: 0;
            padding: 0 40px 0 20px;
            border: 0;
            border-radius: 0;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath fill-rule='evenodd' fill='%2363758C' d='M0 0l5 6 5-6H0z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-size: 10px 6px;
            background-position: top 20px right 20px;
            font-size: 18px;

            &::-ms-expand {
                display: none;
            }

            &:focus:not(:hover) {
                box-shadow: inset 0 0 0 1px #82b3e5;
            }

            &:first-child {
                border-radius: 4px 0 0 4px;
            }

            &:not(:first-child) {
                margin-left: 1px;
            }
        }

        &__bytitle {
            margin: 0;
        }

        &__input {
            width: 100%;
            height: 44px;
            margin: 0;
            padding: 0 20px;
            border: 0;
            border-radius: 4px 0 0 4px;
        }

        &__submit {
            min-width: 130px;
            margin: 0;
            padding: 10px 30px;
            border-radius: 0 4px 4px 0;
            outline: 0;
            font-size: 20px;
            background: #5e9969;
            color: #fff;

            &:focus:not(:hover) {
                background: #2ba599;
            }
        }
    }

    &-additional {
        display: flex;
        justify-content: space-between;
        margin: 28px 0 0;

        &__item {
            display: flex;
            margin: 0;

            &--price {
                width: 550px;
            }

            &--meter {
                width: 330px;
            }
        }

        &__switcher {
            width: 100%;
            height: 44px;
            margin: 0;
            padding: 0;
            border: 1px solid #506981;
            border-radius: 4px;
            font-size: 18px;
            color: #506981;

            &:focus:not(:hover) {
                border-width: 2px;
            }
        }

        &__input {
            height: 44px;
            margin: 0;
            padding: 0 20px;
            border: 0;
            border-radius: 0;
            font-size: 18px;
            background: #e6f2fe;

            &:focus:not(:hover) {
                box-shadow: inset 0 0 0 1px #82b3e5;
            }

            &:first-child {
                border-radius: 4px 0 0 4px;
            }

            &:not(:first-child) {
                margin-left: 1px;
            }

            &--price {
                width: calc(100% / 3);
            }

            &--meter {
                width: calc((100% - 54px) / 2);
            }
        }

        &__select {
            appearance: none;
            height: 44px;
            margin: 0;
            padding: 0 40px 0 20px;
            border: 0;
            border-radius: 0;
            background-color: #e6f2fe;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath fill-rule='evenodd' fill='%2363758C' d='M0 0l5 6 5-6H0z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-size: 10px 6px;
            background-position: top 20px right 20px;
            font-size: 18px;

            &::-ms-expand {
                display: none;
            }

            &:focus:not(:hover) {
                box-shadow: inset 0 0 0 1px #82b3e5;
            }

            &:not(:first-child) {
                margin-left: 1px;
            }

            &:last-child {
                border-radius: 0 4px 4px 0;
            }

            &--price {
                width: calc(100% / 3);
            }
        }

        &__m2 {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 54px;
            height: 44px;
            border-radius: 0 4px 4px 0;
            background: #c2e3f2;
        }
    }

    &-toggle {
        --toggle-width: 40px;
        --toggle-height: 22px;
        --toggle-space: 2px;
        --toggle-dot: calc(var(--toggle-height, 22px) - var(--toggle-space, 2px) * 2);

        margin: 0;

        &__toggle {
            position: relative;
            display: inline-block;
            width: var(--toggle-width, 40px);
            height: var(--toggle-height, 22px);
            border-radius: var(--toggle-height, 22px);
            background: #5e9969;
            vertical-align: middle;
            margin: 0 14px;

            & > input {
                appearance: none;
                position: absolute;
                opacity: 0;
                width: 100%;
                height: 100%;

                &:checked {
                    & + label {
                        background: #5e9969;

                        &::before {
                            width: 60%;
                            left: 20%;
                            top: 30%;
                            height: 40%;
                            opacity: 0;
                        }

                        &::after {
                            right: var(--toggle-space, 2px);
                            left: calc(var(--toggle-width, 40px) - var(--toggle-dot, 18px) - var(--toggle-space, 2px));
                        }
                    }
                }

                &:focus:not(:hover) {
                    & + label {
                        &::after {
                            transform: scale(1.2);
                        }
                    }
                }
            }

            & > label {
                display: block;
                width: 100%;
                height: 100%;
                border-radius: var(--toggle-height, 22px);
                transition: background 0.125s ease;

                &::before,
                &::after {
                    content: '';
                    position: absolute;
                    top: var(--toggle-space, 2px);
                    left: var(--toggle-space, 2px);
                    height: var(--toggle-dot, 18px);
                    border-radius: inherit;
                    transition: all 0.2s ease;
                }

                &::before {
                    width: calc(100% - var(--toggle-space, 2px) * 2);
                    background: #5e9969;
                }

                &::after {
                    right: calc(var(--toggle-width, 40px) - var(--toggle-dot, 18px) - var(--toggle-space, 2px));
                    box-shadow: 0px 3px 3px 0px rgba(0, 1, 1, 0.3);
                    background: #fff;
                }
            }
        }

        &__label {
            color: #506981;
            border-bottom: 1px dashed;
            cursor: pointer;

            &[data-disabled] {
                pointer-events: none;
                border-bottom-color: transparent;
                color: #adb9c4;
            }
        }
    }

    &-switchers {
        display: flex;
        margin: 0;

        &__button {
            display: flex;
            align-items: center;
            margin: 0 0 0 20px;
            color: #506981;

            &:focus:not(:hover) {
                & > svg {
                    transform: rotate(15deg);
                }
            }

            &[data-on] {
                color: #88949f;

                & > svg {
                    transform: rotate(45deg);
                }
            }
        }

        &__icon {
            transition: transform 0.3s ease;
            width: 18px;
            height: 18px;
            margin: 0 10px 0 0;
        }

        &__text {
            margin: 0;
        }
    }
}
</style>
