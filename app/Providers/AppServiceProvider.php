<?php

namespace App\Providers;

use Filament\Support\Assets\Js;
use Illuminate\Support\ServiceProvider;
use Filament\Support\Facades\FilamentAsset;
use Filament\Support\Assets\AlpineComponent;

class AppServiceProvider extends ServiceProvider
{

    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        $js_path = __DIR__ . '/../../resources/js/dist/components/permissions-selector.js';
        FilamentAsset::register([
            AlpineComponent::make('permissions-selector', $js_path),
        ]);
    }
}
