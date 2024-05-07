<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Note extends Model
{
    use HasFactory;

    protected $fillable = [ 'cc1', 'cc2', 'cc3'];
    public function stagiaire()
{
    return $this->belongsTo(Stagiaire::class);
}

}
