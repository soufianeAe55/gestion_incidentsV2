<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Auth;

class UpdateMateriels extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $res = DB::table('Materiels')
            ->join('incidents', 'Materiels.id', '=', 'incidents.id_materiel')
            ->Where('Materiels.Nom_coll',Auth::user()->name)
            ->where('Materiels.delete',0)
            ->where('incidents.delete',0)
            ->select('incidents.id_materiel','incidents.id','Materiels.typemat', 'Materiels.Nom_coll', 'Materiels.Ref', 'Materiels.Marque', 'Materiels.prix', 'Materiels.couleur', 'Materiels.lieu_ach', 'Materiels.date_ach', 'Materiels.entite','incidents.type_inc','incidents.Pk_date','incidents.Des_inc')
            ->get();
    
         /*   $res=DB::table('materiels')->where('Nom_coll',Auth::user()->name)->get();*/
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
        $tab=$request->get('materiel');
        $olddata=$request->get('oldData');
        $i=$request->get('index');
        
 $id=DB::table('materiels')->where('id', $olddata['id_materiel'])->update(array('typemat'=>$tab[$i]['typemat'],'ref'=>$tab[$i]['Ref'],'marque'=>$tab[$i]['Marque'],'prix'=>$tab[$i]['prix'],'couleur'=>$tab[$i]['couleur'],'lieu_ach'=>$tab[$i]['lieu_ach'],'date_ach'=>$tab[$i]['date_ach'],'entite'=>$tab[$i]['entite']));
  $id2=DB::table('incidents')->where('id', $olddata['id'])->update(array('type_inc'=>$tab[$i]['type_inc'],'Pk_date'=>$tab[$i]['Pk_date'],'Des_inc'=>$tab[$i]['Des_inc']));       
        return "Mise a Jour reussie";
        
    }
    public function delete(Request $request){

        $old=$request->get('oldData');
        $id=DB::table('materiels')->where('id', $old['id_materiel'])->update(array('delete'=>1));
        $id=DB::table('incidents')->where('id', $old['id'])->update(array('delete'=>1));
        return "Supperssion reussie";
    }
    public function add(Request $request){

        $newdata=$request->get('newData');
$id=DB::table('materiels')
 ->insertGetId(array('typemat'=> $newdata['typemat'],'Nom_coll'=> Auth::user()->name,'ref'=> $newdata['Ref'],'marque'=> $newdata['Marque'],'prix'=> $newdata['prix'],'couleur'=> $newdata['couleur'],'lieu_ach'=> $newdata['lieu_ach'],'date_ach'=> $newdata['date_ach'],'entite'=> $newdata['entite'],'Resultat'=>'En attente','delete'=> 0));
$id2=DB::table('incidents')
 ->insertGetId(array('type_inc'=> $newdata['type_inc'],'nom_coll'=> Auth::user()->name,'id_materiel'=>$id,'Pk_date'=> $newdata['Pk_date'],'Des_inc'=> $newdata['Des_inc'],'delete'=> 0));
        return 'Ajout reussie!';
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
