{* Шаблон для фильтра с типом - список изображений *}
{$is_open = $filters[$prop.id] || $prop.is_expanded}
<div class="accordion-item rs-type-multiselect">
    <div class="accordion-header">
        <button class="accordion-button {if !$is_open}collapsed{/if}" type="button" data-bs-toggle="collapse"
                data-bs-target="#accordionFilter-{$prop.id}">
            <span class="me-2">{$prop.title} {if $prop.unit}({$prop.unit}){/if}</span>
        </button>
        <a class="filter-clear rs-clear-one-filter"><img src="{$THEME_IMG}/icons/close.svg" alt="" width="16"></a>
    </div>
    <div id="accordionFilter-{$prop.id}" class="accordion-collapse collapse {if $is_open}show{/if}">
        <div class="accordion-body">
            <ul class="filter-line">
                {foreach $prop->getAllowedValuesObjects() as $key => $item_value}
                    <li class="{if isset($filters_allowed_sorted[$prop.id][$key]) && ($filters_allowed_sorted[$prop.id][$key] == false)}disabled-property{/if}">
                        <div class="radio-image">
                            <input type="checkbox" {if is_array($filters[$prop.id]) && in_array($key, $filters[$prop.id])}checked{/if} name="pf[{$prop.id}][]" value="{$key}" class="radio" id="cb_{$prop.id}_{$item_value@iteration}">
                            <label for="cb_{$prop.id}_{$item_value@iteration}" title="{$item_value.value}">
                                {if $item_value.image}
                                    <img src="{$item_value.__image->getUrl(30, 30, 'cxy')}" alt="">
                                {/if}
                            </label>
                        </div>
                    </li>
                {/foreach}
            </ul>
        </div>
    </div>
</div>