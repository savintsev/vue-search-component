<template>
    <div class="search">
        <form action="/" method="post">
            <div class="search__fields">
                <div class="search-main">
                    <div>
                        <select name="city">
                            <option v-for="(cityValue, cityKey) in cities" :key="cityKey" v-text="cityValue"></option>
                        </select>
                        <select></select>
                        <select></select>
                    </div>

                    <div>
                        <input type="text" />
                    </div>

                    <button type="submit">Найти</button>
                </div>
                <div class="search-additional">
                    <div>
                        <input type="text" />
                        <input type="text" />
                        <select></select>
                    </div>

                    <div>
                        <input />
                        <input />
                        <span>м<sup>2</sup></span>
                    </div>
                </div>
            </div>
            <div class="search__controls">
                <div class="search-toggle">
                    <span class="ios-toggle ios-toggle-reverse">
                        <input type="checkbox" name="include-forks" id="include-forks" />
                        <label for="include-forks"></label>
                    </span>

                    <label for="include-forks"><span>Include forks</span></label>
                </div>

                <div class="search-switchers">
                    <button type="button">Цена</button>
                    <button type="button">Метраж</button>
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
            cities: {
                moscow: 'Москва',
                spb: 'Санкт-Петербург',
                abakan: 'Абакан',
                anapa: 'Анапа',
                arh: 'Архангельск',
                astr: 'Астрахань'
            }
        };
    }
};
</script>

<style lang="scss">
.search {
    width: 100%;
    height: 200px;
    max-width: 940px;
    margin: 0;
    background: rgb(130, 179, 229);
    background: linear-gradient(90deg, rgba(130, 179, 229, 1) 0%, rgba(168, 213, 233, 1) 100%);

    &__controls {
        background: #e6f2fe;
    }
}
</style>
