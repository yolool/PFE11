<?php

namespace App\Models;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stagiaire extends Model
{
    use HasFactory,HasApiTokens;
    public function notes()
    {
        return $this->hasOne(Note::class);
    }
    public function absences()
        {
            return $this->hasMany(Absence::class);
        }
    protected $fillable = [
        'name', 'lastname', 'cef', 'num_inscription', 'date_naissance','groupe','date_inscription', 'image'
    ];
    public function disciplines()
    {
        return $this->hasMany(Discipline::class);
    }

}
