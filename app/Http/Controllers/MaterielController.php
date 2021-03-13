<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Auth;

use App\materiel;
class MaterielController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    $res=DB::table('materiels')->where('Nom_coll',Auth::user()->name)->where('delete',0)->get();
    return $res;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
    /*
     typemat: '',
            ref: '',
			marque: '',
			prix: '',
			color: '',
			lieuach: '',
			dateach: '',
			entite: '',
			typeinc: '',
			dateinc: '',
			descri: '
    */

    /**
     * 
     
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $id=DB::table('materiels')
      ->insertGetId(array('typemat'=>$request->get('typemat'),'Nom_coll'=> Auth::user()->name,'ref'=>$request->get('ref'),'marque'=>$request->get('marque'),'prix'=>$request->get('prix'),'couleur'=>$request->get('color'),'lieu_ach'=>$request->get('lieuach'),'date_ach'=>$request->get('dateach'),'entite'=>$request->get('entite'),'Resultat'=>'En attente','delete'=> 0));

     $id2=DB::table('incidents')
     ->insertGetId(array('type_inc'=>$request->get('typeinc'),'nom_coll'=> Auth::user()->name,'id_materiel'=>$id,'Pk_date'=>$request->get('dateinc'),'Des_inc'=>$request->get('descri'),'delete'=> 0));
     
     
    }

     
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
