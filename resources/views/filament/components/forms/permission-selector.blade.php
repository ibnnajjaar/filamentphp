<x-dynamic-component
    :component="$getFieldWrapperView()"
    :field="$field"
>
    <div x-data="{
            state: $wire.$entangle('{{ $getStatePath() }}'),
            search_models: '',

            onCheck(permission_id) {
                // Check if the permission is already in the state
                const index = this.state.indexOf(permission_id);

                // If the permission is not in the state, add it
                if (index === -1) {
                    this.state.push(permission_id);
                } else {
                    // If the permission is in the state, remove it
                    this.state.splice(index, 1);
                }
            },

            searchByModels() {
                console.log(this.search_models);
            }
        }"

        x-init="
            state = []
        "
         class="mt-4"
    >
        <div class="border-b border-gray-200 pb-6">
            <div class="grid grid-flow-col grid-cols-2 gap-4">
                <div class="col-span-1">
                    <label class="flex fi-fo-field-wrp-label items-center gap-x-3 mb-2" for="data.description">
                    <span class="text-sm font-medium leading-6 text-gray-950 dark:text-white">
                        Search by Models
                    </span>
                    </label>
                    <input class="flex w-full px-3 pt-1.5 pb-2 rounded-lg border text-sm border-gray-200"
                           id="permissions-model"
                           maxlength="255"
                           type="text"
                           x-model="search_models"
                           @keyup="searchByModels()"
                    />
                </div>
                <div class="col-span-1">
                    <label class="flex fi-fo-field-wrp-label items-center gap-x-3 mb-2" for="data.description">
                    <span class="text-sm font-medium leading-6 text-gray-950 dark:text-white">
                        Search by Permissions
                    </span>
                    </label>
                    <input class="flex w-full px-3 pt-1.5 pb-2 rounded-lg text-sm border border-gray-200"
                           id="permissions-model"
                           maxlength="255"
                           type="text"
                    />
                </div>
            </div>
            <div class="text-sm text-gray-800 font-medium mt-4">
                <div>Deselect all permissions</div>
{{--                <div>Select all permissions</div>--}}
            </div>
        </div>
        @foreach ($getOptions() as $model => $permissions)
            <div class="mt-4">
                <div class="text-sm font-medium leading-6 text-gray-800 dark:text-white mb-2">{{ str($model)->title()->toString() }}</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    @foreach ($permissions as $permission)
                        <label
                            :key="permissions.{{ $permission['id'] }}.id"
                            class="fi-fo-checkbox-list-option-label flex gap-x-3 items-center"
                        >
                        <x-filament::input.checkbox
                            :valid="! $errors->has($statePath)"
                            @change="onCheck({{ $permission['id'] }})"
                        />
                            <span
                                class="fi-fo-checkbox-list-option-label text-sm font-medium text-gray-950 dark:text-white"
                            >
                                {{ str($permission['name'])->title()->toString() }}
                            </span>
                        </label>
                    @endforeach
                </div>
            </div>
        @endforeach
    </div>
</x-dynamic-component>
