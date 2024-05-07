<?php

namespace App\Http\Controllers;
use App\Models\Formateur;

use Illuminate\Http\Request;

class Formateur1 extends Controller
{
   public function showEmploi($id)
{
    // Récupérer le formateur
    $formateur = Formateur::findOrFail($id);

    // Retourner la vue avec les données du formateur
    return view('A/formateurs/emploi', compact('formateur'));
}
public function profile($id)
{
    // Récupérer tous les formateurs
    $formateurs = Formateur::find($id);

    // Retourner la vue avec les données des formateurs
    return view('A/profile')->with('formateurs',$formateurs );
}


}
