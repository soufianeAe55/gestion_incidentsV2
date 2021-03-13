<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Auth;
class AdminOperations extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth:admin');
    }
    public function index()
    {
        $res=DB::table('materiels')->where('delete',0)->get();
        return $res;
    }
    public function incid()
    {
        $res=DB::table('incidents')->where('delete',0)->get();
        return $res;
    }
    public function get()
    {
        $res=DB::table('incidents')->select('id','id_materiel','com_SI','Date_Traitement','disponible')->where('delete',0)->get();
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $id=DB::table('materiels')
        ->where('id', $request->get('matnum'))
        ->update(array('Resultat'=>$request->get('resu')));

 $id2=DB::table('incidents')
 ->where('id_materiel', $request->get('matnum'))
 ->update(array('Nom_collabSI'=>Auth::user()->name,'com_SI'=>$request->get('com_SI'),'Date_Traitement'=>$request->get('datetr'),'disponible'=>$request->get('daterec')));  
         return "insertion reussie!!";
    }

    public function updatead(Request $request)
    {
        $tab=$request->get('materiel');
        $olddata=$request->get('oldData');
        $i=$request->get('index');

  $id2=DB::table('incidents')
  ->where('id', $olddata['id'])
  ->update(array('com_SI'=>$tab[$i]['com_SI'],'Date_Traitement'=>$tab[$i]['Date_Traitement'],'disponible'=>$tab[$i]['disponible']));       
        return "Mise a Jour reussie";
    }
    public function delete(Request $request){

        $old=$request->get('oldData');
        $id=DB::table('incidents')
        ->where('id', $old['id'])
        ->update(array('com_SI'=>'','Date_Traitement'=>'','disponible'=>''));
        return "Supperssion reussie";
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
