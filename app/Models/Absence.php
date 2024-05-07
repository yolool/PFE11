<?php



namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Absence extends Model
{
    protected $fillable = ['stagiaire_id', 'date_absence'];

    public function stagiaire()
    {
        return $this->belongsTo(Stagiaire::class);
    }
}
