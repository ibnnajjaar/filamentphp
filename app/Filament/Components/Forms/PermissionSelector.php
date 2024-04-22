<?php

namespace App\Filament\Components\Forms;

use Closure;
use Filament\Forms\Components\Field;
use Illuminate\Contracts\Support\Arrayable;
use Filament\Forms\Components\Concerns\HasExtraInputAttributes;

class PermissionSelector extends Field
{
    use HasExtraInputAttributes;

    protected string $view = 'filament.components.forms.permission-selector';

    protected array | Arrayable | string | Closure | null $options = null;

    public function options(array | Arrayable | string | Closure | null $options): static
    {
        $this->options = $options;
        return $this;
    }

    public function getOptions(): array
    {
        $options = $this->evaluate($this->options) ?? [];
        if ($options instanceof Arrayable) {
            $options = $options->toArray();
        }

        return $options;
    }
}
