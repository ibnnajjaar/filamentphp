<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class SiteSettings extends Settings
{

    public string $site_name;

    public static function group(): string
    {
        return 'site';
    }
}
