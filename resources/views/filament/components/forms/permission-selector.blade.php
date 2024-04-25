@php
//    $defaultState = '$wire.' . $applyStateBindingModifiers("\$entangle('{$statePath}')");
@endphp

<x-dynamic-component
    :component="$getFieldWrapperView()"
    :field="$field"
>
    <div
        x-ignore
        ax-load
        ax-load-src="{{ \Filament\Support\Facades\FilamentAsset::getAlpineComponentSrc('permissions-selector') }}"
        x-data='permissionsSelector({
            state: $wire.$entangle("{{ $getStatePath() }}"),
            modelPermissions: @json($getOptions()),
            selectedModelPermissions: @json($getSelectedOptions()),
        })'
    >
        <div class="border-b border-gray-200 pb-6">
            <div class="grid grid-cols-2 gap-4">
                <div class="col-span-1">
                    <label class="" for="data.description">
                <span class="text-sm font-medium leading-6 text-gray-950 dark:text-white">
                    Search by Models
                </span>
                    </label>
                    <input class="flex w-full px-3 pt-1.5 pb-2 rounded-lg border text-sm border-gray-200"
                           maxlength="255"
                           type="text"
                           x-model="searchByModels"
                           @keyup.prevent="searchModels"
                    />
                </div>
                <div class="col-span-1">
                    <label class="" for="data.description">
                <span class="text-sm font-medium leading-6 text-gray-950 dark:text-white">
                    Search by Permissions
                </span>
                    </label>
                    <input class="flex w-full px-3 pt-1.5 pb-2 rounded-lg border text-sm border-gray-200"
                           maxlength="255"
                           type="text"
                           x-model="searchByPermissions"
                           @keyup.prevent="searchPermissions"
                    />
                </div>
            </div>
        </div>
        <div class="flex flex-col space-y-4">
            <template x-for="(modelPermission, index) in displayedModels" :key="index">
                <div class="mt-4">
                    <div class="text-sm font-medium leading-6 text-gray-800 dark:text-white mb-2" x-text="modelPermission.model"></div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <template x-for="permission in modelPermission.permissions">
                            <label class="fi-fo-checkbox-list-option-label flex gap-x-3 items-center">
                                <x-filament::input.checkbox
                                    :valid="! $errors->has($statePath)"
                                    x-bind:checked="isChecked(permission.id)"
                                    @change="updatePermission(permission.id)"
                                />
                                <span class="fi-fo-checkbox-list-option-label text-sm font-medium text-gray-950 dark:text-white"
                                      x-text="permission.name"></span>
                            </label>
                        </template>
                        <template x-if="modelPermission.permissions.length === 0">
                            <div class="text-gray-500">Couldn't find any permissions matching your search.</div>
                        </template>
                    </div>
                </div>
            </template>
            <template x-if="displayedModels.length === 0">
                <div class="text-gray-500">Couldn't find any model permissions matching your search.</div>
            </template>
        </div>
    </div>
</x-dynamic-component>



{{--        <div class="border-b border-gray-200 pb-6">--}}
{{--            <div class="grid grid-flow-col grid-cols-2 gap-4">--}}
{{--                <div class="col-span-1">--}}
{{--                    <label class="flex fi-fo-field-wrp-label items-center gap-x-3 mb-2" for="data.description">--}}
{{--                    <span class="text-sm font-medium leading-6 text-gray-950 dark:text-white">--}}
{{--                        Search by Models--}}
{{--                    </span>--}}
{{--                    </label>--}}
{{--                    <input class="flex w-full px-3 pt-1.5 pb-2 rounded-lg border text-sm border-gray-200"--}}
{{--                           id="permissions-model"--}}
{{--                           maxlength="255"--}}
{{--                           type="text"--}}
{{--                           x-model="search_models"--}}
{{--                           @keyup="searchByModels()"--}}
{{--                    />--}}
{{--                </div>--}}
{{--                <div class="col-span-1">--}}
{{--                    <label class="flex fi-fo-field-wrp-label items-center gap-x-3 mb-2" for="data.description">--}}
{{--                    <span class="text-sm font-medium leading-6 text-gray-950 dark:text-white">--}}
{{--                        Search by Permissions--}}
{{--                    </span>--}}
{{--                    </label>--}}
{{--                    <input class="flex w-full px-3 pt-1.5 pb-2 rounded-lg text-sm border border-gray-200"--}}
{{--                           id="permissions-model"--}}
{{--                           maxlength="255"--}}
{{--                           type="text"--}}
{{--                    />--}}
{{--                </div>--}}
{{--            </div>--}}
{{--            <div class="text-sm text-gray-800 font-medium mt-4">--}}
{{--                <div>Deselect all permissions</div>--}}
{{--                <div>Select all permissions</div>--}}
{{--            </div>--}}
{{--        </div>--}}
