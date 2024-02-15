<?php

namespace App\Providers;

use App\Models\User;
use App\Models\Role;
use Illuminate\Support\ServiceProvider;
use Spatie\Activitylog\Models\Activity;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Eloquent\Relations\Relation;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // enforce morph map
        Relation::enforceMorphMap([
            'user'       => User::class,
            'role'       => Role::class,
            'permission' => Permission::class,
            'activity'   => Activity::class,
        ]);
    }
}
