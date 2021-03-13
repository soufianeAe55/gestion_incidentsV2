<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMaterielsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('materiels', function (Blueprint $table) {
            $table->increments('id');
            $table->string('typemat');
            $table->string('Nom_coll');
            $table->string('Ref');
            $table->string('Marque');
            $table->string('prix');
            $table->string('lieu_ach');
            $table->string('date_ach');
            $table->string('couleur');
            $table->string('entite');
            $table->string('Resultat');
            $table->string('delete');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('materiels');
    }
}
