<?php

namespace App\Filament\Pages;

use App\Settings\SiteSettings;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Pages\SettingsPage;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;

class ManageSite extends SettingsPage
{
    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';

    protected static string $settings = SiteSettings::class;
    protected static ?string $navigationGroup = 'Site Management';
    protected static ?int $navigationSort = 550;

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make()
                       ->schema([
                           TextInput::make('site_name')
                                    ->label('Site Name')
                                    ->inlineLabel()
                                    ->required(),
                       ])->columns(1),
            ]);
    }
}
